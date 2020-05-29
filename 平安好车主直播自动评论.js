var zn_live_message_input = id("zn_live_message_input").findOne()

if(zn_live_message_input){
    toast("点击评论按钮");
    zn_live_message_input.parent().click();
}else{
    toast("没找到zn_live_message_input");
}

var input_message = id("input_message").findOne();
if(input_message){
    toast("显示评论输入框");
}else{
    toast("没找到input_message");
}
var input_mode = id("input_mode").findOne();
if(input_mode){
    toast("点击表情按钮");
    input_mode.click();
}else{
    toast("没找到input_message");
}
var zn_live_face_send = id("zn_live_face_send").findOne()

if(zn_live_face_send){
    toast("点击发送");
    var i = 20;
    while(i){
        input_message.setText("两年");
        zn_live_face_send.click();
        i--;
    }
}else{
    toast("没找到zn_live_face_send");
}

