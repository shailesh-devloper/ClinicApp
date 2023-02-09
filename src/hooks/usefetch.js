import { useEffect, useState } from "react";

const useFetch = (configObj) => {
  const { axiosInstance, method, url, requestConfig = {} } = configObj;
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance[method.toLowerCase()](url, {
          ...requestConfig,
        });
        setData(response.data);
      } catch (err) {
        console.log(err.message);
        setError(err);
      }
    };
    fetchData();
  }, []);
  return [data, error];
};

export default useFetch;
