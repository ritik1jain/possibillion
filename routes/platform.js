const express = require("express");
// const { check, validationResult } = require("express-validator");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
const router = express.Router();
const auth = require("../middleware/auth");

const Platform = require("../model/Platforms");

/**
 * @method - GET
 * @param - /platforms/:name
 * @description - Platform description
 */

 router.get("/:name", async (req, res) => {
    try {
      // request.user is getting fetched from Middleware after token authentication
      const platform = await Platform.findOne({name: req.params.name}).exec();
      res.json(platform);
    } catch (e) {
      res.send({ message: "Error in Fetching platform" });
    }
  });
  
  module.exports = router;
  