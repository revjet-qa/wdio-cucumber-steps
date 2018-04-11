@Fast
@Scroll
@Move

Feature: Scroll / Move
  In order to check steps with scrolling and moving to the elements
  As a developer
  I want to check that scrolling and moving works properly

  Scenario: "I scroll element into view" step should scroll the element into the visible area of the browser window
    Given I open "http://localhost:9000/new-page.html"
    When I scroll blockScroll from main page element into view
    Then blockScrolledIntoView from main page should be present
