type CompareFn<T> = (a: T, b: T) => number

export const swap = <T>(arr: T[], i: number, j: number) => {
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}
export const slice = <T>(arr: T[], start?: number, end?: number) => {
    const length = arr.length;
    const s = (start && start < 0) ? length + start : start ?? 0
    const e = (end && end < 0) ? length + end : end ?? length

    const result: any[] = []
    let y = 0
    let i = s

    while(i < e) {
        result[y] = arr[i]
        i++
        y++
    }

    return result
}

const partition = <T>(arr: T[], cmp: CompareFn<T>, low: number, high: number) => {
    const pivot = arr[high]
    let i = low - 1
    let j = low

    while (j <= high - 1) {
        if (cmp(arr[j], pivot) < 0) {
            i++
            swap(arr, i, j)
        }
        j++
    }

    swap(arr, i + 1, high)
    return i + 1
}

const quickSortRec = <T>(arr: T[], cmp: CompareFn<T>, low: number, high: number) => {
    if (low >= high) return

    const part = partition(arr, cmp, low, high)
    quickSortRec(arr, cmp, low, part - 1)
    quickSortRec(arr, cmp, part + 1, high)
}

export const quickSort = <T>(arr: T[], cmp: CompareFn<T>): T[] => {
    const copy = slice(arr)
    const length = arr.length;
    if (length <= 1) return copy

    quickSortRec(copy, cmp, 0, length - 1)
    return copy
}
