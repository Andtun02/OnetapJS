//控制台输出
var username = Cheat.GetUsername();
Cheat.PrintColor([255, 255, 255, 255], "===========================================\n");
Cheat.PrintColor([132, 112, 255, 255], "•> AndTun.JS | Ver0.0.2 <•\n");
Cheat.PrintColor([51, 255, 204, 255], "[AT] 感谢使用AndTun.JS,尊敬的用户" + username + "您好! \n");
Cheat.PrintColor([255, 255, 255, 255], "\n");
Cheat.PrintColor([255, 85, 55, 255], "更新日志 :\n");
Cheat.PrintColor([255, 85, 55, 255], "1.添加了Better ESP [观察全局动向,粮草先行一步] 2021年4月18日00:10:28\n");
Cheat.PrintColor([255, 85, 55, 255], "2.添加了Health & Armor [美化血量/护甲条] 2021年4月18日23:16:37\n");
Cheat.PrintColor([132, 112, 255, 255], "•> JS by AndTun | Q1791314878 <•\n");
Cheat.PrintColor([255, 255, 255, 255], "===========================================\n");

//视觉 Visuals
UI.AddSubTab(["Visuals", "SUBTAB_MGR"], "AT Visuals"); //添加AT Visuals
UI.AddSubTab(["Visuals", "SUBTAB_MGR"], "AT Gui"); //添加AT Gui
//AT Visuals》Better ESP
UI.AddCheckbox(["Visuals", "AT Visuals", "AT Visuals"], "Better ESP");//添加选择框: Better ESP
UI.AddCheckbox(["Visuals", "AT Visuals", "AT Visuals"], "View Weapons");//添加选择框: View Weapons
UI.AddColorPicker(["Visuals", "AT Visuals", "AT Visuals"], "Point Colour"); //点的颜色
UI.SetColor(["Visuals", "AT Visuals", "AT Visuals","Point Colour"], [0, 255, 127, 255] );//设置默认颜色
UI.AddColorPicker(["Visuals", "AT Visuals", "AT Visuals"], "Weapons/Name Colour"); //显示颜色
UI.SetColor(["Visuals", "AT Visuals", "AT Visuals","Weapons/Name Colour"], [211,211,211,255] );//设置默认颜色
//AT Gui》
UI.AddCheckbox(["Visuals", "AT Gui", "AT Gui"], "Health & Armor");//添加选择框: Health & Armor
UI.AddColorPicker(["Visuals", "AT Gui", "AT Gui"], "Health Colour"); //血的颜色
UI.SetColor(["Visuals", "AT Gui", "AT Gui","Health Colour"], [250,128,114,255] );//设置默认颜色 	鲜肉(鲑鱼)色
UI.AddColorPicker(["Visuals", "AT Gui", "AT Gui"], "Health Background Colour"); //血的背景颜色
UI.SetColor(["Visuals", "AT Gui", "AT Gui","Health Background Colour"], [240, 240, 240, 120] );//设置默认颜色
UI.AddColorPicker(["Visuals", "AT Gui", "AT Gui"], "Armor Colour"); //护甲的颜色
UI.SetColor(["Visuals", "AT Gui", "AT Gui","Armor Colour"], [64,224,208,180] );//设置默认颜色
UI.AddColorPicker(["Visuals", "AT Gui", "AT Gui"], "Armor Background Colour"); //护甲的背景颜色
UI.SetColor(["Visuals", "AT Gui", "AT Gui","Armor Background Colour"], [240, 240, 240, 120] );//设置默认颜色
//监听: AT Gui Menu
function AT_Gui_Menu() {
    if (UI.GetValue(["Visuals", "AT Gui", "AT Gui","Health & Armor"])) {
        UI.SetEnabled(["Visuals", "AT Gui", "AT Gui", "Health Colour"], 1);
        UI.SetEnabled(["Visuals", "AT Gui", "AT Gui", "Armor Colour"], 1);
        UI.SetEnabled(["Visuals", "AT Gui", "AT Gui", "Health Background Colour"], 1);
        UI.SetEnabled(["Visuals", "AT Gui", "AT Gui", "Armor Background Colour"], 1);
        health_state_draw();
        if (Entity.IsAlive(Entity.GetLocalPlayer())) {//关闭/开启原有血甲条
            Convar.SetFloat("hidehud", 8);
        } else {
            Convar.SetFloat("hidehud", 0);
        }
    } else {
        UI.SetEnabled(["Visuals", "AT Gui", "AT Gui", "Health Colour"], 0);
        UI.SetEnabled(["Visuals", "AT Gui", "AT Gui", "Armor Colour"], 0);
        UI.SetEnabled(["Visuals", "AT Gui", "AT Gui", "Health Background Colour"], 0);
        UI.SetEnabled(["Visuals", "AT Gui", "AT Gui", "Armor Background Colour"], 0);
        Convar.SetFloat("hidehud", 0);
    }
}

