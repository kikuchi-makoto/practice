<template>
  <li class="m-list-02-item">
    <div class="m-list-02-box">
      <h3 class="m-list-02-title">
        {{question.title}}
      </h3>
      <div>
        <edit-button
          text="編集"
          eventName="editQuestion"
          @editQuestion="editQuestion"
        >
        </edit-button>
        <delete-button
          text="削除"
          eventName="deleteQuestion"
          @deleteQuestion="deleteQuestion"
        >
        </delete-button>
      </div>
      <p>
        {{this.isStatus}}
      </p>
    </div>
  </li>
</template>

<script>
import EditButton from '../button/Edit';
import DeleteButton from '../button/Delete';

export default {
  props: {
    question: Object,
  },
  computed: {
    isStatus() {
      return this.question.status ? '有効' : '無効';
    },
  },
  methods: {
    editQuestion() {
      console.log('click アンケート編集');
    },
    deleteQuestion() {
      console.log('click アンケート削除');
    },
  },
  components: {
    EditButton,
    DeleteButton,
  },
};
</script>
