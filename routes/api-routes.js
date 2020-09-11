const db = require("../models");

module.exports = function (app) {
  // WRONG, CANNOT GET EXCERCISE DATA
  app.get("/api/workouts", (req, res) => {
    db.Workout.find({})
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  // WRONG, SAMPLING
  app.post("/api/workouts", (req, res) => {
    db.Workout.create({})
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  // WRONG, ID IS WRONG,
  app.put("/api/workouts/:id", ({body, params}, res) => {
    console.log("exercise", body, params);
    db.Workout.findByIdAndUpdate(params.id,
      {
        $push: {
          exercises: body
          // { 
          //   // type: req.body.type,
          //   // name: req.body.name,
          //   // duration: req.body.duration,
          //   // weight: req.body.weight,
          //   // reps: req.body.reps,
          //   // sets: req.body.sets,
          //   // distance: req.body.distance,
          // },
        },
      }
    )
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  // STATS, I DONT KNOW IF WORKING OR NOT.
  app.get("/api/workouts/range", (req, res) => {
    db.Workout.find({})
      .limit(7)
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.json(err);
      });
  });
};
