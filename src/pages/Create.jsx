import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { recipecontext } from "../context/RecipeContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const Create = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const [data, setData] = useContext(recipecontext);
  const navigate = useNavigate();
  const submitHandler = (recipe) => {

    recipe.id = nanoid();
    setData([...data, recipe]);
    reset();
    toast.success("New Recipe Added ✅")
    navigate('/recipies')
  };

  return (
    <div className="min-h-screen pt-20">
      <div className="flex">
        <div className="w-[40%] absolute pl-10 -mt-15">

          <h2 className="text-2xl font-semibold text-gray-100 mb-10">
            Create Recipe
          </h2>

          <form
            onSubmit={handleSubmit(submitHandler)}
            className="flex flex-col gap-6"
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

            <button
              type="submit"
              className="mt-6 bg-gray-900 hover:bg-gray-800 text-white py-3 px-8 rounded-md w-fit transition"
            >
              Save Recipe
            </button>

          </form>
        </div>

        <div className="w-[60%]" />
      </div>
    </div>
  );
};

export default Create;