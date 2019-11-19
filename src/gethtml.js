'use strict';

const axios = require('axios')
	, cheerio = require('cheerio');

module.exports = async (battletag, platform) => {
	
	const url = encodeURI(`/api?url=https://playoverwatch.com/en-us/career/${platform}/${battletag}`);
	
	const res = await axios.get(url);

	return res.data;
}
