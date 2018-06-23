CYF TDD
=======

If you click on the "Show Tests" button at the top right of the editor window,
you should see a test result summary with a single failing test. Find it and fix
it!

Controlling which tests run
---------------------------

We tried out `test` last week, which describes a single named expectation of the
code we're working on. For more test structure, we can group these by nesting
them in a named `describe`.

Note the use of `describe.only(...)` to run (sometimes called *"focus"*) a
single test - what happens when you change that to just `describe(...)`?

Look in `controlling.test.js` - only one of those tests is currently running.
Make both tests run, then fix the code accordingly.

`describe` and `each` both support `.only` and `.skip` to control which tests
you want to run. This makes it easier to work on a single part of your codebase.
These methods are listed in [the Jest API documentation][1]. Practice using them
now to get particular combinations of tests to execute.

Debugging
---------

Good test coverage makes it much easier to figure out what went wrong in your
function if a subsequent change breaks it. There's a failing test in
`debugging.test.js`; get the test running, then fix the code so that it passes.

Refactoring
-----------

Having passing tests allows you to refactor code with the confidence that it
will continue to work correctly afterwards. `refactoring.js` contains some code
that works, but has numerous problems. Get the test for it running, add a few
more as you figure out what the code is doing, then *keep them all passing* as
you refactor the code.

  [1]: https://facebook.github.io/jest/docs/en/api.html
