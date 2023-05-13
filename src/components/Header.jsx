import React from 'react'

import "./Header.css"

function Header() {
    const handleLogout = () => {
        // handle logout logic
      };
      
  return (
    <div className="header">
     <h1>Tresure Hunt</h1>
     <button onClick={handleLogout}>Logout</button>
      </div>
  )
}

export default Header