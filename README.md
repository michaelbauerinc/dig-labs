# dig-labs

This is a demo project for DigLabs using React Native. The project will open to a homepage with brief instructions:

```bash
"Welcome to DoggoFinder! Swipe left and right to browse doggos. When you find one that you love, tap to go to their own personal page!"
```

The app makes a request to Dog Api (https://dog.ceo/dog-api/), populating a swipable image carousel with five random dog pictures. From there, a user may navigate to a route that is representative of the particular dog on a tap input.

## Running the app locally

### Install dependencies

Install expo:

```bash
npm install --global expo-cli
```

Navigate to the carousel directory within the repo and install remaining dependencies:

```bash
npm install
```

### Start the app

From the carousel directory:

```bash
expo start --web
```

Finally, open the inspector and change to mobile view. Enjoy the doggos!
