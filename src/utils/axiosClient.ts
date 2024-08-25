import { LocalStorageKey } from "../constants";
import axios from "axios";
import { clearLocalStorage, getItemLocalStorage, getItemLocalStorageWithExpiry } from "./storages";

let isShowingError = false;
const axiosClient = axios.create({
  baseURL: "https://pine.vn.id/",
  headers: {
    "Content-Type": "application/json",
  },
});

axiosClient.interceptors.request.use(
  (config) => {
    const accessToken = getItemLocalStorage(LocalStorageKey.access_token);
    // const refreshToken = getItemLocalStorageWithExpiry(LocalStorageKey.refresh_token);

    config.headers!.Authorization = `Bearer ${accessToken}`;

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosClient.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const regex = /(5)/g;
    const status = error?.response?.status;
    const data = error?.response?.data;
    const path = data?.path;
    const message = data?.message;

    if (error.message === "Network Error") {
      return "Vui lòng kiểm tra lại kết nối mạng";
    }

    if (status === 401 && path?.includes("refresh-token")) {
      clearLocalStorage();
      //   notificationError(getErrorMessage(message));

      return null;
    }

    if (status === 401 || message === "Unauthorized") {
      clearLocalStorage();
      //   notificationError(getErrorMessage(message));

      return null;
    }

    if (
      error?.config.method !== "get" &&
      !error?.config.headers.disableAlertMessage &&
      !error?.config.headers.disableAlertErrorMessage
    ) {
      //   return notificationError(getErrorMessage(error));
      return error;
    }

    if (!status || regex.test(status)) {
      if (!isShowingError) {
        // notificationError("Hệ thống lỗi. Vui lòng thử lại!");
        isShowingError = true;
      } else {
        setTimeout(() => {
          isShowingError = false;
        }, 2000);
      }
    }

    return Promise.reject(error);
  }
);

export default axiosClient;
