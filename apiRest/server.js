const express = require('express');
const app = express();
const logger = require('./Middleware/logger');
const alunoRoutes = require('./Rotas/alunoRoutes');

app.use(express.json());      // Para ler JSON no corpo das requisições
app.use(logger);              // Middleware para logar requisições

app.use(express.static('Public'));       // Arquivos estáticos
app.use('/api/alunos', alunoRoutes);     // Rotas da API de alunos

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});
