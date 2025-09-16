# Personal AI App Builder (Gemini Inline Key)
This is a simple AI App Builder powered by Gemini 1.5 Flash.

## Setup
1. Open `src/config.js` and paste your Gemini API key:
   ```js
   export const GEMINI_API_KEY = "YOUR_KEY";
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run dev server:
   ```bash
   npm run dev
   ```
4. Build for production:
   ```bash
   npm run build
   ```

Note: Your API key is embedded in the client bundle. Use only for private/local use.
