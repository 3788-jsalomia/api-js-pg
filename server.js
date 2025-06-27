const { Pool } = require('pg');
const app = require('./app');
const pool = require('./config/db');

const PORT = process.env.PORT || 3000;

pool.connect((err) => {
    if (err) {
        console.error("❌ Error al conectar a la base de datos:", err.message);
    } else {
        console.log("✅ Conectado a la base de datos...");
    }
});

app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
