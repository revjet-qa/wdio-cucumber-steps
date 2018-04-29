@Fast
@Verifications

Feature: Match
  In order to check steps with verifications
  As a developer
  I want to verify certain values of the elements

  Scenario: "I wait for to match" step should verify that element contains certain phrase
    Given I open "http://localhost:9000/new-page.html"
    Then I wait for buttonLaunch from main page to match "Launch - Click to get text"

  Scenario: "attribute should contain" step should verify that element's attribute contains certain value
    Given I open "http://localhost:9000/new-page.html"
    Then buttonLaunch from main page attribute "style" should contain "border: 1px solid black;"
