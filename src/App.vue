<template>
    <div id="app" :class="appClass">
        <div class="app-scroller">
            <div class="app-content">
                <div id="nav">
                    <!-- page title -->
                    <div class="site-labels" v-bind:style="header.style">
                        <div class="label1">
                            {{ header.title }}
                        </div>
                        <div class="label2">
                            {{ header.subtitle }}
                        </div>
                    </div>
                </div>

                <!-- main content, check Cards.vue to start editing -->
                <Cards />
            </div>

            <div id="footer">
                <a href="https://github.com/aalbrs/tiny-home" target="_blank">
                    View source on GitHub
                </a>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import Cards from './Cards.vue';

// START
// set some quick settings here
const useBackgroundImage = true;
const theme = "dark"; // light | dark
const header = {
    title: "David Aalbers",
    subtitle: "Web and Geospatial Developer / New Zealand",
    style: {
        // add additional CSS for header here
        "color": 'white'
    }
}


// apply page title
if (header.title !== null) {
    document.title = header.title;
}

// apply theme as class
const appClass = computed(() => {
    return (
        (theme || "light") + " " + (useBackgroundImage ? "background-image" : "")
    );
});

</script>

