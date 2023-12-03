const NEXT_PUBLIC_SERVER_API = 'ws://supernova-api.demo-website.click:8083';
const NEXT_PUBLIC_SERVER_API_ENDPOINT = '';

module.exports = {
	rewrites: [
		{
			source: `${process.env.NEXT_PUBLIC_SERVER_API_ENDPOINT || NEXT_PUBLIC_SERVER_API_ENDPOINT}/:path*`,
			destination: `${process.env.NEXT_PUBLIC_SERVER_API || NEXT_PUBLIC_SERVER_API}${
				process.env.NEXT_PUBLIC_SERVER_API_ENDPOINT || NEXT_PUBLIC_SERVER_API_ENDPOINT
			}/:path*`,
		},
	],
};
