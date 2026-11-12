# Personal Portfolio — Endterm Project

Multi-page interactive website for the course **WEB Technologies 1 (Front End)**, Astana IT University.

**Author:** Asel Nurzhankyzy

## Pages

| Page | File | Content |
|---|---|---|
| Home | `index.html` | Hero, quick facts, featured work, achievement |
| Projects | `projects.html` | Project cards + Bootstrap accordion with details |
| About | `about.html` | About me, education, experience, skills, contact form |

## Technologies

HTML5, CSS3 (custom design system with CSS variables), Bootstrap 5.3 (grid, navbar, cards, accordion), JavaScript, jQuery 3.6.

## What is where

| Requirement | Implementation |
|---|---|
| Bootstrap grid | `container` / `row` / `col-*` in every page |
| Responsive | Bootstrap breakpoints + media queries in `css/style.css` |
| JavaScript | `js/script.js` — contact form validation, live character counter, time-based greeting, footer year |
| jQuery | `js/jquery.js` — `fadeIn`, `slideToggle` menu, `fadeIn/fadeOut` + `animate` (back-to-top) |
| Interactive component | Bootstrap accordion on `projects.html` |

## Run

Open `index.html` in a browser (internet is needed for Bootstrap, jQuery and Google Fonts CDN links).

## Structure

```
endterm/
├── index.html
├── projects.html
├── about.html
├── css/style.css
├── js/script.js
├── js/jquery.js
└── README.md
```

> The contact form is a front-end demo: it validates input but does not send emails.
