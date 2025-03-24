<script>
  import { Rating } from "flowbite-svelte";
  import Wrapper from "./Wrapper.svelte";
  import Button from "./common/Button.svelte";
  let showVideo = false;

  const toggleVideo = () => {
    showVideo = !showVideo;
  };

  const CardItems = [
    {
      title: "Spicy noodles",
      image: "/images/header/Mask1.svg",
      price: "18.00",
    },
    {
      title: "Vegetarian salad",
      image: "/images/header/Mask2.svg",
      price: "23.00",
    },
  ];
</script>

<Wrapper>
  <div class=" mx-auto px-4 lg:px-10 mt-10 lg:mt-20">
    <div class="flex flex-col lg:flex-row justify-between gap-8">
      <!-- Left Section (Text Content) -->
      <div class="text-center lg:text-left w-full lg:w-1/2 md:pt-20">
        <h1
          class="text-2xl md:text-3xl lg:text-5xl font-semibold leading-tight lg:leading-[3.5rem]"
        >
          Dive into Delights Of Delectable <span class="text-[#39DB4A]"
            >Food</span
          >
        </h1>
        <p
          class="text-[#4A4A4A] dark:text-white text-lg md:text-xl lg:text-2xl max-w-[500px] mt-6 lg:mt-12"
        >
          Where Each Plate Weaves a Story of Culinary Mastery and Passionate
          Craftsmanship
        </p>

        <!-- Buttons and Video Section -->
        <div class="flex flex-col sm:flex-row items-center gap-6 mt-8 lg:mt-12">
          <Button title="Order Now" />
          <div class="flex items-center gap-4">
            <h1 class="text-lg md:text-xl font-semibold text-[#4D4D4D]">
              Watch Video
            </h1>
            <button
              on:click={toggleVideo}
              class="bg-white shadow-2xl p-4 rounded-full cursor-pointer hover:scale-110 transition-transform duration-300"
            >
              <img src="/images/header/video.svg" alt="video" class="w-8 h-8" />
            </button>
          </div>
        </div>
              {#if showVideo}
        <div class="mt-4">
    <video controls width="100%">
      <source src="/path/to/your/video.mp4" type="video/mp4" />
      <track
        kind="captions"
        src="/path/to/your/captions.vtt"
        srclang="en"
        label="English"
        default
      />
      Your browser does not support the video tag.
    </video>
        </div>
      {/if}
      </div>


      <!-- Right Section (Images and Cards) -->
      <div class="relative w-full lg:w-1/2 mt-12 lg:mt-0">
        <img
          src="/images/header/foodi.png"
          alt="foodi"
          class="w-full h-auto max-w-[600px] mx-auto"
        />

        <img
          src="/images/header/spicy.svg"
          alt="food"
          class="absolute top-28 lg:top-28 right-80 lg:right-96 hover:scale-110 transition-transform duration-300 ease-in-out"
        />

        <div
          class="  relative flex flex-col sm:flex-row justify-center gap-4 lg:gap-6 lg:bottom-[80px] lg:left-0 lg:right-0"
        >
          {#each CardItems as items}
            <div
              class="flex flex-col sm:flex-row items-center gap-4 p-4 rounded-2xl bg-[#F9F9F9] shadow-md cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out w-full sm:w-auto"
            >
              <img
                src={items.image}
                alt="food"
                class="w-16 h-16 md:w-20 md:h-20"
              />
              <div class="text-center sm:text-left">
                <h2 class="text-lg md:text-xl font-semibold text-black">
                  {items.title}
                </h2>
                <Rating id="example-1" total={5} size={20} rating={4} />
                <p class="text-lg md:text-xl font-semibold text-[#515151]">
                  <span class="text-[#FF7979]">$</span>
                  {items.price}
                </p>
              </div>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </div>
</Wrapper>
