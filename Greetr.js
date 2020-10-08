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

  //Set up prototype where we will place any methods we want to use.
  Greetr.prototype = {};

  //Create our function constructor.
  Greetr.init = function (firstName = "", lastName = "", language = "en") {
    //Use self in place of 'this' to make things easier to understand.
    var self = this;

    self.firstName = firstName;
    self.lastName = lastName;
    self.language = language;
  };

  //Any Greetr.init objects will
  //point to the same prototype as Greetr.
  Greetr.init.prototype = Greetr.prototype;

  //Make Greetr available everywhere by calling Greetr or G$
  global.Greetr = global.G$ = Greetr;
})(window, jQuery);
