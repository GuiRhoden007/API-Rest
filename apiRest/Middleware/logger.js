// Middleware que registra informações de cada requisição recebida
const logger = (req, res, next) => {
  // Imprime no console a data/hora, método HTTP e URL da requisição
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  
  next(); // Passa o controle para o próximo middleware ou rota
};

module.exports = logger; // Exporta o middleware para usar em outras partes da aplicação
