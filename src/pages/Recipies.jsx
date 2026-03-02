import React, { useContext } from 'react'
import { recipecontext } from '../context/RecipeContext'
import RecipeCard from '../components/RecipeCard';

const Recipies = () => {
  const [data, setData] = useContext(recipecontext)
  const recipeRender = data.map((recipe) => {
    return (
      <RecipeCard key={recipe.id} recipe={recipe} />
    )
  }
  );

  return (
    <div className='flex flex-wrap'>
      {data.length > 0 ? recipeRender : "No Recipe Found"}
    </div>
  )
}

export default Recipies
