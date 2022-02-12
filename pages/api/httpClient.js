import { useState } from "react";
import { api } from "./baseUrl";

export function useGetApi() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchData(endPoint, queryParams = "") {
    setIsLoading(true);
    let { data } = await api.get(endPoint);
    setData(data);
    setIsLoading(false);
  }
  return [fetchData, data, isLoading];
}
