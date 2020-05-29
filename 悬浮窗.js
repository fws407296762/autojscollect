var dwiath = device.width;
var w = floaty.window(
    <horizontal>
            <button id="settingbtn">设置</button>
            <button id="closebtn">关闭</button>
        </horizontal>
);


ui.run(function(){
    w.settingbtn.click(function(){
        toast("设置")
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
        }else{
            toast("没找到zn_live_face_send");
        }
        rawInput("评论").then(content=>{
            toast("点击发送");
            var i = 10;
            while(i){
                input_message.setText(content);
                zn_live_face_send.click();
                i--;
            }
        });
    });
    w.closebtn.click(function(){
        w.close();
    })
})

setInterval(() => {}, 100000);

// setTimeout(function(){
//     w.close();
// },1000)