import React from 'react'
import { useSelector } from 'react-redux';
import Card from './Card';

export default function Detail({ruta}) {
   const allrecipes = useSelector(state => state.allrecipes)
    
   return (
        <div>
            <h1>hola soy le Detail</h1>
     { 
     //allrecipes !== undefined ?
        allrecipes.map(e => {
            if(e.id == ruta){ // o podes hacer if(e.id === Number(ruta))
                return (
                <Card
                key={e.id}
                 id={e.id} //fix Mambo con el ID que llega tarde
                 title={e.title}
                 summary={e.summary}
                 spoonacularScore={e.spoonacularScore}
                 healthScore={e.healthScore}
                 image={e.image}
                 dishTypes={e.dishTypes}
                 dieta={e.dieta}
                 />)}})}</div>)}