function formatTime(minArg){
	const minInDay = 1440;
	const minInHour = 60;
	const hrsInDay = 24;
	let days = Math.floor(minArg/minInDay);
	let hours = Math.floor((minArg/minInHour) % hrsInDay);
	let minutes = Math.floor(minArg % minInHour);
	return days + ' day(s) ' + hours + ' hour(s) ' + minutes + 'minute(s). ';
}

formatTime(120);
formatTime(59);
formatTime(3601);