import React from 'react'
import styled, { keyframes } from 'styled-components'

const fadeInUp = keyframes`
    0% {
        opacity: 0;
        transform: translate(-50%, 10px);
    }
    100% {
        opacity: 1;
        transform: translate(-50%, -20px);
    }
`

const BookToast = styled.a`
    background: #333;
    border-radius: 999px;
    width: 300px;
    display: grid;
    grid-template-columns: 48px 1fr;
    padding: 1rem;
    padding-left: 2.25rem;
    grid-column-gap: 0.5rem;
    color: inherit;
    text-decoration: none;
    margin: 4rem 0;
    &:hover {
        box-shadow: 0 10px 20px rgba(0,0,0, 0.9);
    }
    animation: ${fadeInUp} 3s 1s both cubic-bezier(0.075, 0.82, 0.165, 1);
    transition: 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
    @media (min-width: 768px) {
        position: fixed;
        left: 50%;
        transform: translateX(-50%);
        width: 380px;
        grid-template-columns: 48px 1fr;
        grid-column-gap: 0.75rem;
        z-index: 10;
    }
`
const BookImage = styled.img`
    width: 100%;
`
const BookTitle = styled.h1`
    font-size: 0.8rem;
    margin: 0;
    font-weight: semibold;
`
const BookAuthor = styled.h2`
    font-size: 0.8rem;
    margin: 0;
    font-weight: normal;
    opacity: 0.5;
`

const BookLink = props => (
    <BookToast target={'_blank'} href={'https://www.amazon.com/Factfulness-Reasons-World-Things-Better/dp/1250107814'}>
        <BookImage src={'https://images-na.ssl-images-amazon.com/images/I/51tvugRSHKL._SX322_BO1,204,203,200_.jpg'} />
        <div>
            <BookTitle>Factfulness</BookTitle>
            <BookAuthor>by Hans Rosling, Anna Rosling Rönnlund and Ola Rosling</BookAuthor>
        </div>

    </BookToast>
)

export default BookLink