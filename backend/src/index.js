import 'dotenv/config';
import cors from 'cors';
import express from 'express';

import authRoutes from './routes/auth.routes.js';

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(cors());


app.use('/api', authRoutes);

app.listen(PORT, '0.0.0.0', () => {
    console.log(`corriendo en http://localhost:${PORT}`);
});