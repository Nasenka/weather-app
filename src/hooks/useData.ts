import { useState, useEffect } from "react";
import CustomError from "../utils/CustomError";

export function useData<TData>(url: string): { data: TData | null, error: CustomError | Error | null } {
  const [data, setData] = useState<TData | null>(null);
  const [error, setError] = useState<CustomError | Error | null>(null);

  useEffect(() => {
    async function fetchData() {
      let ignore = false;

      try {
        const response = await fetch(url);
        const json = await response.json();

        if (response.status !== 200) {
          console.log("json", json);

          throw new CustomError(response.status, json);
        }

        if (!ignore) {
          setData(json as TData);
        }
      } catch (error: unknown) {
        setError(error as (CustomError | Error));
      }

      return () => {
        ignore = true;
      };
    }

    fetchData();
  }, [url]);

  return { data, error };
}
