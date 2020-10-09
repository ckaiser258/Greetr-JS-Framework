(function (global, $) {
  //$ is synonymous with jQuery

  //Initialize IIFE to make sure code is safe
  //because we now have our own execution context

  //Set up main function constructor in a way where we don't
  //need to use the 'new' keyword every time we call it
  var Greetr = function (firstName, lastName, language) {
    return new Greetr.init(firstName, lastName, language);
  };
  //Now Greetr's return value is a new Greetr.init object (defined next).
  //Thus we don't need to use the 'new' keyword when calling Greetr()

  //Developers won't have access to these variables below and won't be able to change them
  //without going into the source code
  //since they're defined in a closure (within this whole function).
  //So there is not a way to access this variable from outside the function due to scope
  //and lexical environment.
  var supportedLangs = ["en", "es"];

  var greetings = {
    en: "Hello",
    es: "Hola",
  };

  var formalGreetings = {
    en: "Greetings",
    es: "Soludos",
  };

  var logMessages = {
    en: "Logged in",
    es: "Inició sesión",
  };
  //These are objects and not arrays because it allows us to access
  //their properties more easily since we can access them by string.

  //Set up prototype where we will place any methods we want to use.
  Greetr.prototype = {
    fullName: function () {
      return this.firstName + " " + this.lastName;
    },

    validate: function () {
      //indexOf checks if it exists in the array and returns the index.
      //It returns -1 if it doesn't find it.
      if (supportedLangs.indexOf(this.language) === -1) {
        throw "Invalid language";
      }
    },

    greeting: function () {
      //this.language is what is being passed to the Greetr object.
      //Grabbing respective greeting from the greetings object.
      //ex: greeting['en'] returns "Hello"
      return greetings[this.language] + " " + this.firstName + "!";
    },

    formalGreeting: function () {
      return formalGreetings[this.language] + ", " + this.fullName();
    },

    greet: function (formal) {
      //Declare undefined msg variable:
      var msg;

      //Decide what to set the msg variable as:
      if (formal) {
        msg = this.formalGreeting();
      } else {
        msg = this.greeting();
      }
      if (console) {
        console.log(msg);
      }

      //'this' refers to the whichever object is called at execution time.
      //This makes the method chainable (can be chained to other methods with dot operator).
      return this;
    },

    log: function () {
      if (console) {
        //IE doesn't have a console variable unless the console is open.
        console.log(logMessages[this.language] + ": " + this.fullName());
      }
      //Make the object chainable:
      return this;
    },

    //Option to update the language:
    setLang: function (lang) {
      this.language = lang;

      this.validate();

      //Make the object chainable:
      return this;
    },

    HTMLGreeting: function (selector, formal) {
      //If jQuery isn't around, throw error.
      if (!$) {
        throw "jQuery not loaded";
      }
      //If there's not a selector in the jQuery call, throw error.
      if (!selector) {
        throw "Missing jQuery selector";
      }

      //Declare undefined msg variable:
      var msg;

      //Decide what to set the msg variable as:
      if (formal) {
        msg = this.formalGreeting();
      } else {
        msg = this.greet();
      }
      //jQuery method that will set the html to the msg variable.
      $(selector).html(msg);

      //Make this method chainable:
      return this;
    },
  };

  //Create our function constructor.
  Greetr.init = function (firstName = "", lastName = "", language = "en") {
    //Use self in place of 'this' to make things easier to understand.
    var self = this;

    self.firstName = firstName;
    self.lastName = lastName;
    self.language = language;

    //Validate language is supported before finishing creating the object.
    self.validate();
  };

  //Any Greetr.init objects will
  //point to the same prototype as Greetr.
  Greetr.init.prototype = Greetr.prototype;

  //Make Greetr available everywhere (on the global object) by calling Greetr or G$
  global.Greetr = global.G$ = Greetr;
})(window, jQuery);
