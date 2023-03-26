const asyncHandler = require('express-async-handler')

const Habit = require('../models/habitModel')

// @desc Get habits
// @route GET /api/habits
// @access Private
const getHabits = asyncHandler(async (req, res) => {
  const habits = await Habit.find()
    res.status(200).json(habits)
})

// @desc Set habit
// @route POST /api/habits
// @access Private
const setHabit = asyncHandler(async (req, res) => {
    if(!req.body.text) {
      res.status(400)
      throw new Error('Text field missing')
    }

    res.status(200).json({ message: 'Set habit'})
})

// @desc Update habit
// @route PUT /api/habits/:id
// @access Private
const updateHabit = asyncHandler(async (req, res) => {
    res.status(200).json({ test: `Update habit ${req.params.id}` })
})

// @desc Get habits
// @route DELETE /api/habits/:id
// @access Private
const deleteHabit = asyncHandler(async (req, res) => {
    res.status(200).json({ test: `Delete habit ${req.params.id}` })
})

module.exports = {
    getHabits,
    setHabit,
    updateHabit,
    deleteHabit,
}