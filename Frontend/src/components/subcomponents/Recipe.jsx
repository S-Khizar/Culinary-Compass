import React from 'react'
import {Link} from 'react-router-dom'

const Recipe = ({recipes}) => {
  const options=[
    "Recipes & Menus",
    "Share Your Recipe",
    "Custom Meal Plan",
    "Create Grocery Store",
    "Cooking Trip & Tricks"
  ]
  return (
    <article className='flex flex-col gap-9 my-9'>
      <section className='flex gap-5 flex-wrap justify-between' >
        {
          options.map((element,index)=>{
            const bgColor = [
              "bg-orange-600",
              "bg-red-600",
              "bg-yellow-600",
              "bg-blue-400",
              "bg-green-600",
            ][index];
            return(
              <button className={`w-72 px-5 py-6 rounded-xl border-none text-xl font-semibold text-white  ${bgColor}`}  key={element}>{element}</button>
            )
          })
        }
      </section>
      <section className="grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-10">
          {
            recipes.slice(0,8).map((element,index)=>{
              return(
                <Card key={index} element={element}/>
              )
            })
          }
      </section>

      <section className="grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-10">
          {
            recipes.slice(8,16).map((element,index)=>{
              return(
                <Card key={index} element={element}/>
              )
            })
          }
      </section>
      <section className="grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-10">
          {
            recipes.slice(16).map((element,index)=>{
              return(
                <Card key={index} element={element}/>
              )
            })
          }
      </section>
      <h3>Recommended Recipes</h3>
    </article>
  )
}

export default Recipe

const Card = ({ element }) => {
  return (
    <Link to={`/recipe/${element.id}`} className="no-underline">
      <div className="flex flex-col items-start">
        <img src={element.image} alt={element.title} className="w-full h-[260px] rounded-lg mb-5" />
        <div className="ml-4">
          <h4 className="text-lg font-semibold text-black mb-2">{element.title}</h4>
          <h4 className="text-lg font-semibold text-orange-600">{element.cookingTime}</h4>
        </div>
      </div>
    </Link>
  );
};