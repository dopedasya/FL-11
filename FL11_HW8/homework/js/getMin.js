function getMin(arg){
	let minimalArg = arg[0];
	for(let i = 1; i< arg.length; i++) {
		if (arg[i] < minimalArg){
			minimalArg = arg[i];
		}
	}

	return minimalArg;
}

getMin(3,0,-3);