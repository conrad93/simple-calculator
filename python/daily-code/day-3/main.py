# num = 33
# if num > 100:
#     print("Number is greater than 100")
# elif num == 100:
#     print("Number is equal to 100")
# else:
#     print("Number is less than 100")

# a = 12
# if a > 10 and a < 20:
#     print("Number is between 10 and 20")
# elif a == 1 or a == 2:
#     print("Number is either 1 or 2")
# elif not a == 21:
#     print("Number is not equal to 21")

print("Welcome to Treasure Island.")
print("Your mission is to find the treasure.")

direction = input("You're at a crossroad. Where do you want to go? Type \"left\" or \"right\"\n").lower()

if direction == "left":
    action = input("You've come to a lake. There is an island in the middle of the lake. Type \"wait\" to wait for a boat or \"swim\" to swim across\n").lower()

    if action == "wait":
        door = input("You arrive at the island unharmed. There is a house with 3 doors. One red, one yellow and one blue. Which color do you choose?\n").lower()

        if door == "yellow":
            print("You found the treasure! You Win!")
        elif door == "red":
            print("It's a room full of fire. Game Over.")
        elif door == "blue":
            print("You enter a room of beasts. Game Over.")
        else:
            print("You choose a door that doesn't exist. Game Over.")
        
    else:
        print("You got attacked by an angry trout. Game Over.")

else:
    print("You fell into a hole. Game Over.")