import { useState, useEffect } from "react";

export function useData(url: string) {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        let ignore = false;
        const response = await fetch(url);
        const json = await response.json();

        if (response.status !== 200) {
          throw new Error("Что-то пошло не так");
        }
  
        if (!ignore) {
          setData(json);
        }
  
        return () => {
          ignore = true;
        };
      } catch (error: unknown) {
        console.error("error", error);
      }
    }

    fetchData();
  }, [url]);

  return data;
}
