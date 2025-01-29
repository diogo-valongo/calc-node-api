const express = require('express');
const cors = require('cors'); // Importa o pacote cors
const app = express();
const port = 3000;

app.use(cors()); // Adiciona o middleware CORS
app.use(express.json());

// Rota para somar dois números
app.post('/soma', (req, res) => {
    const { num1, num2 } = req.body;
    const resultado = num1 + num2;
    res.json({ resultado });
});

// Rota para subtrair dois números
app.post('/subtracao', (req, res) => {
    const { num1, num2 } = req.body;
    const resultado = num1 - num2;
    res.json({ resultado });
});

// Inicia o servidor
app.listen(port, () => {
    console.log(`API rodando em http://localhost:${port}`);
});
