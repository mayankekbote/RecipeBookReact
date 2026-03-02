# Recipe Management Application

A modern, interactive recipe management web application built with React and Vite. Browse, create, and manage your favorite recipes with an intuitive user interface and beautiful UI.

## Project Overview

This is a **Recipe Management Application** that demonstrates core React concepts including routing, state management with Context API, form handling, and responsive design. Users can:

- Browse a collection of recipes
- View detailed information about each recipe
- Create new recipes with a user-friendly form
- Navigate through different pages of the application
- Learn more about the project through the About page

## Technologies Used

### Frontend Framework & Build Tools

- **React** (v19.2.0) - JavaScript library for building user interfaces
- **Vite** (v7.2.4) - Modern bundler and development server
- **react-dom** (v19.2.0) - React package for working with the DOM

### Routing

- **React Router DOM** (v7.13.1) - Client-side routing for single-page applications

### Styling

- **Tailwind CSS** (v4.2.1) - Utility-first CSS framework
- **@tailwindcss/vite** (v4.2.1) - Vite plugin for Tailwind CSS

### State Management

- **React Context API** - For managing global recipe data across the application

### Form Handling

- **React Hook Form** (v7.71.2) - Flexible and efficient form validation library

### Utilities

- **nanoid** (v5.1.6) - Generating unique ID strings
- **React Toastify** (v11.0.5) - Toast notifications for user feedback

### Development Tools

- **ESLint** - Code quality and style checking
- **Vite React Plugin** - Optimized React support for Vite

## Project Structure

```
src/
├── components/          # Reusable React components
│   ├── Navbar.jsx      # Navigation bar
│   └── RecipeCard.jsx  # Recipe card component
├── pages/              # Page components for routing
│   ├── Home.jsx        # Home page
│   ├── Recipies.jsx    # Recipes listing page
│   ├── SingleReciepe.jsx # Individual recipe details
│   ├── Create.jsx      # Create new recipe page
│   └── About.jsx       # About page
├── context/            # React Context for state management
│   └── RecipeContext.jsx
├── Routes/             # Routing configuration
│   └── Mainroutes.jsx
├── App.jsx             # Main application component
├── main.jsx            # Application entry point
└── index.css           # Global styles
```

## Routes

The application includes the following routes:

| Route                   | Page          | Description                      |
| ----------------------- | ------------- | -------------------------------- |
| `/`                     | Home          | Landing page                     |
| `/recipies`             | Recipes       | Browse all recipes               |
| `/recipies/details/:id` | Single Recipe | View detailed recipe information |
| `/create-recipie`       | Create        | Create a new recipe              |
| `/about`                | About         | About the application            |

## Features

✨ **Key Features:**

- **Browse Recipes** - View all available recipes in a card layout
- **Recipe Details** - Click on any recipe to see full details
- **Create Recipes** - Add new recipes with title, description, instructions, chef name, and category
- **Responsive Design** - Works seamlessly on desktop and mobile devices
- **Context API** - Global state management for recipe data
- **Form Validation** - React Hook Form for robust form handling
- **Notifications** - Toast notifications for user feedback
- **Beautiful UI** - Gradient background and Tailwind CSS styling

## Installation & Setup

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

### Steps to Run Locally

1. **Clone or navigate to the project directory:**

   ```bash
   cd Day3-routing
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm run dev
   ```

4. **Open in browser:**
   - The application will typically run on `http://localhost:5173`
   - Check the terminal output for the exact URL

5. **Build for production:**

   ```bash
   npm run build
   ```

6. **Preview production build:**

   ```bash
   npm run preview
   ```

7. **Run linting:**
   ```bash
   npm run lint
   ```

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build the project for production
- `npm run lint` - Check code quality with ESLint
- `npm run preview` - Preview production build locally

## Learning Concepts

This project demonstrates:

- **React Fundamentals** - Components, JSX, and hooks
- **Routing** - Client-side routing with React Router DOM
- **Context API** - Global state management without Redux
- **Form Handling** - Form validation with React Hook Form
- **CSS Framework** - Styling with Tailwind CSS
- **Component Composition** - Building reusable UI components
- **Dynamic Routes** - Parameterized routes for single recipe pages

## Browser Support

The application works on all modern browsers that support ES6+ JavaScript.

## Future Enhancements

Potential improvements for the project:

- Add search and filter functionality
- Implement recipe ratings and reviews
- Add user authentication
- Include recipe images upload
- Add favorite/bookmark recipes feature
- Implement recipe sharing functionality
- Add recipe difficulty levels
- Include cooking time estimates

## Notes

- The application uses Tailwind CSS with a gradient background
- Initial recipe data is stored in RecipeContext
- Form submissions use React Hook Form for validation
- Unique IDs are generated using nanoid library

---

**Happy Cooking! 👨‍🍳**
