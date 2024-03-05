<template>
  <div>
    <UAvatar :alt="name" size="sm" />
    {{ name }}
  </div>
</template>

<script setup lang="ts">
interface AvatarProps {
  name: string;
}
defineProps<AvatarProps>();
</script>
