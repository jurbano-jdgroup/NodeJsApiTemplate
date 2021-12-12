export interface Pagination {
    page: number,
    size: number,
    skip: number,
    totalPages: number,
    totalElements: number
}

export const getPaginationObject = (page:any, perPage:any): Pagination => {
    let pageNumber = Number.parseInt(page.toString());
    let perPageNumber = Number.parseInt(perPage.toString());

    if (isNaN(pageNumber)) pageNumber = 1;
    if (pageNumber < 1) pageNumber = 1;
    if (isNaN(perPageNumber)) perPageNumber = 10;
    if (perPageNumber < 1) perPageNumber = 1;

    let skip = pageNumber>1?((pageNumber-1)*perPageNumber):(0);

    return {
        page: pageNumber,
        size: perPageNumber,
        skip: skip,
        totalPages: 1,
        totalElements: 1
    };
};