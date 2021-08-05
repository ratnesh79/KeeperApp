import React from 'react'
const year=new Date().getFullYear();

function Footer(){
    return <>
      <footer className="footer">
        <div>
        <p>copyright © {year}</p>

        </div>
    </footer>
    </>
}
export default Footer;