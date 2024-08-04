import { Configuration, OpenAIApi } from "openai";

async function smartNotesController(req, res) {
	//console.log(process.env.OPENAI_API);
	const { inputNote } = req.body;
	//console.log(inputNote);
	const configuration = new Configuration({
		apiKey: process.env.OPENAI_API,
	});

	//console.log(configuration);
	const openai = new OpenAIApi(configuration);

	try {
		const response = await openai.chat.completions.create({
			model: "text-davinci-003",
			prompt: inputNote,
			temperature: 0,
			max_tokens: 256,
			top_p: 1,
			frequency_penalty: 0,
			presence_penalty: 0,
		});
		//console.log(response.data.choices[0].text);
		res.status(200).json({
			summary: response.data.choices[0].text.trimStart(),
		});
	} catch (error) {
		console.error("Error calling OpenAI API:", error);
		res.status(400).json({ error });
	}
}

export default smartNotesController;

