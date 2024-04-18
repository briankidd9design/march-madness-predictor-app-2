const apiEndPoint = `https://sheetdb.io/api/v1/${mykey}`;

// Fetching the data
function displayData() {
  async function kenPomFormulaData() {
    try {
      let response = await fetch(apiEndPoint);
      let data = await response.json();
      if (!response.ok) {
        console.log(data);
        return;
      }
      getUserInputBK(data);
    } catch (error) {
      console.log("there was an arror getting the data");
    }
  }
  kenPomFormulaData();
}
// Team Classes
class Team01 {
  constructor(
    name,
    nrnk,
    cfrk,
    ppg,
    oppg,
    rbs,
    trnovs,
    optrnovs,
    tppg,
    optppg,
    twopp,
    ftp,
    tpp,
    defrt,
    offsvrt,
    alla,
    scheddif,
    lastmtchp,
    hmct,
    daysoff,
    inj,
    etest
  ) {
    (this.name = name),
      (this.natrank = nrnk),
      (this.confrank = cfrk),
      (this.pointPerG = ppg),
      (this.oponPpg = oppg),
      (this.rebounds = rbs),
      (this.turnovers = trnovs),
      (this.opTurnovers = optrnovs),
      (this.tresPg = tppg),
      (this.oppthrees = optppg),
      (this.twoptpct = twopp),
      (this.freethpct = ftp),
      (this.threeptpct = tpp),
      (this.defensivert = defrt),
      (this.offensivert = offsvrt),
      (this.allamercs = alla),
      (this.schedDifficulty = scheddif),
      (this.lastmatchup = lastmtchp),
      (this.homecourt = hmct),
      (this.daysoff = daysoff),
      (this.injuries = inj),
      (this.eyetest = etest);
  }
}
class Team02 {
  constructor(
    name,
    nrnk,
    cfrk,
    ppg,
    oppg,
    rbs,
    trnovs,
    optrnovs,
    tppg,
    optppg,
    twopp,
    ftp,
    tpp,
    defrt,
    offsvrt,
    alla,
    scheddif,
    lastmtchp,
    hmct,
    daysoff,
    inj,
    etest
  ) {
    (this.name = name),
      (this.natrank = nrnk),
      (this.confrank = cfrk),
      (this.pointPerG = ppg),
      (this.oponPpg = oppg),
      (this.rebounds = rbs),
      (this.turnovers = trnovs),
      (this.opTurnovers = optrnovs),
      (this.tresPg = tppg),
      (this.oppthrees = optppg),
      (this.twoptpct = twopp),
      (this.freethpct = ftp),
      (this.threeptpct = tpp),
      (this.defensivert = defrt),
      (this.offensivert = offsvrt),
      (this.allamercs = alla),
      (this.schedDifficulty = scheddif),
      (this.lastmatchup = lastmtchp),
      (this.homecourt = hmct),
      (this.daysoff = daysoff),
      (this.injuries = inj),
      (this.eyetest = etest);
  }
}
// Get user input and pass it to compareTeamsBK function.
function getUserInputBK(data) {
  let brianKidd1 = document.getElementById("brianKidd1").value;
  let brianKidd2 = document.getElementById("brianKidd2").value;
  compareTeamsBK(data, brianKidd1, brianKidd2);
}
// Button will initiate API call for basketball stats API data
let brianKiddButton = document.getElementById("buttonBrianKidd");
brianKiddButton.addEventListener("click", displayData);

