const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;

//json 형태로 반환
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//json 형태로 반환
//배열 형태로 보냄
app.get("/api/customers", (req, res) => {
  res.send([
    {
      id: 1,
      image: "https://placeimg.com/64/64/any",
      name: "강은빈",
      birthday: "020209",
      job: "학생",
    },
    {
      id: 2,
      image: "https://placeimg.com/64/64/any",
      name: "silverbeen",
      birthday: "020209",
      job: "학생",
    },
    {
      id: 3,
      image: "https://placeimg.com/64/64/any",
      name: "goldbeen",
      birthday: "020209",
      job: "학생",
    },
  ]);
});

app.listen(port, () => console.log(`Listening onport ${port}`));
