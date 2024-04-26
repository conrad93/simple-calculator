# import random
# import my_module

# print(my_module.pi)

# random_integer = random.randint(1, 10)
# random_float = random.random() * 5

# print(random_float)

# states_of_america = ["Delaware", "Pennsylvania", "Texas", "California", "Alaska", "Florida", "New York", "Hawaii"]

# print(states_of_america[0])
# print(states_of_america[-1])

# states_of_america.append("New Jersey")
# states_of_america.extend(["New Mexico", "New Hampshire"])

import random
choices = ["Rock", "Paper", "Scissors"]
winning_cases = {
    "Rock": "Scissors",
    "Scissors": "Paper",
    "Paper": "Rock"
}

user_choice_index = int(input("What do you choose? Type 0 for Rock, 1 for Paper, 2 for Scissors.\n"))

if user_choice_index >= 0 and user_choice_index <= 2:
    random_choice = random.randint(0, 2)
    computer_choice = choices[random_choice]
    user_choice = choices[user_choice_index]

    print(f"You chose: {user_choice}")
    print(f"Computer chose: {computer_choice}")

    if user_choice == computer_choice:
        print("It's a draw")
    elif winning_cases[user_choice] == computer_choice:
        print("You win!")
    else:
        print("You lose!")
else:
    print("Invalid choice, You lose!")