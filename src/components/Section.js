import React from 'react'
import styled from 'styled-components'
import Wave from './Wave'
import Quiz from 'react-quiz-component'

export const quiz =  {
    "questions": [
      {
        "question": "How can you access the state of a component from inside of a member function?",
        "questionType": "text",
        "answers": [
          "this.getState()",
          "this.prototype.stateValue",
          "this.state",
          "this.values"
        ],
        "correctAnswer": "3"
      },
      {
        "question": "ReactJS is developed by _____?",
        "questionType": "text",
        "answers": [
          "Google Engineers",
          "Facebook Engineers"
        ],
        "correctAnswer": "2"
      },
      {
        "question": "ReactJS is an MVC based framework?",
        "questionType": "text",
        "answers": [
          "True",
          "False"
        ],
        "correctAnswer": "2"
      },
      {
        "question": "Which of the following concepts is/are key to ReactJS?",
        "questionType": "text",
        "answers": [
          "Component-oriented design",
          "Event delegation model",
          "Both of the above",
        ],
        "correctAnswer": "3"
      }
    ]
  } 

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