import app from './app';

const port = '3003';

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
