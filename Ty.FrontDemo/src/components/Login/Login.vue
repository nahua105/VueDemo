<template>
  <div>
    <canvas id="canvas" class="canvas"></canvas>
    <transition name="fade-out">
      <div v-show="!login">
        <div class="logo-bg"></div>
        <div class="nav">
          <a class="gv" href="javascript:;" @click="onLoginClick">客户登录</a>
          </router-link>
        </div>
      </div>
    </transition>
    <div class="city"></div>
    <div class="moon"></div>
    <!-- <button @click="onLoginClick">登陆</button> -->

  </div>
</template>

//
<script src="./Login.ts"></script>

<script>
  import Stars from '../../static/js/Star'
  import Moon from '../../static/js/Moon'
  import Meteor from '../../static/js/Meteor'
  export default {
    name: 'HelloWorld',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        loginForm: {
          username: '',
          password: ''
        },
        loginRuleForm: {
          username: [
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
      onLoginClick() {
        let self = this;
        var reqData = {
          username: 'admin',
          password: '123456'
        };
        var mockLogin = function () {
          localStorage.setItem('ms_username', reqData.username);
          self.$router.push('/home');
          return true;
        }
        if (mockLogin()) {
          self.$router.push('/home');
        } else {
          alert('登陆失败.');
        }
      },
      onReadJson: function () {
        let self = this;
        var url2 = './../static/datas/test.json';
        self.$http.get(url2, {})
          .then(function (response) {
            if (response.status === 200) {
              self.json = response.data;
            }
          }).catch(function (error) {
            alert(error);
          });
      }
    },
    mounted() {
      let canvas = document.getElementById('canvas'),
        ctx = canvas.getContext('2d'),
        width = window.innerWidth,
        height = window.innerHeight,
        //实例化月亮和星星。流星是随机时间生成，所以只初始化数组
        moon = new Moon(ctx, width, height),
        stars = new Stars(ctx, width, height, 200),
        meteors = [],
        count = 0
      canvas.width = width;
      canvas.height = height;
      const meteorGenerator = () => {
        //x位置偏移，以免经过月亮
        let x = Math.random() * width + 800
        meteors.push(new Meteor(ctx, x, height))
        //每隔随机时间，生成新流星
        setTimeout(() => {
          meteorGenerator()
        }, Math.random() * 2000)
      }
      const frame = () => {
        count++
        count % 10 == 0 && stars.blink()
        moon.draw()
        stars.draw()
        meteors.forEach((meteor, index, arr) => {
          //如果流星离开视野之内，销毁流星实例，回收内存
          if (meteor.flow()) {
            meteor.draw()
          } else {
            arr.splice(index, 1)
          }
        })
        requestAnimationFrame(frame)
      }
      meteorGenerator()
      frame()
    }
  }

</script>
<style scoped src="./Login.css"></style>
