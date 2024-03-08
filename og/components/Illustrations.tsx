export default function Illustrations({ name }: { name: string | null }) {
	switch (name) {
		case 'Getting Started':
			return (
				<img
					src={`${process.env.WWW}/illustrations/getting-started.svg`}
					width="400"
					height="400"
					tw="h-64 w-64 mx-20"
				/>
			);

		case 'Accounts':
			return (
				<img
					src={`${process.env.WWW}/illustrations/accounts-and-workspaces.svg`}
					width="400"
					height="400"
					tw="h-64 w-64 mx-20"
				/>
			);

		case 'Our Company':
			return (
				<img
					src={`${process.env.WWW}/illustrations/our-company.svg`}
					width="400"
					height="400"
					tw="h-64 w-64 mx-20"
				/>
			);

		case 'API':
			return (
				<img
					src={`${process.env.WWW}/illustrations/api.svg`}
					width="400"
					height="400"
					tw="h-64 w-64 mx-20"
				/>
			);

		case 'People':
			return (
				<img
					src={`${process.env.WWW}/illustrations/people.svg`}
					width="400"
					height="400"
					tw="h-64 w-64 mx-20"
				/>
			);

		case 'Customer Data':
			return (
				<img
					src={`${process.env.WWW}/illustrations/customer-data.svg`}
					width="400"
					height="400"
					tw="h-64 w-64 mx-20"
				/>
			);

		case 'Liquid':
			return (
				<img
					src={`${process.env.WWW}/illustrations/customer-data.svg`}
					width="400"
					height="400"
					tw="h-64 w-64 mx-20"
				/>
			);

		case 'Campaigns and Workflows':
			return (
				<img
					src={`${process.env.WWW}/illustrations/messaging.svg`}
					width="400"
					height="400"
					tw="h-64 w-64 mx-20"
				/>
			);

		case 'Messages and Webhooks':
			return (
				<img
					src={`${process.env.WWW}/illustrations/messaging.svg`}
					width="400"
					height="400"
					tw="h-64 w-64 mx-20"
				/>
			);

		case 'Integrations':
			return (
				<img
					src={`${process.env.WWW}/illustrations/integrations.svg`}
					width="400"
					height="400"
					tw="h-64 w-64 mx-20"
				/>
			);

		case 'Metrics (1)':
			return (
				<img
					src={`${process.env.WWW}/illustrations/metrics1.svg`}
					width="400"
					height="400"
					tw="h-64 w-64 mx-20"
				/>
			);

		case 'Release Notes':
			return (
				<img
					src={`${process.env.WWW}/illustrations/release-notes.svg`}
					width="400"
					height="400"
					tw="h-64 w-64 mx-20"
				/>
			);

		case 'Metrics (2)':
			return (
				<img
					src={`${process.env.WWW}/illustrations/metrics2.svg`}
					width="400"
					height="400"
					tw="h-64 w-64 mx-20"
				/>
			);

		case 'Segmentation':
			return (
				<img
					src={`${process.env.WWW}/illustrations/segmentation.svg`}
					width="400"
					height="400"
					tw="h-64 w-64 mx-20"
				/>
			);

		case 'No image':
			return (
				<img
					src={`${process.env.WWW}/illustrations/no-image.svg`}
					width="400"
					height="400"
					tw="h-64 w-64 mx-20"
				/>
			);

		case null:
			return <></>;
	}
}
