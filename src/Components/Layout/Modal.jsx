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

const Modal = ({ children }) => {
    const [shouldShow, setShouldShow] = useState(false)
    return (
        <>
            <button onClick={() => setShouldShow(true)}>Show Modal</button>
            {shouldShow && (
                <ModalBackground onClick={() => setShouldShow(false)}>
                    <ModalBody onClick={(e) => e.stopPropagation()} >
                        <button onClick={() => setShouldShow(false)}> Hide Modal</button>
                        {
                            children
                        }
                    </ModalBody>
                </ModalBackground>)
            }
            {/* what the propagation  function is doing is that when ever user clicks on modal body
            it defaults adds a click event and closes the modal
            to prevent that behavior we are using stoppropgation ()
            onClick={(e) => e.stopPropagation()}  */}
        </>
    )
}

export default Modal