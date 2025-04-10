<script>
  import { createEventDispatcher } from 'svelte';
  
  const dispatch = createEventDispatcher();
  
  let email = '';
  let loading = false;
  let submitted = false;
  let errorMessage = '';
  
  function handleSubmit() {
    loading = true;
    errorMessage = '';
    
    setTimeout(() => {
      loading = false;
      submitted = true;
      
    }, 1000);
  }
  
  function goToLogin() {
    dispatch('navigateTo', 'login');
  }
</script>

<div class="min-h-screen  flex flex-col justify-center py-12 sm:px-6 lg:px-8">
  <div class="sm:mx-auto sm:w-full sm:max-w-md">
    <h2 class="my-5 text-center text-3xl font-extrabold text-green-500">
      Reset your password
    </h2>
    <p class="mt-2 text-center text-sm text-gray-600">
      {#if !submitted}
        Enter your email address and we'll send you a link to reset your password.
      {:else}
        Check your email for a link to reset your password. If it doesn't appear within a few minutes, check your spam folder.
      {/if}
    </p>
  </div>

  <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
    <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
      {#if !submitted}
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
                class="appearance-none block text-black w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={loading}
              class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-400 hover:bg-green-400 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50"
            >
              {#if loading}
                <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              {:else}
                Send reset link
              {/if}
            </button>
          </div>
        </form>
      {:else}
        <div class="rounded-md bg-green-50 p-4">
          <div class="flex">
            <div class="flex-shrink-0">
              <svg class="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
            </div>
            <div class="ml-3">
              <p class="text-sm font-medium text-green-800">
                Password reset email sent to {email}
              </p>
            </div>
          </div>
        </div>
      {/if}

      <div class="mt-6">
        <div class="relative">
          <div class="absolute inset-0 flex items-center">
            <div class="w-full border-t border-gray-300"></div>
          </div>
        </div>

        <div class="mt-6">
          <p class="text-center text-sm text-gray-600 pt-5">
            <a 
              href="/form" 
              class="font-medium text-green-600 hover:text-green-500 "
            >
              Back to sign in
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</div>