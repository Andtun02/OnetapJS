var userName = "AndTtun.CN";
userName = Cheat.GetUsername(); //Onetap用户名
//SubTab
UI.AddSubTab(["Config", "SUBTAB_MGR"], "[ AT ] Rage");
UI.AddSubTab(["Config", "SUBTAB_MGR"], "[ AT ] AntiAim");
UI.AddSubTab(["Config", "SUBTAB_MGR"], "[ AT ] Visuals");
UI.AddSubTab(["Config", "SUBTAB_MGR"], "[ AT ] Misc");
UI.AddSubTab(["Config", "SUBTAB_MGR"], "[ AT ] Color");
//Path
const ragePath = ["Config", "[ AT ] Rage", "[ AT ] Rage"];
const antiaimPath = ["Config", "[ AT ] AntiAim", "[ AT ] AntiAim"];
const visualsPath = ["Config", "[ AT ] Visuals", "[ AT ] Visuals"];
const miscPath = ["Config", "[ AT ] Misc", "[ AT ] Misc"];
const colorPath = ["Config", "[ AT ] Color", "[ AT ] Color"];
// Constant
const screenX = Render.GetScreenSize()[0]; //屏幕X轴最大值
const screenY = Render.GetScreenSize()[1]; //屏幕Y轴最大值
//Method
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
        case "P2000": //P2000
            letter = "E"
            break
        case "MAC10":
            letter = "K"
            break
        case "M4A1":
            letter = "T"
            break
        case "M4A1": //M4A1
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
        case "IncendiaryGrenade": //燃烧弹
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
        case "Taser": //电击枪
            letter = "h"
            break
        case "Knife": //刀
            letter = "1";
        default:
            letter = ""
            break
    }
    return letter
}
//获取武器在OT里面的标签
function getCurrentWeapon(player) {
    if (!Entity.IsAlive(player)) return "General";
    nameList = {
        1: "Deagle",
        2: "Dualies",
        3: "Five Seven",
        4: "Glock",
        7: "AK47",
        8: "AUG",
        9: "AWP",
        10: "FAMAS",
        11: "G3SG1",
        13: "GALIL",
        14: "M249",
        16: "M4A4",
        17: "Mac10",
        19: "P90",
        23: "MP5",
        24: "UMP45",
        25: "XM1014",
        26: "PP-Bizon",
        27: "MAG7",
        28: "Negev",
        29: "Sawed off",
        30: "Tec-9",
        32: "P2000",
        33: "MP7",
        34: "MP9",
        35: "Nova",
        36: "P250",
        38: "SCAR20",
        39: "SG553",
        40: "SSG08",
        60: "M4A1-S",
        61: "USP",
        63: "CZ-75",
        64: "Revolver"
    };
    const weapon = Entity.GetProp(player, "CBasePlayer", "m_hActiveWeapon");
    if (weapon === "m_hActiveWeapon") return "General";
    weapon = (Entity.GetProp(weapon, "CBaseAttributableItem", "m_iItemDefinitionIndex") & 0xFFFF);
    if (nameList[weapon] != undefined) {
        return nameList[weapon];
    } else {
        return "General";
    }
}
//获取世界在屏幕的坐标
function WorldToScreen(point) {
    const screen = Render.WorldToScreen(point)
    return screen;
}
//获取本地玩家信息的方法
function Get_Prop(table, prop) {
    const Prop = Entity.GetProp(Entity.GetLocalPlayer(), table, prop);
    return Prop;
}
//绘制自定义圆圈   x  y  半径     内半径         开始角度      结束角度    点的数量[越多，越圆润]
function Draw_ACR(x, y, radius, radius_inner, start_angle, end_angle, segments, color) {
    while (360 % segments != 0) {
        segments++;
    }
    segments = 360 / segments;
    for (var i = start_angle; i < start_angle + end_angle; i = i + segments) {
        var rad = i * Math.PI / 180;
        var rad2 = (i + segments) * Math.PI / 180;
        var rad_cos = Math.cos(rad);
        var rad_sin = Math.sin(rad);
        var rad2_cos = Math.cos(rad2);
        var rad2_sin = Math.sin(rad2);
        var x1_outer = x + rad_cos * radius;
        var y1_outer = y + rad_sin * radius;
        var x2_outer = x + rad2_cos * radius;
        var y2_outer = y + rad2_sin * radius;
        var x1_inner = x + rad_cos * radius_inner;
        var y1_inner = y + rad_sin * radius_inner;
        var x2_inner = x + rad2_cos * radius_inner;
        var y2_inner = y + rad2_sin * radius_inner;
        Render.Polygon([
            [x1_outer, y1_outer],
            [x2_outer, y2_outer],
            [x1_inner, y1_inner]
        ], color);
        Render.Polygon([
            [x1_inner, y1_inner],
            [x2_outer, y2_outer],
            [x2_inner, y2_inner]
        ], color);
    }
}
//Color
UI.AddColorPicker(colorPath, "Background");
UI.SetColor(["Config", "[ AT ] Color", "[ AT ] Color", "Background"], [255, 250, 250, 255]); //设置默认颜色
UI.AddColorPicker(colorPath, "Secondary Background");
UI.SetColor(["Config", "[ AT ] Color", "[ AT ] Color", "Secondary Background"], [220, 220, 220, 255]); //设置默认颜色
UI.AddColorPicker(colorPath, "Normal Font");
UI.SetColor(["Config", "[ AT ] Color", "[ AT ] Color", "Normal Font"], [0, 0, 0, 255]); //设置默认颜色
UI.AddColorPicker(colorPath, "Variable Font");
UI.SetColor(["Config", "[ AT ] Color", "[ AT ] Color", "Variable Font"], [65, 105, 225, 255]); //设置默认颜色
UI.AddColorPicker(colorPath, "Separate Font");
UI.SetColor(["Config", "[ AT ] Color", "[ AT ] Color", "Separate Font"], [180, 180, 180, 180]); //设置默认颜色
UI.AddColorPicker(colorPath, "Ico Font");
UI.SetColor(["Config", "[ AT ] Color", "[ AT ] Color", "Ico Font"], [0, 0, 0, 255]); //设置默认颜色
UI.AddCheckbox(colorPath, "==============================");
UI.AddColorPicker(colorPath, "BetterEsp - Point"); //点的颜色
UI.SetColor(["Config", "[ AT ] Color", "[ AT ] Color", "BetterEsp - Point"], [255, 255, 255, 255]); //设置默认颜色
UI.AddColorPicker(colorPath, "BetterEsp - Name"); //名称颜色
UI.SetColor(["Config", "[ AT ] Color", "[ AT ] Color", "BetterEsp - Name"], [211, 211, 211, 255]); //设置默认颜色
UI.AddColorPicker(colorPath, "BetterEsp - Weapon"); //武器颜色
UI.SetColor(["Config", "[ AT ] Color", "[ AT ] Color", "BetterEsp - Weapon"], [211, 211, 211, 255]); //设置默认颜色
UI.AddCheckbox(colorPath, "==============================");
UI.AddColorPicker(colorPath, "LocalTracer - Color");
UI.AddCheckbox(colorPath, "==============================");
UI.SetColor(["Config", "[ AT ] Color", "[ AT ] Color", "LocalTracer - Color"], [255, 255, 255, 255]); //设置默认颜色
UI.AddColorPicker(colorPath, "Indicators - AA Color");
UI.SetColor(["Config", "[ AT ] Color", "[ AT ] Color", "Indicators - AA Color"], [255, 255, 255, 255]); //设置默认颜色
UI.AddColorPicker(colorPath, "Indicators - DMG Color");
UI.SetColor(["Config", "[ AT ] Color", "[ AT ] Color", "Indicators - DMG Color"], [255, 255, 255, 255]); //设置默认颜色
UI.AddColorPicker(colorPath, "Indicators - DMG UI Color");
UI.SetColor(["Config", "[ AT ] Color", "[ AT ] Color", "Indicators - DMG UI Color"], [255, 255, 255, 255]); //设置默认颜色
UI.AddColorPicker(colorPath, "Indicators - DT Color");
UI.SetColor(["Config", "[ AT ] Color", "[ AT ] Color", "Indicators - DT Color"], [255, 255, 255, 255]); //设置默认颜色
UI.AddColorPicker(colorPath, "Indicators - HS Color");
UI.SetColor(["Config", "[ AT ] Color", "[ AT ] Color", "Indicators - HS Color"], [255, 255, 255, 255]); //设置默认颜色
function ColorMain() {
    bC = UI.GetColor(["Config", "[ AT ] Color", "[ AT ] Color", "Background"]);
    sbC = UI.GetColor(["Config", "[ AT ] Color", "[ AT ] Color", "Secondary Background"]);
    nF = UI.GetColor(["Config", "[ AT ] Color", "[ AT ] Color", "Normal Font"]);
    vF = UI.GetColor(["Config", "[ AT ] Color", "[ AT ] Color", "Variable Font"]);
    iF = UI.GetColor(["Config", "[ AT ] Color", "[ AT ] Color", "Ico Font"]);
    sF = UI.GetColor(["Config", "[ AT ] Color", "[ AT ] Color", "Separate Font"]);
    IndicatorsAA = UI.GetColor(["Config", "[ AT ] Color", "[ AT ] Color", "Indicators - AA Color"]);
    IndicatorsDMG = UI.GetColor(["Config", "[ AT ] Color", "[ AT ] Color", "Indicators - DMG Color"]);
    IndicatorsDMGUI = UI.GetColor(["Config", "[ AT ] Color", "[ AT ] Color", "Indicators - DMG UI Color"]);
    IndicatorsDT = UI.GetColor(["Config", "[ AT ] Color", "[ AT ] Color", "Indicators - DT Color"]);
    IndicatorsHS = UI.GetColor(["Config", "[ AT ] Color", "[ AT ] Color", "Indicators - HS Color"]);
    BulletTracerColor = UI.GetColor(["Config", "[ AT ] Color", "[ AT ] Color", "LocalTracer - Color"]);
    BetterEspPoint = UI.GetColor(["Config", "[ AT ] Color", "[ AT ] Color", "BetterEsp - Point"]);
    BetterEspName = UI.GetColor(["Config", "[ AT ] Color", "[ AT ] Color", "BetterEsp - Name"]);
    BetterEspWeapon = UI.GetColor(["Config", "[ AT ] Color", "[ AT ] Color", "BetterEsp - Weapon"]);
}
Global.RegisterCallback("Draw", "ColorMain");
//DMG 伤害覆盖
var weaponTabNames = {
    "usp s": "USP",
    "glock 18": "Glock",
    "dual berettas": "Dualies",
    "r8 revolver": "Revolver",
    "desert eagle": "Deagle",
    "p250": "P250",
    "tec 9": "Tec-9",
    "mp9": "MP9",
    "mac 10": "Mac10",
    "pp bizon": "PP-Bizon",
    "ump 45": "UMP45",
    "ak 47": "AK47",
    "sg 553": "SG553",
    "aug": "AUG",
    "m4a1 s": "M4A1-S",
    "m4a4": "M4A4",
    "ssg 08": "SSG08",
    "awp": "AWP",
    "g3sg1": "G3SG1",
    "scar 20": "SCAR20",
    "xm1014": "XM1014",
    "mag 7": "MAG7",
    "m249": "M249",
    "negev": "Negev",
    "p2000": "P2000",
    "famas": "FAMAS",
    "five seven": "Five Seven",
    "mp7": "MP7",
    "ump 45": "UMP45",
    "p90": "P90",
    "cz75 auto": "CZ-75",
    "mp5 sd": "MP5",
    "galil ar": "GALIL",
    "sawed off": "Sawed off",
    "nova": "Nova"
};

