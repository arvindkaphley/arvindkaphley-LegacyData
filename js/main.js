const about=document.querySelector('#about')
const contact=document.querySelector('#contact')
const aboutContent=document.querySelector('#about-content')
const contactContent=document.querySelector('#contact-content')

let aboutBox=null
let contactBox=null

// function typeWriter(element, text, delay = 100) {
//     element.innerHTML = '';
//     let i = 0;
//     function type() {
//         if (i < text.length) {
//             element.innerHTML += text.charAt(i);
//             i++;
//             setTimeout(type, delay);
//         }
//     }
//     type();
// }

about.addEventListener('click',()=>{
    if(aboutBox){
        aboutBox.close()
        aboutBox=null
    }else{
    aboutBox = new WinBox({
        title : 'About Me',
        width : '400px',
        height : '400px',
        top : 50,
        right : 50,
        bottom : 50,
        left : 50,
        mount: aboutContent,
        onfocus: function(){
            this.setBackground('#00aa00')
        },
        onblur: function(){
            this.setBackground('#777')
        },
        onclose: function(){
            aboutBox=null
        }
    })
    // typeWriter(aboutContent,aboutContent.textContent)
    }
})
contact.addEventListener('click',()=>{
    if(contactBox){
        contactBox.close()
        contactBox=null
    }else{
    contactBox = new WinBox({
        title : 'Contact Me',
        width : '400px',
        height : '400px',
        top : 150,
        right : 50,
        bottom : 50,
        left : 250,
        mount: contactContent,
        onfocus: function(){
            this.setBackground('#00aa00')
        },
        onblur: function(){
            this.setBackground('#777')
        },
        onclose: function(){
            contactBox=null
        }
    })
    // typeWriter(contactContent,contactContent.textContent)
    }
})