/* 

var first = prompt ('what\'s The fist brother ?');
var second = prompt ('how many number of your family ?');
var	third = prompt ( 'who love him so much ? ' );
var	work = prompt ('what is your occupation ?');

console.log( first +' '+ "hako" + ' '+ "I have" +' '+second+ ' '+ "sisters and brothers" +' '+ "I like" +' '+ third+ ' '+ "I work as" +' '+work  );

*/

// var x, z, y;
// x= 54; 
// z= 22;
// y= 54;

// console.log( x == y + "Yep I do it" ); 


/////////////////////////// 	ARRAYS ////////////////////////
/*
var cars = ["ford", "Mercedes", "fiat"],
	name =

document.getElementById("test").innerHTML = cars [1];
*/

/////////////////////////// 	OBJECTS ////////////////////////
/*

var cars = {
		model : 2015,
		carKm : 2300,
		firstOwner : "malik",
		color : "blue"
		 
};


alert( cars.model + "start with" + cars.carKm + "the first owner is " + " " + cars.firstOwner + cars.color);
*/

/////////////////////////// 	Function  ////////////////////////
// var p1 = 2,
// 	p2 = 3; 

// function $myHero(p1, p2) {
//  return p1 + p2 

// };

// document.getElementById("hero").innerHTML = $myHero(p1, p2);

// var z = myFunction();
// var firstCode = myFunction()

// function myFunction() {
// 	var color = "green";
// 	var x = 20,
// 		y = 21;

// 	return  "i like" 
// };

// document.getElementById("test").innerHTML = firstCode ;


// var ageFirst = ""


// function $sayHello(firstName, lastName) {
	

// 	return "Hello " + firstName + " " + lastName + " How Are Your Today. " 


// };

// document.getElementById("hero").innerHTML = $sayHello("Rachid", "Benharzallah");


var lang = {first: "html",
            second: "Css",
            third : "javascript",
            fourth: "Front End", 
			fullName: function() {
	return this.second + " " + this.fourth 
}
};
console.log(lang.fullName());