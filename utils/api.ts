import axios, { AxiosError } from "axios";

declare type DefaultRecord = Record<string, string>;

interface HttpReqRes<T_Param = DefaultRecord, T_Res = unknown > {
    params: T_Param;
    res: T_Res;
}

type HttpRequestInfo = {
    url: string;
    method: "GET";
}

interface RequestOptions <T_Key extends keyof APIInterface> {
    key: T_Key;
    params?: APIInterface[T_Key]["params"];
}

// ! Request & Response
interface APIInterface {
    "tistory.getPost": HttpReqRes<TistoryGetPostReqParam, TistoryCommonRes<TistoryGetPostRes>>;
    "tistory.getCategory": HttpReqRes<TistoryGetCategoryReqParam, TistoryCommonRes<TistoryGetCategoryRes>>;
}

// ! API Request Dict
const URLDict: Record<keyof APIInterface, HttpRequestInfo> = {
    "tistory.getPost": {
        url: "/post/list",
        method: "GET",
    },
    "tistory.getCategory": {
        url: "/category/list",
        method: "GET",
    },
};

// ! API Service URL Map
const SERVICE_URL_MAP: {[key: string]: string} = {
    "tistory": "https://www.tistory.com/apis",
};

const getInstance = ( serviceName: keyof APIInterface ) =>
{
    const instance = axios.create( {
        baseURL: SERVICE_URL_MAP[serviceName.split( "." )[0]],
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
    } );
    return instance;
};

export const getAPIInfo = <T extends keyof APIInterface>( key: T, params?: APIInterface[T]["params"] ) =>
{
    const { method } = URLDict[key];
    const url = `${URLDict[key].url}${
        params
            ? "?" + Object.entries( params ).map( ( [ key, value ] ) => `${key}=${value}` ).join( "&" )
            : ""
    }`;

    return { key, url, method };
};

export async function api<T_Key extends keyof APIInterface>( {
    key,
    params,
}: RequestOptions<T_Key> )
{
    const { url, method } = getAPIInfo( key, params );

    const response = await getInstance( key ).request<APIInterface[T_Key]["res"]>( {
        url,
        method,
    } );

    return response.data;
}

export function hasTistoryError( err: AxiosError<TistoryErrorRes> ): err is AxiosError<TistoryErrorRes>
{
    if( !err.response?.data || typeof err.response.data !== "object" ) return false;

    return "error_message" in err.response.data.tistory;
}