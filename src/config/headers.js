const { createSecureHeaders } = require('next-secure-headers');

module.exports = {
	headers: [
		{
			source: '/(.*)',
			headers: createSecureHeaders({
				contentSecurityPolicy: {
					directives: {
						defaultSrc: "'self'",
						styleSrc: [
							"'self'",
							"'unsafe-inline'",
							'*.googleapis.com',
							'*.jsdelivr.net',
							'*.youtube.com',
							'*.vimeo.com',
						],
						scriptSrc: [
							"'self'",
							"'unsafe-inline'",
							"'unsafe-eval'",
							'*.google.com',
							'*.google-analytics.com',
							'*.googletagmanager.com',
							'*.gstatic.com',
							'*.facebook.net',
							'*.facebook.com',
							'*.googleapis.com',
							'*.ampproject.org',
							'*.jsdelivr.net',
							'*.youtube.com',
							'*.vimeo.com',
						],
						fontSrc: ["'self'", '*.gstatic.com', '*.youtube.com', '*.vimeo.com'],
						mediaSrc: ['*'],
						imgSrc: ['*', 'data:', '*.jsdelivr.net', '*.youtube.com', '*.vimeo.com'],
						scriptSrcElem: [
							"'self'",
							"'unsafe-inline'",
							'*.google.com',
							'*.google-analytics.com',
							'*.googletagmanager.com',
							'*.gstatic.com',
							'*.facebook.net',
							'*.facebook.com',
							'*.googleapis.com',
							'*.ampproject.org',
							'*.jsdelivr.net',
							'*.youtube.com',
							'*.vimeo.com',
						],
						frameSrc: ["'self'", '*.facebook.com', '*.google.com', '*.youtube.com', '*.vimeo.com'],
						connectSrc: ['*'],
					},
				},
				forceHTTPSRedirect: [
					true,
					{
						maxAge: 30 * 24 * 60 * 60,
						includeSubDomains: false,
						preload: false,
					},
				],
				referrerPolicy: 'no-referrer-when-downgrade',
			}),
		},
	],
};
