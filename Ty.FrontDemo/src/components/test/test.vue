<template>
    <Carousel
        v-model="value3"
        :autoplay="setting.autoplay"
        :autoplay-speed="setting.autoplaySpeed"
        :dots="setting.dots"
        :radius-dot="setting.radiusDot"
        :trigger="setting.trigger"
        :arrow="setting.arrow">
        <CarouselItem>
            <div class="demo-carousel">
              <img class="imgshow" src="./../../assets/desk1.jpg" alt="">
            </div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel">
              <img class="imgshow" src="./../../assets/desk2.jpg" alt="">
            </div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel">
              <img class="imgshow" src="./../../assets/desk3.jpg" alt="">
            </div>
        </CarouselItem>
        <CarouselItem>
              <img class="imgshow" src="./../../assets/desk4.jpg" alt="">
            <div class="demo-carousel"></div>
        </CarouselItem>
    </Carousel>
</template>
<script src="./test.ts"></script>
<style src="./test.css"></style>
