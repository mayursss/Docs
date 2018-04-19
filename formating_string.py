menu = "salaD, pAsta, sandWich, pizza, drinks, dessert, chOcolatE"
menu_ask = input("What you are looking in menu? ")
reply = menu_ask.lower() in menu.lower()
if reply is True:
    print(menu_ask, "is available in menu")
else:
    answer = input(
        menu_ask
        + " is not available in menu, would you like to add it to menu? Y/N ")
    if answer.lower() == 'y':
        menu = menu + ", " + menu_ask
        answer = input(
            menu_ask
            + " is added to menu,would you like to see new menu? Y/N ")
        if answer.lower() == 'y':
            print(menu)
        else:
            next
    else:
        print(menu_ask, "is not added to menu")
    # print(menu_ask,"is not available in menu")
    print("checking menu at the end", menu)
