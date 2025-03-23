import express from 'express';
import { GoogleGenerativeAI } from "@google/generative-ai";
import googleTTS from 'google-tts-api';
import axios from 'axios';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/audio', async (req, res) => {
    const texto1 = req.query.texto;
    const texto = `Me envie a resposta com no máximo 199 caracteres sobre: ${texto1}`;
    
    try {
        const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

        const result = await model.generateContent(texto);
        const generatedText = result.response.text();  // Captura o texto gerado

        const urlAudio = googleTTS.getAudioUrl(generatedText, {
            lang: 'pt',
            slow: false,
            host: 'https://translate.google.com',
        });

        const audioResponse = await axios.get(urlAudio, { responseType: 'arraybuffer' });

        res.set('Content-Type', 'audio/mpeg');
        res.send(audioResponse.data);
    } catch (error) {
        console.error('Erro:', error);
        res.status(500).send('Erro ao gerar áudio');
    }
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
