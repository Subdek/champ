const team_name = [
  "MAN UTD", "ARSENAL", "EVERTON", "BRISTOL",
  "MANCITY", "NEWCAST", "SUNLAND", "IPSWICH",
  "REALMAD", "TOTTHAM", "WOLVERS", "SHEFWED",
  "LIVPOOL", "CHELSEA", "CRYSPAL", "NORWICH",
  "......."
]

const myteam = [
  "red", "black", "black", "black",
  "black", "red", "black", "black",
  "black", "black", "red", "black",
  "black", "black", "black", "red"
]

const half_name = ["1st", "1st", "2nd"]

const fixlist = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
  2, 0, 3, 1, 6, 4, 7, 5, 10, 8, 11, 9, 14, 12, 15, 13,
  0, 3, 1, 2, 4, 7, 5, 6, 8, 11, 9, 10, 12, 15, 13, 14,
  1, 0, 3, 2, 5, 4, 7, 6, 9, 8, 11, 10, 13, 12, 15, 14,
  0, 2, 1, 3, 4, 6, 5, 7, 8, 10, 9, 11, 12, 14, 13, 15,
  3, 0, 2, 1, 7, 4, 6, 5, 11, 8, 10, 9, 15, 12, 14, 13,
  16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16
]

const dice = [
  0, 0, 1, 2, 3, 3,
  0, 0, 1, 2, 2, 3,
  0, 0, 1, 1, 2, 3,
  0, 0, 1, 1, 2, 2,
  0, 0, 0, 1, 2, 2,

]






var teama; var teamb; var fix_no; var play = 0; var scorea; var scoreb;
var qteam; var stage = 0; var brackets; var time = 0; var half = 0; var scorea = 0; var scoreb = 0; var kick_off = 0; var subx = 0; var goal_yes = 0;


const group_name = [
  "A", "A", "A", "A",
  "B", "B", "B", "B",
  "C", "C", "C", "C",
  "D", "D", "D", "D",
]

const level = [6, 12, 18, 24, 6, 12, 18, 24, 6, 12, 18, 24, 6, 12, 18, 24,]

const rank = [];

const results = [];

const tabdata = [];

const qteams = [];

start();
tables();

function start() {
  for (i = 0; i < 112; i++) { tabdata[i] = 0 };
  for (y = 0; y < 16; y++) {
    tabdata[(y * 7) + 6] = y
  }

  for (i = 0; i < 110; i++) { results[i] = " " }

  for (f = 0; f < 16; f++) {
    tabdata[(f * 7) + 6] = (15 - f)
  }

  fix_no = 0;
  set_rank();

  //round1 fixtures style
  for (f = 0; f < 8; f++) {
    document.getElementById("fix" + (f)).style.left = "10px";
    document.getElementById("fix" + (f)).style.top =
      (((f * 20) + 60) + "px");
  }

  //round2 fixtures style
  for (f = 0; f < 8; f++) {
    document.getElementById("fix" + (f + 8)).style.left = "370px";
    document.getElementById("fix" + (f + 8)).style.top =
      (((f * 20) + 60) + "px");
  }

  //round3 fixtures style
  for (f = 0; f < 8; f++) {
    document.getElementById("fix" + (f + 16)).style.left = "730px";
    document.getElementById("fix" + (f + 16)).style.top =
      (((f * 20) + 60) + "px");
  }

  //round4 fixtures style
  for (f = 0; f < 8; f++) {
    document.getElementById("fix" + (f + 24)).style.left = "10px";
    document.getElementById("fix" + (f + 24)).style.top =
      (((f * 20) + 270) + "px");
  }

  //round5 fixtures style
  for (f = 0; f < 8; f++) {
    document.getElementById("fix" + (f + 32)).style.left = "370px";
    document.getElementById("fix" + (f + 32)).style.top =
      (((f * 20) + 270) + "px");
  }

  //round6 fixtures style
  for (f = 0; f < 8; f++) {
    document.getElementById("fix" + (f + 40)).style.left = "730px";
    document.getElementById("fix" + (f + 40)).style.top =
      (((f * 20) + 270) + "px");
  }


}


