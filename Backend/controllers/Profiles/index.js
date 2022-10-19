const Profile = require("../../models/Profiles/index");

const createProfile = async (req, res, next) => {
  const { phone, objetive, weight, email, image, userName } = req.body;

  const newProfile = await Profile.create({
    userName,
    phone,
    objetive,
    weight,
    email,
    image,
  });

  res.send(newProfile);
};

const getProfileById = async (req, res, next) => {
  const id = req.params.id;
  const profile = await Profile.findById(id);
  res.send({
    profile,
  });
};

const updateProfile = async (req, res, next) => {
  const { phone, objetive, weight, email, image, userName } = req.body;
  const id = req.params.id;
  const profile = await Profile.findByIdAndUpdate(id, {
    phone,
    objetive,
    weight,
    email,
    image,
    userName,
  });
  res.send(profile);
};

const deleteProfile = async (req, res, next) => {
  const { status } = req.body;
  const id = req.params.id;
  const profile = await Profile.findByIdAndUpdate(id, { status });
  res.status(204).json({ status: "success", data: { profile } });
};

module.exports = {
  createProfile,
  getProfileById,
  updateProfile,
  deleteProfile,
};
