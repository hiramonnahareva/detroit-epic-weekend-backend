const { Configuration, OpenAIApi } = require('openai');
require('dotenv').config();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const getRecommendations = async (inputText) => {
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: inputText,
    max_tokens: 200,
  });
  return response.data.choices[0].text.trim();
};

module.exports = { getRecommendations };
