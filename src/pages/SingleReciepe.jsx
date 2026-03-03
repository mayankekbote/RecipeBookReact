import { useParams, useNavigate } from "react-router-dom";
import { recipecontext } from "../context/RecipeContext";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const SingleReciepe = () => {
  const [data, setData] = useContext(recipecontext);
  const navigate = useNavigate();
  const params = useParams();

  const recipe = data.find((rec) => rec.id == params.id);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      image: recipe?.image,
      title: recipe?.title,
      chef: recipe?.chef,
      description: recipe?.description,
      instructions: recipe?.instructions,
      categories: recipe?.categories,
    }
  });

 const submitHandler = (updatedRecipe) => {
  const updatedData = data.map((rec) =>
    rec.id === params.id ? { ...rec, ...updatedRecipe } : rec
  );

  
  localStorage.setItem("recipes", JSON.stringify(updatedData));

  setData(updatedData);
  toast.success("Recipe Updated ✅");
  navigate("/recipies");
};

  const deleteHandler = () => {
    const filteredData = data.filter((rec) => rec.id != params.id);
    localStorage.setItem("recipes", JSON.stringify(filteredData));
    setData(filteredData);
    toast.error("Recipe Deleted 🗑️");
    navigate("/recipies");
  };

  if (!recipe) {
    return <h1 className="text-white text-center mt-10">Recipe Not Found</h1>;
  }

  return (
    <div className="min-h-screen bg-gray-700 text-white flex justify-center gap-10 p-10">

      {/* LEFT SIDE */}
      <div className="w-1/2 p-4">
        <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
        <img
          src={recipe.image}
          alt={recipe.title}
          className="rounded-xl w-full object-cover"
        />
      </div>

      {/* RIGHT SIDE FORM */}
      <form
        onSubmit={handleSubmit(submitHandler)}
        className="w-1/2 flex flex-col gap-6"
      >

        {/* IMAGE */}
        <div>
          <input
            type="url"
            {...register("image", {
              required: "Image URL is required",
            })}
            placeholder="Enter image URL"
            className="bg-slate-600 text-white px-5 py-3 rounded-md w-full focus:outline-none focus:bg-slate-500 transition"
          />
          {errors.image && (
            <p className="text-red-400 text-sm mt-1">
              {errors.image.message}
            </p>
          )}
        </div>

        {/* TITLE */}
        <div>
          <input
            type="text"
            {...register("title", {
              required: "Title is required",
              minLength: {
                value: 3,
                message: "Minimum 3 characters required"
              }
            })}
            placeholder="Recipe Title"
            className="bg-slate-600 text-white px-5 py-3 rounded-md w-full focus:outline-none focus:bg-slate-500 transition"
          />
          {errors.title && (
            <p className="text-red-400 text-sm mt-1">
              {errors.title.message}
            </p>
          )}
        </div>

        {/* CHEF */}
        <div>
          <input
            type="text"
            {...register("chef", {
              required: "Chef name is required"
            })}
            placeholder="Chef Name"
            className="bg-slate-600 text-white px-5 py-3 rounded-md w-full focus:outline-none focus:bg-slate-500 transition"
          />
          {errors.chef && (
            <p className="text-red-400 text-sm mt-1">
              {errors.chef.message}
            </p>
          )}
        </div>

        {/* DESCRIPTION */}
        <div>
          <textarea
            rows="3"
            {...register("description", {
              required: "Description is required",
              minLength: {
                value: 10,
                message: "Minimum 10 characters required"
              }
            })}
            placeholder="Enter Recipe Description"
            className="bg-slate-600 text-white px-5 py-3 rounded-md w-full focus:outline-none focus:bg-slate-500 transition resize-none"
          />
          {errors.description && (
            <p className="text-red-400 text-sm mt-1">
              {errors.description.message}
            </p>
          )}
        </div>

        {/* INSTRUCTIONS */}
        <div>
          <textarea
            rows="3"
            {...register("instructions", {
              required: "Instructions are required"
            })}
            placeholder="Enter comma separated instructions"
            className="bg-slate-600 text-white px-5 py-3 rounded-md w-full focus:outline-none focus:bg-slate-500 transition resize-none"
          />
          {errors.instructions && (
            <p className="text-red-400 text-sm mt-1">
              {errors.instructions.message}
            </p>
          )}
        </div>

        {/* CATEGORY */}
        <div>
          <select
            {...register("categories", {
              required: "Please select a category"
            })}
            className="bg-slate-600 text-white px-5 py-3 rounded-md w-full focus:outline-none focus:bg-slate-500 transition"
          >
            <option value="">Select Category</option>
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
          </select>
          {errors.categories && (
            <p className="text-red-400 text-sm mt-1">
              {errors.categories.message}
            </p>
          )}
        </div>

        {/* BUTTONS */}
        <div className="flex gap-4 mt-6">
          <button
            type="submit"
            className="bg-gray-900 hover:bg-gray-800 text-white py-3 px-8 rounded-md transition"
          >
            Update Recipe
          </button>

          <button
            type="button"
            onClick={deleteHandler}
            className="bg-red-500 text-white py-3 px-8 rounded-md transition hover:bg-red-600"
          >
            Delete Recipe
          </button>
        </div>

      </form>
    </div>
  );
};

export default SingleReciepe;