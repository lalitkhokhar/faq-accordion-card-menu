# Frontend Mentor - FAQ accordion card solution

This is a solution to the [FAQ accordion card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See hover states for all interactive elements on the page
- Hide/Show the answer to a question when the question is clicked

### Screenshot

#### Desktop
![](/images/Screenshot.png)

#### Mobile
![](/images/Screenshot-mobile.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Live Site](https://lalitkhokhar.github.io/faq-accordion-card-menu/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid
- CSS Flexbox
- CSS Animation
- Javascript


### What I learned

- Use of variables in CSS
- CSS Grid (first page designed using CSS grid only)
- Creating Animation using CSS

```css
@keyframes scaleUp {
    0% {
        transform: scale(0);
    }
    100% {
        transform: scale(1);
    }
}

.animation {
    animation: 0.5s ease-out 0s 1 scaleUp;
}
```

- Use of calc function to create variable margins and font size

```css
  font-size: calc(0.3vw + 1rem);
  margin-top: calc(100px - 2vh);
  ```

### Continued development

Improving layout on mobile device and resized desktop screen

### Useful resources

- [Wesbos CSS Grid tutorial](https://cssgrid.io/) - I learned CSS grid layout from Wes Bos CSS Grid tutorial

## Author

- Website - [Lalit](https://lalitkhokhar.github.io/CV)
- Frontend Mentor - [@lalitkhokhar](https://www.frontendmentor.io/profile/lalitkhokhar)
- Twitter - [@lalitkhokhar](https://www.twitter.com/lalitkhokhar)
