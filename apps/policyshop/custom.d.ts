import * as React from 'react';

declare global {
	namespace JSX {
		interface IntrinsicElements {
			'election-header': React.DetailedHTMLProps<
				React.HTMLAttributes<HTMLElement>,
				HTMLElement
			>;
		}
	}
}
