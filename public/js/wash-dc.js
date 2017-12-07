Vue.component('triplinker', {
    props: ['link'],
    template: `<a :href="link.link"><button>{{link.buttonText}}</button></a>`
})

var visitSpot = new Vue({
    el: '#tripLoc',
    data: {
        message: 'Welcome to Washington, D.C.!'
    }
});


var addlinks = new Vue({
    el: '#addLinks',
    data: {
        linkList: [
            {
                id: 0,
                link: '/',
                buttonText: 'Go Home'
            },
            {
                id: 1,
                link: '/boulder',
                buttonText: 'Back to Boulder'
            }

        ]
    }
})

var dcImg = new Vue({
    el: '#dc-Img',
    data: {
        url: 'https://kids.nationalgeographic.com/content/dam/kids/photos/States/O-W/washington-dc-capitol.ngsversion.1435610747994.jpg'
    }
})


// alert('Welcome to Washington, D.C.')
