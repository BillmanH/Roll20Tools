// !get-em
on("chat:message",function(msg){
    if(msg.type=="api" && msg.content.indexOf("!get-em")==0)
    {
         var agrs = msg.content.split(/\s+/);
         var selected = msg.selected;
         if(selected==undefined){
             sendChat("API", "You must select at least one attacker")
         }
         else {
             sendChat("GM", String(selected.length) + "attacking:")
             for(i=0;i<selected.length;i++){
                 var tok = getObj("graphic",selected[i]._id);
                 var roll = randomInteger(20)
                 var str = "Attacks: "
                 str += String(roll)
                 sendChat(tok.get("name"),str);
             }
         }
    }
 }); 
 
 function mobAttack(){
     
 }