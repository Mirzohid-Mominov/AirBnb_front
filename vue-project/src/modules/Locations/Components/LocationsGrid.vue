<template>
  <div class="mt-[160px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-x-4 gap-y-10 place-items-center">
    <locations-card/>
  </div>
</template>
<script setup lang="ts">
import LocationsCard from "@/modules/Locations/Components/LocationsCard.vue";
</script>