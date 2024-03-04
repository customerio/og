import '@/styles.css'
import Head from "next/head"
import Script from "next/script"

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
		<Head>
			<title>Vercel OG Image Playground</title>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no'
        />
        <meta name='theme-color' content='#fff' />
        <meta name='title' content='Vercel OG Image Playground' />
        <meta
          name='description'
          content='Generate Open Graph images with Vercel’s Edge Function.'
        />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://og-playground.vercel.app/' />
        <meta property='og:title' content='Vercel OG Image Playground' />
        <meta
          property='og:description'
          content='Generate Open Graph images with Vercel’s Edge Function.'
        />
        <meta
          property='og:image'
          content='https://og-playground.vercel.app/og.png'
        />
        <meta property='twitter:card' content='summary_large_image' />
        <meta
          property='twitter:url'
          content='https://og-playground.vercel.app/'
        />
        <meta property='twitter:title' content='Vercel OG Image Playground' />
        <meta
          property='twitter:description'
          content='Generate Open Graph images with Vercel’s Edge Function.'
        />
        <meta
          property='twitter:image'
          content='https://og-playground.vercel.app/og.png'
        />
        <link
          rel='preload'
          href='/inter-latin-ext-400-normal.woff'
          as='fetch'
          crossOrigin='anonymous'
        />
        <link
          rel='preload'
          href='/inter-latin-ext-700-normal.woff'
          as='fetch'
          crossOrigin='anonymous'
        />
        <link
          rel='preload'
          href='/material-icons-base-400-normal.woff'
          as='fetch'
          crossOrigin='anonymous'
        />
        <link
          rel='preload'
          href='/iaw-mono-var.woff2'
          as='fetch'
          crossOrigin='anonymous'
        />
        <link rel='shortcut icon' href='/favicon.ico' type='image/x-icon' />
        <link rel='icon' href='/favicon.ico' type='image/x-icon' />
		</Head>
      <body>{children}</body>
		<Script />
    </html>
  )
}