//控制台输出
var username = Cheat.GetUsername();
Cheat.PrintColor([255, 255, 255, 255], "===========================================\n");
Cheat.PrintColor([132, 112, 255, 255], "•> AndTun.JS | Ver0.0.1 <•\n");
Cheat.PrintColor([51, 255, 204, 255], "[AT] 感谢使用AndTun.JS,尊敬的用户" + username + "您好! \n");
Cheat.PrintColor([255, 255, 255, 255], "\n");
Cheat.PrintColor([255, 85, 55, 255], "更新日志 :\n");
Cheat.PrintColor([255, 85, 55, 255], "1.添加了Better ESP [观察全局动向,粮草先行一步]\n");
Cheat.PrintColor([132, 112, 255, 255], "•> JS by AndTun | Q1791314878 <•\n");
Cheat.PrintColor([255, 255, 255, 255], "===========================================\n");
//视觉
UI.AddSubTab(["Visuals", "SUBTAB_MGR"], "AT Visuals"); //添加标题
//视觉》Better ESP
UI.AddCheckbox(["Visuals", "AT Visuals", "AT Visuals"], "Better ESP");//添加选择框: Better ESP
UI.AddCheckbox(["Visuals", "AT Visuals", "AT Visuals"], "View Weapons");//显示武器
UI.AddColorPicker(["Visuals", "AT Visuals", "AT Visuals"], "Point Colour"); //显示颜色

//监听: AT Visuals Menu
function AT_Visuals_Menu() {
    //Better ESP
    if (!UI.GetValue(["Visuals", "AT Visuals", "AT Visuals", "Better ESP"])) { //未选择时
        UI.SetEnabled(["Visuals", "Extra", "Dormant ESP"], 1)
        UI.SetEnabled(["Visuals", "AT Visuals", "AT Visuals", "View Weapons"], 0);
        UI.SetEnabled(["Visuals", "AT Visuals", "AT Visuals", "Point Colour"], 0);
    } else {//选择时
        UI.SetValue(["Visuals", "Extra", "Dormant ESP"], 0)//设置Dormant ESP开启为假
        UI.SetEnabled(["Visuals", "Extra", "Dormant ESP"], 0)//设置Dormant ESP可视为假
        UI.SetEnabled(["Visuals", "AT Visuals", "AT Visuals", "View Weapons"], 1);//设置View Weapons可视为真
        UI.SetEnabled(["Visuals", "AT Visuals", "AT Visuals", "Point Colour"], 1);//设置Point Colour可视为真
    }
}
//监听: AT Visuals Main
var pls = 0;
function AT_Visuals_Main() {
    //Better ESP
    if (!UI.GetValue(["Visuals", "AT Visuals", "AT Visuals", "Better ESP"])) return;//未选择 返回
    
    var ens = Entity.GetEnemies();//获取敌方实体索引的数组
    var fnt = Render.GetFont("NationalPark.otf", 12, false);//获取字体
    var clr = UI.GetColor(["Visuals", "AT Visuals", "AT Visuals", "Point Colour"]);//获取颜色
//裁缝开始 来源: Acro.JS
    pls += 0.2;
    if (pls > 10) pls = 0;

    for (i in ens) {
        dpz = ens[i];

        var ilh = Entity.GetProp(dpz, "CPlayerResource", "m_iHealth").toString();
        var nme = Entity.GetName(dpz);
        var hlo = Entity.GetWeapon(dpz);
        var wpn = Entity.GetClassName(hlo);
        if (wpn == "CCSPlayer"){
            var wpn = "none";
        }else{
            var wpn = wpn.replace("CWeapon","");//优化主武器名称
            var wpn = wpn.replace("HK","")//优化副武器名称
        }

        if (ilh < 70) cor = [250, 116, 43, 235];
        else cor = [101, 253, 240, 235];
        if (ilh < 35) cor = [232, 5, 5, 185];

        if (Entity.IsDormant(dpz)) {

            var rndrbox = Entity.GetRenderBox(dpz);
            var pos = rndrbox[1] + (rndrbox[3] - rndrbox[1]) / 2;
            var slz = (rndrbox[3] - rndrbox[1]) / 3
            var p0s = rndrbox[2];

            if (slz < 5) slz = 5;
            if (slz > 9) slz = 9;
            if (nme.length > 8) nme = nme.substring(0, 8);

            Render.FilledCircle(pos, p0s, slz, clr);
            Render.Circle(pos, p0s, slz + pls, clr);
            Render.String(pos, p0s + 20, 1, nme, [210, 210, 210, 255], fnt)
            Render.String(pos, p0s + 30, 1, ilh + " HP", cor, fnt)
//裁缝结束
            if (UI.GetValue(["Visuals", "AT Visuals", "AT Visuals", "View Weapons"]))//是否显示武器
                Render.String(pos, p0s + 40, 1, wpn, [210, 210, 210, 255], fnt)
        }
    }
}
    Cheat.RegisterCallback("Draw", "AT_Visuals_Main");//回调
    Global.RegisterCallback("Draw", "AT_Visuals_Menu");//回调