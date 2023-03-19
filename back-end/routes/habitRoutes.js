const express = require('express')
const router = express.Router()
const { getHabits, 
        setHabit, 
        updateHabit, 
        deleteHabit,
     } = require('../controllers/habitController')

router.get('/', getHabits)

router.post('/', setHabit)

router.put('/:id', updateHabit)

router.delete('/:id', deleteHabit)

module.exports = router