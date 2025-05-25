<script setup>
  import { onMounted } from 'vue'
  import { useUserStore } from '@/store/user.js'

  const userStore = useUserStore()

  onMounted(() => {
    userStore.getAllUsers()
  })

  const handleChange = async (e) => {
    const value = e.target.value

    if (value === 'new') {
      userStore.clearUser()
    } else {
      const id = parseInt(value)
      userStore.selectedUserId = id
      await userStore.getUser(id)
    }
  }
</script>

<template>
  <div class="user-select">
    <select @change="handleChange" :value="userStore.selectedUserId ?? 'new'">
      <option value="new">-- New User --</option>
      <option v-for="u in userStore.users" :key="u.id" :value="u.id">
        {{ u.name.firstname }} {{ u.name.lastname }}
      </option>
    </select>
  </div>
</template>

<style scoped>
  .user-select {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
</style>