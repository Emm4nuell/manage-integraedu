import { useEffect, useState } from "react";

export default function useAxios({
  axiosinstance,
  method,
  url,
  otherConfig = {},
}) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axiosinstance[method.toLowerCase()](url, {
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
