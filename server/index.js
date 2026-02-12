import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Routes
app.get('/api/health', (req, res) => {
    res.status(200).json({ status: 'ok' });
});

// Post Connect Form
app.post('/api/connect', async (req, res) => {
    const { name, phone, issue } = req.body;
    console.log('New Connect Request:', { name, phone, issue });
    // TODO: Save to MongoDB
    res.status(201).json({ message: 'Request received successfully' });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
