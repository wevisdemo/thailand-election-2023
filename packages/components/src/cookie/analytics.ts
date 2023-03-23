function isProduction(scriptName: string) {
	const isProduction = !['localhost', 'staging'].some((host) =>
		location.hostname.includes(host)
	);

	if (!isProduction) {
		console.info(
			`${location.hostname} is not a production environment, ignoring ${scriptName} script.`
		);
	}

	return isProduction;
}

export function initPlausible() {
	if (!isProduction('Plausible')) return;

	const script = document.createElement('script');
	script.setAttribute('defer', '');
	script.setAttribute('data-domain', 'election66.wevis.info');
	script.setAttribute('src', 'https://analytics.punchup.world/js/plausible.js');
	document.head.appendChild(script);
}

export function initClarity() {
	if (!isProduction('Clarity')) return;

	(function (c, l, a, r, i, t, y) {
		c[a] =
			c[a] ||
			function () {
				(c[a].q = c[a].q || []).push(arguments);
			};
		t = l.createElement(r);
		t.async = 1;
		t.src = 'https://www.clarity.ms/tag/' + i;
		y = l.getElementsByTagName(r)[0];
		y.parentNode.insertBefore(t, y);
	})(window, document, 'clarity', 'script', 'gd2yu25g1u');
}
