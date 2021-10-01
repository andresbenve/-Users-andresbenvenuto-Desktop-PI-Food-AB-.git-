import React from 'react'
import { NavLink } from 'react-router-dom'

export default function LandingPage() {

    return (
        <div>
            <h1> soy la página de recibimiento</h1>
            <NavLink to='/recipe'>
            <button>NEXT</button>
            </NavLink>
        </div>
    )
}
