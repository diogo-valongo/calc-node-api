# API de Calculadora

Esta é uma API simples de calculadora construída com Node.js e Express. A API permite realizar operações matemáticas básicas, como soma e subtração.

## Índice

- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Instalação](#instalação)
- [Uso](#uso)
- [Endpoints](#endpoints)
- [Documentação Swagger](#documentação-swagger)
- [Autor](#autor)

## Tecnologias Utilizadas

- Node.js
- Express
- Swagger (para documentação)
- CORS

## Instalação

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   cd nome-do-repositorio
   ```

2. **Instale as dependências**:
   ```bash
   npm install
   ```

## Uso

1. **Inicie o servidor**:
   ```bash
   node src/index.js
   ```

2. **Acesse a API**:
   A API estará disponível em `http://localhost:3000`.

## Endpoints

- **Soma**:
  - **Método**: `POST`
  - **URL**: `/soma`
  - **Corpo da Requisição**:
    ```json
    {
        "num1": 5,
        "num2": 3
    }
    ```
  - **Resposta**:
    ```json
    {
        "resultado": 8
    }
    ```

- **Subtração**:
  - **Método**: `POST`
  - **URL**: `/subtracao`
  - **Corpo da Requisição**:
    ```json
    {
        "num1": 5,
        "num2": 3
    }
    ```
  - **Resposta**:
    ```json
    {
        "resultado": 2
    }
    ```

## Documentação Swagger

A documentação da API pode ser acessada em `http://localhost:3000/api-docs` após iniciar o servidor. Esta documentação fornece detalhes sobre os endpoints disponíveis e como utilizá-los.

## Autor

Desenvolvido por [Diogo Valongo](https://github.com/diogo-valongo).

## Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir um problema ou enviar um pull request.

## Licença

Este projeto está licenciado sob a MIT License - veja o arquivo [LICENSE](LICENSE) para mais detalhes.