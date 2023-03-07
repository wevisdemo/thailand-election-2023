import { Api } from 'nocodb-sdk';

export interface PageInfo {
	totalRows: number;
	page: number;
	pageSize: number;
	isFirstPage: boolean;
	isLastPage: boolean;
}

export interface PublicViewResponse {
	data: {
		list: Record<string, unknown>[];
		pageInfo: PageInfo;
	};
}

export interface ListQuery {
	limit?: number;
	offset?: number;
}

export const api = new Api({
	baseURL: 'https://sheets.wevis.info',
});
