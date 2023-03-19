// @desc Get habits
// @route GET /api/habits
// @access Private
const getHabits = (req, res) => {
    res.status(200).json({ message: 'Get habits'})
}

// @desc Set habit
// @route POST /api/habits
// @access Private
const setHabit = (req, res) => {
    res.status(200).json({ message: 'Set habit'})
}

// @desc Update habit
// @route PUT /api/habits/:id
// @access Private
const updateHabit = (req, res) => {
    res.status(200).json({ test: `Update habit ${req.params.id}` })
}

// @desc Get habits
// @route DELETE /api/habits/:id
// @access Private
const deleteHabit = (req, res) => {
    res.status(200).json({ test: `Delete habit ${req.params.id}` })
}

module.exports = {
    getHabits,
    setHabit,
    updateHabit,
    deleteHabit,
}