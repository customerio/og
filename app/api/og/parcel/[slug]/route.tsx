import { ImageResponse } from 'next/og';
// App router includes @vercel/og.
// No need to install it.

import Illustrations from '@/og/components/Illustrations';

export const runtime = 'edge';

export async function GET(
	request: Request,
	{ params }: { params: { slug: string } },
) {
	const slug = params.slug;

	const fontData = await fetch(
		new URL(
			'../../../../../assets/InstrumentSans-SemiBold.ttf',
			import.meta.url,
		),
	).then((res) => res.arrayBuffer());

	try {
		const { searchParams } = new URL(request.url);

		const themeOptions = {
			dark: {
				backgroundColor: '#0D1117',
				color: '#FCFDFF',
			},
			light: {
				backgroundColor: '#FCFDFF',
				color: '#0D1117',
			},
		};

		// ?theme=<theme>
		const hasTheme = searchParams.has('theme');
		const themeValue =
			hasTheme && searchParams.get('theme') != null
				? searchParams.get('theme')
				: 'dark';

		const theme =
			//@ts-ignore
			hasTheme && themeOptions[themeValue]
				? //@ts-ignore
					themeOptions[themeValue]
				: themeOptions['dark'];

		// Title (inferred from slug but can be overrided)
		const hasTitle = slug ? true : searchParams.has('title');
		const title = hasTitle
			? slug
				? slug
				: hasTitle
					? searchParams.get('title')?.slice(0, 100)
					: 'Hello world'
			: 'Hello world';

		// Image
		const hasImage = searchParams.has('image');
		//@ts-ignore
		const image = hasTitle ? searchParams.get('image') : null;

		return new ImageResponse(
			(
				// Modified based on https://tailwindui.com/components/marketing/sections/cta-sections
				<div
					style={{
						height: '100%',
						width: '100%',
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'stretch',
						justifyContent: 'space-between',
						fontFamily: '"InstrumentSans"',
						backgroundColor: theme.backgroundColor,
						color: theme.color,
						padding: '5%',
					}}
				>
					<div tw="flex flex-row items-center justify-start pt-20">
						<Illustrations name={image} />
						<h2 tw="text-6xl tracking-tight font-extrabold">{title}</h2>
					</div>
					<div tw="w-full flex items-center justify-end">
						<svg
							width="96"
							height="96"
							viewBox="0 0 38 38"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M28.3227 24.144L14.3232 26.0085C13.3667 26.1359 12.4149 25.8546 11.6967 25.2323L8.79966 22.7222L4.01442 23.3595C3.63961 23.4094 3.48797 23.8866 3.76942 24.1305L12.5567 31.7441C13.0055 32.133 13.6004 32.3088 14.1982 32.2292L33.9859 29.5939C34.3695 29.5428 34.5156 29.0478 34.2169 28.8113L28.3227 24.144Z"
								fill="#198CFF"
							/>
							<path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M28.322 16.6207L14.3232 18.485C13.3667 18.6124 12.4149 18.3311 11.6967 17.7088L8.80026 15.1992L4.01442 15.8366C3.63961 15.8865 3.48797 16.3637 3.76942 16.6076L12.5567 24.2212C13.0055 24.6102 13.6004 24.786 14.1982 24.7064L33.9859 22.071C34.3695 22.02 34.5156 21.525 34.2169 21.2884L28.322 16.6207Z"
								fill="#389BFF"
							/>
							<path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M4.01402 8.30944L23.0908 5.7688C23.6578 5.69329 24.2236 5.84706 24.6651 6.19669L34.2193 13.7621C34.5207 14.0007 34.3733 14.5001 33.9863 14.5517L14.1986 17.187C13.5997 17.2667 13.0037 17.0906 12.5541 16.701L3.76682 9.08735C3.48284 8.8413 3.63585 8.3598 4.01402 8.30944Z"
								fill="#56ABFF"
							/>
						</svg>
					</div>
				</div>
			),
			{
				width: 1200,
				height: 630,
				fonts: [
					{
						name: 'InstrumentSans',
						data: fontData,
						style: 'normal',
					},
				],
			},
		);
	} catch (e: any) {
		console.log(`${e.message}`);
		return new Response(`Failed to generate the image`, {
			status: 500,
		});
	}
}
