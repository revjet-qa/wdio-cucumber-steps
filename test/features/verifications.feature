@Fast
@Verifications

Feature: Match
  In order to check steps with verifications
  As a developer
  I want to verify certain values of the elements

  Scenario: "I wait for to match" step should verify that element contains certain phrase
    Given I open "http://localhost:9000/new-page.html"
    Then I wait for buttonLaunch from main page to match "Launch - Click to get text"
