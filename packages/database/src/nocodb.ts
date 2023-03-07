import axios from 'axios';

const BASE_URL = 'https://sheets.wevis.info';
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

// Reference: https://docs.nocodb.com/developer-resources/rest-apis#query-params
export type QueryParams = {
	limit?: number;
	offset?: number;
	where?: string;
	sort?: string;
	fields?: string;
	shuffle?: 1 | 0;
} & {
	[key: string]: string | number;
};

export async function getSharedViewRows(
	viewId: string,
	params?: QueryParams
): Promise<PublicViewResponse['data']> {
	const { data } = await axios.get<PublicViewResponse>(
		`${BASE_URL}/api/v1/db/public/shared-view/${viewId}/rows`,
		{
			params,
		}
	);

	return data.data;
}
