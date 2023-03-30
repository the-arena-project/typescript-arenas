Write a function itoji that converts a number into its representation in the following octal base: `👍🐕🥹💕🎁😊🏡✨`.

Yes, this is a base like any other.

Same constraints as the previous exercises, only the base changes.

Your function must conform to the following prototype:

```typescript
type ItojiFn = (nb: number) => string
```

Usage examples:

```typescript
itoji(0)    // '👍'
itoji(-0)   // '-👍'
itoji(111)  // '🐕😊✨'
itoji(-10)  // '-🐕🥹'
```
