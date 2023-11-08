const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
let imgUrls=[{url:'./images/pic1.jpg',iName:'eyes'},{url:'./images/pic2.jpg',iName:'mosaic'},{url:'./images/pic3.jpg',iName:'flowers'},{url:'./images/pic4.jpg',iName:'art'},{url:'./images/pic5.jpg',iName:'butterfly'}]
/* Declaring the alternative text for each image file */

/* Looping through images */
for(i=0;i<imgUrls.length;i++){

    const newImage = document.createElement('img');
    newImage.setAttribute('src', imgUrls[i].url);
    newImage.setAttribute('alt', imgUrls[i].iName);
    newImage.addEventListener('click',(e=>{
        
            displayedImage.src = e.target.src;
            displayedImage.alt = e.target.alt;
        
    }))
    thumbBar.appendChild(newImage);
    console.log(imgUrls[i])
}

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', () => {
    const btnClass = btn.getAttribute('class');
    if (btnClass === 'dark') {
      btn.setAttribute('class','light');
      btn.textContent = 'Lighten';
      overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    } else {
      btn.setAttribute('class','dark');
      btn.textContent = 'Darken';
      overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
  });