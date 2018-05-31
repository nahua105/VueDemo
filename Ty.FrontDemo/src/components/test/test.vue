<template>
  <div class="carousel-wrap" id="carousel">
    需要学习的书：{{bookName}} <br>
    <div class="carousel-items">
  <span v-for="(item,index) in slideList.length" :class="{'active':index===currentIndex}" @mouseover="change(index)"></span>
    </div>
    <transition-group tag="ul" class='slide-ul' name="list">
      <li v-for="(list,index) in slideList" :key="index" v-show="index===currentIndex" @mouseenter="stop" @mouseleave="go">
        <a :href="list.clickUrl" >
          <img :src="list.image" :alt="list.desc">
        </a>
        
      </li>
    </transition-group>
    
    </div>
</template>

<script src="./test.ts"></script>
<style src="./test.css"></style>
