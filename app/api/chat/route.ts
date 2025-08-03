/** Import necessary modules. */
import { streamText, Message, smoothStream } from "ai";
import { createOpenAI } from "@ai-sdk/openai";
import { env } from "process";

/** Initialize the model with selected inference provider */
// export const maxDuration = 30;
const model = createOpenAI({
  baseURL: "https://router.huggingface.co/v1", // Use other inference providers as well
  apiKey: env.HF_TOKEN ?? "",
});

/** POST function to handle the multi-modal chat messages. */
export async function POST(req: Request) {
  const { messages }: { messages: Message[] } = await req.json();

  // Get the response from the model
  const result = streamText({
    model: model("google/gemma-3-27b-it"),
    messages: messages,
    maxTokens: 500,
    experimental_transform: smoothStream(),
  });

  // Return the response as a stream
  return result.toDataStreamResponse();
}
