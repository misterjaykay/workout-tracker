const db = require("./models");

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
    db.Workout.create()
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  // WRONG, ID IS WRONG,
  app.put("/api/workouts/:id", ({ body }, res) => {
    db.Exercise.create(body)
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  // STATS, I DONT KNOW IF WORKING OR NOT.
  app.get("/api/workouts/range", (req, res) => {
    db.Exercise.find({})
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.json(err);
      });
  });
};
