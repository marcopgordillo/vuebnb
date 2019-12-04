<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <link rel="icon" href="/favicon.ico">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Vue bnb</title>
    <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
    <script defer src="{{ asset('js/app.js') }}"></script>
    <script type="text/javascript">
        window.vuebnb_listing_model = "{!! addslashes(json_encode($model)) !!}"
    </script>
</head>
<body>
    <div id="toolbar" class="toolbar">
        <img class="icon" src="{{ asset('images/logo.png') }}">
        <h1>vuebnb</h1>
    </div>
    <noscript>
        <strong>We're sorry but vuebnb-prototype doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>
    </noscript>
    <div id="app"></div>
<!-- built files will be auto injected -->
</body>
</html>
