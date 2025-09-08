const admin = require("firebase-admin");  // Importa o SDK do Firebase Admin
const serviceAccount = require("./api-progint-78bba-firebase-adminsdk-fbsvc-d954845f47"); // Importa a chave privada do serviço

// Inicializa o Firebase Admin com as credenciais do serviço
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();  // Inicializa o Firestore (banco de dados)

module.exports = db;  // Exporta a instância do Firestore para usar em outros arquivos
