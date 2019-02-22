<template>
  <li class="m-list-02-item">
    <div class="m-list-02-box">
      <h3 class="m-list-02-title">
        {{prize.title}}
      </h3>
      <div>
        <edit-button
          text="編集"
          eventName="editQuestionnaire"
          @editQuestionnaire="editQuestionnaire"
        >
        </edit-button>
        <delete-button
          text="削除"
          eventName="deleteQuestionnaire"
          @deleteQuestionnaire="deleteQuestionnaire"
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
import EditButton from '../../button/Edit';
import DeleteButton from '../../button/Delete';

export default {
  props: {
    prize: Object,
  },
  computed: {
    isStatus() {
      return this.prize.status ? '有効' : '無効';
    },
  },
  methods: {
    editQuestionnaire() {
      console.log('click アンケート編集');
    },
    deleteQuestionnaire() {
      console.log('click アンケート削除');
    },
  },
  components: {
    EditButton,
    DeleteButton,
  },
};
</script>
