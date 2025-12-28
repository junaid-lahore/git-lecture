my_dict = {'a': 1, 'b': 2, 'c': 3}

for value in my_dict.values():
    print(value)

for key in my_dict.keys():
    print(key)
for key, value in my_dict.items():
    print(key)
    print(value)
    

my_keys = list(my_dict.keys())
my_values = list(my_dict.values())
items = list(my_dict.items())


print(my_dict['a'])  # Output: 1

my_dict['d'] = 4

print(items)  # Output: dict_keys(['a', 'b', 'c', 'd'])