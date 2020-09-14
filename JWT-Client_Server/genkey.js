//generate a secret key

//36 chars long and Base(36)
const key = [...Array(30)]
	.map((n) => ((Math.random() * 36) | 0).toString(36))
	.join('');

console.log(key);
