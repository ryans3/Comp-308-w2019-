



//self-executing anonymous function
//IIFE -- immediately invoked function expression

(function(){

    let myFunctionalVariable = 0;

    function Start(){

        let myLocalVariable = 0;
        
        console.log(`App started...${+ myFunctionalVariable}`);
    }

    window.addEventListener("load", Start);
})();