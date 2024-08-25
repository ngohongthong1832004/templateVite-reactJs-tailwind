import { LocalStorageKey } from "../constants";
import useLocalStorage from "./useLocalStorage";

const useAuth = () => {
  const [token] = useLocalStorage(LocalStorageKey.access_token, "");

  return !!token;
};

export default useAuth;
