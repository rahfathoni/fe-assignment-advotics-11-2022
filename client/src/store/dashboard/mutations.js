import { dateFormatter } from '@/formatter.js'

export const setGraphData = (state, value) => {

}

export const setSearchDate = (state, value) => {

}

export const reset = (state) => {
	let dayBeforeToday = new Date();
	dayBeforeToday.setDate(dayBeforeToday.getDate() - 1);
	let daySeven = new Date();
	daySeven.setDate(daySeven.getDate() + 6);

	state.data = [];
	state.searchDate = {
		start: dateFormatter(dayBeforeToday),
		end: dateFormatter(daySeven)
	}
}