<template>
  <div>
    <span class="demonstration">默认显示所有Tag</span>
    <p>ruleForm{{ ruleForm.selectIds }}</p>
    <el-cascader
      v-model="ruleForm.selectIds"
      :options="options"
      :props="props"
      @change="change"
      clearable
    ></el-cascader>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      ruleForm: {
        selectIds: [],
      },
      props: { multiple: true, emitPath: false },
      options: [
        // {
        //   value: 1,
        //   label: "东南",
        //   children: [
        //     {
        //       value: 2,
        //       label: "上海",
        //     },
        //     {
        //       value: 7,
        //       label: "江苏",
        //     },
        //   ],
        // },
        {
          value: 17,
          label: "西北",
          children: [
            {
              value: 18,
              label: "陕西",
            },
          ],
        },
      ],
    };
  },
  methods: {
    change(_v) {
      console.log("change", _v);
    },
  },
  mounted() {
    setTimeout(() => {
      /**
       *
       * ...
       * ...
       * ...
       */
      this.ruleForm.selectIds = [18];
    }, 3000);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
