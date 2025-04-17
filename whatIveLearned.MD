# Concepts learned from project

## Structure

    - The use of "features" folder system

    - A folder for functionality and behavior of app, instead of by pages / components
    - Each has the following structure:
        - components folder
        - pages folder
        - hooks.ts 
        - types.ts
        - utils.ts

## Data Fetching

    - Tools used:
        - Zod
        - Tanstack Query (API use)
        - Zustand (for local or Ui state changes; NOT for API use)
            - ex: themeStore
    - Workflow:
        - Types.ts files (using Zod):
            - Indivdual data fetched -> Pokemon ability types, PokemonStat types
            - Result types -> Data we get back from the API response
            - Response schema types -> response we get back from using a specific tanstack query hook
        - !!! Start with created zod object for the types, and then we infer a type after to create the typescript with a single line of code. That type is what is used in the hooks

## Typeing structure

    - Before types were in a centralized location. This created redundency for me and was starting to blur.
    - We still have a "types" directory, with a "shared" folder inside.
        - These will be generic or commonly used types throughout the application that don't fit a specific feature
    - In each "feature" folder has a "types.ts" file that are specifically used by that feature.
