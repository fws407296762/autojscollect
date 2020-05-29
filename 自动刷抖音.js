var emj = id("emj").findOne();
if(emj){
    toast("找到emj")
}else{
    toast("找不到emj")
}
id("emj").findOne().scrollForward()