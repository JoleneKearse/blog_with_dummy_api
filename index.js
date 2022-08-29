// global variables
let postsArr = [];
const titleInput = document.getElementById("postTitle");
const bodyInput = document.getElementById("postBody");
const newPost = document.getElementById("newPost");

const getOptions = {
    method: "GET",
    headers: { "app-id": "630c25a4dfd0a50ffa9a883b" },
};

// program functions
function renderPosts() {
    let html = "";
    for (let post of postsArr) {
        html += `
            <h3>#{post.title}</h3>
            <p>${post.body}</p>
            <hr />`;
    }
    document.getElementById("blogList").innerHTML = html;
}

// fetch previous posts
fetch("https://apis.scrimba.com/jsonplaceholder/posts")
    .then((response) => response.json())
    .then((posts) => {
        console.log(posts);
        renderPosts();
    });
// TODO check out Scrim 16 line 21 for how many to display

// add new post
newPost.addEventListener("submit", function (e) {
    e.preventDefault();
    const postTitle = titleInput.value;
    const postBody = bodyInput.value;
    const data = {
        title: postTitle,
        body: postBody,
    };
    const postOptions = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
            "add-id": "630c25a4dfd0a50ffa9a883b",
        },
    };
    fetch("https://dummyapi.io/data/v1/posts", postOptions)
        .then((response) => response.json())
        .then((post) => {
            console.log(post);
            postsArr.unshift(post);
            renderPosts();
            // titleInput.value = ""
            // bodyInput.value = ""
            newPost.reset();
        });
});
