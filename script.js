window.addEventListener('load', function () {
    const nav = this.document.querySelector('nav');
    const linkItems = ['news', 'music', 'videos', 'photos', 'events'];
    const ul = this.document.createElement('ul');
    for (let i = 0; i < linkItems.length; i++) {

        let a = this.document.createElement('a');
        a.append(linkItems[i]);
        let li = this.document.createElement('li');
        li.setAttribute('onclick', 'clickFan');
        li.appendChild(a);
        ul.appendChild(li);
    }
    nav.append(ul);





    console.log(linkItems.length);

})