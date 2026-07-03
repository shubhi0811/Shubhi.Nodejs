const express = require('express')

const app = express()

const PORT = process.env.PORT ||3002

//web server:
app.use(express.static("frontend"))

app.listen(PORT, function(){
    console.log("successfully running at http://localhost:" + PORT)
})


 


const users = [
  {
    "name" :"Jane Doe",
    "gender" : "Female",
    "image" : "../images/jane.png"
  },
  {
    "name" :"John Doe",
    "gender" : "Male",
    "image" : "../images/john.png"
  },
]
let curUserId = 0;
function toggle(){
  if(curUserId == 0)
    curUserId=1;
  else
    curUserId=0;
  // image
  document.getElementById("img").src=users[curUserId].image;
  // name
  document.getElementById("card-name").innerText=users[curUserId].name;
}

console.log("Hello from JS");


