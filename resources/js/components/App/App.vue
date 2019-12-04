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
        <hr />
        <div class="amenities list">
          <div class="title"><strong>Amenities</strong></div>
          <div class="content">
            <div
              class="list-item"
              v-for="amenity in amenities"
              :key="amenity.id"
            >
              <font-awesome-icon :icon="amenity.icon" size="lg" />
              {{ amenity.title }}
            </div>
          </div>
        </div>
        <hr />
        <div class="prices list">
          <div class="title">
            <strong>Prices</strong>
          </div>
          <div class="content">
            <div class="list-item" v-for="price in prices" :key="price.id">
              {{ price.title }}: <strong>{{ price.value }}</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
    <modal-window ref="imagemodal">
      <image-carousel :images="images"></image-carousel>
    </modal-window>
  </div>
</template>

<script src="./App.js"></script>
<style src="./App.scss" lang="scss" scoped></style>
