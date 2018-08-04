import React from 'react'
import styled from 'styled-components'

const LinkGroup = styled.div`
    a {
        color: white;
        font-size: 0.8rem;
        margin-right: 0.5rem;
    }
`

const Footer = ({data}) => (
    <div>
        <LinkGroup>
        {data.allContentfulFooter.edges.map(edge => (
            <span>
                <a href={edge.node.url}>{edge.node.link}</a>
                <span className="dotted">·</span> 
            </span>
        ))}
        </LinkGroup>
      </div>
)

export default Footer