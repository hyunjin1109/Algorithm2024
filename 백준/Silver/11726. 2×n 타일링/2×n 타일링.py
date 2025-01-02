N=int(input())

list = [0 for _ in range(N+1)]

if N<4:
    print(N)
else:
    list[1] = 1
    list[2] = 2
    for i in range(3,N+1):
        list[i] = list[i-1] + list[i-2]

    print(list[i]%10007)

