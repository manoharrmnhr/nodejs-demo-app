const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('🚀 Hello from the automated CI/CD Node.js App!');
});

app.listen(port, '0.0.0.0', () => {
  console.log(`App is running on port ${port}`);
});
