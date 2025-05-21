const Liferay = window.Liferay || {
	OAuth2: {
		getAuthorizeURL: () => '',
		getBuiltInRedirectURL: () => '',
		getIntrospectURL: () => '',
		getTokenURL: () => '',
		getUserAgentApplication: (_serviceName) => {},
	},
	OAuth2Client: {
		FromParameters: (_options) => {
			return {};
		},
		FromUserAgentApplication: (_userAgentApplicationId) => {
			return {};
		},
		fetch: (_url, _options = {}) => {},
	},
	ThemeDisplay: {
		getCompanyGroupId: () => 20119,
		getPathThemeImages: () => '',
		getPortalURL: () => 'http://localhost:8080',
		getScopeGroupId: () => 20117,
		getSiteGroupId: () => 20117,
		isSignedIn: () => {
			return false;
		},
	},
	authToken: '',
    on: (_event, _callback) => {},
    fire: (_event, _data) => {},
};

export default Liferay;
