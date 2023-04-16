import React, { useState } from 'react'
import styled from 'styled-components'
const ModalBackground = styled.div`
    position:fixed;
    z-index:1;
    left:0;
    right:0;
    width:100%;
    height:100%;
    overflow:auto;
    background-color:rgba(0,0,0,0.5);
`;
const ModalBody = styled.div`
    background-color:#fefefe;
    margin: 10% auto;
    padding: 20px;
    width: 50%;
`;


const UnControlledModel = ({ children }) => {
    const [shouldShow, setShouldShow] = useState(false)
    return (
        <>
            <button onClick={() => setShouldShow(true)}>Show Modal</button>
            {shouldShow && (
                <ModalBackground onClick={() => setShouldShow(false)}>
                    <ModalBody onClick={(e) => e.stopPropagation()}>
                        <button onClick={() => setShouldShow(false)}>Hide Modal</button>
                        {
                            children
                        }
                    </ModalBody>

                </ModalBackground>
            )
            }

        </>
    )


}

export default UnControlledModel

//here the model is unControlled because we are not controlling the state of the model
//the model it self decides when to show and hide