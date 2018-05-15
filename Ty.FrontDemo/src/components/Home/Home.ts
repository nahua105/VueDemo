
export default{
    data(){
        return {
        }
    },
    computed:{
        currUser:function() {
            return localStorage.getItem('ms_username');
        }
    },
    methods:{
        onLogoutClick(){
            var self = this;

            var mockLogout=function(){
                
                localStorage.removeItem('ms_username');
                return true;
            }
            if(mockLogout()){
                this.$router.push('/login');
            }
            /*
            self.$http.post(self.baseURL+'/api/Auth/Logout', {}, {dataType: 'jsonp'})
            .then(data => {
                console.log(data);
                localStorage.removeItem('ms_username');
                localStorage.removeItem('ms_rolename');
                localStorage.removeItem('ms_deptname');
                localStorage.removeItem('ms_userid');
                localStorage.removeItem('ms_roleid');
                localStorage.removeItem('ms_deptid');
                localStorage.removeItem('ms_token');
                localStorage.removeItem('ms_expire');
                this.$router.push('/login');
            })
            .catch(function (error) {
                alert('操作失败');
                console.log(error);
            });
            */
        },
        onTopMenuSelect(menuName){
            this.$router.push('/'+menuName);
        }
    }
}