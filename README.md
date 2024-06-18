# Project Title

March Madness Calculator

## Description

### Ken Pomeroy Formula

This college basketball game predictor uses a Ken Pomeroy formula along with Ed Feng, from the Power Rank, referencs, which take into account team stats like posessions per game, defensive rating, offensive rating, and free throw attempts to calculate the total points each contesting team will score.

### Brian Kidd Basketball Statistics Overview

Also important game stats are weighted and tallied including the national and conference rank of each team, schedule difficulty for each team, team defensive rating, team offensive rating, rebounds per game, turnovers per game, three pointers per game, opponent three pointers per game, injuries, prior matchup outcome, et-cetera.

## Getting Started

--This project uses a living document that is converted into an API endpoint with sheetDB.io

##

-Run this application locally by running npm install. Then npm run dev. You will need your own api key in an .env file in order to run your own basketball data. example `API_BASE_URL = {your-api-key}`

##

Then see js files to see how the api key is entered into the api url

### Dependencies

### Installing

-npm install
-enter your own api key from SheetsDB.
-Data Column Titles are the following

1. team_name
2. nat_rank
3. conf_rank
4. ppg_avg
5. op_ppg_avg
6. orbs
7. rbs
8. trnovs
9. optrnovs
10. tppg
11. op_tppg
12. fga
13. twopt_pct
14. fta
15. ft_pct
16. tp_pct
17. def_rating
18. offsv_rating
19. all_americans
20. sched_dfclty
21. last_matchup
22. injuries
23. home_court_adv
24. days_off
25. eye_test

### Executing program

npm run dev

## Help

contact your adimin: Brian David Kidd: theholisticprogrammer@gmail.com

## Authors

Contributors names and contact info

Brian Kidd
https://www.briankiddmedia.com

## Version History

- 0.1
  - Initial Release projected for April 20th

## License

This project is licensed under the MIT License - see the LICENSE.md file for details

## Acknowledgments

Inspiration, code snippets, etc.

- [The Power Rank](https://thepowerrank.com/cbb-analytics/)
