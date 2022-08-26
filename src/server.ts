import app from './app';

const PORT = 3000 || process.env.PORT;

app.listen(PORT, () => {
  console.log(`Runing on port ${PORT}`);
});
