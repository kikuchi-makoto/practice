<style lang="scss" scoped>
  .l-contents-01 {
    margin: 20px;
    border: 1px solid #ddd;
    display: flex;
    .m-label-01 {
      width: 30%;
      background-color: #eee;
      padding: 20px;
      box-sizing: border-box;
    }
    .m-box-01 {
      width: 70%;
      padding: 20px;
      box-sizing: border-box;
    }
    .m-list-01 {
      &-item {
        margin-bottom: 20px;
        padding-bottom: 20px;
        border: 1px solid #ddd;
      }
      &-box {
        display: flex;
        padding: 10px;
        background-color: #eee;
        justify-content: space-between;
      }
    }
    .m-list-02 {
      border: 1px solid #ddd;
      border-bottom: none;
      margin: 20px;
      &-item {
        padding: 10px;
        border-bottom: 1px solid #ddd;
      }
      &-box {
        display: flex;
      }
      &-title {
        margin-right: auto;
      }
    }
  }
</style>

<template>
  <div class="l-contents-01">
    <div class="m-label-01">
      アンケート設定
    </div>
    <div class="m-box-01">
      <ul class="m-list-01">
        <li class="m-list-01-item">
          <div class="m-list-01-box">
            <h2>コース1</h2>
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
            <li class="m-list-02-item">
              <div class="m-list-02-box">
                <h3 class="m-list-02-title">景品名2</h3>
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
                <p>無効</p>
              </div>
            </li>
          </ul>
          <add-button
            text="景品追加"
          >
          </add-button>
        </li>
        <li class="m-list-01-item">
          <div class="m-list-01-box">
            <h2>コース2</h2>
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
          </ul>
          <add-button
            text="景品追加"
          >
          </add-button>
        </li>
      </ul>
      <add-button
        text="コース追加"
      >
      </add-button>
    </div>
  </div>
</template>

<script>
import EditButton from '../components/button/Edit';
import DeleteButton from '../components/button/Delete';
import AddButton from '../components/button/Add';

export default {
  components: {
    EditButton,
    DeleteButton,
    AddButton,
  },
};
</script>
