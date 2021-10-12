import React from 'react'
import { NavLink } from 'react-router-dom'
import './LandingPage.css'

export default function LandingPage() {

    return (
        <div className='principal'>
            
            <NavLink to='/recipe'>
            <button className='landingButton'>Continue</button>
            </NavLink>
        </div>
    )
}
