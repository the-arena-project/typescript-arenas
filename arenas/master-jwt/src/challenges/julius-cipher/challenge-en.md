Warrior!

Thank to your hard work, we know have automated the process of encoding and decoding messages for the Message Router.

That's amazing, but we're not done yet.

As I told you before, nothing about encoding is secure. We did this only because the Message Router cannot handle certain characters and needed to transform them.

But what if we want to send a message that is secure?

What if we want to send a message that only the intended recipient can read?

As you might have guessed, that's a feature we need, especially when it relates to military operations.

The solution to this problem is called *encryption*.
Encryption is the process of transforming a message into another format that is unreadable by anyone except the intended recipient.

This is often achieved by using a secret key that is known only to the sender and the recipient, and that is used to encrypt and decrypt the message.

Using the same key on both ends is what is referred to as *symmetric encryption*.

I need you to implement such an algorithm in order for us to secure our most crucial communications.

Now, let's discuss the algorithm you'll have to implement.

# The (Julius) Caesar cipher

This algorithm is derived from the Caesar cipher, which is a simple substitution cipher the actual Caesar used to encrypt his messages (that's me).

The concept is simple: each letter of the message is replaced by another letter that is a fixed number of positions away in the alphabet.

For example, if the letter is `A` and the shift is `3`, then the letter is replaced by `D`.

In our case the shift is the secret key that is used to encrypt and decrypt the message.

Unlike the original Caesar cipher which only supports latin letters, your's will have to support all the printable characters of the ASCII table.

To be precise, from character code 32 to 126 (bot included).

When shifting characters, you need to make sure that you don't go out of the printable range.

For example, if the shift is `3` and the character is `~` (126), then the new character should be `"` (34).

The shift can be either positive or negative, and can be any integer. More importantly, it can be greater than the number of printable characters (that is, 126 - 32 + 1 = 95). It's up to your to normalize the shift in this case.

Your task is to write a Typescript class `MessageRouterCipher` that has an `encrypt` method.

```typescript
export class MessageRouterCipher {
  encrypt(message: string, shift: number): string {
    // actual encryption logic here
  }
}
```

Here are a few examples of how your `encrypt` method should work:

```typescript
const cipher = new MessageRouterCipher();

console.log(cipher.encrypt('Hello, world!', 3)); // should print "Khoor/#zruog$"

console.log(cipher.encrypt('Hello, world!', 32); // should print "h&--0L@803-%A"
```

Be careful, this task  could be trickier than you think.
Nonetheless, I'm sure you'll be able to do it.

Good luck, warrior!