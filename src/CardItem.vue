<template>
    <!-- card item -->
    <div class="card">
        <a target="_blank" :href="link">
            <div class="card-content">
                <div class="top-row">
                    <slot name="icon"></slot>
                    <slot name="title"></slot>
                </div>
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

