interface TistoryCommonRes<T_Item> {
    tistory: {
        status: string;
        item: TistoryCommonItem<T_Item>;
    };
}

interface TistoryCommonItem<T_Item> {
    url: string;
    secondaryUrl: string;
}

interface TistoryErrorRes extends TistoryCommonRes<null> {
    tistory: {
        error_message: string;
    }
}