const screen_size = Render.GetScreenSize();//屏幕X坐标
const screen_width = Math.round(screen_size[0]);//屏幕Y坐标

//获取信息
function Get_Prop(table, prop) {
    const Prop = Entity.GetProp(Entity.GetLocalPlayer(), table, prop);
    return Prop;
}

//计算: 乘
function multiply(a, b) {
    const multiply = a * b
    return multiply
}


//绘制血甲条
function health_state_draw() {
    if (!Entity.IsAlive(Entity.GetLocalPlayer())) return;
        const Neon_Indicator_Font = Render.GetFont("Hi Jack-2.ttf", 29,true);//血的字体
        const Neon_Indicator_Font_AT = Render.GetFont("MuseoSansCyrl-900.ttf", 30,false);//字的字体
        const Neon_Indicator_Font_Small = Render.GetFont("Hi Jack-2.ttf", 24,true);//护甲的字体
        const HP_indicatorX = 20//X坐标
        const HP_indicatorY = screen_size[1] - 50//Y坐标
        const hp = Get_Prop("CBasePlayer", "m_iHealth");//获取角色血量
        const arm = Get_Prop("CCSPlayerResource", "m_iArmor");//获取角色护甲
        var hpColor = UI.GetColor(["Visuals", "AT Gui", "AT Gui","Health Colour"]);
        var armColor = UI.GetColor(["Visuals", "AT Gui", "AT Gui","Armor Colour"]);
        var hpBgColor = UI.GetColor(["Visuals", "AT Gui", "AT Gui","Health Background Colour"]);
        var armBgColor = UI.GetColor(["Visuals", "AT Gui", "AT Gui","Armor Background Colour"]);
        if (hp < 300) {
            Render.FilledRect(HP_indicatorX + 68, HP_indicatorY + 2, multiply(hp, 3), 16, hpBgColor);
            Render.FilledRect(HP_indicatorX + 66, HP_indicatorY, multiply(hp, 3), 16, hpColor);
        } else {
            Render.FilledRect(HP_indicatorX + 68, HP_indicatorY + 2, 300, 16, hpBgColor);
            Render.FilledRect(HP_indicatorX + 66, HP_indicatorY, 300, 16, hpColor);
        }
        if (arm < 300) {
            Render.FilledRect(HP_indicatorX + 68, HP_indicatorY - 8, multiply(arm, 3), 6, armBgColor);
            Render.FilledRect(HP_indicatorX + 66, HP_indicatorY - 10, multiply(arm, 3), 6, armColor);
        } else {
            Render.FilledRect(HP_indicatorX + 68, HP_indicatorY - 8, 300, 6, armBgColor);
            Render.FilledRect(HP_indicatorX + 66, HP_indicatorY - 10, 300, 6, armColor);
        }

        //血的字
        Render.String(HP_indicatorX + 402, HP_indicatorY + 5, 1, hp.toString(), [102, 102, 255, 255], Neon_Indicator_Font)
        Render.String(HP_indicatorX + 403, HP_indicatorY + 6, 1, hp.toString(), hpColor, Neon_Indicator_Font)
        Render.String(HP_indicatorX + 401, HP_indicatorY + 5, 1, hp.toString(), [255, 255, 255, 255], Neon_Indicator_Font)
    
        //护甲的字
        Render.String(HP_indicatorX + 401, HP_indicatorY - 20, 1, arm.toString(), armColor, Neon_Indicator_Font_Small)
        Render.String(HP_indicatorX + 400, HP_indicatorY - 21, 1, arm.toString(), [240, 240, 240, 255], Neon_Indicator_Font_Small)

        //字
        Render.Rect(HP_indicatorX - 25, HP_indicatorY - 10, 40, 40, [100, 100, 255, 0]);
        Render.Rect(HP_indicatorX - 25, HP_indicatorY - 10, 40, 40, [100, 100, 255, 0]);
        Render.String(HP_indicatorX  + 25 , HP_indicatorY - 14, 1, "AT", [102, 255, 255, 240], Neon_Indicator_Font_AT)
        Render.String(HP_indicatorX  + 24 , HP_indicatorY - 12, 1, "AT", [240, 240, 240, 240], Neon_Indicator_Font_AT)
    
    
    }


