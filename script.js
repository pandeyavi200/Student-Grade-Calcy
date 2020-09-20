let p
let c
let b 
let m,total
function  calcy() {
    let p=document.getElementById('1').value;
    let c=document.getElementById('2').value;
    let b=document.getElementById('3').value;
    let m=document.getElementById('4').value;
     total=(eval(eval(p*1)+eval(c*1)+eval(b*1)+eval(m*1)))
    
     
     document.getElementById('total').innerHTML=total

     document.getElementById("percent").innerHTML=eval(total*100/400)

      let percent=eval(total*100/400)

     if(percent<33)
     {
         document.getElementById("status").innerHTML="FAIL"
     }
     else{
        document.getElementById("status").innerHTML="PASS"
     }


     if(percent>80 && percent<100)
     {
        document.getElementById("grade").innerHTML="A"
     }
      else if(percent>65 && percent<81)
     {
        document.getElementById("grade").innerHTML="B"
     }
      else if(percent>50 && percent<66)   {
        document.getElementById("grade").innerHTML="C"
     }
     else(percent>0 && percent<51)
     {
        document.getElementById("grade").innerHTML="D"
     }
}


// {let total=0
//   var p

// function a() {
//     document.getElementById('1').addEventListener('input',function(e){
//     return(e.target.value)    
// })
// }

// function b() {
//     document.getElementById('2').addEventListener('input',function(e){
//     return(e.target.value)    
// })
// }

// function c() {
//     document.getElementById('3').addEventListener('input',function(e){
//     return(e.target.value)    
// })
// }

// function d() {
//     document.getElementById('4').addEventListener('input',function(e){
//     return(e.target.value)    
// })
// }
// total=eval(a+b+c+d;
// console.log(total)
// document.getElementById('percent').getHTML=total
// // total=(eval(total+p))
// console.log(p)
// document.getElementById('2').addEventListener('input',function(e){
//     let p=eval(e.target.value);
    
//     console.log(total)
    
// })
// total=(eval(total+p))
// document.getElementById('3').addEventListener('input',function(e){
//     let p=eval(e.target.value);
 
//     console.log(total)

    
// })
// total=(eval(total+p))
// document.getElementById('4').addEventListener('input',function(e){
//     let p=eval(e.target.value);
    
//     console.log(total)
 
    
// })
// total=(eval(total+p))
// console.log(total)

// }
