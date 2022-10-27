var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '#', subLinks: [
      {text: 'all', href: '/catalog/all'},
      {text: 'top selling', href: '/catalog/top'},
      {text: 'search', href: '/catalog/search'},
    ]},
    {text: 'orders', href: '#' , subLinks: [
      {text: 'new', href: '/orders/new'},
      {text: 'pending', href: '/orders/pending'},
      {text: 'history', href: '/orders/history'},
    ]},
    {text: 'account', href: '#', subLinks: [
      {text: 'profile', href: '/account/profile'},
      {text: 'sign out', href: '/account/signout'},
    ]},
  ];
// const a = document.createElement('a')


//goal: make the menulinks appear int eh nav tag in the html file with thier respetive hrefs




// a.setAttribute('menuLinks.href',"DOM-lab.html");
// a.innerText = menuLinks.text;
// topMenuEl.appendChild(a);
// a.setAttribute('href')
// document.body.appendChild(topMenuEl)

let mainEl = document.querySelector("main")
// console.log(mainEl)

mainEl.style.backgroundColor = 'var(--main-bg)'

document.querySelector('main').innerHTML = '<h1>SEI Rocks!</h1>'
// document.querySelector('main').ATTRIBUTE_NODE = ".flex-ctr"

mainEl.classList.add('flex-ctr');


let topMenuEl = document.getElementById('top-menu')

topMenuEl.style.height = '100%'

topMenuEl.style.backgroundColor = 'var(--top-menu-bg)'

topMenuEl.classList.add('flex-around');


let subMenuEl = document.getElementById('sub-menu')

subMenuEl.style.height = '100%'

subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)'

subMenuEl.classList.add('flex-around');

subMenuEl.style.position = 'absolute'

subMenuEl.style.top = '0'

// for(i=0; i < menuLinks.length; i++ ){
//    a.setAttribute('text', 'href')
//    topMenuEl.append(a)
//     // document.body.appendChild(topMenuEl)
// } 
menuLinks.forEach(function (link) {
    let linkEl = document.createElement("a");
    linkEl.setAttribute("href", link.href);
    linkEl.textContent = link.text;
    topMenuEl.appendChild(linkEl);
  });

let topMenuLinks = document.getElementById('top-menu');
var showingSubMenu = false;


//  topMenuLinks.addEventListener('click', prevention());
    
//  function prevention(event){
//     if('click' == true){
//         event.preventDefault();
//     }
//     else{
//         console.log("This is Working")
//     }
//  }
 

 topMenuLinks.addEventListener('click', function(e){
    e.preventDefault();

    if (e.target.tagName !=='A'){
        return;
}
    console.log(e.target.innerText);
    
    if(e.target.classList.contains('active')){
        e.target.classList.remove('active');
        showingSubMenu = false;
        subMenuEl.style.top = '0';
            return;
    }
    for(let i = 0; i < topMenuLinks.length; i++){
        topMenuLinks[i].classList.remove('active')
    }
    // if (event.tagname = 'a'){
    //     event.target.classList.add('active')
    // }
    e.target.classList.add('active')
    if(e.target.subLinks != undefined){
        showingSubMenu = true
    }
    else{
        showingSubMenu = false
    }
    // if(showingSubMenu === true){
    //     buildSubMenu(e.target.subLinks)
    //     subMenuEl.style.top = '100%'
    // }
    // else{
    //     subMenuEl.style.top = '0'
    // }

    // console.dir(e)
 })
 