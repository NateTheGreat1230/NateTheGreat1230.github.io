<script lang="ts" setup>
    import type { NuxtError } from '#app';
    const props = defineProps({
        error: Object as () => NuxtError
    });
    useHead({
        title: 'Error'
    });
</script>
<template>
    <div>
        <NuxtLayout>
            <div class="flex h-lg p-4 justify-center items-center m-10">
                <div class="flex flex-col justify-center items-center h-full w-full bg-black md:w-3/5 gap-5 m-10 p-10 bg-opacity-50 text-white rounded-2xl">
                    <div class="flex flex-row gap-3">
                        <p class="text-4xl">Error Code:</p>
                        <p class="text-violet-500 font-bold text-4xl">{{ error.statusCode }}</p>
                    </div>
                    <p class="text-lg">{{ error.message }}</p>
                    <NuxtLink href="/">
                        <button class="text-lg p-2 w-36 border-2 border-white hover:border-violet-500 hover:text-violet-500 rounded-xl font-semibold">Go Home</button>
                    </NuxtLink>
                </div>
            </div>
        </NuxtLayout>
    </div>
</template>
