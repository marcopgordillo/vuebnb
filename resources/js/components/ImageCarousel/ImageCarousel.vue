<template>
    <div class="image-carousel">
        <img :src="image"/>
        <div class="controls">
            <carousel-control
              dir="left"
              @change-image="changeImage"
            ></carousel-control>
            <carousel-control
              dir="right"
              @change-image="changeImage"
            ></carousel-control>
        </div>
    </div>
</template>

<script src="./ImageCarousel.js"></script>
<style src="./ImageCarousel.scss" lang="scss" scoped></style>
