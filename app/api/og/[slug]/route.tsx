import { ImageResponse } from 'next/og';
// App router includes @vercel/og.
// No need to install it.

import Illustrations from '@/og/components/Illustrations';
import Logo from '@/og/components/Logo';

export const runtime = 'edge';

export async function GET(
	request: Request,
	{ params }: { params: { slug: string } },
) {
	const slug = params.slug;

	const fontData = await fetch(
		new URL('../../../../assets/InstrumentSans-SemiBold.ttf', import.meta.url),
	).then((res) => res.arrayBuffer());

	try {
		const { searchParams } = new URL(request.url);

		const themeOptions = {
			verdant: {
				fill: 'verdant',
				backgroundColor: '#0B353B',
				color: '#E4FFCE',
			},
			evergreen: {
				fill: 'evergreen',
				backgroundColor: '#E4FFCE',
				color: '#0B353B',
			},
			dark: {
				fill: 'verdant',
				backgroundColor: '#0B353B',
				color: '#E4FFCE',
			},
			light: {
				fill: 'evergreen',
				backgroundColor: '#E4FFCE',
				color: '#0B353B',
			},
		};

		// ?theme=<theme>
		const hasTheme = searchParams.has('theme');
		const themeValue =
			hasTheme && searchParams.get('theme') != null
				? searchParams.get('theme')
				: 'verdant';

		const theme =
			//@ts-ignore
			hasTheme && themeOptions[themeValue]
				? //@ts-ignore
					themeOptions[themeValue]
				: themeOptions['verdant'];

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
						<Logo fill={theme.fill} />
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
