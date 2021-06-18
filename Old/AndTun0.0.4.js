//控制台输出
var username = Cheat.GetUsername();
Cheat.PrintColor([255, 255, 255, 255], "===========================================\n");
Cheat.PrintColor([132, 112, 255, 255], "•> AndTun.JS | Ver0.0.4 <•\n");
Cheat.PrintColor([51, 255, 204, 255], "[AT] 感谢使用AndTun.JS,尊敬的用户" + username + "您好! \n");
Cheat.PrintColor([255, 255, 255, 255], "\n");
Cheat.PrintColor([255, 85, 55, 255], "更新日志 :\n");
Cheat.PrintColor([255, 85, 55, 255], "1.添加了Better ESP [观察全局动向,粮草先行一步] 2021年4月18日00:10:28\n");
Cheat.PrintColor([255, 85, 55, 255], "2.添加了Health & Armor [美化血量/护甲条] 2021年4月18日23:16:37\n");
Cheat.PrintColor([255, 85, 55, 255], "3.添加了Buy List [购买清单] 2021年4月20日15:39:46\n");
Cheat.PrintColor([255, 85, 55, 255], "4.添加了Buy Logs [购买日志]2021年4月20日23:38:08\n");
Cheat.PrintColor([255, 85, 55, 255], "4.添加了Enemy View [敌人视角] [后续将更新颜色调整]2021年4月23日01:10:58\n");
Cheat.PrintColor([132, 112, 255, 255], "•> JS by AndTun | Q1791314878 <•\n");
Cheat.PrintColor([255, 255, 255, 255], "===========================================\n");

//视觉 Visuals
UI.AddSubTab(["Visuals", "SUBTAB_MGR"], "AT Visuals"); //添加AT Visuals
UI.AddSubTab(["Visuals", "SUBTAB_MGR"], "AT Gui"); //添加AT Gui
//AT Visuals》Better ESP
UI.AddCheckbox(["Visuals", "AT Visuals", "AT Visuals"], "Better ESP");//添加选择框: Better ESP
UI.AddCheckbox(["Visuals", "AT Visuals", "AT Visuals"], "View Weapons");//添加选择框: View Weapons
UI.AddColorPicker(["Visuals", "AT Visuals", "AT Visuals"], "Point Colour"); //点的颜色
UI.SetColor(["Visuals", "AT Visuals", "AT Visuals", "Point Colour"], [64, 224, 208, 180]);//设置默认颜色
UI.AddColorPicker(["Visuals", "AT Visuals", "AT Visuals"], "Weapons/Name Colour"); //显示颜色
UI.SetColor(["Visuals", "AT Visuals", "AT Visuals", "Weapons/Name Colour"], [211, 211, 211, 255]);//设置默认颜色
//AT Gui》Health & Armor
UI.AddCheckbox(["Visuals", "AT Gui", "AT Gui"], "Health & Armor");//添加选择框: Health & Armor
UI.AddColorPicker(["Visuals", "AT Gui", "AT Gui"], "Health Colour"); //血的颜色
UI.SetColor(["Visuals", "AT Gui", "AT Gui", "Health Colour"], [250, 128, 114, 255]);//设置默认颜色 	鲜肉(鲑鱼)色
UI.AddColorPicker(["Visuals", "AT Gui", "AT Gui"], "Health Background Colour"); //血的背景颜色
UI.SetColor(["Visuals", "AT Gui", "AT Gui", "Health Background Colour"], [240, 240, 240, 120]);//设置默认颜色
UI.AddColorPicker(["Visuals", "AT Gui", "AT Gui"], "Armor Colour"); //护甲的颜色
UI.SetColor(["Visuals", "AT Gui", "AT Gui", "Armor Colour"], [64, 224, 208, 180]);//设置默认颜色
UI.AddColorPicker(["Visuals", "AT Gui", "AT Gui"], "Armor Background Colour"); //护甲的背景颜色
UI.SetColor(["Visuals", "AT Gui", "AT Gui", "Armor Background Colour"], [240, 240, 240, 120]);//设置默认颜色
//AT Gui》BuyList
UI.AddCheckbox(["Visuals", "AT Gui", "AT Gui"], "Buy List");//添加选择框: Buy List
UI.AddColorPicker(["Visuals", "AT Gui", "AT Gui"], "[BL] Title Bar Color");//标题色
UI.SetColor(["Visuals", "AT Gui", "AT Gui", "[BL] Title Bar Color"], [64, 224, 208, 255]);//设置默认颜色
UI.AddColorPicker(["Visuals", "AT Gui", "AT Gui"], "[BL] Background Color");//背景色
UI.SetColor(["Visuals", "AT Gui", "AT Gui", "[BL] Background Color"], [250, 128, 114, 255]);//设置默认颜色
UI.AddCheckbox(["Visuals", "AT Gui", "AT Gui"], "[BL] Stick To Right Side");
UI.AddCheckbox(["Visuals", "AT Gui", "AT Gui"], "[BL] Stick To Lower Side");
UI.AddSliderInt(["Visuals", "AT Gui", "AT Gui"], "[BL] X Position", 0, Global.GetScreenSize()[0]);
UI.AddSliderInt(["Visuals", "AT Gui", "AT Gui"], "[BL] Y Position", 0, Global.GetScreenSize()[1]);
//AT Gui》EnemyView
UI.AddCheckbox(["Visuals", "AT Gui", "AT Gui"], "Enemy View");
UI.AddCheckbox(["Visuals", "AT Gui", "AT Gui"], "[Info] Press the key in Config->Script");
UI.AddHotkey(["Config", "Scripts", "JS Keybinds"], "Enemy View Key", "Enemy View Key");
UI.AddSliderInt(["Visuals", "AT Gui", "AT Gui"], "[EV] X Position", 100, 2560);
UI.AddSliderInt(["Visuals", "AT Gui", "AT Gui"], "[EV] Y Position", 100, 1440);
//杂项 Misc.
UI.AddSubTab(["Misc.", "SUBTAB_MGR"], "AT Logs"); //添加AT Logs
//AT Logs》BuyLogs
UI.AddCheckbox(["Misc.", "AT Logs", "AT Logs"], "Buy Logs");//添加选择框: Buy Logs

