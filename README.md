# Aleksandar's Portfolio Hub

Build a modern, polished, professional portfolio website for a junior frontend developer.

The website must be written in English and built as a single-page React application.

The goal is to create a clean, modern, visually appealing developer portfolio that looks professional enough to use for job applications, internships, and junior frontend developer opportunities.

Use the following example profile:

Name: Aleksandar Perošević
Title: Junior Frontend Developer

Professional intro:
“I am a junior frontend developer focused on building responsive, user-friendly web applications using React, JavaScript, HTML and CSS. I enjoy turning ideas into clean and functional interfaces.”

IMPORTANT:

* Keep the application as a single-page website.
* Do not add unnecessary pages.
* Do not use a backend.
* Use sample data only.
* Make the code clean, organized, reusable and beginner-friendly.
* Use React components instead of writing everything inside one large component.
* The final result should feel custom and professional, not like a generic beginner portfolio template.

## 1. Header / Navigation

Create a modern sticky navigation bar.

Include:

* A simple logo using the initials “AP”
* Navigation links:

  * Home
  * About
  * Skills
  * Projects
  * Contact

Navigation behavior:

* The navbar should remain visible while scrolling.
* Clicking a navigation item should smoothly scroll to the corresponding section.
* Add subtle hover effects to navigation links.
* Clearly highlight the currently active section if possible.
* On mobile devices, replace the normal navigation with a clean hamburger menu.
* The mobile menu should open and close smoothly.

The navigation should visually match the rest of the dark portfolio design.

## 2. Hero Section

Create a visually strong hero section that immediately introduces the developer.

Display:

Aleksandar Perošević

Junior Frontend Developer

Use this introduction:

“I am a junior frontend developer focused on building responsive, user-friendly web applications using React, JavaScript, HTML and CSS. I enjoy turning ideas into clean and functional interfaces.”

Include two call-to-action buttons:

Primary button:
“View Projects”

Secondary button:
“Contact Me”

Button behavior:

* View Projects should smoothly scroll to the Projects section.
* Contact Me should smoothly scroll to the Contact section.
* Add modern hover and transition effects.

The hero should take up a large part of the first screen and have strong visual hierarchy.

Make the developer name visually prominent.

You may add a subtle frontend-development themed visual element on the right side of the hero, such as:

* abstract code-inspired shapes,
* subtle gradient graphics,
* minimal browser/window illustration,
* decorative glowing elements.

Do not use a generic stock photo.

## 3. About Me Section

Create an “About Me” section with a concise professional paragraph.

Use this copy or improve it slightly while preserving the meaning:

“I am a beginner frontend developer who enjoys learning how modern web applications are built. I am currently improving my JavaScript skills and learning React while building practical projects that help me understand real-world frontend development. My goal is to continue improving my skills, learn modern frontend technologies and create responsive, intuitive and visually clean user experiences.”

Keep the tone professional, natural and suitable for a junior developer applying for their first professional opportunities.

Add a small visual detail or card layout to make the section more visually interesting without making it overcrowded.

## 4. Skills Section

Create a modern skills section.

Display the following skills:

* HTML
* CSS
* JavaScript
* React
* Tailwind CSS
* Bootstrap 5
* Vue
* Angular
* Git
* GitHub
* Responsive Design
* Basic API Integration

Display skills using modern cards, pills or badges.

Where appropriate, include clean technology icons.

Organize the skills visually so the section feels structured.

For example, they can be grouped into categories such as:

Frontend:

* HTML
* CSS
* JavaScript
* React
* Vue
* Angular

Styling:

* Tailwind CSS
* Bootstrap 5
* Responsive Design

Tools:

* Git
* GitHub

Other:

* Basic API Integration

Do not use skill percentage bars such as “React 90%” because this is a junior developer portfolio.

Instead, focus on clean presentation and technology recognition.

Add subtle hover effects to each skill item.

## 5. Projects Section

Create a Projects section with three modern project cards.

Each card should include:

* Project name
* Short project description
* Technologies used
* Technology tags or badges
* A “View Project” button
* A visual project preview area or placeholder

### Project 1

Name:
eCommerce Product Page

Description:
A responsive product details page featuring a product image, price, description and Add to Cart functionality.

Technologies:
React, CSS, JavaScript

### Project 2

Name:
To Do App

Description:
A simple task management application where users can add new tasks, mark tasks as completed and delete tasks.

Technologies:
React, useState, CSS

### Project 3

Name:
Weather Dashboard

Description:
A responsive weather dashboard that displays weather information using sample API data.

Technologies:
JavaScript, API, Responsive Design

Project card design:

* Rounded corners
* Dark card backgrounds
* Subtle borders
* Soft shadow or glow
* Technology badges
* Smooth hover animation
* Slight card lift or border highlight on hover

The cards should look professional and consistent.

The “View Project” button can use placeholder links for now.

Do not create additional fake projects.

