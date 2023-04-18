import axios from 'axios';

const BASE_URL = 'https://sheets.wevis.info';
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

	return {
		...data.data,
		list: data.data.list.map(parseRecord),
	};
}

function parseRecord<Row>(record: Row) {
	if (record['Images']) {
		return {
			...record,
			Images: (record['Images'] as unknown[]).map(({ path, ...rest }) =>
				path
					? {
							...rest,
							url: `${BASE_URL}/${path}`,
					  }
					: rest
			),
		};
	}

	return record;
}
