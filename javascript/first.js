const parent = document.querySelector('.parent') 
// console.log(parent);
// console.log(parent.children);
// console.log(parent.children[2].innerHTML);//only give wednesday

// for (let i = 0; i < parent.children.length; i++) {
//     console.log(parent.children[i].innerHTML) ; 
// }
parent.children[1].style.color="yellow";
console.log(parent.firstElementChild.innerHTML);   //isse bhi first elemnt chiled nikalte hai
console.log(parent.lastElementChild.innerHTML);     // last child   

// we can move child to parent like this 
const dayOne = document.querySelector('.day')
console.log(dayOne);
console.log(dayOne.parentElement);
console.log(dayOne.nextElementSibling);