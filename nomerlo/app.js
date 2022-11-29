// // davaleba 1
// // // let allbtns = document.querySelectorAll('button');
// // // console.log(allbtns);


// // // function getRandColor(){
// // //     let r = Math.round(Math.random() * 255);
// // //     let g = Math.round(Math.random() * 255);
// // //     let b = Math.round(Math.random() * 255);
// // //     let rgb = `rgb(${r}, ${g},${b})`;
// // //     return rgb
// // // }
// // // allbtns.forEach(btn=> {
// // //     btn.style.backgroundColor = getRandColor();
// // //     btn.innerHTML = btn.style.backgroundColor
// // // })
// // davaleba 2
// // // let allbtns = document.querySelectorAll('button')
// // // allbtns.forEach(btn =>{
// // //     btn.innerHTML = Math.round(Math.random() * 1000)
// // //     if(btn.innerHTML % 2 == 0){
// // //      btn.style.backgroundColor = 'green'
//  // }
//  // else{
//  //     btn.style.backgroundColor = 'blue'
//  // }

// // })
// // davaleba 3

// // let allbtns = document.querySelectorAll('.btn');
// // let singlebtn = document.querySelector(`.render-btn`)

// // function getRandColor (){
// //     let r = Math.round(Math.random() *255 )
// //     let g = Math.round(Math.random() *255 )
// //     let b = Math.round(Math.random() *255 )
// //     let rgb = `rgb(${r}, ${g},${b})`;
// //        return rgb
// // }
// // singlebtn.addEventListener('click',function(){
    

// //     allbtns.forEach(btn=> btn.style.backgroundColor = getRandColor())
// // })


let startbtn = document.querySelectorAll('start-btn')
function getRandColor(){
    let r = Math.round(Math.random() *255 )
    let g = Math.round(Math.random() *255 )
    let b = Math.round(Math.random() *255 )
    return  `rgb(${r}, ${g},${b})`;
}
console.log(start)
let gamestarted = false 

startbtn.addEventListener("click",function(){
   game()

})









































