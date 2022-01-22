
// const rooms = [];

// function makeid(length) {
//   var result           = '';
//   var characters       = '0123456789';
//   var charactersLength = characters.length;
//   for ( var i = 0; i < length; i++ ) {
//     result += characters.charAt(Math.floor(Math.random() * 
// charactersLength));
//  }
//  return result;
// }

// class User {
//   constructor(id,name, studentID) {
//     this.id = id;
//     this.name = name;
//     this.studentId = studentID;
//     this.time = 0;
//     this.status = 0;
//     this.isHost = false;
//     this.isAdmin = false;
//     this.online = true;
//   }
// }
// class Message {
//   constructor(name,content,isSelf) {
//     this.name = name;
//     this.content = content;
//     this.isSelf = isSelf;
//   } 
// }
var roomID = "adsada";
exports.registerHandler = (io)=>{
  io.on("connection", socket => {
    console.log("Socket connected! | UUID:",socket.id)
    socket.join(roomID);
    socket.to(roomID).emit("msg", "Mot nguoi khac da vao phong");
    socket.on("message", (data)=>{
      socket.to(roomID).emit("msg",data);
    })
  });
}
