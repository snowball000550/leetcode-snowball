let data = [
	{
		ch: 'a',
		en: 'a',
		extra: [],
	},
	{
		ch: 'b',
		en: 'b',
	},
	{
		ch: 'c',
		en: 'c',
		extra: [
			{
				ch: 'd',
				en: '',
				extra: [
					{
						ch: 'e',
						en: 'e',
					}
				]
			}
		],
	}
]

var getEnTitle = function(data, ch) {
	for (let item of data) {
		if (item.ch === ch) return item.en;
		if (item.extra && item.extra.length > 0) {
			return getEnTitle(item.extra, ch);
		}
	}
	return null;
}

var getEnTitle = function(data, ch) {
	const fn = (data, ch) => {
		for (let item of data) {
			if (item.ch === ch) {
				return item.en;
			}
			if (item.extra && item.extra.length > 0) 
				return fn(item.extra, ch);
		}
	}
	return fn(data, ch) || fn(data, ch).length === 0 ? fn(data, ch): null
}