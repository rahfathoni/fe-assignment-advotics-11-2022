
const service = require("@/services/dashboard/index").default;

export const inquiryDataSales = async ({ }, payload) => {
	const data = service.inquirySalesTurnover();
	console.log('data =>', data)
	return data;
}