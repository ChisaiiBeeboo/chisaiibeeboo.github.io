var client = {
    name: "Jasmine",
    age: 24, 
    quote:  "Is that? Is that a magic carpet?"
    };
    
var client2 = {
    name: "Alladdin",
    age: 26,
    quote: "That's Abu!",
    };
    


console.log(client);
console.log(client2);
    
var adamSandler = {
    name: "Adam Sandler",
    age: 47,
    quote: "The price is wrong, Bob!",
    funTimes : function(){
        console.log("WHAT A FUN TIME");
    }
};

adamSandler.funTimes
    
var ClientMaker = function (name, age, quote) {
        this.name = name,
        this.age = age,
        this.quote = quote
    this.funStuff = function(){
      console.log("FUN!")
    }
};




var kristenBell = new ClientMaker("Kristen Bell", 33, "Do you wanna build a snowman?")

var jimCarrey = new ClientMaker("Jim Carrey", 52, "...So you're telling me there's a chance? YEAH!")

var adamSandler = new ClientMaker("adam sandler", 47, "That's your home! Are you too good for your home?!");
adamSandler.funStuff

var sandlerAdams = new ClientMaker("Sandler Adams", 47, "That's your home! Are you too good for your home?!");
    
var printClient = function (client) {
        console.log("Client's name: " + client.name + " Age: " + client.age + " famous quote is " + client.quote);
};

printClient(client2);