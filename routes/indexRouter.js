const express=require("express");
const indexRouter= express.Router();


const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

indexRouter.get("/",(req,res)=>{
    res.render("index", {
  title: "Mini Message Board",
  // Pass your messages array here
   messages: messages
});
});


indexRouter.get("/new",(req,res)=>{
    res.render("form");
}
);

indexRouter.post("/new", (req, res) => {
  // 1. Get messageUser and messageText from req.body
const{ messageUser,messageText}=req.body;

  // 2. Create a message object with:
  //    user, text, added
 const newMessage = {
    user: messageUser,
    text: messageText,
    added: new Date()
  };
  // 3. Push the object into messages
  messages.push(newMessage);
  // 4. Redirect to "/"
  res.redirect("/");
});


indexRouter.get("/messages/:messageId", (req, res) => {
  const id = Number(req.params.messageId);

  if (!Number.isInteger(id) || id < 0 || id >= messages.length) {
    return res.status(404).send("Message not found");
  }

  const message = messages[id];

  res.render("message", { message });
});

module.exports=indexRouter;

