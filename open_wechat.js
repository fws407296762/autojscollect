//运行微信
app.launchApp("微信");
// 打开通讯录
click("通讯录")
click("a艳秋")
click("发消息")
var i = 10;
while(i){
    setText(0,"我喜欢你"+i);
    click("发送");
    i--;
}

