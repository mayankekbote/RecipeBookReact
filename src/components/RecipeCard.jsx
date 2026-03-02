import { Link } from "react-router-dom";


const RecipeCard = (props) => {
  const { id, image, title, chef, description, instructions, categories } = props.recipe;

  return (
    <div>
      <Link to={`/recipies/details/${id}`} className="hover:scale-105 block w-[23vw] rounded overflow-hidden shadow p-1 transition duration-200">
        <img src={image} className="mr-3 mb-3 w-full h-[20vh] object-cover block" alt="" width={200} px />
        <h1 className="mt-2 font-black px-2">{title}</h1>
        <small className="px-2 text-red-400">{chef}</small>
        <p className="px-2 pb-3">{description.slice(0, 100)}..<small className="text-blue-400">Read More...</small></p>
      </Link>
    </div>
  )
}

export default RecipeCard
