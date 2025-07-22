# The Task

You are required to build a simple single page application built with

    React.js
    Custom Hooks
    Redux
    React Router
    PandaCSS

That allows the users to search the users or repositories or issues on GitHub. The results will be fetched from the GitHub API.

    GitHub Search API Docs



Add debounce (feel free to import from lodash). Make the API calls only if the user has typed 3 or more characters. This would ensure minimum API Calls are made and we do not reach the maximum call limit. Debounce should be implemented as a reusable custom hook, where we can pass into it our desired callback function and custom delay timing.
If the user changes the "Entity type" value in the dropdown and user has 3 or more characters in the input already, it should refresh the results.
If the user clears the input or types less than three characters, clear the results and show the empty screen.
The user can scroll down to see more results ( Infinite scrolling ) until the results are done. A custom hook for infinite scrolling should be designed. This custom hook should check whenever the last element is on screen and then the data should be updated accordingly.
User should be able to toggle between light and dark theme.

https://docs.github.com/en/rest/search?apiVersion=2022-11-28
