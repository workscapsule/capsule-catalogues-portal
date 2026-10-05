const fs = require('fs');
const p = 'C:\\Users\\Yashwanth Gowda\\.gemini\\antigravity-ide\\brain\\d554d34f-276c-435e-8a61-8ce1ff2ca5f3\\.system_generated\\logs\\transcript.jsonl';
const lines = fs.readFileSync(p, 'utf8').split('\n');
const found = lines.find(l => l.includes('"step_index":928'));
if (found) {
  const obj = JSON.parse(found);
  console.log(JSON.stringify(obj.tool_calls, null, 2));
}
