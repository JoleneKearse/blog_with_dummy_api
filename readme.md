# (Sample) Blog

After completing the BlogSpace mini-project in Scrimba's Frontend Developer Career Path Module 9: Working with APIs, I decided to create my own local version.  

I had used [JSONplaceholder](https://jsonplaceholder.typicode.com/) in the career path and wanted to tackle another resource.  A Google search led me to [Mockaroo](https://www.mockaroo.com/), which does have similar functions.

## CSS Tidbits

Here are the interesting issues I had...

### Creating a diagonal lined background

![dark background with super-thin lighter diagonal line](https://github.com/JoleneKearse/blog_with_dummy_api/blob/main/screenshots/background-image.png)

I always have to Google how to do this and messed up my first view tries, so here's the solution I fell back to.
![background: repeating-linear-gradient(
        45deg,
        #232323,
        #232323 30px,
        #2F2F2F 30px,
        #2F2F2F 32px
    );](https://github.com/JoleneKearse/blog_with_dummy_api/blob/main/screenshots/background-code.png)