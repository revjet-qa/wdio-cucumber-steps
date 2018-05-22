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

  Scenario: "attribute should not contain" step should verify that element's attribute does not contain certain value
    Given I open "http://localhost:9000/new-page.html"
    Then buttonLaunch from main page attribute "style" should not contain "border: 2px solid grey;"

  Scenario: Check that element has correct text
    Given I open "http://localhost:9000"
    Then txtHeader from main page has text "Header"
    Then divTimeout from main page has text "This div disappears after 5000 ms"
