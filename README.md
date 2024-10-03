# JoBins Frontend Challenge

This project is an interactive web page developed as part of the JoBins frontend coding challenge. The page was designed based on a Figma file and built using **React.js** and **Tailwind CSS**, following the provided design and coding guidelines.

### [Live Demo](#) - url

## 1. Project Introduction

This project aims to replicate the given screen design into a functional and interactive web page using HTML, CSS, and JavaScript. I chose **React.js** as the JavaScript framework and **Vite** as the build tool for optimal performance and faster development. The design is implemented using **Tailwind CSS** to ensure consistency and responsiveness across different devices.

Additional packages and features include:

- **[Headless UI (React)](https://headlessui.com/)** for accessible, fully functional UI components.
- **[React Datepicker](https://reactdatepicker.com/)** for handling date selection in forms.
- **[React CountUp](https://www.npmjs.com/package/react-countup)** for number animations.
- **[Vite Plugin SVGR](https://www.npmjs.com/package/vite-plugin-svgr)** for importing and using SVGs as React components.
- CSS transitions and animations for enhanced interactivity.

## 2. Project Setup

To run this project locally, follow these steps:

### Installation:

1. Clone the repository:
   ```bash
   git clone https://github.com/manojthulung03/jobins-frontend-challenge.git
   ```
2. Navigate into the project directory:
   ```bash
   cd jobins-frontend-challenge
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:

## 3. Project Structure

```bash
jobins-frontend-challenge/
├── public/
│   └── logo.svg                          # Project logo
├── src/
│   ├── assets/
│   │   ├── icons/                        # Folder for SVG icons
│   │   └── images/                       # Folder for image assets
│   ├── components/
│   │   ├── common/                       # Commonly used components across multiple pages
│   │   ├── dashboardLayout/              # Components for the dashboard page cards
│   │   ├── layout/                       # Main layout components
│   │   ├── LoginForm.jsx                 # Login form component
│   │   └── PrivateRoute.jsx              # AuthGuard component to protect unauthorized access
│   ├── constant/                         # Folder for static data
│   ├── custom-styles/                    # Custom stylesheets
│   ├── hooks/
│   │   └── useAuth.js                    # Authentication hook
│   ├── lib/
│   │   ├── dataService.js                # Handles data fetcor dashboard order list
│   │   └── helper.js                     # Helper functions used across the project
│   ├── pages/                            # Main files for each page
│   ├── App.jsx                           # Main app component
│   ├── index.css                         # Global styles
│   └── main.jsx                          # Entry point for the React app
├── .gitignore                            # Git ignore file
├── .eslint.config.js                     # ESLint configuration
├── index.html                            # Main HTML file
├── package.json                          # Project dependencies and scripts
├── postcss.config.js                     # PostCSS configuration
├── tailwind.config.js                    # Tailwind CSS configuration
├── vite.config.js                        # Vite configuration
└── README.md                             # Project documentation
```

## 4. Features

- **Login and Logout Functions**: Allows authorized users to authenticate using local storage for session management.
- **Responsive Design**: The layout adjusts for different screen sizes, ensuring a seamless experience across devices.
- **Smooth Animation**: Includes smooth animations during page load and CSS transition on user interactions for better experience.
- **Headless UI Components**: Utilizes accessible, customizable UI elements without compromising user experience.
- **Date Picker**: Integrated with React Datepicker for seamless date selection in forms.
- **Table Data Filter and Search Function**: Allows users to filter and search through data tables efficiently.

## 5. Future Improvements

- **Comprehensive Animations**: Add more advanced animations for user interactions to improve the overall user experience.
- **Improved Accessibility**: Enhance accessibility features, such as keyboard navigation and ARIA labels, to accommodate all users.
- **Code Refactoring**: Continuously refactor components for better performance, maintainability, and reusability.
- **State Management**: Consider integrating a state management solution (like Redux or Context API) for better state handling across components.

## 6. Technologies Used

- **[React.js](https://react.dev/)**: Frontend framework for building user interfaces.
- **[Vite](https://vite.dev/)**: Fast build tool for development, providing a smooth development experience.
- **[Tailwind CSS](https://tailwindcss.com/)**: Utility-first CSS framework for rapid UI development.
- **[React CountUp](https://www.npmjs.com/package/react-countup)**: For implementing number animations.
- **[Headless UI (React)](https://headlessui.com/)**: For accessible and customizable UI components.
- **[React Datepicker](https://reactdatepicker.com/)**: For handling date selection in forms.
- **[Vite Plugin SVGR](https://www.npmjs.com/package/vite-plugin-svgr)**: For importing and using SVGs as React components.
