n = int(input())
arr = list(map(int, input().split(" ")))

freq = {}
count = 0

# iterate over all pairs (i,j) such that i<j
for i in range(n):
    opr_i = int(''.join(str(x) for x in str(arr[i]) if x % 2 != 0))
    for j in range(i+1, n):
        opr_j = int(''.join(str(x) for x in str(arr[j]) if x % 2 != 0))
        diff = arr[i] - opr_i - (arr[j] - opr_j)
        if diff in freq:
            count += freq[diff]
        freq.setdefault(diff, 0)
        freq[diff] +=1

print(count)