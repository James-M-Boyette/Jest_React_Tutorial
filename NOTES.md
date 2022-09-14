# Notes from videods:

- Jest will fail if no files match the `.test.js` suffix (files that should have test scripting) or if no instructions exist in your `.test.js` file

- Jest actually does several things:
  - It runs tests for us
  - It gives us ability to write _assertions_ (therefor, it is an "assertion library")
  - "Mocks" / fakes functions / stubs (using fake data); useful for speeding up tests (without having to do a real API call), or breaking them up into smaller chunks
  - It provides "snapshots" -

## Terminology:

- "Testing Runner": something that runs your tests for you. You can tell your test runner to watch all changes, or to only run once (depending on whether you need to test frequently or before final deployment ... can also speed-up your flow if you elect to test less often)

- "Assertions": the various methods available in Jest ('toBeTruthy' etc)

- "Unit" vs "Integration" tests:
  - _Unit_: If your test only tests _one_ function, it is called a "unit" test.
  - _Integration_: If it tests _multiple_ functions - the explicitly-called function then calls another function (which maybe then calls a third function ... or a React component which calls other React components), that would be called an "integration" test. Integration tests allow you to see whether and how your code is working as a whole (collaboratively) as much as the success of any individual function.
