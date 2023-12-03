import React from "react";
export default function Footer(){
    return(<>
    <footer className="footer">
          <div className="footerl">
            <div className="footerleft">
              <span className="contentl" style={{ color: 'black' }}>THE</span>
              <span className="contentl" style={{ color: 'white', fontFamily: 'Montserrat' }}>SPACIOUS</span>
              <p className="contentp"> Transform your living spaces into dreamscapes with our exquisite furniture collections</p>
            </div>
          </div>
          <div className="footerright">
            <div className="footerr1">
              <span className="heads"> Site Navigation</span>
              <a href=""><p className="headc">go to home</p></a>
              <a href=""><p className="headc">services</p></a>
              <a href=""><p className="headc">portfolio</p></a>
              <a href=""><p className="headc">read blog</p></a>
              <a href=""><p className="headc">contact us</p></a>
              <a href=""><p className="headc">product support</p></a>
            </div>
            <div className="footerr1 mid">
              <span className="heads"> INFORMATION</span>
              <a href=""><p className="headc">USER LOGIN</p></a>
              <a href=""><p className="headc">CREATE NEW ACCOUNT</p></a>
              <a href=""><p className="headc">CHECKOUT</p></a>
              <a href=""><p className="headc">MY CART</p></a>
              <a href=""><p className="headc">OTHER INFORMATION</p></a>
            </div>
            <div className="footerr1">
              <span className="heads"> POLICIES & INFO</span>
              <a href=""><p className="headc">TERMS CONDITIONS</p></a>
              <a href=""><p className="headc">WEBSITE POLICY</p></a>
              <a href=""><p className="headc">POLICY FOR SELLERS</p></a>
              <a href=""><p className="headc">POLICY FOR BUYERS</p></a>
              <a href=""><p className="headc">SHOPPING & REFUND</p></a>
              <a href=""><p className="headc">WHOLESALE POLICY</p></a>
            </div>
          </div>
        </footer>
        <div className="footerlast">
          (c) 2023, all rights reserved, thespacious theme, designed by krish wason
        </div>
    </>)};