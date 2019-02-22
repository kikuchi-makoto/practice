<template>
  <li class="m-list-01-item">
    <div class="m-list-01-box">
      <h2>{{section.title}}</h2>
      <div>
        <edit-button
          text="編集"
          eventName="editSection"
          @editSection="editSection"
        >
        </edit-button>
        <delete-button
          text="削除"
          eventName="deleteSection"
          @deleteSection="deleteSection"
        >
        </delete-button>
      </div>
    </div>
    <ul v-if="hasQuestion" class="m-list-02">
      <question-list
        v-for="(question, index) in this.QuestionList" :key="index"
        :question="question"
      >
      ></question-list>
    </ul>
    <p v-else>
      {{nonQuestion}}
    </p>
    <add-button
      text="アンケート追加"
      eventName="addQuestion"
      @addQuestion="addQuestion"
    >
    </add-button>
  </li>
</template>

<script>
import EditButton from '../button/Edit';
import DeleteButton from '../button/Delete';
import AddButton from '../button/Add';
import QuestionList from './QuestionList';
import { nonQuestion } from '../../defines';

export default {
  props: {
    section: Object,
  },
  computed: {
    QuestionList() {
      return this.section.question;
    },
    hasQuestion() {
      return this.section.question.length !== 0;
    },
    nonQuestion() {
      return nonQuestion;
    },
  },
  methods: {
    addQuestion() {
      console.log('click アンケート追加');
    },
    editSection() {
      console.log('click セクション編集');
    },
    deleteSection() {
      console.log('click セクション削除');
    },
  },
  components: {
    EditButton,
    DeleteButton,
    AddButton,
    QuestionList,
  },
};
</script>
