const express = require('express');

const app = express();

const port = process.env.PORT || 3333
 
app.get('/', (req, res) => {
  return res.json({ ok: true})
})

app.listen(port, () => {
  console.log('Start server!')
});