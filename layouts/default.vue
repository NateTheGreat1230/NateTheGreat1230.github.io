<script lang="ts" setup>
    import '~/assets/background.css';
    useHead({
        titleTemplate: (name) => {return name ? `${name} | Nate Washburn` : 'Nate Washburn'},
        link: [
            {rel: 'icon', type: 'image/x-png', href: '/favicon.png'},
        ],
    })
</script>
<template>
    <div class="flex flex-col h-screen font-sans">
        <Header />
        <div class="flex-1 bckgrnd">
            <main class="h-full w-full">
                <slot />
            </main>
        </div>
        <Footer />
    </div>
</template>