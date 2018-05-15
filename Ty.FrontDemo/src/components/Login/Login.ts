
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
    /*
    self.$http.post(self.baseURL+'/api/Auth/Login',reqData,{dataType:'jsonp'})
    .then(data => {
        if(data.status==200){
            console.log(data.data);
            var tgData=data.data;
            if(tgData.Success){
              localStorage.setItem('ms_username',tgData.Data.UserName);
              localStorage.setItem('ms_rolename',tgData.Data.RoleName);
              localStorage.setItem('ms_deptname',tgData.Data.DeptName);
              localStorage.setItem('ms_userid',tgData.Data.UserId);
              localStorage.setItem('ms_roleid',tgData.Data.RoleId);
              localStorage.setItem('ms_deptid',tgData.Data.DeptId);
              localStorage.setItem('ms_token',tgData.Token);
              localStorage.setItem('ms_expire',tgData.Expire);
              self.$router.push('/home');
            }
            else{
              alert(tgData.Message);
            }
        }
        else{
          alert('登陆失败.');
      }
    });
      */

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