import { RequestParams } from 'nocodb-sdk';
import { api, ListQuery, PageInfo, PublicViewResponse } from './nocodb';

const FETCHALL_PAGE_SIZE = 200;

export const createTableProvider = (viewId: string) => ({
	fetch: (query?: ListQuery, params?: RequestParams) =>
		fetchRows(viewId, query, params),
	fetchAll: (params?: RequestParams) => fetchAllRows(viewId, params),
});

async function fetchRows(
	viewId: string,
	query?: ListQuery,
	params?: RequestParams
): Promise<PublicViewResponse['data']> {
	const {
		data: { list, pageInfo },
	}: PublicViewResponse = await api.public.dataList(
		viewId,
		{
			limit: query?.limit ? `${query.limit}` : undefined,
			offset: query?.offset ? `${query.offset}` : undefined,
		},
		params
	);

	return {
		list: list.map((object) =>
			Object.entries(object).reduce(
				(obj, [key, value]) => ({
					...obj,
					[key]:
						value === ''
							? null
							: typeof value !== 'string' || isNaN(+value)
							? value
							: +value,
				}),
				{}
			)
		),
		pageInfo,
	};
}

async function fetchAllRows(
	viewId: string,
	params?: RequestParams
): Promise<unknown[]> {
	let rows: Record<string, unknown>[] = [];
	let currentPageInfo: PageInfo | null = null;

	do {
		const data = await fetchRows(
			viewId,
			{
				offset: currentPageInfo
					? currentPageInfo.page * currentPageInfo.pageSize
					: 0,
				limit: FETCHALL_PAGE_SIZE,
			},
			params
		);

		rows.push(...data.list);
		currentPageInfo = data.pageInfo;
	} while (!currentPageInfo?.isLastPage);

	return rows;
}
