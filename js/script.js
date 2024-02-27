const heading=document.getElementById('heading');
const colorContainer=document.getElementById('colorContainer');
const spacing=document.getElementById('spacing');
const blur=document.getElementById('blur');
const color=document.getElementById('color');
const image=document.getElementById('image');
function changingcolors(event){
    const suffix=this.dataset.sizing || "";
    console.log(document.documentElement.style.setProperty(`--${this.name}`,this.value+suffix));
    }

 spacing.addEventListener('change',changingcolors);
blur.addEventListener('change',changingcolors);
color.addEventListener('change',changingcolors);
spacing.addEventListener('mousemove',changingcolors);
blur.addEventListener('mousemove',changingcolors);
color.addEventListener('mousemove',changingcolors);