/*
document.write("hello world");
document.getElementById('s').innerHTML="anan jamal";
alert("hello");
console.log("asdasdasd");

let x = "33"
    y = 22;
document.write(x+y); 
document.write(typeof(x));

let x =9;
if(x >= 10){
    document.write(true)
}else if( x<=10){
    document.write(true)
}
else{
    document.write(false)
}


let x = parseInt(prompt("Enter your number:")) ;
if(x >=0){
    document.write("positive" +"<br>");
    if(x % 2 ==0){
        document.write("even"+"<br>");
    }else{
        document.write("odd"+"<br>");
    }
}else{
    document.write("negative"+"<br>");
    if(x % 2 !=0){
        document.write("odd"+"<br>");
    }else{
        document.write("even"+"<br>");
    }
}

let x = 1;
while(x <= 10){
    document.write(x +"<br>");
    x ++;
}


for(let i=1;i<=20; i % 2 ==0){
    document.write(i  +"<br>");
}

for(let i=0; i<=20; i+=2){
        document.write(i  +"<br>");
}

 
for(let i=10;i >=1; i--){
        document.write(i  +"<br>");
}



function x(s,y) {
        let result = s+y;
        return result;
}


document.write(x(11,12));

function x(y){
  return y*y*y;
}
document.write(x(parseInt(prompt("Enter your number:"))));


var family = [22,24,5,6,4,8,6,7];
var largest = family[0];
function largnumber() {
    for (var  i = 1; i < family.length; i++) {
         if (family[i] > largest){
            largest = family[i];
            document.write(largest);
         }
    }  
}
largnumber();
*/



var arr =[];

for (var  i = 0; i < 5; i++) {
    var x = parseInt(prompt("Enter your numbers:"))
    arr.push(x)  ;
}
document.write(arr);





