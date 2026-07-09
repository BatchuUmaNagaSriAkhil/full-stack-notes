def unique_digits(num):
    s = str(num)
    return len(s) == len(set(s))
L = int(input())
R = int(input())
count = 0

for i in range(L, R + 1):
    if unique_digits(i):
        count += 1

if count == 0:
    print("NoUnique Number")
else:
    print(count)
