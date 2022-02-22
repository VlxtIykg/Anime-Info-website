var currently;
/*var pic = document.getElementById("slideshow"); */
var pic = document.getElementById("slideshow");
var description = document.getElementById("animeDesc");
var anime = document.getElementById("animeTitle");
var character = document.getElementById("animeMc");
var title = document.getElementById("captionswap");
var article = document.getElementById("article");
var abilityTitle = document.getElementById("abilityTitle");
var abilityTitles = document.getElementById("abilityTitles");
var japaneseName = document.getElementsByClassName("t_nihongo_kanji");
var englishName = document.getElementsByClassName("englishName");
var text = document.getElementById("text");
var abilityDesc = document.getElementById("abilitydescription");
var abilitylink = document.getElementById("abilitylink");
var abilityimage = document.getElementById("abilityimage");
var chapter = document.getElementById("chapter");
var episode = document.getElementById("episode");
var ability = document.getElementById("ability1");
var abilities = document.getElementById("abilities");
var skillset = document.getElementById("skillset");
var skills = document.getElementById("Skills");
var bg = document.getElementById("bg");
var background = document.getElementById("background");
var battles = document.getElementById("battle");
var whitelink = document.getElementsByClassName("whitelink");
var arc = document.getElementsByClassName("arc");
var maintp1 = document.getElementById("main-topic-1");
var maintp2 = document.getElementById("main-topic-2");
var maintp3 = document.getElementById("main-topic-3");
var maintp4 = document.getElementById("main-topic-4");
var mainevidence1 = document.getElementById("main-evidence-1");
var mainevidence2 = document.getElementById("main-evidence-2");
var mainevidence3 = document.getElementById("main-evidence-3");
var mainevidence4 = document.getElementById("main-evidence-4");

