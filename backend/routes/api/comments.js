/**
 * @fileoverview Routes for handling comments in the Anythink Market application.
 */

const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

module.exports = router;

/**
 * GET /
 * 
 * Retrieves all comments.
 * 
 * @name GetComments
 * @route {GET} /
 * @returns {Object} 200 - An array of comments
 * @returns {Error}  default - Unexpected error
 */

/**
 * DELETE /:id
 * 
 * Deletes a comment by its ID.
 * 
 * @name DeleteComment
 * @route {DELETE} /:id
 * @param {string} id - The ID of the comment to delete
 * @returns {Object} 200 - Success message
 * @returns {Error}  default - Unexpected error
 */