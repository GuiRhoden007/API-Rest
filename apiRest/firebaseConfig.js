const admin = require("firebase-admin");
const serviceAccount = require("./api-progint-78bba-firebase-adminsdk-fbsvc-d954845f47");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

module.exports = db;
