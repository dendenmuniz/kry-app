# Kry - Code Assignment

## Context

We want to collect information about a patient's symptoms and suggest an action for the
patient to take (for example, booking a digital appointment with one of our doctors).
To collect this information, we ask the patient a series of questions. Depending on the
answer to each question, a new question will be shown until we reach a conclusion about
what action to suggest to the patient.
For this, you can find a JSON file structured with questions, answers and outcomes.

## The assignment

Your assignment is to create a small React front-end application that runs the flow described
above.

● The application should read questions, answers and outcomes from the JSON you
can find above.

● The application should start with the first question in the list.

● The patient’s score starts at 0.

● Each question contains a list of possible answers (exactly 2 per question). Answers
have “id”, “label” (text to put on button) and “score” (a number to be added to the
current score for the patient).

### Requirements

● As a user, I can navigate the questionnaire in a UI. Mimic this design, or make up an
even nicer one.

● As a user, I can navigate back and forth in the questionnaire.

● As a user, after answering all the questions, I am presented with suggested actions
to take.

● As a user that has completed the questionnaire, I can restart the questionnaire and
take it again.

● As a user, I can visualise the progress of the questionnaire as I answer the
questions.

## Getting Started

Instructions to run a local copy for development and test pruposes.

To **run** the project **in the development mode**, follow the instructions below:

Download or clone the repository in your computer:

``
$ git clone https://github.com/dendenmuniz/kry-app.git
``

**In the repository folder:

* install project dependencies with

``
yarn install
``

* start the development server with

``
yarn start
``

* open http://localhost:3000 to view it in the browser.

To **run** the project **in the production mode**, use this command intstead:

``
yarn build
``

## Dependencies & Tools Used

* As a project generated with [create-react-app](https://create-react-app.dev/), it includes React and ReactDOM as dependencies. It also includes a set of scripts used by Create React App as a development dependency.
* *[Ajv Json shema validatior](https://github.com/ajv-validator/ajv)*

## DevDependencies

ESLint
Prettier

## Contact

**Denise Muniz - dendenmuniz@gmail.com**
