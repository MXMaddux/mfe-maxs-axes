import React from 'react'
import styled from 'styled-components'
// import { PageHero } from '../components'
import aboutImg from '../assets/ma_hero_bcg.jpg'
import { Link } from 'react-router-dom'

const AboutPage = () => {
  return (
    <main>
      {/* <PageHero title='about' /> */}
      <Wrapper className='page section section-center'>
        <img src={aboutImg} alt="Max's Axes"/>
        <article>
          <div className='title'>
            <h2>About the axes</h2>
            <div className='underline'></div>
          </div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
            accusantium sapiente tempora sed dolore esse deserunt eaque
            excepturi, delectus error accusamus vel eligendi, omnis beatae.
            Quisquam, dicta. Eos quod quisquam esse recusandae vitae neque
            dolore, obcaecati incidunt sequi blanditiis est exercitationem
            molestiae delectus saepe odio eligendi modi porro eaque in libero
            minus unde sapiente consectetur architecto. Ullam rerum, nemo iste
            ex, eaque perspiciatis nisi, eum totam velit saepe sed quos
            similique amet. Ex, voluptate accusamus nesciunt totam vitae esse
            iste.
          </p>
          <Link className='link-btn' to="/">Back Home</Link>
        </article>
      </Wrapper>
    </main>
  )
}
const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    margin-bottom: 1rem;
    color: var(--clr-grey-7);
  }
  .title {
    text-align: left;
    color: var(--clr-primary-10);
  }
  .underline {
    margin-left: 0;
  }
  .link-btn {
    background: var(--clr-primary-5);
    color: var(--clr-primary-10);
    padding: 5px 10px;
    border-radius: .25rem;
    box-shadow: 1px 2px 5px var(--clr-primary-3);
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`
export default AboutPage
