import React from 'react'
import styled from 'styled-components'
import Wave from './Wave'
import Quiz from 'react-quiz-component'
import quiz from './quiz'

const FormBlock = styled.div`
    background-color: #fff;
    height: 65vh;
    padding: 1rem;
    color: black;
    position: relative;
    margin-top: 1.75rem;
    overflow: scroll;
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
        <Quiz quiz={quiz}/>
    </FormBlock>
)

export default Section