function updateDamageValues() {
    if (!Entity.IsAlive(Entity.GetLocalPlayer()))
        return;
    var weaponName = Entity.GetName(Entity.GetWeapon(Entity.GetLocalPlayer()))
    if (!weaponTabNames.hasOwnProperty(weaponName)) {
        return;
    }
    var isOverride = UI.GetValue(["Rage", "General", "General", "Key assignment", "Damage Override"]) ? true : false;
    if (isOverride) {
        var target = Entity.GetEnemies();
        for (var i in target) {
            if (UI.GetValue(["Rage", "Target", weaponTabNames[weaponName], "Damage Override"]) != 0) {
                Ragebot.ForceTargetMinimumDamage(target[i], UI.GetValue(["Rage", "Target", weaponTabNames[weaponName], "Damage Override"]))
            } else {
                Ragebot.ForceTargetMinimumDamage(target[i], UI.GetValue(["Rage", "Target", "General", "Damage Override"]))
            }
        }
    }
}
var font;

function main() {
    UI.AddSliderInt(["Rage", "Target", "General"], "Damage Override", 0, 130)
    for (var name in weaponTabNames) {
        UI.AddSliderInt(["Rage", "Target", weaponTabNames[name]], "Damage Override", 0, 130)
    }
    UI.AddHotkey(["Rage", "General", "General", "Key assignment"], "Damage Override", "Damage Override")
    Cheat.RegisterCallback("CreateMove", "updateDamageValues")
}
main();

