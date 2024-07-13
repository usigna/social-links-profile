let tl = gsap.timeline();

tl.from('.container', {duration: .6, ease: 'expoScale(0.5,7,none)', y: -250, delay: 1, opacity: 0});
tl.from('.photo', {duration: .6, ease: 'power1.in', scale: 0});
tl.from('.content__item', {duration: .6, ease: 'power1.in', y: 50, opacity: 0, stagger: 0.6});
tl.from('.links a', {duration: .6, ease: 'power1.in', y: 50, opacity: 0, stagger: 0.6});
tl.from('.attribution', {duration: .6, ease: 'expoScale(0.5,7,none)', y: 50, delay: .2, opacity: 0});

