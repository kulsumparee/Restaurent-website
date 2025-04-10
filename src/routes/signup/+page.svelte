<script>
  import { createEventDispatcher } from 'svelte';
  
  const dispatch = createEventDispatcher();
  
  let name = '';
  let email = '';
  let password = '';
  let confirmPassword = '';
  let loading = false;
  let errorMessage = '';
  
  function handleSubmit() {
    if (password !== confirmPassword) {
      errorMessage = 'Passwords do not match';
      return;
    }
    
    loading = true;
    errorMessage = '';
    
    setTimeout(() => {
      loading = false;
            dispatch('signup', { name, email });
    }, 1000);
  }
  

</script>

<div class="min-h-screen  flex flex-col justify-center py-12 sm:px-6 lg:px-8">
  <div class="sm:mx-auto sm:w-full sm:max-w-md">
    <h2 class="mt-6 text-center text-3xl font-extrabold text-green-500">
      Create your account
    </h2>
  </div>

  <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
    <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
      <form class="space-y-6" on:submit|preventDefault={handleSubmit}>
        {#if errorMessage}
          <div class="rounded-md bg-red-50 p-4">
            <div class="flex">
              <div class="ml-3">
                <p class="text-sm font-medium text-red-800">{errorMessage}</p>
              </div>
            </div>
          </div>
        {/if}
        
        <div>
          <label for="name" class="block text-sm font-medium text-gray-700">
            Full name
          </label>
          <div class="mt-1">
            <input
              id="name"
              name="name"
              type="text"
              autocomplete="name"
              required
              bind:value={name}
              class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
            />
          </div>
        </div>

        <div>
          <label for="email" class="block text-sm font-medium text-gray-700">
            Email address
          </label>
          <div class="mt-1">
            <input
              id="email"
              name="email"
              type="email"
              autocomplete="email"
              required
              bind:value={email}
              class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
            />
          </div>
        </div>

        <div>
          <label for="password" class="block text-sm font-medium text-gray-700">
            Password
          </label>
          <div class="mt-1">
            <input
              id="password"
              name="password"
              type="password"
              autocomplete="new-password"
              required
              bind:value={password}
              class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
            />
          </div>
        </div>

        <div>
          <label for="confirm-password" class="block text-sm font-medium text-gray-700">
            Confirm Password
          </label>
          <div class="mt-1">
            <input
              id="confirm-password"
              name="confirm-password"
              type="password"
              autocomplete="new-password"
              required
              bind:value={confirmPassword}
              class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            disabled={loading}
            class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white cursor-pointer bg-green-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50"
          >
            {#if loading}
              <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Processing...
            {:else}
              Sign up
            {/if}
          </button>
        </div>
      </form>

      <div class="mt-6">
        <div class="relative">
          <div class="absolute inset-0 flex items-center">
            <div class="w-full border-t border-gray-300"></div>
          </div>
          <div class="relative flex justify-center text-sm">
            <span class="px-2 bg-white text-gray-500">
              Or
            </span>
          </div>
        </div>

        <div class="mt-6">
          <p class="text-center text-sm text-gray-600">
            Already have an account?
            <a 
              href="/form" 
              class="font-medium text-green-500"
            >
              Sign in
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</div>