//暴力 Rage
UI.AddSubTab(["Rage", "SUBTAB_MGR"], "AT AntiAim"); //添加AT AntiAim
UI.AddSliderInt(["Rage", "AT AntiAim", "AT AntiAim"], "AndTun.Js Exclusive AA", 100, 100);
UI.AddSliderInt(["Rage", "AT AntiAim", "AT AntiAim"], "", 100, 100);
UI.AddCheckbox(["Rage", "AT AntiAim", "AT AntiAim"], "Feedback ? For QQ Num:1791314878");
//监听: AT Logs Menu


//监听: AT Gui Menu
function AT_Gui_Menu() {
    //Health & Armor 开启
    if (UI.GetValue(["Visuals", "AT Gui", "AT Gui", "Health & Armor"])) {
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
        //Health & Armor 关闭
        UI.SetEnabled(["Visuals", "AT Gui", "AT Gui", "Health Colour"], 0);
        UI.SetEnabled(["Visuals", "AT Gui", "AT Gui", "Armor Colour"], 0);
        UI.SetEnabled(["Visuals", "AT Gui", "AT Gui", "Health Background Colour"], 0);
        UI.SetEnabled(["Visuals", "AT Gui", "AT Gui", "Armor Background Colour"], 0);
        Convar.SetFloat("hidehud", 0);
    }

    //Buy List 开启
    if (UI.GetValue(["Visuals", "AT Gui", "AT Gui", "Buy List"])) {
        UI.SetEnabled(["Visuals", "AT Gui", "AT Gui", "[BL] X Position"], 1);
        UI.SetEnabled(["Visuals", "AT Gui", "AT Gui", "[BL] Y Position"], 1);
        UI.SetEnabled(["Visuals", "AT Gui", "AT Gui", "[BL] Stick To Right Side"], 1);
        UI.SetEnabled(["Visuals", "AT Gui", "AT Gui", "[BL] Stick To Lower Side"], 1);
        UI.SetEnabled(["Visuals", "AT Gui", "AT Gui", "[BL] Title Bar Color"], 1);
        UI.SetEnabled(["Visuals", "AT Gui", "AT Gui", "[BL] Background Color"], 1);
        BuyList_Draw();
    } else {
        UI.SetEnabled(["Visuals", "AT Gui", "AT Gui", "[BL] X Position"], 0);
        UI.SetEnabled(["Visuals", "AT Gui", "AT Gui", "[BL] Y Position"], 0);
        UI.SetEnabled(["Visuals", "AT Gui", "AT Gui", "[BL] Stick To Right Side"], 0);
        UI.SetEnabled(["Visuals", "AT Gui", "AT Gui", "[BL] Stick To Lower Side"], 0);
        UI.SetEnabled(["Visuals", "AT Gui", "AT Gui", "[BL] Title Bar Color"], 0);
        UI.SetEnabled(["Visuals", "AT Gui", "AT Gui", "[BL] Background Color"], 0);
    }

    //
    if (UI.GetValue(["Visuals", "AT Gui", "AT Gui", "Enemy View"])) {
        UI.SetEnabled(["Visuals", "AT Gui", "AT Gui", "[Info] Press the key in Config->Script"], 1);
        UI.SetEnabled(["Visuals", "AT Gui", "AT Gui", "[EV] X Position"], 1);
        UI.SetEnabled(["Visuals", "AT Gui", "AT Gui", "[EV] Y Position"], 1);
    } else {
        UI.SetEnabled(["Visuals", "AT Gui", "AT Gui", "[Info] Press the key in Config->Script"], 0);
        UI.SetEnabled(["Visuals", "AT Gui", "AT Gui", "[EV] X Position"], 0);
        UI.SetEnabled(["Visuals", "AT Gui", "AT Gui", "[EV] Y Position"], 0);
    }
}

