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

// // TASK#6:
// var date1=new Date("jan 1, 1970")
// var date1mili=date1.getTime()
// var date2= new Date()
// var date2mili=date2.getTime()
// alert(date1)
// alert(date1mili)
// alert(date2)
// alert(date2mili)
// var diff=date2mili-date1mili
// alert(diff)
// var min=diff/(60000)
// alert(min)

// // TASK#7:
// var time=+prompt("enter a time ")
// var hour=time.getHours();
//  if(hour < 12){
//     console.log("its AM")
// }else if(hour > 12 || hour <=23){
//     alert("Its PM")
// }else{
//     alert("no time")
// }

// TASK#8
// var date =new Date("31 dec, 2020")
// alert(date)


// TASK#9:
// var ramadan= new Date("24 april, 2020")
// var now= new Date()
// var dayramadan= ramadan.getTime()
// var daynow=now.getTime()
// var diff=daynow-dayramadan;
// var dayspassed=diff/(1000*3600*24)
// var round=Math.floor(dayspassed)
// alert(round +" " + "days are passed since ramadan")


// // TASK#10:
// var date=new Date("5 dec, 2015")
// var time=date.getTime()
// var seconds=time/(1000)
// alert(seconds + " " + "seconds has passed since 2015")

// TASK#11:
// var date=new Date()
// date.setHours(6)
// alert("1 hour ago" + " " + date)

// TASK#12:
// var date=new Date()

// var date2=new Date("5 dec, 1915")
// alert("100 years back" + " " + date2)

// // TASK#13:
// var dob=+prompt("enter your age")
// var y=dob*(3600*24*12*30*1000);

// var b= new Date()
// var year=b.getFullYear()

// var y2=year*(3600*24*12*30*1000)

// var diff=y2-y;
// var diffy=diff/(3600*24*12*30*1000)
// alert("you born in" + " "  + diffy )

// TASK#14:
// document.write("customer name is fizza" + "<br>")
// document.write("the current month is January" + "<br>")
// document.write("number of units are 16" + "<br>")
// document.write("Charges per unit is 410" + "<br>")
// var units=16
// var cahrgesperunit=410
// var amountpayable=units*cahrgesperunit;
// document.write("Net Amount Payable (within Due Date) = " + " " + amountpayable  + "<br>")
// var latepay=350
// var grossamount=latepay + amountpayable
// document.write("Late payment is" + " " + latepay + "<br>" )
// document.write("Gross amount is" + " " + grossamount  + "<br>")


// CHAPTER 35-38:

// TASK#1:
// var date=new Date()
// function date1(){
//     alert(date)
// }
// date1();

// TASK#2:
// var firstname=prompt("enter your first name")
// var lastname=prompt("enter your last name")
// function greet(){
//     alert(firstname.concat() +" " + lastname.concat())
// }
// greet();

// TASK#3
// var first=+prompt("enter 1st number")
// var second=+prompt("enter second number")
// function add(){
//     z =  first+second;
// alert(z)
// }

// add();

// // TASK#4:
// function bodmas(a,b,c){
//     if (b === "+"){
//         return  a+c
//     }
//     else if(b === "-"){
//         return a-c
//     }
//     else if(b === "*"){
//         return a*c
//     }else if (b === "/"){
//         return a/c
//     }
//     else{
//          alert("only 4 operators are avaailable")
//     }

// }
// var result = bodmas(4,"-" ,"4")
// var result1 = bodmas(4,"*" ,"4")
// var result2 = bodmas(4,"+" ,"4")
// var result3 = bodmas(4,"/" ,"4")
// alert(result)
// alert(result1)
// alert(result2)
// alert(result3)
 

// // TASK#5:
// function square(a){
//     var z = a*a
// return z
// }
// var b = square(4)
// alert(b)

// TASK#6:

// function factorial(input){
//     if(input === 1 || input ===  0){
//         return 1
//     }
//   for(var i = input - 1; i >= 1; i--)  
//   {
//   input = input*i
  
// }
// alert(input);
// }
// factorial(4);


// // task#8:
// var base=+prompt("enter your base")
// var perpendicular=+prompt("enter perpendicular")
// function hypotneuse()
// {
//     function square(){
//     var z= (base*base) + (perpendicular*perpendicular)
//     alert(z);

//     }
// square();

// }

// hypotneuse();

// TASK#9:
// function area(a,b){
//      alert(a*b)

// }
// area(2,3)


// // // TASK#10
// var str1=prompt("Enter a string")
// var str2=prompt("Confirm your string2")
// function palindrome(){
// if(str1.localeCompare(str2) === 0)
// {
//         document.write( "palindrome case")
// }
// else{
//         document.write("Its not a palindrome case")
// }
// }
// palindrome();

// // TASK#11:
// var message ="the quick brown fix"
// var capital=message.toUpperCase
// alert(capital)

// TASK#13:
//     function char_count(str, letter) 
//     {
//      var letter_Count = 0;
//      for (var position = 0; position < str.length; position++) 
//      {
//         if (str.charAt(position) == letter) 
//           {
//           letter_Count += 1;
//           }
//       }
//       return letter_Count;
//     }
    
//     alert(char_count('JSResourceS.com', 'o'));
// }

// TASK#14:
// function radius(r){
//     var circum=2*3.142*r
//     return circum;

// }
//   var c =radius(4)
//   alert(c)

// TASK#15:
// function radius(r){
//     var area=3.142*r*r
//     return area;

// }
//   var c =radius(4)
//   alert(c)


// // TASK#16:
// var message="Web Development Tutorial"
// var message1=message.split(" ")
// alert(message1)
// var max=0
// for(i=0;i<message1.length;i++){
// if(message1.length[i]>max){
//     max=message1.length[i]
// }

// }
// alert(max)