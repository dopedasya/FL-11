function addOne (n){
	return n+1;
}

function pipe (data){
	let res = data;
	for(let i =1; i<arguments.length; i++){
		res = arguments[i](res);
	}
	return res; 
}

pipe(1, addOne);
pipe(1, addOne,addOne);
