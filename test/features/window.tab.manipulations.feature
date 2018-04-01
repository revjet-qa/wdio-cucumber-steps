@Fast
@Window
@Tab

Feature: Window/tab
  In order to check window/tab manipulation
  As a developer
  I want to open/close window/tab and check that it works properly 

  Scenario: "I open new window" step should open new empty tab
    Given I open "http://localhost:9000/new-page.html"
    Then txtNewHeader from main page should be present
    When I open new window
    Then div from main page should not be present
    And I close current tab

  Scenario: "I close current tab" step should close recently opened tab
    Given I open "http://localhost:9000"    
    When I open new window
    When I close current tab
    Then txtHeader from main page should be present
