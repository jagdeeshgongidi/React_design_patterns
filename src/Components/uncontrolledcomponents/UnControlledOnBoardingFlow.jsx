import React, { useState } from 'react'

const UnControlledOnBoardingFlow = ({ children, OnFinish }) => {
    const [onBoardingData, setOnBoardingData] = useState({});
    const [currentIndex, setCurrentIndex] = useState(0);
    const currentChild = React.Children.toArray(children)[currentIndex];

    const handleNext = StepData => {
        const nextIndex = currentIndex + 1;
        const upDatedData = { ...onBoardingData, ...StepData }
        setCurrentIndex(currentIndex + 1);
        if (nextIndex < children.length) {
            setCurrentIndex(nextIndex)
        } else {
            OnFinish(upDatedData)
        }
        setOnBoardingData(upDatedData)
    }


    const handleBack = () => {
        setCurrentIndex(currentIndex - 1);
    }


    if (React.isValidElement(currentChild)) {
        return React.cloneElement(currentChild, { handleNext, handleBack })
    }



    return currentChild
}

export default UnControlledOnBoardingFlow