const express = require("express");
const router = express.Router();

////////////////////// DATA ARRAYS /////////////////////////////

const team = [
    {
        id_team:1,
        name:"America",
        sport:"soccer"
    },
    {
        id_team:2,
        name:"Cali",
        sport:"soccer"
    },
    {
        id_team:3,
        name:"Junior",
        sport:"soccer"
    },
    {
        id_team:4,
        name:"Nadal",
        sport:"tennis"
    },
    {
        id_team:5,
        name:"Giraldo",
        sport:"tennis"
    },
    {
        id_team:6,
        name:"Cabal",
        sport:"tennis"
    }
];
const game = [
    {
        id_game:11,
        id_tournament: 21,
        id_team_home: 1,
        id_team_guest: 2,
        start_datetime: new Date(2021, 7, 3, 7, 0, 0),
        end_datetime: new Date(2021, 7, 3, 10, 0, 0),
        home_score: 0,
        guest_score: 0,
    },
    {
        id_game:12,
        id_tournament: 21,
        id_team_home: 2,
        id_team_guest: 3,
        start_datetime: new Date(2021, 5, 3, 7, 0, 0),
        end_datetime: new Date(2021, 5, 3, 10, 0, 0),
        home_score: 2,
        guest_score: 1,
    },
    {
        id_game:13,
        id_tournament: 23,
        id_team_home: 4,
        id_team_guest: 6,
        start_datetime: new Date(2021, 6, 30, 7, 0, 0),
        end_datetime: new Date(2021, 6, 30, 10, 0, 0),
        home_score: 32,
        guest_score: 24,
    },
    {
        id_game:14,
        id_tournament: 22,
        id_team_home: 3,
        id_team_guest: 1,
        start_datetime: new Date(2021, 8, 1, 10, 0, 0),
        end_datetime: new Date(2021, 8, 1, 13, 0, 0),
        home_score: 0,
        guest_score: 0,
    },
    {
        id_game:15,
        id_tournament: 21,
        id_team_home: 1,
        id_team_guest: 2,
        start_datetime: new Date(2021, 8, 3, 10, 0, 0),
        end_datetime: new Date(2021, 8, 3, 13, 0, 0),
        home_score: 0,
        guest_score: 0,
    }
];
const tournament = [
    {
        id_tournament:21,
        name: "Soccer Cup",
        start_date: new Date(2021, 01, 15),
        end_date: new Date(2021, 01, 30),
        tournament_winner: null,
        sport: "soccer",
    },
    {
        id_tournament:22,
        name: "Colombian Soccer Cup",
        start_date: new Date(2021, 06, 15),
        end_date: new Date(2021, 07, 30),
        tournament_winner: null,
        sport: "soccer",
    },
    {
        id_tournament:23,
        name: "ATP Cup",
        start_date: new Date(2021, 03, 30),
        end_date: new Date(2021, 04, 15),
        tournament_winner: null,
        sport: "tennis",
    }
];
const bets = [
    {
        id_bet:31,
        id_user:31943377,
        id_game:14,
        amount:20000,
        winner_bet: 1,
    },
    {
        id_bet:32,
        id_user:31943377,
        id_game:15,
        amount:40000,
        winner_bet: 2,
    },
    {
        id_bet:33,
        id_user:31943378,
        id_game:14,
        amount:30000,
        winner_bet: 3,
    },
    {
        id_bet:34,
        id_user:31943378,
        id_game:15,
        amount:50000,
        winner_bet: 1,
    },
];
const users = [
    {
        id_user:31943377,
        name: "Steban Cadena",
    },
    {
        id_user:31943378,
        name: "Rosa Cadena",
    }
];



////////////////////// ROUTES /////////////////////////////////
router.get('/', (req, res) => {
    res.send("Server is up and runing!")
});

module.exports = router;