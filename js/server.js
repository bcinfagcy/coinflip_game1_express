const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 3000
var path = require('path')
// const password = 'Now!t5MongoDB'
// const uri = 'mongodb+srv://rojar:<password>@yourchiefwhitney.slge2zb.mongodb.net/?retryWrites=true&w=majority'
// const uri = `mongodb+srv://rojar:${password}@yourchiefwhitney.slge2zb.mongodb.net/?retryWrites=true&w=majority`


function roll_X_sided(base){
    let ans = Math.random(base) * base
    ans = Math.ceil(ans)
    return ans
}

function pc_play(){
    let pick1 = ['ROCK','PAPER','SCISSOR'];
    let ans = pick1[roll_X_sided(3) - 1]
    return ans
}

function isTheWinner(p1,p2){
    //2 players. if player1 wins then player2 does not
    if( p1 === p2){
        return "TIE"
     }else
    if(p1 == "ROCK"){
                if(p2=="SCISSOR"){return 1
                        //  }else{ans = 2}
                }else if(p1 == "PAPER"){
                                        if(p2=="ROCK"){return 1
                                            // }else{ans = 2}
                                        }else if(p1 == "SCISSOR"){
                                                            if(p2=="PAPER"){return 1
                                                            // }else{ans = 2}
    
                                                        }else{
                                                        }
                                                        // console.log("ans is: " + ans)
                                                    }
                                                }
                                            }
                                            return 2


}

function playRPS(player1,player2){
                      //need the player's choice from 'ROCK', 'PAPER', and 'SCISSOR'
                      let theWinner = isTheWinner(player1,player2)
                      const gameResults = {
                          p1:player1,
                          p2:player2,
                          winner:theWinner
                        //   "p1":gameResults.player1=player1,
                        //   "p2":gameResults.player2=player2,
                        //   "winner":gameResults.winner = theWinner,
                      }
                      console.log("almost.  add the rules.")
                    //   return gameResults
                      return JSON.stringify(gameResults)
}






















// C       R      U       D           post get update delete
// Create
//         Read
//                Update
//                        Delete-ay
//*************************************
// const client = new MongoClient(uri)
app.use(cors())
app.use(express.static(path.join(__dirname, 'public')))
app.get('/backup', function (req, res) {
    // res.send('Hello World')
    // res.sendFile(__dirname + '/index.html')
    res.sendFile(__dirname + '/index.html')
    // res.
    json('Like Added')
})
app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
    
})
// app.get('/api', (request, response) => {
app.get('/api/:student', (request, response) => {
    // response.sendFile(__dirname + '/index.html')
    let params = request.params.student

    // ***************from no-express version of coinflip api***************
    console.log("api called")
    console.log(params)
    // console.log(request.params)
   // time to accept some kind of input & send appropriate response if API has multiple things to do

//    if('student' in params){
   if(params){
//    if('student' in request.params){
       // let ans = "pikapika"
    //    let p1 = params['student']
       let p1 = params
       let p2 = pc_play()
       console.log("p1:"+p1+", p2:"+p2)
       // console.log(playRPS(p1,p2) )
       let ans=(playRPS(p1,p2))
       console.log(ans)
       const objToJson = ans
                //    res.writeHead(200, {'Content-Type': 'application/json'});       //response, write header
                    //   res.end(JSON.stringify(objToJson));                // response, end response
// ***************from no-express version of coinflip api***************

        let objToJSON = {
                            'p1':"ROCK",
                            'p2':"PAPER",
                            'winner':"p2"
                        }
        let ans2 =JSON.stringify(objToJSON)
        // console.log(ans2)    
        console.log(ans     )    
        // response.sendFile(ans)
        response.json(ans)
        // response.json(JSON.stringify(objToJSON))
    }
})

// app.get('/left', function (req, res) {
//     res.send('Left')
// })
// app.get('/right', function (req, res) {
//     res.send('Right')
// })
// // app.get('/users/:userId/books:bookId', (req, res) => {
// app.get('/things/cars/:make', (req, res) => {
//     // res.send("Hallow")
//     res.sendFile(__dirname + './../mazda.html')
// })
// app.get('/game1', function (req, res) {
//     res.sendFile(__dirname + '../index.html')

// })
// app.post('/post', (req, res) => {
//     res.send('POST request to the homepage')
// })
;


// try{
//     await client.connect()
//     await listDatabases(client)    
// }

// app.listen(3000)
app.listen(PORT, () =>{console.log(`server is running on port ${PORT}! You better go catch it!`)})