import express from 'express';
import cors from 'cors';
import { json, urlencoded } from 'body-parser';
import adminRouter from './routers/admin-router.js';
import studentRouter from './routers/student-router.js';

const app = express();
const port = 5070;

app.use(cors({ origin: true, credentials: true }));
app.use(json());
app.use(urlencoded({ extended: true }));

// API routes
app.use('/admin', adminRouter);
app.use('/student', studentRouter);

app.get('/', (req, res) => {
  res.end('Connected with React.js');
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
