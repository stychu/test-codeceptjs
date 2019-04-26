const { I } = inject();

module.exports = {

  // insert your locators and methods here
  google() {
    console.log(I)
    I.amOnPage('https://google.com');
    I.see('Google');
  }
}
