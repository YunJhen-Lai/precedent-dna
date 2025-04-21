// .github/scripts/write_cases.mjs
import fs from 'fs';

const inputPath = './tools/submit_case_input.json';
const raw = fs.readFileSync(inputPath, 'utf-8');
const cases = JSON.parse(raw);

cases.forEach(data => {
  const outPath = `./case/${data.filename}`;
  const content = JSON.stringify(data.content, null, 2);
  fs.writeFileSync(outPath, content);
  console.log(`✅ 已寫入：${outPath}`);
});
