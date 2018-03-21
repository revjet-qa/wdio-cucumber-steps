@Fast
@Click

Feature: Click
  In order to check steps with clicking on the elements
  As a developer
  I want to check that clicking works properly

  Scenario: I click step should click on the element
    Given I open "http://localhost:9000/new-page.html"
    And checkboxTestUnchecked from main page should be present
    When I click checkboxTestUnchecked from main page
    Then checkboxTestChecked from main page should be present

  Scenario: I doubleclick step should double-click on the element
    Given I open "http://localhost:9000/new-page.html"
    And checkboxTestUnchecked from main page should be present
    When I doubleclick checkboxTest from main page
    Then checkboxTestUnchecked from main page should be present
