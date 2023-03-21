const blog = async () => {
    try {
        let response = await fetch("data/blog.json")
        let data = response.json()
        return data
    } catch (error) {
        return blog()
    }
}
(async () => {
    let blogEntry = await blog()
    let bEntry = document.querySelector('#post')
    let blogs = ''
    blogEntry.forEach(entry => {
        blogs += `<div>
                    <h1>${entry.title}</h1>
                    <h6>${entry.date}</h6>
                  </div>
                  <div>
                    <p>${entry.content}</p>
                  </div>
                  <div>
                    <content>${entry.categories}</content>
                  </div>`
    })
    bEntry.innerHTML = blogs
})();