## 6. Contact Section

Create a clean Contact section.

Include the following contact information:

Email:
[ap@example.com](mailto:ap@example.com)

GitHub:
example-link.com

LinkedIn:
example-link.com

Display GitHub, LinkedIn and email using professional icons.

Also create a simple contact form containing:

* Name
* Email
* Message
* Send Message button

Since there is no backend:

* The form does not need to actually send emails.
* Add simple frontend validation.
* Prevent empty submissions.
* Show a simple success-style message or UI response after valid form submission.

Make it clear in the code that this is frontend-only sample functionality.

## 7. Footer

Add a minimal footer.

Include:

“© 2026 Aleksandar Perošević. All rights reserved.”

You may also include small GitHub and LinkedIn icons.

Keep the footer simple and consistent with the rest of the design.

## 8. Visual Design Direction

Use a modern dark-mode design.

The website should feel elegant, modern and professional rather than overly colorful.

Suggested visual direction:

Background:

* Very dark navy, charcoal or near-black

Cards:

* Slightly lighter dark surfaces

Accent colors:

* Blue
* Indigo
* Purple

Use soft gradients sparingly.

Use subtle glowing accents where appropriate.

Avoid:

* overly bright neon colors,
* excessive gradients,
* huge amounts of animation,
* cartoonish illustrations,
* cluttered layouts.

Use:

* rounded corners,
* subtle borders,
* modern shadows,
* generous spacing,
* strong typography hierarchy,
* clean section separation.

Typography should look modern and professional.

Use a clean sans-serif font such as Inter or a similar modern font.

## 9. Animations and Interactions

Add subtle animations that improve the experience without distracting from the content.

Examples:

* Fade-in or slide-up animations when sections enter the viewport
* Smooth hover transitions
* Card lift on hover
* Button hover effects
* Smooth navigation scrolling
* Subtle icon animations

Animations should feel polished and restrained.

Do not make the website feel like a flashy gaming website.

## 10. Responsive Design

The website must be fully responsive.

Support:

Desktop
Tablet
Mobile

Requirements:

* Navigation should collapse into a mobile menu.
* Project cards should stack appropriately on smaller screens.
* Hero content should reflow cleanly.
* Text should remain readable on all screen sizes.
* Buttons should remain easy to tap.
* Spacing should adapt properly.
* No horizontal overflow.
* Cards and sections must remain visually balanced.

Test the design mentally around:

* 1440px desktop
* 1024px tablet
* 768px tablet/mobile
* 375px mobile

## 11. Technical Requirements

Use React.

Structure the application into reusable components, for example:

* Navbar
* Hero
* About
* Skills
* Projects
* ProjectCard
* Contact
* Footer

Use clean React code.

Prefer functional components.

Use modern React patterns.

Use reusable arrays/data structures for skills and projects instead of repeating markup manually.

Keep the code beginner-friendly and easy to understand.

Avoid unnecessary complexity.

Do not introduce:

* backend,
* authentication,
* database,
* unnecessary state management libraries.

Use state only where useful, such as:

* mobile menu
* contact form
* simple UI interactions.

## 12. Icons

Use a professional icon library such as Lucide React, React Icons or another lightweight React-compatible icon library.

Use icons for:

* navigation where appropriate,
* skills,
* GitHub,
* LinkedIn,
* email,
* mobile menu,
* project links.

Do not use emojis as interface icons.

## 13. Accessibility and UX

Follow basic accessibility best practices:

* Good color contrast
* Semantic HTML
* Proper button elements
* Accessible navigation
* Form labels
* Keyboard-friendly interactions
* Visible hover and focus states
* Alt text for any meaningful imagery

## 14. Final Quality Expectations

The final website should feel like a realistic portfolio that a junior frontend developer could actually publish and send to recruiters.

Prioritize:

1. Clean visual design
2. Professional appearance
3. Responsive behavior
4. Clear navigation
5. Good spacing
6. Strong project presentation
7. Readable and maintainable code
8. Subtle modern interaction design

Do not overcomplicate the design.

Do not add additional sections unless they clearly improve the portfolio.

Do not invent professional work experience.

Do not invent companies, jobs, certifications or education.

Do not add fake statistics such as:

* “50+ projects”
* “5 years experience”
* “100 clients”

The developer should clearly appear junior, but the portfolio itself should look polished and professional.

Before considering the task complete, verify that:

* All five main sections exist: Hero, About Me, Skills, Projects, Contact.
* Navigation links scroll to the correct sections.
* Mobile navigation works.
* All three project cards are displayed.
* All requested skills are displayed.
* The website is responsive.
* There is no horizontal overflow.
* Contact form validation works on the frontend.
* Dark mode styling is consistent.
* Hover effects and animations are subtle and professional.
* Code is separated into reusable React components.
* No backend functionality has been added.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/f892dfb7-24bb-4e1f-af6d-75f96c298042).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
