import * as React from "react"
 import {Helmet} from "react-helmet"


import book from '../images/mockup.png'

import './style.css'

// styles

const headingStyles = {
  // maxWidth: 320,
  textAlign: 'center',
}
const fullScreen = {
  height: '100vh',
  textAlign: 'center',
}

const benefits = [
  {
    text: "Represent your ideas, beliefs, and desires"
  },
  {
    text: "Build deeper relationships with those around you"
  },
  {
    text: "Develop a less stressful, more fulfilling career"
  },
  {
    text: "Strengthen the overall skills of your team"
  },
  {
    text: "Champion for others and their achievements"
  }

]

// markup
const IndexPage = () => {
  return (
    <html lang="en">
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content="A book about creating a culture of intentional communication."></meta>
        <title>The Communicative Engineer</title>
      </Helmet>
      <div class='pageStyle' style={fullScreen, headingStyles}>
        <img src={book} width="640px" height="640px" alt="Standing book mockup"/>

        <h1>
          We have a responsibility to be skilled communicators.
        </h1>
      </div>
      <main class='pageStyle'>
        <p>
          A Communicative Engineer is someone that is able to understand and explain.
        </p>
        <p>
          It's someone that is able to take what they know and share it in a personalized way with anyone they're communicating with.
        </p>
        <p>
          This isn't just about technical topics, although that's a big part. Beyond the code and architecture, it's about understanding yourself and others, and being able to use that understanding in a beneficial way.
        </p>
        <p>
          The truth is that most people struggle with communication. It leads to unfortunate misunderstandings, missed opportunities, and unnecessary stress.
        </p>
        <p>
          The goal is to become a Communicative Engineer, and that's what this book is for.
        </p>
        <p>
          It will enable you to do the following...
        </p>

        <ul>
          {benefits.map(benefit => (
            <li>
              {benefit.text}
            </li>
          ))}
        </ul>
        <p>
          The cool part is that all the benefits of purposeful, skilled communication will impact those around you just as strongly.
        </p>
        <p>
          Progress itself will compound as a community is built on a stronger foundation.
        </p>

        <h2>
          The Process
        </h2>
        <p>
          Getting better at communication is essentially the same as anything else. It takes a combination of time, intentionality, effort, and discipline.
        </p>
        <p>
          In other words, if you want to get better at something and consistently try to, you will. 
        </p>
        <p>
          This book helps you along the way. 
        </p>
        <p>
          It is intended to be a short guide filled with useful information and suggestions for your journey to becoming a Communicative Engineer.
        </p>
        <h2>
          Writing in Public
        </h2>
        <p>
          In truth, no one is the ultimate expert on this subject, least of all me.
        </p>
        <p>
          I'm working on this book as a way to collect my own thoughts and share them with others, but hopefully with some help.
        </p>
        <p>
          As I finish each stage of the book, I plan to publish as much as I can for direct feedback and editing suggestions. Ultimately I want to draw on the community of people that have built up an immesurable amount of collective experience and make sure I'm producing the best resource possible.
        </p>
        <p>
          If you're interested in being a part of that process, or just want to learn more about the book, consider reaching out to me at thebuffed [at] gmail.com or following me on <a href="twitter.com/thebuffed">Twitter</a>
        </p>

        <br />
        <br />
        <p>
          Made with ♡ by Eric Davidson
        </p>
        <div style={headingStyles}>
          <img
            
            alt="Gatsby G Logo"
            src="data:image/svg+xml,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2a10 10 0 110 20 10 10 0 010-20zm0 2c-3.73 0-6.86 2.55-7.75 6L14 19.75c3.45-.89 6-4.02 6-7.75h-5.25v1.5h3.45a6.37 6.37 0 01-3.89 4.44L6.06 9.69C7 7.31 9.3 5.63 12 5.63c2.13 0 4 1.04 5.18 2.65l1.23-1.06A7.959 7.959 0 0012 4zm-8 8a8 8 0 008 8c.04 0 .09 0-8-8z' fill='%23639'/%3E%3C/svg%3E"
          />
        </div>
      </main>
    </html>
  )
}


export default IndexPage
