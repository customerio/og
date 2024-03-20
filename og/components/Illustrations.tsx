/* eslint-disable @next/next/no-img-element */

export default function Illustrations({ name }: { name: string | null }) {
	switch (name) {
		case 'get-started':
			return (
				<img
					src={`${process.env.WWW}/illustrations/recipes.svg`}
					width="400"
					height="400"
					tw="h-64 w-64 mx-20"
					alt={name}
				/>
			);

		case 'overview':
			return (
				<img
					src={`${process.env.WWW}/illustrations/recipes.svg`}
					width="400"
					height="400"
					tw="h-64 w-64 mx-20"
					alt={name}
				/>
			);

		case 'accounts-and-workspaces':
			return (
				<img
					src={`${process.env.WWW}/illustrations/accounts-and-workspaces.svg`}
					width="400"
					height="400"
					tw="h-64 w-64 mx-20"
					alt={name}
				/>
			);

		case 'objects-data':
			return (
				<img
					src={`${process.env.WWW}/illustrations/accounts-and-workspaces.svg`}
					width="400"
					height="400"
					tw="h-64 w-64 mx-20"
					alt={name}
				/>
			);

		case 'our-company':
			return (
				<img
					src={`${process.env.WWW}/illustrations/our-company.svg`}
					width="400"
					height="400"
					tw="h-64 w-64 mx-20"
					alt={name}
				/>
			);

		case 'api':
			return (
				<img
					src={`${process.env.WWW}/illustrations/api.svg`}
					width="400"
					height="400"
					tw="h-64 w-64 mx-20"
					alt={name}
				/>
			);

		case 'people':
			return (
				<img
					src={`${process.env.WWW}/illustrations/people.svg`}
					width="400"
					height="400"
					tw="h-64 w-64 mx-20"
					alt={name}
				/>
			);

		case 'customer-data':
			return (
				<img
					src={`${process.env.WWW}/illustrations/customer-data.svg`}
					width="400"
					height="400"
					tw="h-64 w-64 mx-20"
					alt={name}
				/>
			);

		case 'liquid':
			return (
				<img
					src={`${process.env.WWW}/illustrations/customer-data.svg`}
					width="400"
					height="400"
					tw="h-64 w-64 mx-20"
					alt={name}
				/>
			);

		case 'campaigns-and-workflows':
			return (
				<img
					src={`${process.env.WWW}/illustrations/messaging.svg`}
					width="400"
					height="400"
					tw="h-64 w-64 mx-20"
					alt={name}
				/>
			);

		case 'messages-and-webhooks':
			return (
				<img
					src={`${process.env.WWW}/illustrations/messaging.svg`}
					width="400"
					height="400"
					tw="h-64 w-64 mx-20"
					alt={name}
				/>
			);

		case 'integrations':
			return (
				<img
					src={`${process.env.WWW}/illustrations/integrations.svg`}
					width="400"
					height="400"
					tw="h-64 w-64 mx-20"
					alt={name}
				/>
			);

		case 'metrics1':
			return (
				<img
					src={`${process.env.WWW}/illustrations/metrics1.svg`}
					width="400"
					height="400"
					tw="h-64 w-64 mx-20"
					alt={name}
				/>
			);

		case 'release-notes':
			return (
				<img
					src={`${process.env.WWW}/illustrations/release-notes.svg`}
					width="400"
					height="400"
					tw="h-64 w-64 mx-20"
					alt={name}
				/>
			);

		case 'metrics2':
			return (
				<img
					src={`${process.env.WWW}/illustrations/metrics2.svg`}
					width="400"
					height="400"
					tw="h-64 w-64 mx-20"
					alt={name}
				/>
			);

		case 'sdk':
			return (
				<img
					src={`${process.env.WWW}/illustrations/integrations.svg`}
					width="400"
					height="400"
					tw="h-64 w-64 mx-20"
					alt={name}
				/>
			);

		case 'segmentation':
			return (
				<img
					src={`${process.env.WWW}/illustrations/segmentation.svg`}
					width="400"
					height="400"
					tw="h-64 w-64 mx-20"
					alt={name}
				/>
			);

		case 'no-image':
			return (
				<img
					src={`${process.env.WWW}/illustrations/no-image.svg`}
					width="400"
					height="400"
					tw="h-64 w-64 mx-20"
					alt={name}
				/>
			);

		case null:
			return <></>;
	}
}
