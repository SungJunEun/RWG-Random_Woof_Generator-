# Random Woof Generator
***new random woofs every day!***
---
## Summary
**Returns url of image randomly from subreddits sorted by `new`**
- This project started from modifying [fetchSamoyeds](https://github.com/antoinetardivel/fetchSamoyeds) into my taste
- Main purpose of the project is to get new fresh dog pictures, but I guess it can be used in any subreddits, not only dogs!
- [demo webiste](https://example.kkang60298.repl.co/)

*from 2021.08.18 - 19.*

---
## Tech
- Javascript
- node.js
---
## Prerequisites
- npm
      
      npm install node-fetch  
---      
## Key Features

- ### get URL of image
  - fetch JSON from the subreddits sorted by `new`  ([reddit API document](https://www.reddit.com/dev/api#GET_new))
  - `generateRandomInteger` function for random objects
  - `post_hint` attribute helped me to determine whether the post is only image or not

