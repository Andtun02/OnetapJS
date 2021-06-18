/*====================
    全局变量
 =====================*/
 var cfgAuthor = "CFG By AT";//WaterMark左侧文字
 var jsVersion = "0.0.3";//JS版本号
 var jsLastUpDateTime = "2021年5月13日23:59:55";//JS最后更新时间
 var userName = Cheat.GetUsername();//Onetap用户名
 var screenX = Render.GetScreenSize()[0];//屏幕X轴最大值
 var screenY = Render.GetScreenSize()[1];//屏幕Y轴最大值
 var buyWhoGunList = [["", "", "", "", ""], ["", "", "", "", ""]];//定义购买者||武器的二维数组
 var buyListViewTime = 0;//buylist显示时间
 
 
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
 
 
 
 /*====================
     根目录UI
  =====================*/
 UI.AddSubTab(["Visuals", "SUBTAB_MGR"], "AT Gui"); //添加AT Gui 界面
 UI.AddSubTab(["Visuals", "SUBTAB_MGR"], "AT Visuals"); //添加AT Visuals界面
 
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
     //Health & Armor血甲条模块
     if (UI.GetValue(["Visuals", "SUBTAB_MGR", "AT Gui", "Health & Armor"]) == 1) {
         HealthArmor_ON();
     } else {
         HealthArmor_OFF();
     }
 
     //BuyList购买清单模块
     if (UI.GetValue(["Visuals", "SUBTAB_MGR", "AT Gui", "BuyList"]) == 1) {
         BuyList_ON();
     } else {
         BuyList_OFF();
     }
     
     //EnemyTV敌人电视模块
     if (UI.GetValue(["Visuals", "SUBTAB_MGR", "AT Gui", "EnemyTV"]) == 1) {
         EnemyTV_ON();
     } else {
         EnemyTV_OFF();
     }
 }
 
 Cheat.RegisterCallback("Draw", "AT_Gui_Monitor");//回调
 
 /*=============
     方法模块
  ==============*/
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
 
 //获取本地玩家信息的方法
 function Get_Prop(table, prop) {
     const Prop = Entity.GetProp(Entity.GetLocalPlayer(), table, prop);
     return Prop;
 }
 
 //计算: 乘
 function multiply(a, b) {
     const multiply = a * b
     return multiply
 }
 
 //获取武器图标
 function GetBuyListIco(a) {
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
 
 /*====================
     WaterMark水印模块
  =====================*/
 UI.AddCheckbox(["Visuals", "AT Gui", "AT Gui"], "WaterMark");
 UI.AddColorPicker(["Visuals", "AT Gui", "AT Gui"], "WaterMark Background Colour"); //颜色
 UI.SetColor(["Visuals", "AT Gui", "AT Gui", "WaterMark Background Colour"], [180, 180, 180, 120]);//设置默认颜色
 UI.AddColorPicker(["Visuals", "AT Gui", "AT Gui"], "WaterMark Logo Colour"); //颜色
 UI.SetColor(["Visuals", "AT Gui", "AT Gui", "WaterMark Logo Colour"], [255, 255, 255, 245]);//设置默认颜色
 UI.AddColorPicker(["Visuals", "AT Gui", "AT Gui"], "WaterMark Line Colour"); //颜色
 UI.SetColor(["Visuals", "AT Gui", "AT Gui", "WaterMark Line Colour"], [255, 255, 255, 200]);//设置默认颜色
 UI.AddColorPicker(["Visuals", "AT Gui", "AT Gui"], "WaterMark Font Colour"); //颜色
 UI.SetColor(["Visuals", "AT Gui", "AT Gui", "WaterMark Font Colour"], [255, 255, 255, 200]);//设置默认颜色
 UI.AddSliderInt(["Visuals", "AT Gui", "AT Gui"], "WaterMark X", 0, screenX);
 UI.AddSliderInt(["Visuals", "AT Gui", "AT Gui"], "WaterMark Y", 0, screenY);
 UI.SetValue(["Visuals", "AT Gui", "AT Gui", "WaterMark X"], screenX / 2 - 138);//screenX - 320);
 UI.SetValue(["Visuals", "AT Gui", "AT Gui", "WaterMark Y"], 20);
 
 //开启
 function WaterMark_ON() {
     UI.SetEnabled(["Visuals", "AT Gui", "AT Gui", "WaterMark Background Colour"], 1);
     UI.SetEnabled(["Visuals", "AT Gui", "AT Gui", "WaterMark Logo Colour"], 1);
     UI.SetEnabled(["Visuals", "AT Gui", "AT Gui", "WaterMark Line Colour"], 1);
     UI.SetEnabled(["Visuals", "AT Gui", "AT Gui", "WaterMark Font Colour"], 1);
     UI.SetEnabled(["Visuals", "AT Gui", "AT Gui", "WaterMark X"], 1);
     UI.SetEnabled(["Visuals", "AT Gui", "AT Gui", "WaterMark Y"], 1);
 
     if (!Entity.IsAlive(Entity.GetLocalPlayer())) return;//活着时才显示
 
     var x = UI.GetValue(["Visuals", "AT Gui", "AT Gui", "WaterMark X"]);
     var y = UI.GetValue(["Visuals", "AT Gui", "AT Gui", "WaterMark Y"]);
     var barColor = UI.GetColor(["Visuals", "AT Gui", "AT Gui", "WaterMark Background Colour"]);
     var logoColor = UI.GetColor(["Visuals", "AT Gui", "AT Gui", "WaterMark Logo Colour"]);
     var fontColor = UI.GetColor(["Visuals", "AT Gui", "AT Gui", "WaterMark Font Colour"]);
     var lineColor = UI.GetColor(["Visuals", "AT Gui", "AT Gui", "WaterMark Line Colour"]);
     var logoIconFont = Render.GetFont("AT-IconFont.ttf", 22, false);
     var miscIconFont = Render.GetFont("AT-IconFont.ttf", 13, false);
     var miscFont = Render.GetFont("AT-ArturitoSlab.ttf", 13, false);
     var time = new Date();
     var hours = time.getHours();
     var minutes = time.getMinutes();
     var seconds = time.getSeconds();
     var ping = Math.round(Get_Prop("CPlayerResource", "m_iPing")).toString();
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
     Render.String(x + 125, y - 2, 0, "l", logoColor, logoIconFont);//LOGO图标
     Render.String(x + -18, y + 2, 0, "v", fontColor, miscIconFont);//左侧图标
     Render.String(x + -5, y + 1, 0, "AT.JS | " + cfgAuthor, fontColor, miscFont);//左边文字
     Render.String(x + 208, y + 2, 0, "1", fontColor, miscIconFont);//时间图标
     Render.String(x + 155, y + 1, 0, hours + ":" + minutes + ":" + seconds, fontColor, miscFont);//时间文字
     Render.String(x + 276, y + 2, 0, "S", fontColor, miscIconFont);
     Render.String(x + 225, y + 1, 0, "| " + ping + "ms", fontColor, miscFont);
 }
 //关闭
 function WaterMark_OFF() {
     UI.SetEnabled(["Visuals", "AT Gui", "AT Gui", "WaterMark Background Colour"], 0);
     UI.SetEnabled(["Visuals", "AT Gui", "AT Gui", "WaterMark Font Colour"], 0);
     UI.SetEnabled(["Visuals", "AT Gui", "AT Gui", "WaterMark Logo Colour"], 0);
     UI.SetEnabled(["Visuals", "AT Gui", "AT Gui", "WaterMark Line Colour"], 0);
     UI.SetEnabled(["Visuals", "AT Gui", "AT Gui", "WaterMark X"], 0);
     UI.SetEnabled(["Visuals", "AT Gui", "AT Gui", "WaterMark Y"], 0);
 }
 
 
 
 /*============================
     Health & Armor血甲条模块
  =============================*/
 UI.AddCheckbox(["Visuals", "AT Gui", "AT Gui"], "Health & Armor");//添加选择框: Health & Armor
 UI.AddColorPicker(["Visuals", "AT Gui", "AT Gui"], "Health Colour");
 UI.AddColorPicker(["Visuals", "AT Gui", "AT Gui"], "Armor Colour");
 UI.AddColorPicker(["Visuals", "AT Gui", "AT Gui"], "Health & Armor Background Colour");
 UI.AddColorPicker(["Visuals", "AT Gui", "AT Gui"], "Health & Armor Line Colour");
 UI.AddColorPicker(["Visuals", "AT Gui", "AT Gui"], "Health & Armor Font Colour");
 UI.SetColor(["Visuals", "AT Gui", "AT Gui", "Health & Armor Background Colour"], [180, 180, 180, 120]);//设置默认颜色
 UI.SetColor(["Visuals", "AT Gui", "AT Gui", "Health Colour"], [255, 34, 34, 200]);//设置默认颜色
 UI.SetColor(["Visuals", "AT Gui", "AT Gui", "Armor Colour"], [64, 224, 208, 200]);//设置默认颜色
 UI.SetColor(["Visuals", "AT Gui", "AT Gui", "Health & Armor Font Colour"], [255, 255, 255, 200]);//设置默认颜色
 UI.SetColor(["Visuals", "AT Gui", "AT Gui", "Health & Armor Line Colour"], [255, 255, 255, 200]);//设置默认颜色
 UI.AddSliderInt(["Visuals", "AT Gui", "AT Gui"], "Health & Armor X", 0, screenX);
 UI.AddSliderInt(["Visuals", "AT Gui", "AT Gui"], "Health & Armor Y", 0, screenY);
 UI.SetValue(["Visuals", "AT Gui", "AT Gui", "Health & Armor X"], 40);
 UI.SetValue(["Visuals", "AT Gui", "AT Gui", "Health & Armor Y"], screenY - 50);
 
 //开启
 function HealthArmor_ON() {
     UI.SetEnabled(["Visuals", "AT Gui", "AT Gui", "Health Colour"], 1);
     UI.SetEnabled(["Visuals", "AT Gui", "AT Gui", "Armor Colour"], 1);
     UI.SetEnabled(["Visuals", "AT Gui", "AT Gui", "Health & Armor Line Colour"], 1);
     UI.SetEnabled(["Visuals", "AT Gui", "AT Gui", "Health & Armor Font Colour"], 1);
     UI.SetEnabled(["Visuals", "AT Gui", "AT Gui", "Health & Armor Background Colour"], 1);
     UI.SetEnabled(["Visuals", "AT Gui", "AT Gui", "Health & Armor X"], 1);
     UI.SetEnabled(["Visuals", "AT Gui", "AT Gui", "Health & Armor Y"], 1);
 
     //活着时才显示
     if (!Entity.IsAlive(Entity.GetLocalPlayer())) {
         Convar.SetFloat("hidehud", 0);
         return;
     } else {
         Convar.SetFloat("hidehud", 8);
     }
 
     var HealthArmorIco = Render.GetFont("AT-IconFont.ttf", 18, false);//图标
     var HealthArmorFont = Render.GetFont("AT-ArturitoSlab.ttf", 20, false);//字体
     var hp = Get_Prop("CBasePlayer", "m_iHealth");//获取血量
     var arm = Get_Prop("CCSPlayerResource", "m_iArmor");//获取护甲
     var hpColor = UI.GetColor(["Visuals", "AT Gui", "AT Gui", "Health Colour"]);
     var armColor = UI.GetColor(["Visuals", "AT Gui", "AT Gui", "Armor Colour"]);
     var barColor = UI.GetColor(["Visuals", "AT Gui", "AT Gui", "Health & Armor Background Colour"]);
     var lineColor = UI.GetColor(["Visuals", "AT Gui", "AT Gui", "Health & Armor Line Colour"]);
     var fontColor = UI.GetColor(["Visuals", "AT Gui", "AT Gui", "Health & Armor Font Colour"]);
     var x = UI.GetValue(["Visuals", "AT Gui", "AT Gui", "Health & Armor X"]);
     var y = UI.GetValue(["Visuals", "AT Gui", "AT Gui", "Health & Armor Y"]);
     //背景
     Render.GradientRect(x - 8, y - 40, 150, 2, 1, [lineColor[0], lineColor[1], lineColor[2], 255], [lineColor[0], lineColor[1], lineColor[2], 5]);
     Render.GradientRect(x + 158, y - 40, 150, 2, 1, [lineColor[0], lineColor[1], lineColor[2], 5], [lineColor[0], lineColor[1], lineColor[2], 255]);
     Render.FilledRect(x - 8, y - 38, 316, 60, barColor);
     //血甲条
     if (hp < 300) {
         Render.FilledRect(x + 2, y + 2, multiply(hp, 3), 16, [0, 0, 0, 80]);
         Render.FilledRect(x, y, multiply(hp, 3), 16, hpColor);
     } else {
         Render.FilledRect(x, y, 300, 16, hpColor);
     }
     if (arm < 300) {
         Render.FilledRect(x + 2, y - 8, multiply(arm, 3), 6, [0, 0, 0, 80]);
         Render.FilledRect(x, y - 10, multiply(arm, 3), 6, armColor);
     } else {
         Render.FilledRect(x, y - 10, 300, 6, armColor);
     }
     //血量数字
     Render.String(x + 28, y - 33, 1, "3", fontColor, HealthArmorIco)//图标
     Render.String(x + 68, y - 37, 1, hp.toString(), fontColor, HealthArmorFont)//数字
     //护甲数字
     Render.String(x + 272, y - 33, 1, "a", fontColor, HealthArmorIco)//图标
     Render.String(x + 232, y - 37, 1, arm.toString(), fontColor, HealthArmorFont)//数字
 }
 
 //关闭
 function HealthArmor_OFF() {
     UI.SetEnabled(["Visuals", "AT Gui", "AT Gui", "Health Colour"], 0);
     UI.SetEnabled(["Visuals", "AT Gui", "AT Gui", "Armor Colour"], 0);
     UI.SetEnabled(["Visuals", "AT Gui", "AT Gui", "Health & Armor Line Colour"], 0);
     UI.SetEnabled(["Visuals", "AT Gui", "AT Gui", "Health & Armor Font Colour"], 0);
     UI.SetEnabled(["Visuals", "AT Gui", "AT Gui", "Health & Armor Background Colour"], 0);
     UI.SetEnabled(["Visuals", "AT Gui", "AT Gui", "Health & Armor X"], 0);
     UI.SetEnabled(["Visuals", "AT Gui", "AT Gui", "Health & Armor Y"], 0);
 }
 
 
 
 /*======================
     BuyList购买清单模块
  =======================*/
 UI.AddCheckbox(["Visuals", "AT Gui", "AT Gui"], "BuyList");//添加选择框: Buy List
 UI.AddColorPicker(["Visuals", "AT Gui", "AT Gui"], "BuyList Background Colour");
 UI.AddColorPicker(["Visuals", "AT Gui", "AT Gui"], "BuyList Line Colour");
 UI.AddColorPicker(["Visuals", "AT Gui", "AT Gui"], "BuyList Font Colour");
 UI.SetColor(["Visuals", "AT Gui", "AT Gui", "BuyList Font Colour"], [255, 255, 255, 200]);//设置默认颜色
 UI.SetColor(["Visuals", "AT Gui", "AT Gui", "BuyList Line Colour"], [255, 255, 255, 200]);//设置默认颜色
 UI.SetColor(["Visuals", "AT Gui", "AT Gui", "BuyList Background Colour"], [180, 180, 180, 120]);//设置默认颜色
 UI.AddSliderInt(["Visuals", "AT Gui", "AT Gui"], "BuyList X", 0, screenX);
 UI.AddSliderInt(["Visuals", "AT Gui", "AT Gui"], "BuyList Y", 0, screenY);
 UI.SetValue(["Visuals", "AT Gui", "AT Gui", "BuyList X"], screenX - 300);
 UI.SetValue(["Visuals", "AT Gui", "AT Gui", "BuyList Y"], screenY - screenY / 2);
 
 
 //开启
 function BuyList_ON() {
     UI.SetEnabled(["Visuals", "AT Gui", "AT Gui", "BuyList X"], 1);
     UI.SetEnabled(["Visuals", "AT Gui", "AT Gui", "BuyList Y"], 1);
     UI.SetEnabled(["Visuals", "AT Gui", "AT Gui", "BuyList Line Colour"], 1);
     UI.SetEnabled(["Visuals", "AT Gui", "AT Gui", "BuyList Font Colour"], 1);
     UI.SetEnabled(["Visuals", "AT Gui", "AT Gui", "BuyList Background Colour"], 1);
 
     if ((UI.IsMenuOpen()) && (buyListViewTime < Globals.Curtime() + 1)) {
         buyListViewTime = Globals.Curtime() + 1;
     }
     if (!(buyListViewTime > Globals.Curtime())) {
         return;
     }
 
     var x = UI.GetValue(["Visuals", "AT Gui", "AT Gui", "BuyList X"]);
     var y = UI.GetValue(["Visuals", "AT Gui", "AT Gui", "BuyList Y"]);
     var barColor = UI.GetColor(["Visuals", "AT Gui", "AT Gui", "BuyList Background Colour"]);
     var lineColor = UI.GetColor(["Visuals", "AT Gui", "AT Gui", "BuyList Line Colour"]);
     var fontColor = UI.GetColor(["Visuals", "AT Gui", "AT Gui", "BuyList Font Colour"]);
     var BuyListIco = Render.GetFont("AT-IconFont.ttf", 20, false);//图标
     var BuyListWepIco = Render.GetFont("AT-Weapons.ttf", 15, false);//武器图标
     var BuyListFont = Render.GetFont("AT-ArturitoSlab.ttf", 15, false);//字体
     // var BuyNameFont = Render.GetFont("AT-ArturitoSlab.ttf", 12, false);//字体
 
     //背景
     Render.GradientRect(x - 8, y - 40, 100, 2, 1, [lineColor[0], lineColor[1], lineColor[2], 255], [lineColor[0], lineColor[1], lineColor[2], 5]);
     Render.GradientRect(x + 158, y - 40, 100, 2, 1, [lineColor[0], lineColor[1], lineColor[2], 5], [lineColor[0], lineColor[1], lineColor[2], 255]);
     Render.GradientRect(x - 8, y - 18, 100, 2, 1, [lineColor[0], lineColor[1], lineColor[2], 255], [lineColor[0], lineColor[1], lineColor[2], 5]);
     Render.GradientRect(x + 158, y - 18, 100, 2, 1, [lineColor[0], lineColor[1], lineColor[2], 5], [lineColor[0], lineColor[1], lineColor[2], 255]);
     Render.FilledRect(x - 8, y - 38, 266, 150, barColor);
     Render.FilledRect(x, y - 8, 250, 112, barColor);
     //Logo
     Render.String(x + 126, y - 37, 1, ",", fontColor, BuyListIco)//图标
     // Render.String(x + 218, y - 38, 1, "BuyList", fontColor, BuyListFont)//数字
     Render.String(x + 28, y - 38, 1, "BuyList", fontColor, BuyListFont)//buylist
     //图标
     // Render.String(x + 22+buyListmoveX, y-6, 1, buyWhoGunList[0][0], fontColor, BuyNameFont)//buylist
     // Render.String(x + 22+buyListmoveX, y+10, 1, buyWhoGunList[0][1], fontColor, BuyNameFont)//buylist
     // Render.String(x + 22+buyListmoveX, y+20, 1, buyWhoGunList[0][2], fontColor, BuyNameFont)//buylist
     // Render.String(x + 22+buyListmoveX, y+30, 1, buyWhoGunList[0][3], fontColor, BuyNameFont)//buylist
     // Render.String(x + 22+buyListmoveX, y+40, 1, buyWhoGunList[0][4], fontColor, BuyNameFont)//buylist
     Render.String(x + 126, y - 1, 1, buyWhoGunList[1][0], [255, 255, 255, 255], BuyListWepIco)//buylist
     Render.String(x + 126, y + 22, 1, buyWhoGunList[1][1], [255, 255, 255, 255], BuyListWepIco)//buylist
     Render.String(x + 126, y + 42, 1, buyWhoGunList[1][2], [255, 255, 255, 255], BuyListWepIco)//buylist
     Render.String(x + 126, y + 62, 1, buyWhoGunList[1][3], [255, 255, 255, 255], BuyListWepIco)//buylist
     Render.String(x + 126, y + 82, 1, buyWhoGunList[1][4], [255, 255, 255, 255], BuyListWepIco)//buylist
 
 }
 //购买物品
 function BuyEvents() {
     var ent = Entity.GetEntityFromUserID(Event.GetInt('userid'))
     var team = Event.GetInt('team')
     if (team != Entity.GetProp(Entity.GetLocalPlayer(), "CBaseEntity", "m_iTeamNum")) {
         var item = Event.GetString('weapon')
         var name = Entity.GetName(ent)
         // Global.PrintChat("[AT-Debug] " + name + " || " + item);
         //名字
         for (i = 0; i < 5; i++) {
             if (buyWhoGunList[0][i] == "" && name != (i >= 1 ? buyWhoGunList[0][i - 1] : (i == 1) ? "" : "|ATJS|")) {
                 buyWhoGunList[0][i] = name;
                 // Global.PrintChat(buyWhoGunList[0][i] + " || i=" + i);
                 break;
             }
         }
         //武器
         for (i = 0; i < 5; i++) {
             if (name == buyWhoGunList[0][i]) {
                 buyWhoGunList[1][i] += GetBuyListIco(item);
                 // Global.PrintChat(buyWhoGunList[1][i]);
                 break;
             }
         }
         if (buyListViewTime < Globals.Curtime() + 1) {
             buyListViewTime += 3;
         }
     }
 }
 Global.RegisterCallback("item_purchase", "BuyEvents");
 //清除
 function ClearBuyList() {
     for (i = 0; i < 5; i++) {
         buyWhoGunList[0][i] = "";
         buyWhoGunList[1][i] = "";
     }
 }
 //回合开始事件
 function RoundStartEnvets() {
     ClearBuyList()
     buyListViewTime = Globals.Curtime() + 15;
 }
 //回合结束事件
 function RoundEndEnvets() {
     ClearBuyList()
 }
 Global.RegisterCallback('round_end', 'RoundEndEnvets');
 Global.RegisterCallback('round_start', 'RoundStartEnvets');
 //关闭
 function BuyList_OFF() {
     UI.SetEnabled(["Visuals", "AT Gui", "AT Gui", "BuyList X"], 0);
     UI.SetEnabled(["Visuals", "AT Gui", "AT Gui", "BuyList Y"], 0);
     UI.SetEnabled(["Visuals", "AT Gui", "AT Gui", "BuyList Line Colour"], 0);
     UI.SetEnabled(["Visuals", "AT Gui", "AT Gui", "BuyList Font Colour"], 0);
     UI.SetEnabled(["Visuals", "AT Gui", "AT Gui", "BuyList Background Colour"], 0);
 
 }
 
 /*======================
     EnemyTV 敌方电视机
  =======================*/
  UI.AddCheckbox(["Visuals", "AT Gui", "AT Gui"], "EnemyTV");
  UI.AddCheckbox(["Visuals", "AT Gui", "AT Gui"], "[Info] HotKey in <JS Keybinds>");
  UI.AddHotkey(["Config", "Scripts", "JS Keybinds"], "EnemyTV Key", "EnemyTV Key");//添加按键
  UI.AddCheckbox(["Visuals", "AT Gui", "AT Gui"], "EnemyTV Hide Title");//隐藏标题
  UI.AddColorPicker(["Visuals", "AT Gui", "AT Gui"], "EnemyTV Background Colour");
  UI.AddColorPicker(["Visuals", "AT Gui", "AT Gui"], "EnemyTV Line Colour");
  UI.AddColorPicker(["Visuals", "AT Gui", "AT Gui"], "EnemyTV Font Colour");
  UI.SetColor(["Visuals", "AT Gui", "AT Gui", "EnemyTV Font Colour"], [255, 255, 255, 200]);//设置默认颜色
  UI.SetColor(["Visuals", "AT Gui", "AT Gui", "EnemyTV Line Colour"], [255, 255, 255, 200]);//设置默认颜色
  UI.SetColor(["Visuals", "AT Gui", "AT Gui", "EnemyTV Background Colour"], [180, 180, 180, 120]);//设置默认颜色
  UI.AddSliderInt(["Visuals", "AT Gui", "AT Gui"], "EnemyTV X", 0, screenX);
  UI.AddSliderInt(["Visuals", "AT Gui", "AT Gui"], "EnemyTV Y", 0, screenY);
  UI.SetValue(["Visuals", "AT Gui", "AT Gui", "EnemyTV X"], 260);
  UI.SetValue(["Visuals", "AT Gui", "AT Gui", "EnemyTV Y"], 60);
 
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
      const DegreeToRadian = function (deg) {
          return deg * Math.PI / 180;
      }
      const sp = Math.sin(DegreeToRadian(x[0]));
      const cp = Math.cos(DegreeToRadian(x[0]));
      const sy = Math.sin(DegreeToRadian(x[1]));
      const cy = Math.cos(DegreeToRadian(x[1]));
      return [cp * cy, cp * sy, -sp]
  }
  function CalculateAngles(from, to) {
      const RadianToDegree = function (rad) {
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
      var data = { target: null, fov: 180 };
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
          UI.SetValue(["Visuals", "AT Gui", "AT Gui", "EnemyTV X"], drag.x);
          UI.SetValue(["Visuals", "AT Gui", "AT Gui", "EnemyTV Y"], drag.y);
      }
      else {
          drag.difference.x = cursor[0] - drag.x;
          drag.difference.y = cursor[1] - drag.y;
      }
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
      View.Update(view, size[0] / 2, size[1] / 2, camera_pos, camera_angles);
      drag.x = UI.GetValue(["Visuals", "AT Gui", "AT Gui", "EnemyTV X"]);
      drag.y = UI.GetValue(["Visuals", "AT Gui", "AT Gui", "EnemyTV Y"]);
  }
  Cheat.RegisterCallback("FRAME_RENDER_START", "onFrameRenderStart");
  Cheat.RegisterCallback("CreateMove", "onCreateMove");
 
 
 //开启
  function EnemyTV_ON(){
     UI.SetEnabled(["Visuals", "AT Gui", "AT Gui", "[Info] HotKey in <JS Keybinds>"], 1);
     UI.SetEnabled(["Visuals", "AT Gui", "AT Gui", "EnemyTV Hide Title"], 1);
     UI.SetEnabled(["Visuals", "AT Gui", "AT Gui", "EnemyTV X"], 1);
     UI.SetEnabled(["Visuals", "AT Gui", "AT Gui", "EnemyTV Y"], 1);
     UI.SetEnabled(["Visuals", "AT Gui", "AT Gui", "EnemyTV Line Colour"], 1);
     UI.SetEnabled(["Visuals", "AT Gui", "AT Gui", "EnemyTV Font Colour"], 1);
     UI.SetEnabled(["Visuals", "AT Gui", "AT Gui", "EnemyTV Background Colour"], 1);
 
     //颜色
     var lineColor = UI.GetColor(["Visuals", "AT Gui", "AT Gui", "EnemyTV Line Colour"]);
     var EVbgColor = UI.GetColor(["Visuals", "AT Gui", "AT Gui", "EnemyTV Background Colour"]);
     const is_menu_open = UI.IsMenuOpen();
     const is_local_player_valid = Entity.IsValid(Entity.GetLocalPlayer());
     if (is_menu_open)
         HandleDragging();
     if (UI.GetValue(["Visuals", "AT Gui", "AT Gui", "EnemyTV"])) {
         if (!(UI.GetValue(["Config", "Scripts", "JS Keybinds", "EnemyTV Key"]) && is_local_player_valid) && !is_menu_open)
             return;
     } else {
         return;
     }
     const size = Render.GetScreenSize();
     const font = Render.GetFont("AT-ArturitoSlab.ttf", 15, false);
     const ico = Render.GetFont("AT-IconFont.ttf", 20, false);
     const x = drag.x, y = drag.y;
     Render.FilledRect(x - 4, y - 4, size[0] / 4 + 8, size[1] / 4 + 8, EVbgColor);
 
     //隐藏标题
     if (!UI.GetValue(["Visuals", "AT Gui", "AT Gui", "EnemyTV Hide Title"])) {
         Render.GradientRect(x - 4, y - 36, size[0] / 8 , 2, 1, [lineColor[0], lineColor[1], lineColor[2], 255], [lineColor[0], lineColor[1], lineColor[2], 5]);
         Render.GradientRect(x + size[0] / 8+4, y - 36, size[0] / 8 , 2, 1, [lineColor[0], lineColor[1], lineColor[2], 5], [lineColor[0], lineColor[1], lineColor[2], 255]);
         Render.GradientRect(x - 4, y - 12, size[0] / 8 , 2, 1, [lineColor[0], lineColor[1], lineColor[2], 255], [lineColor[0], lineColor[1], lineColor[2], 5]);
         Render.GradientRect(x + size[0] / 8+4, y - 12, size[0] / 8 , 2, 1, [lineColor[0], lineColor[1], lineColor[2], 5], [lineColor[0], lineColor[1], lineColor[2], 255]);
         Render.FilledRect(x - 4, y - 34, size[0] / 4 + 8, 22, EVbgColor);
         Render.String(x - 192 + size[0] / 8, y - 32, 1, "Enemy View", UI.GetColor(["Visuals", "AT Gui", "AT Gui", "EnemyTV Font Colour"]), font);
         Render.String(x + size[0] / 8, y - 32, 1, "[", UI.GetColor(["Visuals", "AT Gui", "AT Gui", "EnemyTV Font Colour"]), ico);
 
     }
     if (is_local_player_valid && target)
         View.Render(view, drag.x, drag.y, size[0] / 4, size[1] / 4);
     else {
         const alpha = Math.sin(Globals.Tickcount() * Globals.TickInterval() * 2) * 127 + 128;
         Render.FilledRect(drag.x, drag.y, size[0] / 4, size[1] / 4, EVbgColor);
         Render.String(drag.x + size[0] / 8, drag.y + size[1] / 8 - 24, 1, "Camera unavailable.", [235, 235, 235, alpha], font);
     }
  }
 
 //关闭
  function EnemyTV_OFF(){
     UI.SetEnabled(["Visuals", "AT Gui", "AT Gui", "[Info] HotKey in <JS Keybinds>"], 0);
     UI.SetEnabled(["Visuals", "AT Gui", "AT Gui", "EnemyTV Hide Title"], 0);
     UI.SetEnabled(["Visuals", "AT Gui", "AT Gui", "EnemyTV X"], 0);
     UI.SetEnabled(["Visuals", "AT Gui", "AT Gui", "EnemyTV Y"], 0);
     UI.SetEnabled(["Visuals", "AT Gui", "AT Gui", "EnemyTV Line Colour"], 0);
     UI.SetEnabled(["Visuals", "AT Gui", "AT Gui", "EnemyTV Font Colour"], 0);
     UI.SetEnabled(["Visuals", "AT Gui", "AT Gui", "EnemyTV Background Colour"], 0);
  }