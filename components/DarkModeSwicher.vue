<template>
  <div>
    <input type="checkbox" class="checkbox" id="themCheck">
    <label for="themCheck" class="checkbox-label">
      <IconsMoon />
      <IconsSun />
      <span class="ball"></span>
    </label>
  </div> 
</template>
<script setup lang="ts">

const color = useColorMode();
const toggleColor = () => {
  try {
    if (color.value == 'light') {
      color.preference = 'dark';
    } else {
      color.preference = 'light';
    }
  } catch (e) {
    console.log(e);
  }
}
onMounted(() => {
  const checkbox = document.getElementById("themCheck");
  if (color.value == 'dark') {
    //@ts-ignore
    document.getElementById("themCheck").checked = true;
  }
  checkbox!.addEventListener("change", () => {
    toggleColor()
  });
})
</script>
<style scoped lang="scss">
.checkbox {
  opacity: 0;
  position: absolute; 
  width: 5px;
}

.checkbox-label {
  @apply bg-secondary dark:bg-gray-700;
  width: 51px;
  height: 30px;
  border-radius: 50px;
  position: relative;
  padding: 5px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.checkbox-label .ball {
  background-color: #fff;
  position: absolute;
  left: 5px;
  top: 4px;
  border-radius: 50%;
  transition: transform 0.2s linear;
  @apply w-[22px] h-[22px] sm:w-[18px] sm:h-[18px] sm:top-[6px];
}

.checkbox:checked+.checkbox-label .ball {
  @apply translate-x-[20px] sm:translate-x-[22px]
}
</style>