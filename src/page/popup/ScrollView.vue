<template>
  <div class="scroll_item_wrap">
    <li class="scroll_item">01</li>
    <li class="scroll_item">02</li>
    <li class="scroll_item">03</li>
    <li class="scroll_item">04</li>
    <li class="scroll_item">05</li>
  </div>
</template>

<script>
export default {

}
</script>

<style>

.scroll_item_wrap {
  height: 100%;
  overflow: scroll;
  -ms-overflow-style: none;
}

::-webkit-scrollbar { 
	display: none;
}

.scroll_item {
  margin-bottom: 15px;
  height: 120px;
  border: 1px solid black;
  list-style: none;
}

.scroll_item:last-child {
  margin-bottom: 0;
}

</style>