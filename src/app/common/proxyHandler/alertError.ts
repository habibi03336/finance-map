const proxyAlertError: ProxyHandler<any> = {
	apply: async function (target, thisArg, argumentsList) {
		try {
			await target(...argumentsList);
		} catch (e: any) {
			window.globalApi.alert(e.message);
		}
	},
};

export default proxyAlertError;
