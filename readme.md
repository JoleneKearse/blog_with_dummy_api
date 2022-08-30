# (Sample) Blog

After completing the BlogSpace mini-project in Scrimba's Frontend Developer Career Path Module 9: Working with APIs, I decided to create my own local version.

I had used [JSONplaceholder](https://jsonplaceholder.typicode.com/) in the career path and wanted to tackle another resource. A Google search led me to [Mockaroo](https://www.mockaroo.com/), which does have similar functions.

## CSS Tidbits

Here are the interesting issues I had...

### Creating a diagonal lined background

![dark background with super-thin lighter diagonal line](https://github.com/JoleneKearse/blog_with_dummy_api/blob/main/screenshots/background-image.png)

I always have to Google how to do this and messed up my first few tries, so here's the solution I landed on. The problem I encounter again and again is having to write out the hex codes twice; the first (line 3) with no dimensions is generally where I go wrong.
![background: repeating-linear-gradient(
        45deg,
        #232323,
        #232323 30px,
        #2F2F2F 30px,
        #2F2F2F 32px
    );](https://github.com/JoleneKearse/blog_with_dummy_api/blob/main/screenshots/background-code.png)

### The cool blurred effect under a fixed element

I've seen this cool effect on sites from awesome creators, but just now finally figured out how to do it!

The effect is a header element, usually, where it blurs out content as you scroll down and it follows you (sorry for the horrid explaination!).

![nav {
    position: fixed;
    top: 0;
    width: 100%;
    padding: 30px 0;
    background-image: linear-gradient(75deg, #55286F99, #9D357399...
    backdrop-filter: blur(5px);
}](https://github.com/JoleneKearse/blog_with_dummy_api/blob/main/screenshots/blur-code.png)

You can re-create the effect in two steps:

1. Make the background colour or gradient colours a bit transparent like in line 6.
2. Create the blur effect by using `backdrop-filter` like in line 7. The higher the px's the more blurred it will be.
