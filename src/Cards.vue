<template>
    <!-- modify card content here -->
    <div class="card-container">

        <CardItem link="https://www.linkedin.com/in/d-aalbers" style="background-color: rgba(0, 0, 200, 0.55);">
            <template #icon>
                <LinkedinIcon />
            </template>
            <template #title>LinkedIn</template>
            <template #description>David Aalbers</template>
        </CardItem>

        <CardItem link="https://github.com/aalbrs?tab=repositories" style="background-color: rgba(130, 50, 80, 0.6);">
            <template #icon>
                <GithubIcon />
            </template>
            <template #title>GitHub</template>
            <template #description>@aalbrs public repos</template>
        </CardItem>

        <CardItem link="https://www.instagram.com/aalbe.rs/" style="background-color: rgba(250, 0, 0, 0.65);">
            <template #icon>
                <InstagramIcon />
            </template>
            <template #title>Instagram</template>
            <template #description>Photography by @aalbe.rs</template>
        </CardItem>

        <CardItem link="https://www.goodreads.com/review/list/32835771-david-aalbers?shelf=recommended" style="background-color: rgba(215, 88, 0, 0.8);">
            <template #title>Goodreads</template>
            <template #description>My book recommendations</template>
        </CardItem>

    </div>
</template>

<script setup lang="ts">
import CardItem from './CardItem.vue';
import GithubIcon from './assets/icons/GithubIcon.vue';
import InstagramIcon from './assets/icons/InstagramIcon.vue';
import LinkedinIcon from './assets/icons/LinkedinIcon.vue';


</script>
