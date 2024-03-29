// In src/controllers/workoutController.js
const workoutService =require("../services/workoutService");

const getAllWorkouts = (req, res) => {
    const allWorkouts = workoutService.getAllWorkouts();
    res.send({status: "Ok", data:allWorkouts});
  };
  
  const getOneWorkout = (req, res) => {
    const workout = workoutService.getOneWorkout();
    res.send("Get an existing workout");
  };
  
  const createNewWorkout = (req, res) => {
    const createWorkout = workoutService.createNewWorkout();
    res.send("Create a new workout");
  };
  
  const updateOneWorkout = (req, res) => {
    const updateWorkout = workoutService.updateOneWorkout();
    res.send("Update an existing workout");
  };
  
  const deleteOneWorkout = (req, res) => {
     workoutService.deleteOneWorkout();
    res.send("Delete an existing workout");
  };
  
  module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout,
  };