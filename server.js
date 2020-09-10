const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");

const PORT = process.env.PORT || 8080;

const db = require("./models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

app.get("/exercise", (req, res) => {
    res.redirect("./exercise.html");
})

app.get("/stats", (req, res) => {
    res.redirect("./stats.html");
})


// WRONG, CANNOT GET EXCERCISE DATA
app.get("/api/workouts", (req, res) => {
    db.Workout.find({})
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.json(err);
    })
})

// WRONG, SAMPLING
app.post("/api/workouts", (req, res) => {
  db.Workout.create()
  .then(dbWorkout => {
      res.json(dbWorkout);
  })  
  .catch(err => {
      res.json(err);
  })
})

// WRONG, ID IS WRONG,
app.put("/api/workouts/:id" , ({ body }, res) => {
    db.Workout.create(body)
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.json(err);
    })
})

// STATS, I DONT KNOW IF WORKING OR NOT.
app.get("/api/workouts/range", (req, res) => {
    db.Workout.find({})
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.json(err);
    })
})

app.listen(PORT, () => {
    console.log(`App Listening on port: ${PORT}`);
})