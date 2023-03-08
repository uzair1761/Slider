import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
function App() {
  const [people,setpeople] =useState(data);
  const [index , setindex] =useState(0);

  console.log(people);
  useEffect(()=>{
    const lastSlide =people.length -1
    if (index < 0){
      setindex(lastSlide)
    }
    if(index > lastSlide){
setindex(0)
    }
  },[people,index])


  useEffect (()=>{
let slider=setInterval(()=>{
  setindex(index+1)
},[3000])
return () => clearInterval(slider);
  },[index])
  return <section className='section'>
    <div className='title'>  
    <h2>
    <span>/</span>
    review</h2>
    </div>
<div className='section-center'>
  
{people.map((person,personindex)=>{
const {id ,image ,title , name  ,quote} = person ;
let position ='nextSlide'
if (personindex === index) {
  position ='activeSlide'
}
if (personindex === index -1 || (index === 0  && personindex === people.length -1)) {
  position ='lastSlide'
}
return (
  <article key={id} className={position}>
<img src ={image}  alt={name} className='person-img'></img>
<h4>{name}</h4>
<p className='title'>{title}</p>
<p className='text'>{quote}</p>
<FaQuoteRight className='icon'/>


  </article>
)
})}
<button className='prev' onClick={()=>setindex(index-1)}><FiChevronLeft /></button>
<button className='next'  onClick={()=>setindex(index+1)}><FiChevronRight/></button>
</div>



  </section>;
}

export default App;
