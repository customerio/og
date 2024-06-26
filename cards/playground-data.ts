export type Tabs = {
	[x: string]: string;
};

const logoUrl = '/mark.svg';

const playgroundTabs: Tabs = {
	default: `
// Scroll down until you see the lines with "Edit this"
() => {

	function Illustrations(name) {
	switch (name) {
    case 'external-image':
      return "https://cdn.sanity.io/images/onirtmj2/production/79b0efb5ca7b91e4b44b55c50e135f071084e227-1162x1746.png?auto=format&fit=max&w=3840&q=80"
    case 'get-started':
      return "https://og-cio.vercel.app/illustrations/recipes.svg"
    case 'overview':
      return "https://og-cio.vercel.app/illustrations/recipes.svg"
    case 'accounts-and-workspaces':
      return "https://og-cio.vercel.app/illustrations/accounts-and-workspaces.svg"
    case 'objects-data':
      return "https://og-cio.vercel.app/illustrations/accounts-and-workspaces.svg"
    case 'our-company':
      return "https://og-cio.vercel.app/illustrations/our-company.svg"
    case 'api':
      return "https://og-cio.vercel.app/illustrations/api.svg"
    case 'cdp':
      return "https://og-cio.vercel.app/illustrations/cdp.svg"
    case 'people':
      return "https://og-cio.vercel.app/illustrations/people.svg"
    case 'customer-data':
      return "https://og-cio.vercel.app/illustrations/customer-data.svg"
    case 'liquid':
      return "https://og-cio.vercel.app/illustrations/customer-data.svg"
    case 'campaigns-and-workflows':
      return "https://og-cio.vercel.app/illustrations/messaging.svg"
    case 'messages-and-webhooks':
      return "https://og-cio.vercel.app/illustrations/messaging.svg"
    case 'integration':
      return "https://og-cio.vercel.app/illustrations/integration.svg"
    case 'integrations':
      return "https://og-cio.vercel.app/illustrations/integrations.svg"
    case 'metrics':case 'metrics1':
      return "https://og-cio.vercel.app/illustrations/metrics1.svg"
    case 'release-notes':
      return "https://og-cio.vercel.app/illustrations/release-notes.svg"
    case 'metrics2':
      return "https://og-cio.vercel.app/illustrations/metrics2.svg"
    case 'sdk':
      return "https://og-cio.vercel.app/illustrations/integrations.svg"
    case 'segmentation':
      return "https://og-cio.vercel.app/illustrations/segmentation.svg"
    case 'grid':
      return "https://og-cio.vercel.app/illustrations/grid.svg"
    case 'data-integrations':
      return "https://og-cio.vercel.app/illustrations/data-integrations.svg"
    case 'no-image':
      return "https://og-cio.vercel.app/illustrations/no-image.svg"
    case null:
      return null;
	}
}

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

	const theme = themeOptions["verdant"] // Edit this to change colors
	const title = "Hello world" // Edit this to change the displayed text
	const image = "get-started" // Edit this to change the displayed image
 
  return (
    <div
					style={{
						height: '100%',
						width: '100%',
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'stretch',
						justifyContent: 'space-between',
						backgroundColor: theme.backgroundColor,
						color: theme.color,
						padding: '5%',
					}}
				>
					<div tw="flex flex-row items-center justify-start pt-20">
						<img
					src={Illustrations(image)}
					width="400"
					height="400"
					tw="h-64 w-64 mx-20"
				/>
						<h2 tw="text-6xl tracking-tight font-extrabold">{title}</h2>
					</div>
					<div tw="w-full flex items-center justify-end">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 104.5 104.5">
			<g>
				<g strokeWidth="0" fill={theme.color}>
					<path d="M78.3999 0L52.2 0 52.2 26.1001 78.3999 52.1997 52.2 78.3999 52.2 104.5 78.3999 104.5 104.5 78.3999 104.5 26.1001 78.3999 0z"></path>
					<path d="M39.2 13L26.1001 0 0 0 0 26.1001 13 39.1997 26.1001 52.1997 52.2 26.1001 39.2 13z"></path>
					<path d="M13 65.2998L0 78.3999 0 104.5 26.1001 104.5 39.2 91.3999 52.2 78.3999 26.1001 52.1997 13 65.2998z"></path>
				</g>
			</g>
		</svg>
					</div>
				</div>
  )
}  
      
`,
	helloworld: `<div
  style={{
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    fontSize: 32,
    fontWeight: 600,
  }}
>
  <svg
    width="75"
    viewBox="0 0 75 65"
    fill="#000"
    style={{ margin: '0 75px' }}
  >
    <path d="M37.59.25l36.95 64H.64l36.95-64z"></path>
  </svg>
  <div style={{ marginTop: 40 }}>Hello, World</div>
</div>
`,
	'Tailwind (experimental)': `// Modified based on https://tailwindui.com/components/marketing/sections/cta-sections

<div tw="flex flex-col w-full h-full items-center justify-center bg-white">
  <div tw="bg-gray-50 flex w-full">
    <div tw="flex flex-col md:flex-row w-full py-12 px-4 md:items-center justify-between p-8">
      <h2 tw="flex flex-col text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 text-left">
        <span>Ready to dive in?</span>
        <span tw="text-indigo-600">Start your free trial today.</span>
      </h2>
      <div tw="mt-8 flex md:mt-0">
        <div tw="flex rounded-md shadow">
          <a tw="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white">Get started</a>
        </div>
        <div tw="ml-3 flex rounded-md shadow">
          <a tw="flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-indigo-600">Learn more</a>
        </div>
      </div>
    </div>
  </div>
</div>`,
	Gradients: `<div
  style={{
    display: 'flex',
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundImage: 'linear-gradient(to bottom, #dbf4ff, #fff1f1)',
    fontSize: 60,
    letterSpacing: -2,
    fontWeight: 700,
    textAlign: 'center',
  }}
  >
  <div
    style={{
      backgroundImage: 'linear-gradient(90deg, rgb(0, 124, 240), rgb(0, 223, 216))',
      backgroundClip: 'text',
      '-webkit-background-clip': 'text',
      color: 'transparent',
    }}
  >
    Develop
  </div>
  <div
    style={{
      backgroundImage: 'linear-gradient(90deg, rgb(121, 40, 202), rgb(255, 0, 128))',
      backgroundClip: 'text',
      '-webkit-background-clip': 'text',
      color: 'transparent',
    }}
  >
    Preview
  </div>
  <div
    style={{
      backgroundImage: 'linear-gradient(90deg, rgb(255, 77, 77), rgb(249, 203, 40))',
      backgroundClip: 'text',
      '-webkit-background-clip': 'text',
      color: 'transparent',
    }}
  >
    Ship
  </div>
</div>
`,
	'Color Models': `<div
  style={{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    fontSize: 24,
    fontWeight: 600,
    textAlign: 'left',
    padding: 70,
    color: 'red',
    backgroundImage: 'linear-gradient(to right, #334d50, #cbcaa5)',
    height: '100%',
    width: '100%'
  }}
>

  <div style={{ display: 'flex', flexDirection: 'column' }}>
    <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '15px', color: '#fff' }}>
      #fff
      <div style={{ fontWeight: 100 }}>hexadecimal</div>
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '15px', color: '#ffffff70' }}>
      #ffffff70
      <div style={{ fontWeight: 100 }}>hexadecimal + transparency</div>
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '15px', color: 'rgb(45, 45, 45)' }}>
      rgb(45, 45, 45)
      <div style={{ fontWeight: 100 }}>rgb</div>
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '15px', color: 'rgb(45, 45, 45, 0.3)' }}>
      rgb(45, 45, 45, 0.3)
      <div style={{ fontWeight: 100 }}>rgba</div>
    </div>
  </div>

  <div style={{ display: 'flex', flexDirection: 'column' }}>
    <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '15px', color: 'hsl(186, 22%, 26%)' }}>
      hsl(186, 22%, 26%)
      <div style={{ fontWeight: 100 }}>hsl</div>
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '15px', color: 'hsla(186, 22%, 26%, 40%)' }}>
      hsla(186, 22%, 26%, 40%)
      <div style={{ fontWeight: 100 }}>hsla</div>
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '15px', color: 'white' }}>
      "white"
      <div style={{ fontWeight: 100 }}>predefined color names</div>
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '15px', color: 'currentcolor' }}>
      should be red
      <div style={{ fontWeight: 100 }}>"currentcolor"</div>
    </div>
  </div>
</div>`,
	Advanced: `// Fallback fonts and Emoji are dynamically loaded
// from Google Fonts and CDNs in this demo.

// You can also return a function component in the playground.
() => {
  function Label({ children }) {
    return <label style={{
      fontSize: 15,
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: 1,
      margin: '25px 0 10px',
      color: 'gray',
    }}>
      {children}
    </label>
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        width: '100%',
        padding: '10px 20px',
        justifyContent: 'center',
        fontFamily: 'Inter, "Material Icons"',
        fontSize: 28,
        backgroundColor: 'white',
      }}
      >
      <Label>Language & Font subsets</Label>
      <div>
        Hello! 你好! 안녕! こんにちは! Χαίρετε! Hallå!
      </div>
      <Label>Emoji</Label>
      <div>
        👋 😄 🎉 🎄 🦋
      </div>
      <Label>Icon font</Label>
      <div>
          &#xe766; &#xeb9b; &#xf089;
      </div>
      <Label>Lang attribute</Label>
      <div style={{ display: 'flex' }}>
        <span lang="ja-JP">
          骨茶
        </span>/
        <span lang="zh-CN">
          骨茶
        </span>/
        <span lang="zh-TW">
          骨茶
        </span>/
        <span lang="zh-HK">
          骨茶
        </span>
      </div>
    </div>
  )
}  
`,
};

export default playgroundTabs;
