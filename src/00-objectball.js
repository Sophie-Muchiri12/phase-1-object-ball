function gameObject(){

    let obj = {
       home:{
        teamName:'Brooklyn Nets' ,
        colours: ['Black','White'],
        players:{
        "Alan Anderson": {
            number: 0,
           shoes:16,
           points:22,
           rebounds:12,
           assists:12,
            steals:3,
            blocks:1,
            slamDunks:1,
        },
        "Reggie Evans":{
            number:30,
           shoes:14,
           points:12,
           rebounds:12,
           assists:12,
            steals:12,
            blocks:12,
            slamDunks:7,
        },
        "Reggie Evans": {
                number: 30,
                shoe: 14,
                points: 12,
                rebounds: 12,
                assists: 12,
                steals: 12,
                blocks: 12,
                slamDunks: 7,
              },
              "Brook Lopez": {
                number: 11,
                shoe: 17,
                points: 17,
                rebounds: 19,
                assists: 10,
                steals: 3,
                blocks: 1,
                slamDunks: 15,
              },
              "Mason Plumlee": {
                number: 1,
                shoe: 19,
                points: 26,
                rebounds: 12,
                assists: 6,
                steals: 3,
                blocks: 8,
                slamDunks: 5,
              },
              "Jason Terry": {
                number: 31,
                shoe: 15,
                points: 19,
                rebounds: 2,
                assists: 2,
                steals: 4,
                blocks: 11,
                slamDunks: 1,
              },
            },
    },
        away:{
            teamName:' Charlotte Hornets' ,
        colours: ' Charlotte Hornets',
        players:{
            "Jeff Adrien": {
                number: 4,
                shoe: 18,
                points: 10,
                rebounds: 1,
                assists: 1,
                steals: 2,
                blocks: 7,
                slamDunks: 2,
              },
              "Bismak Biyombo": {
                number: 0,
                shoe: 16,
                points: 12,
                rebounds: 4,
                assists: 7,
                steals: 7,
                blocks: 15,
                slamDunks: 10,
              },
              "DeSagna Diop": {
                number: 2,
                shoe: 21,
                points: 24,
                rebounds: 12,
                assists: 12,
                steals: 4,
                blocks: 5,
                slamDunks: 5,
              },
              "Ben Gordon": {
                number: 8,
                shoe: 15,
                points: 33,
                rebounds: 3,
                assists: 2,
                steals: 1,
                blocks: 1,
                slamDunks: 0,
              },
              "Brendan Haywood": {
                number: 33,
                shoe: 15,
                points: 6,
                rebounds: 12,
                assists: 12,
                steals: 22,
                blocks: 5,
                slamDunks: 12,
              },
        }

        }

       }
       console.log(obj)
return obj
    }
console.log(gameObject())

function homeTeamName(){
    let object =gameObject()
return object ["home"],["teamName"]

}
console.log(homeTeamName())

/*let fo = { foo: 42, bar: 83, "key w/ spaces": true };

console.log(fo["foo"]);
console.log(fo["bar"]);
console.log(fo["key w/ spaces"]);

console.log(fo.foo);
console.log(fo.bar);*/

let fo = { foo: 42, bar: 83, baz: 79 };
for (let key in fo) {
  let value = fo[key];
  console.log("key:", key, "value:", value);
}
Object.keys(fo)

