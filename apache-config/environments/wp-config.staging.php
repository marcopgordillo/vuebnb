<?php
define('DB_NAME',          'wordpress');
define('DB_USER',          'wordpress');
define('DB_PASSWORD',      'wordpress');
define('DB_HOST',          'db:3306');
define('DB_CHARSET',       'utf8');
define('DB_COLLATE',       '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'e4a3139ef17b0a7e80c9553f524c7cd1c861a8ff');
define('SECURE_AUTH_KEY',  '8b7e54759a4c71b448d6ad0a348ab6a23a5d44d5');
define('LOGGED_IN_KEY',    '372f736f031ba29a931e1d6d370719f6cb6ea29e');
define('NONCE_KEY',        'e5c7957640d542b4cb32fea5e222815b3c6dbc57');
define('AUTH_SALT',        'accf81939e37ad85c9e9b3bf1b2f3455aee7dc5a');
define('SECURE_AUTH_SALT', '7c926b05145ee3c91acb12882ca76d3e4008418b');
define('LOGGED_IN_SALT',   'cee4060e1d0c77b0955cce24bafc91a5483fde06');
define('NONCE_SALT',       'f4e12df2c622444563410c7822a8797157393de9');
define('WP_SITEURL',       'http://staging.site.com/wordpress');
define('WP_HOME',          'http://staging.site.com');

define('WP_DEBUG',          true);
