/*====================
    全局变量
 =====================*/
var cfgAuthor = "AT.JS | CFG By AT";//WaterMark左侧文字
var jsVersion = "0.0.1";//JS版本号
var jsLastUpDateTime = "2021年5月12日00:02:16";//JS最后更新时间
var userName = Cheat.GetUsername();//Onetap用户名
var screenX = Render.GetScreenSize()[0];//屏幕X轴最大值
var screenY = Render.GetScreenSize()[1];//屏幕Y轴最大值



/*====================
    根目录UI
 =====================*/
UI.AddSubTab(["Visuals", "SUBTAB_MGR"], "AT Gui"); //添加AT Gui 界面



/*====================
   AT Gui 菜单监视
=====================*/
function AT_Gui_Monitor() {
    //WaterMark水印模块
    if (UI.GetValue(["Visuals", "SUBTAB_MGR", "AT Gui", "WaterMark"]) == 1) {
        WaterMark_ON();
    } else {
        WaterMark_OFF();
    }

}

Cheat.RegisterCallback("Draw", "AT_Gui_Monitor");//回调

/*====================
    控制台信息模块
 =====================*/
//JS载入通告
Cheat.PrintColor([255, 255, 255, 255], "===========================================\n");
Cheat.PrintColor([132, 112, 255, 255], "•> AT.js | Ver" + jsVersion + " <•\n");
Cheat.PrintColor([51, 255, 204, 255], "[AT] 感谢使用AT.js,尊敬的用户" + userName + "您好! \n");
Cheat.PrintColor([255, 255, 255, 255], "\n");
Cheat.PrintColor([255, 85, 55, 255], "信息: \n");
Cheat.PrintColor([255, 85, 55, 255], "JS正在努力的成长中....\n");
Cheat.PrintColor([255, 85, 55, 255], "最后更新时间:" + jsLastUpDateTime + "\n");
Cheat.PrintColor([132, 112, 255, 255], "•> JS by AndTun | Q1791314878 <•\n");
Cheat.PrintColor([255, 255, 255, 255], "===========================================\n");

//向控制台发送信息的方法
function ConsolePrint(teyp, text) {//类型，内容
    switch (teyp) {
        case 0://普通信息
            Cheat.PrintColor([51, 255, 204, 255], "• > " + text + "\n");
            break;
        case 1://警告信息
            Cheat.PrintColor([255, 85, 55, 255], "!! >" + text + "\n");
            break;
        default:
            Cheat.PrintColor([255, 255, 255, 255], "ConsolePrint || 错误...\n");
            break;
    }
}



/*====================
    WaterMark水印模块
 =====================*/
UI.AddCheckbox(["Visuals", "AT Gui", "AT Gui"], "WaterMark");
UI.AddColorPicker(["Visuals", "AT Gui", "AT Gui"], "WaterMark Background Colour"); //颜色
UI.SetColor(["Visuals", "AT Gui", "AT Gui", "WaterMark Background Colour"], [2, 49, 44, 255]);//设置默认颜色
UI.AddColorPicker(["Visuals", "AT Gui", "AT Gui"], "WaterMark Font Colour"); //颜色
UI.SetColor(["Visuals", "AT Gui", "AT Gui", "WaterMark Font Colour"], [255, 255, 255, 180]);//设置默认颜色
UI.AddSliderInt(["Visuals", "AT Gui", "AT Gui"], "WaterMark X", 0, screenX);
UI.AddSliderInt(["Visuals", "AT Gui", "AT Gui"], "WaterMark Y", 0, screenY);
UI.SetValue(["Visuals", "AT Gui", "AT Gui", "WaterMark X"], screenX-(screenX/4));
UI.SetValue(["Visuals", "AT Gui", "AT Gui", "WaterMark Y"], screenY - (screenY - 20));

