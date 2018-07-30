import React from 'react'
import styled from 'styled-components'
import Wave from './Wave'

const FormBlock = styled.div`
    background-color: #fff;
    min-height: 65vh;
    padding: 1rem;
    color: black;
    position: relative;
    margin-top: 1.75rem;
`

const SectionHead = styled.h1`
    font-size: 0.8rem;
    font-weight: normal;
    opacity: 0.5;
`;

const Question = styled.h2`
    font-size: 1.2rem;
    line-height: 1.2;
`

const WaveBottom = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    left: 0;
    transform: rotate(180deg);
`

const Section = props => (
    <FormBlock>
        <SectionHead>{props.title}</SectionHead>
        <Question>{props.question}</Question>
        <div>
            <input type="radio" id="huey" name="drone" checked />
            <label for="huey">Huey</label>
        </div>
        <div>
            <input type="radio" id="louie" name="drone" />
            <label for="louie">Louie</label>
        </div>
        <div>
            <input type="radio" id="dewey" name="drone" />
            <label for="dewey">Dewey</label>
        </div>
    </FormBlock>
)

export default Section