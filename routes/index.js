const cheerio = require("cheerio");
const axios = require("axios").default;

const scrapeYahoo = async () => {
  // start scraping
  const fetchHtml = async (url) => {
    try {
      const { data } = await axios.get(url);
      return cheerio.load(data);
    } catch (error) {
      console.error(
        `ERROR: An error occurred while trying to fetch the URL: ${url}`
      );
    }
  };

  const url = "https://finance.yahoo.com/quote/%5EIXIC?p=^IXIC";

  const $ = await fetchHtml(url);

  var price = $("#quote-market-notice")
    .parent()
    .children("span")
    .first()
    .text();
    console.log(price);
};

setInterval(() => scrapeYahoo(), 1000);

module.exports = scrapeYahoo;
