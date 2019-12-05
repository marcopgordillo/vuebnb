<template>
  <div>
    <header-image
      :image-url="listing.images[0]"
      @header-clicked="openModal"
      :id="listing.id"
    />
    <div class="listing-container">
      <div class="heading">
        <h1>{{ listing.title }}</h1>
        <p>{{ listing.address }}</p>
      </div>
      <hr />
      <div class="about">
        <h3>About this listing</h3>
        <expandable-text>{{ listing.about }}</expandable-text>
      </div>
      <div class="lists">
        <feature-list title="Amenities" :items="listing.amenities">
          <template slot-scope="amenity">
            <font-awesome-icon :icon="amenity.icon" size="lg" />
            <span>{{ amenity.title }}</span>
          </template>
        </feature-list>
        <feature-list title="Prices" :items="listing.prices">
          <template slot-scope="price">
            {{ price.title }}: <strong>{{ price.value }}</strong>
          </template>
        </feature-list>
      </div>
    </div>
    <modal-window ref="imagemodal">
      <image-carousel :images="listing.images"></image-carousel>
    </modal-window>
  </div>
</template>

<script src="./ListingPage.js"></script>
<style src="./ListingPage.scss" lang="scss" scoped></style>
