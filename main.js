// for hamburger menu
const navMenu = document.getElementById('nav-menu');
navToggle = document.getElementById('nav-toggle');
navClose = document.getElementById('nav-close');

if (navToggle) {
   navToggle.addEventListener('click', () => {
      navMenu.classList.add('show-menu');
   });
}

if (navClose) {
   navClose.addEventListener('click', () => {
      navMenu.classList.remove('show-menu');
   })
}


const navLinks = document.querySelectorAll('.nav_link');

const linkAction = () => {
   const navMenu = document.getElementById('nav-menu');
   navMenu.classList.remove('show-menu');
}
navLinks.forEach(n => n.addEventListener('click', linkAction));

// change background header

const scrollHeader = () => {
   const header = document.getElementById('header');
   // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
   this.scrollY >= 50 ? header.classList.add('bg-header')
      : header.classList.remove('bg-header');
}
window.addEventListener('scroll', scrollHeader)

const calculateForm = document.getElementById('calculate_form'),
   calculateCm = document.getElementById('calculate-cm'),
   calculateKg = document.getElementById('calculate-kg'),
   calculationMessage = document.getElementById('calculate_message')

const calculateBmi = (e) => {
   e.preventDefault();

   //   check if the field have a value
   if (calculateCm.value === '' || calculateKg.value === '') {
      // add and remove
      calculationMessage.classList.remove('color-green');
      calculationMessage.classList.add('color-red')

      //  show message

      calculationMessage.textContent = 'Please fill in the weight and height.';

      // remove show message

      setTimeout(() => {
         calculationMessage.textContent = ''
      }, 3000)
   } else {
      const cm = calculateCm.value / 100,
         kg = calculateKg.value,
         bmi = Math.round(kg / (cm * cm))

      // show health status

      if (bmi < 18.5) {
         calculationMessage.classList.add('color-green')
         calculationMessage.textContent = `your bmi is ${bmi} and you are skinny`;
      } else if (bmi < 25) {
         calculationMessage.classList.add('color-green')
         calculationMessage.textContent = `Your bmi is ${bmi} and youre healthy`;
      } else {
         calculationMessage.classList.add('color-green')
         calculationMessage.textContent = `Your bmi is ${bmi} and youre overweight`;
      }
   }
}

const sr = ScrollReveal ({
   origin: 'top',
   distance: '60px',
   duration: 2500,
   delay: 400,
})

sr.reveal(`.home_data, .footer_container           `)
sr.reveal(`.home_image`, {delay: 700, origin: 'bottom'})
sr.reveal(`.logos_img, .program_card, .pricing_card`, {interval: 100})
sr.reveal(`.choose_img, .calculate_content`, {origin: 'left'})
sr.reveal(`.choose_content, .calculate_img`, {origin: 'right'})


calculateForm.addEventListener('submit', calculateBmi);

const contactForm = document.getElementById('contact-form'),
   contactMessage = document.getElementById('contact_message'),
   contactUser = document.getElementById('contact_user')

const sendEmail = (e) => {
   e.preventDefault()

   if (contactUser.value === '') {
      contactMessage.classList.remove('color-green');
      contactMessage.classList.add('color-red')

      // show message

      contactMessage.textContent = 'Please fill in your name.';

      // remove show message

      setTimeout(() => {
         contactMessage.textContent = ''
      }, 3000)
   } else {
      // serviceID templateID #form publickey
      emailjs.sendForm('service_ptt6cxk', 'template_u4f6wed', '#contact-form', '4wdcqrIk52ZPj6D1S')
         .then(() => {
            // show message
            contactMessage.classList.add('color-green')
            contactMessage.textContent = 'You registered successfully'

            // remove show message

            setTimeout(() => {
               contactMessage.textContent = ''
            }, 3000)
         }, (error) => {
            // mail sending failed
             console.log('oops something went wrong...', error)

         })
   
            // reset
            contactUser.value = ''

      }

}

contactForm.addEventListener('submit', sendEmail)



const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
   const scrollY = window.pageYOffset;

sections.forEach(current => {
const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute('id'),
      sectionsClass = document.querySelector('.nav_menu a[href*=' + sectionId + ']')

      if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        sectionsClass.classList.add('active-link')
      } else {
         sectionsClass.classList.remove('active-link')
      }

   })

   }

window.addEventListener('scroll', scrollActive)

const scrollUp = () => {
   const scrollUp = document.getElementById('scroll-up')
   // when the scroll is higher than 350 viewport height , add the show-scroll class to the a tag with the scroll

   this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
      : scrollUp.classList.remove('show-scroll')


}
window.addEventListener('scroll', scrollUp)