const Profile = require("../Profile/profile")


const getAllProfiles = async (req, res, next) => {
  const profiles = await Profile.find();

  res.status(200).json({
    status: "success",
    data: { profiles },
  });
};

const createProfile = async (req, res, next) => {
  const { age, phone, weight, idealWeight  } = req.body;

  const newProfile = await Profile.create({
    age,
    phone,
    weight,
    idealWeight
  });

  res.status(201).json({
    status: "success",
    data: { newProfile },
  });
};



const getProfileById = async (req, res, next) => {
  const id = req.params.id;
  const profile = await Profile.findById(id);
  res.status(200).json({
    status: "success",
    data: { profile },
  });
};


const updateProfile = async (req, res, next) => {
  const { phone, idealWeight } = req.body;
  const id = req.params.id;
  const profile = await Profile.findByIdAndUpdate(id, { phone: phone, idealWeight: idealWeight });

  res.status(204).json({ status: "success", data: { profile } });
};

const deleteProfile = async (req, res, next) => {
  const { status } = req.body;
  const id = req.params.id;
  const profile = await Profile.findByIdAndUpdate(id, { status });
  res.status(204).json({ status: "success", data: { profile } });
};

module.exports = {
  getAllProfiles,
  createProfile,
  getProfileById,
  updateProfile,
  deleteProfile,
};
