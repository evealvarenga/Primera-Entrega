import { Router } from "express";
import CartManager from '../CartManager.js';

const manager = new CartManager('./src/carrito.json');
const router = Router();


//Endpoint para crear un nuevo carrito
router.post('/', async (req, res) => {
    
});

//Endpoint para obtener productos del carrito
router.get('/:cid', async (req, res) => {
    try {
        //AGREGAR PARTE LÓGICA
    } catch (error) {
        res.status(500).json({ error: 'Hubo un error al obtener los productos del carrito.' });
    }
});

//Endpoint para agregar un producto al carrito
router.post('/:cid/product/:pid', async (req, res) => {
    try {
        const { cid, pid } = req.params;
        const { quantity } = req.body;
    } catch (error) {
        res.status(500).json({ error: 'Hubo un error al agregar el producto al carrito.' });
    }
});


export default router;
