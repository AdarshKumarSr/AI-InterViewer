const express = require('express');
const router = express.Router();

router.get('/interview', (req, res) => {
  res.send('API is running...');
});

module.exports = router;