//BuyList && BuyLogs
function BuyEvents() {
    //BuyList
    if (Event.GetInt('team') != Entity.GetProp(Entity.GetLocalPlayer(), "CBaseEntity", "m_iTeamNum")) {
        var item = Event.GetString('weapon')
        var name = Entity.GetName(Entity.GetEntityFromUserID(Event.GetInt('userid'))) + ": "
        if (time < Globals.Curtime() + 3) { time = Globals.Curtime() + 3 }

        if (persones[0] == "") {
            persones[0] = Entity.GetName(Entity.GetEntityFromUserID(Event.GetInt('userid'))) + ": ";
        } else {
            if ((persones[1] == "") && (persones[0] != name)) {
                persones[1] = name;
            }
            if ((persones[2] == "") && (persones[1] != name)) {
                if (persones[0] != name) {
                    persones[2] = name;
                }
            }
            if ((persones[3] == "") && (persones[2] != name)) {
                if ((persones[1] != name) && (persones[0] != name)) {
                    persones[3] = name;
                }
            }
            if ((persones[4] == "") && (persones[3] != name)) {
                if ((persones[2] != name) && (persones[1] != name)) {
                    if (persones[0] != name) {
                        persones[4] = name;
                    }
                }
            }
        }

        for (var i = 5; i < 10; i++) {
            if (name == persones[i - 5]) {
                persones[i] += BuyList_Get_Icon(item);
                break;
            }
        }
    }

    //BuyLogs
    if (UI.GetValue(["Misc.", "AT Logs", "AT Logs", "Buy Logs"])) {
        var ent = Entity.GetEntityFromUserID(Event.GetInt('userid'))
        var team = Event.GetInt('team')
        if (team != Entity.GetProp(Entity.GetLocalPlayer(), "CBaseEntity", "m_iTeamNum")) {
            var item = Event.GetString('weapon')
            item = item.replace("weapon_", "")
            item = item.replace("item_", "")
            item = item.replace("assaultsuit", "kevlar + helmet")
            item = item.replace("incgrenade", "molotov")
            if (item != "unknown") {
                var name = Entity.GetName(ent)
                if (item == "ssg08")
                    item = "鸟狙"
                if (item == "awp")
                    item = "大狙"
                if (item == "g3sg1" || item == "scar20")
                    item = "连狙"
                if (item == "hegrenade")
                    item = "手雷"
                if (item == "flashbang")
                    item = "闪光弹"
                if (item == "smokegrenade")
                    item = "烟雾弹"
                if (item == "kevlar")
                    item = "半甲"
                if (item == "kevlar + helmet")
                    item = "全甲"
                if (item == "elite")
                    item = "双枪"
                if (item == "deagle")
                    item = "沙鹰"
                if (item == "molotov")
                    item = "燃烧弹"
                if (item == "defuser")
                    item = "拆弹器"
                if (item == "incgrenade")
                    item = "燃烧弹"
                if (item == "galilar")
                    item = "加利尔 AR"
                if (item == "famas")
                    item = "法玛斯"
                if (item == "aug")
                    item = "AUG步枪"
                if (item == "m4a1")
                    item = "M4步枪"
                if (item == "ak47")
                    item = "AK47步枪"
                if (item == "mac10")
                    item = "吹风机"
                if (item == "ump45")
                    item = "UMP冲锋枪"
                if (item == "p90")
                    item = "P90冲锋枪"
                if (item == "bizon")
                    item = "PP-野牛"
                if (item == "mp7")
                    item = "MP7冲锋枪"
                if (item == "mp9")
                    item = "MP9冲锋枪"
                if (item == "xm1014")
                    item = "连喷XM1014"
                if (item == "mag7")
                    item = "警喷子"
                if (item == "sawedoff")
                    item = "短管散弹"
                if (item == "nova")
                    item = "新星"
                if (item == "m249")
                    item = "M249机枪"
                if (item == "negev")
                    item = "内格夫"
                if (item == "p228")
                    item = "P228连发手枪"
                if (item == "glock")
                    item = "格洛克"
                if (item == "fiveseven")
                    item = "FN57手枪"
                if (item == "tec9")
                    item = "Tec-9连发手枪"
                if (item == "hkp2000")
                    item = "P2000手枪"
                if (item == "p250")
                    item = "P250手枪"
                if (item == "decoy")
                    item = "诱饵弹"
                if (item == "taser")
                    item = "宙斯电枪"
                if (item == "mp5sd")
                    item = "MP5冲锋枪"
                if (item == "cz75")
                    item = "CZ75冲锋手枪"
                if (item == "m4a1s")
                    item = "M4A1消音"
                if (item == "revolver")
                    item = "R8左轮手枪"

                Global.PrintChat(" \x01[\x02BuyLogs\x01] \x06" + name + " \x01购买了 \x04" + item + " \n");
            }
        }
    }
}
//绘制BuyList GUI
var w = 50;
var h = 25;
var memory = [0, 0];
var alpha = 0;
var persones = ["", "", "", "", "", "", "", "", "", ""];
var time = Globals.Curtime() + 5;
var drg = 0;

