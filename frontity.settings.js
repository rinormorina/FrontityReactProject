const settings = {
  "name": "test",
  "state": {
    "frontity": {
      "url": "https://api.360kompakt.de",
      "title": "Test Frontity Blog",
      "description": "WordPress installation for Frontity development"
    }
  },
  "packages": [
    {
      "name": "@frontity/mars-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "Home",
              "/"
            ],
            [
              "Finanzen",
              "/category/finanzen/"
            ],
            [
              "Retch",
              "/category/recht/"
            ],
            [
              "Lifestyle",
              "/category/lifestyle/"
            ],
            [
              "Technologie",
              "/category/technologie/"
            ],
           
            [
              "Marketing",
              "/category/marketing/"
            ],
            [
              "Management",
              "/category/management"
            ]
          ],
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "https://api.360kompakt.de"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
