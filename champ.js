const team_name = [
  "MAN UTD", "MANCITY", "ARSENAL", "LIVPOOL",
  "TOTTHAM", "NEWCAST", "SUNLAND", "BRISTOL",
  "CHELSEA", "CRYSPAL", "EVERTON", "WOLVERS",
  "IPSWICH", "NORWICH", "SHEFWED", "REALMAD",
  "......."
]

const fixlist = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
  2, 0, 3, 1, 6, 4, 7, 5, 10, 8, 11, 9, 14, 12, 15, 13,
  0, 3, 1, 2, 4, 7, 5, 6, 8, 11, 9, 10, 12, 15, 13, 14,
  1, 0, 3, 2, 5, 4, 7, 6, 9, 8, 11, 10, 13, 12, 15, 14,
  0, 2, 1, 3, 4, 6, 5, 7, 8, 10, 9, 11, 12, 14, 13, 15,
  3, 0, 2, 1, 7, 4, 6, 5, 11, 8, 10, 9, 15, 12, 14, 13,
  16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16
]

var teama; var teamb; var fix_no; var play = 0; var scorea; var scoreb;
var qteam; var stage = 0; var brackets


const group_name = [
  "A", "A", "A", "A",
  "B", "B", "B", "B",
  "C", "C", "C", "C",
  "D", "D", "D", "D",
]

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

    document.getElementById("fix" + (i)).innerHTML =
      brackets + teama + " (" +
      results[ix] + ")v(" + results[ix + 1] + ") " + teamb;
  }

  for (i = 1; i < 7; i++) {
    document.getElementById("fixhd_r" + i).innerHTML = "ROUND " + i;
  }

  document.getElementById("qfhead").innerHTML = "QUARTER FINALS";
  document.getElementById("sfhead").innerHTML = "SEMI FINALS";
  document.getElementById("fhead").innerHTML = "FINAL";

}

function match() {
  if (play == 1) {
    score();
    return;
  }
  clear_screen();
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
  document.getElementById("match").innerHTML = "PLAY";
  play = 1;


}

function score() {
  scorea = Math.floor(Math.random() * 3);
  scoreb = Math.floor(Math.random() * 3);
  if (stage == 1 && scorea == scoreb) { scoreb = scorea + 1 };

  results[fix_no] = scorea;
  results[fix_no + 1] = scoreb;


  document.getElementById("fix_main").innerHTML =
    team_name[teama] +
    " (" + scorea + ")v(" + scoreb + ") " +
    team_name[teamb];

  if (stage == 0) { tabsort() }
  if (fix_no == 94) { stage = 1; qf_fix() }
  if (stage == 1) { knockout() }


  document.getElementById("match").innerHTML = "NEXT MATCH";
  fix_no = fix_no + 2;
  play = 0;


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
    teama;
  tabdata[(teamb * 7) + 6] =
    (tabdata[(teamb * 7) + 4] * 10000) +
    (tabdata[(teamb * 7) + 5] * 100) +
    teamb;

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


