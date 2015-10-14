Feature: verify browser title of application pages

  Scenario: check to see the title of Google.com
    Given a web browser
    When I open "google.com"
    Then I expect the title to be "Google"


#  Scenario Outline: check to see the title of the given example web pages
#
#    Given a web browser
#    When I open "<URL>"
#    Then I expect the title to be "<Title>"
#
#    Examples:
#      | URL        | title                       |
#      | amazon.com | Amazon.com: Online Shopping |
#      | yahoo.com  | Yahoo                       |
#      | ssa.gov    | The United States           |
