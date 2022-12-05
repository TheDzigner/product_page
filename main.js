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

var testimonial = 

document.querySelector('.testimonials_wrapper');

var date = new Date();

var times = date.getHours()

var minutes = date.getMinutes()

var day = date.getDay()

var month = date.getMonth()

var days = 

['Sun','Mon','Tue','Wed','Thu','Fri','Sat']

var months = 

['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct', 'Nov','Dec']

async function loadTest() {

  try {

    var results = 

    await fetch('/testimonial.json');

    

    var data = await results.json();

    showTest(data)

    console.log(data)

  } catch (e) {}

}

loadTest()

var showTest = data => {

  var TestContainer = '' ;

  for (var i = 0; i < data.length; i++) {

     var createCard = `

     <div class="testimonial">

          <div class="img">

            <img src=${data[i].member_photo} alt="">

          </div>

          <div class="words">

            <p>

              ${data[i].member_feedback}

            </p>

          </div>

          <span>

         ${days[day]}, ${months[month]} - ${date.getFullYear()} / ${data[i].member_name}

          </span>

        </div>

     `

     console.log(TestContainer)

     TestContainer += createCard

  }

 testimonial.innerHTML = TestContainer

}

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

