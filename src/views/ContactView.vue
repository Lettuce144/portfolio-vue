<template>
  <main class="flex flex-row min-h-screen justify-around items-center">
    <div class="w-full max-w-md flex flex-col gap-4 p-4">
      <h1>{{ $t('Contact') }}</h1>
      <div>
        <label for="name" class="block">{{ $t('name') }}</label>
        <input type="text" id="name" name="name" required/>
      </div>
      <div>
        <label for="email" class="block">{{ $t('email') }}</label>
        <input type="email" id="email" name="email" required/>
      </div>
      <div>
        <label for="message" class="block">{{$t('message')}}</label>
        <textarea id="message" name="message" required class="mt-1 p-2 rounded-md w-full"></textarea>
      </div>
      <button type="submit" class="p-2 rounded-xl px-4 py-2">{{ $t('send_button') }}</button>
    </div>
    <div class="h-[65vh] border-r-[.2em] border-button-text-secondary"></div>
    <div class="w-full max-w-md p-4">
      <div class="border-b-2 border-black pb-4 mb-4">
        <h4>You can find me on here:</h4>
        <a href="" class="block">LinkedIn</a>
        <a href="" class="block">Youtube</a>
        <a href="https://github.com/Lettuce144?" class="block">GitHub</a>
      </div>
      <div class="border-b-2 border-black pb-4 mb-4">
        <h4>Email:</h4>
        <p>zeefjens@gmail.com</p>
      </div>
      <div class="border-b-2 border-black pb-4">
        <h4>Location</h4>
        <p>Groningen, Netherlands</p>
      </div>
    </div>
  </main>
</template>