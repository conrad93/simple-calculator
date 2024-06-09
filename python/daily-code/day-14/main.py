from art import vs, logo
from game_data import data
from os import system
from random import choice

def clear():
    system('cls||clear')

def print_data(account, compare_name):
    name = account['name']
    desc = account['description']
    country = account['country']
    print(f"Compare {compare_name}: {name}, a {desc}, from {country}.")

def check_answer(_guess, count_a, count_b):
    if _guess == 'a':
        return count_a > count_b
    elif _guess == 'b':
        return count_b > count_a
    else:
        return False

def get_random_account():
    return choice(data)

def game():
    print(logo)
    score = 0
    game_should_continue = True
    account_a = get_random_account()
    account_b = get_random_account()

    while game_should_continue:
        account_a = account_b
        account_b = get_random_account()
        while account_a['name'] == account_b['name']:
            account_b = get_random_account()

        print_data(account_a, 'A')
        print(vs)
        print_data(account_b, 'B')

        guess = input("Who has more followers? Type 'A' or 'B': ").lower()
        is_correct = check_answer(guess, account_a['follower_count'], account_b['follower_count'])

        clear()
        print(logo)

        if is_correct:
            score += 1
            print(f"You're right! Current score: {score}.")
        else:
            game_should_continue = False
            print(f"Sorry, that's wrong. Final score: {score}.")

game()