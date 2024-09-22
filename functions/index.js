/**
 * Import function triggers from their respective submodules:
 *
 * The Firebase Functions library provides various triggers for different events
 * that can be handled in your serverless functions. Below are some examples of how 
 * to import these triggers.
 *
 * const {onCall} = require("firebase-functions/v2/https"); // Used for callable functions
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore"); // Used for Firestore document events
 *
 * You can see a full list of supported triggers and their detailed usage
 * at the official Firebase documentation: 
 * https://firebase.google.com/docs/functions
 */

const {onRequest} = require("firebase-functions/v2/https"); // Import the onRequest trigger for handling HTTP requests
const logger = require("firebase-functions/logger"); // Import the logger for logging messages

// This is where you can create and deploy your first functions
// Check out the Firebase documentation for a step-by-step guide:
// https://firebase.google.com/docs/functions/get-started

/**
 * Define a simple HTTP function named "helloWorld".
 * This function responds to HTTP requests with a greeting message.
 * 
 * The 'onRequest' function will trigger the 'helloWorld' function
 * whenever an HTTP request is made to its endpoint.
 */
exports.helloWorld = onRequest((request, response) => {
  // Log an informational message when the function is called
  logger.info("Hello logs!", {structuredData: true});
  
  // Send a simple greeting message back to the client
  response.send("Hello from Firebase!");
  
  // Optionally, you can set a response status code, for example:
  // response.status(200).send("Hello from Firebase!");
  
  // You can also handle different types of requests (GET, POST, etc.) here
  // and customize your response based on the request method or parameters.
});
