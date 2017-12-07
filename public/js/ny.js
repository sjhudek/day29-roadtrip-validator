Vue.component('triplinker', {
    props: ['link'],
    template: `<a :href="link.link"><button>{{link.buttonText}}</button></a>`
})

var visitSpot = new Vue({
    el: '#tripLoc',
    data: {
        message: 'Welcome to New York!'
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
            },
            {
                id: 2,
                link: '/san-francisco',
                buttonText: 'San Francisco'
            },

        ]
    }
})

var nyImg = new Vue({
    el: '#ny-Img',
    data: {
        url: 'http://static4.businessinsider.com/image/579f850a4321f1c72f8bbc9e-1190-625/the-15-best-new-york-city-neighborhoods-to-live-in.jpg'
    }
})


// alert('Going to New York')
