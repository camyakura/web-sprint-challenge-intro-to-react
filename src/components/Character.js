// Write your Character component here
import React from 'react';
import styled from 'styled-components';

const StyledCharacters = styled.div`
    width:95%;
    display:flex;
    justify-content: space-between;
    border: 1px  solid ${pr => pr.theme.primaryColor};
    align-items:center;
    padding:0 3%;
    background-color: ${pr => pr.theme.black};
    opacity: 0.2;

    
    h2  {
        font-size: 3rem;
    }

`




function Character(props) {
    const {name, birth} = props;


    return(
        <StyledCharacters>
            <h2>{name}</h2>
            <div>{birth}</div>
        </StyledCharacters>
    )
}

export default Character;