<template>
  <li class="m-list-01-item">
    <div class="m-list-01-box">
      <h2>{{questionnaire.courseTitle}}</h2>
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
    </div>
    <ul class="m-list-02">
      <prize-list
        v-for="(prize, index) in this.prizeList" :key="index"
        :prize="prize"
      >
      ></prize-list>
    </ul>
    <add-button
      text="景品追加"
    >
    </add-button>
  </li>
</template>

<script>
import EditButton from '../../button/Edit';
import DeleteButton from '../../button/Delete';
import AddButton from '../../button/Add';
import PrizeList from './PrizeList';

export default {
  props: {
    questionnaire: Object,
  },
  computed: {
    prizeList() {
      return this.questionnaire.prize;
    },
  },
  components: {
    EditButton,
    DeleteButton,
    AddButton,
    PrizeList,
  },
};
</script>
