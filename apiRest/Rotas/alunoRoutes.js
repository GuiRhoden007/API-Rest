const express = require('express');            // Importa o Express para criar rotas
const router = express.Router();                // Cria um router para organizar as rotas
const db = require('../firebaseConfig');       // Importa a configuração do Firebase
const collection = db.collection('alunos');    // Referência para a coleção 'alunos' no Firestore

// Rota para criar um novo aluno
router.post('/', async (req, res) => {
  try {
    const aluno = req.body;                     // Recebe os dados do aluno enviados no corpo da requisição
    await collection.doc(aluno.matricula).set(aluno);  // Cria um documento com ID igual à matrícula e salva os dados
    res.status(201).json({ mensagem: 'Aluno cadastrado com sucesso!' }); // Retorna sucesso
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao salvar aluno.' });  // Retorna erro em caso de falha
  }
});

// Rota para buscar todos os alunos
router.get('/', async (req, res) => {
  try {
    const snapshot = await collection.get();               // Busca todos os documentos da coleção
    const alunos = snapshot.docs.map(doc => doc.data());    // Extrai os dados de cada documento
    res.json(alunos);                                       // Envia a lista de alunos como resposta JSON
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao buscar alunos.' });  // Retorna erro em caso de falha
  }
});

// Rota para atualizar um aluno pelo ID (matrícula)
router.put('/:matricula', async (req, res) => {
  try {
    const { matricula } = req.params;            // Pega a matrícula da URL
    await collection.doc(matricula).update(req.body);  // Atualiza os dados do aluno com o corpo da requisição
    res.json({ mensagem: 'Aluno atualizado com sucesso!' });  // Retorna mensagem de sucesso
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao atualizar aluno.' });  // Retorna erro em caso de falha
  }
});

// Rota para deletar um aluno pelo ID (matrícula)
router.delete('/:matricula', async (req, res) => {
  try {
    const { matricula } = req.params;            // Pega a matrícula da URL
    await collection.doc(matricula).delete();    // Deleta o documento correspondente
    res.json({ mensagem: 'Aluno removido com sucesso!' });      // Retorna mensagem de sucesso
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao deletar aluno.' });   // Retorna erro em caso de falha
  }
});

module.exports = router;    // Exporta as rotas para uso no arquivo principal da aplicação
