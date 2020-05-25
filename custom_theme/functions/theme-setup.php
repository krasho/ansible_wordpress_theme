<?php
function theme_scripts() {
    global $wp_styles;

    wp_enqueue_style ('main.css', get_template_directory_uri().'/assets/dist/main.css');
	wp_enqueue_script( 'main.js', get_template_directory_uri().'/assets/dist/main.js', false, NULL, true  );

}    

add_action('wp_enqueue_scripts', 'theme_scripts', 999);
