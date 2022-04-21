const express = require("express");
const app = express();

app.get('/calc', (req, res) => {

  let operation = req.query.operation;
  let numberone = parseInt(req.query.numberone);
  parseInt(numberone);
  let numbertwo = parseInt(req.query.numbertwo);
  parseInt(numbertwo);
  if (operation === "add") {
    let result = numberone + numbertwo;
    console.log(result);
    res.send(result.toString());
  } else if (operation === "sub") {
    let result = numberone - numbertwo;
    console.log(result);
    res.send(result.toString());
  } else if (operation === "mul") {
    let result = numberone * numbertwo;
    console.log(result);
    res.send(result.toString());
  }
  else if (operation === "div") {
    let result = numberone / numbertwo;
    console.log(result);
    res.send(result.toString());
  }
  else {
    console.log("in else")
  }

})


app.listen(process.env.PORT || 3000, () => console.log("Server is running"));