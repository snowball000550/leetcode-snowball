var getCntitle = function(data, enTitle){
	let result = '';
	const fn = (n) => {
		if (n.en === enTitle) {
			return n.cn;
		} else if (n.extra && n.extra.length > 0) {
			for (let i = 0; i < n.extra.length; i++){
				const temp = fn(n.extra[i]);
				if (temp) {
					return temp;
				}
			}
		}
	}
	result = fn(data);
	return result;
}

const data = {
	en:'1',
	cn:'1',
	extra: [
		{
			en: '2',
			cn: '2'
		},
		{
			en: '3',
			cn: '3',
			extra:[
				{
					en: '4',
					cn: '4'
				}
			]
		}
	]
}