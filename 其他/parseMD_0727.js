let data = [
	'# a',
	'## b',
	'### c',
	'### d',
	'## e',
	'### f',
	'# g',
	'#### h',
	'### i',
	'### ',
	'####  j',
	'#'
]

var parseMD = (data) => {
	let result = [];
	let index = 0;
	for (let i = 0; i < data.length; i++) {
		if (i === 0) {
			result.push(parse(data[i]))
		} else {
			if (typeof parse(data[i], result[i + index - 1]) === 'string') {
				result.push(parse(data[i], result[i + index - 1]))
			} else {
				result = result.concat(parse(data[i], result[i + index - 1]))
				index = parse(data[i], result[i + index - 1]).length - 1;
			}
		}
	}
	return result;
}

var parse = (str, prev_order) => {
	if (!checkStr(str) || str.length === 0) return str;
	let prev_list = prev_order ? prev_order.split('.') : [];
	let prev_len = prev_list.length ? prev_list.length : 0;
	
	const len = str.length;
	let title_len = 0
	for (let i = 0; i < len; i++) {
		if (str[i] === ' ' || i === len - 1) {
			title_len = i;
			break;
		}
	}
	const diff = title_len - prev_len;
	console.log(diff)
	if (diff === 0) {
		prev_list[title_len - 1] = parseInt(prev_list[title_len - 1]) + 1;
		return prev_list.join('.');
	} else if (diff <= 0) {
		prev_list = prev_list.slice(0, title_len);
		prev_list[title_len - 1] = parseInt(prev_list[title_len - 1]) + 1;

		return prev_list.join('.');
	} else if (diff === 1) {
		prev_list.push(1);
		return prev_list.join('.');
	} else {
		const temp = [];
		for (let i = 0; i < diff; i++) {
			prev_list.push(1);
			temp.push(prev_list.join('.'));
		}
		return temp;
	}
}

var checkStr = function(str) {
	if (str[0] !== '#') return false;
	return true;
}
