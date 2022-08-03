function shout(string) {
    return string.toUpperCase();
  }
  function whisper(string){
    return string.toLowerCase()
  }
  function logShout(string){
    string.toUpperCase();
    console.log("HELLO")
  }
  function logWhisper(string){
    string.toLowerCase();
    console.log("hello")
  }
  
  function sayHiToHeadphonedRoommate(string){
    switch(string){
        case string.toLowerCase():
            return"I can't hear you!"
            break;
        case string.toUpperCase():
            return"YES INDEED!"
            break;
         case string="Let's have dinner together!":
             return"I would love to!";
             break;
    }
}