function numPointsScored(name){
  
    let object = gameObject()
    // conditionals to check if player falls in the home or away team 
    if(object.home.players[name]){
        return object.home.players[name].points
    } else if(object.away.players[name]){
        return object.away.players[name].points
    } else {
        return 'No player with that name found'
    }

  }

  console.log("Points"  , numPointsScored("Brendan Haywood"))
  
  function shoeSize(name){
    // a reference to our object 
    let object = gameObject()
    // conditionals to check if player falls in the home or away team 
    if(object.home.players[name]){
        return object.home.players[name].shoe
    } else if(object.away.players[name]){
        return object.away.players[name].shoe
    } else {
        return 'No player with that name found'
    }

  }

  console.log("Shoe Size" ,shoeSize("Bismak Biyombo"))

  function teamColors(teamname){
    // a reference to our object 
    let objects = gameObject()
    // conditionals to check if player falls in the home or away team 
    if(objects.home['teamName'] ===teamname){
        return objects.home['colours']
    } else if(objects.away['teamName'] ===teamname){
        return objects.away['colours']
    } else {
        return 'No team with that name found'
    }

  }

  console.log("Teamcolor" ,teamColors('Brooklyn Nets'))


  function playerNumbers(name){
    // a reference to our object 
    let objects = gameObject()
    // conditionals to check if player falls in the home or away team 
    if(objects.home.players[number] === name){
        return objects.home['colours']
    } else if(objects.away['teamName'] ===name){
        return objects.away['colours']
    } else {
        return 'No team with that name found'
    }

  }

  console.log("Teamcolor" ,teamColors('Brooklyn Nets'))

  function teamNames(){
    let object = gameObject()
    let teams = [object.home.teamName,object.away.teamName]
    return teams
  }

  console.log("team names " , teamNames())


  
  function playerNumbers(teamname){
    let object = gameObject()
    let jerseyNumbers = []
    let playersobject;
    if(object.home.teamName === teamname){
       playersobject = object.home.players
       for(let player in playersobject){
         console.log(player)
         jerseyNumbers.push(object.home.players[player].number)
       }

    } else if(object.away.teamName === teamname) {
       playersobject = object.away.players
       for(let player in playersobject){
         console.log(player)
         jerseyNumbers.push(object.away.players[player].number)
       }
    } else {
      return 'team not found'
    }

    return jerseyNumbers
 }

 console.log(playerNumbers("Brooklyn Nets"))

 function bigshoeRebounds(){
   let object = gameObject()
   // variable that will be used to update the largest shoesize as we iterate over player objects in the object 
   // variable to store info for the player with the largest shoe size 
   // variable to store the player name 
   // find the player association according to home or away key info 
   // iterate over the players object 
   // am checking on the shoesize on iteration and comparing it to the current largest shoe size 

   // this keeps track of the largest size as we iterate over the players
   let shoeSize = 0
   // a variable to store the info about the player with the largest size 
   let playerWithLargestShoeSize = {}
   // a variable to store the player name 
   let playername = '';

   for(let player in object.home.players){
     if(object.home.players[player].shoe > shoeSize ){
       shoeSize = object.home.players[player].shoe
       playerWithLargestShoeSize = object.home.players[player]
       playername = player
     }
   }

   for(let player in object.away.players){
     if(object.away.players[player].shoe > shoeSize ){
       shoeSize = object.away.players[player].shoe
       playerWithLargestShoeSize = object.away.players[player]
       playername = player
     }
   }

   return {
       [playername] : playerWithLargestShoeSize
   };
 }

 console.log(bigshoeRebounds())

 function bigCollectionshoeRebounds(){
   let object = gameObject()
   
   
   let shoeSize = 0
  
   let playerWithLargestShoeSize = []
   
   let playername = '';

   for(let player in object.home.players){
     if(object.home.players[player].shoe > shoeSize ){
       shoeSize = object.home.players[player].shoe
       playerWithLargestShoeSize = [{[player]: object.home.players[player]}]
       playername = player
     } else if(object.home.players[player].shoe === shoeSize){
       playerWithLargestShoeSize.push({[player]: object.home.players[player]})
     }
   }

   for(let player in object.away.players){
     if(object.away.players[player].shoe > shoeSize ){
       shoeSize = object.away.players[player].shoe
       playerWithLargestShoeSize = [{[player]: object.away.players[player]}]
       playername = player
     } else if(object.away.players[player].shoe === shoeSize){
       playerWithLargestShoeSize.push({[player]: object.away.players[player]})
     }
   }

   return playerWithLargestShoeSize
 }

 console.log(bigCollectionshoeRebounds())


 function mostPointsScored() {
  let object = gameObject();
  let maxPoints = 0;
  let playerWithMostPoints = '';

  for (let team of [object.home, object.away]) {
    for (let player in team.players) {
      if (team.players[player].points > maxPoints) {
        maxPoints = team.players[player].points;
        playerWithMostPoints = player;
      }
    }
  }

  return playerWithMostPoints;
}

function winningTeam() {
  let object = gameObject();
  let homePoints = 0;
  let awayPoints = 0;

  for (let player in object.home.players) {
    homePoints += object.home.players[player].points;
  }

  for (let player in object.away.players) {
    awayPoints += object.away.players[player].points;
  }

  return homePoints > awayPoints ? object.home.teamName : object.away.teamName;
}

function playerWithLongestName() {
  let object = gameObject();
  let longestName = '';

  for (let team of [object.home, object.away]) {
    for (let player in team.players) {
      if (player.length > longestName.length) {
        longestName = player;
      }
    }
  }

  return longestName;
}

function doesLongNameStealATon() {
  let object = gameObject();
  let longestName = playerWithLongestName();
  let maxSteals = 0;

  for (let team of [object.home, object.away]) {
    if (team.players[longestName] && team.players[longestName].steals > maxSteals) {
      maxSteals = team.players[longestName].steals;
    }
  }

  return maxSteals === Math.max(...Object.values(object.home.players).concat(Object.values(object.away.players)).map(player => player.steals));
}