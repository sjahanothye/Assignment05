# 🧱 DevStack — Interactive Developer Tech Stack Builder

![DevStack Banner](./public/assets/banner-stack.png)

> **DevStack** is an interactive, modern web application designed for developers and software engineers to discover, organize, and assemble their ideal software technology stacks with real-time feedback, smooth animations, and zero duplicate entries.

---

## 🚀 Live Demo & Repository
- **GitHub Repository**: [https://github.com/sjahanothye/Assignment05](https://github.com/sjahanothye/Assignment05)
- **Live Deployment URL**: [https://sjahanothye.github.io/Assignment05/](https://sjahanothye.github.io/Assignment05/)

---

## 🛠️ Technologies Used

- **Frontend Library**: [React.js](https://react.dev/) (v18+)
- **Build Tool**: [Vite](https://vite.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) & Vanilla CSS with CSS Variables
- **Icons**: [Lucide React](https://lucide.dev/) & DevIcons
- **Notifications**: [React-Toastify](https://fkhadra.github.io/react-toastify/)
- **Data Source**: Custom JSON API dataset (`public/technologies.json`)

---

## ✨ 3 Key Features of the Project

1. **⚡ Dynamic Stack Builder with Duplicate Prevention & Real-time State Sync**  
   Users can browse through curated technology cards and click "Add to Stack". The system automatically verifies that duplicate technologies cannot be added, disables the card's action button with a `"✓ Added to Stack"` confirmation, and allows individual item removal or one-click clearing with `"Remove All"`.

2. **🔔 Interactive React-Toastify Alerts & Instant Feedback**  
   Every user action triggers informative, modern dark-themed toast notifications — from successful additions (`🚀`), duplicate warnings (`⚠️`), single-item deletions (`🗑️`), to clearing the entire stack.

3. **🎨 Unified Brand Gradient Theme & Responsive 3-Column Architecture**  
   Crafted with a centralized gradient theme (`Orange` → `Pink` → `Violet`) defined in a single CSS variable. The layout is 100% responsive across mobile (with a collapsible hamburger navigation drawer), tablet (2 columns), and desktop (3-column tech grid + sticky sidebar).

---

## 📦 Project Setup & Installation

To run this project locally on your computer:

```bash
# 1. Clone the repository
git clone https://github.com/sjahanothye/Assignment05.git

# 2. Navigate to the project directory
cd Assignment05

# 3. Install all dependencies
npm install

# 4. Start the local development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the application.

---

## ❓ React Concepts & Interview Questions (Answers)

### 1. What is JSX, and why is it used in React?
**Answer:**  
JSX stands for **JavaScript XML**. It is a syntax extension for JavaScript that allows us to write HTML-like markup directly inside JavaScript files.  
We use JSX in React because:
- It makes UI code intuitive and readable by keeping component structure and logic in one place.
- React compiles JSX into regular JavaScript function calls (`React.createElement`) behind the scenes.
- It prevents XSS (Cross-Site Scripting) attacks automatically by escaping values before rendering.

---

### 2. What is the difference between props and state?
**Answer:**  
- **Props (Properties):** Props are read-only data passed from a parent component down to a child component. A child component cannot modify the props it receives.
- **State:** State is internal, mutable data managed directly within a component. When state changes using its updater function (e.g., `setCount`), React automatically re-renders the component to update the UI.

| Feature | Props | State |
|---|---|---|
| **Mutability** | Immutable (Read-only) | Mutable (via updater function) |
| **Origin** | Passed from parent component | Managed internally by component |
| **Control** | Controlled by parent | Controlled by the component itself |

---

### 3. What does the `useState` hook do, and where did you use it in this project?
**Answer:**  
The `useState` hook allows functional components in React to hold and manage local state. It returns an array with two elements: the current state value and a function to update that state.

**In this project, `useState` was used in multiple places:**
1. `selectedStack`: To store the list of technologies added by the user into the "Your Stack" sidebar.
2. `technologies`: To store the array of technology items loaded from `technologies.json`.
3. `isLoading`: To track whether data is currently loading to show the spinner.
4. `searchQuery` & `activeCategory`: To manage search input and category filter tabs.
5. `mobileMenuOpen`: To toggle the mobile navigation drawer.

---

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?
**Answer:**  
The `useEffect` hook lets us perform **side effects** in functional components, such as data fetching, subscribing to events, or manipulating the DOM.

**Why we needed it to load the JSON data:**  
Fetching external data using `fetch('/technologies.json')` is an asynchronous operation. If we put `fetch` directly in the component body, it would execute on every single render, causing an infinite loop. By wrapping the fetch call inside `useEffect` with an empty dependency array `[]`, React executes the data fetching exactly once when the component first mounts.

---

### 5. Why does every item in a `.map()` list need a unique `key` prop?
**Answer:**  
When rendering a list of items using `.map()`, React's virtual DOM reconciliation algorithm uses the `key` prop to identify which items have changed, been added, or been removed.  
- A unique key (like `tech.id`) allows React to efficiently update only the specific DOM elements that changed rather than re-rendering the entire list.
- Without unique keys, React shows a console warning and can experience unexpected UI bugs or performance degradation during list updates and deletions.

---

### 6. What is conditional rendering? Show one place you used it.
**Answer:**  
Conditional rendering is the practice of rendering different UI elements or components based on whether a specific condition or state is `true` or `false`.

**Where it is used in this project:**  
In `YourStack.jsx`, we use conditional rendering to show the empty message when no technologies are added, versus showing the selected items list and the "Remove All" button when `count > 0`:

```jsx
{count === 0 ? (
  <div className="empty-state">
    <p>No technologies added yet. Explore and add technologies!</p>
  </div>
) : (
  <div className="stack-items-list">
    {stack.map((item) => (
      <StackItem key={item.id} item={item} onRemove={onRemoveItem} />
    ))}
    <button onClick={onClearAll}>Remove All</button>
  </div>
)}
```

---

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
**Answer:**  
- **Parent to Child:** Data is passed down directly through **Props**. For example, `App.jsx` (parent) passes `technologies={technologies}` and `isAdded={...}` to `TechGrid` / `TechCard` (children).
- **Child to Parent:** The parent passes a **callback function** as a prop to the child. When an event happens in the child (e.g., clicking a button), the child invokes that callback function, passing data up to the parent.  
  *Example:* `App.jsx` passes `onAddToStack={handleAddToStack}` to `TechCard`. When the user clicks the button inside `TechCard`, it calls `onAddToStack(tech)`, sending the selected technology data back up to `App.jsx` to update state.

---

## 📄 License
This project is open source and available under the [MIT License](LICENSE).
