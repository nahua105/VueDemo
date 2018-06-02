export default {
    name: 'vuebook',

    data() {
        return {
            book:'《vue.js实战》'
        }
    },
    computed: {
        bookName: {
            get:function(){
                return this.book;
            }
        }
    },
    mounted(){
            this.book='node.js';
    }
}