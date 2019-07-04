const a = prompt('enter triangles length side A');
const b = prompt('enter triangles length side B');
const c = prompt('enter triangles length side C');

if( +a > 0
    & +b > 0
    & +c > 0
    & +a < +b + +c
    & +b < +c + +a
    & +c < +b + +a){
if(a === b & b === c & c === a){
	console.log('Eequivalent triangle');
} else if (a === b || a === c || b === c){
	console.log('Isosceles triangle');
} else{
	console.log('Normal triangle');
}
} else {
	console.log('Triangle doesn’t exist')
}