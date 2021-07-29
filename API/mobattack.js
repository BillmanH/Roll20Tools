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
             sendChat("API", String(selected.length) + " objects are attacking.")
             for(i=0;i<selected.length;i++){
                 var tok = getObj("graphic",selected[i]._id);
                 sendChat(tok.get("name"),"Attacks you!");
             }
         }
    }
 }); 
 
 function mobAttack(){
     
 }