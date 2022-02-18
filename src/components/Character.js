// Write your Character component here
import React from 'react';
import styled from 'styled-components';

const StyledCharacters = styled.div`
    display:flex;
    justify-content: space-between;
    border: 1px solid ${pr => pr.theme.primaryColor};
    align-items:center;
    padding:1% 3%;
    background-color: ${pr => pr.theme.black};
    color: ${pr => pr.theme.white};
    opacity:0.85;
    
    h2  {
        font-size: 3rem;
    }

    .birthYear {
        font-size: 2rem;
        padding: 1%;
        border: 1px solid ${pr => pr.theme.secondaryColor};
        border-radius: 25% 10%;
        background-color: ${pr => pr.theme.secondaryColor};
        color: ${pr => pr.theme.tertiaryColor};
    }

`




function Character(props) {
    const {name, birth} = props;


    return(
        <StyledCharacters>
            <h2 className='characters'>{name}</h2>
            <div className='birthYear'>{birth}</div>
        </StyledCharacters>
    )
}

export default Character;