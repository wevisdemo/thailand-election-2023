import { getSharedViewRows, QueryParams, PageInfo } from './nocodb';

const FETCHALL_PAGE_SIZE = 200;

export const createTableProvider = (
	viewId: string,
	defaultQuery?: QueryParams
) => ({
	fetch: (query?: QueryParams) =>
		getSharedViewRows(viewId, { ...defaultQuery, ...query }),
	fetchAll: (query?: Omit<QueryParams, 'limit' | 'offset'>) =>
		fetchAllRows(viewId, { ...defaultQuery, ...query }),
});

async function fetchAllRows(
	viewId: string,
	query?: QueryParams
): Promise<unknown[]> {
	let rows: Record<string, unknown>[] = [];
	let currentPageInfo: PageInfo | null = null;

	do {
		const data = await getSharedViewRows(viewId, {
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
