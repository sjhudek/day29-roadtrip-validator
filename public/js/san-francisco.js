Vue.component('triplinker', {
    props: ['link'],
    template: `<a :href="link.link"><button>{{link.buttonText}}</button></a>`
})

var visitSpot = new Vue({
    el: '#tripLoc',
    data: {
        message: 'Welcome to San Francisco!'
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
                link: '/ny',
                buttonText: 'Back to New York'
            },
            {
                id: 2,
                link: '/seattle',
                buttonText: 'Seattle'
            },

        ]
    }
})

var sanfranciscoImg = new Vue({
    el: '#san-francisco-Img',
    data: {
        url: 'https://www.wheretraveler.com/sites/default/files/styles/wt17_promoted/public/San-Francisco-shutterstock_121582312.jpg?itok=PxJ2IZMh'
    }
})


// alert('Welcome to San Francisco!')
