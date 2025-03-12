import {HttpStatusCode} from "axios";

export interface ApiResponse<TData> {
  data?: TData;
  error?: any;
  status?: HttpStatusCode;
}
