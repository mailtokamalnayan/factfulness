import React from 'react'
import styled from 'styled-components'

const LinkGroup = styled.div`
    display: grid;
    grid-auto-flow: column;
    grid-column-gap: 0.75rem;
    width: 300px;
    margin: auto;
    a {
        color: #707c70;
        font-size: 0.6rem;
        text-decoration: none;
        &:hover {
            text-decoration: underline;
        }
    }
`

const FooterBlock = styled.div`
    position: absolute;
    bottom: 1rem;
    text-align: center;
    width: 100%;
`

const Footer = ({data}) => (
    <FooterBlock>
        <LinkGroup>
        {data.allContentfulFooter.edges.map(edge => (
            <span>
                <a href={edge.node.url}>{edge.node.link}</a>
            </span>
        ))}
        </LinkGroup>
      </FooterBlock>
)

export default Footer