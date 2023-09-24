interface TistoryGetPostReqParam {
    access_token: string;
    blogName: string;
    page?: string;
};

interface TistoryGetPostRes {
    page: string;
    count: string;
    totalCount: string;
    posts: TistoryPost[];
};

interface TistoryPost {
    id: string;
    title: string;
    postUrl: string;
    visibility: string;
    categoryId: string;
    comments: string;
    trackbacks: string;
    date: string;
};
