Vue.component('triplinker', {
    props: ['link'],
    template: `<a :href="link.link"><button>{{link.buttonText}}</button></a>`
})

var visitSpot = new Vue({
    el: '#tripLoc',
    data: {
        message: 'Welcome to Boulder!'
    }
});


var addlinks = new Vue({
    el: '#addLinks',
    data: {
        linkList: [
            {
                id: 0,
                link: '/',
                buttonText: 'Boulder'
            },
            {
                id: 1,
                link: '/ny',
                buttonText: 'New York'
            },

        ]
    }
})

var boulderImg = new Vue({
    el: '#boulder-Img',
    data: {
        url: 'https://i.imgur.com/Wpl81cP.jpg?1'
    }
})
