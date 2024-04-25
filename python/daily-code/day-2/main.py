# num = 45454
# float_num = 5885.44
# num2 = 8_787_666

# flag = False

# print("Hello"[0])

# print(type(num))

# print("converting number to string " + str(num))

# a = float(100)
# b = int("1")
# c = round(3.5555555, 2)
# d = 8 // 3
# print(f"display numbers {a}, {b}, {c}, {d}")

print("Welcome to the tip calculator!")
bill = float(input("What was the total bill? $"))
tip = int(input("How much tip would you like to give? 10, 12 or 15? "))
people = int(input("How many people to split the bill? "))
bill_with_tip = tip / 100 * bill + bill
bill_per_person = round(bill_with_tip / people, 2)
final_amount = "{:.2f}".format(bill_per_person)
print(f"Each person should pay: ${final_amount}")