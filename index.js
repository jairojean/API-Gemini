 
import { GoogleGenerativeAI } from "@google/generative-ai";

async function main() {
  const genAI = new GoogleGenerativeAI("AIzaSyDBhCgW_7zAQj9X0Te3CDvZqnzQhX0pUqI");
  const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash",
      systemInstruction: "Você é um genio e sabe de tudo",
  });
  const prompt = "ola, como diz 'estou bem ' em japones";

  const result = await model.generateContent(prompt);
  console.log(result.response.text());
}

main();