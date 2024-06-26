import ollama from "ollama";

const systemMessage = { role: "system", content: "Use Japanese" };
const message = { role: "user", content: "Why is the sky blue?" };
const response = await ollama.chat({
  model: "qwen",
  messages: [systemMessage, message],
  stream: true,
});
for await (const part of response) {
  process.stdout.write(part.message.content);
}
