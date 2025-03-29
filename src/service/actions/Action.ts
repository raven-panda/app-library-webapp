import axios, { AxiosError } from 'axios';
import { ApiResponse } from '@/lib/types/ApiResponse.ts';
import UrlTransformer from '@/service/UrlTransformer.ts';

const ApiCall_Mock = () => {
  throw new Error('Not implemented');
};

const ApiCallWithToken_Mock = () => {
  throw new Error('Not implemented');
};

const isFixturesEnabled = import.meta.env.VITE_ENABLE_FIXTURES === 'true';

export type ApiCallFnType = () => {
  get<TData>(
    url: string,
    params?: Record<string, any>,
  ): Promise<ApiResponse<TData>>;
  post<TPayload, TData>(
    url: string,
    payload: TPayload,
  ): Promise<ApiResponse<TData>>;
};

export type ApiCallWithTokenFnType = (jwt: string) => {
  get<TData>(
    url: string,
    params?: Record<string, any>,
  ): Promise<ApiResponse<TData>>;
  post<TPayload, TData>(
    url: string,
    payload: TPayload,
  ): Promise<ApiResponse<TData>>;
};

export const ApiCall: ApiCallFnType = isFixturesEnabled
  ? ApiCall_Mock
  : () => ({
      get: async <TData>(
        url: string,
        params?: Record<string, any>,
      ): Promise<ApiResponse<TData>> => {
        let finalUrl = url;
        if (params) {
          finalUrl += '?' + UrlTransformer.encodeFromObject(params);
        }

        try {
          const { data, status } = await axios.get(finalUrl);
          return { data, status };
        } catch (error) {
          console.error('Error getting data :', (error as any).message);
          return {
            error: (error as any).message,
            status: (error as AxiosError).status,
          };
        }
      },
      post: async <TPayload, TData>(
        url: string,
        payload: TPayload,
      ): Promise<ApiResponse<TData>> => {
        try {
          const { data, status } = await axios.post(url, payload);
          return { data, status };
        } catch (error) {
          console.error('Error posting data :', (error as any).message);
          return {
            error: (error as any).message,
            status: (error as any).status,
          };
        }
      },
    });

/** @todo: implement jwt auth when needed */
export const ApiCallWithToken: ApiCallWithTokenFnType = isFixturesEnabled
  ? ApiCallWithToken_Mock
  : (jwt: string) => {
      const headers = {
        Authorization: `Bearer ${jwt}`,
      };

      return {
        get: async <TData>(
          url: string,
          params?: Record<string, any>,
        ): Promise<ApiResponse<TData>> => {
          let finalUrl = url;
          if (params) {
            finalUrl += '?' + UrlTransformer.encodeFromObject(params);
          }

          try {
            const { data, status } = await axios.get(finalUrl, {
              headers,
            });
            return { data, status };
          } catch (error) {
            console.error('Error getting data :', (error as any).message);
            return {
              error: (error as any).message,
              status: (error as any).status,
            };
          }
        },
        post: async <TPayload, TData>(
          url: string,
          payload: TPayload,
        ): Promise<ApiResponse<TData>> => {
          try {
            const { data, status } = await axios.post(url, payload, {
              headers,
            });
            return { data, status };
          } catch (error) {
            console.error('Error posting data :', (error as any).message);
            return {
              error: (error as any).message,
              status: (error as any).status,
            };
          }
        },
      };
    };
