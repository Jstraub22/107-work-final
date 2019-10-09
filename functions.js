function sayHelloWorld(){
    console.log("Hello, world!");
  }
  sayHelloWorld();
  
  function js(){
      console.log("i love javascript")
  }
  
  
  function greetAFriend(friendName){
    console.log(`Hello, ${friendName}!`)
  }
  
  // When we call the function, we give it the actual name that we want to print.
  greetAFriend("jacob");

  function greetAFriend2(friendName, timeOfDay){
    var greeting;
    if(timeOfDay === "morning"){
      greeting = "Good morning";
    } else if (timeOfDay === "afternoon"){
      greeting = "Good afternoon";
    } else if (timeOfDay === "evening"){
      greeting = "Good evening";
    } else {
      greeting = "Hello";
    }
    var personalGreeting = `${greeting}, ${friendName}!`;
    console.log(personalGreeting);
  }
  
  greetAFriend2("Todd", "evening"); // Good evening, Todd!
  greetAFriend2("Jamie", "morning"); // Good morning, Jamie!
  greetAFriend2("Hannah", "afternoon"); // Good afternoon, Hannah!
  greetAFriend2("Norman", "midnight"); // Hello, Norman!


  function makeAPizza(crustType, size, toppingsArray){
    var finishedPizza = `A ${size} pizza with ${crustType} crust and ${toppingsArray.join(", ")} on top.`
    return finishedPizza;
  }
  
  var myPizza = makeAPizza("wheat", "large", ["green peppers", "onions", "pepperoni"]);
  
  var yourPizza = makeAPizza("white", "medium", ["anchovies", "feta", "pineapple"]);
  
  console.log(myPizza); 
  // Expected output: "A large pizza with wheat crust and green peppers, onions, pepperoni on top."
  
  console.log(yourPizza);
  // Expected output: "A medium pizza with white crust and green anchovies, feta, pineapple on top."
  var classPizza=makeAPizza("thin","xl",["pep","brazil nuts","chocolate"])
  console.log(classPizza);

  function add(num1,num2){
    console.log(num1+num2)
  } 
  add(1,2);
  
  function subtract(num1,num2){
      console.log(num1-num2);
  } subtract(1,2);

  function multiply(num2,num3){
  console.log(num2,num3);
 } multiply(2,3);

//   functon divide(3,6){
//   console.log(num3);
//  } saydivide();