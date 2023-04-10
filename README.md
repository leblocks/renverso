# renverso
renverso is a simple logic game with basic support for lazy-eye coloring.

## Idea
The objective of the game is to make the whole game field match the color of its background by clicking on cells.

## Development
Lots of code was reused from my other project [lazy-eye-blocks](https://github.com/leblocks/lazy-eye-blocks) with
lazy eye training functionality.

### Useful commands
* `npm run start`: hot-reload development mode.
* `npm run test`: run tests.
* `npm build`: run linter, tests and build optimized version.

### Stack
There are development dependencies only, resulting bundle is a vanilla javascript
* _[parcel](https://parceljs.org/)_ bundler
* _[eslint](https://eslint.org/)_ linter
* _[mocha](https://mochajs.org/)_ and _[chai](https://www.chaijs.com/)_  testing and assertion frameworks

## Next steps
* Provide tutorial levels to make the objective of the game more clear. Currently, it is not clear what is expected.
* Adjust levels of difficulty