// function will compare the two teams using the input from the user
function compareTeamsBK(data, brianKidd1, brianKidd2) {
  // DOM
  let teamNames = document.getElementById("teamNames");
  let bkDefensiveRating = document.getElementById("brianKiddDefensiveRating");
  let bkOffensiveRating = document.getElementById("brianKiddOffensiveRating");
  let bkScheduleDifficulty = document.getElementById(
    "brianKiddScheduleDifficulty"
  );
  let bkNationalRank = document.getElementById("brianKiddNationalRank");
  let bkConferenceRank = document.getElementById("brianKiddConferenceRank");
  let bkPoints = document.getElementById("brianKiddTeam1Points");
  let bkOppPoints = document.getElementById("brianKiddOppPoints");
  let bkRebounds = document.getElementById("brianKiddRebounds");
  let bkTurnovers = document.getElementById("brianKiddTurnovers");
  let bkOppTurnovers = document.getElementById("brianKiddOppTurnovers");
  let bkThreesPerGame = document.getElementById("brianKiddThreesPerGame");
  let bkThreePointPerc = document.getElementById(
    "brianKiddThreePointPercentage"
  );
  let bkThreesOppPerGame = document.getElementById("brianKiddOppThreesPerGame");
  let bkTwoPointPerc = document.getElementById("brianKiddTwoPointPercentage");
  let bkFreeThrowPerc = document.getElementById("brianKiddFreeThrowPercentage");
  let bkStatDifferential = document.getElementById("totalStatDifferential");

  // Match team entered by user with team in JSON data object
  for (let i = 0; i < data.length; i++) {
    if (data[i].team_name === brianKidd1) {
      brianKidd1 = data[i];
    }
  }
  for (let i = 0; i < data.length; i++) {
    if (data[i].team_name === brianKidd2) {
      brianKidd2 = data[i];
    }
  }
  //   //Teams
  //   let houston = data[0];
  //   let longwood = data[1];
  //   let nebraska = data[2];
  //   let texas_a_m = data[3];
  //   let wisconsin = data[4];
  //   let james_madison = data[5];
  //   let duke = data[6];
  //   let vermont = data[7];
  //   let texas_tech = data[8];
  //   let north_carolina_state = data[9];
  //   let kentucky = data[10];
  //   let oakland = data[11];
  //   let florida = data[12];
  //   let colorado = data[13];
  //   let marquette = data[14];
  //   // let kentucky = data[15];
  //   let western_kentucky = data[15];
  //   let purdue = data[16];
  //   let montana_state = data[17];
  //   let utah_state = data[18];
  //   let tcu = data[19];
  //   // let duke = data[20];
  //   let gonzaga = data[20];
  //   let mcneese = data[21];
  //   let kansas = data[22];
  //   let samford = data[23];
  //   // let south_carolina = data[24];
  //   let oregon = data[25];
  //   // let colorado_state = data[23];
  //   // let murray_state = data[24];
  //   // let kansas = data[23];
  //   // let samford = data[24];
  //   // let houston = data[25];
  //   // let arkansas = data[26];
  //   // let texas_tech = data[27];
  //   // let providence = data[28];
  //   let creighton = data[26];
  //   let akron = data[27];
  //   // let tennessee = data[29];
  //   // let villanova = data[30];
  //   let texas = data[28];
  //   let colorado_state = data[29];
  //   // let auburn = data[31];
  //   // let cal_state_fullerton = data[32];
  //   // let auburn = data[31];
  //   let tennessee = data[30];
  //   let saint_peters = data[31];
  //   let uconn = data[32];
  //   let fau = data[33];
  //   let northwestern = data[34];
  //   // let tcu = data[34];
  //   // let seton_hall = data[35];
  //   // let marquette = data[36];
  //   let san_diego_state = data[35];
  //   let uab = data[36];
  //   let auburn = data[37];
  //   let yale = data[38];
  //   let byu = data[39];
  //   let duquesne = data[40];
  //   let illinois = data[41];
  //   let morehead_state = data[42];
  //   let washington_state = data[43];
  //   let drake = data[44];
  //   let iowa_state = data[45];
  //   let saint_marys = data[47];
  //   let baylor = data[49];
  //   let arizona = data[50];
  //   let alabama = data[51];
  //   // let auburn = data[37];
  //   // let san_francisco = data[39];
  //   // let uab = data[40];
  //   // let south_dakota_state = data[41];
  //   // let chattanooga = data[42];
  //   // let new_mexico_state = data[43];
  //   // let vermont = data[44];
  //   // let alabama = data[45];
  //   // let lsu = data[46];
  //   // let virginia_tech = data[47];
  //   // let indiana = data[48];
  //   // let loyola_chicago = data[49];
  //   // let montana_state = data[50];
  //   // let longwood = data[51];
  //   // let st_peters = data[52];
  //   // let akron = data[53];
  //   // let boise_state = data[54];
  //   // let miami = data[55];
  //   // let creighton = data[56];
  //   // let davidson = data[57];
  //   // let iowa_state = data[58];
  //   // let colgate = data[59];
  //   let delaware = data[60];
  //   let georgia_state = data[61];
  //   let jacksonville_state = data[62];
  //   let wyoming = data[63];
  //   // let drake = data[64];
  //   let kent_state = data[65];
  //   // let texas_a_m = data[66];
  //   let maryland = data[67];
  //   let west_virgina = data[68];
  //   let charleston = data[69];
  //   let furman = data[70];
  //   let virginia = data[71];
  //   // let north_carolina_state = data[72];
  //   let missouri = data[73];
  //   // let utah_state = data[74];
  //   let kansas_state = data[75];
  //   let penn_state = data[76];
  //   let new_mexico = data[77];
  //   let clemson = data[78];
  //   let south_carolina = data[79];
  //   let iowa = data[80];

  //Team 1
  let T1 = new Team01(
    brianKidd1.team_name,
    brianKidd1.nat_rank,
    brianKidd1.conf_rank,
    brianKidd1.ppg_avg,
    brianKidd1.op_ppg_avg,
    brianKidd1.rbs,
    brianKidd1.trnovs,
    brianKidd1.optrnovs,
    brianKidd1.tppg,
    brianKidd1.op_tppg,
    brianKidd1.twopt_pct,
    brianKidd1.ft_pct,
    brianKidd1.tp_pct,
    brianKidd1.def_rating,
    brianKidd1.offsv_rating,
    brianKidd1.all_americans,
    brianKidd1.sched_dfclty,
    brianKidd1.last_matchup,
    brianKidd1.home_court_adv,
    brianKidd1.days_off,
    brianKidd1.injuries,
    brianKidd1.eye_test
  );
  //Team 2
  let T2 = new Team02(
    brianKidd2.team_name,
    brianKidd2.nat_rank,
    brianKidd2.conf_rank,
    brianKidd2.ppg_avg,
    brianKidd2.op_ppg_avg,
    brianKidd2.rbs,
    brianKidd2.trnovs,
    brianKidd2.optrnovs,
    brianKidd2.tppg,
    brianKidd2.op_tppg,
    brianKidd2.twopt_pct,
    brianKidd2.ft_pct,
    brianKidd2.tp_pct,
    brianKidd2.def_rating,
    brianKidd2.offsv_rating,
    brianKidd2.all_americans,
    brianKidd2.sched_dfclty,
    brianKidd2.last_matchup,
    brianKidd2.home_court_adv,
    brianKidd2.days_off,
    brianKidd2.injuries,
    brianKidd2.eye_test
  );

  //////////////////////////////////////////////////////////////////////

  let countTeam1 = 0;
  let countTeam2 = 0;
  // Teams
  teamNames.innerHTML = `The name of team one is ${T1.name}.The name of team two is ${T2.name}`;
  // National Rank
  if (parseFloat(T1.natrank) > parseFloat(T2.natrank)) {
    countTeam2++;
  } else {
    countTeam1++;
  }
  // National Rank Diff
  let natRankDif = Math.abs(T1.natrank - T2.natrank);
  bkNationalRank.innerHTML = `${T1.name} national rank is ${T1.natrank} and ${T2.name} national rank is ${T2.natrank}. The Differential is ${natRankDif}`;

  // conf Rank
  if (parseFloat(T1.confrank) > parseFloat(T2.confrank)) {
    countTeam2++;
  } else if (parseFloat(T1.confrank) == parseFloat(T2.confrank)) {
    countTeam1 = countTeam1 + 0;
    countTeam2 = countTeam2 + 0;
  } else {
    countTeam1++;
  }
  // conf rank diff
  let confRankDif = Math.abs(T1.confrank - T2.confrank);
  bkConferenceRank.innerHTML = `${T1.name} conference rank is ${T1.confrank} and ${T2.name} conference rank is ${T2.confrank}. The Differential is ${confRankDif}`;
  //defensive rating
  if (parseFloat(T1.defensivert) > parseFloat(T2.defensivert)) {
    countTeam2++;
  } else if (parseFloat(T1.defensivert) == parseFloat(T2.defensivert)) {
    countTeam1 = countTeam1 + 0;
    countTeam2 = countTeam2 + 0;
  } else {
    countTeam1++;
  }
  let defRtgDiff = Math.abs(T1.defensivert - T2.defensivert);

  bkDefensiveRating.innerHTML = `${T1.name} defensive rating is ${T1.defensivert} and ${T2.name} defensive rating is ${T2.defensivert}. The Differential is ${defRtgDiff} points`;

  //offensive rating
  if (parseFloat(T1.offensivert) > parseFloat(T2.offensivert)) {
    countTeam1++;
  } else if (parseFloat(T1.offensivert) == parseFloat(T2.offensivert)) {
    countTeam1 = countTeam1 + 0;
    countTeam2 = countTeam2 + 0;
  } else {
    countTeam2++;
  }
  let ofRtgDiff = Math.abs(T1.offensivert - T2.offensivert);

  bkOffensiveRating.innerHTML = `${T1.name} offensive rating is ${T1.offensivert} and ${T2.name} offensive rating is ${T2.offensivert}. The Differential is ${ofRtgDiff} points`;

  //schedule difficulty
  if (parseFloat(T1.schedDifficulty) > parseFloat(T2.schedDifficulty)) {
    countTeam1++;
  } else if (parseFloat(T1.schedDifficulty) == parseFloat(T2.schedDifficulty)) {
    countTeam1 = countTeam1 + 0;
    countTeam2 = countTeam2 + 0;
  } else {
    countTeam2++;
  }
  let schedDif = Math.abs(T1.schedDifficulty - T2.schedDifficulty);
  bkScheduleDifficulty.innerHTML = `${T1.name} schedule difficulty this season is ${T1.schedDifficulty} and ${T2.name} schedule difficulty this season is ${T2.schedDifficulty}. The Differential is ${schedDif} difficulty points.`;
  // total points per game
  if (parseFloat(T1.pointPerG) > parseFloat(T2.pointPerG)) {
    countTeam1++;
  } else if (parseFloat(T1.pointPerG) == parseFloat(T2.pointPerG)) {
    countTeam1 = countTeam1 + 0;
    countTeam2 = countTeam2 + 0;
  } else {
    countTeam2++;
  }
  // total points per game diff
  // Points
  let PpgDiffrtl = Math.abs(T1.pointPerG - T2.pointPerG);

  bkPoints.innerHTML = `${T1.name} scores ${T1.pointPerG} points per game and ${T2.name} scores ${T2.pointPerG} points per game. The Differential is ${PpgDiffrtl}`;

  //opponent points per game
  if (parseFloat(T1.oponPpg) > parseFloat(T2.oponPpg)) {
    countTeam2++;
  } else if (parseFloat(T1.oponPpg) == parseFloat(T2.oponPpg)) {
    countTeam1 = countTeam1 + 0;
    countTeam2 = countTeam2 + 0;
  } else {
    countTeam1++;
  }
  // Opp points per game differential
  let OppgDiffrtl = Math.abs(T1.oponPpg - T2.oponPpg);

  bkOppPoints.innerHTML = `${T1.name} opponents score ${T1.oponPpg} points per game and ${T2.name} opponents score ${T2.oponPpg} points per game. The Differential is ${OppgDiffrtl}`;

  //team total rebounds per game
  if (parseFloat(T1.rebounds) > parseFloat(T2.rebounds)) {
    countTeam1++;
  } else if (parseFloat(T1.rebounds) == parseFloat(T2.rebounds)) {
    countTeam1 = countTeam1 + 0;
    countTeam2 = countTeam2 + 0;
  } else {
    countTeam2++;
  }
  // Rebounds Diff
  let rbndsDiff = Math.abs(T1.rebounds - T2.rebounds);

  bkRebounds.innerHTML = `${T1.name} get ${T1.rebounds} rebounds per game and ${T2.name} get ${T2.rebounds} rebounds per game. The Differential is ${rbndsDiff}`;

  //team turnovers per game
  if (parseFloat(T1.turnovers) > parseFloat(T2.turnovers)) {
    countTeam2++;
  } else if (parseFloat(T1.turnovers) == parseFloat(T2.turnovers)) {
    countTeam1 = countTeam1 + 0;
    countTeam2 = countTeam2 + 0;
  } else {
    countTeam1++;
  }
  let turnOvsDiff = Math.abs(T1.turnovers - T2.turnovers);

  bkTurnovers.innerHTML = `${T1.name} commit ${T1.turnovers} turnovers per game and ${T2.name} commit ${T2.turnovers}  per game. The Differential is ${turnOvsDiff}`;

  //opponent Team Turnovers per game
  if (parseFloat(T1.opTurnovers) > parseFloat(T2.opTurnovers)) {
    countTeam1++;
  } else if (parseFloat(T1.opTurnovers) == parseFloat(T2.opTurnovers)) {
    countTeam1 = countTeam1 + 0;
    countTeam2 = countTeam2 + 0;
  } else {
    countTeam2++;
  }

  let oppTurnOvsDiff = Math.abs(T1.opTurnovers - T2.opTurnovers);

  bkOppTurnovers.innerHTML = `${T1.name} opponents commit ${T1.opTurnovers} turnOvers per game and ${T2.name} opponents commit ${T2.opTurnovers} per game. The Differential is ${oppTurnOvsDiff}`;
  //Three pointers per game
  if (parseFloat(T1.tresPg) > parseFloat(T2.tresPg)) {
    countTeam1++;
  } else if (parseFloat(T1.tresPg) == parseFloat(T2.tresPg)) {
    countTeam1 = countTeam1 + 0;
    countTeam2 = countTeam2 + 0;
  } else {
    countTeam2++;
  }
  let tppgDiff = Math.abs(T1.tresPg - T2.tresPg);

  bkThreesPerGame.innerHTML = `${T1.name} scores ${T1.tresPg} threes per game and ${T2.name} scores ${T2.tresPg} threes per game. The Differential is ${tppgDiff}`;
  // Three-point percentage

  if (parseFloat(T1.threeptpct) > parseFloat(T2.threeptpct)) {
    countTeam1++;
  } else if (parseFloat(T1.threeptpct) == parseFloat(T2.threeptpct)) {
    countTeam1 = countTeam1 + 0;
    countTeam2 = countTeam2 + 0;
  } else {
    countTeam2++;
  }
  let tPpctDiff = Math.abs(T1.threeptpct - T2.threeptpct);

  bkThreePointPerc.innerHTML = `${T1.name} three-point percentage is ${T1.threeptpct} percent and ${T2.name} three-point percentage is ${T2.threeptpct} percent. The Differential is ${tPpctDiff} percent`;

  //opponent threes per game
  if (parseFloat(T1.oppthrees) > parseFloat(T2.oppthrees)) {
    countTeam2++;
  } else if (parseFloat(T1.tresPg) == parseFloat(T2.tresPg)) {
    countTeam1 = countTeam1 + 0;
    countTeam2 = countTeam2 + 0;
  } else {
    countTeam1++;
  }
  let oPtppgDiff = Math.abs(T1.oppthrees - T2.oppthrees);

  bkThreesOppPerGame.innerHTML = `${T1.name} opponents score ${T1.oppthrees} threes per game and ${T2.name} opponents score ${T2.oppthrees} threes per game. The Differential is ${oPtppgDiff} test`;
  // //two point percentage
  if (parseFloat(T1.twoptpct) > parseFloat(T2.twoptpct)) {
    countTeam1++;
  } else if (parseFloat(T1.twoptpct) == parseFloat(T2.twoptpct)) {
    countTeam1 = countTeam1 + 0;
    countTeam2 = countTeam2 + 0;
  } else {
    countTeam2++;
  }

  let twoPpDiff = Math.abs(T1.twoptpct - T2.twoptpct);

  bkTwoPointPerc.innerHTML = `${T1.name} two point percentage is ${T1.twoptpct} and ${T2.name} two point percentage is ${T2.twoptpct} percent. The Differential is ${twoPpDiff} percent`;

  //Free Throw Percentage
  if (parseFloat(T1.freethpct) > parseFloat(T2.freethpct)) {
    countTeam1++;
  } else if (parseFloat(T1.freethpct) == parseFloat(T2.freethpct)) {
    countTeam1 = countTeam1 + 0;
    countTeam2 = countTeam2 + 0;
  } else {
    countTeam2++;
  }

  let fTPctDiff = Math.abs(T1.freethpct - T2.freethpct);

  bkFreeThrowPerc.innerHTML = `${T1.name} free throw percentage is ${T1.freethpct} percent and ${T2.name} free throw percentage is ${T2.freethpct} percent. The Differential is ${fTPctDiff} percent`;
  // Add later to interface
  // //all americans
  // if (parseFloat(T1.allamercs) > parseFloat(T2.allamercs)) {
  //   countTeam1++;
  // } else if (parseFloat(T1.allamercs) == parseFloat(T2.allamercs)) {
  //   countTeam1 = countTeam1 + 0;
  //   countTeam2 = countTeam2 + 0;
  // } else {
  //   countTeam2++;
  // }

  // //Last Matchup
  // if (parseFloat(T1.lastmatchup) > parseFloat(T2.lastmatchup)) {
  //   countTeam1++;
  // } else if (parseFloat(T1.lastmatchup) == parseFloat(T2.lastmatchup)) {
  //   countTeam1 = countTeam1 + 0;
  //   countTeam2 = countTeam2 + 0;
  // } else {
  //   countTeam2++;
  // }
  // //home court advantage
  // if (parseFloat(T1.homecourt) > parseFloat(T2.homecourt)) {
  //   countTeam1++;
  // } else if (parseFloat(T1.homecourt) == parseFloat(T2.homecourt)) {
  //   countTeam1 = countTeam1 + 0;
  //   countTeam2 = countTeam2 + 0;
  // } else {
  //   countTeam2++;
  // }
  // //days off
  // if (parseFloat(T1.daysoff) > parseFloat(T2.daysoff)) {
  //   countTeam1++;
  // } else if (parseFloat(T1.daysoff) == parseFloat(T2.daysoff)) {
  //   countTeam1 = countTeam1 + 0;
  //   countTeam2 = countTeam2 + 0;
  // } else {
  //   countTeam2++;
  // }
  // //Injuries
  // //Injuries
  // if (parseFloat(T1.injuries) > parseFloat(T2.injuries)) {
  //   countTeam2++;
  // } else if (parseFloat(T1.injuries) == parseFloat(T2.injuries)) {
  //   countTeam1 = countTeam1 + 0;
  //   countTeam2 = countTeam2 + 0;
  // } else {
  //   countTeam1++;
  // }

  // //eye test
  // //Eye Test
  // if (parseFloat(T1.eyetest) > parseFloat(T2.eyetest)) {
  //   countTeam1++;
  // } else if (parseFloat(T1.eyetest) == parseFloat(T2.eyetest)) {
  //   countTeam1 = countTeam1 + 0;
  //   countTeam2 = countTeam2 + 0;
  // } else {
  //   countTeam2++;
  // }
  let differential = countTeam1 - countTeam2;

  bkStatDifferential.innerHTML = `The final count for ${brianKidd1.team_name} is ${countTeam1}  and ${brianKidd2.team_name} is ${countTeam2}  The differential is ${differential}`;
}
// use forEach loop to show all the stats for both teams
