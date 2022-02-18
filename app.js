const app = require('express')();
const PORT = process.env.PORT || 3000;

app.get('', (req, res) => {
  var user = {
    agent: req.header('user-agent'),
    referrer: req.header('referrer'),
    ip: req.ip,
  };
  res.send(user.ip);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
