const { maxHeaderSize } = require("http")
const path = require("path")

const laberinto = 

[ "S" , "." , "#" , "#" , "#"]
[ "#" , "." , "#" , "#" , "G"]
[ "." , "." , "." , "#" , "."]
[ "." , "#" , "." , "." , "."]
[ "." , "#" , "." , "#" , "."]

// function labe(x,y){
//     if(x,y outside maze) return false
//     if(x,y is goal) return true
//     if(x,y not open) return false
//     mark x,y as part of solution path
//     if(labe(NorthNorth of x,y) == true) return true
//     if(labe(EastEast of x,y) == true) return true
//     if(labe(SouthSouth of x,y) == true) return true
//     if(labe(WestWest of x,y) == true) return true
//     unmark x,y as part of solution path
//     return false
// }