//监听: AT Visuals Menu
function AT_Visuals_Menu() {
    //Better ESP
    if (!UI.GetValue(["Visuals", "AT Visuals", "AT Visuals", "Better ESP"])) { //未选择时
        UI.SetEnabled(["Visuals", "Extra", "Dormant ESP"], 1)
        UI.SetEnabled(["Visuals", "AT Visuals", "AT Visuals", "View Weapons"], 0);
        UI.SetEnabled(["Visuals", "AT Visuals", "AT Visuals", "Point Colour"], 0);
        UI.SetEnabled(["Visuals", "AT Visuals", "AT Visuals", "Weapons/Name Colour"], 0);
    } else {//选择时
        UI.SetValue(["Visuals", "Extra", "Dormant ESP"], 0)//设置Dormant ESP开启为假
        UI.SetEnabled(["Visuals", "Extra", "Dormant ESP"], 0)//设置Dormant ESP可视为假
        UI.SetEnabled(["Visuals", "AT Visuals", "AT Visuals", "View Weapons"], 1);//设置View Weapons可视为真
        UI.SetEnabled(["Visuals", "AT Visuals", "AT Visuals", "Point Colour"], 1);//设置Point Colour可视为真
        UI.SetEnabled(["Visuals", "AT Visuals", "AT Visuals", "Weapons/Name Colour"], 1);
    }
}
//监听: AT Visuals Main
var pls = 0;
function AT_Visuals_Main() {
    //Better ESP
    if (!UI.GetValue(["Visuals", "AT Visuals", "AT Visuals", "Better ESP"])) return;//未选择 返回
    
    var ens = Entity.GetEnemies();//获取敌方实体索引的数组
    var fnt = Render.GetFont("NationalPark.otf", 12, false);//获取字体
    var clr = UI.GetColor(["Visuals", "AT Visuals", "AT Visuals", "Point Colour"]);//获取点的颜色
    var WNclr = UI.GetColor(["Visuals", "AT Visuals", "AT Visuals","Weapons/Name Colour"]);//获取武器的颜色
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

        if (ilh < 70) cor = [255, 140, 0, 255];//深橙色 <70血时
        else cor = [0, 255, 127, 255];//适中的春天的绿色 >70血时
        if (ilh < 35) cor = [255, 0, 0, 255];//	纯红 <35血时

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
            Render.String(pos, p0s + 20, 1, nme,WNclr, fnt)
            Render.String(pos, p0s + 30, 1, ilh + " HP", cor, fnt)
//裁缝结束
            if (UI.GetValue(["Visuals", "AT Visuals", "AT Visuals", "View Weapons"]))//是否显示武器
                Render.String(pos, p0s + 40, 1, wpn, WNclr, fnt)
        }
    }
}
    Cheat.RegisterCallback("Draw", "AT_Gui_Menu");//回调
    Cheat.RegisterCallback("Draw", "AT_Visuals_Main");//回调
    Cheat.RegisterCallback("Draw", "AT_Visuals_Menu");//回调