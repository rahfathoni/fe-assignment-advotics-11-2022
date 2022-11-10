export default {
	inquirySalesTurnover: async (payload) => {
		const data = {
			amount: '3,600,000',
			currency: 'Rp',
			rate: '13.8',
			isPlus: false
		}
		return data;
	},
	inquiryGraphData: async (payload) => {
		const data = {
			startDate: '',
			endDate: '',
			data: [
				{
					date: '',
					gross: '',
					nett: '',
					upt: ''
				},
				{
					date: '',
					gross: '',
					nett: '',
					upt: ''
				},
				{
					date: '',
					gross: '',
					nett: '',
					upt: ''
				},
				{
					date: '',
					gross: '',
					nett: '',
					upt: ''
				},
				{
					date: '',
					gross: '',
					nett: '',
					upt: ''
				},
				{
					date: '',
					gross: '',
					nett: '',
					upt: ''
				},
				{
					date: '',
					gross: '',
					nett: '',
					upt: ''
				},
			]
		}
		return data;
	}
};

// export const inquirySellingSKU = (payload) => {
// 	const data = {
// 		startDate: '',
// 		endDate: '',
// 		data: [
// 			{
// 				name: '',
// 				price: '',
// 				currency: '',
// 				amount: ''
// 			},
// 			{
// 				name: '',
// 				price: '',
// 				currency: '',
// 				amount: ''
// 			},
// 			{
// 				name: '',
// 				price: '',
// 				currency: '',
// 				amount: ''
// 			},
// 			{
// 				name: '',
// 				price: '',
// 				currency: '',
// 				amount: ''
// 			},
// 			{
// 				name: '',
// 				price: '',
// 				currency: '',
// 				amount: ''
// 			},
// 		]
// 	}
// 	return data;
// }

// export const inquiryCompSKU = (payload) => {
// 	const data = {
// 		startDate: '',
// 		endDate: '',
// 		data: [
// 			{
// 				name: '',
// 				price: '',
// 				currency: '',
// 				amount: ''
// 			},
// 			{
// 				name: '',
// 				price: '',
// 				currency: '',
// 				amount: ''
// 			},
// 			{
// 				name: '',
// 				price: '',
// 				currency: '',
// 				amount: ''
// 			},
// 			{
// 				name: '',
// 				price: '',
// 				currency: '',
// 				amount: ''
// 			},
// 			{
// 				name: '',
// 				price: '',
// 				currency: '',
// 				amount: ''
// 			},
// 		]
// 	}
// 	return data;
// }