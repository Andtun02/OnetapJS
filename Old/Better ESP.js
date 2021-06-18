//控制台输出
var username = Cheat.GetUsername();
Cheat.PrintColor([255, 255, 255, 255], "===========================================\n");
Cheat.PrintColor([132, 112, 255, 255], "•> AndTun.JS | Ver0.0.1 <•\n");
Cheat.PrintColor([51, 255, 204, 255], "[AT] 感谢使用AndTun.JS,尊敬的用户" + username + "您好! \n");
Cheat.PrintColor([255, 255, 255, 255], "\n");
Cheat.PrintColor([255, 85, 55, 255], "更新日志 :\n");
Cheat.PrintColor([255, 85, 55, 255], "1.添加了Better ESP [观察全局动向,粮草先行一步]\n");
Cheat.PrintColor([255, 85, 55, 255], "2.添加了Better ESP Weapons Ico [武器图标显示]] 2021年5月1日23:01:58\n");
Cheat.PrintColor([132, 112, 255, 255], "•> JS by AndTun | Q1791314878 <•\n");
Cheat.PrintColor([255, 255, 255, 255], "===========================================\n");
//视觉
UI.AddSubTab(["Visuals", "SUBTAB_MGR"], "AT Visuals"); //添加标题
//视觉》Better ESP
UI.AddCheckbox(["Visuals", "AT Visuals", "AT Visuals"], "Better ESP");//添加选择框: Better ESP
UI.AddCheckbox(["Visuals", "AT Visuals", "AT Visuals"], "View Weapons");//添加选择框: View Weapons
UI.AddCheckbox(["Visuals", "AT Visuals", "AT Visuals"], "View Weapons Ico");//添加选择框: View Weapons Ico
UI.AddSliderInt(["Visuals", "AT Visuals", "AT Visuals"], "View Weapons Ico Size", 14, 50);//添加选择框: View Weapons Ico Size 大小
UI.AddColorPicker(["Visuals", "AT Visuals", "AT Visuals"], "Point Colour"); //点的颜色
UI.SetColor(["Visuals", "AT Visuals", "AT Visuals","Point Colour"], [0, 255, 127, 255] );//设置默认颜色
UI.AddColorPicker(["Visuals", "AT Visuals", "AT Visuals"], "Weapons/Name Colour"); //显示颜色
UI.SetColor(["Visuals", "AT Visuals", "AT Visuals","Weapons/Name Colour"], [211,211,211,255] );//设置默认颜色

