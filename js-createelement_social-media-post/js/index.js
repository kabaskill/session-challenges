console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.

const newPostArticle = document.createElement("article");
document.body.append(newPostArticle);

const newPostContent = document.createElement("p");
newPostContent.textContent =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit.";
newPostArticle.append(newPostContent);

const newPostFooter = document.createElement("footer");
newPostArticle.append(newPostFooter);

const newFooterSpan = document.createElement("span");
const newFooterButton = document.createElement("button");
newFooterSpan.textContent = "@kabaskill";
newFooterButton.textContent = "♥ Like";
newPostFooter.append(newFooterSpan, newFooterButton);

newPostArticle.classList.add("post");
newPostContent.classList.add("post__content");
newPostFooter.classList.add("post__footer");
newFooterSpan.classList.add("post__username");
newFooterButton.classList.add("post__button");

newFooterButton.addEventListener("click", handleLikeButtonClick);
