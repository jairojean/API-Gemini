# Projeto IA Gemini com Google TTS

Este projeto tem como objetivo criar uma aplicação que recebe um texto do usuário, envia para a IA do **Google Gemini**, obtém a resposta gerada pela IA, e em seguida converte essa resposta em áudio utilizando a **API Google TTS** (Text-to-Speech).

## Funcionalidade

1. O usuário envia um texto para o servidor via URL.
2. O servidor envia esse texto para a **IA Gemini** da Google para obter uma resposta inteligente.
3. A resposta da IA é então convertida em áudio usando a **API Google TTS**.
4. O áudio gerado é enviado de volta para o usuário.

## Tecnologias Usadas

- **Node.js**: Ambiente de execução JavaScript no servidor.
- **Express.js**: Framework para criação de APIs.
- **Google Gemini API**: API da Google que utiliza a IA do modelo **Gemini** para gerar respostas inteligentes.
- **Google TTS (Text-to-Speech)**: API da Google que converte texto em áudio.
- **Axios**: Cliente HTTP para realizar requisições externas.
- **dotenv**: Para armazenar variáveis de ambiente, como a chave da API do Google.

 