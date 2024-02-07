<script lang="ts" setup>
    const route = useRoute()
</script>
<template>
    <div class="bg-slate-900 w-full sm:p-10 p-5 text-white">
        <div class="p-5 bg-slate-800 rounded-xl">
            <div class=" p-2 flex flex-row justify-evenly ">
                <div class="hidden md:flex flex-col space-x-5 justify-right mb-5">
                    <NuxtLink to="/">
                        <img src="/favicon.png" class="w-48 object-cover hover:border rounded-3xl hover:border-violet-500 transition-all ease-in-out duration-100" />
                    </NuxtLink>
                </div>
                <div class="flex flex-col justify-right items-left gap-4">
                    <p class="font-bold text-lg">Usefull links</p>
                    <NuxtLink to="/" class="duration-100 hover:text-violet-500">Home</NuxtLink>
                    <NuxtLink to="/portfolio" class="duration-100 hover:text-violet-500">Portfolio</NuxtLink>
                    <NuxtLink to="/contact" class="duration-100 hover:text-violet-500">Contact</NuxtLink>
                </div>
                <div class="flex flex-col justify-right items-left gap-4">
                    <p class="font-bold text-lg">Other Info</p>
                    <NuxtLink to="/resume.pdf" target="_blank" class="duration-100 hover:text-violet-500">Resume</NuxtLink>
                    <NuxtLink to="https://github.com/NateTheGreat1230?tab=overview&from=2023-12-01&to=2023-12-31" target="_blank" class="duration-100 hover:text-violet-500">Commit History</NuxtLink>
                    <NuxtLink to="https://github.com/PrismNet" target="_blank" class="duration-100 hover:text-violet-500">Organisation</NuxtLink>
                </div>
                <div class="hidden sm:flex flex-col justify-right items-left gap-4">
                    <p class="font-bold text-lg">External Links</p>
                    <NuxtLink to="https://github.com/NateTheGreat1230" target="_blank" class="duration-100 hover:text-violet-500">GitHub</NuxtLink>
                    <NuxtLink to="https://www.linkedin.com/in/nathanpwashburn" target="_blank" class="duration-100 hover:text-violet-500">LinkedIn</NuxtLink>
                    <NuxtLink to="mailto:nathanprattwashburn@gmail.com" class="duration-100 hover:text-violet-500">Email Me</NuxtLink>
                </div>
            </div>
            <div class="w-full flex justify-center">
                <div class="w-11/12 rounded border-t-4 border-violet-500"></div>
            </div>
            <div class="pt-10 flex flex-row justify-evenly items-center">
                <p class="hidden sm:flex">Made with Nuxt 3 and TailwindCSS <br>By Nate Washburn @NateTheGreat1230</p>
                <div class="flex flex-col">
                    <p class="flex justify-center font-bold text-lg">Social Links</p>
                    <div class="flex flex-row w-max justify-between">
                        <NuxtLink to="https://github.com/NateTheGreat1230/" target="_blank" class="w-10 h-10 flex justify-center items-center text-2xl transition-all ease-in-out duration-100 hover:text-violet-500">
                            <font-awesome-icon :icon="['fab', 'github']" />
                        </NuxtLink>
                        <NuxtLink to="https://www.linkedin.com/in/nathanpwashburn/" target="_blank" class="w-10 h-10 flex justify-center items-center text-2xl transition-all ease-in-out duration-100 hover:text-violet-500">
                            <font-awesome-icon :icon="['fab', 'linkedin']" />
                        </NuxtLink>
                        <NuxtLink to="mailto:nathanprattwashburn@gmail.com" target="_blank" class="w-10 h-10 flex justify-center items-center text-2xl transition-all ease-in-out duration-100 hover:text-violet-500">
                            <font-awesome-icon :icon="['fas', 'envelope']" />
                        </NuxtLink>
                        <NuxtLink to="https://discord.com/users/968603251664625764" target="_blank" class="w-10 h-10 flex justify-center items-center text-2xl transition-all ease-in-out duration-100 hover:text-violet-500">
                            <font-awesome-icon :icon="['fab', 'discord']" />
                        </NuxtLink>
                        <NuxtLink to="https://codepen.io/NateTheGreat1230" target="_blank" class="w-10 h-10 flex justify-center items-center text-2xl transition-all ease-in-out duration-100 hover:text-violet-500">
                            <font-awesome-icon :icon="['fab', 'codepen']" />
                        </NuxtLink>
                    </div>
                </div>
                <p class="hidden md:flex">© Copyright 2024 Nate Washburn</p>
            </div>
        </div>
    </div>
</template>
