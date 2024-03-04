'use client';

import ReactDOM from 'react-dom';

export function PreloadResources() {
	ReactDOM.preload('/inter-latin-ext-400-normal.woff', {
		as: 'fetch',
	});
	ReactDOM.preload('/inter-latin-ext-700-normal.woff', {
		as: 'fetch',
	});
	ReactDOM.preload('/material-icons-base-400-normal.woff', {
		as: 'fetch',
	});
	ReactDOM.preload('/iaw-mono-var.woff2', {
		as: 'fetch',
	});

	return null;
}
