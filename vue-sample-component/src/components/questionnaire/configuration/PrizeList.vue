<template>
  <li class="m-list-02-item">
    <div class="m-list-02-box">
      <h3 class="m-list-02-title">景品名1</h3>
      <div>
        <edit-button
          text="編集"
        >
        </edit-button>
        <delete-button
          text="削除"
        >
        </delete-button>
      </div>
      <p>有効</p>
    </div>
  </li>
</template>

<script>
import EditButton from '../../button/Edit';
import DeleteButton from '../../button/Delete';

export default {
  components: {
    EditButton,
    DeleteButton,
  },
};
</script>
