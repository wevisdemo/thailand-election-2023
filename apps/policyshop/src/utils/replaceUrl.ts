export const replaceUrl = (
	router: any,
	title: string | string[] | undefined,
	chooseTopic: string | undefined,
	chooseParty: string | undefined
): void => {
	router.push(
		`/${title}/${chooseTopic}/${chooseParty ? '?party=' + chooseParty : ''}`,
		undefined,
		{
			shallow: true,
		}
	);
};
