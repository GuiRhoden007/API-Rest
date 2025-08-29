const express = require('express');
const app = express();
const logger = require('./Middleware/logger');
const alunoRoutes = require('./Rotas/alunoRoutes');

app.use(express.json());
app.use(logger);

// Servir arquivos estáticos
app.use(express.static('Public'));

// Rotas da API
app.use('/api/alunos', alunoRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
