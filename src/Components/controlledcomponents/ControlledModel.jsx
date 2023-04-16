import React, { useState } from 'react'
import styled from 'styled-components'
const ModalBackGround = styled.div`
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
    margin:10% auto;
    padding:20px;
    width:50%;
`;
const ControlledModel = ({ shouldShow, onRequestClose, children }) => {
    return shouldShow ? (
        <ModalBackGround onClick={onRequestClose}>
            <ModalBody onClick={e => e.stopPropagation()}>
                <button onClick={onRequestClose}>Hide Modal</button>
                {children}
            </ModalBody>
        </ModalBackGround>
    ) : null

}

export default ControlledModel