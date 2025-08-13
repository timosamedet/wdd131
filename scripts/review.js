const numberOfReviews = localStorage.getItem("numberOfReviews");
console.log("number of reviews:" + numberOfReviews);

const submissions = document.getElementById("submissions");
submissions.innerHTML = `Reviews Submitted: <span>${numberOfReviews}</span>`;
