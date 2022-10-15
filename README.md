## NetNinja Next.js Tutorial

## Notes and key learning points

### Tutorial 2 - Pages & Routes

- folders are route paths
- `index.js` file is the root path in that folder
- e.g. pages/ninjas/test - this will display `test.js`
- pages/ninjas - this will display the `pages/ninjas/index.js` file

### Tutorial 4 - Linking between pages

- The 'Link' component adds the ability to do client-side navigation in the browser
- Different pages are loaded in via Javascript and not via new HTML requests to the server
- Results in a much quicker website experience when navigating through pages

#### Code splitting

- By default, Next automatically 'code splits' our application
- Only the Javasscript that's needed for the current page is served from the server
- Only when we navigate to another page will it serve the Javascript for that page
- Can see this on the 'network' tab in the dev tools
- Only served the Javascript code that we need for the initial request
- Each page has it's own Javascript bundle which only gets served when we navigate to that page for the first time
- When build Next app for production - pre-fetches code in the background that might be needed when a user clicks on a link from another page
- Does this by looking at the `Link` components on the current page
- Pre-fetches the code for any of the pages that the links navigate to
- When a user clicks a link the code is ready and waiting
- Very quick user experience

### Tutorial 5 - Creating a Layout component

- Can wrap the `<Component {...pageprops} />` component in `_app.js` with a Layout component
- This component renders the pages - wrap Layout around it
- Then get access to anything nested inside the Layout component
- Called the 'children' of the component
- Inside the Layout component get access to the 'children' prop - anything inside the `_app.js` Component - output the children inside the Layout component

### Tutorial 6 - Adding styles

- In the `_app.js` file import the `globals.css` file - everything has these styles applied
- For page specific styles can use 'css modules' - stylesheet for each page component
- Styles only apply to that specific page component - have own scoped styles
- E.g. `Home.module.css` imported into `pages/index.js` - styles for the home page
- NOTE - to use css modules must use 'pure' selectors - class selectors not element selectors
