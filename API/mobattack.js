// !get-em
on("chat:message",function(msg){
    if(msg.type=="api" && msg.content.indexOf("!mob")==0)
    {
         var args = msg.content.split(/\s+/);
         var attr = args[1]
         var selected = msg.selected;
         if(selected==undefined){
             sendChat("API", "You must select at least one attacker")
         }
         else {
             sendChat("GM", String(selected.length) + " attacking:")
             for(i=0;i<selected.length;i++){
                 mod = get_char_attr(tok, attr)
                 var tok = getObj("graphic",selected[i]._id);
                 var roll = randomInteger(20)
                 var str = "Attacks: "
                 str += String(roll)
                 str += " + "
                 str += " " + attr + " "
                 str += String(mod)
                 sendChat(tok.get("name"),str);
                 // sendPing(tok.left,tok.top,tok._pageid)
             }
         }
    }
 }); 
 
 
 
 function get_char_attr(tok, attr){
     sendChat("GM","get char");
     char = getObj("character",tok.get('represents'))
     sendChat("GM",String(tok.get('represents')));
     // attribute = getAttrByName(char.id, 'strength')
     return attribute
 }
 
 
 function pick_attr(attr){
     var attribure = "none"
     switch(attr.toLowerCase()) {
       case "dex":
         attribure = "dexterity";
         break;
       case "str":
         attribure = "strength";
         break;
       default:
         attribure = attr + " does not exist"
     }
     return attribute
 }