# Jade Journey

**Jade Journey** is a modern, responsive web application built with [Next.js](https://nextjs.org/) that offers seamless navigation and user-friendly interfaces. This project leverages **CSS Modules** for scoped styling and adheres to best practices in accessibility and performance.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Development Server](#running-the-development-server)
  - [Building for Production](#building-for-production)
- [Project Structure](#project-structure)
- [Accessibility](#accessibility)
- [Linting and Formatting](#linting-and-formatting)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Demo

Experience Jade Journey in action by visiting our [live demo](https://your-deployment-url.com).

## Features

- **Responsive Design:** Optimized for all devices, ensuring a seamless user experience on mobile, tablet, and desktop.
- **About Us Page:** Learn more about Jade Journey and our mission.
- **Contact Page:** Get in touch with us through an accessible and user-friendly contact form.
- **Scoped Styling with CSS Modules:** Prevents style conflicts by scoping CSS to individual components.
- **Accessibility Compliance:** Adheres to [WCAG](https://www.w3.org/WAI/standards-guidelines/wcag/) guidelines to ensure the application is usable by everyone.
- **Optimized Fonts:** Utilizes `next/font` for efficient font loading and performance.
- **Iconography:** Incorporates [React Icons](https://react-icons.github.io/react-icons/) for scalable vector icons.

## Technologies Used

- [Next.js](https://nextjs.org/) - The React Framework for Production
- [React](https://reactjs.org/) - A JavaScript library for building user interfaces
- [CSS Modules](https://github.com/css-modules/css-modules) - Scoped CSS for components
- [React Icons](https://react-icons.github.io/react-icons/) - Popular icons in React projects
- [ESLint](https://eslint.org/) - Linting utility for JavaScript and JSX
- [Prettier](https://prettier.io/) - Code formatter

## Getting Started

Follow these instructions to set up and run Jade Journey locally on your machine.

### Prerequisites

Ensure you have the following installed:

- **Node.js** (v14 or later)
- **npm** (v6 or later) or **Yarn** (v1.22 or later)

### Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/your-username/jade-journey.git
   ```

2. **Navigate to the Project Directory:**

   ```bash
   cd jade-journey
   ```

3. **Install Dependencies:**

   ```bash
   npm install
   ```

   Or using Yarn:

   ```bash
   yarn install

   ```

   **Running the Development Server**
   Start the development server to view the application locally.
   Using npm:

   ```bash
   npm run dev

   ```

   Or using Yarn:

   ```bash
   yarn dev

   ```

Open http://localhost:3000 in your browser to see the application running.

**Building for Production**

To create an optimized production build:

Using npm:

```bash
npm run build
npm start

```

Or using Yarn:

```bash
yarn build
yarn start

```

**Project Structure**
Here's an overview of the project's directory structure:

```
jade-journey/
├── public/
│ ├── videos/
│ │ └── hero-background.mp4
│ ├── images/
│ │ └── logo.png
│ └── favicon.ico
├── src/
│ ├── app/
│ │ ├── contact/
│ │ │ ├── page.js
│ │ │ └── Contact.module.css
│ │ ├── about/
│ │ │ ├── page.js
│ │ │ └── About.module.css
│ │ ├── page.js
│ │ └── page.module.css
│ ├── components/
│ │ ├── Header.js
│ │ ├── Footer.js
│ │ └── ...other components
│ ├── styles/
│ │ └── globals.css
│ └── ...other directories
├── .eslintrc.json
├── .gitignore
├── package.json
├── README.md
└── ...other configuration files
```

## Accessibility

Jade Journey is committed to accessibility, ensuring that everyone, regardless of ability, can navigate and interact with the application effectively. We adhere to the [WCAG](https://www.w3.org/WAI/standards-guidelines/wcag/) guidelines to create an inclusive user experience.

**Key Accessibility Features:**

- **Proper Label Associations:** All form labels are correctly linked to their corresponding input controls using the `htmlFor` and `id` attributes. This ensures that screen readers can announce the label text when a user focuses on the input field.
- **Keyboard Navigability:** Interactive elements, such as buttons, links, and form controls, are accessible via keyboard navigation. This allows users who cannot use a mouse to navigate and interact with the application.
- **Semantic HTML:** We use semantic HTML elements like `header`, `nav`, `main`, `section`, and `article` to convey the meaning and structure of the content. This improves the experience for screen readers and other assistive technologies.
- **ARIA Attributes:** Where appropriate, we use ARIA attributes to provide additional information about interactive elements and their functionality. This enhances the understanding of the application for screen readers and other assistive technologies.

We continue to strive for ongoing improvement in accessibility. If you encounter any accessibility issues while using Jade Journey, please feel free to [contact us](#contact) to provide feedback.

## Linting and Formatting

Maintaining code quality is essential. Jade Journey uses ESLint for linting and Prettier for consistent code formatting.

**Running ESLint**

To run ESLint and automatically fix fixable issues:

```bash
npm run lint -- --fix

```

Or using Yarn:

```bash
yarn lint --fix

```

**ESLint Configuration**

Ensure that your .eslintrc.json includes the necessary plugins and rules, especially for accessibility:

```
{
"extends": [
"eslint:recommended",
"plugin:react/recommended",
"plugin:jsx-a11y/recommended",
"next/core-web-vitals"
],
"plugins": ["react", "jsx-a11y"],
"rules": {
// Your custom rules
}
}
```

## Deployment

Jade Journey can be effortlessly deployed using the Vercel Platform, the creators of Next.js.

**Deploying with Vercel**

- **Push Your Code to GitHub:**

  Ensure your project is pushed to a GitHub repository.

- **Import Project in Vercel:**
  - Go to the Vercel Dashboard.
  - Click on "New Project".
  - Select your GitHub repository.
  - Follow the prompts to configure and deploy your project.
- **Continuous Deployment:**
  Every push to your repository's main branch will trigger a new deployment, ensuring your live site is always up-to-date.

**Next.js Deployment Documentation**
For more detailed instructions, refer to the Next.js Deployment Documentation.

## Contributing

Contributions are welcome! If you'd like to contribute to Jade Journey, please follow these steps:

- Fork the Repository
- Create a New Branch

```bash
git checkout -b feature/YourFeatureName

```

- Commit Your Changes

```bash
git commit -m "Add some feature"

```

- Push to the Branch

```bash
git push origin feature/YourFeatureName

```

- Open a Pull Request
  Go to the repository on GitHub and open a pull request detailing your changes.

## License

This project is licensed under the MIT License.

## Contact

If you have any questions or feedback, feel free to reach out:

- Email: contact@jadejourney.com
- GitHub: @vukkt

Thank you for using Jade Journey! We hope you enjoy using our application as much as we enjoyed building it.
