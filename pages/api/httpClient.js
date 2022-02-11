import { useState } from "react";
import { api } from "./baseUrl";

export function useGetApi() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  async function fetchData(url) {
    setIsLoading(true);
    let {
      data: {
        data: { results },
      },
    } = await api.get(url);
    setData(results);
    setIsLoading(false);
  }
  return [fetchData, data, isLoading];
}
