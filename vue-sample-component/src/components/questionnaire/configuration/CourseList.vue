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
    <ul v-if="hasPrize" class="m-list-02">
      <prize-list
        v-for="(prize, index) in this.prizeList" :key="index"
        :prize="prize"
      >
      ></prize-list>
    </ul>
    <p v-else>
      {{nonPrize}}
    </p>
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
import { nonPrize } from '../../../defines';

export default {
  props: {
    questionnaire: Object,
  },
  computed: {
    prizeList() {
      return this.questionnaire.prize;
    },
    hasPrize() {
      return this.questionnaire.prize.length !== 0;
    },
    nonPrize() {
      return nonPrize;
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
