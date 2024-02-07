<script lang="ts" setup>
    //useHead({
    //    title: "Home",
    //});
</script>
<template>
    <div class="text-cat-text p-4 h-full flex flex-row justify-left items-center gap-8">
        <Bar />
        <div class="flex flex-col justify-left items-left flex-wrap">
            <h1 class="text-xl text-cat-flamingo font-bold"> Wassup, my name is </h1>
            <h1 class="text-4xl font-bold mb-4"> DADDY </h1>
            <h1 class="text-3xl font-bold mb-4"> I make stuff </h1>
            <p class="text-lg font-semibold mb-4"> I am a fullstack developer who makes stuff in my free time. </p>
            <div class="flex flex-row justify-left items-center gap-4">
                <NuxtLink to="/projects" class="p-2 text-lg font-semibold border-2 border-cat-flamingo rounded-md hover:bg-cat-flamingo hover:text-cat-base transition-all ease-in-out duration-200"> Projects </NuxtLink>
                <NuxtLink to="https://github.com/motortruck1221" target="_blank" class="p-2 text-lg font-semibold border-2 border-cat-flamingo rounded-md hover:bg-cat-flamingo hover:text-cat-base transition-all ease-in-out duration-200"> Github </NuxtLink>
                <NuxtLink to="/blog" class="p-2 text-lg font-semibold border-2 border-cat-flamingo rounded-md hover:bg-cat-flamingo hover:text-cat-base transition-all ease-in-out duration-200"> Blog </NuxtLink>
            </div>
        </div>
    </div>
</template>