//Misc
UI.AddCheckbox(miscPath, "WaterMark"); //水印
const WaterMark_Path = (["Config", "[ AT ] Misc", "[ AT ] Misc", "WaterMark"]);
UI.AddCheckbox(miscPath, "Health & Armor"); //血甲条
const HealthArmor_Path = (["Config", "[ AT ] Misc", "[ AT ] Misc", "Health & Armor"]);

UI.AddCheckbox(miscPath, "BuyList"); //购物清单
const BuyList_Path = (["Config", "[ AT ] Misc", "[ AT ] Misc", "BuyList"]);
UI.AddMultiDropdown(miscPath, "BuyList Optional", ["Log", "Gui"]); //购物清单可选
const BuyList_MD_Path = (["Config", "[ AT ] Misc", "[ AT ] Misc", "BuyList Optional"]);
UI.AddSliderInt(miscPath, "BuyList GUI X", 10, Global.GetScreenSize()[0]);
const BuyList_X_Path = (["Config", "[ AT ] Misc", "[ AT ] Misc", "BuyList GUI X"]);
UI.AddSliderInt(miscPath, "BuyList GUI Y", 10, Global.GetScreenSize()[1]);
const BuyList_Y_Path = (["Config", "[ AT ] Misc", "[ AT ] Misc", "BuyList GUI Y"]);
UI.AddCheckbox(miscPath, "LocalTracer"); //Local Tracer本地子弹射线
const LocalTracer_Path = (["Config", "[ AT ] Misc", "[ AT ] Misc", "LocalTracer"]);
UI.AddCheckbox(["Rage", "Anti Aim", "Directions"], "Anti-Bruteforce");
UI.AddSliderInt(miscPath, "BulletTracer Thickness", 1, 50)
const LocalTracerThickness_Path = (["Config", "[ AT ] Misc", "[ AT ] Misc", "BulletTracer Thickness"]);
UI.AddCheckbox(miscPath, "Core Indicators"); //核心指示器
const CoreIndicators_Path = (["Config", "[ AT ] Misc", "[ AT ] Misc", "Core Indicators"]);
UI.AddMultiDropdown(miscPath, "Core Indicators Optional", ["AntiAim", "Dmage", "Dmage UI", "Double Tap", "Hide Shots"]); //=============中心指示器
const CoreIndicatorsOptional_Path = (["Config", "[ AT ] Misc", "[ AT ] Misc", "Core Indicators Optional"]);
//BetterEsp
var pls = 0;
var espIcoSize = 14; //声明Better Esp的图标 大小
function BetterEspMain() {
    var ens = Entity.GetEnemies(); //获取敌方实体索引的数组
    var font = Render.GetFont("AT-ArturitoSlab.ttf", 12, false); //获取字体
    var wepIco = Render.GetFont("AT-Weapons.ttf", espIcoSize, false); //获取图标字体
    var pointIco = Render.GetFont("AT-IconFont.ttf", 21, false); //获取图标字体
    //裁缝开始 来源: Acro.JS
    pls += 0.2;
    if (pls > 10) pls = 0;

    for (i in ens) {
        dpz = ens[i];

        var ilh = Entity.GetProp(dpz, "CPlayerResource", "m_iHealth").toString();
        var nme = Entity.GetName(dpz);
        var hlo = Entity.GetWeapon(dpz);
        var wpn = Entity.GetClassName(hlo); //当前武器
        if (wpn == "CCSPlayer") {
            var wpn = "none";
        } else {
            var wpn = wpn.replace("CWeapon", ""); //优化主武器名称
            var wpn = wpn.replace("HK", "") //优化副武器名称
            var wpn = wpn.replace("C", "") //优化道具名称

        }

        if (ilh < 70) cor = [255, 140, 0, 255]; //深橙色 <70血时
        else cor = [0, 255, 127, 255]; //适中的春天的绿色 >70血时
        if (ilh < 35) cor = [255, 0, 0, 255]; //	纯红 <35血时

        if (Entity.IsDormant(dpz)) {

            var rndrbox = Entity.GetRenderBox(dpz);
            var pos = rndrbox[1] + (rndrbox[3] - rndrbox[1]) / 2;
            var slz = (rndrbox[3] - rndrbox[1]) / 3
            var p0s = rndrbox[2];

            if (slz < 6) slz = 6;
            if (slz > 10) slz = 10;
            if (nme.length > 8) nme = nme.substring(0, 8);

            // Render.FilledCircle(pos, p0s, slz, pointColor);//内圆
            Render.String(pos, p0s - 10, 1, 'r', BetterEspPoint, pointIco) //内图标
            Render.Circle(pos, p0s, slz + pls, BetterEspPoint); //外轮廓

            var sel = UI.GetValue(BetterEspOptional_Path);
            // Cheat.PrintColor([255, 255, 255, 255], selList[1] + "\n");

            if (sel & (1 << 0)) {
                Render.String(pos, p0s + 20, 1, nme, BetterEspName, font);
            }
            if (sel & (1 << 1)) {
                Render.String(pos, p0s + 30, 1, ilh + " HP", cor, font);
            }
            if (sel & (1 << 2)) {
                Render.String(pos, p0s + 40, 1, wpn, BetterEspWeapon, font);
            }
            if (sel & (1 << 3)) {
                Render.String(pos, p0s + 52, 1, Get_BetterEsp_Ico(wpn), BetterEspWeapon, wepIco);
            }

            // Render.String(pos, p0s + 20, 1, nme, nameColor, font);

            // Render.String(pos, p0s + 30, 1, ilh + " HP", cor, font);

            // Render.String(pos, p0s + 40, 1, wpn, weaponColor, font);

            // Render.String(pos, p0s + 50, 1, Get_BetterEsp_Ico(wpn), weaponColor, wepIco);



        }
    }
}
//子弹射线
var lastFireEyePos = [0, 0, 0];
var firedByRageBot = false;
var local_eye_position = [0, 0, 0];
const FS = {
    ExtendFunction: {
        duplicate: function(theObject) {
            return JSON.parse(JSON.stringify(theObject));
        }
    }
}

