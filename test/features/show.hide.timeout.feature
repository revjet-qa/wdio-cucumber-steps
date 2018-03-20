@Fast

Feature: Present / Not present
  In order to check steps with appearing/disappearing elements
  As a developer
  I want to check that certain value is present and not present after time

  Scenario: Check that certain element is present and not present after time
    Given I open "http://localhost:9000"
    And divTimeout from main page should be present
    When I wait "5000" ms
    Then divTimeout from main page should not be present

  Scenario: I wait step should wait for specified amount of milliseconds
    Given I open "http://localhost:9000"
    Then txtHeader from main page should be present
    Then divTimeout from main page should be present
    When I wait "5000" ms
    Then divTimeout from main page should not be present
    Then txtHeader from main page should be present
    Then I wait txtTimeout from values dictionary ms
    Then divTimeout from main page should not be present
    Then txtHeader from main page should be present

  Scenario: I click step should click on the element
    Given I open "http://localhost:9000"
    Then I click txtHeader from main page
