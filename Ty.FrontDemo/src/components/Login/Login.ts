import Stars from '../../static/js/star'
import Moon from '../../static/js/Moon'
import Meteor from '../../static/js/Meteor'

export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      loginForm:{
        username:'',
        password:''
      },
      loginRuleForm:{
        username:[
          //require:true,
        ]
      }
    }
  },
  created: function () {
    //this.onReadJson();
  },
  
 
  methods: {
    //登陆
    onLoginClick(){
    let self = this;
    var reqData= {
        username: 'admin',
        password: '123456'
    };
    var mockLogin=function(){      
      localStorage.setItem('ms_username',reqData.username);
      self.$router.push('/home');
      return true;
    }
    if(mockLogin()){
      self.$router.push('/home');
    }
    else{
      alert('登陆失败.');
    }
    },
    onReadJson: function () {
      let self = this;
      var url2='./../static/datas/test.json';
      self.$http.get(url2, {})
      .then(function (response) {
        if (response.status === 200) {
          self.json =response.data;
        }
      }).catch(function (error) {
        alert(error);
      });
    }
  }
}