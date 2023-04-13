type UltimergeFn = <T>(listA: Link<T> | null, listB: Link<T> | null) => Link<T> | null;
type Link<T> = {
    data: T;
    next: Link<T> | null;
};

export const ultimerge: UltimergeFn = (listA, listB) => {
    let cur1 = listA;
    let cur2 = listB;
    let ultimerged: typeof listA = null;
    let curUltimerged: typeof listA = null;

    while (cur1 !== null || cur2 !== null) {
        if (cur1 !== null) {
            if (curUltimerged === null) {
                curUltimerged = ultimerged = cur1;
            } else {
                curUltimerged.next = cur1;
                curUltimerged = curUltimerged.next;
            }
            cur1 = cur1.next;
        }
        if (cur2 !== null) {
            if (curUltimerged === null) {
                curUltimerged = ultimerged = cur2;
            } else {
                curUltimerged.next = cur2;
                curUltimerged = curUltimerged.next;
            }
            cur2 = cur2.next;
        }
    }

    return ultimerged;
};
