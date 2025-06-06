import express from 'express'
import router from './src/routes/routes.js'
import './src/database/db.js'

const app = express();

app.use(express.json());
app.use(router);

app.listen(8080)