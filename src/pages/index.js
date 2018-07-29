import React from 'react'
import Link from 'gatsby-link'
// import TextLoop from 'react-text-loop';
import TextLoopDev from "../components/TextLoop";
import Section from "../components/Section";
import Wave from '../components/Wave';

const IndexPage = () => (
  <div>
    <div className="container">
      <div className="leftBlock">
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

        <div className="bookBlock">
        <hr />
          {/* <h1 className="titleSmall">Increase your factfulness...</h1> */}
          <div className="bookBlockGrid">
          <a
              target="_blank"
              className="bookLink" 
              href={"https://www.amazon.com/Factfulness-Reasons-World-Things-Better/dp/1250107814"}>
                <img src={require('../images/book.jpeg')} width="140" />
              </a>
            <div className="bookText">
              <h2 className="bookName">Factfulness: Ten Reasons We're Wrong About the World―and Why Things Are Better Than You Think</h2>
              <p className="authorName">by Hans Rosling, Anna Rosling Rönnlund and Ola Rosling</p>
              <a
              target="_blank"
              className="bookLink" 
              href={"https://www.amazon.com/Factfulness-Reasons-World-Things-Better/dp/1250107814"}> Get it on Amazon </a>
            </div> 
          </div>
          <footer>
            <a target="_blank"
            className="twitterLink"
            href={"https://twitter.com/kns008"}>
            by @kns008 </a>
          </footer>
        </div>
      </div>
      <div className="block-1of2">
        <Section 
        title="Measure your factfulness..."
        question="What's your preferred method of business?"
        />
      </div>
    </div>
  </div>
)

export default IndexPage