function tables() {

  clear_screen();
  rank_teams();
  document.getElementById("match").innerHTML = "NEXT MATCH";
  play = 0;


  document.getElementById("LGA_HD").innerHTML =
    "GROUP A...P W D L Pt GD";
  document.getElementById("LGB_HD").innerHTML =
    "GROUP B...P W D L Pt GD";
  document.getElementById("LGC_HD").innerHTML =
    "GROUP C...P W D L Pt GD";
  document.getElementById("LGD_HD").innerHTML =
    "GROUP D...P W D L Pt GD";

  for (i = 0; i < 16; i++) {
    x = (i * 7);

    qteam = "LG" + (rank[i]);

    document.getElementById(qteam).style.color = myteam[i];
    document.getElementById(qteam).innerHTML = team_name[i] + "..." +
      tabdata[x] + " " +
      tabdata[x + 1] + " " +
      tabdata[x + 2] + " " +
      tabdata[x + 3] + " " +
      tabdata[x + 4] + "&nbsp" + "&nbsp" +
      tabdata[x + 5]
    //+ "&nbsp" + "&nbsp" + tabdata[x + 6]

  }
}

function rank_teams() {

  set_rank();

  for (e = 0; e < 4; e++) {
    ex = e * 4;


    for (f = 0; f < 4; f++) {

      for (g = 0; g < 4; g++) {

        fx = (((f + ex) * 7) + 6);
        gx = (((g + ex) * 7) + 6);
        if (tabdata[fx] < tabdata[gx]) {
          rank[(f + ex)]++;
        }
      }

    }
  }
}

function fixres() {

  clear_screen();
  document.getElementById("tables").style.visibility = "visible";
  document.getElementById("match").style.visibility = "visible";
  document.getElementById("match").innerHTML = "NEXT MATCH";
  play = 0;



  for (i = 0; i < 55; i++) {
    ix = i * 2;
    gnx = group_name[fixlist[ix]];
    teama = team_name[fixlist[ix]];
    teamb = team_name[fixlist[ix + 1]];

    if (i < 48) { brackets = "(" + gnx + ") " } else { brackets = "" };

    if (myteam[fixlist[ix]] == "red") { teama = "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" };
    if (myteam[fixlist[ix + 1]] == "red") { teamb = "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" };


    xxx = brackets + teama + " (" +
      results[ix] + ")v(" + results[ix + 1] + ") " + teamb;

    document.getElementById("fix" + (i)).innerHTML = xxx;
  }

  for (i = 1; i < 7; i++) {
    document.getElementById("fixhd_r" + i).innerHTML = "ROUND " + i;
  }

  document.getElementById("qfhead").innerHTML = "QUARTER FINALS";
  document.getElementById("sfhead").innerHTML = "SEMI FINALS";
  document.getElementById("fhead").innerHTML = "FINAL";

  for (f = 1; f < 7; f++) { document.getElementById("teama" + f).innerHTML = team_name[0]; }

  for (f = 1; f < 7; f++) { document.getElementById("teamb" + f).innerHTML = team_name[5]; }

  for (f = 1; f < 7; f++) { document.getElementById("teamc" + f).innerHTML = team_name[10]; }

  for (f = 1; f < 7; f++) { document.getElementById("teamd" + f).innerHTML = team_name[15]; }


}

function match() {

  if (half == 3) { half = 0 }

  if (half == 2) {
    score(); end_match(); half = 3
  }

  if (half == 1) {
    score();
    document.getElementById("match").innerHTML = "2nd HALF";
    half = 2;
  }

  if (half == 0) {
    match_setup(); half = 1;
  }
}


