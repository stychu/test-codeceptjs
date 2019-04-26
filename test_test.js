const { I, testPOPage } = inject();
Feature('TEST');

Scenario('test something', (I, testPOPage) => {
  I.canVisitGithub()
  testPOPage.google() // TODO DOESNT WORK
});

Scenario('test something 2', () => {
  I.canVisitGithub()
  testPOPage.google() // TODO DOESNT WORK
});
