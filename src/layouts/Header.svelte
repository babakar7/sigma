<script>
    import Icon from '@iconify/svelte';
    let isMenuOpen = false
    import { slide } from 'svelte/transition';

    import Saos from "saos";


</script>


<div>

<nav class="flex flex-row items-center justify-between space-x-2 w-full
flex-nowrap px-4 sm:px-[100px]  py-[20px] shadow-custom  navbar fixed top-0 z-20">

<div class="cursor-pointer">
<a href="/">
<img src="sigma-pfp1.png" alt="sigma" class="h-[50px]  rounded-full border-1   object-cover inline-block ">
</a>
</div>

<div class=" hidden lg:block">
    <ul class="flex space-x-10 tracking ">
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


<button on:click = {()=>{
 isMenuOpen = !isMenuOpen
}} class="lg:hidden">

<Icon icon="icon-park-outline:hamburger-button" width="25" />
</button>

<div class="hidden lg:block">
    <button on:click= {()=>{window.location.href="/#how-to-buy"}} class="mr[100px] bg-accentPrimary hover:bg-accentPrimaryHover transition-colors duration-300 px-4 py-2 rounded-lg">
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

</style>