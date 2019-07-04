const a1 = prompt('enter x for point A');
const a2 = prompt('enter y for point A');
const b1 = prompt('enter x for point B');
const b2 = prompt('enter y for point B');
const c1 = prompt('enter x for point C');
const c2 = prompt('enter y for point C');
const half = 2;

if((+a1 + +b1) / half === +c1 && (+a2 + +b2) / half === +c2){
console.log(true);
}else{ 
console.log(false);
}

