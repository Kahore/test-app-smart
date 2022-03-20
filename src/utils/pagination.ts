import { AxiosResponse } from "axios";

export default function pagination(response: AxiosResponse<any>) {
  return {
    items: response.data.data.results,
    total: response.data.data.total,
    limit: response.data.data.limit,
  };
}
