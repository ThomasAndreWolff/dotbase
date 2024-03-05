<template>
  <div class="flex flex-col justify-between p-6 min-w-[300px]">
    <div class="flex flex-col gap-4">
      <Logo width="40" />
      <p>Menu</p>
      <UVerticalNavigation :links="links" />
    </div>
    <div class="flex flex-col gap-4">
      <Avatar name="John Doe" />
      <UButton color="white" class="w-fit">Logout</UButton>
    </div>
  </div>
</template>

<script setup lang="ts">
const links = [
  [
    {
      label: "Home",
      icon: "i-heroicons-home",
      to: "/",
    },
    {
      label: "Dashboard",
      icon: "i-heroicons-chart-bar",
      to: "/dashboard",
    },
  ],
  [
    {
      label: "About",
      icon: "i-heroicons-information-circle",
      to: "/about",
    },
  ],
];
</script>
