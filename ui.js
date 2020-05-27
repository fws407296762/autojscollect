"ui";
ui.layout(
    <vertical>
        <button id="openWechat" text="打开微信"/>
        <button text="第二个按钮"/>
    </vertical>
);
ui.openWechat.click(function(){
    app.launchApp("微信")
})