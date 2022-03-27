'use strict';
const functions = require('@google-cloud/functions-framework');
const request = require('request-promise');
const cheerio = require('cheerio');

functions.http('api', async (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');

  if (req.method === 'OPTIONS') {
    // Send response to OPTIONS requests
    res.set('Access-Control-Allow-Methods', 'GET');
    res.set('Access-Control-Allow-Headers', 'Content-Type');
    res.set('Access-Control-Max-Age', '3600');
    res.status(204).send('');
  } else {
    const img_src = 'https://www.booooooom.com/blog/art/';

    request(img_src, (error, response, html) => {
      if (!error && response.statusCode == 200) {
        const data = scrape(html);
        res.json({ links: data });
      } else {
        res.send('error');
      }
    });
  }
});

function scrape(html) {
  const $ = cheerio.load(html);
  const arts = $('.grid-item__link');
  let data = [];
  arts.each((index, art) => {
    const thumbnail = $(art).find('img').attr('data-cfsrc');

    const item = {
      itemId: String(index),
      mediaUrl: thumbnail,
      metaData: {
        type: 'image',
        title: $(art).find('.sub-item__title.h3').text(),
        description: $(art).find('.single-post-header__date').text(),
        link: {
          url: $(art).attr('href'),
        },
      },
    };

    data.push(item);
  });

  // shuffle the order
  for (let i = data.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = data[i];
    data[i] = data[j];
    data[j] = temp;
  }

  return data;
  /*
   * const images = $('.grid-item-thumbnail > img');
   * images.each((i, img) => {
   *   const link = $(img).attr('data-cfsrc');
   *   links.push(link);
   * });
   */
}
