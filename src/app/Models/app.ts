import express from 'express';
import userController from './user.controller';

const app = express();

app.use(express.json());

app.use(userController);

app.listen(3307, () => {
  console.log('Server running on port 3307');
});
