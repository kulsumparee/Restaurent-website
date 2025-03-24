<script>
  import { Drawer, Button, CloseButton, Label, Textarea } from 'flowbite-svelte';
  import { InfoCircleSolid, ArrowRightOutline } from 'flowbite-svelte-icons';
  import { sineIn } from 'svelte/easing';

  let hidden5 = true;
  let transitionParams = {
    x: -320,
    duration: 200,
    easing: sineIn
  };
</script>

<div class="text-center absolute  top-0 right-0 bg-amber-700">
  <Button on:click={() => (hidden5 = false)}>Show </Button>
</div>

<Drawer placement="top" transitionType="fly" {transitionParams} bind:hidden={hidden5} id="sidebar5" class="  relative top-20">

    <CloseButton on:click={() => (hidden5 = true)} class="mb-4 dark:text-white" />
<div>
 <ul class="  lg:text-xl gap-12 font-semibold ">
            <li class=" hover:text-[#39DB4A]"><a href="/">Home</a></li>
            <li class=" hover:text-[#39DB4A]"><a href="menu">Menu</a></li>
            <li class=" hover:text-[#39DB4A]">
                <a href="services">Services</a>
            </li>
            <li class=" hover:text-[#39DB4A]"><a href="offers">Offers</a></li>
        </ul>

        <div class=" hidden md:flex gap-10 cursor-pointer">
            <img src="/images/nav/search.svg" alt=""  width="30" height="25"/>
            <img src="/images/nav/bag.svg" alt=""  width="25" height="25"/>

            <div class=" bg-[#39DB4A] flex px-4 rounded-full py-2 gap-3 cursor-pointer ">
                <img src="/images/nav/call.svg" alt="call" width="25" height="25" />
                <button class=" text-xl font-semibold text-white cursor-pointer">Contact</button>
            </div>
        </div>
</div>
</Drawer>