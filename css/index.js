function random(){
   let num= Math.floor(Math.random() *10)
   console.log(num)
   if(num %2 === 0){
       console.log('Par')
   }
   else{
       console.log('Impar')
   }
   
   
}

console.log(random())



