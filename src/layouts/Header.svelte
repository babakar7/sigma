<script>
    import Icon from '@iconify/svelte';
    let isMenuOpen = false
    import { slide } from 'svelte/transition';

</script>


<div>

<nav class="flex flex-row items-center justify-between space-x-2 w-full
flex-nowrap px-4 sm:px-[100px]  py-[20px] shadow-custom  navbar fixed top-0 z-20">

<div class="cursor-pointer">
<a href="/">
<img src="sigma-pfp1.png" alt="sigma" class="h-[40px] inline-block ">
</a>
</div>

<div class=" hidden lg:block">
    <ul class="flex space-x-10 tracking ">
        <li class="cursor-pointer"> 
            <a href="https://dexscreener.com/solana/424kbbjyt6vksn7gekt9vh5yetutr1sbeyoya2nmbjpw" target="_blank" class=" transition-all duration-300 hover:text-accentPrimary">
            <Icon icon="typcn:chart-line"  class="inline-block mr-1  text-accentPrimary  " width="20"/> <span class="">CHART</span>
            </a></li>
            
        <li  class="cursor-pointer" > 
            <a href="https://x.com/SigmaOnSol69" target="_blank" class="transition-all duration-300 hover:text-accentPrimary">
            <Icon icon="mdi:twitter" class="inline-block mr-1 text-accentPrimary" width="20" /><span class="">TWITTER</span>
        </a></li>
            
        <li  class="cursor-pointer" > 
            <a href="https://web.telegram.org/k/#-2156631854" target="_blank" class="transition-all duration-300 hover:text-accentPrimary">
            <Icon icon="ic:baseline-telegram" class="inline-block mr-1 text-accentPrimary" width="20" /> <span class="">TELEGRAM</span>
        </a></li>

        <li  class="cursor-pointer" > 
            <a href="https://www.sigmafactory.fun/" target="_blank" class="transition-all duration-300 hover:text-accentPrimary">
            <Icon icon="fluent:emoji-meme-16-filled" class="inline-block mr-1 text-accentPrimary" width="20" /> <span class="">MEME FACTORY</span>
        </a></li>
            
        </ul>
</div>


<button on:click = {()=>{
 isMenuOpen = !isMenuOpen
}} class="lg:hidden">

<Icon icon="icon-park-outline:hamburger-button" width="25" />
</button>

<div class="hidden lg:block">
    <button on:click= {()=>{window.location.href="/#how-to-buy"}} class="mr[100px]
         bg-accentPrimary transition-all duration-300 
         px-4 py-2 rounded-lg text-black hover-glow font-bold tracking-widest">
    BUY $SIGMA
    </button>
</div>

</nav>

{#if isMenuOpen}



<div class="" transition:slide={{ delay: 250, duration: 300, axis: 'y' }}>
    <ul class=" flex flex-col items-center justify-center z-20 space-y-10 pt-40">
        <li class="cursor-pointer"> 
            <a href="https://dexscreener.com/solana/424kbbjyt6vksn7gekt9vh5yetutr1sbeyoya2nmbjpw" target="_blank">
            <Icon icon="typcn:chart-line"  class="inline-block mr-1  text-accentPrimary hover:text-accentPrimaryHover " width="20"/> <span class="hover:text-accentPrimary transition-all duration-300">CHART</span>
            </a></li>
            
        <li  class="cursor-pointer" > 
            <a href="https://x.com/SigmaOnSol69" target="_blank">
            <Icon icon="mdi:twitter" class="inline-block mr-1 text-accentPrimary" width="20" /><span class="hover:text-accentPrimary transition-all duration-300">TWITTER</span>
        </a></li>
            
        <li  class="cursor-pointer" > 
            <a href="https://web.telegram.org/k/#-2156631854" target="_blank">
            <Icon icon="ic:baseline-telegram" class="inline-block mr-1 text-accentPrimary" width="20" /> <span class="hover:text-accentPrimary transition-all duration-300">TELEGRAM</span>
        </a></li>
            
        </ul>
</div>


{/if}


</div>

<style>
    
     @keyframes -global-slide-in-top {
    0% {
      transform: translateY(-50px);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
    .tracking{
        letter-spacing: 0.15em; 

    }

    .slide-in-top {
    animation: slide-in-top 0.8s ease-in-out forwards;
    transform: translateY(-100%);
    opacity: 0;
}

@keyframes slide-in-top {
    0% {
        transform: translateY(-100%);
        opacity: 0;
    }
    100% {
        transform: translateY(0);
        opacity: 1;
    }
}

.slide-out-top {
    animation: slide-out-top 0.5s ease-in-out forwards;
    transform: translateY(0);
    opacity: 1;
}

@keyframes slide-out-top {
    0% {
        transform: translateY(0);
        opacity: 1;
    }
    100% {
        transform: translateY(-100%);
        opacity: 0;
    }
}

.hover-glow {
        position: relative;
        z-index: 0;
    }
.hover-glow::before {
        content: '';
        position: absolute;
        top: -5px;
        left: -5px;
        right: -5px;
        bottom: -5px;
        background: rgba(255, 255, 255, 0.6);
        z-index: -1;
        opacity: 0;
        border-radius: inherit;
        transition: opacity 0.3s ease-in-out;
    }

    .hover-glow:hover::before {
        opacity: 1;
        filter: blur(8px);
    }

</style>