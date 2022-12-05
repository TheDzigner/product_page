var expend_img  = 

document.querySelector('.expend_img img')

var section_img = 

Array.from(document.querySelectorAll('.img_section img'))

index = 2

section_img.forEach(image_card => {

  

  image_card.addEventListener('click',function(){

    expend_img.src = this.src

  section_img[index].classList.remove('active_section')

  index = section_img.indexOf(this)

  section_img[index].classList.add('active_section')

  })

  

})

var addToCartBtn = 

document.querySelectorAll('.button_action_container button')

var cart = document.querySelector('.shopping_cart button')

var count = 0 

addToCartBtn[0].addEventListener('click',function(){

  count++

  cart.setAttribute('data-count', count)

})

// share option 

var btnShare = 

document.querySelector('#shareBtn')

var data = {

  title : document.title,

  text : ' Air Jordan 4 retro ', 

  url : ''

}

btnShare.addEventListener('click',function(){

  

   if (navigator.canShare && navigator.canShare(data)) {

     navigator.share(data)

      }else {

      alert("Your browser does not support it")

      }

    

})

