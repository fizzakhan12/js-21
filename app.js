// CHAPTER21-25:

// TASK#1:
// var firstname=prompt("enter your first name")
// var lastname=prompt("enter your last name")
// var fullname=firstname+lastname
// alert("hello " + " " + fullname)

// TASK#2:
// var favphone=prompt("enter your favourite phone model")
// alert("length of string is " + " " + favphone.length)

// TASK#3:
// var arr=["p","a","k","i","s","t","a","n"]
// var a=arr.indexOf("n")
// alert("index of n is " + " " + a);

// // TASK#4:
// var arr1=["h", "e", "l","l","o"," ", "w","o","r","l","d"]
// var b=arr1.lastIndexOf("l")
// alert("index of l is " + " " + b);


// TASK#5:
// var pak="pakistani"
// var firstchar= pak.slice(3,4)
// alert("the index of 3 is"  + " " + firstchar) 


// TASK#6:
// var str1=prompt("Enter your firstname")
// var str2=prompt("Enter your lastname")
// var str3=str1.concat(str2)
// console.log(str3);

// TASK#7:
// 1st method:
// var text= "Hydrabad"


// var islam = text.indexOf("Hydra")
// var newtext=text.replace("Hydrabad","Islamabad")
// alert(newtext)
// SECOND METHOD:
// if(islam !== -1){
// text=text.slice(0,islam) + "Islam" + text.slice(islam+4)
// alert(text) 
// }

// TASK#8:
// var text="Ali and Sami are best friends.They play cricket and footbal together."
// var replace=text.replace(/and/g,"&")
// alert(replace)

// TASK#9:
// var string="472"
// alert(string + " " +  "is a string" )
// var num = Number(string)
// alert(num + " " + "is a number" )

// TASK#10:
// var text="peanuts"
// var text2=text.toUpperCase()
// alert(text2)

// // TASK#11:
// var text="javascript"
// var text2=text.slice(0,1);
// text3=text2.toUpperCase()
// text4=text.slice(1,10)
// alert(text3.concat(text4))

// // TASK#12:
// var num=35.65
// var spli=num.splice(2,1)
// console.log(spli)


// TASK#13:

// var username=prompt("enter a username")
// var alphabet= username.charCodeAt(2)
// alert(alphabet)
// for(i=0;i<username.length;i++){
// if(username.charAt[i] === "@")
// {
// alert("invalid")
// break;
// }
// else
// {
//     alert("pass")
//     break;
// }
// }

// for(i=0;i<username.length;i++){
//     if(username.charAt(i) = 64 ){
//     alert("invalid")
//     break;
// }
// else
// {
//     alert("pass")
//     break;
// }
// }

// TASK#14:
// var AREA=["apple","cake","cookie","chips","patties"]
// var user=prompt("enter a bakery item")
// var lower=user.toLowerCase();
// if(lower === AREA[0]){
//     alert("yes its available")
// }
// else if(lower === AREA[1]){
//     alert("yes its available")
// }

// else if(lower === AREA[2]){
//     alert("yes its available")
// }
// else if(lower === AREA[3]){
//     alert("yes its available")
// }
// else if(lower === AREA[4]){
//     alert("yes its available")
// }else{
//     alert("its not avaiable")
// }

// TASK#15:
// var pass=prompt("Enter your password")
// var firstchar = pass.slice(0,1)
// var code = firstchar.charCodeAt()
// var length = pass.length
// if(code >= 49 && code <= 57 ){
//     alert("password cannot start with the number")
// }
// else if( length <= 6 ){
// alert("password length should be greater than six")
// }

// else{
//     alert("Now you can proceed")
    
// }

// TASK#16:
// var uni = "University of karachi"
// var splits= uni.split("")
//     document.write(splits + " <br>")

    
// TASK#17:
// var pak="pakistan"
// var index= pak.slice(7,8)
// alert(index)

// TASK#18:
// var message= "the quick brown fox jumps over the lazy dog"
// var length=messagr.length
// for(i=0;i<length;i++){
//     if(message.slice(i,i+4) === "the"){
//         alert("the word is found")
//     }
// }


// CHAPTER 26-30:
// TASK#1

// var r=Math.round(3.45214)
// var c=Math.ceil(3.4521)
// var f=Math.floor(3.45214)
// alert(c)
// alert(f)
// alert(r)

// TASK#2:
// var input=prompt("enter negative number")
// var a=Math.round(input)
// var b=Math.floor(input)
// var c=Math.ceil(input)
// alert(a)
// alert(b)
// alert(c)

// TASK#3:
// var input=prompt("enter a number")
// var abs=Math.abs(input)
// alert(abs)

// TASK#4:
// var abs=Math.ceil(Math.random()*7)
// alert(abs)

// TASK#5:

// var rand=Math.floor(Math.random()*3)
// alert(rand)
// if(rand === 2){
//     alert("random coin value heads")
// }else if(rand === 1)
// {
//     alert("random coin value tails")
// }else{
//     alert("nothing")
// }

// TASK#6:

// var rand1=Math.floor(Math.random()*100 + 1)
// alert("random number between 1 and 100 is " + " " + rand1)
 
// // TASK#7:
// var weight=prompt("enter your weight in kgs")
// var parse=parseInt(weight)
// alert("the weight of the user is " + parse)

// TASK#8:
// var arr1=["1","2","3","4","5","6","7","8","9","10"]
// var input=+prompt("Enter a secret number between 1 and 10")
// var secretnum="6"


// if(input == secretnum){
//     alert("congrats! you've guessed the right number")
// }
// else
// {
//     alert("sorry try again")
// }


// CHAPTER 21-34:
// task#1:
// var date=new Date();

// var months= ['January','February','March','April','May','June','July','August','September','October','November','December'];
// var month= months[date.getMonth()]
// var days=["Sunday","Monday","Tuesday","wednesday","Friday","Saturday"]
// var day=days[date.getDay()]
// alert(date);
// TASK#2:
// alert(month);
// TASK#3:
// alert(day)
// TASK#4
// if( days[0] == day || days[6] == day ){
//     alert("its a fun day")

// }
// else
// {
//     alert("its a workig day")

// }

// TASK#5:

// var date=prompt("enter a new date ")
// if(date >= 1 && date <= 15){
//     alert("first fifteen days of the month is going on ")
// }else if(date > 15 && date <= 31) {
//     alert("last fifteen days of the month is going on ")
// }
// else{
//     alert("you've entered a wrong date")
// }

