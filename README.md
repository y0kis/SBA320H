# SBA320H

CharacterList Comoponent
The CharacterList component allows users to search for and display information about characters from the “Rick and Morty” TV show. It fetches data from the Rick and Morty API based on user input.

Features
Search by Name:
Users can enter a character name in the search input.
Upon submitting the form, the component fetches data for the specified character.
If the character is found, it displays their name, image, species, and status.
If the character is not found, an error message is shown.

Default Character:
When the component mounts, it fetches data for the default character (Jerry Smith).
The default character’s information is displayed initially.

Loading State:
While fetching data, a loading message is displayed.

Navigation Component
This React component represents the navigation menu for the fan page dedicated to the animated series “Rick and Morty.”
The Nav component provides links to different sections of the fan page:

HomePage: Navigates to the homepage.
CharacterList: Navigates to a list of characters (using dynamic route parameters).
About: Navigates to the “About Us” section.


About Component
This React component represents the “About Us” section of a fan page dedicated to the popular animated series “Rick and Morty.”

Home Component
This React component represents the homepage of a fan page dedicated to the popular animated series “Rick and Morty.”
The HomePage component displays a welcoming message with an <h1> heading.
