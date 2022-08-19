function saturdayFun(arg) {
 if  ( arg !== undefined){
    return `This Saturday, I want to ${arg}!`
 }
 return "This Saturday, I want to roller-skate!" ;  
}

saturdayFun()

const mondayWork = function (arg) {
    if (arg !== undefined){
        return `This Monday, I will ${arg}.`

    }
    return "This Monday, I will go to the office.";
  };

  mondayWork()


  //function wrapAdjective (arg){
    
   // const innerFunction = function (emphatic= "*a hard worker*!"){
        //return `You are ${emphatic}`
   // }
   // return innerFunction

    //}
     
    function wrapAdjective(arg){
        if(arg=="*"){
            const innerFunciton = function(adj){
                return "You are *" + adj +"*!";
            }
            return innerFunciton;
        }
        if(arg=="||"){
            const innerFunciton = function(adj){
                return "You are ||" + adj +"||!";
            }
            return innerFunciton;
        }
    }
    
    
    wrapAdjective()()

//


