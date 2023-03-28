import axios from 'axios';

const BASE_URL = 'https://sheets.wevis.info';
const FETCHALL_PAGE_SIZE = 200;

export interface PageInfo {
	totalRows: number;
	page: number;
	pageSize: number;
	isFirstPage: boolean;
	isLastPage: boolean;
}

export interface PublicViewResponse<Row = Record<string, unknown>> {
	data: {
		list: Row[];
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

export async function getSharedViewRows<Row>(
	viewId: string,
	params?: QueryParams
): Promise<PublicViewResponse<Row>['data']> {
	const { data } = await axios.get<PublicViewResponse<Row>>(
		`${BASE_URL}/api/v1/db/public/shared-view/${viewId}/rows`,
		{
			params,
		}
	);

	return data.data;
}

export async function fetchAllRows<Row>(
	viewId: string,
	query?: QueryParams
): Promise<Row[]> {
	let rows: Row[] = [];
	let currentPageInfo: PageInfo | null = null;

	do {
		const data = await getSharedViewRows<Row>(viewId, {
			...query,
			offset: currentPageInfo
				? currentPageInfo.page * currentPageInfo.pageSize
				: 0,
			limit: FETCHALL_PAGE_SIZE,
		});

		rows.push(...data.list);
		currentPageInfo = data.pageInfo;
	} while (!currentPageInfo?.isLastPage);

	return rows;
}
