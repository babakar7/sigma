<script>
    import Icon from '@iconify/svelte';
    let isMenuOpen = false

</script>


<div>
<nav class="flex flex-row items-center justify-between space-x-2 w-full
flex-nowrap px-[100px]  py-[20px] shadow-custom">

<div>
<img src="sigma-pfp1.png" alt="sigma" class="h-[50px]  rounded-full border-1  shadow-lg object-cover inline-block ">
</div>

<div class=" hidden lg:block">
    <ul class="flex space-x-10 ">
        <li>SIGMA CHART</li>
        <li>SIGMA TWITER</li>
        <li>SIGMA TELEGRAM</li>
    </ul>
</div>
<button on:click = {()=>{
 isMenuOpen = !isMenuOpen
}} class="lg:hidden">

<Icon icon="icon-park-outline:hamburger-button"/>
</button>

<div class="hidden lg:block">
    <button class="mr[100px]">
    BUY
    </button>
</div>

</nav>

{#if isMenuOpen}
<div class="">
    <ul class="flex flex-col items-center space-y-11 mt-11">
        <li>SIGMA CHART</li>
        <li>SIGMA TWITER</li>
        <li>SIGMA TELEGRAM</li>
    </ul>
</div>

{/if}


</div>

<style>

</style>