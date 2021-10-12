import React from 'react'
import { NavLink } from 'react-router-dom'


export default function Card({title,spoonacularScore,healthScore,image,dishTypes, dieta2, id}) {
    return (
        <div>
<NavLink to={id}>
{title}
</NavLink>            
<p></p>
Score: {spoonacularScore}
<p></p>
Health Score: {healthScore}
<p></p>
<img src={image} alt="" />
<p></p>
{dishTypes}
<p></p>
{dieta2}
<hr />
        </div>
    )
}