function roundend() {
    clear()
}

function roundstart() {
    clear()
    time = Globals.Curtime() + 15;
}

function clear() {
    for (i = 0; i < 10; i++) {
        persones[i] = "";
    }
}

function BuyList_Draw() {
    //获取GUI位置
    x_pos = UI.GetValue(["Visuals", "AT Gui", "AT Gui", "[BL] X Position"])
    y_pos = UI.GetValue(["Visuals", "AT Gui", "AT Gui", "[BL] Y Position"])
    //调整位置
    if (x_pos < 0) {
        x_pos = 1;
    }
    if (y_pos < 0) {
        y_pos = 1;
    }
    if (x_pos > Global.GetScreenSize()[0] - w) {
        x_pos = Global.GetScreenSize()[0] - w;
        UI.SetValue(["Visuals", "AT Gui", "AT Gui", "[BL] Stick To Right Side"], 1);
    }
    if (y_pos > Global.GetScreenSize()[1] - h) {
        y_pos = Global.GetScreenSize()[1] - h;
        UI.SetValue(["Visuals", "AT Gui", "AT Gui", "[BL] Stick To Lower Side"], 1);
    }
    if (UI.GetValue(["Visuals", "AT Gui", "AT Gui", "[BL] Stick To Right Side"]) == 1) {
        x_pos = Global.GetScreenSize()[0] - w;
    }
    if (UI.GetValue(["Visuals", "AT Gui", "AT Gui", "[BL] Stick To Lower Side"]) == 1) {
        y_pos = Global.GetScreenSize()[1] - h;
    }
    //emm 懒得解释反正Copy的
    if ((Input.GetCursorPosition()[0] >= x_pos) && (Input.GetCursorPosition()[0] <= x_pos + w) && (Input.GetCursorPosition()[1] >= y_pos) && (Input.GetCursorPosition()[1] <= y_pos + h)) {
        if ((Input.IsKeyPressed(0x01)) && (drg == 0)) {
            drg = 1;
            memory[0] = x_pos - Input.GetCursorPosition()[0]
            memory[1] = y_pos - Input.GetCursorPosition()[1]
            UI.SetValue(["Visuals", "AT Gui", "AT Gui", "[BL] Stick To Right Side"], 0)
            UI.SetValue(["Visuals", "AT Gui", "AT Gui", "[BL] Stick To Lower Side"], 0)
        }
    }
    if (!Input.IsKeyPressed(0x01)) {
        drg = 0;
    }
    if (drg == 1) {
        UI.SetValue(["Visuals", "AT Gui", "AT Gui", "[BL] X Position"], Input.GetCursorPosition()[0] + memory[0])
        UI.SetValue(["Visuals", "AT Gui", "AT Gui", "[BL] Y Position"], Input.GetCursorPosition()[1] + memory[1])
    }
    //显示以及隐藏GUI
    if ((UI.IsMenuOpen()) && (time < Globals.Curtime() + 1)) {
        time = Globals.Curtime() + 1;
    }
    if (time > Globals.Curtime()) {
        if (alpha != 220) {
            alpha += 5;
        }
    } else {
        if (alpha != 0) {
            alpha -= 5;
        }
    }
    if (alpha == 0) { return }

    var color = UI.GetColor(["Visuals", "AT Gui", "AT Gui", "[BL] Title Bar Color"]);
    var BgColor = UI.GetColor(["Visuals", "AT Gui", "AT Gui", "[BL] Background Color"]);//新加背景颜色
    //绘制GUI
    Render.FilledRect(x_pos - 1, y_pos - 2, w + 1, 4, [color[0], color[1], color[2], alpha]);
    Render.FilledRect(x_pos - 1, y_pos - 3, w + 1, 2, [color[0], color[1], color[2], alpha]);
    Render.FilledRect(x_pos, y_pos, w, h - 2, [BgColor[0], BgColor[1], BgColor[2], alpha]);
    Render.FilledRect(x_pos - 1, y_pos + 1, w + 2, h - 4, [BgColor[0], BgColor[1], BgColor[2], alpha]);
    var weapons_font = Render.GetFont("weaponicon.ttf", 20, false)
    w = 50;
    h = 25;

    var font = Render.GetFont("MuseoSansCyrl-900.ttf", 15, false)

    for (i = 0; i < 5; i++) {
        if (persones[i] != "") {
            Render.String(x_pos + 14, y_pos - 20 + h, 0, persones[i], [255, 255, 255, alpha], font)
            Render.String(x_pos + 14 + Render.TextSize(persones[i], font)[0], y_pos - 18 + h, 0, persones[i + 5], [255, 255, 255, alpha], weapons_font)
            h += 15;
        }
    }
    for (i = 0; i < 5; i++) {
        if (Render.TextSize(persones[i], font)[0] + Render.TextSize(persones[i + 5], weapons_font)[0] > w - 25) {
            w = Render.TextSize(persones[i], font)[0] + Render.TextSize(persones[i + 5], weapons_font)[0] + 25;
        }
    }
}

