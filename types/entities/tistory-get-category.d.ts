interface TistoryGetCategoryReqParam extends TistoryCommonReqParam {
};

interface TistoryGetCategoryRes {
    categories: TistoryCategory[];
};

interface TistoryCategory {
    id: string;
    name: string;
    parentId: string;
    label: string;
    entries: string;
    entriesInLocal: string;
};