import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import aboutImg from '../assets/hero-bcg.jpeg'

const AboutPage = () => {
  return (
    <main>
      <PageHero />
      <Wrapper className="page section section-center">
        <img src={aboutImg} alt="nice desk" />
        <article>
          <div className="title">
            <h2>我們的故事...</h2>
            <div className="underline"></div>
          </div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum harum,
            quam libero perferendis, maiores corrupti eligendi iusto voluptas,
            fugiat in molestiae error rem. Vel ducimus mollitia consectetur vero
            harum natus explicabo, est dolor aliquam nemo fugit alias! Iure ab
            iusto amet nostrum accusantium repudiandae quis accusamus deleniti
            consequatur maiores, sapiente debitis fugit neque recusandae ipsum
            natus cupiditate ullam? Doloremque aliquam facere earum impedit
            modi, consectetur autem maxime necessitatibus voluptas voluptate a
            eos praesentium nihil repellendus dolore odio iusto itaque
            inventore! Ullam id error sint, natus esse tenetur porro ex. Fugiat
            ratione doloremque necessitatibus enim error porro maxime quos
            praesentium assumenda.
          </p>
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
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`
export default AboutPage
