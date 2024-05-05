import random

EASY_LEVEL_TURNS = 10
HARD_LEVEL_TURNS = 5

def check_guess(_guess, _num, turns):
    if _guess == _num:
        print(f"You got it! The answer was {_num}.")
        turns = 0
    elif _guess > _num:
        print("Too high.")
    elif _guess < _num:
        print("Too low.")

    turns -= 1
    return turns

def set_difficulty():
    level_type = input("Choose a difficulty. Type 'easy' or 'hard': ").lower()
    if level_type == 'hard':
        return HARD_LEVEL_TURNS
    else:
        return EASY_LEVEL_TURNS

def game():
    print("I'm thinking of a number between 1 and 100.")
    num = random.randint(1, 100)

    num_guess = set_difficulty()

    while num_guess > 0:
        print(f"You have {num_guess} attempts remaining to guess the number.")
        user_guess = int(input("Make a guess: "))
        
        num_guess = check_guess(user_guess, num, num_guess)

        if num_guess == 0:
            print(f"You've run out of guesses, you lose. The answer was {num}.")
        elif user_guess != num:
            print("Guess again.")
        

print("Welcome to the Number Guessing Game!")
game()