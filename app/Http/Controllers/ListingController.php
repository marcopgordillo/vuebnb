<?php

namespace App\Http\Controllers;

use App\Listing;
use Illuminate\Http\Request;

class ListingController extends Controller
{
  public function get_listing_api(Listing $listing)
  {
    $data = $this->get_listing($listing);
    return response()->json($data);
  }

  public function get_listing_web(Listing $listing)
  {
    $data = $this->get_listing($listing);
    return view('app', ['data' => $data]);
  }

  public function get_home_web()
  {
    $collection = Listing::all([
      'id', 'address', 'title', 'price_per_night'
    ]);
    $collection->transform(function($listing) {
      $listing->thumb = asset(
        'images/' . $listing->id . '/Image_1_thumb.jpg'
      );
      return $listing;
    });
    $data = collect(['listings' => $collection->toArray()]);
    return view('app', ['data' => $data]);
  }

  private function get_listing($listing)
  {
    $model = $listing->toArray();
    for($i = 1; $i <=4; $i++) {
      $model['image_' . $i] = asset(
        'images/' . $listing->id . '/Image_' . $i . '.jpg'
      );
    }
    return collect(['listing' => $model]);
  }
}
