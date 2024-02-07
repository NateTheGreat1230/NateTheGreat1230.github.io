<script lang="ts" setup>
    const route = useRoute()
    const isMenuOpen = ref(false);
    const toggleMenu = () => {
        isMenuOpen.value = !isMenuOpen.value;
    };
    const closeMenu = () => {
        isMenuOpen.value = false;
    };
</script>
<template>
    <div class="bg-slate-900 p-4 h-16 text-white flex flex-row justify-between items-center">
        <NuxtLink to="/" class="text-4xl font-bold hover:text-violet-500 transition-all ease-in-out duration-300">Nate Washburn</NuxtLink>
        <div class="hidden md:flex flex-row justify-right items-center gap-4">
            <NuxtLink href="/">
                <button class="text-lg p-2 w-24 border-2 border-white hover:border-violet-500 hover:text-violet-500 rounded-full font-semibold">Home</button>
            </NuxtLink>
            <NuxtLink href="/portfolio">
                <button class="text-lg p-2 w-36 border-2 border-white hover:border-violet-500 hover:text-violet-500 rounded-full font-semibold">Portfolio</button>
            </NuxtLink>
            <NuxtLink href="/contact">
                <button class="text-lg p-2 w-28 border-white hover:border-violet-500 border-2 hover:text-violet-500 rounded-full font-semibold">Contact</button>
            </NuxtLink>
        </div>
        <div class="flex md:hidden">
            <button @click="toggleMenu" class="text-2xl w-14 p-2 border-2 border-white hover:border-violet-500 rounded-full">
                <font-awesome-icon :icon="['fas', 'bars']" />
            </button>
        </div>
        <div v-if="isMenuOpen" class="absolute top-16 right-0 p-4 bg-slate-900 text-white border rounded-lg border-gray-200 space-y-2 md:hidden">
            <NuxtLink href="/">
                <button @click="closeMenu" class="block w-24 h-7 mb-2 border border-white text-center rounded-full hover:bg-violet-900">Home</button>
            </NuxtLink>
            <NuxtLink href="/portfolio">
                <button @click="closeMenu" class="block w-24 h-7 mb-2 border border-white text-center rounded-full hover:bg-violet-900">Portfolio</button>
            </NuxtLink>
            <NuxtLink href="/contact">
                <button @click="closeMenu" class="block w-24 h-7 border border-white text-center rounded-full hover:bg-violet-900">Contact</button>
            </NuxtLink>
        </div>
    </div>
</template>