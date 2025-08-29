const express = require('express');
const router = express.Router();
const db = require('../firebaseConfig');
const collection = db.collection('alunos');

// CREATE
router.post('/', async (req, res) => {
  try {
    const aluno = req.body;
    await collection.doc(aluno.matricula).set(aluno);
    res.status(201).json({ mensagem: 'Aluno cadastrado com sucesso!' });
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao salvar aluno.' });
  }
});

// READ
router.get('/', async (req, res) => {
  try {
    const snapshot = await collection.get();
    const alunos = snapshot.docs.map(doc => doc.data());
    res.json(alunos);
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao buscar alunos.' });
  }
});

// UPDATE
router.put('/:matricula', async (req, res) => {
  try {
    const { matricula } = req.params;
    await collection.doc(matricula).update(req.body);
    res.json({ mensagem: 'Aluno atualizado com sucesso!' });
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao atualizar aluno.' });
  }
});

// DELETE
router.delete('/:matricula', async (req, res) => {
  try {
    const { matricula } = req.params;
    await collection.doc(matricula).delete();
    res.json({ mensagem: 'Aluno removido com sucesso!' });
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao deletar aluno.' });
  }
});

module.exports = router;
