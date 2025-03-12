import axios from "axios";
import {ApiResponse} from "@/lib/types/ApiResponse.ts";
import {ApiCall_Mock, ApiCallWithToken_Mock} from "@/service/actions/FixtureAction.ts";
import UrlTransformer from "@/service/UrlTransformer.ts";

const isFixturesEnabled = import.meta.env.VITE_ENABLE_FIXTURES === "true";

export type ApiCallFnType = () => ({
  get<TData>(url: string, params?: Record<string, any>): Promise<ApiResponse<TData>>;
  post<TPayload, TData>(url: string, payload: TPayload): Promise<ApiResponse<TData>>;
});

export type ApiCallWithTokenFnType = (jwt: string) => ({
  get<TData>(url: string): Promise<ApiResponse<TData>>;
  post<TPayload, TData>(url: string, payload: TPayload): Promise<ApiResponse<TData>>;
});

export const ApiCall: ApiCallFnType = isFixturesEnabled ? ApiCall_Mock : () => ({
  get: async <TData>(url: string, params?: Record<string, any>): Promise<ApiResponse<TData>> => {
    let finalUrl = url;
    if (params) {
      finalUrl += "?" + UrlTransformer.encodeFromObject(params);
    }

    try {
      return {
        data: await axios.get(finalUrl)
      };
    } catch (error) {
      console.error('Error getting data:', error);
      return {
        error: error
      };
    }
  },
  post: async <TPayload, TData>(url: string, payload: TPayload): Promise<ApiResponse<TData>> => {
    try {
      return {
        data: await axios.post(url, payload)
      };
    } catch (error) {
      console.error('Error posting data:', error);
      return {
        error: error
      };
    }
  }
});

/** @todo: implement jwt auth when needed */
export const ApiCallWithToken: ApiCallWithTokenFnType = isFixturesEnabled ? ApiCallWithToken_Mock : (jwt: string) => {
  const headers = {
    Authorization: `Bearer ${jwt}`
  };

  return {
    get: async <TData>(url: string, params?: Record<string, any>): Promise<ApiResponse<TData>> => {
      let finalUrl = url;
      if (params) {
        finalUrl += "?" + UrlTransformer.encodeFromObject(params);
      }

      try {
        return {
          data: await axios.get(finalUrl, {
            headers
          })
        };
      } catch (error) {
        console.error('Error getting data:', error);
        return {
          error: error
        };
      }
    },
    post: async <TPayload, TData>(url: string, payload: TPayload): Promise<ApiResponse<TData>> => {
      try {
        return {
          data: await axios.post(url, payload, {
            headers
          })
        };
      } catch (error) {
        console.error('Error posting data:', error);
        return {
          error: error
        };
      }
    }
  };
};
