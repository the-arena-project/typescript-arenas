Warrior !

I know you came here to learn about JWT, but I have a little request for you first.

As you might know, here in the Arena we do have a special machine that we use to process messages and send them to the right place. It's called the "Message Router".

For absolutely non-obvious and most likely stupid reasons, the "Message Router" cannot handle a particular set of characters as they are and we need to transform them beforehand to ensure proper communication.

Up until know, I was asking one of our best warriors to do this transformation manually for me, but he's been busy lately and I decided that it was time to automate this process.

As I trust you more than anyone else, you'll be in charge of this task.

I want you to write a Typescript class `MessageRouterEncoder` that has a single method `encode` that takes a string and returns a string.

Something like this:

```typescript
export class MessageRouterEncoder {
  encode(message: string): string {
    // actual encoding logic here
  }
}
```

## Encoding rules

Here are the encoding rules you have to follow:

### Numbers

We refer to numbers as any sequence of digits (0-9) that is preceded by a space and followed by a space or a period.

A number can be signed, so it can start with ONE `+` or `-` sign.

Any number should be wrapped in a `NUM(n)` tag, where `n` is the number itself.

For example, the string `I have 2 apples.` should be encoded as `I have NUM(2) apples.`. Pretty simple, right?

### Special characters

For every character listed below, you have to encode it as `%XX` where `XX` is the hexadecimal representation of the character's ASCII code.

If this doesn't ring a bell, I would suggest you to read [this article](https://en.wikipedia.org/wiki/ASCII#Printable_characters) to get a better understanding of what I'm talking about.

As to the list of special characters you should encode, here it is:

```plain
! " # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _ ` { | } ~
```

For reference, here are some examples of messages that my former assistant encoded:

```plain
I have 2 apples
---
I have NUM(2) apples
```

```plain
I have 2 apples and 3 oranges.
----
I have NUM(2) apples and NUM(3) oranges.
```

```plain
4 - 8 = -4
---
NUM(4) %2d NUM(8) %3d NUM(-4)
```

```plain
I already sent a message to julius@thearenaproject.co 2 days ago!
---
I already sent a message to julius%40thearenaproject.co NUM(2) days ago%21
```

That said, I'm sure you can do this!

It's your time to shine, Warrior !