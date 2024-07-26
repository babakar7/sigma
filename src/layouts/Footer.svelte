<script>
    import Icon from '@iconify/svelte';
    import Saos from "saos";


</script>
<Saos animation={ "slide-in-bottom 2s cubic-bezier(0.35, 0.5, 0.65, 0.95) both"}>

<div class="grid grid-cols-1 md:grid-cols-2 px-10 mb-20 gap-4">

    <div class="cursor-pointer flex flex-col justify-center items-center lg:items-start space-y-1">
        <a href="/">
        <img src="sigma-pfp1.png" alt="sigma" class="h-[40px] inline-block ">
        </a>
        <span class="text-[11px] sm:text-xs">$SIGMA IS A MEME TOKEN FOR ENTERTAINMENT PURPOSES ONLY, WITH NO EXPECTATION OF PROFIT
            OR PRICE INCREASE. THERE IS NO FORMAL TEAM OR ROADMAP. 
        </span>
    </div>


    <div class="lg:mt-5">
        <ul class="flex justify-center space-x-10 tracking ">
            <li class="cursor-pointer"> 
                <a href="https://dexscreener.com/solana/424kbbjyt6vksn7gekt9vh5yetutr1sbeyoya2nmbjpw" target="_blank">
                <Icon icon="typcn:chart-line"  class="inline-block mr-1  text-accentPrimary  " width="20"/> <span class="hover:text-accentPrimary transition-all duration-300">CHART</span>
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
    
</div>
</Saos>


<style>
      .tracking{
        letter-spacing: 0.15em; 
    }

</style>