<script lang="ts" setup>
    const props = defineProps({
        title: String,
        description: String,
        image: String,
        link: String,
    });
</script>
<template>
        <div class="flex flex-col justify-center items-center gap-4 w-80 h-96 p-4 bg-cat-crust border-2 border-cat-sapphire hover:border-cat-pink rounded-lg flex-wrap text-cat-text text-center transition-all ease-in-out duration-300 hover:scale-105">
            <img :src="image" class="w-full h-36 object-cover rounded-lg" />
            <h1 class="text-2xl font-bold">{{ title }}</h1>
            <p class="text-xl">{{ description }}</p>
            <NuxtLink :to="link" target="_blank" class="text-xl underline">View on GitHub</NuxtLink>
        </div>
</template>
