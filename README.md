# Overview

This application will randomily select a theme from a list of known themes. Once the list is exhausted, it will reset the list and continue randomily selecting from the list.

## Generate Theme Data

Create a JSON file that contains a list of objects with the following properties:

* name - The name of the theme.
* description - A more detailed description of the theme if the name is not enough of an explanation.
* suggestions - A list of characters that quality for use under the theme.

Then place the file in the following directory: ``src/data/example.json``

If the file is located somewhere else or has a different file name, please update the following line with those details in the ``src/components/page/Home.js``:

        import data from '../../data/example.json';


### Example Theme List

See here for an example of a theme list:

        [
            {
                "name": "Example Theme A",
                "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in posuere tellus. Vestibulum at velit ante.",
                "suggestions": [
                    "Character 1"
                ]
            },
            {
                "name": "Example Theme B",
                "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                "suggestions": [
                    "Character 2",
                    "Character 3"
                ]
            },
            {
                "name": "Example Theme C",
                "description": "Sed vestibulum orci ac ex finibus vulputate. Nunc tincidunt est mi, a interdum enim tempor et.",
                "suggestions": [
                    "Character 1",
                    "Character 3",
                    "Character 4"
                ]
            }
        ]


## Start

1. Execute the following command in the main directory

        npm start

2. Open a browser and navigate to the following url

        localhost:3000

## Packages Used

React: 

* react, 
* react-dom, 
* react-router, 
* react-router-dom, 
* react-scripts (including peer dependency of typescript)

React Localization: 

* react-intl

React Meta Tags:

* react-meta-tags

SASS:

* sass (including peer dependency of node-sass)