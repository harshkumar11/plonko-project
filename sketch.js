const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var particle = [];
var plinkos = [];
var division = [];
var divisionHeight=300


function setup() {
  createCanvas(460,800); 
  ground = new Ground(230,800,460,10);
  division = new division()
 
  
}

function draw() {
  background("black"); 


  
  for(var k = 0;k <=width;k = k+80){
    division.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight));
  }



 



}