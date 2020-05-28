Feature: To search Make My Trip in google

@MMTGoogleSearchScenario
Scenario: Make My Trip Google Search
Given I am on "google" search page
When I type "Make My Trip"
Then I click on outline
When I click on search button
Then I click on first search result

#@MMTLoginScenario
#Scenario: Make My Trip login
#Then I click on login
#When I type username ""
#Then I click on continue
#Then I click on password
#When I type password ""
#Then I click on login button

#@MMTFlightSearchScenario
#Scenario: Make My Trip Flight Search
#When I click on from city
#When I type from city "Bangalore"
#When I type to city "Mumbai" 
#Then I click on search
