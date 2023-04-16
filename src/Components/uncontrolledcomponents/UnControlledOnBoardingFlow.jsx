import React from 'react'

const UnControlledOnBoardingFlow = ({ children, OnFinish }) => {
    const [onBoardingData, setOnBoardingData] = useState({});
    const [currentIndex, setCurrentIndex] = useState(0);
    const currentChild = React.Children.toArray(children)[currentIndex];
    
    const isLastChild = currentIndex === React.Children.count(children) - 1;
    const handleNext = data => {
        setOnBoardingData({ ...onBoardingData, ...data });
        setCurrentIndex(currentIndex + 1);
    }
    const handleBack = () => {
        setCurrentIndex(currentIndex - 1);
    }

    if (React.isValidElement(currentChild)) {
        return React.cloneElement(currentChild, { handleNext })
    }
    return currentChild
}

export default UnControlledOnBoardingFlow