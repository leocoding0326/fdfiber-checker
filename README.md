# fdfiber-checker
Address checker for a Fiber company to show cab number and connections as well as mst

## Daily Task Checklist:

*2026-06-07*
[x] Reformat directories for better readiness and functionality.
[x] Write code block to extract address, cab number, cab connection & mst info from database array.

*2026-06-08*
[x] Write code block to push info into DOM display elements.
[x] Fix error handler to run on search button click
[x] Fix input validation to not to show a result unless there is something typed in  and to not display anything if there is no match.

*2026-06-09*
[x] Clean Code in search bar DOM
[x] Disable search button when result is displayed and re enable when user deletes characters

*2026-06-10*
[x] Handle console error when user click btn and there is not an input
[x] Make search button work when user hits Enter also


*2026-06-11*
[ ] Style error message to be under search bar
[ ] Fix issue were display results join to the input field(maybe use clamp to handle text responsivness)

*2026-06-12*
[ ] Add animation to the suggestion list after the user clicks on it.
[ ] Add animation to the display element when user do a search
[ ] Add animation of rotation to the search button for a few sec when user clicks on it before displaying results
[ ] Make suggestions fully rehusable between modules
[ ] Start Designing Log In page Html.




## Directory Tree Format
```
fdfiber-address-checker/
├── backend/
│   └── databases/
│       └── database.js
├── tests/
│   └── search-bar.test.js
├── frontend/
│   ├── styles/
│   │   ├── base.css
│   │   ├── login.css
│   │   └── main.css
│   ├── media/
│   │   └── img/
│   ├── src/
│   │   ├── dom/
│   │   │   ├── login-dom.js
│   │   │   └── search-bar-dom.js
│   │   └── modules/
│   │       └── search-bar.js
│   ├── main.html
│   └── login.html
├── node_modules/
├── package-lock.json
└── package.json
```
