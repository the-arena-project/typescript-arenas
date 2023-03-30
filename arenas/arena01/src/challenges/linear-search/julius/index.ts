type PredicateFn<T> = (elem: T) => boolean
type SearchFn = <T>(arr: T[], predicate: PredicateFn<T>) => T | undefined

export const linearSearch: SearchFn = (arr, predicate) => {
    let i = 0
    while (arr[i] !== undefined) {
        if (predicate(arr[i])) {
            return arr[i]
        }
        i++
    }
}
