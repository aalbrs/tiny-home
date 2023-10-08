<template>
    <!-- card item -->
    <div class="card">
        <a target="_blank" :href="link">
            <div class="card-content">
                <slot name="title"></slot>
                <p><slot name="description"></slot></p>
            </div>
        </a>
    </div>
</template>

<script setup lang="ts">

defineProps<{
    link: string
}>();


</script>

