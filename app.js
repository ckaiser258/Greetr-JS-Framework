var g = G$("John", "Doe");
console.log(g);
//Greetr.init {firstName: "John", lastName: "Doe", language: "en"}

g.greet();
//"Hello John!"

g.greet().greet(true);
//"Hello John!"
//"Greetings, John Doe"
//We are method chaining and calling a formal greeting on the second method.
//Remember our greet method is greet(formal).
//If formal evaluates to true (it does in the second method),
//it sets a msg variable to our formalGreeting() method.
//If it's null (false), it sets the msg variable to our greeting() method.
//Then it logs the object in the console,
//and returns 'this' (the object) so it's chainable.

g.greet().setLang("es").greet(true);
//"Hello John!"
//"Saludos, John Doe"

// g.greet().setLang('fr').greet(true)
//Error: Uncaught invalid language

//Add a click event to our login button (its id is 'login') using jQuery.
$("#login").click(function () {
    
  //Create a new Greetr object
  var loginGrtr = G$("John", "Doe");

  //Hide login area
  $("#logindiv").hide();

  //Pass whichever language was selected from the dropdown menu as an
  //argument to our setLang() method (val() gets the value of it).
  //Then use our HTMLGreeting() method to set the text in the h1 (has an id of 'greeting')
  //and pass it true so it returns a formal greeting.
  //Lastly use our log() method to log it to the console.
  loginGrtr.setLang($("#lang").val()).HTMLGreeting("#greeting", true).log();
});
