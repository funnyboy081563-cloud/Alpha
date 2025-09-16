const fetch = require('node-fetch');
const { GEMINI_API_KEY } = require('../../src/config.js');

exports.handler = async function(event) {
  try {
    const body = JSON.parse(event.body);
    const prompt = body.prompt || '';
    const res = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateText?key=' + GEMINI_API_KEY, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        prompt: { text: prompt },
        temperature: 0.2,
        candidate_count: 1,
        max_output_tokens: 1024
      })
    });
    const data = await res.json();
    return {
      statusCode: 200,
      body: JSON.stringify({ output: data })
    };
  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ error: err.message }) };
  }
};
