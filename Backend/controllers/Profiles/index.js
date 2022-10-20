const Profile = require("../../models/Profiles/index");

const createProfile = async (req, res, next) => {
  const { phone, objetive, weight, email, image, userName, idUser } = req.body;

  const newProfile = await Profile.create({
    userName,
    phone,
    objetive,
    weight,
    email,
    image,
    idUser,
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
  const { phone, objetive, weight, email, image, userName, idUser } = req.body;
  const profile = await Profile.findOneAndUpdate(
    { idUser },
    {
      phone,
      objetive,
      weight,
      email,
      image,
      userName,
      idUser,
    }
  );
  res.send(profile);
};

const deleteProfile = async (req, res, next) => {
  const { idUser } = req.body;

  const profile = await Profile.findOneAndDelete({ idUser });
  res.status(204).json({ status: "success", data: { profile } });
};

module.exports = {
  createProfile,
  getProfileById,
  updateProfile,
  deleteProfile,
};
