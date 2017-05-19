# Lrn Lrn README

## Description
local web app for CFPDX students to do self-assesment and review weekly topics


## Models

### Order of operations????????

1. make a Card constructor // test in console
2. make a Set constructor 
    1. change card's comfyBool // set.sortCard( card, true ); // change card.comfy (test in console)
3. save to localStorage - maybe make a function to help save/load data // test in console
4. make a Session constructor
    1. begin a session
    2. display a card
    3. display all cards one after the other
    4. display all cards in random order // add pickRandom() method to Set


### User - tracks %comfy of sets/sessions, player data
- username : string
- # of total sessions : number
- sessions : array of session objects
- %comfy : number
- calcTotalComfy ~ func finds average %comfy

### Session - game of going through a set
- start ~ func to begin a session
- save ~ func to save progress of current session [stretchy]
- end ~ func to end session and display %comfy
- set : a set object
- comfyPile : array of cards
- unComfyPile : array of cards
- %comfy : number
- calcComfy ~ func finds %comfy of session
- displayCard ~ func shows a random card that hasn't been shown yet

### Sets - collections of cards (weekly)
- cards : array
- sortCard ~ func puts card in sessions piles
- randomCard ~ func selects a random card

### Cards - topic to evaluate
- content : string ('HTML headers')
- topic : string ('HTML') [stretchy]
- comfy : boolean

## User Stories

#### Starting 
- As a student I want select a weekly set that contains topics from the entire week so that I can review topics.
- As a student I want go to a website so that play Lrn Lrn.

#### Playing 
- As a student I want to review the same set and at the end I want to see the change in my %comfy.
- As a student I want to see a list of things I'm !comfy with in that set so that I know what to focus on learning.
- As a student when finished with set I want to see my %comfy with that set so that I know how comfy I am (%comfy vs !comfy).
- As a (lazy dev) student I want to use my arrow keys so that I don't have to leave my keyboard.
- As a student I want to "swipe left" so that I can indicate I'm !comfy with that topic.
- As a student I want to "swipe right" so that I can indicate I'm comfy with that topic.
- As a student I want to see a random topic card so that I can self-evaluate.




#### Streeetch
- As a student I want see what classes are available so that I choose which one I want to review.
- As a student I want select a class so that I can see their weekly sets.
- As a student  when finished with set I want to see my % comfy overall for that week so that I know how comfy I am.
- As a student I want to see subsets of topics within a week so I don't have to review all week's topics.
- As a student I want to review week 1 and 2's sets in the same session so that I don't have to go to two places.

#### Obviously Stretch
- As a student I want to see trends in topics I'm !comfy with so I can focus on them.
- As a student I want custom sets based on !comfy things so I can become comfy with them.
- As a student I want to visit a progress dashboard so that I can see all my data.