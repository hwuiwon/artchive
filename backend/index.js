'use strict';

const functions = require('@google-cloud/functions-framework');
const escapeHtml = require('escape-html');

functions.http('helloGET', (req, res) => {
  res.send('Hello World!');
});

functions.http('helloHttp', (req, res) => {
  res.send(`Hello ${escapeHtml(req.query.name || req.body.name || 'World')}!`);
});

/*
 * Background Cloud Function to be triggered by Pub/Sub.
 * This function is exported by index.js, and executed when
 * the trigger topic receives a message.
 *
 * @param {object} message The Pub/Sub message.
 * @param {object} context The event metadata.
 */
exports.helloPubSub = (message, context) => {
  const name = message.data
    ? Buffer.from(message.data, 'base64').toString()
    : 'World';

  console.log(`Hello, ${name}!`);
};

/*
 * Generic background Cloud Function to be triggered by Cloud Storage.
 *
 * @param {object} file The Cloud Storage file metadata.
 * @param {object} context The event metadata.
 */
exports.helloGCS = (file, context) => {
  console.log(`  Event: ${context.eventId}`);
  console.log(`  Event Type: ${context.eventType}`);
  console.log(`  Bucket: ${file.bucket}`);
  console.log(`  File: ${file.name}`);
  console.log(`  Metageneration: ${file.metageneration}`);
  console.log(`  Created: ${file.timeCreated}`);
  console.log(`  Updated: ${file.updated}`);
};

/*
 * Background Cloud Function that throws an error.
 *
 * @param {object} event The Cloud Functions event.
 * @param {object} context The event metadata.
 * @param {function} callback The callback function.
 */

exports.helloError = (event, context, callback) => {
  throw new Error('I failed you'); // Will cause a cold start if not caught
};

/*
 * Background Cloud Function that throws a value.
 *
 * @param {object} event The Cloud Functions event.
 * @param {object} context The event metadata.
 * @param {function} callback The callback function.
 */
exports.helloError2 = (event, context, callback) => {
  console.error(new Error('I failed you')); // Logging an Error object
  console.error('I failed you'); // Logging something other than an Error object
  throw 1; // Throwing something other than an Error object
};

/*
 * Background Cloud Function that returns an error.
 *
 * @param {object} event The Cloud Functions event.
 * @param {object} context The event metadata.
 * @param {function} callback The callback function.
 */
exports.helloError3 = (event, context, callback) => {
  callback('I failed you');
};

// HTTP Cloud Function that returns an error.
functions.http('helloError4', (req, res) => {
  res.status(500).send('I failed you');
});
