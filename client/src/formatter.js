const _day = [
	'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'
]
const _month = [
	'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
]

export const dateFormatter = (val) => {
	let today = val ? new Date(val) : new Date();
	const dd = String(today.getDate()).padStart(2, '0');
	const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
	const yyyy = today.getFullYear();
	today = mm + '-' + dd + '-' + yyyy;
	return today;
}

export const changeDDMMtoMMDD = (val) => {
	const array = val.split('-');
	return `${array[1]}-${array[0]}-${array[2]}`
}

export const dateNameFormatter = (val) => {
	const now = val ? new Date(val) : new Date();
	const year = now.getUTCFullYear();
	const month = _month[now.getUTCMonth()];
	const day = now.getUTCDate();
	return `${day} ${month} ${year}`
}
