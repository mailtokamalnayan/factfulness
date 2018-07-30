import React from 'react'
import Link from 'gatsby-link'
// import TextLoop from 'react-text-loop';
import TextLoopDev from "../components/TextLoop";
import Section from "../components/Section";
import Wave from '../components/Wave';
import BookLink from '../components/BookLink';

const IndexPage = () => (
  <div>
    <div className="container">
      <div className="mainBlock">
        <header>
          <h1>
            <div className="titleSmall">Factfulness is ...</div>
            {"\n"}
            <div className="loopingText">            
              <TextLoopDev speed={8000} inline={false}>
                <span>the stress-reducing habit of only carrying opinions for which you have strong supporting facts.</span>
                <span>recognizing when we get negative news, and remembering that information about bad events is much more likely to reach us.</span>
                <span>recognizing when we get negative news, and remembering that information about bad events is much more likely to reach us.</span>
                <span>recognizing that many things - people, countries, religions, and cultures - appear to be constant just because the change is happening slowly.</span>
                <span>remembering that even small, slow changes gradually add up to big changes.</span>
                <span>recognizing when a scapegoat is being used and remembering that blaming an individual often steals the focus from other possible explanations and blocks our ability to prevent similar problems in the future.</span>
                <span>recognizing when a decision feels urgent and remembering that it rarely is.</span>
              </TextLoopDev>
            </div>
          </h1>
        </header>
        <div className="block-1of2">
          <Section 
          title="Measure your factfulness..."
          question="What's your preferred method of business?"
          />
        </div> 
      </div>
      <BookLink />
      <footer>
        <a href={'https://twitter.com/kns008'}>by kns008 in 🇸🇬</a> · <a href={'https://github.com/mailtokamalnayan/factfulness'}>Github</a>
      </footer>
    </div>
    <Wave />
  </div>
)

export default IndexPage

