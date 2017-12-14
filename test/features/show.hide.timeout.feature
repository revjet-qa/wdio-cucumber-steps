@Fast

Feature: Present / Not present
  In order to check steps with appearing/disappearing elements
  As a developer
  I want to check that certain value is present and not present after time

  Scenario: Check I write method
    Given I open "http://localhost:9000"
    Then txtHeader from main page should be present
    Then divTimeout from main page should be present
    When I wait "5000" ms
    Then divTimeout from main page should not be present
    Then txtHeader from main page should be present
