
// <!-- Vanilla -->

// 메뉴
let mainNavEl = document.querySelector('.main-menu');
let subNavEl = document.querySelector('.sub-menu');

function subNav(subH,pTop,pBottom){
    subNavEl.style.height=subH;
    subNavEl.style.paddingTop=pTop;
    subNavEl.style.paddingBottom=pBottom;
}

mainNavEl.addEventListener('mouseenter',function(){
    subNav('200px','10px','20px')
    // subNavEl.classList.add('show');
})
subNavEl.addEventListener('mouseleave',function(){
    subNav('0','0','0')
    // subNavEl.classList.remove('show');
})




// 슬라이더 1
let slideEls = document.querySelectorAll('.slider .img-box');
let selectIdx = 1;

function changeSlide(idx){
    for(let cnt=0;cnt<slideEls.length;cnt++){
        slideEls[cnt].style.opacity = '0';
    }
    slideEls[idx].style.opacity = '1';
}

setInterval(function(){
    if(selectIdx>2){
        selectIdx=0;
    }
    changeSlide(selectIdx++)
},3000);





// 페이저
let btnSls = document.querySelectorAll('.pager span');
console.log(btnSls);
for(let idx=0;idx<btnSls.length;idx++){
    btnSls[idx].addEventListener('click',function(){
        selectIdx = Number(this.getAttribute('index-num'));
        changeSlide(selectIdx++);
    });
}


// let btnSl01 = document.getElementById('btn-slide01');
// let btnSl02 = document.getElementById('btn-slide02');
// let btnSl03 = document.getElementById('btn-slide03');

// btnSl01.addEventListener('click',function(){
//     selectIdx = 0;
//     changeSlide(selectIdx);
// });
// btnSl02.addEventListener('click',function(){
//     selectIdx = 1;
//     changeSlide(selectIdx);
// });
// btnSl03.addEventListener('click',function(){
//     selectIdx = 2;
//     changeSlide(selectIdx);
// });







// 모달
let btnClose = document.querySelector('.btn-modal-close');
let modalEl = document.querySelector('.modal');
let titEls = document.querySelectorAll('.notice-txt .title');
let modalTitle = document.querySelector('.modal-tit');

for(let idx=0;idx<titEls.length;idx++){
    titEls[idx].addEventListener('click',function(){
        modalTitle.innerText = this.innerText;
        modalEl.style.display='block';
    });
}

btnClose.addEventListener('click',function(){
    modalEl.style.display='none';
})








