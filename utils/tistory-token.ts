export const getTistoryAccessToken = () => {

    const accessToken = process.env.NODE_ENV === "development" ? process.env.NEXT_PUBLIC_TISTORY_ACCESS_TOKEN : process.env.TISTORY_ACCESS_TOKEN;
    if ( !accessToken ) {
        throw new Error( "TISTORY_ACCESS_TOKEN is not defined" );
    }

    return accessToken;
};