Vue.component('popUpMenu',{
    data: function () {
        return{
            toggle: false,
            count:0
        }
    },
    props: ['name',
            'brand',
            'price'
            ],
    template:
        '<div  v-on:click="toggle = !toggle"> ' +
        '<button class="button2" v-if="!toggle">{{name}}</button>'+
        '<div class="card" v-if="toggle"><p>Instrument Name: {{name}}' +
        '<br>Instrument Price: {{price}}' +
        '<br>Instrument Brand: {{brand}}</p>' +
        '</div>'+
        '</div>'
})

new Vue({
    el: "#Instrument-Store",
    data:{
        instruments:[
            {name:"Electric guitar",
                type:"Chordophone",
                price:"$2099.99",
                brand:"Fender",
                img:"img/eleGu.jpg",
                hover:false,
                popUp:false,
            },
            {name:"Keyboard",
                type:"Chordophone",
                price:"$418.99",
                brand:"Yamaha",
                img:"img/key.jpg",
                hover:false,
                popUp:false,
            },
            {name:"Acoustic Guitars",
                type:"Chordophone",
                price:"$3500.00",
                brand:"Maton",
                img:"img/Acoustic Guitars.png",
                hover:false,
                popUp:false,

            },
            {name:"Player Plus Jazz Bass",
                type:"Chordophone",
                price:"$1199.99",
                brand:"Fender",
                img:"img/Player-Bass.jpg",
                hover:false,
                popUp:false,
            },
            {name:"Drums",
                type:"Percussion",
                price:"$709.99",
                brand:"Yamaha",
                img:"img/drum.jpg",
                hover:false,
                popUp:false,
            },
            {name:"Electric guitar BB1200",
                type:"Chordophone",
                price:"$899.99",
                brand:"Maton",
                img:"img/Electri-BB1200.png",
                hover:false,
                popUp:false,
            },
        ],
        inCart:[],
        form:{
            name:"",
            type:"",
            price:"",
            brand:"",
            img:"",
            hover:false,
            popUp:false,
        },
        storeMess:"",
        cartMess:""
    },
    computed:{
        storeLength: function () {
            return this.instruments.length;
        },
        cartLength: function () {
            return this.inCart.length;
        }
    },
    watch:{
        storeLength: function () {
            if (this.storeLength === 0){
                    this.storeMess = "Store is empty"
            }else {
                this.storeMess = "";
            }
        },
        cartLength: function () {
            if (this.cartLength === 0){
                this.cartMess = "Cart is empty"
            }else {
                this.cartMess = "";
            }
        }
    },
    methods: {
        closeAddInstMenu: function () {
            document.getElementById('myForm').style.display = "none";
        },
        openAddInstMenu: function () {
            document.getElementById('myForm').style.display = "block";
        },
        addInst: function () {
            if (this.form.name ===""
                || this.form.type === ""
                || this.form.brand === ""){
                alert("one or more fields are missing")
            }else {
                this.instruments.push(this.form);
                this.form={
                    name:"",
                    type:"",
                    price:"",
                    brand:"",
                    img:"",
                    hover:false,
                    popUp:false
                }
            }
        },
        addToCart: function (i) {
            this.inCart.push(this.instruments.splice(i, 1)[0]);
            for (i in this.inCart){
                this.inCart[i].popUp = false;
            }
        },
        addToStore: function () {
            this.instruments.push(...this.inCart);
            for (i in this.instruments){
                this.instruments[i].popUp = false;
            };
            this.inCart=[];
        }
    }
})
