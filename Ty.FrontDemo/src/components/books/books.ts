export default {
    data() {
        return {
            formItemFlag:false,
            formItem: {
                input: '',
                select: '',
                radio: 'male',
                checkbox: [],
                switch: true,
                date: '',
                time: '',
                slider: [20, 50],
                textarea: ''
            },
            columns4: [
                {
                    type: 'selection',
                    width: 60,
                    align: 'center'
                },
                {
                    title: 'Name',
                    key: 'name'
                },
                {
                    title: 'Type',
                    key: 'Type'
                },
                {
                    title: 'Address',
                    key: 'address'
                },
                {
                    title: 'Action',
                    key: 'action',
                    width: 150,
                    align: 'center',
                    render: (h, params) => {
                        return h('div', [
                            h('Button', {
                                props: {
                                    type: 'primary',
                                    size: 'small'
                                },
                                style: {
                                    marginRight: '5px'
                                },
                                on: {
                                    click: () => {
                                        this.show(params.index)
                                    }
                                }
                            }, 'View'),
                            h('Button', {
                                props: {
                                    type: 'error',
                                    size: 'small'
                                },
                                on: {
                                    click: () => {
                                        this.remove(params.index)
                                    }
                                }
                            }, 'Delete')
                        ]);
                    }
                }
            ],
            data1: [
                {
                    name: 'Vue.js实战开发',
                    Type: 'vue',
                    address: 'New York No. 1 Lake Park',
                    date: '2017-10-03'
                },
                {
                    name: '深入浅出Webpack',
                    Type: 'webpack',
                    address: 'London No. 1 Lake Park',
                    date: '2016-10-01'
                },
                {
                    name: '敏捷软件开发',
                    Type: '敏捷开发',
                    address: 'Sydney No. 1 Lake Park',
                    date: '2016-10-02'
                },
                {
                    name: 'Jon Snow',
                    age: 26,
                    address: 'Ottawa No. 2 Lake Park',
                    date: '2016-10-04'
                }
            ]
        }
    },
    methods:{
        handleSelectAll (status) {
            this.$refs.selection.selectAll(status);
        },
        show (index) {
            this.$Modal.info({
                title: 'User Info',
                content: `Name：${this.data1[index].name}<br>Age：${this.data1[index].Type}<br>Address：${this.data1[index].address}`
            })
        },
        remove (index) {
            this.data1.splice(index, 1);
        },
        onSubmitForm () {
            this.$Message.info('已提交');
            this.formItemFlag=false; 
        },
        cancel () {    
            this.formItemFlag=false;     
        },
        onClickForm(){
            this.formItemFlag=true;
        }
    }
}