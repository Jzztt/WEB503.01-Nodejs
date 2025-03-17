import express from "express";
const router = express.Router();

router.get("/user", (req, res) => {
  res.send("User Page");
});
router.get("/user/:id", (req, res) => {
  res.send("User Detail Page");
});

router.post("/user", (req, res) => {
  res.send("User Create Page");
});

router.put("/user/:id", (req, res) => {
  res.send("User Update Page");
});

router.delete("/user/:id", (req, res) => {
  res.send("Delete User");
});

export const UserRouter = router;
