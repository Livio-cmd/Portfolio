let btn = document.getElementById("closer");
let start = document.getElementById("start");

if (btn != null) {
    btn.addEventListener("click", () => {
        start.style.opacity = '0';
        start.style.visibility = 'hidden';
        if(start.style.opacity == 'hidden'){
            start.style.display = 'none';
        }
    })
}

const cannotClick = (e) => {
    e.style.visibility = 'hidden';
}

const sr = ScrollReveal();

sr.reveal('.fade-up', {
    origin: 'bottom',
    distance: '200px',
    opacity: 0,
    scale: 0.95,
    reset: true,
    afterReset: cannotClick,
    viewFactor: 1.0,
    mobile: false,
    duration: 1500,
});

sr.reveal('.fade-down', {
    origin: 'top',
    distance: '200px',
    opacity: 0,
    scale: 0.9,
    reset: true,
    afterReset: cannotClick,
    viewFactor: 1.0,
    mobile: false,
    duration: 1500,
})

sr.reveal('.fade-up-xtrem', {
    origin: 'bottom',
    distance: '200px',
    opacity: 0,
    scale: 0.9,
    reset: true,
    beforeReset: cannotClick,
    viewFactor: 0.1,
    mobile: false,
    duration: 1500,
});

sr.reveal('.fade-down-xtrem', {
    origin: 'top',
    distance: '500px',
    opacity: 0,
    scale: 0.9,
    reset: true,
    beforeReset: cannotClick,
    viewFactor: 0.1,
    mobile: false,
    duration: 1500,
})

sr.reveal('.fade-left', {
    origin: 'left',
    distance: '200px',
    opacity: 0,
    scale: 0.9,
    reset: true,
    beforeReset: cannotClick,
    viewFactor: 1.0,
    mobile: false,
    duration: 1500,
})

sr.reveal('.fade-right', {
    origin: 'right',
    distance: '500px',
    opacity: 0,
    scale: 0.9,
    reset: true,
    beforeReset: cannotClick,
    viewFactor: 1.0,
    mobile: false,
    duration: 1500,
})

sr.reveal('.fade-left-xtrem', {
    origin: 'left',
    distance: '200px',
    opacity: 0,
    scale: 0.9,
    reset: true,
    beforeReset: cannotClick,
    viewFactor: 0.1,
    mobile: false,
    duration: 1500,
})

sr.reveal('.fade-right-xtrem', {
    origin: 'right',
    distance: '500px',
    opacity: 0,
    scale: 0.9,
    reset: true,
    beforeReset: cannotClick,
    viewFactor: 0.1,
    mobile: false,
    duration: 1500,
})

sr.reveal('.flipy', {
    opacity: 0,
    scale: 0.9,
    reset: true,
    beforeReset: cannotClick,
    viewFactor: 1.0,
    mobile: false,
    duration: 1000,
    rotate: {
        x: 180,
    },
})

sr.reveal('.zoom-in', {
    origin: 'center',
    opacity: 0,
    scale: 0.2,
    reset: true,
    beforeReset: cannotClick,
    viewFactor: 0.2,
    mobile: false,
    duration: 1500,
})