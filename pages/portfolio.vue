<script lang="ts" setup>
    useHead({
        title: 'Portfolio',
    })
</script>
<template>
    <div class="h-full w-full py-10 sm:px-10 px-4">
        <div class="h-full w-full text-white flex flex-col justify-center">
            <div class=" bg-black bg-opacity-50 rounded-2xl py-10 px-4">
                <h1 class="text-4xl font-bold mb-8 w-full flex justify-center">Java Projects</h1>
                <div class="flex flex-row flex-shrink justify-center items-center gap-4 flex-wrap w-full">
                    <ProjectCard
                        title="Chess Game"
                        description="Simple 2D Chess game with a nice user friendly and clean UI."
                        image="/projectImages/chess.png"
                        link="https://github.com/NateTheGreat1230/Chess"
                    />
                    <ProjectCard
                        title="Wordle App"
                        description="A practice Wordle application where you can play as many times as you want."
                        image="/projectImages/wordle.png"
                        link="https://github.com/NateTheGreat1230/Wordle"
                    />
                    <ProjectCard
                        title="Tic Tac Toe"
                        description="A simple tic tac toe game with single player and multiplayer mode."
                        image="/projectImages/tictac.png"
                        link="https://github.com/NateTheGreat1230/java-final-proj"
                    />
                </div>
            </div>
            <div class=" bg-black bg-opacity-50 rounded-2xl mt-10 pb-10 px-4">
                <h1 class="text-4xl font-bold my-8 w-full flex justify-center">Web Projects</h1>
                <div class="flex flex-row flex-shrink justify-center items-center gap-4 flex-wrap w-full">
                    <ProjectCard
                        title="Portfolio Website"
                        description="A fully responsive portfolio website to showcase my web development skills."
                        image="/projectImages/website pic.png"
                        link="https://github.com/NateTheGreat1230"
                    />
                    <ProjectCard
                        title="Prism OS Website"
                        description="The website for a linux distro that has full compatibility with Windows applications."
                        image="/projectImages/prism.png"
                        link="https://github.com/prismnet/website"
                    /> 
                    <ProjectCard
                        title="Old Portfolio Website"
                        description="This project was made to learn HTML, TailwindCSS and vanilla JavaScript."
                        image="/projectImages/oldPortfolio.png"
                        link="https://github.com/NateTheGreat1230/Portfolio-Website"
                    />
                </div>
            </div>
        </div>
    </div>
</template>
