@Fast
@URL

Feature: URL
  In order to check steps with URL
  As a developer
  I want to perform different operations with URLs

  Scenario: "I open" step should open the specified page
    Given I open "http://localhost:9000"
    Then txtHeader from main page should be present
