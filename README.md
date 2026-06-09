# fdfiber-checker
Address checker for a Fiber company to show cab number and connections as well as mst

## Daily Task Checklist:

*2026-06-07*
[x] Reformat directories for better readiness and functionality.
[x] Write code block to extract address, cab number, cab connection & mst info from database array.

*2026-06-08*
[x] Write code block to push info into DOM display elements.
[x] Fix error handler to run on search button click

*2026-06-09*
[ ] Fix input validation to not to show a result unless there is something typed in  and to not display anything if there is no match.
[ ] Add a clear button that clears results and Input for the user to start over.
[ ] Start Designing Log In page Html.

*2026-06-10*
[ ] Add animation to the suggestion list after the user clicks on it.
[ ] Add animation to the display element when user do a search
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
