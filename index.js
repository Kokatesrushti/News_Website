// 0480f9a1bebc4475ae69ea8fb030a82e
let source = 'bbc-news';
let apiKey = '0480f9a1bebc4475ae69ea8fb030a82e';

let newsaccordion = document.getElementById('newsaccordion')
const xhr = new XMLHttpRequest()

xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`, true)

xhr.onload = function () {
    if (this.status === 200) {
       let json = JSON.parse(this.responseText)
       let articles=json.articles;
       console.log(articles);
       let newsHTML="";
       articles.forEach(function(element, index){
        let news = `<div class="card">
                        <div class="card-header" id="heading${index}">
                            <h2 class="mb-0">
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
                                    aria-expanded="true" aria-controls="collapse${index}">
                                    <b>Breaking News ${index+1}</b>
                                    ${element["title"]}
                                </button>
                            </h2>
                        </div>
                        
                        <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}"
                            data-parent="#newsaccordion">
                            <div class="card-body"> ${element["content"]}. <a href="${element.url}" target="_blank">Read more here </a></div>
                        </div>
                    </div>`;
            newsHTML += news;
        });
       newsaccordion.innerHTML =newsHTML;
    }
    else{
        console.log("Some error occured")
    }
}

xhr.send()
