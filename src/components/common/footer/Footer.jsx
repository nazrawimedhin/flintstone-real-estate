import React from "react"
import { footer } from "../../data/Data"
import "./footer.css"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container'>
          <div className='box'>
            <div className='logo'>
              <img src='../images/logo-white.png' alt='logo' />
              <h2>Do You Need Help With Anything?</h2>
              <p>Receive updates, Hot deals and discounts sent straignt in your inbox every month.</p>
              <div className='input flex'>
                <input type='text' placeholder='Email Address' />
                <button className='blue'>Subscribe</button>
              </div>
            </div>
          </div>

          {footer.map((val) => (
            <div className='box'>
              <h3>{val.title}</h3>
              <ul>
                {val.text.map((items) => (
                  <li> {items.list} </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
      <div className='legal'>
        <span>© 2022 Flintstone. Designed By Nazrawi.</span>
      </div>
    </>
  )
}

export default Footer
