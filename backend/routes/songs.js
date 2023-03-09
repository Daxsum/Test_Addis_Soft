const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const { validate, Songs } = require("../models/songs");

//file upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "files/images");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

router.post("/songs", [upload.single("file")], async function (req, res) {
  const result = validate(req.body);
  if (result.error) {
    return res.status(404).send(result.error.details[0].message);
  }
  const song = new Songs({
    filePath: req.file.path,
    title: req.body.title,
    artist: req.body.artist,
    album: req.body.album,
    genre: req.body.genre,
  });
  await song.save(); //wait to save
  res.send(song);
});

// list all songs
router.get("/songs", async (req, res) => {
  const songs = await Songs.find();
  res.send(songs);
});

// update a song
router.put("/songs/:id", [upload.single("file")], async (req, res) => {
  // validation
  const result = validate(req.body);
  if (result.error) {
    return res.status(404).send(result.error.details[0].message);
  }

  const song = await Songs.findByIdAndUpdate(
    req.params.id,
    {
      filePath: req.file.path,
      title: req.body.title,
      artist: req.body.artist,
      album: req.body.album,
      genre: req.body.genre,
    },
    { new: true }
  );

  if (!song) {
    return res.status(400).send("song not found with provided id");
  }
  res.send(song);
});

// delete a song
router.delete("/songs/:id", async (req, res) => {
  const song = await Songs.findByIdAndDelete(req.params.id);
  if (!song) {
    return res.status(400).send("song not found with provided id");
  }
  return res.status(200).send("song deleted");
});

// get overall statistics
router.get("/stats", async (req, res) => {
  const stats = {};

  stats.totalSongs = await Songs.countDocuments();
  stats.totalArtists = await Songs.distinct("artist").countDocuments();
  stats.totalAlbums = await Songs.distinct("album").countDocuments();
  stats.totalGenres = await Songs.distinct("genre").countDocuments();

  stats.songsByGenre = await Songs.aggregate([
    { $group: { _id: "$genre", count: { $sum: 1 } } },
  ]);

  stats.songsByArtist = await Songs.aggregate([
    {
      $group: {
        _id: "$artist",
        count: { $sum: 1 },
        albums: { $addToSet: "$album" },
      },
    },
  ]);

  stats.songsByAlbum = await Songs.aggregate([
    { $group: { _id: "$album", count: { $sum: 1 } } },
  ]);

  res.send(stats);
});
module.exports = router;
