const team_name = [
  "MANU", "MANC", "ARSE", "LIVP",
  "TOTT", "NEWC", "SUND", "BRIS",
  "CHEL", "CRYS", "BIRM", "WOLV",
  "LEIC", "NOTT", "SHEF", "SOUT",
]

tables();

function tables() {

  clear_screen();

  document.getElementById("LGA_HD").innerHTML =
    "GROUP A...P W D L Pt GF GA";
  document.getElementById("LGB_HD").innerHTML =
    "GROUP B...P W D L Pt GF GA";
  document.getElementById("LGC_HD").innerHTML =
    "GROUP C...P W D L Pt GF GA";
  document.getElementById("LGD_HD").innerHTML =
    "GROUP D...P W D L Pt GF GA";

  for (i = 11; i < 27; i++) {

    document.getElementById("LG" + i).innerHTML = "MAN UTD...6 3 1 2 10 12 11"
  }
}

function fixres() {

  clear_screen();

  for (i = 11; i < 27; i++) {
    document.getElementById("fix" + i).innerHTML =
      "(A) MANU (2) V (1) CHEL";
  }

  for (i = 1; i < 7; i++) {
    document.getElementById("fixhd_r" + i).innerHTML = "ROUND " + i;
  }

  document.getElementById("qfhead").innerHTML = "QUARTER FINALS";
  document.getElementById("qf1").innerHTML = "MANU (2) V (1) CHEL";
  document.getElementById("qf2").innerHTML = "MANU (2) V (1) CHEL";
  document.getElementById("qf3").innerHTML = "MANU (2) V (1) CHEL";
  document.getElementById("qf4").innerHTML = "MANU (2) V (1) CHEL";
}

function match() {
  clear_screen();
}

function clear_screen() {

  document.getElementById("LGA_HD").innerHTML = " ";
  document.getElementById("LGB_HD").innerHTML = " ";
  document.getElementById("LGC_HD").innerHTML = " ";
  document.getElementById("LGD_HD").innerHTML = " ";
  document.getElementById("qfhead").innerHTML = " ";


  for (i = 11; i < 27; i++) {
    document.getElementById("LG" + i).innerHTML = " "
  }

  document.getElementById("qf1").innerHTML = " ";
  document.getElementById("qf2").innerHTML = " ";
  document.getElementById("qf3").innerHTML = " ";
  document.getElementById("qf4").innerHTML = " ";


  for (i = 11; i < 27; i++) {
    document.getElementById("fix" + i).innerHTML = " "
  }

  for (i = 1; i < 7; i++) {
    document.getElementById("fixhd_r" + i).innerHTML = " "
  }








}