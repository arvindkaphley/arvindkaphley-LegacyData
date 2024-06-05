const about = document.querySelector('#about');
const contact = document.querySelector('#contact');
const aboutContent = document.querySelector('#about-content');
const contactContent = document.querySelector('#contact-content');

let aboutBox = null;
let contactBox = null;

function getViewportSize() {
    return {
        width: window.innerWidth,
        height: window.innerHeight
    };
}

about.addEventListener('click', () => {
    if (aboutBox) {
        aboutBox.close();
        aboutBox = null;
    } else {
        const { width, height } = getViewportSize();
        aboutBox = new WinBox({
            title: 'About Me',
            width: width > 600 ? '400px' : '80%',
            height: height > 600 ? '400px' : '60%',
            top: 50,
            right: width > 600 ? 50 : '10%',
            bottom: 50,
            left: width > 600 ? 50 : '10%',
            mount: aboutContent,
            onfocus: function() {
                this.setBackground('#00aa00');
            },
            onblur: function() {
                this.setBackground('#777');
            },
            onclose: function() {
                aboutBox = null;
            }
        });
    }
});

contact.addEventListener('click', () => {
    if (contactBox) {
        contactBox.close();
        contactBox = null;
    } else {
        const { width, height } = getViewportSize();
        contactBox = new WinBox({
            title: 'Contact Me',
            width: width > 600 ? '400px' : '80%',
            height: height > 600 ? '400px' : '60%',
            top: 150,
            right: width > 600 ? 50 : '10%',
            bottom: 50,
            left: width > 600 ? 250 : '10%',
            mount: contactContent,
            onfocus: function() {
                this.setBackground('#00aa00');
            },
            onblur: function() {
                this.setBackground('#777');
            },
            onclose: function() {
                contactBox = null;
            }
        });
    }
});

window.addEventListener('resize', () => {
    if (aboutBox) {
        aboutBox.move(50, 50).resize('400px', '400px');
    }
    if (contactBox) {
        contactBox.move(150, 50).resize('400px', '400px');
    }
});
