function loadCategories(){
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories));
}

function loadVideos(){
    fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((res) => res.json())
    .then((data) => displayVideos(data.videos));
}

function displayCategories(categories){
    const categoriesContainer = document.getElementById("category-container");
    for(let cat of categories){
        const categoryDiv = document.createElement("div");
        categoryDiv.innerHTML =`<button class="btn btn-sm hover:bg-[#FF1F3D] hover:text-white">${cat.category}</button>`;
        categoriesContainer.appendChild(categoryDiv);
    }
}

const displayVideos = (videos) => {
    const videoContainer = document.getElementById("video-container");
    videos.forEach(video =>{
        const videoCard = document.createElement("div");
        videoCard.innerHTML =`
        <div class="card bg-base-100">
                <figure class="relative">
                  <img class="w-full h-[250px] object-cover" src="${video.thumbnail}" alt=""/>
                  <span class="absolute bottom-2 right-2 text-white text-sm bg-black p-1 rounded">3hrs 56 min ago</span>
                </figure>
                <div class="flex gap-3 px-0 py-5">
                  <div class="profile">
                    <div class="avatar">
                        <div class="ring-primary ring-offset-base-100 w-10 rounded-full">
                          <img src="${video.authors[0].profile_picture}" />
                        </div>
                      </div>
                  </div>
                  <div class="intro">
                    <h2 class="font-bold">${video.title}</h2>
                    <p class="text-sm text-[#171717B2] my-2.5 flex gap-2">${video.authors[0].profile_name} <img class="w-5 h-5" src="https://img.icons8.com/?size=48&id=98A4yZTt9abw&format=png" alt=""></p>
                    <p class="text-sm text-[#171717B2]">${video.others.views} views</p>
                  </div>
                </div>
              </div>
              `;
        videoContainer.append(videoCard);
    })
}

loadCategories();
loadVideos();