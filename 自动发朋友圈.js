//打开微信

app.launchApp("微信");
// 打开发现
click("发现")
click("朋友圈")

var i = 10;
var fb = setInterval(() => {
    if(i<0){
        clearInterval(fb);
        return false;
    }
    id("cj").findOne().longClick();
    id("fdh").findOne().setText("自动发布第"+i+"次");
    id("ch").findOne().click();
    i--;
}, 1000);