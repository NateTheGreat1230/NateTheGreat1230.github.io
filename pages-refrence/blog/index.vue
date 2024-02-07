<script lang="ts" setup>
    useHead({
        title: 'Blog',
    })
</script>
<template>
    <div class="h-full text-cat-text flex flex-row justify-left items-center gap-8 p-4"> 
        <Bar />
        <div class="h-full w-full flex flex-col justify-left items-top gap-4">
            <h1 class="text-4xl font-bold">Blog Posts</h1>
            <ContentNavigation v-slot="{ navigation }">
                <div class="h-full w-full flex flex-col flex-wrap justify-left items-top gap-4" v-for="link of navigation" :key="link._path">
                    <NuxtLink v-for="link of link.children" :key="link._path" :to="link._path" 
                            class="w-full md:w-1/2 h-16 flex flex-col jusitfy-left items-top bg-cat-crust pr-2 pl-2 pt-2 border-2 border-cat-pink hover:border-cat-sapphire transition-all ease-in-out duration-300 hover:scale-105 active:scale-100">
                        <h3 class="text-cat-text whitespace-nowrap text-ellipsis overflow-hidden font-semibold text-xl w-full">{{ link.title }}</h3>
                        <p class="text-cat-text opacity-75 whitespace-nowrap text-ellipsis overflow-hidden w-full">{{ link.description || "No Description" }}</p>
                    </NuxtLink>
                </div>
            </ContentNavigation>
        </div>
    </div>
</template>
