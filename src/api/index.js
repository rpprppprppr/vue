import axios from "axios";
import memoizeOne from "memoize-one";
import { stringify } from "qs";
import { requestLogger, responseLogger } from "axios-logger";

const DEFAULT_REQUEST_TIMEOUT = 10000;

function getApi(config) {
    const instance = axios.create({
        baseURL: `${import.meta.env.VITE_BASE_API_URL}/api/`,
        timeout: DEFAULT_REQUEST_TIMEOUT,
        paramsSerializer: (params) => 
            stringify(params, { arrayFormat: "repeat" }).replaceAll(/\+/g, "%20"),
        ...config,
    });

    if (import.meta.env.MODE !== "production") {
        instance.interceptors.request.use(requestLogger);
        instance.interceptors.response.use(responseLogger);
    }

    return instance;
}

export const useApi = memoizeOne(getApi);