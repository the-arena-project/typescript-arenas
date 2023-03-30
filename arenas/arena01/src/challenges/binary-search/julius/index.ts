type SearchFn = (arr: number[], value: number) => number | undefined

export const binarySearch: SearchFn = (arr, value) => {
    let low = 0
    let high = arr.length - 1

    while (low <= high) {
        const middle = ~~((low + high) / 2)

        if (arr[middle] === value) {
            return arr[middle]
        } else if (arr[middle] > value) {
            high = middle - 1
        } else {
            low = middle + 1
        }
    }
}
