// import { Configuration, OpenAIApi } from "openai";

// async function smartNotesController(req, res) {
// 	//console.log(process.env.OPENAI_API);
// 	const { inputNote } = req.body;
// 	//console.log(inputNote);
// 	const configuration = new Configuration({
// 		apiKey: process.env.OPENAI_API,
// 	});

// 	//console.log(configuration);
// 	const openai = new OpenAIApi(configuration);

// 	try {
// 		const response = await openai.chat.completions.create({
// 			model: "text-davinci-003",
// 			prompt: inputNote,
// 			temperature: 0,
// 			max_tokens: 256,
// 			top_p: 1,
// 			frequency_penalty: 0,
// 			presence_penalty: 0,
// 		});
// 		//console.log(response.data.choices[0].text);
// 		res.status(200).json({
// 			summary: response.data.choices[0].text.trimStart(),
// 		});
// 	} catch (error) {
// 		console.error("Error calling OpenAI API:", error);
// 		res.status(400).json({ error });
// 	}
// }

// export default smartNotesController;

// Integrated Gemini instead of ChatGPT
import dotenv from "dotenv";
dotenv.config();

import {
	GoogleGenerativeAI,
	HarmCategory,
	HarmBlockThreshold,
} from "@google/generative-ai";

async function smartNotesController(req, res) {
	const apiKey = process.env.GEMINI_API_KEY;
	const genAI = new GoogleGenerativeAI(apiKey);

	const model = genAI.getGenerativeModel({
		model: "gemini-1.5-flash",
	});

	const generationConfig = {
		temperature: 1,
		topP: 0.95,
		topK: 64,
		maxOutputTokens: 8192,
		responseMimeType: "text/plain",
	};
	const userQuestion = req.body.inputNote;

	if (!userQuestion) {
		return res.status(400).json({ error: "Question is required" });
	}

	try {
		const chatSession = model.startChat({
			generationConfig,
			history: [],
		});

		const result = await chatSession.sendMessage(userQuestion);

		const finalRes = result.response.text();
		res.json({ answer: finalRes });
	} catch (error) {
		console.error("Error details:", error.message);
		res.status(500).json({
			error: "Something went wrong",
			details: error.message,
		});
	}
}

export default smartNotesController;

