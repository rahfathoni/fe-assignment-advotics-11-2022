
const service = require("@/services/dashboard/index").default;

export const inquiryDataSales = async ({ commit }, payload) => {
	const res = await service.inquirySalesTurnover();
	commit("setSalesData", res)
	return res;
}