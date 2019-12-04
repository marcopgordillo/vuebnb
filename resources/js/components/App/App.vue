<template>
  <div>
    <header-image
      :image-url="images[0]"
      @header-clicked="openModal"
    ></header-image>
    <div class="container">
      <div class="heading">
        <h1>{{ title }}</h1>
        <p>{{ address }}</p>
      </div>
      <hr />
      <div class="about">
        <h3>About this listing</h3>
        <p :class="{ contracted }">{{ about }}</p>
        <button v-if="contracted" v-on:click="contracted = false" class="more">
          <font-awesome-icon icon="plus" size="xs" /> More
        </button>
      </div>
      <div class="lists">
        <feature-list title="Amenities" :items="amenities">
          <template slot-scope="amenity">
            <font-awesome-icon :icon="amenity.icon" size="lg" />
            {{ amenity.title }}
          </template>
        </feature-list>
        <feature-list title="Prices" :items="prices">
          <template slot-scope="price">
            {{ price.title }}: <strong>{{ price.value }}</strong>
          </template>
        </feature-list>
      </div>
    </div>
    <modal-window ref="imagemodal">
      <image-carousel :images="images"></image-carousel>
    </modal-window>
  </div>
</template>

<script src="./App.js"></script>
<style src="./App.scss" lang="scss" scoped></style>
