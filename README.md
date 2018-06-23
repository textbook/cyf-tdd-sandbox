CYF TDD
=======

If you click on the "Show Tests" button at the top right of the editor window,
you should see a test result summary with a single failing test. Find it and fix
it!

Controlling which tests run
---------------------------

Note the use of `describe.only(...)` to run (sometimes called *"focus"*) a
single test - what happens when you change that to just `describe(...)`?

Look in `refactoring.test.js` - only one of those tests is currently running.
Make both tests run, then fix the code accordingly.

`describe` and `each` both support `.only` and `.skip` to control which tests
you want to run. This makes it easier to work on a single part of your codebase.
These methods are listed in [the Jest API documentation][1]. Practice using them
now to get particular combinations of tests to execute.

  [1]: https://facebook.github.io/jest/docs/en/api.html
