export const onOpenModal = (): void => {
	const elem = document.getElementById('ModalSeeMore') as HTMLElement;
	if (elem) elem!.style.display = 'block';
};

export const onCloseModal = (): void => {
	const elem = document.getElementById('ModalSeeMore') as HTMLElement;
	if (elem) elem!.style.display = 'none';
};
