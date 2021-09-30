<template>
  <div class="pill">
    <span class="name">{{ name }}</span>
    <span class="amount">{{ amount }}</span>
  </div>
</template>

<script>
export default {
  name: 'Pill',
  props: ['name', 'amount']
}
</script>

<style scoped>
.pill {
  color: #fff;
  margin: 10px;
  height: 55px;

  background-color: #DC143CFF;
  border-radius: 30px;
  font-size: 1.3rem;
  font-weight: bold;

  display: flex;
  align-items: center;
}

.pill .name {
  margin-left: 15px;
}

.pill .amount {
  margin: 10px;
  padding: 5px;
  height: 35px;
  width: 35px;
  border-radius: 18px;

  background-color: #fff;
  color: #DC143CFF;

  font-size: 14px;
}

</style>