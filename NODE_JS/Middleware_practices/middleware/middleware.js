const Querychecking = (req, res, next) => {
  const { name } = req.query;
  if (!name) {
    return res.status(400).json({ error: "Name is required" });
  }
  next();
};

const parrammiddlewarechecking = (req, res, next) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({ error: "ID is required" });
  }
  next();
};

const bodymiddlewarechecking = (req, res, next) => {
  const  age  = req.body.age;
  if (!age) {
    return res.status(400).json({ error: "Age is required" });
  }
  next();
};
const headerchecking = (req, res, next) => {
  const token = req.headers["token"];
  if (!token || token !== "12345") {
    return res.status(400).json({ error: "Invalid token" });
  }
  next();
};
const bodychecking = (req, res, next) => {
  const { phone } = req.body;
  if (!phone) {
    return res.status(400).json({ error: "Phone number is required" });
  }
  next();
};
const allchecking = (req, res, next) => {
  const { name } = req.query;
  const { id } = req.params;
  const { age } = req.body;
  const { phone } = req.body;
  const token = req.headers["token"];
  if (!name) {
    return res.status(400).json({ error: "Name is required" });
  } else if (!id) {
    return res.status(400).json({ error: "ID is required" });
  } else if (!age) {
    return res.status(400).json({ error: "Age is required" });
  } else if (!phone) {
    return res.status(400).json({ error: "Phone number is required" });
  } else if (!token || token !== "12345") {
    return res.status(400).json({ error: "Invalid token" });
  } else {
    next();
  }
};

module.exports = {
  Querychecking,
  parrammiddlewarechecking,
  bodymiddlewarechecking,
  headerchecking,
  allchecking,
  bodychecking,
};
