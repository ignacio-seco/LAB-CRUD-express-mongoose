import express from 'express';
import PurchaseModel from '../models/purchase.model.js';
const router = express.Router();
const basemodel = PurchaseModel;

router.get('/:id', async (request, response) => {
  try {
    const { id } = request.params;
    const oneData = await basemodel.findById(id).populate('albumId');
    if (!oneData) {
      return response(404).json({ msg: 'Compra não encontrada' });
    }
    return response.status(200).json(oneData);
  } catch (err) {
    console.log(err);
    return response.status(500).json({ msg: 'Algo errado não deu certo', err });
  }
});

router.post('/:id', async (request, response) => {
  try {
    const { id } = request.params;
    const newData = await basemodel.create({ ...request.body, albumId: id });
    return response.status(201).json(newData);
  } catch (err) {
    console.log(err);
    return response.status(500).json({ msg: 'Algo errado não deu certo', err });
  }
});

export default router;