function on_BulletImpact() {
    if (UI.GetValue(LocalTracer_Path)) {
        player = Entity.GetEntityFromUserID(Event.GetInt("userid"));
        if (Entity.GetLocalPlayer() !== player) return;
        if (bullets.length >= 100) bullets = [];
        const eyePos = lastFireEyePos;
        bullets.push({
            "impact": [Event.GetFloat("x"), Event.GetFloat("y"), Event.GetFloat("z")],
            "origin": eyePos,
            "time": Globals.Curtime()
        });
    }
    if (UI.GetValue(["Rage", "Anti Aim", "Directions", "Anti-Bruteforce"])) {
        if (Entity.IsEnemy(Entity.GetEntityFromUserID(Event.GetInt("userid")))) {
            shotEnd[Entity.GetEntityFromUserID(Event.GetInt("userid"))] = [Event.GetInt("x"), Event.GetInt("y"), Event.GetInt("z")];
        }
    }
}

var While_shot;
var shotStart = {};

function On_weapon_firee() {

    const player_id = Event.GetInt("userid");
    const onshot = Entity.IsLocalPlayer(Entity.GetEntityFromUserID(player_id))
    if (onshot) {
        While_shot = true
    }

    if (Entity.IsEnemy(Entity.GetEntityFromUserID(Event.GetInt("userid")))) {
        shotStart[Entity.GetEntityFromUserID(Event.GetInt("userid"))] = Entity.GetEyePosition(Entity.GetEntityFromUserID(Event.GetInt("userid")));
    }

    if (UI.GetValue(LocalTracer_Path)) {
        if (firedByRageBot) {
            firedByRageBot = false;
        } else {
            lastFireEyePos = local_eye_position;
        }
    }

}

