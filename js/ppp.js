// import { showKenPomResult } from "./main-script.js";
//POSS = FGA - ORB + TO + (0.475*FTA)
// points per one hundred posessions
// let ptsPerOneHundred2 =
// parseFloat(offensiveRating - 100) -
// (100 - parseFloat(defensiveRating)) + 100;
// Team total points
// parseFloat(ptsPerOneHundred / 100) * parseFloat(poss);
// API end point
var mykey = config.MY_KEY;
const url = `https://sheetdb.io/api/v1/${mykey}`;
// Fetching the data
function displayData() {
  async function kenPomFormulaData() {
    try {
      let response = await fetch(url);
      let data = await response.json();
      if (!response.ok) {
      }
      getUserInput(data);
    } catch (error) {
      console.log("there was an arror getting the data");
    }
  }
  kenPomFormulaData();
}
// Constructing each team object
class Team1 {
  constructor(name, fga, orb, fta, trnovs, offsRating, defRating) {
    (this.name = name),
      (this.fieldGoalAttemps = fga),
      (this.offensiveRebounds = orb),
      (this.freethrowAttempts = fta);
    this.turnovers = trnovs;
    this.offensiveRating = offsRating;
    this.defensiveRating = defRating;
  }
}
class Team2 {
  constructor(name, fga, orb, fta, trnovs, offsRating, defRating) {
    (this.name = name),
      (this.fieldGoalAttemps = fga),
      (this.offensiveRebounds = orb),
      (this.freethrowAttempts = fta);
    this.turnovers = trnovs;
    this.offensiveRating = offsRating;
    this.defensiveRating = defRating;
  }
}
// Get user input data and then pass it to the compareTeams function
function getUserInput(data) {
  let kenPomTeam1 = document.getElementById("kenPom1").value;
  let kenPomTeam2 = document.getElementById("kenPom2").value;
  compareTeams(data, kenPomTeam1, kenPomTeam2);
}

let kenPomButton = document.getElementById("buttonKenPom");
kenPomButton.addEventListener("click", displayData);

//
function compareTeams(data, kenPomTeam1, kenPomTeam2) {
  // DOM elements
  let kenPomTeam1Pos = document.getElementById("kenPomTeam1Pos");
  let kenPomTeam2Pos = document.getElementById("kenPomTeam2Pos");
  let kenPomTeam1Score = document.getElementById("kenPomTeam1Score");
  let kenPomTeam2Score = document.getElementById("kenPomTeam2Score");
  // Matching Teams entered by use with JSON data

  for (let i = 0; i < data.length; i++) {
    if (data[i].team_name === kenPomTeam1) {
      kenPomTeam1 = data[i];
    }
  }
  for (let i = 0; i < data.length; i++) {
    if (data[i].team_name === kenPomTeam2) {
      kenPomTeam2 = data[i];
    }
  }
  //Team 1
  let T1 = new Team1(
    kenPomTeam1.team_name,
    kenPomTeam1.fga,
    kenPomTeam1.orbs,
    kenPomTeam1.fta,
    kenPomTeam1.trnovs,
    kenPomTeam1.offsv_rating,
    kenPomTeam1.def_rating
  );
  //Team 2
  let T2 = new Team2(
    kenPomTeam2.team_name,
    kenPomTeam2.fga,
    kenPomTeam2.orbs,
    kenPomTeam2.fta,
    kenPomTeam2.trnovs,
    kenPomTeam2.offsv_rating,
    kenPomTeam2.def_rating
  );
  // Push both results to an array and then take the data out of that array

  //THE FORMULA
  //POSS = FGA - ORBS + TO + (0.475*FTA)
  let poss = Number(
    parseFloat(T1.fieldGoalAttemps) -
      parseFloat(T1.offensiveRebounds) +
      (parseFloat(T1.turnovers) +
        parseFloat(0.475 * parseFloat(T1.freethrowAttempts)))
  );
  kenPomTeam1Pos.innerHTML = `${T1.name}'s number of posessions per game is ${poss}`;

  let poss2 = Number(
    parseFloat(T2.fieldGoalAttemps) -
      parseFloat(T2.offensiveRebounds) +
      (parseFloat(T2.turnovers) +
        parseFloat(0.475 * parseFloat(T2.freethrowAttempts)))
  );
  kenPomTeam2Pos.innerHTML = `${T2.name}'s number of posessions per game is ${poss2}`;

  //Team 1 total points (This is correct)
  let ptsPerOneHundred =
    parseFloat(T1.offensiveRating - 100) -
    (100 - parseFloat(T2.defensiveRating)) +
    100;
  // console.log(ptsPerOneHundred);
  let totalPoints = parseFloat(ptsPerOneHundred / 100) * parseFloat(poss);
  kenPomTeam1Score.innerHTML = `${T1.name} will score ${totalPoints}`;

  //Team 2 total points
  let ptsPerOneHundred2 =
    parseFloat(T2.offensiveRating - 100) -
    (100 - parseFloat(T1.defensiveRating)) +
    100;
  // console.log(`ptsPerOneHundred2 ${ptsPerOneHundred2}`);
  let totalPoints2 = parseFloat(ptsPerOneHundred2 / 100) * parseFloat(poss2);
  kenPomTeam2Score.innerHTML = `${T2.name} will score ${totalPoints2}`;
}
