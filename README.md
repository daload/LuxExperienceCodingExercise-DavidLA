# PremiereNight - LuxExperience Coding Exercise - David L.A.
**PremiereNight** is a 3-page application that allows users to check various movie categories (Now Playing, Popular, Top Rated) and manage a personal watchlist.

## Instructions to Run the App
### 1. Setup and Installation
1.  **Clone the Repository**
2.  **Install Dependencies:**
    ```bash
    # Using npm
    npm run i
    
    # Using Yarn
    yarn i
    ```

### 2. Environment Configuration
The application requires an API key to fetch movie data.
Run the following command to copy the example file
```bash
cp ./env/env.ts.example ./env/env.ts
```
The app uses TMDB API so you'll have to generate an API KEY and then modify API_KEY with your key in ./env/env.ts

### 3. Running the Application

To start the development server run:
```bash
# Using npm
npm run start

# Using yarn
yarn start
```

After that you can run the app by doing:
* For iOS
    ```bash
    # Using npm
    npm run ios

    # Using yarn
    yarn ios
    ```

* For Android
    ```bash
    # Using npm
    npm run android

    # Using yarn
    yarn android
    ```

## Architectural Decisions
**Component Structure**: I first separated the core infrastucture (common) from from the module specific (modules). Then inside each module we can find dedicated sections for: actions, components, containers, helpers, reducers, sagas, selectors and types. 

**State Management**: Regarding stage management I used redux and to store the app state, and the sagas to handle all the necesary logic before modifying the state. Redux Persist helped with persisting the watchlist across app restarts.

**API Handling**: Used `axios` for asynchronous data fetching inside the sagas.

**UI Responsivenes**: In order to scale all sizes, margins, etc to fit all screens, I used a library called react-native-size-matters which despite being a bit old (last update late 2023) it works fine.  

## Asumptions
I assumed that the API would return always all necesary data for populating screens and components, that includes posters or genres.