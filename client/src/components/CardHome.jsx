import React from 'react'
import { NavLink } from 'react-router-dom'


export default function CardHome({title,spoonacularScore,healthScore,image,dishTypes, dieta2, id}) {




    return (
        <div>
{title}
<p></p>        
<img src={image} alt="" />
<p></p>
{dieta2}
<p></p>
<NavLink to={'recipe/' + id}>
<h4>See More</h4>
</NavLink>    
<hr />
        </div>
    )
}
