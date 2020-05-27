var w = floaty.window(
    <frame gravity="center" bg="#ff0000" alpha="0.8">
        <text id="text">悬浮文字</text>
    </frame>
);

setTimeout(()=>{
    w.close();
}, 10000);