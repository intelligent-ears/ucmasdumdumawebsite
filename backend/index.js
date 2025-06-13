const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const fs = require('fs');
const { createObjectCsvWriter } = require('csv-writer');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const csvWriter = createObjectCsvWriter({
  path: 'form-submissions.csv',
  header: [
    { id: 'childName', title: "Child's Name" },
    { id: 'age', title: 'Age' },
    { id: 'email', title: 'Parent Email' },
    { id: 'phone', title: 'Phone Number' },
    { id: 'interests', title: "Child's Interests" },
    { id: 'timestamp', title: 'Timestamp' }
  ],
  append: fs.existsSync('form-submissions.csv')
});

app.post('/submit', async (req, res) => {
  const { childName, age, email, phone, interests } = req.body;

  if (!childName || !age || !email || !phone) {
    return res.status(400).json({ error: 'Missing required fields' });  // ✅ JSON response
  }

  const record = {
    childName,
    age,
    email,
    phone,
    interests: interests || '',
    timestamp: new Date().toISOString()
  };

  try {
    await csvWriter.writeRecords([record]);
    return res.status(200).json({ message: 'Submission saved successfully' }); // ✅ JSON response
  } catch (err) {
    return res.status(500).json({ error: 'Failed to write to CSV' }); // ✅ JSON response
  }
});


app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