function LocalTracerMain() {
    if (UI.GetValue(LocalTracer_Path)) {
        UI.SetEnabled(LocalTracerThickness_Path, 1);
        if (bullets.length < 1) return;
        var drew = 0;
        for (var i = bullets.length - 1; i >= 0; i--) {
            if (bullets[i] != undefined) {
                if (drew >= 3) {
                    break;
                }
                drew++;
                if (bullets[i]["time"] + 2 < Globals.Curtime() || bullets[i]["time"] < 1 || bullets[i]["time"] == undefined) {
                    delete bullets[i];
                } else {
                    var impact = WorldToScreen(bullets[i]["impact"]);
                    var origin = WorldToScreen(bullets[i]["origin"]);
                    if (origin != undefined && impact != undefined) {
                        if (origin[2] === 0 || impact[2] === 0) {
                            var maximumTrial = 20;
                            var trials = 0;
                            var newOrigin = FS.ExtendFunction.duplicate(bullets[i]["origin"]);
                            while (origin[2] === 0 && impact[2] != 0) {
                                var vector = [bullets[i]["impact"][0] - bullets[i]["origin"][0], bullets[i]["impact"][1] - bullets[i]["origin"][1], bullets[i]["impact"][2] - bullets[i]["origin"][2]];
                                newOrigin[0] += vector[0] * 0.05;
                                newOrigin[1] += vector[1] * 0.05;
                                newOrigin[2] += vector[2] * 0.05;
                                origin = WorldToScreen(newOrigin);
                                trials++;
                                if (trials >= maximumTrial) {
                                    break;
                                }
                            }
                            var trials = 0;
                            var newImpact = FS.ExtendFunction.duplicate(bullets[i]["impact"]);
                            while (impact[2] === 0 && origin[2] != 0) {
                                var vector = [bullets[i]["origin"][0] - bullets[i]["impact"][0], bullets[i]["origin"][1] - bullets[i]["impact"][1], bullets[i]["origin"][2] - bullets[i]["impact"][2]];
                                newImpact[0] += vector[0] * 0.05;
                                newImpact[1] += vector[1] * 0.05;
                                newImpact[2] += vector[2] * 0.05;
                                impact = Render.WorldToScreen(newImpact);
                                trials++;
                                if (trials >= maximumTrial) {
                                    break;
                                }
                            }
                        }
                        Render.Line(impact[0], impact[1], origin[0], origin[1], BulletTracerColor);
                        var step = Math.floor(BulletTracerColor[3] / UI.GetValue(LocalTracerThickness_Path));
                        for (var x = 1; x < UI.GetValue(LocalTracerThickness_Path); x++) {
                            Render.Line(impact[0] + (x - 1), impact[1], origin[0] + x, origin[1], [BulletTracerColor[0], BulletTracerColor[1], BulletTracerColor[2], BulletTracerColor[3] - (x * step)]);
                            Render.Line(impact[0], impact[1] + (x - 1), origin[0], origin[1] + x, [BulletTracerColor[0], BulletTracerColor[1], BulletTracerColor[2], BulletTracerColor[3] - (x * step)]);
                            Render.Line(impact[0] - (x - 1), impact[1], origin[0] - x, origin[1], [BulletTracerColor[0], BulletTracerColor[1], BulletTracerColor[2], BulletTracerColor[3] - (x * step)]);
                            Render.Line(impact[0], impact[1] - (x - 1), origin[0], origin[1] - x, [BulletTracerColor[0], BulletTracerColor[1], BulletTracerColor[2], BulletTracerColor[3] - (x * step)]);
                            Render.Circle(impact[0], impact[1] - (x - 1), 3, [BulletTracerColor[0], BulletTracerColor[1], BulletTracerColor[2], BulletTracerColor[3] - (x * step)]);
                            Render.Circle(impact[0], impact[1] - (x - 1), 5, [BulletTracerColor[0], BulletTracerColor[1], BulletTracerColor[2], BulletTracerColor[3] - (x * step)]);

                        }
                    }
                }
            }
        }
        local_eye_position = Entity.GetEyePosition(Entity.GetLocalPlayer());
    } else {
        UI.SetEnabled(LocalTracerThickness_Path, 0);
    }
}
var bullets = [];

