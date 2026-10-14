# Banty Sagar — AI/ML Engineer Portfolio

A responsive personal portfolio website built with HTML5, CSS3, and vanilla JavaScript.

## Features

- Colorful, modern design with a light theme by default
- Light/dark theme toggle with saved preference
- Responsive navigation and mobile menu
- Hero, About, Skills, Experience, Projects, Education, Certifications, Resume, and Contact sections
- Three featured project cards
- CSS-based AI illustrations
- Scroll animations and back-to-top control
- Accessible focus states and reduced-motion support
- No framework, build tools, or backend required

## Project Structure

```text
Banty-AI-Portfolio/
├── index.html
├── README.md
├── css/
│   └── style.css
├── js/
│   └── script.js
└── assets/
    ├── images/
    ├── icons/
    └── BantySagarResume.pdf
```

## Run Locally in VS Code

1. Open the `MyPortfolio` folder in VS Code.
2. Confirm that `index.html`, `css/style.css`, and `js/script.js` are saved in the correct locations.
3. Install the **Live Server** extension if it is not already installed.
4. Open `index.html`.
5. Right-click inside the editor and select **Open with Live Server**.
6. The website should open in your browser, usually at `http://127.0.0.1:5500/`.

You do not need to install npm packages or run a backend server.

## Add Your Resume PDF

1. Locate your actual resume PDF, `BantySagarResume.pdf`.
2. Open the portfolio's `assets` folder.
3. Copy the PDF into that folder.
4. Confirm that the final path is:

   `assets/BantySagarResume.pdf`

The Download Resume button uses this relative URL:

`./assets/BantySagarResume.pdf`

The button will not work until the PDF exists at that location.

## Update Project Information

- **ATSLens:** The live project link is provided in the website.
- **Student Performance Prediction:** Currently labelled as a concept/in-progress project. Update the description when verified implementation details are available.
- **Customer Churn Prediction:** The displayed scores are the reported cross-validation and test results, not business-impact metrics.
- **More projects:** The GitHub button links to your GitHub profile.

## Customize the Website

- Change colors, spacing, layouts, and responsive breakpoints in `css/style.css`.
- Update section content and project details in `index.html`.
- Update navigation, theme behavior, and animations in `js/script.js`.

## Before Publishing

- Test all navigation links and buttons.
- Verify that the resume PDF opens or downloads.
- Confirm that GitHub, LinkedIn, and ATSLens open the correct pages.
- Check the site on a mobile screen.
- Review every project description for accuracy.
- Publish only verified project details and metrics.