//监听: AT Visuals Menu
//全局变量
var espIcoSize = 14; //声明Better Esp的图标 大小
function AT_Visuals_Menu() {
    //Better ESP
    if (!UI.GetValue(["Visuals", "AT Visuals", "AT Visuals", "Better ESP"])) { //未选择时
        UI.SetEnabled(["Visuals", "Extra", "Dormant ESP"], 1)
        UI.SetEnabled(["Visuals", "AT Visuals", "AT Visuals", "View Weapons"], 0);
        UI.SetEnabled(["Visuals", "AT Visuals", "AT Visuals", "View Weapons Ico"], 0);
        UI.SetEnabled(["Visuals", "AT Visuals", "AT Visuals", "Point Colour"], 0);
        UI.SetEnabled(["Visuals", "AT Visuals", "AT Visuals", "Weapons/Name Colour"], 0);
    } else {//选择时
        UI.SetValue(["Visuals", "Extra", "Dormant ESP"], 0)//设置Dormant ESP开启为假
        UI.SetEnabled(["Visuals", "Extra", "Dormant ESP"], 0)//设置Dormant ESP可视为假
        UI.SetEnabled(["Visuals", "AT Visuals", "AT Visuals", "View Weapons"], 1);//设置View Weapons可视为真
        UI.SetEnabled(["Visuals", "AT Visuals", "AT Visuals", "View Weapons Ico"], 1);
        UI.SetEnabled(["Visuals", "AT Visuals", "AT Visuals", "Point Colour"], 1);//设置Point Colour可视为真
        UI.SetEnabled(["Visuals", "AT Visuals", "AT Visuals", "Weapons/Name Colour"], 1);
    }
    //自定义图标大小
    if (UI.GetValue(["Visuals", "AT Visuals", "AT Visuals", "View Weapons Ico"])) { //选择 ICO后
        UI.SetEnabled(["Visuals", "AT Visuals", "AT Visuals", "View Weapons Ico Size"], 1);
        espIcoSize = UI.GetValue(["Visuals", "AT Visuals", "AT Visuals", "View Weapons Ico Size"]);
    } else {
        UI.SetEnabled(["Visuals", "AT Visuals", "AT Visuals", "View Weapons Ico Size"], 0);
    }
}
//BetterEsp获取武器图标
function Get_BetterEsp_Ico(a) {
    var letter = ""
    switch (a) {
        case "DecoyGrenade":
            letter = "m"
            break
        case "SmokeGrenade":
            letter = "k"
            break
        case "HEGrenade":
            letter = "j"
            break
        case "P90":
            letter = "P"
            break
        case "NOVA":
            letter = "e"
            break
        case "MP9":
            letter = "O"
            break
        case "MP7":
            letter = "N"
            break
        case "P250":
            letter = "F"
            break
        case "Sawedoff":
            letter = "c"
            break
        case "Negev":
            letter = "f"
            break
        case "Mag7":
            letter = "d"
            break
        case "Bizon":
            letter = "M"
            break
        case "UMP45":
            letter = "L"
            break
        case "MP5Navy":
            letter = "N"
            break
        case "P2000"://P2000
            letter = "E"
            break
        case "MAC10":
            letter = "K"
            break
        case "M4A1":
            letter = "T"
            break
        case "M4A1"://M4A1
            letter = "S"
            break
        case "GalilAR":
            letter = "Q"
            break
        case "G3SG1":
            letter = "X"
            break
        case "Famas":
            letter = "R"
            break
        case "AWP":
            letter = "Z"
            break
        case "Aug":
            letter = "U"
            break
        case "AK47":
            letter = "W"
            break
        case "Glock":
            letter = "D"
            break
        case "FiveSeven":
            letter = "C"
            break
        case "SmokeGrenade":
            letter = "k"
            break
        case "SG552":
            letter = "V"
            break
        case "Sawedoff":
            letter = "c"
            break
        case "NOVA":
            letter = "e"
            break
        case "IncendiaryGrenade"://燃烧弹
            letter = "n"
            break
        case "MolotovGrenade":
            letter = "l"
            break
        case "Flashbang":
            letter = "i"
            break
        case "Elite":
            letter = "B"
            break
        case "DEagle":
            letter = "A"
            break
        case "USP":
            letter = "G"
            break
        case "M249":
            letter = "g"
            break
        case "Tec9":
            letter = "H"
            break
        case "SSG08":
            letter = "a"
            break
        case "Scout":
            letter = "V"
            break
        case "SCAR20":
            letter = "Y"
            break
        case "XM1014":
            letter = "b"
            break
        case "Taser"://电击枪
            letter = "h"
            break
        case "Knife"://刀
            letter = "1";
        default:
            letter = ""
            break
    }
    return letter
}
//监听: AT Visuals Main
var pls = 0;
function AT_Visuals_Main() {
    //Better ESP
    if (!UI.GetValue(["Visuals", "AT Visuals", "AT Visuals", "Better ESP"])) return;//未选择 返回

    var ens = Entity.GetEnemies();//获取敌方实体索引的数组
    var fnt = Render.GetFont("NationalPark.otf", 12, false);//获取字体
    var ico = Render.GetFont("weaponicon.ttf", espIcoSize, false);//获取图标字体
    var clr = UI.GetColor(["Visuals", "AT Visuals", "AT Visuals", "Point Colour"]);//获取点的颜色
    var WNclr = UI.GetColor(["Visuals", "AT Visuals", "AT Visuals", "Weapons/Name Colour"]);//获取武器的颜色
    //裁缝开始 来源: Acro.JS
    pls += 0.2;
    if (pls > 10) pls = 0;

    for (i in ens) {
        dpz = ens[i];

        var ilh = Entity.GetProp(dpz, "CPlayerResource", "m_iHealth").toString();
        var nme = Entity.GetName(dpz);
        var hlo = Entity.GetWeapon(dpz);
        var wpn = Entity.GetClassName(hlo);//当前武器
        if (wpn == "CCSPlayer") {
            var wpn = "none";
        } else {
            var wpn = wpn.replace("CWeapon", "");//优化主武器名称
            var wpn = wpn.replace("HK", "")//优化副武器名称
            var wpn = wpn.replace("C", "")//优化道具名称

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
            Render.String(pos, p0s + 20, 1, nme, WNclr, fnt)
            Render.String(pos, p0s + 30, 1, ilh + " HP", cor, fnt)
            //裁缝结束
            if (UI.GetValue(["Visuals", "AT Visuals", "AT Visuals", "View Weapons"]))//是否显示武器
                Render.String(pos, p0s + 40, 1, wpn, WNclr, fnt)

            //AndTun JS 2021年5月1日21:23:11 写[ESP武器图标]
            if (UI.GetValue(["Visuals", "AT Visuals", "AT Visuals", "View Weapons Ico"])) {//是否显示武器图标
                Render.String(pos, p0s + 50, 1, Get_BetterEsp_Ico(wpn), WNclr, ico)
            }
        }
    }
}
    Cheat.RegisterCallback("Draw", "AT_Visuals_Main");//回调
    Global.RegisterCallback("Draw", "AT_Visuals_Menu");//回调