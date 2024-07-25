<script>
    import Icon from '@iconify/svelte';
    import Saos from "saos";

    let copyText = "Copy CA"
    let copyIcon = "ph:copy"

    </script>
    
    <div class="bg-bgPrimary mt-[150px] lg:mt-[90px] ">
        <Saos animation={ "fade-in 2s cubic-bezier(0.35, 0.5, 0.65, 0.95) both"}>

        <div class="grid grid-cols-1 lg:grid-cols-2 section">
  
            <div class="flex items-center justify-center lg:order-2">
                <div class="image-container w-[70%] rounded-md shadow-custom  overflow-hidden">
                    <img class="tint-image w-full h-full object-cover" src="sigma-hero.jpg" alt="Sigma">
                    <img class="laser" src="laser.png" alt="Laser Eyes">
                    <div class="tint-overlay"></div>
                </div>
            </div>
            <div class="flex flex-col items-center justify-start pt-[50px] lg:pt-[200px]  ">
                <h1 class="tracking text-center">THE SIGMA ARMY ON SOLANA.</h1>
                <p class="text-xl text-center mt-10 uppercase "> For the first time in history an army of sigmas has been united under one  mission: 
                    Create a culture of strong men with an unwavering sense of self-belief. Defy social norms & be brave enough to change the world. 
                </p>
                <p class="uppercase mt-10 ">$sigma trillionaire grindset</p>
            </div>
        </div>
        </Saos>

        <Saos animation={ "slide-in-bottom 1s cubic-bezier(0.35, 0.5, 0.65, 0.95) both"}>

        <div class="grid grid-cols-1 lg:grid-cols-2 mt-11 gap-10 section">
            <div class="flex flex-col items-center justify-center">
                <div class="image-container rounded-lg shadow-custom">
                <img src="peaky.jpeg" alt="sigma">
                <div class="tint-overlay"></div>
            </div>

            </div>
            <div class="flex flex-col items-center justify-center">
                <h1 class="text-center mb-11 tracking">WHAT IS $SIGMA?</h1>
                    <p class="uppercase text-xl text-center">Sigma is a personality archetype that is self-reliant, independent, and strategic.
                     SIGMAS choose to navigate the world  outside of traditional norms.<br><br> Instead of following the herd mentality 
                     or aligning with trends - akin to the "Alpha", they prefer to operate in their own unique way. <br><br> They prioritize personal 
                     freedom, make well-researched decisions, and value the ability to remain adaptable in the ever-evolving landscape of reality. Their 
                     approach to life is defined by a mix of confidence, nonconformity, and a deep understanding of the world.</p>
            </div>

        </div>
        </Saos>



        <Saos animation={ "slide-in-bottom 1s cubic-bezier(0.35, 0.5, 0.65, 0.95) both"}>

        <div class="grid grid-cols-1 lg:grid-cols-2 mt-11  gap-10 section">


            <div class="flex flex-col items-center justify-center lg:order-2">
                <div class="image-container">
                <img src="tyler.jpeg" alt="sigma" class="shadow-custom">
                <div class="tint-overlay"></div>
                </div>

        </div>
            <div class="flex flex-col items-center justify-center">
                <h1 class=" text-center mt-5 mb-11 tracking">TOKENOMICS</h1>

                    <div class="flex flex-col space-y-5 justify-center items-center">
                    <p class="text-xl ">0% TAX </p>
                    <p class="text-xl">0% TEAM ALLOCATION</p>
                    <p class="text-xl">1B SUPPLY</p>
                    <p class="text-xl">MINT REVOKED</p>
                    </div>
            </div>

         

        </div>
        </Saos>


        <Saos animation={ "slide-in-bottom 1s cubic-bezier(0.35, 0.5, 0.65, 0.95) both"}>

        <div class="grid grid-cols-1 lg:grid-cols-2 mt-11 gap-10 section ">
       

            <div class="flex flex-col items-center justify-center">
                <div class="image-container">

                    <video controls autoplay muted playsinline>
                        <source src="tenet.mov" type="video/mp4" >
                        Your browser does not support the video tag.
                      </video>

                </div>
            </div>

            <div class="flex flex-col items-center  flex-nowrap justify-center ">
                <h1 id="how-to-buy" class="text-center mt-5 mb-11 tracking ">HOW TO BUY</h1>

                    <div class="flex flex-col space-y-5 justify-center items-center uppercase text-center 
                    w-[100%]">
                    <p class="text-xl ">Step 1: Download the <a href="https://phantom.app/" target="_blank" class="underline text-accentPrimary">Phantom Wallet</a> chrome/firefox extension or the ios/android app.  </p>
                    <p class="text-xl">STEP 2: Purchase Solana on a centralized exchange and send it to your phantom wallet.
                    </p>
                    <p class="text-xl"> STEP 3: Go to the swap tab of your phantom wallet and paste the contract address provided below, then swap your solana for $sigma.
                    </p>
                    <p class="text-xl">STEP 4: Get back to the trillionaire grindset and be a sigma. 
                    </p>
                    <p class="text-lg cursor-pointer bg-bgSecondary py-2 px-4 rounded-md"
                    on:click={() => {
                        navigator.clipboard.writeText("5SVG3T9CNQsm2kEwzbRq6hASqh1oGfjqTtLXYUibpump")
                            .then(() => {
                                console.log('Text copied to clipboard');
                                copyText = "CA copied!"
                                copyIcon = "ph:check-duotone"
                                setTimeout(() => {
                                    copyText = "Copy CA"
                                    copyIcon = "ph:copy"
                                }, 2000);
                                
                            })
                            .catch((err) => {
                                console.error('Failed to copy text: ', err);
                            });
                    }}
                >{copyText}    <Icon icon="{copyIcon}" class="inline-block ml-1" /></p>
                    </div>
            </div>

        </div>
        </Saos>


    </div>
    
    <style>

      
        @keyframes -global-slide-in-bottom {
    0% {
      transform: translateY(200px);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes -global-fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
        
        .bg-img{
            background-size: cover;
            background-position: center;
        }

        .tracking {
            letter-spacing: 0.15em;
        }
        .image-container {
            position: relative;
        }
        .tint-image {
            transition: filter 0.3s ease;
        }
        .tint-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(45deg, rgba(255,0,0,0.5), rgba(0,0,255,0.5));
            opacity: 0;
            transition: opacity 0.4s ease-in-out;
            mix-blend-mode: hard-light;
        }
        .image-container:hover .tint-image {
            filter: contrast(120%) brightness(80%);
        }
        .image-container:hover .tint-overlay {
            opacity: 1;
        }
        .laser {
            position: absolute;
            top:31%;
            left:15%;
            width: 70%; /* Adjust the size of the laser eyes */
            height: auto;
            z-index: 10; /* Ensure the laser eyes are above the main image */
            opacity:0;
            transition: opacity 0.4s ease-in-out;

        }
        .image-container:hover .laser {
      opacity: 1;
    }
    </style>