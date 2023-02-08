const track = require("../model/trackModel");
const catchAsync = require("./catchAsync");

exports.trail = (req, res) => {
  console.log(track.find({}));
  res.status(200).json({
    status: "sucess",
    message: "connected with track",
  });
};

// exports.getAllUser = catchAsync(async (req, res) => {
//   const data = await track.find();
//   console.log(data);
//   if (err) {
//     res.status(500).send(err);
//   }
//   // if (!data) return res.err(err)
//   // next(new AppError('No users found', 404));

//   res.status(200).json({
//     status: "Sucess",
//     message: "Got your track",
//     data,
//   });
// });

exports.getAll = (req, res) => {
  track.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).json({
        status: "success",
        data: {
          data,
        },
      });
    }
  });
};

exports.createUser = async (req, res, next) => {
  const body = req.body;

  const user = await track.create(body);

  res.status(200).json({
    status: "success",
    message: "Your new track is created",
    data: { user },
  });
};

exports.createTrack = (req, res) => {
  const post =
    // const tracks = track.create(
    {
      //   id:req.body.id,
      name: req.body.name,
      duration: req.body.duration,
    };
  console.log(post);
  // );
  track.create(post, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).json({
        status: "success",
        data: {
          data,
        },
      });
    }
  });
};