function MiscMain() {
    var IconFont = Render.GetFont("AT-IconFont.ttf", 18, false);
    var Font = Render.GetFont("AT-JetBrainsMono.ttf", 16, false);
    /*====================
        WaterMark水印
     =====================*/
    if (UI.GetValue(WaterMark_Path)) {
        var time = new Date();
        var hours = time.getHours();
        var minutes = time.getMinutes();
        var seconds = time.getSeconds();
        var ping = Math.round(Get_Prop("CPlayerResource", "m_iPing")).toString();
        Render.FilledRect(screenX - 423, 9, 412, 28, sbC);
        Render.FilledRect(screenX - 420, 12, 406, 22, bC);
        Render.String(screenX - 416, 14, 0, "l", iF, IconFont); //LOGO图标
        Render.String(screenX - 396, 13, 0, "[AT]", nF, Font);
        Render.String(screenX - 356, 13, 0, "|", sF, Font);
        Render.String(screenX - 346, 14, 0, "n", vF, IconFont); //用户图标
        Render.String(screenX - 326, 13, 0, userName.length > 10 ? userName.substring(0, 10) + ".." : userName, vF, Font);
        Render.String(screenX - 206, 13, 0, "|", sF, Font);
        Render.String(screenX - 196, 14, 0, "1", vF, IconFont); //时间图标
        Render.String(screenX - 176, 13, 0, hours + ":" + minutes + ":" + seconds, vF, Font);
        Render.String(screenX - 96, 13, 0, "|", sF, Font);
        Render.String(screenX - 86, 14, 0, "S", vF, IconFont); //Ping图标
        Render.String(screenX - 66, 13, 0, ping + "ms", vF, Font);
    }

    var haFont = Render.GetFont("AT-ArturitoSlab.ttf", 34, false);
    /*============================
        Health & Armor血甲条
     =============================*/
    if (UI.GetValue(HealthArmor_Path)) {
        //活着时才显示
        if (!Entity.IsAlive(Entity.GetLocalPlayer())) {
            Convar.SetFloat("hidehud", 0);
            return;
        } else {
            Convar.SetFloat("hidehud", 8);
        }
        var hp = Get_Prop("CBasePlayer", "m_iHealth"); //获取血量
        var arm = Get_Prop("CCSPlayerResource", "m_iArmor"); //获取护甲
        var hpACR = Math.round(hp * 3.6);
        var armACR = Math.round(arm * 3.6);
        Render.FilledRect(33, screenY - 83, 280, 58, sbC);
        Render.FilledRect(36, screenY - 80, 274, 52, bC);
        Draw_ACR(63, screenY - 54, 21, 15, 90, 360, 32, [79, 79, 79, 180]);
        Draw_ACR(63, screenY - 54, 21, 15, 90, hpACR, 32, [255, 100, 100, 255]); //x  y  半径     内半径         开始角度      结束角度    点的数量[越多，越圆润]
        Render.String(93, screenY - 75, 0, hp.toString(), vF, haFont);
        Render.String(54, screenY - 62, 0, '3', [255, 69, 0, 255], IconFont);
        Draw_ACR(213, screenY - 54, 21, 15, 90, 360, 32, [79, 79, 79, 180]);
        Draw_ACR(213, screenY - 54, 21, 15, 90, armACR, 32, [100, 149, 237, 255]); //x  y  半径     内半径         开始角度      结束角度    点的数量[越多，越圆润]
        Render.String(243, screenY - 75, 0, arm.toString(), vF, haFont);
        Render.String(204, screenY - 62, 0, 'a', [65, 105, 225, 255], IconFont);
    }
    /*============================
        LocalTracer本地子弹射线
     =============================*/
    LocalTracerMain();

    /*======================
    BuyList购买清单模块
    =======================*/
    if (UI.GetValue(BuyList_Path)) {
        UI.SetEnabled(BuyList_MD_Path, 1);
        UI.SetEnabled(BuyList_X_Path, 1);
        UI.SetEnabled(BuyList_Y_Path, 1);
        // if (UI.GetValue(BuyList_MD_Path) & (1 << 0)) {

        // }
        if (UI.GetValue(BuyList_MD_Path) & (1 << 1)) {
            x = UI.GetValue(BuyList_X_Path);
            y = UI.GetValue(BuyList_Y_Path);
        }
    } else {
        UI.SetEnabled(BuyList_MD_Path, 0);
        UI.SetEnabled(BuyList_X_Path, 0);
        UI.SetEnabled(BuyList_Y_Path, 0);
    }
    /*======================
    Core Indicators核心指示器
    =======================*/
    if (UI.GetValue(CoreIndicators_Path)) {
        UI.SetEnabled(CoreIndicatorsOptional_Path, 1);
        if (!Entity.IsAlive(Entity.GetLocalPlayer())) return; //活着时才显示
        var sel = UI.GetValue(CoreIndicatorsOptional_Path);
        weapon_name_tag = Entity.GetProp(Entity.GetWeapon(Entity.GetLocalPlayer()), "CBaseAttributableItem", "m_iItemDefinitionIndex") & 0xFFFF;
        if (Cheat.IsRageConfigActive(weapon_name_tag)) {
            tab = getCurrentWeapon(Entity.GetLocalPlayer());
        } else {
            tab = "General";
        }
        if (sel & (1 << 0)) { //AA Indicators
            var invert = UI.GetValue(["Rage", "Anti Aim", "General", "Key assignment", "AA Direction inverter"]);
            var x = screenX / 2,
                y = screenY / 2;
            var arrowFont = Render.GetFont("AT-Arrows.ttf", 20, false);
            var indcatorFont = Render.GetFont("AT-ArturitoSlab.ttf", 16, false);
            if (invert == 1) {
                Render.String(x - 80, y - 13, 1, "b", [IndicatorsAA[0], IndicatorsAA[1], IndicatorsAA[2], 120], arrowFont);
            } else {
                Render.String(x - 80, y - 13, 1, "b", IndicatorsAA, arrowFont);
            }
            if (invert == 0) {
                Render.String(x + 80, y - 13, 1, "a", [IndicatorsAA[0], IndicatorsAA[1], IndicatorsAA[2], 120], arrowFont);
            } else {
                Render.String(x + 80, y - 13, 1, "a", IndicatorsAA, arrowFont);
            }
        }
        if (sel & (1 << 1)) {
            if (UI.GetValue(["Rage", "General", "General", "Key assignment", "Damage Override"])) { //是否开启了伤害覆盖
                var overDmg = UI.GetValue(["Rage", "Target", tab, "Damage Override"]);
                Render.String(x, y + 20, 1, "- " + overDmg.toString() + " -", IndicatorsDMG, indcatorFont);
            } else {
                var dmg = UI.GetValue(["Rage", "Target", tab, "Minimum damage"]);
                Render.String(x, y + 20, 1, "- " + dmg.toString() + " -", IndicatorsDMG, indcatorFont);
            }
        }
        if (sel & (1 << 2)) {
            Draw_ACR(x - 1, y - 1, 16, 12, 90, 360, 32, [79, 79, 79, 180]); //x  y  半径     内半径         开始角度      结束角度    点的数量[越多，越圆润]
            if (UI.GetValue(["Rage", "General", "General", "Key assignment", "Damage Override"])) { //是否开启了伤害覆盖
                var overDmg = UI.GetValue(["Rage", "Target", tab, "Damage Override"]);
                Draw_ACR(x - 1, y - 1, 16, 12, 90, overDmg * 2.7, 32, IndicatorsDMGUI); //x  y  半径     内半径         开始角度      结束角度    点的数量[越多，越圆润]
            } else {
                var dmg = UI.GetValue(["Rage", "Target", tab, "Minimum damage"]);
                Draw_ACR(x - 1, y - 1, 16, 12, 90, dmg * 2.7, 32, IndicatorsDMGUI); //x  y  半径     内半径         开始角度      结束角度    点的数量[越多，越圆润]
            }
        }
        if (sel & (1 << 3)) {
            if (UI.GetValue(["Rage", "Exploits", "Keys", "Key assignment", "Double tap"])) {
                Render.String(x, y - 45, 1, "DOUBLETAP", IndicatorsDT, indcatorFont);
            }
        }
        if (sel & (1 << 4)) {
            if (UI.GetValue(["Rage", "Exploits", "Keys", "Key assignment", "Double tap"])) {
                return;
            }
            if (UI.GetValue(["Rage", "Exploits", "Keys", "Key assignment", "Hide shots"])) {
                Render.String(x, y - 45, 1, "HIDESHOTS", IndicatorsHS, indcatorFont);
            }
        }



    } else {
        UI.SetEnabled(CoreIndicatorsOptional_Path, 0);
    }

}
Global.RegisterCallback("Draw", "MiscMain");
Cheat.RegisterCallback("weapon_fire", "On_weapon_firee");
Cheat.RegisterCallback("bullet_impact", "on_BulletImpact");

