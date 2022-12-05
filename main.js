var expend_img  = 

document.querySelector('.expend_img img')

var section_img = 

Array.from(document.querySelectorAll('.img_section img'))

var index = 2

var select_quatity = 

document.querySelectorAll('.select_quatity button')

var count = 0

section_img.forEach(image_card => {

  

  image_card.addEventListener('click',function(){

    expend_img.src = this.src

  section_img[index].classList.remove('active_section')

  index = section_img.indexOf(this)

  section_img[index].classList.add('active_section')

  })

  

})

 

        /*      Select Quantity       */

select_quatity[0].addEventListener('click',function(){

       if (count <= 0) {

       } else {

         count--

  document.querySelector('#innerCount').innerHTML = count 

       }

})

select_quatity[1].addEventListener('click',function(){

  count++

  document.querySelector('#innerCount').innerHTML = count 

})

/*     Quantity added to cart      */

var addToCartBtn = 

document.querySelectorAll('.button_action_container button')

var cart = document.querySelector('.shopping_cart button')

var count_cart = 0 

addToCartBtn[0].addEventListener('click',function(){

  count_cart++

  cart.setAttribute('data-count', count_cart)

})

   /*          share option         */

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

