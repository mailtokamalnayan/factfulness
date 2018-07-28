import React from 'react'
import Link from 'gatsby-link'
// import TextLoop from 'react-text-loop';
import TextLoopDev from "../components/TextLoop";

const IndexPage = () => (
  <div>
    <div className="container">
      <div className="block1-2">
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
        <hr />
        <div className="bookBlock">
          {/* <h1 className="titleSmall">Increase your factfulness...</h1> */}
          <div className="bookBlockGrid">
            <img src={require('../images/book.jpeg')} width="140" />
            <div className="bookText">
              <h2 className="bookName">Factfulness: Ten Reasons We're Wrong About the World―and Why Things Are Better Than You Think</h2>
              <p className="authorName">by Hans Rosling, Anna Rosling Rönnlund and Ola Rosling</p>
              <a
              target="_blank"
              className="bookLink" 
              href={"https://www.amazon.com/Factfulness-Reasons-World-Things-Better/dp/1250107814"}> Get it on Amazon </a>
            </div> 
          </div>

        </div>
        <footer>
          <a target="_blank"
          className="twitterLink"
          href={"https://twitter.com/kns008"}>
          by @kns008 </a>
        </footer>
      </div>
      <div className="block-1of2">
        <div className="formBlock">
          <h2>Measure your factfulness</h2>
        </div>
      </div>
    </div>

      <svg className="svgWaves" width="100%" height="172" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill="#f2f2f2">
        <animate repeatCount="indefinite" fill="freeze" attributeName="d" dur="20s" values="M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z;

        M0 86.3149C316 86.315 444 159.155 884 51.1554C1324 -56.8446 1320.29 34.1214 1538 70.4063C1814 116.407 2156 188.408 2560 86.315V232.317L0 232.316V86.3149Z;

        M0 53.6584C158 11.0001 213 0 363 0C513 0 855.555 115.001 1154 115.001C1440 115.001 1626 -38.0004 2560 53.6585V199.66L0 199.66V53.6584Z;

        M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z
        " />
        </path>
      </svg>
  </div>
)

export default IndexPage