//Visuals
UI.AddCheckbox(visualsPath, "BetterESP"); //添加选择框: Better ESP
const BetterEsp_Path = (["Config", "[ AT ] Visuals", "[ AT ] Visuals", "BetterESP"]);
UI.AddMultiDropdown(visualsPath, "BetterESP Optional", ["Name", "Health", "Weapon", "Weapon Ico"]);
const BetterEspOptional_Path = (["Config", "[ AT ] Visuals", "[ AT ] Visuals", "BetterESP Optional"]);

function VisualsMain() {
    /*============================
    BetterEsp
    =============================*/
    if (UI.GetValue(BetterEsp_Path)) {
        UI.SetEnabled(BetterEspOptional_Path, 1);
        BetterEspMain();
    } else {
        UI.SetEnabled(BetterEspOptional_Path, 0);
    }
}
Global.RegisterCallback("Draw", "VisualsMain");


//Rage
UI.AddCheckbox(ragePath, "DT");
const DTPath = (["Config", "[ AT ] Rage", "[ AT ] Rage", "DT"]);
UI.AddSliderInt(ragePath, "DT Indicator GUI X", 0, screenX);
const DTx_Path = (["Config", "[ AT ] Rage", "[ AT ] Rage", "DT Indicator GUI X"]);
UI.AddSliderInt(ragePath, "DT Indicator GUI Y", 0, screenY);
const DTy_Path = (["Config", "[ AT ] Rage", "[ AT ] Rage", "DT Indicator GUI Y"]);
UI.AddSliderInt(ragePath, "Shift Amount", 0, 62)
const DTsa_Path = (["Config", "[ AT ] Rage", "[ AT ] Rage", "Shift Amount"]);
UI.AddSliderInt(ragePath, "Tolerance", 0, 8)
const DTt_Path = (["Config", "[ AT ] Rage", "[ AT ] Rage", "Tolerance"]);
UI.AddSliderInt(ragePath, "Max Ticks", 0, 62)
const DTmt_Path = (["Config", "[ AT ] Rage", "[ AT ] Rage", "Max Ticks"]);
UI.AddCheckbox(ragePath, "Auto Shift")
const DTas_Path = (["Config", "[ AT ] Rage", "[ AT ] Rage", "Auto Shift"]);
UI.AddCheckbox(ragePath, "Auto Tolerance")
const DTat_Path = (["Config", "[ AT ] Rage", "[ AT ] Rage", "Auto Tolerance"]);
UI.AddCheckbox(ragePath, "Auto Max Ticks")
const DTamt_Path = (["Config", "[ AT ] Rage", "[ AT ] Rage", "Auto Max Ticks"]);

const states = "Dormant"
var DTtick = UI.GetValue(DTmt_Path);
const UI_wh = {
    height: 0,
    width: 0,
    bar_width: 0,
    txt: " AT.JS || TickBase(V) : " + DTtick + " || States : " + states + " ",
    alpha: 0,
    Amin_speed: 4
}

function RageMain() {
    DTtick = UI.GetValue(DTmt_Path);
    //DT Indicator
    if (UI.GetValue(DTPath)) {
        UI.SetEnabled(DTx_Path, 1);
        UI.SetEnabled(DTy_Path, 1);
        UI.SetEnabled(DTsa_Path, 1);
        UI.SetEnabled(DTt_Path, 1);
        UI.SetEnabled(DTmt_Path, 1);
        UI.SetEnabled(DTas_Path, 1);
        UI.SetEnabled(DTat_Path, 1);
        UI.SetEnabled(DTamt_Path, 1);

        if (!Entity.IsAlive(Entity.GetLocalPlayer())) return;
        var X = UI.GetValue(DTx_Path);
        var Y = UI.GetValue(DTy_Path);
        const font = Render.GetFont("AT-JetBrainsMono.ttf", 10, false)
        const txt_size = Render.TextSize(UI_wh.txt, font)
        var color = bC
        const weapon_font = Render.GetFont("AT-Weapons.ttf", 18, false)
        const bullet_icon = Render.GetFont("AT-Bullet.ttf", 16, false)
        if (UI.GetValue(["Rage", "Exploits", "Keys", "Double tap"])) {
            const recharge = Exploit.GetCharge()

            if (UI_wh.height < txt_size[1] + 5) {
                UI_wh.height = UI_wh.height + UI_wh.Amin_speed
            }
            if (UI_wh.width < txt_size[0]) {
                UI_wh.width = UI_wh.width + UI_wh.Amin_speed
            }
            if (UI_wh.alpha < 255) {
                UI_wh.alpha = UI_wh.alpha + UI_wh.Amin_speed
            }
            if (UI_wh.alpha > 255) {
                UI_wh.alpha = 255
            }
            if (recharge == 1 && UI_wh.bar_width < UI_wh.width) {
                UI_wh.bar_width = UI_wh.bar_width + UI_wh.Amin_speed
            }
            if (recharge != 1 && UI_wh.bar_width > 5) {
                UI_wh.bar_width = UI_wh.bar_width - UI_wh.Amin_speed
            }
            if (recharge == 1) {
                states = "Active"
            } else {
                states = "Dormant"
            }
            UI_wh.txt = "  AT.JS || TickBase(V) : " + DTtick + " || States : " + states + " "

        } else {
            if (UI_wh.height > 0) {
                UI_wh.height = UI_wh.height - UI_wh.Amin_speed
            }
            if (UI_wh.width > 0) {
                UI_wh.width = UI_wh.width - UI_wh.Amin_speed
            }
            if (UI_wh.bar_width > 0) {
                UI_wh.bar_width = UI_wh.bar_width - UI_wh.Amin_speed
            }
            if (UI_wh.alpha > 0) {
                UI_wh.alpha = UI_wh.alpha - UI_wh.Amin_speed
            }
        }

        if (UI_wh.height != 0 && UI_wh.width != 0) {
            Render.FilledRect(X, Y - (txt_size[1] - 3), UI_wh.bar_width, 5, [color[0], color[1], color[2], 255]);
            Render.FilledRect(X, Y, UI_wh.width, UI_wh.height, [sbC[0], sbC[1], sbC[2], sbC[3]]);
            Render.FilledRect(X, Y, 4, UI_wh.height, [color[0], color[1], color[2], 255]);

            Render.String(X - 1, Y + 1, 0, UI_wh.txt, [0, 0, 0, UI_wh.alpha], font)
            Render.String(X, Y + 2, 0, UI_wh.txt, [vF[0], vF[1], vF[2], UI_wh.alpha], font)

            Render.String(X + 5, Y + 16, 0, Get_weapon_icon(), [255, 255, 255, UI_wh.alpha], weapon_font)

            if (recharge == 1) {
                Render.String(X + 80, Y + 16, 0, "AA", [255, 255, 255, UI_wh.alpha], bullet_icon)
            } else {
                Render.String(X + 80, Y + 16, 0, "A", [255, 255, 255, UI_wh.alpha], bullet_icon)
            }

        }
    } else {
        UI.SetEnabled(DTx_Path, 0);
        UI.SetEnabled(DTy_Path, 0);
        UI.SetEnabled(DTsa_Path, 0);
        UI.SetEnabled(DTt_Path, 0);
        UI.SetEnabled(DTmt_Path, 0);
        UI.SetEnabled(DTas_Path, 0);
        UI.SetEnabled(DTat_Path, 0);
        UI.SetEnabled(DTamt_Path, 0);
    }

}
Global.RegisterCallback("Draw", "RageMain");

