const MyData = require('./models');

exports.getData = (req, res) => {
  MyData.find()
    .then((data) => res.json(data))
    .catch((err) => res.status(400).json('Error: ' + err));
}
  
exports.addData = (req, res) => {
  const name = req.body.name;
  const age = Number(req.body.age);

  const newData = new MyData({
    name,
    age,
  });

  newData
    .save()
    .then(() => res.json('Data added!'))
    .catch((err) => res.status(400).json('Error: ' + err));
}