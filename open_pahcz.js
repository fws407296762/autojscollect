//运行平安好车主
app.launchApp("平安好车主");
//点击跳过
var time = idContains("splash_time_tv").findOne();
if(time){
    time.click();
}
//点击车圈
let cqtab = idContains("main_page_tab_menu4").findOne();
if(cqtab){
    cqtab.click();
}


let text_zb = textContains("直播").findOne(3000).parent().click();

if(text_zb){
    toast("找到了");
    toast(isclick ? "点到了":"没点到")
}else{
    toast("没找到")
}