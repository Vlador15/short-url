const Router = require("express");
const Links = require("../models/Links");
const router = new Router();
const config = require("config");

router.get("/:link", async (req, res) => {
  try {
    let link = await Links.findOne({ link: req.params.link });

    if (link) {
      link.views++;
      await link.save();
      res.redirect(link.originalUrl);
    }

    res.send("good");
  } catch (e) {
    console.log(e);
  }
});

router.get("/api/link/:link", async (req, res) => {
  let link = req.params.link;

  try {
    let url = await Links.findOne({ link });

    if (url) {
      res.json(url);
    } else {
      res.status(400).json({ error: "Ссылка не найдена" });
    }
  } catch (e) {
    console.log(e);
  }
});

router.get("/api/links", async (req, res) => {
  try {
    let urls = await Links.find({});

    if (urls) {
      res.json(urls);
    } else {
      res.status(400).json({ error: "Ссылки не найдена" });
    }
  } catch (e) {
    console.log(e);
  }
});

const getLink = (n) => {
  let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let link = "";
  for (let i = 0; i < n; i++) {
    link += str.split("")[Math.floor(Math.random() * str.length)];
  }
  return link;
};

router.post("/api/link", async (req, res) => {
  let { originalUrl } = req.body;
  try {
    let url = config.get("serverDomen");
    let link = getLink(5);
    let modifiedUrl = url + link;

    const newLink = new Links({ originalUrl, modifiedUrl, link });
    await newLink.save();
    res.json({ message: "Links was created", link: newLink });
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
