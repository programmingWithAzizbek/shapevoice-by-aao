import React from "react";
import "./App.css";

function App() {
  return (
    <>
      <header className="header">
        <img
          className="background-image"
          src="../src/assets/images/header-color-image.svg"
          alt="Background color Image"
        />
        <img
          className="box-shadow-image1"
          src="../src/assets/images/box-shadow-image1.svg"
          alt="Box Shadow Image"
        />
        <img
          className="box-shadow-image2"
          src="../src/assets/images/box-shadow-image2.svg"
          alt="Box Shadow Image"
        />
        <div className="container header__inner">
          <div className="header__section--top">
            <div className="header__top--left">
              <a className="header__link--logo" href="#">
                SHAPEVOICE
              </a>
            </div>
            <nav className="menu header__menu">
              <ul className="menu__list">
                <li className="menu__item menu__item--one">
                  <a className="menu__link menu__link--one" href="#">
                    Product
                  </a>
                  <img
                    src="../src/assets/images/dropdown-icon.svg"
                    alt="DropDown icon"
                  />
                </li>
                <li className="menu__item menu__item--two">
                  <a className="menu__link menu__link--two" href="#">
                    Template
                  </a>
                  <img
                    src="../src/assets/images/dropdown-icon.svg"
                    alt="DropDown icon"
                  />
                </li>
                <li className="menu__item menu__item--three">
                  <a className="menu__link menu__link--three" href="#">
                    Blog
                  </a>
                </li>
                <li className="menu__item menu__item--four">
                  <a className="menu__link menu__link--four" href="#">
                    Pricing
                  </a>
                </li>
              </ul>
            </nav>
            <div className="header__top--right">
              <a className="sign-in" href="#">
                Sign In
              </a>
              <a className="sign-up" href="#">
                Start Free
              </a>
            </div>
          </div>
          {/* Header Section Bottom */}
          <div className="header__section--bottom">
            <div className="header__bottom--left">
              <h1 className="primary__title">
                Managing business payments has never been easier
              </h1>
              <p className="primary__text">
                Yet bed any for travelling assistance indulgence unpleasing. Not
                thoughts all exercise blessing. Indulgence way everything.
              </p>
              <div className="primary__buttons">
                <button>Our Process</button>
                <button>
                  <img
                    src="../src/assets/images/play-button-image.svg"
                    alt="Play Button Image"
                  />
                  <span>See How It Works</span>
                </button>
              </div>
            </div>
            <form id="form">
              <strong className="form__title">Get Started for Free</strong>
              <input type="email" id="inputEmail" placeholder="Email Address" />
              <input
                type="password"
                id="inputPassword"
                placeholder="Password"
              />
              <button id="formButton" type="button">
                Get Started
              </button>
            </form>
          </div>
        </div>
      </header>

      {/* Section Companies */}
      <section className="companies">
        <div className="container companies__inner">
          <strong className="companies__boldText">
            Trusted By Over 100+ Startups and freelance business
          </strong>
          <div className="companies__wrapper">
            <a href="https://www.oracle.com/" target="_blank">
              <img src="../src/assets/images/company-1.svg" alt="Oracle Logo" />
            </a>
            <a href="https://morpheusdata.com/" target="_blank">
              <img
                src="../src/assets/images/company-2.svg"
                alt="Morpheus Logo"
              />
            </a>
            <a href="https://www.samsung.com/us/" target="_blank">
              <img
                src="../src/assets/images/company-3.svg"
                alt="Samsung Logo"
              />
            </a>
            <a href="https://monday.com/" target="_blank">
              <img src="../src/assets/images/company-4.svg" alt="Monday Logo" />
            </a>
            <a href="https://segment.com/" target="_blank">
              <img
                src="../src/assets/images/company-5.svg"
                alt="Segment Logo"
              />
            </a>
          </div>
        </div>
      </section>

      {/* Section About Info */}
      <section className="aboutInfo">
        <div className="container aboutInfo__inner">
          <h2>Believing neglected so so allowance</h2>
          <p>
            We so opinion friends me message as delight. Whole front do of plate
            heard oh ought. His defective nor convinced residence own.
          </p>
          <button>We so opinion friends me message as delight.</button>
        </div>
      </section>

      {/* Section Process */}
      <section className="process">
        <div className="container process__inner">
          <div className="process__card process__card1">
            <div>
              <img src="../src/assets/images/lamp-icon.svg" alt="Lamp Icon" />
            </div>
            <strong>Led Ask Possible Mistress</strong>
            <p>
              Connection has put impossible own apartments boisterous. At
              jointure ladyship an insisted so humanity he. Friendly bachelor
              entrance to on by.
            </p>
          </div>
          <div className="process__card process__card2">
            <div>
              <img
                src="../src/assets/images/pen-and-line-icon.svg"
                alt="Pen and Line Icon"
              />
            </div>
            <strong>Elegance Eat Likewise</strong>
            <p>
              From they fine john he give of rich he. They age and draw mrs
              like. Improving end distrusts may instantly was household
              applauded incommode.
            </p>
          </div>
          <div className="process__card process__card3">
            <div>
              <img src="../src/assets/images/print-icon.svg" alt="Print Icon" />
            </div>
            <strong>Message Oram Nothing</strong>
            <p>
              Why kept very ever home mrs. Considered sympathize ten uncommonly
              occasional assistance sufficient not. Letter of on become he
              tended active enable to.
            </p>
          </div>
        </div>
      </section>

      {/* Section CTA BOX */}
      <section className="ctaBox">
        <div className="container ctaBox__inner">
          <h2>Track your crytpo portfolio on the best way possible</h2>
          <button>Check It Out</button>
        </div>
      </section>
    </>
  );
}

export default App;
