strLengthCompare(str){
  var strLength = str.Length;
  var array = [];
  function clip(){
    var lastClipIndex = 0;
    for(i=0; i < str.Length; i++){
       var character = str.charAt(i);
       var piece = "";
       var pieceLength = 00;
       var obj = {};
       var array[i] = [];
       var isSpace = /s/.test(character);
       if (isSpace === true){
	 piece = str.slice(lastClipIndex, character);
	 pieceLength = piece.length;
	 array[i].push(piece);
	 array[i].push(pieceLength);
	 lastClipIndex = character;
      }
    }
    return array;
    }
     
  function compareStrings(){
    var arrayLength = array.length;
    var arrayLengthPrev = 0;
    var currentChampion = 
      {
      name : "",
      length : 0,
      index : 0,
      } 
	
    var announce = "The current champion is " + currentChampion.name + " with a length of " + currentChampion.length + "."; 

    for(i = 0; i < arrayLength; i++){
      var arrayLengthCurrent = array[i][2];
      if(arrayLengthCurrent > arrayLengthPrev){
	currentChampion.index = array[i];
	currentChampion.length = array[i][2];
	currentChampion.name = array[i][1];
	arrayLengthPrev = array[1][2];  
      }
      return announce;
    }
  }

  function run(){
   clip();
   compareStrings();
  }

return run();
}

console.log(strLengthCompare("The rootinest tootines cowboy that you ever could come across out there on nem grait plains."); 
