<template>
    <div id="app" :class="appClass">
        <div class="app-scroller">
            <div class="app-content">
                <div id="nav">
                    <!-- page title -->
                    <div
                        class="site-labels"
                        v-bind:style="content.header.style"
                    >
                        <div class="label1">
                            {{ content.header.title }}
                        </div>
                        <div class="label2">
                            {{ content.header.subtitle }}
                        </div>
                    </div>
                </div>

                <!-- main content -->
                <div class="card-container">
                    <template v-for="card in cards" :key="card.id">
                        <!-- card items -->
                        <div class="card" v-bind:style="card.style">
                            <a target="_blank" :href="card.link">
                                <div class="card-content">
                                    <div class="title">{{ card.title }}</div>
                                    <p>{{ card.description }}</p>
                                </div>
                            </a>
                        </div>
                    </template>
                </div>

            </div>

            <div id="footer">
                <a href="https://github.com/aalbrs/tiny-home" target="_blank">
                    View source on GitHub
                </a>
            </div>
        </div>
    </div>
</template>

<script>
// configuration
import siteContent from "@/content";
import { computed, reactive } from '@vue/runtime-core';


export default {
    name: "App",
    components: {},
    setup() {
        // get site configuration and apply
        const content = reactive(siteContent);
        // apply page title
        if (content.header.title !== null) {
            document.title = content.header.title;
        }
        // apply theme as class
        const appClass = computed(() => {
            return (
                (content.theme || "light") +
                " " +
                (content.useBackgroundImage
                    ? "background-image"
                    : "")
            );
        });

        // apply content/cards
        const cards = computed(() => {
            let cardIndex = 0;
            return content.cards.map((card) => {
                card["id"] = cardIndex;
                return card;
            });
        });
        
        return {
            content,
            cards,
            appClass
        }

    },

};
</script>



<style lang="scss">
$light-colour: #2c3e50;
$light-background-colour: white;
$light-link-colour: $light-colour;

$dark-colour: white;
$dark-background-colour: #2c3e50;
$dark-link-colour: $dark-colour;

// global resets
body,
html {
    height: 100%;
    margin: 0;
    padding: 0;
}
div {
    margin: 0;
    padding: 0;
}

// position app, set scrolling and themes
#app {
    position: relative;
    height: 100%;
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.app-scroller {
    position: absolute;
    overflow-y: auto;
    overflow-x: hidden;
    top: 0;
    bottom: 40px;
    left: 0;
    right: 0;
}

// add theme customisations here
#app.light {
    color: $light-colour;
    background-color: $light-background-colour;
    a {
        color: $light-link-colour;
    }
    .card {
        background-color: rgba($color: lightblue, $alpha: 0.3);
    }
}
#app.dark {
    color: $dark-colour;
    background-color: $dark-background-colour;
    a {
        color: $dark-link-colour;
    }
    .card {
        background-color: rgba($color: grey, $alpha: 0.6);
    }
}

#app.background-image {
    /* The image used */
    background-image: url("assets/background.jpg");

    /* Full height */
    height: 100%;

    /* Center and scale the image nicely */
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

#nav {
    width: 90%;
    max-width: 600px;
    padding: 30px 15px;
    
    .site-labels {
        display: block;

        .label1 {
            font-size: 1.6em;
            line-height: 2.0em;
        }
        .label2 {
            font-size: 1.2em;
            line-height: 1.4em;
        }
    }
}

#footer {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 0px 10px;
    font-size: 14px;
    line-height: 40px;
    background-color: $light-background-colour;
    text-align: right;
    a {
        // makes link clickable at full height of footer
        display: inline-block;
    }
}

#app.dark {
    #footer {
        background-color: $dark-background-colour;
    }
}

.app-content {
    // center content and use a max width for desktops
    width: 100%;
    max-width: 1000px;
    position: relative;
    margin: 0 auto;
    padding: 0 0 30px 0;

    // responsive grid layout set on container
    .card-container {
        display: grid;
        grid-column-gap: 20px;
        grid-row-gap: 20px;
        margin: 20px;
        // columns collapse at under 250px wide
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        justify-content: center;
    }

    // set base post style
    .card {
        text-decoration: none;
        a {
            text-decoration: none;
        }
        .card-content {
            padding: 15px;   
            .title {
                font-size: 1.4em;
            }
            p {
                font-size: 1em;
            }
        }
    }

}


</style>
