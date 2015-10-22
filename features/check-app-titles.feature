Feature: verify browser title of application pages


#-----------------
#Example-1     -  Executing a single scenario
#-----------------


  Scenario: check to see the title of Google.com
    Given a web browser
    When I open "http://google.com"
    Then I expect the title to be "Google"


#-----------------
#Example-2  -  Executing a single scenario with multiple data inputs
#-----------------


  Scenario Outline: check to see the title of the given example web pages

    Given a web browser
    When I open "<URL>"
    Then I expect the title to be "<Title>"

    Examples:
      | URL               | Title                                                                               |
      | http://amazon.com | Amazon.com: Online Shopping for Electronics, Apparel, Computers, Books, DVDs & more |
      | http://yahoo.com  | Yahoo                                                                               |
      | http://ssa.gov    | The United States Social Security Administration                                    |