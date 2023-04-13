import { reverseString } from '../index';

const refRev = (s: string) => [...s].reverse().join('');

describe('reverseString', () => {
    it("Should reverse a string which's length is even", () => {
        const testValues = [
            'able',
            'also',
            'aged',
            'area',
            'army',
            'away',
            'baby',
            'Hello, world',
            'some',
            'julius',
            'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellate',
        ];

        for (const testValue of testValues) {
            expect(reverseString(testValue)).toEqual(refRev(testValue));
        }
    });

    it("Should reverse a string which's length is odd", () => {
        const testValues = [
            'hello',
            'world',
            'somehow',
            'arena',
            'how',
            'stylish',
            'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat',
        ];

        for (const testValue of testValues) {
            expect(reverseString(testValue)).toEqual(refRev(testValue));
        }
    });

    it('Should return an empty string when reversing an empty string', () => {
        expect(reverseString('')).toEqual('');
    });
});
