function reverseNumber(arg){
	var dgt, res = 0;
	while(arg){
		dgt = arg % 10;
		res = (res * 10) + dgt;
		arg = arg/10|0;
	}
	return res;
}
reverseNumber(123);
reverseNumber(-456);
reverseNumber(10000);