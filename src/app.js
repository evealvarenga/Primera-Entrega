import express from 'express'
import productRouter from './routes/products.router.js'
import cartRouter from './routes/cart.routes.js'

const app = express();

//Use
app.use(express.json());
app.use("api/products", productRouter); 
app.use("api/cart", cartRouter);

//Listen
app.listen(8080, () => {
  console.log(`Servidor escuchando en el puerto 8080`);
});