function Get_weapon_icon() {
    var weapon = Entity.GetProp(Entity.GetWeapon(Entity.GetLocalPlayer()), "CBaseAttributableItem", "m_iItemDefinitionIndex") & 0xFFFF;
    if (Weapon_icon_list[weapon] == undefined) {
        var weapon = "59"
    }
    return Weapon_icon_list[weapon]
}
var Weapon_icon_list = {
    "61": "G",
    "4": "D",
    "2": "B",
    "64": "J",
    "1": "A",
    "36": "F",
    "30": "H",
    "34": "O",
    "17": "K",
    "26": "M",
    "24": "L",
    "7": "W",
    "39": "V",
    "8": "U",
    "60": "T",
    "16": "S",
    "40": "a",
    "9": "Z",
    "11": "X",
    "38": "Y",
    "25": "b",
    "27": "d",
    "14": "g",
    "28": "f",
    "32": "E",
    "10": "R",
    "3": "C",
    "33": "N",
    "24": "L",
    "19": "P",
    "63": "I",
    "23": "N",
    "13": "Q",
    "29": "c",
    "31": 'h',
    '35': "e",
    '44': 'j',
    '45': 'k',
    '46': 'l',
    '48': 'n',
    '43': 'm',
    '47': 'i',
    '49': 'o',
    "500": '1',
    "505": '2',
    "506": '3',
    "507": '4',
    "508": '5',
    "515": '8',
    "512": '0',
    "516": '9',
    "514": '7',
    "509": '6',
    '59': '1'
}

function can_shift_shot(ticks_to_shift) {
    var me = Entity.GetLocalPlayer();
    var wpn = Entity.GetWeapon(me);

    if (me == null || wpn == null)
        return false;

    var tickbase = Entity.GetProp(me, "CCSPlayer", "m_nTickBase");
    var curtime = Globals.TickInterval() * (tickbase - ticks_to_shift)

    if (curtime < Entity.GetProp(me, "CCSPlayer", "m_flNextAttack"))
        return false;

    if (curtime < Entity.GetProp(wpn, "CBaseCombatWeapon", "m_flNextPrimaryAttack"))
        return false;

    return true;
}

function cm() {
    var is_charged = Exploit.GetCharge()

    Exploit[(is_charged != 1 ? "Enable" : "Disable") + "Recharge"]()
    if (can_shift_shot(14) && is_charged != 1) {
        Exploit.DisableRecharge();
        Exploit.Recharge()
    }
    var local = Entity.GetLocalPlayer()
    var info = Entity.GetCCSWeaponInfo(local)
    var time = info.cycle_time
    var ticks = Math.round(time / Globals.TickInterval())
    var Auto_shift = UI.GetValue(DTas_Path)
    var Auto_tolerance = UI.GetValue(DTat_Path)
    var Auto_mpt = UI.GetValue(DTamt_Path)
    var maxprocessticks = UI.GetValue(DTmt_Path)
    var shift = UI.GetValue(DTsa_Path)
    var tolerance = UI.GetValue(DTt_Path)
    if (Auto_shift) {
        shift = ticks
    }
    if (Auto_tolerance) {
        tolerance = Math.round(Local.Latency() / Globals.TickInterval())
    }
    if (Auto_mpt) {
        maxprocessticks = 17
    }
    shift = Math.max(Math.min(shift, maxprocessticks), 0)
    Exploit.OverrideMaxProcessTicks(maxprocessticks)
    Exploit.OverrideShift(shift)
    Exploit.OverrideTolerance(tolerance)

}
Cheat.RegisterCallback("CreateMove", "cm")