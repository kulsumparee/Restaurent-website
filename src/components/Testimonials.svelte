<script>
    import { Avatar } from "flowbite-svelte";
    import Wrapper from "./Wrapper.svelte";
</script>

<Wrapper>
    <div class=" md:flex px-5 md:px-40 py-20 md:gap-60 ">
        <div class="relative inline-block">
            <img
                class=" absolute h-auto"
                src="/images/testimonial/chef.svg"
                alt="chef"
                width="300"
                height="300"
            />
            <img
                class=" mt-60"
                src="/images/testimonial/Rectangle.svg"
                alt="rectangle"
                width="300"
                height="300"
            />
            <div class="  ">
                <img
                    class=" relative bottom-10 left- md:left-28"
                    src="/images/testimonial/popup.svg"
                    alt=""
                />
                <h1
                    class=" relative bottom-[138px] left-20 md:left-48 text-lg font-semibold text-black"
                >
                    Our Best Chef 😁
                </h1>
            </div>
        </div>

        <div>
            <p
                class=" text-[#FF6868] text-sm md:text-[16px] font-bold tracking-widest"
            >
                Testimonials
            </p>
            <h1
                class="text-2xl md:text-4xl font-bold py-4 w-sm leading-12 pt-10"
            >
                What Our Customers Say About Us
            </h1>
            <p class=" text-[#555555] md:w-[500px] text-[20px] py-5">
                “I had the pleasure of dining at Foodi last night, and I'm still
                raving about the experience! The attention to detail in
                presentation and service was impeccable”
            </p>

            <div class=" flex gap-5 items-center">
                <div class="flex">
                    <Avatar
                        src="/images/testimonial/image1.svg"
                        stacked
                        class=" border-3 border-gray-200 w-10"
                    />
                    <Avatar
                        src="/images/testimonial/image2.svg"
                        stacked
                        class=" border-3 border-gray-200 w-10"
                    />
                    <Avatar
                        src="/images/testimonial/image3.svg"
                        stacked
                        class=" border-3 border-gray-200 w-10"
                    />
                </div>
                <div>
                    <h1 class=" font-medium text-lg">Customer Feedback</h1>
                    <p class=" flex gap-2 text-gray-400 font-medium">
                        <span class=" text-yellow-300 text-xl">★</span>
                        <span class=" "> 4.6 </span> (18.6k Reviews)
                    </p>
                </div>
            </div>
        </div>
    </div>
</Wrapper>
