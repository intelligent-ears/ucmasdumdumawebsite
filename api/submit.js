// Create: api/submit.js in your project root
const fs = require('fs');
const path = require('path');

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { childName, age, email, phone, interests } = req.body;

  if (!childName || !age || !email || !phone) {
    return res.status(400).json({ error: 'Missing required fields' });
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
    // For Vercel, we'll use a different approach since we can't write files
    // You could use a database or send email instead
    
    // For now, let's just return success (you can integrate with database later)
    console.log('Form submission:', record);
    
    return res.status(200).json({ message: 'Submission received successfully' });
  } catch (err) {
    console.error('Error:', err);
    return res.status(500).json({ error: 'Failed to process submission' });
  }
}