//获取图标
function BuyList_Get_Icon(a) {
    var letter = ""
    switch (a) {
        case "weapon_deagle":
            letter = "A"
            break
        case "weapon_elite":
            letter = "B"
            break
        case "weapon_fiveseven":
            letter = "C"
            break
        case "weapon_glock":
            letter = "D"
            break
        case "weapon_ak47":
            letter = "W"
            break
        case "weapon_aug":
            letter = "U"
            break
        case "weapon_awp":
            letter = "Z"
            break
        case "weapon_famas":
            letter = "R"
            break
        case "weapon_m249":
            letter = "g"
            break
        case "weapon_g3sg1":
            letter = "X"
            break
        case "weapon_galilar":
            letter = "Q"
            break
        case "weapon_m4a1":
            letter = "S"
            break
        case "weapon_m4a1_silencer":
            letter = "T"
            break
        case "weapon_mac10":
            letter = "K"
            break
        case "weapon_hkp2000":
            letter = "E"
            break
        case "weapon_mp5sd":
            letter = "N"
            break
        case "weapon_ump45":
            letter = "L"
            break
        case "weapon_xm1014":
            letter = "b"
            break
        case "weapon_bizon":
            letter = "M"
            break
        case "weapon_mag7":
            letter = "d"
            break
        case "weapon_negev":
            letter = "f"
            break
        case "weapon_sawedoff":
            letter = "c"
            break
        case "weapon_tec9":
            letter = "H"
            break
        case "weapon_taser":
            letter = "h"
            break
        case "weapon_p250":
            letter = "F"
            break
        case "weapon_mp7":
            letter = "N"
            break
        case "weapon_mp9":
            letter = "O"
            break
        case "weapon_nova":
            letter = "e"
            break
        case "weapon_p90":
            letter = "P"
            break
        case "weapon_scar20":
            letter = "Y"
            break
        case "weapon_sg556":
            letter = "V"
            break
        case "weapon_ssg08":
            letter = "a"
            break
        case "weapon_flashbang":
            letter = "i"
            break
        case "weapon_hegrenade":
            letter = "j"
            break
        case "weapon_smokegrenade":
            letter = "k"
            break
        case "weapon_molotov":
            letter = "l"
            break
        case "weapon_decoy":
            letter = "m"
            break
        case "weapon_incgrenade":
            letter = "n"
            break
        case "weapon_usp_silencer":
            letter = "G"
            break
        case "weapon_cz75a":
            letter = "I"
            break
        case "weapon_revolver":
            letter = "J"
            break
        case "item_assaultsuit":
            letter = "p"
            break
        case "item_kevlar":
            letter = "q"
            break
        case "item_defuser":
            letter = "r"
            break
        default:
            letter = ""
            break
    }
    return letter
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
    const Neon_Indicator_Font = Render.GetFont("DS-DIGIB.TTF", 32, false);//血的字体
    const Neon_Indicator_Font_AT = Render.GetFont("MuseoSansCyrl-900.ttf", 30, false);//字的字体
    const Neon_Indicator_Font_Small = Render.GetFont("DS-DIGIB.TTF", 26, false);//护甲的字体
    const HP_indicatorX = 20//X坐标
    const HP_indicatorY = screen_size[1] - 50//Y坐标
    const hp = Get_Prop("CBasePlayer", "m_iHealth");//获取角色血量
    const arm = Get_Prop("CCSPlayerResource", "m_iArmor");//获取角色护甲
    var hpColor = UI.GetColor(["Visuals", "AT Gui", "AT Gui", "Health Colour"]);
    var armColor = UI.GetColor(["Visuals", "AT Gui", "AT Gui", "Armor Colour"]);
    var hpBgColor = UI.GetColor(["Visuals", "AT Gui", "AT Gui", "Health Background Colour"]);
    var armBgColor = UI.GetColor(["Visuals", "AT Gui", "AT Gui", "Armor Background Colour"]);
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
    Render.String(HP_indicatorX + 402, HP_indicatorY + 2, 1, hp.toString(), [102, 102, 255, 255], Neon_Indicator_Font)
    Render.String(HP_indicatorX + 403, HP_indicatorY + 3, 1, hp.toString(), hpColor, Neon_Indicator_Font)
    Render.String(HP_indicatorX + 401, HP_indicatorY + 2, 1, hp.toString(), [255, 255, 255, 255], Neon_Indicator_Font)

    //护甲的字
    Render.String(HP_indicatorX + 401, HP_indicatorY - 20, 1, arm.toString(), armColor, Neon_Indicator_Font_Small)
    Render.String(HP_indicatorX + 400, HP_indicatorY - 21, 1, arm.toString(), [240, 240, 240, 255], Neon_Indicator_Font_Small)

    //字
    Render.Rect(HP_indicatorX - 25, HP_indicatorY - 10, 40, 40, [100, 100, 255, 0]);
    Render.Rect(HP_indicatorX - 25, HP_indicatorY - 10, 40, 40, [100, 100, 255, 0]);
    Render.String(HP_indicatorX + 25, HP_indicatorY - 14, 1, "AT", [102, 255, 255, 240], Neon_Indicator_Font_AT)
    Render.String(HP_indicatorX + 24, HP_indicatorY - 12, 1, "AT", [240, 240, 240, 240], Neon_Indicator_Font_AT)


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
    var WNclr = UI.GetColor(["Visuals", "AT Visuals", "AT Visuals", "Weapons/Name Colour"]);//获取武器的颜色
    //裁缝开始 来源: Acro.JS
    pls += 0.2;
    if (pls > 10) pls = 0;

    for (i in ens) {
        dpz = ens[i];

        var ilh = Entity.GetProp(dpz, "CPlayerResource", "m_iHealth").toString();
        var nme = Entity.GetName(dpz);
        var hlo = Entity.GetWeapon(dpz);
        var wpn = Entity.GetClassName(hlo);
        if (wpn == "CCSPlayer") {
            var wpn = "none";
        } else {
            var wpn = wpn.replace("CWeapon", "");//优化主武器名称
            var wpn = wpn.replace("HK", "")//优化副武器名称
            var wpn = wpn.replace("C", "")//优化主武器名称

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
        }
    }
}