function dazai() {
    title.innerHTML = "<span title=\"Mc: Osamu Dazai & Atsushi Nakajima\">Bungou Stray Dogs</span>";
    anime.innerHTML = "<a href=\"https://bungostraydogs.fandom.com/wiki/Bungo_Stray_Dogs_(Anime)\"  target=\"_blank\">\"Bungou Stray Dogs\"</a>";
    character.innerText = "Osamu Dazai & Atsushi Nakajima";
    description.innerText = "The picture shows Osamu Dazai and Atsushi Nakajima! The obvious main character of the show <a href=\"https://bungostraydogs.fandom.com/wiki/Bungo_Stray_Dogs_(Anime)\" id=\"wiki\" target=\"_blank\">\"Bungou Stray Dogs\"</a> casting different seasons with different MC and Villians! You can read more in depth about its detail <a id=\"wiki\" href=\"https://en.wikipedia.org/wiki/Bungo_Stray_Dogs\" target=\"_blank\">here.</a>  Osamu Dazai is one of the <a id=\"wiki\"  href=\"https://bungostraydogs.fandom.com/wiki/Armed_Detective_Agency\">armed detective agency</a> who used to work with <a id=\"wiki\" href=\"https://bungostraydogs.fandom.com/wiki/Port_Mafia\">the Port Mafia</a> <sub title=\"Imo dazai the coolest!\">en</sub><a id=\"fandom\" href=\"https://bungostraydogs.fandom.com/wiki/Bungo_Stray_Dogs_(Anime)\" target=\"_blank\"><br>Fandom</a>";
    var link = document.getElementById('multiple');
    link.setAttribute('href', '/css/card/DazaiCard.css');
    abilityTitle.innerHTML = "No Longer Human";
    japaneseName[0].innerText = "(人間失格";
    japaneseName[1].innerText = "(人間失格";
    englishName[0].innerText = "Ningen Shikkaku)";
    englishName[1].innerText = "Ningen Shikkaku)";
    text.innerText = null;
    abilityDesc.innerText = "allows Dazai to nullify others' abilities on contact. It relies on skin contact and is always active. As such, he can nullify any ability even while restrained as soon as it touches him.";
    abilityTitles.innerText = "No Longer Human";
    abilitylink.title = "Osamu Dazai";
    abilitylink.href = "https://bungostraydogs.fandom.com//wiki/No_Longer_Human";
    abilityimage.src = "Images/table/No_Longer_Human.gif";
    episode.href = "https://bungostraydogs.fandom.com//wiki/Episode_1";
    chapter.href = "https://bungostraydogs.fandom.com//wiki/Chapter_1";
    episode.innerText = "Volume 1";
    chapter.innerText = "Chapter 1";
    ability.innerText = "Ability";
    abilities.innerText = "No Longer Human";
    currently = "fma";
    skills.innerText = "Skills"
}
function fma() {
    title.innerHTML = "<span title=\"Mc: Edward Elric & Aplhonse Elric\">Full Metal Alchemists</span>";
    anime.innerHTML = "<a href=\"https://fma.fandom.com/wiki/Main_Page\" target=\"_blank\">Full Metal Alchemist</a>";
    character.innerText = "Edward Elric * Alphonse Elric";
    description.innerHTML = "The Elric Brothers, two of the few main characters in the Full Metal Alchemist Series! Undenianly, one of the coolest characters and anime. Their journey starts from a tragic start to an ending with infinite scenarios. Through thick and thin, the brothers got each other's <span title=\"Sometimes quite literally..\">back</span>.<a id=\"fandom\" href=\"https://fma.fandom.com/wiki/Main_Page\" target=\"_blank\"><br>Fandom</a>";
    var link = document.getElementById('multiple');
    link.setAttribute('href', '/css/card/ElricCard.css');
    abilityTitle.innerHTML = "Alphonse Elric & Edward Elric";
    article.href = "https://fma.fandom.com/wiki/Alchemy";
    article.innerText = "Alchemy";
    article.title = "Alchemy";
    japaneseName[0].innerText = null;
    japaneseName[1].innerText = null;
    englishName[0].innerText = null;
    englishName[1].innerText = null;
    text.innerText = null;
    abilityDesc.innerText = ") can perform alchemy and use transmutation rituals.\" Human kind can not gain anything without first giving something in return. To obtain something of equal value must be lost.\"";
    abilityTitles.innerText = "Elric Brothers";
    abilitylink.title = "Alchemy";
    abilitylink.href = "https://fma.fandom.com/wiki/Alchemy";
    abilityimage.src = "Images/table/Simpletransmutation.png";
    episode.href = "https://fma.fandom.com/wiki/Episode_1:_Fullmetal_Alchemist_(2009_series)";
    chapter.href = "https://fma.fandom.com/wiki/Chapter_1:_The_Two_Alchemists";
    episode.innerText = "Volume 1";
    chapter.innerText = "Chapter 1";
    ability.innerText = "Ability";
    abilities.innerText = "Alchemy";
    bg.innerText = " Edward vowed that the two of them would find a way to bring their dear mother back to life with the power of alchemy. ";
    currently = "tokyoghoul";
    skills.innerHTML = "<br>&nbsp;Transmutation&nbsp;Steps"
    maintp1.innerHTML = "<span id=\"main-topic-1\"><b>Comprehension</b></span>"
}
function tokyoghoul() {
    title.innerHTML = "<span title=\"Mc: Kaneki Ken\">Tokyo Ghoul</span>"
    anime.innerHTML = "<a href=\"https://tokyoghoul.fandom.com/wiki/Ken_Kaneki\" target=\"_blank\">Tokyo Ghoul</a>";
    character.innerText = "Ken Kaneki"
    description.innerText = "Ken Kaneki, the main protagonist of <a id=\"wiki\" href=\"https://tokyoghoul.fandom.com/wiki/Ken_Kaneki\" title=\"Also another one of my favourite animes\">Tokyo ghoul</a> was just an ordinary highschool boy who likes to read books, who unfortunately went down the wrong alley way. Having many things happening from start to beginning, he suffers a lot.. All to protect the one he loves and to adapt to his new environment.  <a id=\"fandom\" href=\"https://tokyoghoul.fandom.com/wiki/Ken_Kaneki\" target=\"_blank\"><br>Fandom</a> ";
    var link = document.getElementById('multiple');
    link.setAttribute('href', '/css/card/KanekiCard.css');
    abilityTitle.innerHTML = "Kaneki Ken";
    article.href = "https://tokyoghoul.fandom.com/wiki/Ken_Kaneki#Powers_and_Abilities";
    article.innerText = "Kaneki Ken";
    article.title = "Kaneki Kagune";
    japaneseName[0].innerText = "(金木 研,";
    japaneseName[1].innerText = "(金木 研,";
    englishName[0].innerText = " Kaneki Ken)";
    englishName[1].innerText = " Kaneki Ken)";
    text.innerText = null;
    abilityDesc.innerText = "Ghoul Physiology: After inheriting Rize Kamishiro's kakuhou, Kaneki has displayed unique healing factor. Due to the hybrid vigor, Kaneki's abilities are said to be more potent than those of a natural-born ghoul. ";
    abilityTitles.innerText = "Kaneki";
    abilitylink.title = "Rinkaku Kagune";
    abilitylink.href = "https://tokyoghoul.fandom.com/wiki/Ken_Kaneki#Powers_and_Abilities";
    abilityimage.src = "Images/table/Kaneki.png";
    episode.href = "https://tokyoghoul.fandom.com/wiki/Episode_1";
    chapter.href = "https://tokyoghoul.fandom.com/wiki/Chapter_1";
    episode.innerText = "Volume 1";
    chapter.innerText = "Chapter 1";
    ability.innerText = "Ability";
    abilities.innerText = "Rinkaku kagune";
    skills.innerText = "<ul><li><b>Superhuman Strength:</b> As Banjou paid a visit to Anteiku, Kaneki accidentally knocked him unconscious with an elbow strike. Kaneki was able to rip a lamp post from asphalt and strike one of the Bin brothers with it. When fighting Ayato Kirishima, Kaneki forcibly smashed Ayato through multiple floors of the 11th ward building.During his sparring sessions with Banjou, Kaneki threw the ghoul around without much effort.</li></ul> <ul><li><b>Superhuman Speed:</b> Kaneki was capable of evading Narukami\'s condensed projectiles, while assaulting Arima.[29] While he engaged Yukinori Shinohara in a fight, Kaneki was traveling at immense speed, quick enough for Shinohara not being able to track his location. In his fight with Karren, Sasaki was able to maneuver and dodge her rapid kagune attacks, swiftly approaching her from behind towards the end of the motion.[31] Sasaki has also shown the ability to parry Arima\'s numerous Owl attacks while facing him in Cochlea.[40][41] On his way to meet with Takizawa, Ayato, and Kurona for their infiltration of the CCG laboratory, Kaneki was pursued by V agents and he managed to dodge their attacks while making his escape at the same time. In his conflict with Naki, Kaneki effortlessly dodged Naki\'s attempts to assault him.</li></ul> <ul><li><b>Superhuman Endurance:</b> During his second encounter with Nishiki, Kaneki was able to endure multiple blows from the ghoul in his weakened, starving state. When he was fighting Shachi, Kaneki maintained consciousness after being smashed through the floor and walls of Kanou\'s Underground Laboratory. After being pierced through the abdomen by Amon, Kaneki was still able to survive and recover from his injuries, albeit through consuming parts of Hide. During his encounter with Arima at V14, Kaneki continued fighting despite his critical head injures, which would be fatal even to a ghoul.As Sasaki, he survived being pierced by Serpent\'s kagune, and eventually overpowered the ghoul despite being grievously wounded.Sasaki overpowered Karren von Rosewald and Eto with a severed hand, gradually using his kagune as replacement. He seemed unfazed when Kishou Arima stabbed him multiple times through the abdomen, as he also took countless severe cuts to his body in his fight with Owl and was still able to keep fighting. Even after prolonged fight against Suzuya and Abara which saw Kaneki taking critical damage, getting dismembered and losing his healing factor, he was still able to manifest his kagune and killing Hajime Hazuki and after that, slaughter the rest of the Oggai squad. Later on, Kaneki was able to withstand the onslaught of Furuta and Rize in two consecutive fights.</ul></li>";
    bg.innerText = "A date ended up him almost dead..";
    battles.innerText = null;
    currently = "meliodas";
    skills.innerText = "";
}
function meliodas() {
    title.innerHTML = "<span title=\"Mc: Meliodas and a couple others\">7 Deadly Sins</span>"
    anime.innerHTML = "<a href=\"https://nanatsu-no-taizai.fandom.com/wiki/Meliodas\" target=\"_blank\">7 Deadly sins</a>";
    character.innerText = "Meliodas <abbr title=\"Sin of Wrath\">SOW</abbr>"
    description.innerText = "Meliodas, the main protagonist of <a id=\"wiki\" href=\"https://nanatsu-no-taizai.fandom.com/wiki/Meliodas\" title=\"The son of the demon king and captian of the 7 deadly sins who were once part of the holy knight.\">7 Deadly Sins</a> is the captian of 6 other powerful individuals from many different races. Each <span title=\"Escanor[Sin of Pride], Diane[Sin of Envy], Ban[Sin of Greed], Gowther[Sin of Lust], Merlin[Sin of Gluttony], King[Sin of Sloth] and Meliodas[King of Wrath].\">individual</span> has their own sin and animal related to them. Meliodas is an extremely powerful demon however he does not work with the ten commandments anymore.<a id=\"fandom\" href=\"https://nanatsu-no-taizai.fandom.com/wiki/Meliodas\" target=\"_blank\"><br>Fandom<br></a> ";
    var link = document.getElementById('multiple');
    link.setAttribute('href', '/css/card/MeliodasCard.css');
    abilityTitle.innerHTML = "Meliodas";
    article.href = "https://nanatsu-no-taizai.fandom.com/wiki/Meliodas#Abilities_and_Equipment";
    article.innerText = "Meliodas";
    article.title = "Meliodas Abilities";
    japaneseName[0].innerText = "「メリオダス,";
    japaneseName[1].innerText = "「メリオダス,";
    englishName[0].innerText = " Meliodas」";
    englishName[1].innerText = " Meliodas」";
    text.innerText = null;
    abilityDesc.innerText = "「全反撃, Furukauntā」: This ability allows Meliodas to reflect magic attacks aimed at him, back at the enemy, but with much greater power; therefore, the stronger the opponent's powers are, the rebound becomes.";
    abilityTitles.innerText = "Full counter";
    abilitylink.title = "Meliodas Ability";
    abilitylink.href = "https://nanatsu-no-taizai.fandom.com/wiki/Meliodas#Abilities_and_Equipment";
    abilityimage.src = "Images/table/Meliodas.png";
    episode.href = "https://nanatsu-no-taizai.fandom.com/wiki/Episode_1";
    chapter.href = "https://nanatsu-no-taizai.fandom.com/wiki/Chapter_1";
    episode.innerText = "Volume 1";
    chapter.innerText = "Chapter 1";
    ability.innerText = "Ability";
    abilities.innerText = "Full counter";
    skills.innerText = "<ul><li><b>Hellblaze「獄炎, Herubureizu;</b> literally meaning \"Hellfire\"」: A mysterious ability displayed by Meliodas that allows him to generate black flames. The technique also has the additional effect of nullifying an immortal's regeneration, as shown when he used it against Ban.</li></ul> <ul><li><b>Assault Mode「殲滅状態, Asaruto Mōdo」:</b> This state is reached when Meliodas unleashes his demon powers to the fullest, achieving immense powers. This form also allows Meliodas to access his full power. According to Melascula, back in the days when Meliodas was in command of the Ten Commandments, even they were in fear of him while in this mode. The drawback is that it temporarily robs Meliodas of all his feeling and emotions, causing him to revert to how he was before he betrayed the Demon Clan.</li></ul> <ul><li><b>Kami Chigiri「神千斬り,</b><i>Kami Chigiri</i>; literally meaning \"Thousand Divine Slayer\"」: Meliodas cuts his opponent with his sword a total of a thousand times in an instant.</li></ul> <ul><li><b>Trillion Dark</b>「トリリオン・ダーク , Toririon Dāku」: Meliodas launches a barrage of small spheres of high concentrated darkness at the opponent.</li></ul>";
    bg.innerText = "The majority of Meliodas' childhood is unknown but in the past, Meliodas was trained by Chandler and was the leader of the Demon Clan's Ten Commandments, bestowed with the Commandment of \"Love\" and regarded as the one most likely to become the next Demon King, for his strength and ruthlessness.";
    battles.innerText = null;
    currently = "opm";
    skills.innerText = "";
}
function opm() {
    title.innerHTML = "<span title=\"Mc: Saitama\">One Punch Man</span>"
    anime.innerHTML = "<a href=\"https://onepunchman.fandom.com/wiki/One-Punch_Man_Wiki\" target=\"_blank\">One Punch Man</a>"
    character.innerText = "<span title=\"Also known as caped baldy\">Saitama</span>"
    description.innerText = "<span title=\"This is his hero association hero name.\">Caped baldy</span> aka Saitama, the strongest man alive who grew so strong that he could one punch anything. He is the main character of <a id=\"wiki\" href=\"https://onepunchman.fandom.com/wiki/One-Punch_Man_Wiki\">One Punch Man</a>, who desires a battle that is tough, as every battle he has faced was just one punch. <aside class=\"asideZ\">Did you know that he has a \"disciple\" named genos who is in S rank?</aside><a id=\"fandom\" href=\"https://onepunchman.fandom.com/wiki/One-Punch_Man_Wiki\" target=\"_blank\"><br>Fandom</a>"
    var link = document.getElementById('multiple');
    link.setAttribute('href', '/css/card/SaitamaCard.css');
    abilityTitle.innerHTML = "Saitama ";
    article.href = "https://onepunchman.fandom.com/wiki/Saitama#Abilities_and_Powers";
    article.innerText = "Saitama";
    article.title = "Saitama one punch..";
    japaneseName[0].innerText = "(サイタマ";
    japaneseName[1].innerText = "(サイタマ";
    englishName[0].innerText = " Saitama」";
    englishName[1].innerText = " Saitama」";
    text.innerText = null;
    abilityDesc.innerText = "One punchhhh. Literally.";
    abilityTitles.innerText = "One punch.";
    abilitylink.title = "Saitama Ability";
    abilitylink.href = "https://onepunchman.fandom.com/wiki/Saitama#Abilities_and_Powers";
    abilityimage.src = "Images/table/Saitama.gif";
    episode.href = "https://tokyoghoul.fandom.com/wiki/Episode_1";
    chapter.href = "https://tokyoghoul.fandom.com/wiki/Chapter_1";
    episode.innerText = "Volume 1";
    chapter.innerText = "Chapter 1";
    ability.innerText = "Ability";
    abilities.innerText = "One Punch";
    bg.innerText = "After a year and a half of 100 daily push-ups, sit-ups, and squats, plus 10 km daily running, he had achieved some level of superhuman strength. ";
    battles.innerText = null;
    var switch5 = null;
    currently = "jujutsu";
    skills.innerText = "";
}
function jjk() {
    title.innerHTML = "<span title=\"Mc: Itadori Yuuji\">Jujutsu Kaisen</span>"
    anime.innerHTML = "<a href=\"https://jujutsu-kaisen.fandom.com/wiki/Jujutsu_Kaisen_Wiki\" target=\"_blank\" title=\"Great Anime Ngl\">Jujutsu Kaisen</a>"
    character.innerText = "<span title=\"He host Ryomen Sukuna\">Itadori Yuuji</span>"
    description.innerText = "<a href=\"https://jujutsu-kaisen.fandom.com/wiki/Yuji_Itadori\" target=\"_blank\">Itadori Yuuji</a> who was a highschool guy who wanted to join the occult group despite having superhuman strength. However an incident occured at his school and he ate ne of sukuna finger to protect his friends. He now host a ery powerful curse that everyone agrees that he is the king of curses. <a id=\"wiki\"  href=\"https://ujutsu-kaisen.fandom.com/wiki/Sukuna\">Sukuna</a> who was described as a demon with four arms and two faces and was very strong.<a id=\"fandom\" href=\"https://jujutsu-kaisen.fandom.com/wiki/Jujutsu_Kaisen_Wiki\" target=\"_blank\"><br>Fandom</a>"
    var link = document.getElementById('multiple');
    link.setAttribute('href', '/css/card/SukunaCard.css');
    abilityTitle.innerHTML = "Jujutsu Kaisen ";
    article.href = "https://jujutsu-kaisen.fandom.com/wiki/Yuji_Itadori#Abilities_and_Powers";
    article.innerText = "Saitama";
    article.title = "Saitama one punch..";
    japaneseName[0].innerText = " (虎杖悠仁 ";
    japaneseName[1].innerText = "((虎杖悠仁 ";
    englishName[0].innerText = " Itadori Yūji」";
    englishName[1].innerText = " Itadori Yūji」";
    text.innerText = null;
    abilityDesc.innerText = "After Yuji lands a punch on a target, his cursed energy flows and makes a stronger second impact.";
    abilityTitles.innerText = "Cursed Technique";
    abilitylink.title = "Itadori Cursed Technique";
    abilitylink.href = "https://jujutsu-kaisen.fandom.com/wiki/Yuji_Itadori#Abilities_and_Powers";
    abilityimage.src = "Images/table/Itadori.png";
    episode.href = "https://jujutsu-kaisen.fandom.com/wiki/Episode_1";
    chapter.href = "https://jujutsu-kaisen.fandom.com/wiki/Chapter_1";
    episode.innerText = "Volume 1";
    chapter.innerText = "Chapter 1";
    ability.innerText = "Ability";
    abilities.innerText = "Divergent Fist (逕庭拳 Keitei Ken)";
    skills.innerText = "<ul><li><b>Superhuman Strength:</b> Yuji is quite powerful even without the usage of cursed energy, as he can destroy walls with ease, throwing a lead ball with enough force to bend a soccer goalpost, and has also been able to throw a car. As powerful as he is, especially when it comes to fighting, his exceptional strength can often be augmented to further levels with the usage of both the Divergent Fist and the Black Flash allowing him to exorcise cursed spirits. His unique strength has also been compared to Kento Nanami, a Grade 1 sorcerer. He can even harm Hanami and Choso, two curses who have remarkable durability and toughness with the former being near-impossible to damage.</li></ul> <ul><li><b>Black Flash (黒閃 Kokusen?):</b> A technique that creates spatial distortion when a user connects with an impact of cursed energy within 0.000001 seconds of a physical hit. The phenomenon causes cursed power to flash black, creating a more potent attack to the power of 2.5 of a normal hit. Currently, Yuji is capable of using Black Flash four times in a row and has performed it a total of nine times. <li></ul> "
    skills.innerText = "";
    currently = "bleach";
    skills.innerText = "";
}
function bleach() {
    title.innerHTML = "<span title=\"Mc: Ichigo\">Bleach</span>"
    anime.innerHTML = "<a href=\"https://bleach.fandom.com/wiki/Bleach_Wiki\" target=\"_blank\">Bleach</a>";
    character.innerText = "Ichigo Kurasaki"
    description.innerText = "Ichigo Kurasaki<sub title=\"One of my favourite animes of all time!\">en</sub> went from an ordinary highschool boy who was able to see ghost to a substitute shinigami. Going through many phases as a substitute shinigami, experiencing both good and bad. Yet all he wants is to protect his friends and family. <sub title=\"I chose Urahara because he is my second favorite character in bleach,\"><abbr>En</abbr></sub><a id=\"fandom\" href=\"https://bleach.fandom.com/wiki/Bleach_Wiki\" target=\"_blank\"><br>Fandom</a>";
    article.href = "https://bleach.fandom.com/wiki/Zangetsu_(Zanpakut%C5%8D_spirit)";
    article.innerText = "Zangetsu";
    article.title = "Zangetsu, Ichigo Zanpakto";
    var link = document.getElementById('multiple');
    link.setAttribute('href', '/css/card/IchigoCard.css');
    abilityTitle.innerHTML = "Zangetsu";
    japaneseName[0].innerText = "(斬月";
    japaneseName[1].innerText = "(斬月";
    englishName[0].innerText = "Slaying Moon)";
    englishName[1].innerText = "Slaying Moon)";
    abilityDesc.innerText = "Getsuga Tensho: At the instant of the slash, Zangetsu, absorbing Ichigo's spiritual energy, releases highly condensed spiritual energy at the tip of the blade, which, magnifying the slash attack, flies forward.";
    abilityTitles.innerText = "Zangetsu";
    abilitylink.title = "Getsuga Tensho";
    abilitylink.href = "https://bleach.fandom.com/wiki/Getsuga_Tensh%C5%8D";
    abilityimage.src = "Images/table/673Ichigo_attacks.png";
    episode.href = "https://bleach.fandom.com/wiki/THE_DEATH_AND_THE_STRAWBERRY_(Volume_1)#001._Death_.26_Strawberry";
    chapter.href = "https://bleach.fandom.com/wiki/THE_DEATH_AND_THE_STRAWBERRY_(Volume_1)#001._Death_.26_Strawberry";
    episode.innerText = "Volume 1";
    chapter.innerText = "Volume 1";
    ability.innerText = "Zanpakto name";
    abilities.innerText = "Zangetsu";
    battles.innerText = null;
    bg.innerText = "Ichigo Kurosaki (黒崎 一護, Kurosaki Ichigo) is a Human who is also a Substitute Shinigami. Ichigo is the son of Isshin and Masaki Kurosaki, and older brother of Karin and Yuzu. He is also married to Orihime Inoue and has a son named Kazui Kurosaki. "
    currently = "dazai";
    skills.innerText = "";
}
