logo = '''
                         ___________
                         \         /
                          )_______(
                          |"""""""|_.-._,.---------.,_.-._
                          |       | | |               | | ''-.
                          |       |_| |_             _| |_..-'
                          |_______| '-' `'---------'` '-'
                          )"""""""(
                         /_________\\
                       .-------------.
                      /_______________\\
'''

print(logo)

from os import system

def clear():
    system('cls||clear')

def find_highest_bidder(bidding_record):
    highest_bid = 0
    winner = ''
    for bidder in bidding_record:
        if bidding_record[bidder] > highest_bid:
            highest_bid = bidding_record[bidder]
            winner = bidder
    
    print(f"The winner is {winner} with a bid of ${highest_bid}")

bids = {}
bidding_finished = False

while not bidding_finished:
    name = input("What is your name? ")
    price = int(input("what is your bid? $"))
    bids[name] = price

    should_continue = input("Are there any other bidders? Type 'yes or 'no'. ")
    if should_continue == 'no':
        bidding_finished = True
        find_highest_bidder(bids)
    else:
        clear()