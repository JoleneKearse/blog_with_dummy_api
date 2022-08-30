// global variables
let postsArr = [];
const newPost = document.getElementById("newPost");
const getPosts = {
    method: "GET",
    headers: {
        "X-API-Key": "5a147440",
        "Content-Type": "application/json",
    },
};

// display the posts
function renderPosts() {
    let html = "";
    for (let post of postsArr) {
        html += `
            <div class="blog-post">
                <h3>${post.title}</h3>
                <p>${post.body}</p>
            </div>
            <hr />
            `;
    }
    document.getElementById("blogList").innerHTML = html;
}

// fetch previous posts
fetch("https://my.api.mockaroo.com/blog_posts.json?key=undefined", getPosts)
    .then((response) => response.json())
    .then((data) => {
        postsArr = data;
        renderPosts();
    });

// add new post
newPost.addEventListener("submit", function (e) {
    e.preventDefault();
    const postTitle = document.getElementById("postTitle").value;
    const postBody = document.getElementById("postBody").value;
    const post = {
        title: postTitle,
        body: postBody,
    };
    postsArr.unshift(post);
    renderPosts();
});
