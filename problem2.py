s = input()

num = ""
max_num = -1
for ch in s:
    if ch.isdigit():
        num += ch
    else:
        if num:
            if '9' not in num:
                max_num = max(max_num, int(num))
            num = ""
if num:
    if '9' not in num:
        max_num = max(max_num, int(num))

print(max_num)
