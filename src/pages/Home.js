import React from 'react'
import { useState } from 'react'
import { Box } from '@mui/material'
import Banner from "../components/HeroBanner"
import SearchExercises from "../components/SearchExercises"
import Exercises from "../components/Exercises"

const Home = () => {

    const [bodyPart, setBodyPart] = useState("all")
    const [exercises, setExercises] = useState([])
    return (
        <Box>
            <Banner />

            <SearchExercises bodyPart={bodyPart}
                setBodyPart={setBodyPart}
                setExercises={setExercises}
            />

            <Exercises
                bodyPart={bodyPart}
                exercises={exercises}
                setExercises={setExercises}
            />
        </Box>
    )
}

export default Home