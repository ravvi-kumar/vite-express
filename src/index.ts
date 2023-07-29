import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.json({ message: "success" });
});

app.get("/ip", async (req, res) => {
  const resp = await fetch("https://api.ipify.org?format=json");
  const json = await resp.json();
  res.json(json);
});

app.listen(3000, () => console.log("Server is listening..."));
