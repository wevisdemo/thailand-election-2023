export const groupBy = (array: any, key: string) => {
	return array.reduce(function (rv: any, obj: any) {
		(rv[obj[key]] = rv[obj[key]] || []).push(obj);
		return rv;
	}, {});
};
