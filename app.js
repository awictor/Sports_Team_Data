const team = {
  //seed data
  _players: [
    {firstName: 'John', lastName: 'Smith', age: '40'},
    {firstName: 'Sam', lastName: 'Thomas', age: '25'},
    {firstName: 'Ryan', lastName: 'Simpson', age: '55'}
  ],
  _games: [
    {opponent: 'Strikers', teamPoints: 7, opponentPoints: 8},
    {opponent: 'Lions', teamPoints:5 , opponentPoints: 3},
    {opponent: 'Dinos', teamPoints: 9 , opponentPoints: 10}
    ],
//Access players property
get players() {
  return this._players
},
// Access games property
get games() {
  return this._games
},

//Adding a new player array in the Team object
addPlayer(newFirstName, newLastName, newAge){
  let player = {
    firstName: newFirstName,
    lastName: newLastName,
    age: newAge
  };
  this.players.push(player);
  },
//Adding a new game to the Team object
addGame(newOpponent, newTeamPoints, newOpponentPoints) {
  
  let game = {
    opponent: newOpponent,
    teamPoints: newTeamPoints,
    opponentPoints: newOpponentPoints
    };
    this.games.push(game)
  } 
};
//Adding players or games
team.addPlayer('Michael', 'Jordan', 23)
team.addGame('Farmers', 19, 17);

//print for testing
console.log(team.players)
console.log(team.games)
