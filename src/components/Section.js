import React from 'react'
import styled from 'styled-components'
import Wave from './Wave'
import Quiz from 'react-quiz-component'

export const quiz =  {
    "questions": [
      {
        "question": "In all low-income countries across the world today, how many girls finish primary school?",
        "questionType": "text",
        "answers": [
          "20 percent",
          "40 percent",
          "60 percent"
        ],
        "correctAnswer": "3"
      },
      {
        "question": "Where does the majority of the world population live?",
        "questionType": "text",
        "answers": [
          "Low-income countries",
          "Middle-income countries",
          "High-income countries"
        ],
        "correctAnswer": "2"
      },
      {
        "question": "In the last 20 years, the proportion of the world population living in extreme poverty has...",
        "questionType": "text",
        "answers": [
          "Almost doubled",
          "remained almost same",
          "almost halved"
        ],
        "correctAnswer": "3"
      },
      {
        "question": "What is the life expectancy of the world today?",
        "questionType": "text",
        "answers": [
          "50 years",
          "60 years",
          "70 years",
        ],
        "correctAnswer": "3"
      },
      {
        "question": "There are 2 billion children in the world today, aged 0 to 15 years old. How many children will there be in the year 2100, according to UN?",
        "questionType": "text",
        "answers": [
          "4 billion",
          "3 billion",
          "2 billion",
        ],
        "correctAnswer": "3"
      },
      {
        "question": "The UN predicts that by 2100 the world population will have increased by another 4 billion people. The main reason is there will be...",
        "questionType": "text",
        "answers": [
          "More children",
          "More adults",
          "More old people",
        ],
        "correctAnswer": "2"
      },
      {
        "question": "How did the number of deaths per year from natural disasters change over the last hundred years?",
        "questionType": "text",
        "answers": [
          "More than doubled",
          "Remained same",
          "Decreased to less than half",
        ],
        "correctAnswer": "3"
      },
      {
        "question": "How many of world's 1-year-old children today have been vaccinated against some disease?",
        "questionType": "text",
        "answers": [
          "20 percent",
          "50 percent",
          "80 percent",
        ],
        "correctAnswer": "3"
      },
      {
        "question": "Worldwide, 30-year-old men have spent 10 years in school, on average. How many years have women of the same age spent in school?",
        "questionType": "text",
        "answers": [
          "9 years",
          "6 years",
          "3 years",
        ],
        "correctAnswer": "1"
      },
      {
        "question": "In 1996, tigers, giant pandas, and black rhinos were all listed as endangered. How many of these three species are more critically endandered today?",
        "questionType": "text",
        "answers": [
          "Two of them",
          "One of them",
          "None of them",
        ],
        "correctAnswer": "3"
      },
      {
        "question": "How many people in the world have some access to electricity?",
        "questionType": "text",
        "answers": [
          "20 percent",
          "50 percent",
          "80 percent",
        ],
        "correctAnswer": "3"
      },
      {
        "question": "Global climate experts believe that, over the next 100 years, the average temparature will...",
        "questionType": "text",
        "answers": [
          "Get warmer",
          "Remain the same",
          "Get colder",
        ],
        "correctAnswer": "1"
      }
    ]
  } 

const FormBlock = styled.div`
    background-color: #fff;
    height: 480px;
    padding: 1rem;
    color: black;
    position: relative;
    margin-top: 1.75rem;
    overflow: scroll;
    border-radius: 4px;
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