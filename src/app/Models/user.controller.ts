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
    res.status(404).json({ message: 'User not found' });
  }
});


app.delete('/users/:id', async (req, res) => {
  const user = await UserModel.findByPk(req.params.id);
  if (user) {
  await user.destroy();
  res.json({ message: 'User deleted' });
  }
});

export default app;