function match_setup() {
  clear_screen();
  document.getElementById("goal").style.visibility = "visible";

  document.getElementById("fixres").style.visibility = "hidden";
  document.getElementById("tables").style.visibility = "hidden";

  teama = fixlist[fix_no]; teamb = fixlist[fix_no + 1];
  mhead = "ROUND " + ((Math.floor(fix_no / 16)) + 1) + ": GROUP " + group_name[teama];
  if (fix_no > 95 && fix_no < 104) {
    mhead = "QUARTER FINAL"
  };
  if (fix_no > 103 && fix_no < 107) {
    mhead = "SEMI FINAL"
  };
  if (fix_no == 108) {
    mhead = "FINAL"
  };

  document.getElementById("match_hd").innerHTML = mhead;
  document.getElementById("fix_main").innerHTML =
    team_name[teama] + " (-)v(-) " + team_name[teamb];
  document.getElementById("teama_level").innerHTML =
    "RANK:" + (level[teama] / 6);
  document.getElementById("teamb_level").innerHTML =
    "RANK:" + (level[teamb] / 6);
  document.getElementById("odds").innerHTML =
    "WIN: 56% -------------- DRAW: 23% -------------- WIN: 21%";
  //document.getElementById("timer").innerHTML = half_name[half] + " HALF: " + time;
  document.getElementById("match").innerHTML = "1st HALF";

  for (f = 1; f < 11; f++) {
    document.getElementById("ball" + f).innerHTML = "&#9917";

  }

}

//function start_half() { const timx = setInterval(print_time, 100); }


//function print_time() { if (time > 10) { clearInterval(timx); return; }; document.getElementById("timer").innerHTML = half_name[half] + " HALF: " + time; time++; }

function score() {

  xx = Math.floor(Math.random() * 6);
  yy = Math.floor(Math.random() * 6);

  scorea = scorea + dice[level[teama] + xx];
  scoreb = scoreb + dice[level[teamb] + yy];


  document.getElementById("fix_main").innerHTML =
    team_name[teama] +
    " (" + scorea + ")v(" + scoreb + ") " +
    team_name[teamb];


  document.getElementById("teama_level").innerHTML =
    "RANK:" + (level[teama] / 6) + " " + xx;
  document.getElementById("teamb_level").innerHTML =
    "RANK:" + (level[teamb] / 6) + " " + yy;
}

function end_match() {
  if (stage == 1 && scorea == scoreb) { scoreb = scorea + 1 };
  results[fix_no] = scorea;
  results[fix_no + 1] = scoreb;
  if (stage == 0) { tabsort() }
  if (fix_no == 94) { stage = 1; qf_fix() }
  if (stage == 1) { knockout() }
  fix_no = fix_no + 2;
  scorea = 0; scoreb = 0;
  document.getElementById("match").innerHTML = "NEXT MATCH";
  document.getElementById("fixres").style.visibility = "visible";
  document.getElementById("tables").style.visibility = "visible";
}

function goal_add() {
  if (goal_yes == 0) {
    document.getElementById("ball_goal").innerHTML = "&#9917";
    document.getElementById("ball10").innerHTML = "";
    document.getElementById("goal").innerHTML = "REMOVE";

    goal_yes = 1; return;
  }

  if (goal_yes == 1) {
    document.getElementById("ball_goal").innerHTML = "";
    document.getElementById("ball10").innerHTML = "&#9917";
    document.getElementById("goal").innerHTML = "ADD";

    goal_yes = 0; return;
  }


}



function tabsort() {
  if (scorea > scoreb) {
    tabdata[(teama * 7) + 4] = tabdata[(teama * 7) + 4] + 3;
    tabdata[(teama * 7) + 1]++;
    tabdata[(teamb * 7) + 3]++;

  }

  if (scoreb > scorea) {
    tabdata[(teamb * 7) + 4] = tabdata[(teamb * 7) + 4] + 3;
    tabdata[(teamb * 7) + 1]++;
    tabdata[(teama * 7) + 3]++;

  }

  if (scorea == scoreb) {
    tabdata[(teama * 7) + 4]++;
    tabdata[(teamb * 7) + 4]++;
    tabdata[(teama * 7) + 2]++;
    tabdata[(teamb * 7) + 2]++;
  }

  tabdata[(teama * 7) + 5] =
    tabdata[(teama * 7) + 5] + scorea - scoreb;
  tabdata[(teamb * 7) + 5] =
    tabdata[(teamb * 7) + 5] + scoreb - scorea;


  tabdata[(teama * 7) + 6] =
    (tabdata[(teama * 7) + 4] * 10000) +
    (tabdata[(teama * 7) + 5] * 100) +
    (15 - teama);
  tabdata[(teamb * 7) + 6] =
    (tabdata[(teamb * 7) + 4] * 10000) +
    (tabdata[(teamb * 7) + 5] * 100) +
    (15 - teamb);

  tabdata[teama * 7]++;
  tabdata[teamb * 7]++;
}

