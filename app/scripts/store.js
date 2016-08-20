function Store(){
  let stored = [];

  return (function(questionNumber,value,action={}){

    if(questionNumber !== null && typeof(questionNumber) !== "undefined"){
      switch(action.ElementType){
      case "multiple":
        if(action.type === "add"){
          if(stored[questionNumber] === null || typeof(stored[questionNumber]) === 'undefined'){
            stored[questionNumber] = [value];
          }else{
          if(typeof(stored[questionNumber].find(function(myvalue){return myvalue === value;})) === 'undefined'){
            stored[questionNumber].push(value);
          }
          }
        }
        if(action.type === "remove" && stored[questionNumber] !== null && typeof(stored[questionNumber]) !== 'undefined'){
          stored[questionNumber] = stored[questionNumber].filter(function(myvalue){return myvalue !== value;});
        }
        break;
      case "text":
        stored[questionNumber] = value;
        break;
      case "unique":
        stored[questionNumber] = value;
        break;
       }
     }
      return stored;

  });
}
const store = Store();
export {store}
