import express from 'express';
import UserModel from './user.model';

const app = express();

app.get('/users', async (req, res) => {
  const users = await UserModel.findAll();
  res.json(users);
});

app.post('/users', async (req, res) => {
  const user = await UserModel.create(req.body);
  res.json(user);
});

app.put('/users/:id', async (req, res) => {
  const user = await UserModel.findByPk(req.params.id);
  if (user) {
    await user.update(req.body);
    res.json(user);
  } else {
    res.status(404).send('User not found');
  }
});


app
