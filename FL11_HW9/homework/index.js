function getNumbers(str){
    let numList=[];
     for(let i=0;i<str.length;i++){
        if (!isNaN(+str[i])){
            numList[numList.length]=+str[i];
        }
    }return numList;
}
function findTypes(){
	let typeList={};
	for(let i = 0; i < arguments.length; i++){
		let key = typeof arguments[i];
		if (! (key in typeList)){
			typeList[key]=1;
		}else{
			typeList[key]+=1;
		}
	}return typeList;
}
function executeforEach(arr,f){
	for(let i=0; i < arr.length; i++){
		f(arr[i]);
	}
}
function mapArray(arr, f){
	let transformedArr = [];
	executeforEach(arr,function(element){
		transformedArr.push(f(element));
	});
	return transformedArr;
}
function filterArray(arr, f){
	let filteredArr = [];
	executeforEach(arr,function(element){
		if (f(element)){
			filteredArr.push(element);
		}
	});
	return filteredArr;
}
function showFormattedDate(date){
	let monthList = ['Jan', 'Feb', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec'];
	let yr = date.getFullYear();
	let dt = date.getDate();
	let mth = monthList[date.getMonth()];
	return 'Date: ' + mth + ' ' + dt + ' ' + yr; 
}
function canConvertToDate (checkDate) {
    let date = new Date(checkDate);
    return !isNaN(Date.parse(date));
}
function daysBetween(a, b){
	let ms = 1000;
	let sec = 60;
	let min = 60;
	let hrs = 24;
	const perDay = ms*sec*min*hrs;
	let daysDif=Math.abs(a - b)/perDay;
	return Math.round(daysDif);
}
let data = [
    {
      '_id': '5b5e3168c6bf40f2c1235cd6',
      'index': 0,
      ' birthday ': '2016-03-18T00:00:00',
      'eyeColor': 'green',
      'name': 'Stein',
      'favoriteFruit': 'apple'
    },
    {
      '_id': '5b5e3168e328c0d72e4f27d8',
      'index': 1,
      ' birthday ': '1991-02-11T00:00:00',
      'eyeColor': 'blue',
      'name': 'Cortez',
      'favoriteFruit': 'strawberry'
    },
    {
      '_id': '5b5e3168cc79132b631c666a',
      'index': 2,
      ' birthday ': '1984-04-17T00:00:00',
      'eyeColor': 'blue',
      'name': 'Suzette',
      'favoriteFruit': 'apple'
    },
    {
      '_id': '5b5e31682093adcc6cd0dde5',
      'index': 3,
      ' birthday ': '1994-04-17T00:00:00',
      'eyeColor': 'green',
      'name': 'George',
      'favoriteFruit': 'banana'
    }
  ];
function getAmountOfAdultPeople(data){
	const adultAge = 18;
	const days = 365;
	let amountRes = [];
	amountRes = filterArray(data, function(element){
		if(daysBetween(Date.now(), new Date(element[' birthday '])) > adultAge * days){
			return true;
		}
	});
	return amountRes.length;
}
function keys(object){
	let arrResult = [];
	for (let key in object){
		if(object.hasOwnProperty(key)){
		arrResult.push(key);
		}	
	}
	return arrResult;
}
function values(object){
	let arrResult = [];
	for (let key in object){
		if(object.hasOwnProperty(key)){
			arrResult.push(object[key]);
		}	
	}
	return arrResult;
}