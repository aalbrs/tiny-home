<template>
    <!-- modify card content here -->
    <div class="card-container">

        <CardItem link="https://www.linkedin.com/in/d-aalbers" style="background-color: rgba(0, 0, 200, 0.55);">
            <template #icon>
                <LinkedinIcon />
            </template>
            <template #title>LinkedIn</template>
            <template #description>View professional profile</template>
        </CardItem>

        <CardItem link="https://github.com/aalbrs?tab=repositories" style="background-color: rgba(130, 50, 80, 0.6);">
            <template #icon>
                <GithubIcon />
            </template>
            <template #title>GitHub</template>
            <template #description>Browse public code repos</template>
        </CardItem>

        <CardItem link="https://www.instagram.com/aalbe.rs/" style="background-color: rgba(250, 0, 0, 0.65);">
            <template #icon>
                <InstagramIcon />
            </template>
            <template #title>Instagram</template>
            <template #description>Photography by @aalbe.rs</template>
        </CardItem>

        <CardItem link="https://twitter.com/aalbs" style="background-color: rgba(215, 88, 0, 0.8);">
            <template #icon>
                <TwitterIcon />
            </template>
            <template #title></template>
            <template #description>@aalbs on Twitter / X</template>
        </CardItem>

    </div>
</template>

<script setup lang="ts">
import CardItem from './CardItem.vue';
import GithubIcon from './assets/icons/GithubIcon.vue';
import InstagramIcon from './assets/icons/InstagramIcon.vue';
import LinkedinIcon from './assets/icons/LinkedinIcon.vue';
import TwitterIcon from './assets/icons/TwitterIcon.vue';


</script>
