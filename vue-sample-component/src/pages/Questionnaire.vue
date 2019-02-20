<style lang="scss" scoped>
  .block {
    display: flex;
  }
</style>

<template>
  <div class="block">
    <div>
      アンケート設定
    </div>
    <div>
      <ul>
        <li>
          <div>
            <h2>コース名</h2>
            <div>
              <button type="button">編集</button>
              <button type="button">削除</button>
            </div>
          </div>
          <ul>
            <li>
              <div>
                <h3>景品名</h3>
                <div>
                  <button type="button">編集</button>
                  <button type="button">削除</button>
                </div>
                <p>有効</p>
              </div>
            </li>
          </ul>
        </li>
      </ul>
      <button type="button">コース追加</button>
    </div>
  </div>
</template>
