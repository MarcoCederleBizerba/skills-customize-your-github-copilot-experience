# 📘 Assignment: Hangman Game Challenge

## 🎯 Objective

Build a playable Hangman game in Python. You will practice loops, conditionals, and string handling while creating game logic that responds to user input.

## 📝 Tasks

### 🛠️ Create The Game Setup

#### Description
Create the initial game state for Hangman, including a list of possible words, a randomly selected target word, and variables to track guessed letters and remaining attempts.

#### Requirements
Completed program should:

- Store at least 5 possible words in a list.
- Randomly choose one word as the hidden word.
- Initialize remaining attempts to a numeric value (for example, 6).
- Track guessed letters in a structure that prevents duplicates.


### 🛠️ Implement The Gameplay Loop

#### Description
Build the main loop where the player enters one letter at a time, sees progress after each guess, and wins or loses based on their choices.

#### Requirements
Completed program should:

- Ask the player for a single-letter guess each turn.
- Show the current word progress using underscores for missing letters.
- Decrease attempts only for incorrect new guesses.
- End with a win message when all letters are revealed.
- End with a lose message when attempts reach zero and display the hidden word.
