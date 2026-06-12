const router = require("express").Router();
const User = require("../models/User");

router.get("/", async (req, res, next) => {
  try {
    const users = await User.find({});
    res.status(200).json({
      status: true,
      users,
    });
  } catch (error) {
    next(error);
    
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({
        status: false,
        message: "user not found",
      });
    }
    res.status(200).json({
      status: true,
      user,
    });
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { name, age, phone, email } = req.body;
    // const newUser = await User.create(req.body);
    const newUser = await User.create({ name: name, age, phone, email });
    res.status(200).json({
      status: true,
      user: newUser,
    });
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const { name, age, phone, email } = req.body;
    const user = await User.updateOne({_id:req.params.id },{ name: name, age, phone, email });
    if (!user) {
      return res.status(404).json({
        status: false,
        message: "user not found",
      });
    }
    res.status(200).json({
      status: true,
      message:"user updatd successfully",
      user: user,
    });
  } catch (error) {
    next(error);
  }
});


router.delete("/:id", async (req, res, next) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
     if (!user) {
      return res.status(404).json({
        status: false,
        message: "user not found",
      });
    }
    res.status(200).json({
      status: true,
      message: 'user deleted successfully',
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
