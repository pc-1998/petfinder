# petfinder
A single-page application (SPA) that helps people find pets to adopt!

**Overview**:
- Most of code within: ```App.js```, ```FetchData.js```, ```ValidationForm.js```
- To run the code, you need to obtain a token from https://www.petfinder.com/developers/, and assign it to ```const token``` in ```ValidationForm.js```

**What I did**:
- Implemented an input element for zip code that automatically validates the user input, disabling submission upon invalid input.
- Implemented three drop-down elements for animal type, breed and age respectively. The breed drop-down dynamically changes its available options based on user's choice for the animal type drop-down.
- Connected my SPA with the Petfinder API (https://www.petfinder.com/developers/v2/docs/#get-a-single-animal-type) so that I can pull data from their server, including animal types, breeds, age, pictures and detail links (which direct to the corresponding Petfinder webpage), etc.
- Managed to enforce the consistency between the displayed selections and the data shown (i.e. if you change the selections in the code, it will be correctly reflected in the data fetched).
- Added very simple aesthetic elements such as background colors.


**What I should have done better**:
- As you probably have noticed at first glance, I did not separate the two views. This was mainly due to not having enough time to clear up the dependencies.
- My approach to the dynamic drop-down is using a dictionary, which is possibly quite naive. I did not manage to pull breed data from Petfinder in real time based on the selected animal type.
- Although I did manage to enforce the consistency between the displayed selections and the data shown, I did not manage to make it change / rerender in real time when the user makes a selection on this page. 
- The aesthetic aspect can definitely be improved. I had to lower its priority to focus on self-learning React and fixing the backend logic.
- I did not have enough time to implement routing / redirection.

**Reflection**:

This is my first contact with React. I learned a lot during the past few days, especially about React funcion / class components, props, fetching, etc. It was a pity that I could not take more time out of finals week to learn more and finish this project better. But it gave me a good basic understanding of how React works, and I will definitely continue learning it.