//敌人视角 Fix
//2021年4月23日00:45:50
const view = View.Create();
var target = null;
var drag = {
    x: 100,
    y: 100,
    difference: {
        x: 0,
        y: 0
    },
    dragging: false
};
function AngleVector(x) {
    const DegreeToRadian = function(deg) {
        return deg * Math.PI / 180;
    }
    const sp = Math.sin(DegreeToRadian(x[0]));
    const cp = Math.cos(DegreeToRadian(x[0]));
    const sy = Math.sin(DegreeToRadian(x[1]));
    const cy = Math.cos(DegreeToRadian(x[1]));
    return [cp * cy, cp * sy, -sp]
}
function CalculateAngles(from, to) {
    const RadianToDegree = function(rad) {
        return rad * 180 / Math.PI;
    }
    const sub = [to[0] - from[0], to[1] - from[1], to[2] - from[2]];
    const hyp = Math.sqrt(sub[0] ** 2 + sub[1] ** 2);
    const yaw = RadianToDegree(Math.atan2(sub[1], sub[0]));
    const pitch = RadianToDegree(-Math.atan2(sub[2], hyp));
    return [pitch, yaw, 0];
}
function CalculateFOV(from, to, angles) {
    const calculated = CalculateAngles(from, to);
    const yaw_delta = angles[1] - calculated[1];
    const pitch_delta = angles[0] - calculated[0];
    if (yaw_delta > 180)
        yaw_delta -= 360;

    if (yaw_delta < -180)
        yaw_delta += 360;
    return Math.sqrt(yaw_delta ** 2 + pitch_delta ** 2);
}
function GetCrosshairTarget() {
    const me = Entity.GetLocalPlayer();
    const enemies = Entity.GetEnemies();
    const eye_pos = Entity.GetEyePosition(me);
    const eye_angles = Local.GetViewAngles();
    var data = {target: null, fov: 180};
    for (var i = 0; i < enemies.length; i++) {
        const ent = enemies[i];
        if (!Entity.IsAlive(ent) || Entity.IsDormant(ent))
            continue;
        const head_pos = Entity.GetHitboxPosition(ent, 0);
        const fov = CalculateFOV(eye_pos, head_pos, eye_angles);
        
        if (data.fov > fov) {
            data.fov = fov;
            data.target = ent;
        }
    }
    return data.target;
}
function HandleDragging() {
    const cursor = Input.GetCursorPosition();
    const is_pressed = Input.IsKeyPressed(1);
    const size = Render.GetScreenSize();
    if (!is_pressed)
        drag.dragging = false;
    if (is_pressed && cursor[0] >= drag.x && cursor[1] >= drag.y - 42 && cursor[0] <= drag.x + size[0] / 4 && cursor[1] <= drag.y - 10 || drag.dragging) {
        drag.dragging = true;
        drag.x = cursor[0] - drag.difference.x;
        drag.y = cursor[1] - drag.difference.y;
        UI.SetValue( ["Visuals", "AT Gui", "AT Gui", "[EV] X Position"], drag.x );
        UI.SetValue( ["Visuals", "AT Gui", "AT Gui", "[EV] Y Position"], drag.y );
    }
    else {
        drag.difference.x = cursor[0] - drag.x;
        drag.difference.y = cursor[1] - drag.y;
    }
}
function fetchPositions() {
    UI.SetEnabled( ["Visuals", "AT Gui", "AT Gui", "[EV] X Position"], 0 );
    UI.SetEnabled( ["Visuals", "AT Gui", "AT Gui", "[EV] Y Position"], 0 );
    drag.x = Math.max( UI.GetValue( ["Visuals", "AT Gui", "AT Gui", "[EV] X Position"] ), 100 );
    drag.y = Math.max( UI.GetValue( ["Visuals", "AT Gui", "AT Gui", "[EV] Y Position"] ), 100 );
}
function onCreateMove() {
    target = GetCrosshairTarget();
}
function onFrameRenderStart() {
    if (!Entity.IsValid(Entity.GetLocalPlayer()))
        return;
    if (!target)
        return;
    const me = Entity.GetLocalPlayer()
    const head_pos = Entity.GetHitboxPosition(me, 0);
    const camera_pos = Entity.GetEyePosition(target);
    const camera_angles = CalculateAngles(camera_pos, head_pos);
    const vector = AngleVector(camera_angles);
    const end_pos = [camera_pos[0], camera_pos[1], camera_pos[2]];
    end_pos[0] -= vector[0] * 64;
    end_pos[1] -= vector[1] * 64;
    end_pos[2] -= vector[2] * 64;
    const trace = Trace.Line(target, camera_pos, end_pos)
    if (!trace)
        return;
    const size = Render.GetScreenSize();
    camera_pos[0] -= vector[0] * 64 * trace[1];
    camera_pos[1] -= vector[1] * 64 * trace[1];
    camera_pos[2] -= vector[2] * 64 * trace[1];
    View.Update( view, size[0] / 2, size[1] / 2, camera_pos, camera_angles );
}
function onDraw() {
    // Get whether or not the menu is open.
    const is_menu_open = UI.IsMenuOpen();

    // Get whether or not our local player is valid.
    const is_local_player_valid = Entity.IsValid(Entity.GetLocalPlayer());

    // If it is, then handle the window's dragging.
    if (is_menu_open)
        HandleDragging();

    // Check if we're holding the hotkey or if the menu is open.
    // Otherwise, we don't want to render the Enemy view window, so, return.
    if (UI.GetValue(["Visuals", "AT Gui", "AT Gui", "Enemy View"])) {
        if (!(UI.GetValue(["Config", "Scripts", "JS Keybinds", "Enemy View Key"]) && is_local_player_valid) && !is_menu_open)
        return;
    }else{
        return;
    }
    // Get the screen size and create a new font.
    const size = Render.GetScreenSize();
    const font = Render.GetFont("NationalPark.otf", 20, false);

    // Get the X and Y positions used to render our window.
    // This is mostly me being lazy and not wanting to add 'drag.' before every 'x' and 'y'.
    const x = drag.x, y = drag.y;

    // Render the background
    Render.FilledRect( x - 4, y - 42, size[0] / 4 + 8, 32, [35, 35, 40, 255] );
    Render.FilledRect( x - 4, y - 4, size[0] / 4 + 8, size[1] / 4 + 8, [35, 35, 40, 255] );

    // Render the yellow bar on top.
    Render.FilledRect( x - 4, y - 42, size[0] / 4 + 8, 4, [250, 166, 24, 255] );

    // Render the window's title.
    Render.String( x - 4 + size[0] / 8, y - 40, 1, "Enemy View", [235, 235, 235, 255], font );

    // Check if our target and local player are valid and, then, render the enemy's third-person view.
    if (is_local_player_valid && target)
        View.Render( view, drag.x, drag.y, size[0] / 4, size[1] / 4 );

    // Otherwise, render a black screen saying that the camera is unavailable.
    else {
        // Calculate a breathing alpha for the aesthetics.
        const alpha = Math.sin(Globals.Tickcount() * Globals.TickInterval() * 2) * 127 + 128;

        // Render the black rectangle and the 'Camera unavailable' text.
        Render.FilledRect( drag.x, drag.y, size[0] / 4, size[1] / 4, [10, 10, 10, 255] );
        Render.String( drag.x + size[0] / 8, drag.y + size[1] / 8 - 24, 1, "Camera unavailable.", [235, 235, 235, alpha], font );
    }
}
fetchPositions();


Cheat.RegisterCallback("FRAME_RENDER_START", "onFrameRenderStart");
Cheat.RegisterCallback("Draw", "onDraw");
Cheat.RegisterCallback("CreateMove", "onCreateMove");
Global.RegisterCallback("item_purchase", "BuyEvents");
Global.RegisterCallback('round_end', 'roundend');
Global.RegisterCallback('round_start', 'roundstart');
Global.RegisterCallback("Draw", "AT_Gui_Menu");//回调
Cheat.RegisterCallback("Draw", "AT_Visuals_Main");//回调
Cheat.RegisterCallback("Draw", "AT_Visuals_Menu");//回调
