<script lang="ts" setup>
    const props = defineProps({
        title: String,
        description: String,
        image: String,
        link: String,
    });
</script>
<template>
        <div class="flex flex-col justify-center items-center gap-4 w-80  p-4 bg-black bg-opacity-70 border-2 border-white hover:border-violet-500 text-white rounded-xl flex-wrap text-center transition-all ease-in-out duration-300">
            <img :src="image" class="w-full h-32 object-cover rounded-lg" /> 
            <h1 class="text-2xl font-bold">{{ title }}</h1>
            <p class="text-xl">{{ description }}</p>
            <NuxtLink :to="link" target="_blank">
                <button class="text-xl border border-white hover:border-violet-500 hover:text-violet-500 p-2 rounded-lg mr-1 ">GitHub Repo <font-awesome-icon :icon="['fab', 'github']" /></button>
            </NuxtLink>
        </div>
</template>
