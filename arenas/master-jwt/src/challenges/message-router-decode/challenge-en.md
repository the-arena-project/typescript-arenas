Warrior !

As expected, that was for you a piece of cake.

Thank to your hard work, the Message Router is now able to process messages with numbers and special characters without having to manually encode them.

As you can see, encoding is the process of transforming a message into another format for efficiency or communication purposes.
Be aware of the fact that this doesn't mean that the message is encrypted, it's just a different representation of the same message.
There is nothing secure about all of this. Keep that in mind.

But encoding wouldn't be complete without its counterpart: decoding.

We want to be able to decode messages that were encoded for the Message Router, so that we can properly read messages that are sent to us from the outside world.

Your task is to write a Typescript class `MessageRouterDecoder` that has a single method `decode` that takes a string and returns a string.
This method should be able to decode messages that were encoded using the rules described in the previous challenge.

I expect you to turn in a class that looks like this:

```typescript
export class MessageRouterDecoder {
  decode(message: string): string {
    // actual decoding logic here
  }
}
```

In summary, taking the encoder you made in the previous challenge, you should be able to do the following:

```typescript
const encoder = new MessageRouterEncoder();
const decoder = new MessageRouterDecoder();

const encodedMessage = encoder.encode('I have 2 apples.');
const decodedMessage = decoder.decode(encodedMessage);

console.log(decodedMessage); // should print "I have 2 apples."
```

Note that your decoder will always be given a valid encoded message, so you don't have to worry about handling invalid inputs.

Now that you got the hang of encoding, you should be able to do this challenge without any problem.