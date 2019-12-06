<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <link rel="icon" href="/favicon.ico">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Vue bnb</title>
    <link rel="stylesheet" href="{{ cdn('css/app.css') }}">
    <script defer src="{{ cdn('js/app.js') }}"></script>
    <script type="text/javascript">
        window.vuebnb_server_data = "{!! addslashes(json_encode($data)) !!}";
        window.csrf_token = "{{ csrf_token() }}";
        window.cdn_url = "{{ cdn('') }}";
    </script>
</head>
<body>
    <noscript>
        <strong>We're sorry but vuebnb doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>
    </noscript>
    <div id="app"></div>
<!-- built files will be auto injected -->
</body>
</html>
