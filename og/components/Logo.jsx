export default function Logo({ fill }) {
	const color =
		fill === 'verdant'
			? '#E4FFCE'
			: fill === 'evergreen'
				? '#0B353B'
				: '#E4FFCE';
	return (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 104.5 104.5">
			<g>
				<g strokeWidth="0" fill={color}>
					<path d="M78.3999 0L52.2 0 52.2 26.1001 78.3999 52.1997 52.2 78.3999 52.2 104.5 78.3999 104.5 104.5 78.3999 104.5 26.1001 78.3999 0z"></path>
					<path d="M39.2 13L26.1001 0 0 0 0 26.1001 13 39.1997 26.1001 52.1997 52.2 26.1001 39.2 13z"></path>
					<path d="M13 65.2998L0 78.3999 0 104.5 26.1001 104.5 39.2 91.3999 52.2 78.3999 26.1001 52.1997 13 65.2998z"></path>
				</g>
			</g>
		</svg>
	);
}
