'use client';

import ReactDOM from 'react-dom';

export function PreloadResources() {
	ReactDOM.preload('/InstrumentSans-Regular.woff', {
		as: 'fetch',
	});
	ReactDOM.preload('/InstrumentSans-Bold.woff', {
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
