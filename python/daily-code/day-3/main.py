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

treasure_art = '''
*******************************************************************************
          |                   |                  |                     |
 _________|________________.=""_;=.______________|_____________________|_______
|                   |  ,-"_,=""     `"=.|                  |
|___________________|__"=._o`"-._        `"=.______________|___________________
          |                `"=._o`"=._      _`"=._                     |
 _________|_____________________:=._o "=._."_.-="'"=.__________________|_______
|                   |    __.--" , ; `"=._o." ,-"""-._ ".   |
|___________________|_._"  ,. .` ` `` ,  `"-._"-._   ". '__|___________________
          |           |o`"=._` , "` `; .". ,  "-._"-._; ;              |
 _________|___________| ;`-.o`"=._; ." ` '`."|` . "-._ /_______________|_______
|                   | |o;    `"-.o`"=._``  '` " ,__.--o;   |
|___________________|_| ;     (#) `-.o `"=.`_.--"_o.-; ;___|___________________
____/______/______/___|o;._    "      `".o|o_.--"    ;o;____/______/______/____
/______/______/______/_"=._o--._        ; | ;        ; ;/______/______/______/_
____/______/______/______/__"=._o--._   ;o|o;     _._;o;____/______/______/____
/______/______/______/______/____"=._o._; | ;_.--"o.--"_/______/______/______/_
____/______/______/______/______/_____"=.o|o_.--""___/______/______/______/____
/______/______/______/______/______/______/______/______/______/______/______/_
*******************************************************************************
'''

print(treasure_art)
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