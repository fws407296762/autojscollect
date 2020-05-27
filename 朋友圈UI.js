"ui";

var SY = {
    PackageManager:android.content.pm.PackageManager
}

ui.layout(
    <frame>
        <vertical padding="16">
            <text>发送内容</text>
            <input 
                hint="请输入需要发布的内容"
                lines="10" 
                id="content" 
                gravity="left" 
                inputType="textLongMessage|textMultiLine"

            ></input>
        </vertical>
        <vertical padding="16">
            <text>选择图片</text>

        </vertical>
    </frame>
    
);
