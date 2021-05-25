<template>
  <div>
    <b>#{{searchTitle.id}}</b>
    <span>{{ searchTitle.task_title }}</span>
  </div>
</template>

<script>
export default {
  props: {
    searchTitle: { required: true },
  }
}
</script>