'use strict';

const axios = require('axios');

module.exports = async (battletag, platform) => {
	const url = encodeURI(`/api?url=https://playoverwatch.com/en-us/career/${platform}/${battletag}`);
	const response = await axios.get(url);
	if (response.data === "PROFILE_NOT_FOUND") throw "PROFILE_NOT_FOUND"
	else if (response.data === "PROFILE_PRIVATE") throw "PROFILE_PRIVATE"
	else return response.data;
}
