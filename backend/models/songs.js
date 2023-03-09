const mongoose = require("mongoose");
const Joi = require("joi");
const songSchema = new mongoose.Schema({
  filePath: { type: String },
  title: { type: String, required: true },
  artist: { type: String, required: true },
  album: { type: String, required: true },
  genre: { type: String, required: true },
});
const Song = mongoose.model("Songs", songSchema);
function validate(item) {
  //validation
  const schema = Joi.object({
    title: Joi.string().required().min(2),
    artist: Joi.string().required(),
    album: Joi.string().required().min(1),
    genre: Joi.string().required().min(1),
  });
  return schema.validate(item);
}
exports.validate = validate;
exports.Songs = Song;
exports.SongSchema = songSchema;
