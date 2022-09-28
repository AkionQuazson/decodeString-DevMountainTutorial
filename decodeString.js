// Write your code below this line

const decoder = (code) => {
    let offset = code[0];
    code = code.slice(1);
    let answer = '';
    for (let i = 0; i < code.length; i++) {
		let keyCode = code.charCodeAt(i);
		keyCode += +offset;
		if (keyCode > 122) keyCode -= 26;
		answer += String.fromCharCode(keyCode);
    }
	return answer;
}

console.log(decoder('1a'));
console.log(decoder('3ce'));
console.log(decoder('2fcjjm'));
console.log(decoder('1zap'));