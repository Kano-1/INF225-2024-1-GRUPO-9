const express = require("express");
const sesion = require("../Controllers/pacientes.js")
const autenticar = require("../middlewares/ValidarToken.js")

const router = express.Router();

router.post('/hora', autenticar ,sesion.asignarHora);

router.get('/hora/:rut', sesion.buscarHoras);

router.get('/horas/:fecha' , sesion.horasDias);

router.delete('/hora/:id',autenticar, sesion.eliminarHora);

router.put('/hora/:id',autenticar, sesion.modificarHoras);



// Create
router.post('/', async (req, res) => {
  try {
    const user = new sesion(req.body);
    await user.save();
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Read
router.get('/', async (req, res) => {
  try {
    const users = await sesion.find({});
    res.send(users);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Update
router.patch('/:id', async (req, res) => {
  try {
    const user = await sesion.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Delete
router.delete('/:id', async (req, res) => {
  try {
    const user = await sesion.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).send();
    }
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;