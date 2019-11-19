'use strict';

const fetch = require('node-fetch')
	, cheerio = require('cheerio');

module.exports = async (battletag, platform) => {
	
	const url = encodeURI(`/api?url=https://playoverwatch.com/en-us/career/${platform}/${battletag}`);
	
	const html = await fetch(url);
	
	return html;
}
