/*eslint-env browser*/

/*1.Create two classes, one called Cat and another called Dog. Both classes should be created using constructor syntax. The Cat class should be created using a named declaration and the Dog class should be created using an anonymous declaration.*/

//function Cat() {}
//
//var Dog = function() {} 

/*2.Create a new instance of the Cat class. Directly underneath, create a new instance of the Dog class.*/

//function Cat () {}
//var Abissinian = new Cat();
//
//function Dog () {}
//var Labrador = new Dog();

/*
3. Create a new class using constructor syntax called Animal. Create a method within the Animal class that when called, displays the message “The Animal has been created” in the console window. 
*/

//function Animal() {
//    "use strict";
//    window.console.log("The Animal has been created");
//}
//var Perro = new Animal();
//window.console.log(Perro.constructor);

/*4.Now, replicate the above code but this time so that the class accepts an argument and that value is what is displayed in the console window. The message should be passed into the constructor at the moment that the Animal class is instantiated.*/

//var Animal = function(value) {
//    console.log(value);
//};
//var myAnimal = new Animal("This is a dog");


/*5. Start over and now create a new class using constructor syntax called Animal. Define five properties within your class including properties type, breed, color, height, and length. These properties will be set within the object so you’ll need to pass in arguments into the function’s constructor, set the properties, and then pass in the actual values during the object’s instantiation. */

//function Animal (type, breed, color, height, lenght) {
//    "use strict";
//    this.type = type;
//    this.breed = breed;
//    this.color = color;
//    this.height = height;
//    this.lenght = lenght;
//    window.console.log(this.type + " " + this.breed + " " + this.color + " " + this.height + " " + this.lenght); 
//}
//var Perro = new Animal("Dog","Pitbull","Brindle","tall","small");

/*6.	Use a for-in loop to loop through and display all of the properties in the Animal class. You should see a total of 5 properties displayed in a list within the console window.*/

//function Animal (type, breed, color, height, lenght) {
//    "use strict";
//    this.type = type;
//    this.breed = breed;
//    this.color = color;
//    this.height = height;
//    this.lenght = lenght;
//}
//var pitbull = new Animal();
//
//for (var property in pitbull) {
//    window.console.log(property);
//};

/*7.	Now, create a public method called speak. Within the speak method you will use a conditional to check the type of Animal being created. If it’s a dog, return “The <color> dog is barking!” If it’s a cat return “The <color> cat is meowing!” instead. Call that method after the Animal class has been instantiated.*/

//function Animal (type, breed, color, height, lenght) {
//    "use strict";
//    this.type = type;
//    this.breed = breed;
//    this.color = color;
//    this.height = height;
//    this.lenght = lenght;
//}
//Animal.prototype.speak = function () {
//        if (this.type === "cat") {
//            return "The " + this.color + "" + " cat is meowing!";
//        } else if (this.type === "dog") {
//            return "The " + this.color + "" + " dog is barking!";
//        } else {
//            return "It's not an Animal";
//        }
//    };
//
//var cat = new Animal ("cat", "callejero", "yellow", "chunky", "small", "speak");
//window.console.log(cat.speak());




//8.	Now, convert all of your properties to private properties. Then, create a private method called checkType(). In this method you will check to see what the type is. If it’s dog, return dog, otherwise, return cat. Then, create a public method called speak that returns the value of the checkType() method. The console window should now display “The <animal type> has made a noise!”

//var Animal = function (type, breed, color, height, lenght) {
//    "use strict";
//    var type = type;
//    var breed = breed;
//    var color = color;
//    var height = height;
//    var lenght = lenght;
//    var checkType = function () {
//        if  (type === "dog") {
//            return "dog";
//        } else {
//            return "cat";
//    } 
//};
//
//    this.speak = function () {
//    return "The " + checkType () + " has made a noise!";
//};
//}
//
//var dog = new Animal ("dog", "street dog", "black", "chunky", "small");
//window.console.log(dog.speak());


/*9.	Create your own String method called findWords that inherits from the native String Object. This method should find all instances of a specific word within a provided paragraph of text. It should then alert out to the user the number of time that word was found in the paragraph. Remember, you’ll need to add your method to the String object’s prototype.*/


//String.prototype.findWords = function() {
//    "use strict";
//    var find = "";
//    for (var i = this.length; i >= 0; i--) {
//        find = this.match(/method/g);
//    }
//    return find.length;
//}
//var text = "Create your own String method called findWords that inherits from the native String Object. This method should find all instances of a specific word within a provided paragraph of text. It should then alert out to the user the number of time that word was found in the paragraph. Remember, you’ll need to add your method to the String object’s prototype";
//window.console.log(text.findWords());