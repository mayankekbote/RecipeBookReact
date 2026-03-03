import React, { createContext, useState, useEffect } from "react";

export const recipecontext = createContext(null);

const RecipeContext = (props) => {

  const defaultData = [{
    id: 1,
    image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/03/matar-paneer.jpg",
    title: "Paneer Butter Masala",
    chef: "Chef Mayank",
    description: "A rich and creamy North Indian curry made with paneer, butter, and aromatic spices.",
    instructions: "Heat butter, add onions and tomatoes, blend to smooth paste, add spices, cook paneer in gravy, garnish with cream",
    categories: "lunch"
  }];

  const [data, setData] = useState(() => {
    const storedRecipes = localStorage.getItem("recipes");
    return storedRecipes ? JSON.parse(storedRecipes) : defaultData;
  });

  
  useEffect(() => {
    localStorage.setItem("recipes", JSON.stringify(data));
  }, [data]);

  return (
    <recipecontext.Provider value={[data, setData]}>
      {props.children}
    </recipecontext.Provider>
  );
};

export default RecipeContext;