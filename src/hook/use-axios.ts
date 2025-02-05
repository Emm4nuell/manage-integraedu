import { AxiosInstance } from "axios";
import { useEffect, useState } from "react";

interface UseAxiosProps {
  axiosinstance: AxiosInstance; // Specify the type for axiosinstance
  method: "get" | "post" | "put" | "delete";
  url: string;
  otherConfig?: object; // optional property
}

export default function useAxios({
  axiosinstance,
  method,
  url,
  otherConfig = {},
}: UseAxiosProps) {
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axiosinstance[method](url, {
          ...otherConfig,
        });
        console.log(res.data);
        setData(res.data);
      } catch (error) {
        if (error instanceof Error) {
          console.log(error.message);
          setError(error.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return [data, loading, error];
}
