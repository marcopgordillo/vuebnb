<template>
  <div>
    <header-image
      v-if="images[0]"
      :image-url="images[0]"
      @header-clicked="openModal"
      :id="id"
    ></header-image>
    <div class="listing-container">
      <div class="heading">
        <h1>{{ title }}</h1>
        <p>{{ address }}</p>
      </div>
      <hr />
      <div class="about">
        <h3>About this listing</h3>
        <expandable-text>{{ about }}</expandable-text>
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

<script src="./ListingPage.js"></script>
<style src="./ListingPage.scss" lang="scss" scoped></style>
