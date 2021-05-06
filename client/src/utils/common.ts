export type ListReq = {
    id?: number | null;
    only?: boolean;
    page?: number | null;
    pageSize?: number | null;
    include?: string | null;
    append?: string | null;
    sortType?: 'asc' | 'desc' | null;
    sortTarget?: string | null;
};

export type ListRes = {
    total: number;
};

export type CreatedRes = {
    id: number;
};
