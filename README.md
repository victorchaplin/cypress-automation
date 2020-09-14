# cypress-automation

https://docs.cypress.io/guides/overview/why-cypress.html#In-a-nutshell

## create cypress project
```npm init```

## install cypress dependency
```npm install cypress --save-dev```

## open cypress test runner
```npx cypress open```

## run tests in headless mode
```npx cypress run```

## run tests in chosen browser
```npx cypress run --browser chrome```

## enabling code completion
https://docs.cypress.io/guides/tooling/IDE-integration.html#Intelligent-Code-Completion

## cypress files and folders
- fixtures: stores test data
- integration: holds the tests
- plugins: cypress event listeners
- support: place to store helper functions
- videos: videos recorded from tests
- cypress.json: cypress configuration file

## cypress selectors
Cypress supports CSS selectors only
- by id: #idname
- by class: .classname
- using tag names:
  - tagname#idname
  - tagname.classname
  - tagname[attribute=value]
- using parent/child tags:
  - traverse from parent to child using space character in the format "form input"
- using Selector Playground from cypress test runner

## cypress assertions
https://docs.cypress.io/guides/references/assertions.html#Chai

## cypress API docs
https://docs.cypress.io/api/api/table-of-contents.html