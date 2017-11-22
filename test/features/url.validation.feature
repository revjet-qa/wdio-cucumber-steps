@Fast
@URL

Feature: URL
  In order to check steps with URL
  As a developer
  I want to open URL and check that is a certain value

  Scenario: Check I write method
    Given I open "http://localhost:9000"
    Then "main"."txtHeader" should be present
