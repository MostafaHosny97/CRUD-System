var nameWebsite = document.getElementById('exampleFormControlInput1')
var Website = document.getElementById('exampleFormControlInput2')

websiteContainer = []
if (localStorage.getItem('website') != null) {
    websiteContainer = JSON.parse(localStorage.getItem('website'))
}

function addWebsite() {
    var websiteObj = {
        Name: nameWebsite.value,
        Website: Website.value
    }
    websiteContainer.push(websiteObj)
    localStorage.setItem('website', JSON.stringify(websiteContainer))
    showWebsite()
    clearInput()
}

function showWebsite() {
    var websites = ``
    for (i = 0; i < websiteContainer.length; i++) {
        websites += `
    <tr>
        <td>${i+1}</td>
        <td>${websiteContainer[i].Name}</td>
        <td><a href="${websiteContainer[i].Website}" target="_blank"><button class="btn btn-outline-info btn-l pe-3">Visit</button></a></td>
        <td><button onclick="deleteWebsite(${i})" class="btn btn-outline-danger btn-l">Delete</button></td>
    </tr>
`
    }
    document.getElementById('tbody').innerHTML = websites
}
showWebsite()

function clearInput() {
    nameWebsite.value = ""
    Website.value = ""
}

function deleteWebsite(Index) {
    websiteContainer.splice('Index', 1)
    localStorage.setItem('website', JSON.stringify(websiteContainer))
    showWebsite()
}

function visiteWebsite() {

}