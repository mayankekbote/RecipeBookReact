````md

#📦 Step 1: Install React Router

Run the following command in your project root:

npm install react-router-dom
````

---

## 🔁 Step 2: Wrap App with BrowserRouter (main.jsx)

Go to `main.jsx` and wrap your `<App />` component with `BrowserRouter`.

### main.jsx

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
```

This enables routing across your entire application.

---

## 🛣 Step 3: Configure Routes (App.jsx)

Import `Routes` and `Route`, then define your routes inside `<Routes>`.

### App.jsx

```jsx
import { Routes, Route } from "react-router-dom";
import Home from "./Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
```

* `path="/"` → Default route
* `element={<Home />}` → Component rendered on this route

---

## 🔗 Step 4: Create Navigation Component (Nav.jsx)

Create a new file `Nav.jsx` and use `Link` instead of `<a>` to prevent page reloads.

### Nav.jsx

```jsx
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
    </nav>
  );
};

export default Nav;
```

* `to="/"` → Navigates to the home route
* `Link` → Client-side navigation (no full refresh)

---

## 📌 Optional: Use Nav in App.jsx

```jsx
import Nav from "./Nav";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}
```

---

## ✅ Summary

1. Install `react-router-dom`
2. Wrap `<App />` with `<BrowserRouter>`
3. Define routes using `<Routes>` and `<Route>`
4. Use `<Link>` for navigation
5. Avoid `<a>` tags for internal routing

Your routing setup is now production-ready and scalable.

