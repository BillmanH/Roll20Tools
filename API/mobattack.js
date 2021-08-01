// !get-em
on("chat:message",function(msg){
    if(msg.type=="api" && msg.content.indexOf("!mob")==0)
    {
         var args = msg.content.split(/\s+/);
         var attr = args[1]
         var attribute = pick_attr(attr)
         var selected = msg.selected;
         if(selected==undefined){
             sendChat("API", "You must select at least one attacker")
         }
         else {
             sendChat("GM", String(selected.length) + " attacking:")
             for(i=0;i<selected.length;i++){
                var tok = getObj("graphic",selected[i]._id);
                var roll = randomInteger(20)
                var str = "Attacks: "
                str += String(roll)
                if (attribute != undefined){
                    mod = get_char_attr(tok, attribute)
                    str += " + "
                    str += " " + attr + "(" + String(mod) +")"
                    str += ": " + String(roll+mod)
                }
                sendChat(tok.get("name"),str);
                // sendPing(tok.left,tok.top,tok._pageid)
             }
         }
    }
 }); 
 
 
 
 function get_char_attr(tok, attr){
        char = getObj("character",tok.get('represents'))
        mod = getAttrByName(char.id, attr)
    return mod
}
 
 
 function pick_attr(attr){
    var attribute = undefined
    if (attr != undefined){
        switch(attr.toLowerCase()) {
            case "dex":
                attribute = "dexterity_mod";
                break;
            case "str":
                attribute = "strength_mod";
                break;
            default:
                sendChat("GM", attr + " does not exist")
        }
    }
    return attribute
 }