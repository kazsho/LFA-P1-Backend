const app = require('./app');
const port = process.env.PORT
const PORT = 3000;
app.listen(
    PORT,
    () => console.log(`Server running on PORT: ${PORT}`)
)