import express from 'express';
import AlbumModel from '../models/album.model.js';
const router = express.Router();
const basemodel = AlbumModel;

router.get('/', async (request, response) => {
  try {
    const data = await basemodel.find();
    return response.status(200).json(data);
  } catch (err) {
    console.log(err);
    return response.status(500).json({ msg: 'Algo errado não deu certo', err});
  }
});

router.get('/:id', async (request, response) => {
  try {
    const { id } = request.params;
    const oneData = await basemodel.findById(id);
    if (!oneData) {
      return response(404).json({ msg: 'Album não encontrado' });
    }
    return response.status(200).json(oneData);
  } catch (err) {
    console.log(err);
    return response.status(500).json({ msg: 'Algo errado não deu certo', err});
  }
});

router.post('/', async (request, response) => {
  try {
    const newData = await basemodel.create(request.body);
    return response.status(201).json(newData);
  } catch (err) {
    console.log(err);
    return response.status(500).json({ msg: 'Algo errado não deu certo', err});
  }
});

router.put('/:id', async (request, response) => {
  try {
    const { id } = request.params;
    const update = await basemodel.findByIdAndUpdate(
      id,
      {...newRequestBody},
      { new: true, runValidators: true }
    );
    return response.status(200).json(update);
  } catch (err) {
    console.log(err);
    return response.status(500).json({ msg: 'Algo errado não deu certo', err});
  }
});

router.delete('/:id', async (request, response) => {
  try {
    const { id } = request.params;
    const deletedData = await basemodel.findByIdAndDelete(id);
    return response.status(200).json(deletedData);
  } catch (err) {
    console.log(err);
    return response.status(500).json({ msg: 'Algo errado não deu certo', err});
  }
});

export default router;