//开启
function WaterMark_ON() {
    UI.SetEnabled(["Visuals", "AT Gui", "AT Gui", "WaterMark Background Colour"], 1);
    UI.SetEnabled(["Visuals", "AT Gui", "AT Gui", "WaterMark Font Colour"], 1);
    UI.SetEnabled(["Visuals", "AT Gui", "AT Gui", "WaterMark X"], 1);
    UI.SetEnabled(["Visuals", "AT Gui", "AT Gui", "WaterMark Y"], 1);
    var x = UI.GetValue(["Visuals", "AT Gui", "AT Gui", "WaterMark X"]);
    var y = UI.GetValue(["Visuals", "AT Gui", "AT Gui", "WaterMark Y"]);
    var barColor = UI.GetColor(["Visuals", "AT Gui", "AT Gui", "WaterMark Background Colour"]);
    var lineColor = UI.GetColor(["Visuals", "AT Gui", "AT Gui", "WaterMark Font Colour"]);
    var logoIconFont = Render.GetFont("AT_Icons.ttf", 32, false);
    var miscIconFont = Render.GetFont("AT_Icons.ttf", 16, false);
    var miscFont = Render.GetFont("AT_ArturitoSlab.ttf", 13, false);
    var time = new Date();
    var hours = time.getHours();
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();
    //上底
    Render.GradientRect(x - 20, y - 1, 150, 2, 1, [lineColor[0], lineColor[1], lineColor[2], 255], [lineColor[0], lineColor[1], lineColor[2], 5]);
    Render.GradientRect(x + 140, y - 1, 150, 2, 1, [lineColor[0], lineColor[1], lineColor[2], 5], [lineColor[0], lineColor[1], lineColor[2], 255]);
    //中左
    Render.GradientRect(x - 21, y + 1, 150, 2, 1, [barColor[0], barColor[1], barColor[2], 255], [barColor[0], barColor[1], barColor[2], 5]);
    Render.GradientRect(x - 22, y + 3, 150, 2, 1, [barColor[0], barColor[1], barColor[2], 255], [barColor[0], barColor[1], barColor[2], 5]);
    Render.GradientRect(x - 23, y + 5, 150, 2, 1, [barColor[0], barColor[1], barColor[2], 255], [barColor[0], barColor[1], barColor[2], 5]);
    Render.GradientRect(x - 24, y + 7, 150, 2, 1, [barColor[0], barColor[1], barColor[2], 255], [barColor[0], barColor[1], barColor[2], 5]);
    Render.GradientRect(x - 25, y + 9, 150, 2, 1, [barColor[0], barColor[1], barColor[2], 255], [barColor[0], barColor[1], barColor[2], 5]);
    Render.GradientRect(x - 26, y + 11, 150, 2, 1, [barColor[0], barColor[1], barColor[2], 255], [barColor[0], barColor[1], barColor[2], 5]);
    Render.GradientRect(x - 27, y + 13, 150, 2, 1, [barColor[0], barColor[1], barColor[2], 255], [barColor[0], barColor[1], barColor[2], 5]);
    Render.GradientRect(x - 28, y + 15, 150, 2, 1, [barColor[0], barColor[1], barColor[2], 255], [barColor[0], barColor[1], barColor[2], 5]);
    //中右
    Render.GradientRect(x + 141, y + 1, 150, 2, 1, [barColor[0], barColor[1], barColor[2], 5], [barColor[0], barColor[1], barColor[2], 255]);
    Render.GradientRect(x + 142, y + 3, 150, 2, 1, [barColor[0], barColor[1], barColor[2], 5], [barColor[0], barColor[1], barColor[2], 255]);
    Render.GradientRect(x + 143, y + 5, 150, 2, 1, [barColor[0], barColor[1], barColor[2], 5], [barColor[0], barColor[1], barColor[2], 255]);
    Render.GradientRect(x + 144, y + 7, 150, 2, 1, [barColor[0], barColor[1], barColor[2], 5], [barColor[0], barColor[1], barColor[2], 255]);
    Render.GradientRect(x + 145, y + 9, 150, 2, 1, [barColor[0], barColor[1], barColor[2], 5], [barColor[0], barColor[1], barColor[2], 255]);
    Render.GradientRect(x + 146, y + 11, 150, 2, 1, [barColor[0], barColor[1], barColor[2], 5], [barColor[0], barColor[1], barColor[2], 255]);
    Render.GradientRect(x + 147, y + 13, 150, 2, 1, [barColor[0], barColor[1], barColor[2], 5], [barColor[0], barColor[1], barColor[2], 255]);
    Render.GradientRect(x + 148, y + 15, 150, 2, 1, [barColor[0], barColor[1], barColor[2], 5], [barColor[0], barColor[1], barColor[2], 255]);
    //下底
    Render.GradientRect(x - 29, y + 17, 150, 2, 1, [lineColor[0], lineColor[1], lineColor[2], 255], [lineColor[0], lineColor[1], lineColor[2], 5]);
    Render.GradientRect(x + 149, y + 17, 150, 2, 1, [lineColor[0], lineColor[1], lineColor[2], 5], [lineColor[0], lineColor[1], lineColor[2], 255]);
    //文字
    Render.String(x + 125, y - 5, 0, "k", lineColor, logoIconFont);//中间图标
    Render.String(x + -18, y + 2, 0, "F", lineColor, miscIconFont);//CFG作者图标
    Render.String(x + -5, y + 1, 0, cfgAuthor, lineColor, miscFont);//左边文字
    Render.String(x + 205, y + 2, 0, "4", lineColor, miscIconFont);//时间图标
    Render.String(x + 155, y + 1, 0, hours+":"+minutes+":"+seconds, lineColor, miscFont);//时间文字
    Render.String(x + 280, y + 2, 0, "L", lineColor, miscIconFont);
    Render.String(x + 220, y + 1, 0, "| "+userName, lineColor, miscFont);
}
//关闭
function WaterMark_OFF() {
    UI.SetEnabled(["Visuals", "AT Gui", "AT Gui", "WaterMark Background Colour"], 0);
    UI.SetEnabled(["Visuals", "AT Gui", "AT Gui", "WaterMark Font Colour"], 0);
    UI.SetEnabled(["Visuals", "AT Gui", "AT Gui", "WaterMark X"], 0);
    UI.SetEnabled(["Visuals", "AT Gui", "AT Gui", "WaterMark Y"], 0);
}