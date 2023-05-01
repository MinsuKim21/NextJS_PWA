import { NextApiRequest, NextApiResponse } from 'next'
import { OpenAIApi, Configuration } from 'openai'

type ResponseData = {
  text: string
}

interface GenerateTextRequest extends NextApiRequest {
  body: {
    prompt: string
  }
}

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
})

const openai = new OpenAIApi(configuration)

export default async function handler(
  req: GenerateTextRequest,
  res: NextApiResponse<ResponseData>
) {
  const prompt = req.body.prompt

  if (!prompt || prompt === '') {
    return new Response('Please send your prompt', { status: 400 })
  }

  const aiResult = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: `${prompt}`,
    temperature: 0.7, //
    max_tokens: 500,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    best_of: 1,
  })

  const response = aiResult.data.choices[0].text?.trim() || 'Sorry, there was a problem'
  res.status(200).json({ text: response })
}
