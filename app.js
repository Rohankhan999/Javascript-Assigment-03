// Assigment  no 03 // (USER INPUT & CONDITIONAL STATEMENT);

// Question no 01 //

// var Cityname = prompt("ENTER A CITY");

// if (Cityname === "karachi") {
//     console.log("WELCOME TO CITY OF LIGHTS");
// }
// else {
//     console.log("NOT WELCOME");
// }

// Question no 02 //

// var gender = prompt("Enter your Gender");

// if (gender === "Male"){
//     document.write("GOOD, MORNING SIR!");  
// }

// else if (gender === "Female"){
//     document.write("GOOD, MORNING MADAM!");
// }
// else{
//     document.write("you're not Human");
// }

// Question no 03 //

// var signals = prompt("Enter Traffic signal color");

// if (signals === "green"){
//     document.write("Move now")
// }
// else if (signals === "red"){
//     document.write("Must Stop")
// }
// else if (signals === "yellow"){
//     document.write("Ready to Move")
// }
// else{
//     document.write("enter valid color");
// }

// Question no 04 //

// var fuel = prompt("Enter your fuel");

// if (fuel < 0.25 ){
//     document.write("Please refill Your feul in your car");
// }
// else if (fuel > 0.25){
//     document.write("Your feul in your car Is good");
// }

// Question no 05 //

// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }(Answer is correct)

//  var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }(Answer is correct)


// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }(Answer is correct)

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }(Answer is correct)

// if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }


// if("car" < "cat"){
// alert("car is smaller than cat");
// }( false)

// Question no 06 //

// var total = 300 ;
// var English = prompt("enter your english numbers");
// var Urdu = prompt("enter your urdu numbers");
// var math = prompt("enter your math numberas");
// var obtmarks = Number(math) + Number(English) + Number(Urdu) ;
// var per = (Number(obtmarks) * 100 ) / 300 ;


// document.write("MARKS SHEET :"+" <br>" + "<br>");
// document.write("TOTAL MARKS : " + total + "<br>");
// document.write("OBTAINED MARKS : " + obtmarks + "<br>" );
// document.write("PERCENTAGE: " + Math.round(per) + "%" + "<br>" );

// if(per >= 80){
//     document.write("YOUR GRADE IS : A1 " + "<br>");
// }
// else if(per >= 70){
//     document.write("YOUR GRADE IS : A " + "<br>")
// }
// else if(per >= 60){
//     document.write("YOUR GRADE IS : B " + "<br>")
// }
// else if(per <= 60){
//     document.write("YOUR GRADE IS : FAIL " + "<br>")
// }

// if(per >= 80){
//     document.write("EXCELLENT " + "<br>");
// }
// else if(per >= 70){
//     document.write("GOOD" + "<br>")
// }
// else if(per >= 60){
//     document.write("YOU NEED TO IMPROVE" + "<br>")
// }
// else if(per <= 60){
//     document.write("SORRY " + "<br>")
// }

// Question no 07 //

// var favnum = +prompt("GUESS NUMBER FROM 1 TO 10");
// var computernum = Math.round(Math.random() * 10);

// if (favnum === computernum) {
//     alert("wahoo! You guess right! ")
// }
// else if (favnum - 1 === computernum || favnum + 1 === computernum ) {
//     alert("Oh! You're So Close! " + computernum);
// }
// else{
//     alert("you guess wrong Sorry you're lose!")
// }

// Question no 08 //

// var divnum = prompt("ENTER YOUR WHICH YOU WANT TO DIVIDED BY 3")
// if(divnum % 3 === 0 ){
//     alert("the number is Divided by 3");
// }
// else {
//     alert("Try Again");
// }

// Question no 09 //

// var oddEven = prompt("Enter your Number!")

// if (oddEven % 2 === 0){
//     alert("Your number is Even")
// }
// else{
//     alert("Your number is Odd")
// }

// Question no 10 //

// var temperature = prompt("Enter your Temperature");

// if(temperature <= 40){
//     alert("oh! today is so hot Outside")
// }
// else if(temperature <= 30){
//     alert("oh! today is  Normal Outside");
// }

// else if(temperature <= 20){
//     alert("oh! today is  Cold Outside");
// }

// else if(temperature <= 10){
//     alert("oh! today is so Cold Outside");
// }

// Question no 11 //

var value1 = +prompt("enter your first value");
var opertaor = prompt("enter your operator");
var value2 = +prompt("enter your Second value");

if (opertaor === "+") {
    document.write(value1 = value1 + value2)
}
else if (opertaor === "-") {
    document.write(value1 = value1 - value2)
}
else if (opertaor === "-") {
    document.write(value1 = value1 - value2)
}
else if (opertaor === "*") {
    document.write(value1 = value1 * value2)
}
else if (opertaor === "/") {
    document.write(value1 = value1 / value2)
}
else if (opertaor === "%") {
    document.write(value1 = value1 % value2)
}