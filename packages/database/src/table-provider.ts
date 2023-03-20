import { getSharedViewRows, QueryParams, PageInfo } from './nocodb';

const FETCHALL_PAGE_SIZE = 200;

export const createTableProvider = <Row>(
	viewId: string,
	defaultQuery?: QueryParams
) => ({
	fetch: (query?: QueryParams) =>
		getSharedViewRows<Row>(viewId, { ...defaultQuery, ...query }),
	fetchAll: (query?: Omit<QueryParams, 'limit' | 'offset'>) =>
		fetchAllRows<Row>(viewId, { ...defaultQuery, ...query }),
});

async function fetchAllRows<Row>(
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
