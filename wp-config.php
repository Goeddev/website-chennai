<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'digitan1_WPDVV');

/** MySQL database username */
define('DB_USER', 'digitan1_WPDVV');

/** MySQL database password */
define('DB_PASSWORD', 'VcF}6.*lX97O3M<hy');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY', 'be51975ce9bf6a15339f99a6c58b86759039d24169419c9e9f0cbbb66745d453');
define('SECURE_AUTH_KEY', 'f0daeaf4eefd727f7541d00b7eff56c59af77de4346583de02d317761c3b37fa');
define('LOGGED_IN_KEY', '8bfc97a86ae5d549339431d0414d05ff4a066b81e34abb10718e14ca048a8a6a');
define('NONCE_KEY', 'cbdfdcd3395696b98b8643eb5625caec4d34063c6b2759127d2a88898c27bed1');
define('AUTH_SALT', '084f6f90bec287ec446c5f0b110d3cad1756ba3c4c523e6c59d3b8bae5a580ce');
define('SECURE_AUTH_SALT', '32bd5cd453fee822329a6e0c7db5f1af2e54149b7db6e5fec5fa605480bfb02a');
define('LOGGED_IN_SALT', '9137e58629303bdeb0765f5c9c93bf5d0a107b0a41dd9f25afecf08b642d7828');
define('NONCE_SALT', '4f20bf56f641c0e29ed94e971f6afa8dc02f5d9ab7d096b11ffc8e80c79aa4c8');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'yMm_';
define('WP_CRON_LOCK_TIMEOUT', 120);
define('AUTOSAVE_INTERVAL', 300);
define('WP_POST_REVISIONS', 5);
define('EMPTY_TRASH_DAYS', 7);
define('WP_AUTO_UPDATE_CORE', true);

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
