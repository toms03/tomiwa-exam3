<template>
  <ul class="pagination">
    <li class="pagination-item">
      <button type="button" @click="onClickFirstPage" :disabled="isInFirstPage">First</button>
    </li>

    <li class="pagination-item">
      <button type="button" @click="onClickPreviousPage" :disabled="isInFirstPage">Previous</button>
    </li>

    <!-- Visible Buttons Start -->
    <li v-for="page in pages" class="pagination-item" :key="page.name">
      <button
        type="button"
        @click="onClickPage(page.name)"
        :disabled="page.isDisabled"
        :class="{ active: isPageActive(page.name) }"
      >
        {{ page.name }}
      </button>
    </li>
    <!-- ... -->

    <!-- Visible Buttons End -->

    <li class="pagination-item">
      <button type="button" @click="onClickNextPage" :disabled="isInLastPage">Next</button>
    </li>

    <li class="pagination-item">
      <button type="button" @click="onClickLastPage" :disabled="isInLastPage">Last</button>
    </li>
  </ul>
</template>

<script setup>
const props = defineProps({
  maxVisibleButtons: {
    type: Number,
    required: false,
    default: 3
  },
  totalPages: {
    type: Number,
    required: true
  },
  perPage: {
    type: Number,
    required: true
  },
  currentPage: {
    type: Number,
    required: true
  }
})

const emits = defineEmits(['pagechanged'])
const startPage = (() => {
  // When on the first page
  if (props.currentPage === 1) {
    return 1
  }

  // When on the last page
  if (props.currentPage === this.totalPages) {
    return props.totalPages - props.maxVisibleButtons
  }

  // When inbetween
  return props.currentPage - 1
})()

const pages = () => {
  const range = []

  for (
    let i = startPage;
    i <= Math.min(startPage + props.maxVisibleButtons - 1, this.totalPages);
    i++
  ) {
    range.push({
      name: i,
      isDisabled: i === props.currentPage
    })
  }

  return range
}

const isInFirstPage = () => props.currentPage === 1
const isInLastPage = () => props.currentPage === props.totalPages
const isPageActive = (page) => props.currentPage === page

const onClickFirstPage = () => {
  emits('pagechanged', 1)
}
const onClickPreviousPage = () => {
  emits('pagechanged', props.currentPage - 1)
}
const onClickPage = (page) => {
  emits('pagechanged', page)
}
const onClickNextPage = () => {
  emits('pagechanged', props.currentPage + 1)
}
const onClickLastPage = () => {
  emits('pagechanged', props.totalPages)
}
</script>

<style scoped>
.pagination {
  display: flex;
  justify-content: center;
  list-style-type: none;
}

.pagination-item {
  display: inline-block;
  width: 10%;
  margin-bottom: 20px;
}

button {
  width: 100%;
}

.active {
  background-color: #4aae9b;
  color: #ffffff;
}
</style>
