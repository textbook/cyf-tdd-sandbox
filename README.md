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

Changing requirements
---------------------

Enable the test suite in `requirements.test.js`. There are two already passing,
have a look at the code that's already provided. Now enable the third, failing
test. This is a common situation - we have a new requirement for our code, which
worked fine under the previous requirements, but doesn't any more. Write code to
make this new test pass.

Now there's a fourth kind of message: we want to be able to send `'voicemail'`
messages, too. Write a new test to encapsulate this requirement, watch it fail,
then extend the code for the new case.

As you do both of the above steps, be thinking the following:

> How easy was it to change the code? If requirements changed again, how easy
> would it be to keep changing? How can I **lower the cost of change**?

TDD is not magic
----------------

I have found TDD to be a very useful technique, but it's never going to get rid
of all bugs. Its main weakness is that you can only be certain that the code
works for the cases you've actually tested, but there's a whole world of
possible inputs out there.

Take a look at the function in `wrong.js`. The requirement for this function is
to split up a customer's loan balance, the amount they owe the bank, into pounds
and pence so that they can be formatted separately on the page. It has multiple
passing tests, but still has a flaw. Run the tests, trace the function and see
if you can figure out what the problem is. Write new failing tests to ensure we
never make that mistake again when refactoring, and fix the code to pass them.

  [1]: https://facebook.github.io/jest/docs/en/api.html
