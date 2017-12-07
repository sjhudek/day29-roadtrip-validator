Vue.component('triplinker', {
    props: ['link'],
    template: `<a :href="link.link"><button>{{link.buttonText}}</button></a>`
})

var visitSpot = new Vue({
    el: '#tripLoc',
    data: {
        message: 'Welcome to Seattle!'
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
                link: '/san-francisco',
                buttonText: 'Back to San Francisco'
            },
            {
                id: 2,
                link: '/wash-dc',
                buttonText: 'Washington, D.C.'
            },

        ]
    }
})

var seattleImg = new Vue({
    el: '#seattle-Img',
    data: {
        url: 'http://www.bekinsmovingandstorage.com/wp-content/uploads/2016/03/SeattleCity2.jpg'
    }
})


// alert('Welcome to Seattle');
