/*
There is a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

Example

There is one pair of color  and one of color . There are three odd socks left, one of each color. The number of pairs is .

Function Description

Complete the sockMerchant function in the editor below.

sockMerchant has the following parameter(s):

int n: the number of socks in the pile
int ar[n]: the colors of each sock
Returns

int: the number of pairs
Input Format

The first line contains an integer , the number of socks represented in .
The second line contains  space-separated integers, , the colors of the socks in the pile.

Sample Output

3

*/

function sockMerchant(n = 9, ar = [10, 20, 20, 10, 10, 30, 50, 10, 20]) {
    const numberPairs = []
    ar.reduce((sum, value) => {
        const key = {
            [value]: ar.filter(it => it === value).length,
        }
        sum = {
            ...key,
            quantitySocksPairs: key[value] % 2 == 0 ? key[value] / 2 : (key[value] - 1) / 2
        }
        numberPairs.push(sum)
    }, {})

    const stringFy = numberPairs.map(val => JSON.stringify(val))
    const notRepeated = [...new Set(stringFy)].map(value => JSON.parse(value))
    const calcPairs = notRepeated.reduce((sum, value) => sum += value.quantitySocksPairs, 0)

    return calcPairs;
}

sockMerchant()