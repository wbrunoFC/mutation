const fs = require('fs');

const data = JSON.parse(fs.readFileSync('./mutation.json', 'utf8'));

const filtered = data.files['mutation.js'].mutants
	.filter((mutant) => mutant.status === 'Survived' || mutant.status === 'NoCoverage')
	.map(({ id, mutatorName, replacement, location, status }) => ({
		id,
		mutatorName,
		replacement,
		status,
		line: location.start.line,
		column: location.start.column,
	}));

console.log(JSON.stringify(filtered, null, 2));
