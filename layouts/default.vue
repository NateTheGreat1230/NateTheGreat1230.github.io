<script lang="ts" setup>
    import '~/assets/background.css';
    useHead({
        titleTemplate: (name) => {return name ? `${name} | Nate Washburn` : 'Nate Washburn'},
        htmlAttrs: {
            lang: 'en',
        },
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: 'Nate Washburn\'s portfolio website.'},
            {name: 'format-detection', content: 'telephone=no'},
            {name: 'msapplication-TileColor', content: '#000000'},
            {name: 'theme-color', content: '#000000'},
            {hid: 'og:image', property: 'og:image', content: 'https://natewashburn.is-a.dev/favicon.png'},
            {hid: 'og:title', property: 'og:title', content: 'Nate Washburn'},
            {hid: 'og:site_name', property: 'og:site_name', content: 'Nate\'s Portfolio'},
            {hid: 'og:description', property: 'og:description', content: 'Nate Washburn\'s portfolio website.'},
            {hid: 'og:url', property: 'og:url', content: 'https://natewashburn.is-a.dev'},
            {hid: 'og:type', property: 'og:type', content: 'website'},
        ],
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