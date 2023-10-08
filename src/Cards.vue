<template>
    <!-- modify card content here -->
    <div class="card-container">

        <CardItem link="https://www.linkedin.com/in/d-aalbers" style="background-color: rgba(0, 0, 200, 0.55);">
            <template #title>LinkedIn</template>
            <template #description>View profile</template>
        </CardItem>

        <CardItem link="https://github.com/aalbrs?tab=repositories" style="background-color: rgba(130, 50, 80, 0.6);">
            <template #title>Code</template>
            <template #description>View public repos on GitHub</template>
        </CardItem>

        <CardItem link="https://www.instagram.com/aalbe.rs/" style="background-color: rgba(250, 0, 0, 0.7);">
            <template #title>Instagram</template>
            <template #description>@aalbe.rs</template>
        </CardItem>

        <CardItem link="https://twitter.com/aalbs" style="background-color: rgba(215, 88, 0, 0.8);">
            <template #title>Twitter / X</template>
            <template #description>@aalbs</template>
        </CardItem>

    </div>
</template>

<script setup lang="ts">
import CardItem from './CardItem.vue';


</script>
