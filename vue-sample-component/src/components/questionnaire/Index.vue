<template>
  <div class="m-box-01">
    <div v-if="hasSection">
      <ul class="m-list-01">
        <section-list
          v-for="(section, index) in dataList" :key="index"
          :section="section"
        >
        </section-list>
      </ul>
      <add-button
        text="セクション追加"
        eventName="addSection"
        @addSection="addSection"
      >
      </add-button>
    </div>
    <div v-else>
      {{nonSection}}
    </div>
  </div>
</template>

<script>
import SectionList from './SectionList';
import AddButton from '../button/Add';
import { nonSection } from '../../defines';

export default {
  props: {
    dataList: Array,
  },
  computed: {
    hasSection() {
      return this.dataList.length !== 0;
    },
    nonSection() {
      return nonSection;
    },
  },
  methods: {
    addSection() {
      console.log('click セクション追加');
    },
  },
  components: {
    SectionList,
    AddButton,
  },
};
</script>
