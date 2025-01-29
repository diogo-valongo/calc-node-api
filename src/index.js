const express = require('express');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const cors = require('cors'); // Importa o pacote cors
const app = express();
const port = 3000;

const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API de Calculadora',
            version: '1.0.0',
            description: 'API para realizar operações matemáticas básicas',
        },
    },
    apis: ['./src/index.js'], // Caminho para os arquivos onde estão as anotações
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);

// Defina a rota para a documentação
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(cors()); // Adiciona o middleware CORS
app.use(express.json());

/**
 * @swagger
 * /soma:
 *   post:
 *     summary: Soma dois números
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               num1:
 *                 type: number
 *               num2:
 *                 type: number
 *     responses:
 *       200:
 *         description: Resultado da soma
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 resultado:
 *                   type: number
 */
app.post('/soma', (req, res) => {
    const { num1, num2 } = req.body;
    const resultado = num1 + num2;
    res.json({ resultado });
});

/**
 * @swagger
 * /subtracao:
 *   post:
 *     summary: Subtrai dois números
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               num1:
 *                 type: number
 *               num2:
 *                 type: number
 *     responses:
 *       200:
 *         description: Resultado da subtração
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 resultado:
 *                   type: number
 */
app.post('/subtracao', (req, res) => {
    const { num1, num2 } = req.body;
    const resultado = num1 - num2;
    res.json({ resultado });
});

// Inicia o servidor
app.listen(port, () => {
    console.log(`API rodando em http://localhost:${port}`);
});
