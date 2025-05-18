document.addEventListener("DOMContentLoaded", () => {
    const title = localStorage.getItem("bookTitle");
    const image = localStorage.getItem("bookImage");
    const cate = localStorage.getItem("bookcate");
    const decription = localStorage.getItem("bookdecription");
    const avaliability = localStorage.getItem("bookavaliability2");

    if (title) {
        let titleEl = document.querySelector(".book-title");
        if (titleEl) titleEl.textContent = title;
    }

    if (image) {
        let bookCoverEl = document.querySelector(".book-cover");
        if (bookCoverEl) bookCoverEl.src = '../dadofinal/' + image;

        let topBox = document.querySelector(".top-box");
        if (topBox) topBox.style.backgroundImage = `url('../dadofinal/${image}')`;
    }
    if (cate) {
        let cateEl = document.querySelector(".type-book");
        if (cateEl) cateEl.textContent = cate;
    }

    if (title) {
        let bookTitleEl = document.querySelector(".book-title");
        if (bookTitleEl) bookTitleEl.textContent = title;
    }
    if (decription) {
        let bookDescriptionEl = document.querySelector(".content");
        if (bookDescriptionEl) bookDescriptionEl.textContent = decription;
        
    }
    if(avaliability==="false"){
        const bookAvaliabilityEl = document.getElementById("image");
        const bookava= document.getElementById("aval");
        if (bookAvaliabilityEl) bookAvaliabilityEl.src = '../Group 18.png';
        if (bookava) bookava.textContent = "Not Available";
        document.getElementById("b11").classList.remove('active');
    }
    else{
        const bookAvaliabilityEl2 = document.getElementById("image");
        const bookava2= document.getElementById("aval");
        document.getElementById("b11").classList.add('active');
        if (bookAvaliabilityEl2) bookAvaliabilityEl2.src = 'circle-checked.png';
        if (bookava2) bookava2.textContent = "Available";
    }
    
});

document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll('.book-tab');
    tabs[0].classList.add('active');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove 'active' from all buttons
            tabs.forEach(btn => btn.classList.remove('active'));
            // Add 'active' only to the clicked one
            tab.classList.add('active');
        });
    });
}); 


function showTab(tabName) {
    const infoTab = document.getElementById('info-box');
    const similarTab = document.getElementById('similar-box');
  
    if (tabName === 'info') {
      infoTab.style.display = 'block';
      similarTab.style.display = 'none';
    } else if (tabName === 'similar') {
      infoTab.style.display = 'none';
      similarTab.style.display = 'block';
    }
  }
  
function handleClick(element) {
    window.location.href = 'bookpage.html';
    localStorage.removeItem('bookTitle');
    localStorage.removeItem('bookImage');
    localStorage.removeItem('bookcate');
    localStorage.removeItem('bookdecription');
    localStorage.removeItem('bookavaliability2');

    const newtitle = element.getAttribute("data-title");
    const newimage = element.getAttribute("src");
    const newcate = element.getAttribute("data-cate");
    const newdecription = element.getAttribute("data-desc");
    const avaliability = element.getAttribute("data-av");
    /////////
    localStorage.setItem("bookTitle", newtitle);
    localStorage.setItem("bookImage", newimage);
    localStorage.setItem("bookcate", newcate);
    localStorage.setItem("bookdecription", newdecription);
    localStorage.setItem("bookavaliability2", avaliability);
    //////////
    if (newtitle) {
        let titleEl = document.querySelector(".book-title");
        if (titleEl) titleEl.textContent = newtitle;
    }

    if (newimage) {
        let bookCoverEl = document.querySelector(".book-cover");
        if (bookCoverEl) bookCoverEl.src = '../dadofinal/' + newimage;

        let topBox = document.querySelector(".top-box");
        if (topBox) topBox.style.backgroundImage = `url('../dadofinal/${newimage}')`;
    }
    if (newcate) {
        let cateEl = document.querySelector(".type-book");
        if (cateEl) cateEl.textContent = newcate;
    }

    if (newtitle) {
        let bookTitleEl = document.querySelector(".book-title");
        if (bookTitleEl) bookTitleEl.textContent = newtitle;
    }
    if (newdecription) {
        let bookDescriptionEl = document.querySelector(".content");
        if (bookDescriptionEl) bookDescriptionEl.textContent = newdecription;
        
    }
    if(avaliability==="false"){
        const bookAvaliabilityEl = document.getElementById("image");
        const bookava= document.getElementById("aval");
        if (bookAvaliabilityEl) bookAvaliabilityEl.src = '../Group 18.png';
        if (bookava) bookava.textContent = "Not Available";
        document.getElementById("b11").classList.remove('active');
    }
    else{
        const bookAvaliabilityEl2 = document.getElementById("image");
        const bookava2= document.getElementById("aval");
        document.getElementById("b11").classList.add('active');
        if (bookAvaliabilityEl2) bookAvaliabilityEl2.src = 'circle-checked.png';
        if (bookava2) bookava2.textContent = "Available";
    }

}

function handleClick2(element) {
    localStorage.removeItem('bookTitlecart');
    localStorage.removeItem('bookImagecart');
    localStorage.removeItem('bookcatecart');
    localStorage.removeItem('bookdecriptioncart');
    localStorage.removeItem('bookavaliability2cart');
    ///////////////
    const title = localStorage.getItem("bookTitle");
    const image = localStorage.getItem("bookImage");
    const cate = localStorage.getItem("bookcate");
    const decription = localStorage.getItem("bookdecription");
    const avaliability = localStorage.getItem("bookavaliability2");
    ///////////////
    localStorage.setItem("bookTitlecart", title);
    localStorage.setItem("bookImagecart", image);
    localStorage.setItem("bookcatecart", cate);
    localStorage.setItem("bookdecriptioncart", decription);
    localStorage.setItem("bookavaliability2cart", avaliability);
    //////////
    
    document.getElementById('message-container').style.display = 'block';
    document.getElementById('button-container').style.display = 'none';


}

document.addEventListener('DOMContentLoaded', function() {
    const sliders = document.querySelectorAll('.sliderc');
    const nxtBtns = document.querySelectorAll('.nxt-btn');
    const preBtns = document.querySelectorAll('.pre-btn');
  
    sliders.forEach((slider, i) => {
      let containerWidth = slider.offsetWidth;
      let scrollAmount = 1000; // Adjust this value as needed
  
      nxtBtns[i].addEventListener('click', () => {
        slider.scrollBy({
          left: scrollAmount,
          behavior: 'smooth'
        });
      });
  
      preBtns[i].addEventListener('click', () => {
        slider.scrollBy({
          left: -scrollAmount,
          behavior: 'smooth'
        });
      });
    });
  });