function knockout() {
  if (scorea > scoreb) { winner = teama } else { winner = teamb };

  if (fix_no == 96) { fixlist[104] = winner };
  if (fix_no == 98) { fixlist[105] = winner };
  if (fix_no == 100) { fixlist[106] = winner };
  if (fix_no == 102) { fixlist[107] = winner };
  if (fix_no == 104) { fixlist[108] = winner };
  if (fix_no == 106) { fixlist[109] = winner };



}

function qf_fix() {
  document.getElementById("match").style.visibility = "hidden";

  document.getElementById("end_msg").innerHTML = "END OF REGULAR SEASON. CLICK FOR Q-FINAL DRAW";

  rank_teams();

  for (f = 0; f < 16; f++) {

    if (rank[f] == 0) {
      fixlist[96] = f
    };
    if (rank[f] == 13) {
      fixlist[97] = f
    };
    if (rank[f] == 4) {
      fixlist[98] = f
    };
    if (rank[f] == 9) {
      fixlist[99] = f
    };
    if (rank[f] == 8) {
      fixlist[100] = f
    };
    if (rank[f] == 5) {
      fixlist[101] = f
    };
    if (rank[f] == 12) {
      fixlist[102] = f
    };
    if (rank[f] == 1) {
      fixlist[103] = f
    };

  };
}

function clear_screen() {

  document.getElementById("goal").style.visibility = "hidden";


  document.getElementById("LGA_HD").innerHTML = " ";
  document.getElementById("LGB_HD").innerHTML = " ";
  document.getElementById("LGC_HD").innerHTML = " ";
  document.getElementById("LGD_HD").innerHTML = " ";
  document.getElementById("qfhead").innerHTML = " ";
  document.getElementById("sfhead").innerHTML = " ";
  document.getElementById("fhead").innerHTML = " ";
  document.getElementById("end_msg").innerHTML = " ";

  for (i = 0; i < 16; i++) {
    document.getElementById("LG" + i).innerHTML = " "
  }



  for (i = 0; i < 55; i++) {
    document.getElementById("fix" + i).innerHTML = " "
  }

  for (i = 1; i < 7; i++) {
    document.getElementById("fixhd_r" + i).innerHTML = " "
  }

  document.getElementById("match_hd").innerHTML = "";
  document.getElementById("fix_main").innerHTML = "";
  document.getElementById("teama_level").innerHTML = "";
  document.getElementById("teamb_level").innerHTML = "";
  document.getElementById("timer").innerHTML = "";

  for (f = 1; f < 7; f++) { document.getElementById("teama" + f).innerHTML = "" }

  for (f = 1; f < 7; f++) { document.getElementById("teamb" + f).innerHTML = "" }

  for (f = 1; f < 7; f++) { document.getElementById("teamc" + f).innerHTML = "" }

  for (f = 1; f < 7; f++) { document.getElementById("teamd" + f).innerHTML = "" }

  for (f = 1; f < 11; f++) {
    document.getElementById("ball" + f).innerHTML = "";
  }

  document.getElementById("odds").innerHTML =
    "";





}

function set_rank() {
  for (f = 0; f < 16; f++) {
    rank[f] = ((Math.floor(f / 4)) * 4)

  }
}

//document.getElementById("xxx").innerHTML = "XXX" + "&nbsp"
//document.getElementById("xxx").style.visibility = "hidden"/"visible"
//for (i = 1; i < 7; i++) {xxxx}
//if (x==y) {xxx}
//Math.floor(0.6)
//Math.random() = 0.536354836384


