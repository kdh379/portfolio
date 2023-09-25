interface TistoryCommonRes<T_Item> {
    tistory: {
        status: string;
        item: T_Item & TistoryCommonItem;
    };
}

interface TistoryCommonItem {
    url: string;
    secondaryUrl: string;
}

interface TistoryErrorRes extends TistoryCommonRes<null> {
    tistory: {
        error_message: string;
    }
}

interface TistoryCommonReqParam {
    access_token: string;
    blogName: string;
    output: "json";
}

