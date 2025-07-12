const express = require('express');
const { addItem, getItems } = require('./cosmos');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World from Node.js 20!');
});

// API thêm item vào Cosmos DB
app.post('/items', async (req, res) => {
  try {
    const item = req.body;
    const result = await addItem(item);
    res.status(201).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// API lấy tất cả item từ Cosmos DB
app.get('/items', async (req, res) => {
  try {
    const items = await getItems();
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
