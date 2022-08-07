async function getPosts() {
    const res = await fetch("http://localhost:3000/posts");
    const finalRes = await res.json();
    console.log(finalRes);
    showPosts(finalRes);
  }
  getPosts();
  
  async function showPosts(myData) {
    const myDiv = document.querySelector(".api-card");
    for (let i = 0; i < myData.length; i++) {
      myDiv.innerHTML += `
        <div class="myCard${i}">
            <img class="" src="${myData[i].image}" width="350" />
            <h1>${myData[i].title}</h1>
            <h2>${myData[i].description}</h2>
            </div>
            `;
    }
  }