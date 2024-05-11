/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
import Axios from "axios";
import { useCallback, useEffect, useState } from "react";

export const useQueriesMutation = ({ enabled = true, prefixUrl = "" } = {}) => {
  const [data, setData] = useState({
    data: null,
    isLoading: false,
  });

  const fetchingData = useCallback(async ({ prefixUrl = "" } = {}) => {
    setData({ ...data, isLoading: true });
    try {
      const response = await Axios({
        method: "GET",
        url: `${process.env.NEXT_PUBLIC_API}${prefixUrl}`,
      });

      setData({
        ...data,
        data: response?.data,
        isLoading: false,
      });
    } catch (error) {
      setData({ ...data, isLoading: false });
    }
  }, []);

  useEffect(() => {
    if (enabled && !!prefixUrl) {
      fetchingData({ prefixUrl });
    }
  }, [enabled, prefixUrl]);

  return { ...data, fetchingData };
};
