<script>
    import Icon from '@iconify/svelte';

</script>

<div class="grid grid-cols-1 md:grid-cols-2 px-10 mb-10 gap-4">

    <div class="cursor-pointer flex flex-col justify-center items-center lg:items-start space-y-1">
        <a href="/">
        <img src="sigma-pfp1.png" alt="sigma" class="h-[40px] inline-block ">
        </a>
        <span class="text-[11px] sm:text-xs">$SIGMA IS A MEME TOKEN FOR ENTERTAINEMENT PURPOSES ONLY, WITH NO EXPECTATION OF PROFIT
            OR PRICE INCREASE. THER IS NO FORMAL TEAM OR ROADMAP. 
        </span>
    </div>


    <div class="lg:mt-5">
        <ul class="flex justify-center space-x-10 tracking ">
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
    
</div>


<style>
      .tracking{
        letter-spacing: 0.15em; 

    }

</style>