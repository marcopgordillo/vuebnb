<template>
  <div id="app">
    <div class="header">
      <div
        class="header-img"
        :style="headerImageStyle"
        v-on:click="modalOpen = true"
      >
        <button class="view-photos">View Photos</button>
      </div>
    </div>
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
    <div id="modal" :class="{ show: modalOpen }">
      <button v-on:click="modalOpen = false" class="modal-close">
        <font-awesome-icon icon="times" /><span class="sr-only">Close</span>
      </button>
      <div class="modal-content">
         <img src="../../../assets/images/header.jpg" />
      </div>
    </div>
  </div>
</template>

<script src="./App.js"></script>
<style src="./App.scss" lang="scss" scoped></style>
