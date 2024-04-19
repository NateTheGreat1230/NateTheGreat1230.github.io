<script lang="ts" setup>
    useHead({
        title: "Home",
    });
    // @ts-ignore
    import VueWriter from 'vue-writer';
</script>
<template>
    <div class="flex flex-col justify-center items-center h-full">
        <div class="max-w-3xl flex flex-col flex-initial md:flex-auto mx-4 ">
            <div class="text-white bg-black p-10 my-10 bg-opacity-50 rounded-2xl flex flex-col gap-4">
                <div class="flex flex-col sm:flex-row gap-2 text-4xl">
                    <p>Hello, my name is</p>
                    <p class="text-violet-500 font-semibold">Nate</p>
                </div>
                <p class="text-2xl">I am a software developer.</p>
                <p class="flex flex-col sm:flex-row gap-1">I have experience in: <VueWriter :array="['Java', 'JavaScript', 'Python', 'HTML', 'CSS', 'TypeScript', 'NuxtJS']" class="text-violet-500 font-semibold caret-white"/></p>
                <p>I am committed to continuous learning and professional development, actively seeking opportunities to enhance my skills and expertise. If you have any freelance projects, please feel free to reach out to me.</p>
                <NuxtLink href="/contact">
                    <button class="text-lg p-2 w-36 border-2 border-white hover:border-violet-500 hover:text-violet-500 rounded-full font-semibold">Contact Me</button>
                </NuxtLink>
            </div>
            <div class="text-white bg-black p-10 mb-10 bg-opacity-50 rounded-2xl flex flex-col gap-4">
                <p class="text-2xl">About</p>
                <p>I am a dedicated computer science student with a passion for developing and designing the next generation of applications and websites. Over the past several years, I have engaged in various fields in computer science, honing my skills and expertise.</p>
            </div>
            <div class="text-white bg-black p-10 mb-10 bg-opacity-50 rounded-2xl flex flex-col gap-4">
                <p class="text-2xl">Skills and Experience</p>
                <p>I have experience in Java, JavaScript, HTML, CSS, Python and TypeScript. I always enjoy a challenge or any oppertunity to learn and grow. Because of this I have done many personal projects to expand my skill set.</p>
                <p>I am a great problem solver, have good time managment skills and have good critical thinking abilities.</p>
                <p class="justify-center">See some of my projects here</p>
                <NuxtLink href="/portfolio">
                    <button class="text-lg p-2 w-36 border-2 border-white hover:border-violet-500 hover:text-violet-500 rounded-full font-semibold">Portfolio</button>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>