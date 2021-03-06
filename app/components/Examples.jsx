import React, { Component } from 'react'
import { Link } from 'react-router'

let Examples = (props) => {
  return (
    <div>
      <h1 className='text-center page-title'>Examples</h1>
      <p>Here are a few example locations to try out:</p>
      <ol>
        <li>
          <Link to='/?location=Lubbock'>Lubbock, TX</Link>
        </li>
        <li>
          <Link to='/?location=Rio'>Rio, Brazil</Link>
        </li>
      </ol>
    </div>
  )
}

export default Examples
