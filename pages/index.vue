<template>
  <main>
    {{ $t('index.title') }}
    <!-- <button @click="test = !test">Click</button>
    <CommonInput
      v-model="content.name"
      :options="{
        label: 'test',
        error: test,
        width: '300px',
        placeholder: 'placeholder',
        error_message: 'error_message',
      }"
      @reset="content.name = ''"
    />
    <CommonInput
      v-model="content.number"
      @input="content.number = content.number.replace(/[^0-9]/, '')"
      :options="{
        width: '300px',
        placeholder: 'Number',
      }"
      @reset="content.number = ''"
    />
    <CommonInput
      v-model="content.password"
      :options="{
        width: '300px',
        type: 'password',
        placeholder: 'Password'
      }"
    />
    <CommonInput
      v-model="content.phone"
      :options="{
        width: '300px',
        type: 'tel',
        placeholder: 'tel',
        error: test,
        error_message: 'error_message2',
      }"
      @reset="content.phone = ''"
    /> -->
    <button @click="$scrollById('#block2')">TO-TWOOO</button><p id="block1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore excepturi modi architecto doloremque saepe neque, illum sint aut! Quas perspiciatis, nobis alias error inventore facere, deleniti numquam accusamus labore quis corporis doloribus? Maxime, quisquam. Aliquid, non sapiente? Ipsa eligendi ullam nesciunt soluta ex aspernatur quidem aliquid vero quis enim consequatur recusandae veritatis rem quibusdam ut repellendus dolore vel doloremque debitis, nisi nostrum saepe? Laudantium in id ea, quasi natus explicabo quisquam aliquam ex officia accusamus dolor, quas distinctio, at adipisci? Beatae minus eveniet dolore repellendus quo sint accusantium error quam molestias, excepturi aliquam soluta pariatur ex. Obcaecati, corporis. Aliquid illum mollitia commodi totam quae, quam aperiam nostrum! Maxime aliquid quos accusantium repellendus, minus accusamus ab, saepe perferendis quibusdam fuga dolores impedit alias unde odit veritatis labore odio! Accusamus quisquam modi iure, culpa suscipit a voluptate nobis nisi placeat praesentium corrupti eaque molestiae veniam vel nostrum? Vero dolore corporis doloribus fugiat repellat ipsa architecto exercitationem eius commodi deleniti ab repudiandae suscipit magni, libero iste sit reprehenderit cum similique quam aut? Laudantium minus cupiditate dolor eius sunt totam eveniet architecto inventore ex? Repellat corrupti tempora eius explicabo voluptas ex harum, officiis ipsa, perspiciatis debitis quod a officia obcaecati, possimus placeat maiores accusantium ratione similique vel esse magni accusamus consequatur. Eum nulla tenetur laboriosam sint quo non eos consequatur, ab necessitatibus architecto nemo veritatis eaque soluta eligendi expedita ipsa repudiandae impedit ipsum accusamus fuga, quos nobis quia at? Fuga dolor commodi vitae odio facere, optio explicabo! Perspiciatis commodi explicabo odit consectetur magni ea obcaecati, dolorem cupiditate inventore, saepe dolores incidunt aliquam. Asperiores rerum quia explicabo facere, dolorum error tenetur a sit, consectetur ipsa nemo? Exercitationem aperiam id quod praesentium commodi doloribus aut sapiente, molestias velit, itaque libero quo tenetur laboriosam quidem, cumque labore quisquam dolore maiores! Amet atque aut ex nesciunt sint, quia, numquam repellat cupiditate perferendis, quaerat ratione expedita officia voluptatum quae provident dolor illum sed aspernatur libero quisquam dicta magnam totam? A doloremque eveniet soluta porro laudantium, non earum quibusdam sapiente consectetur rerum nisi laborum vitae nostrum cum unde doloribus consequatur iure magni tempore accusantium rem minus. Animi doloribus tempore natus molestiae, soluta unde. Minus dignissimos debitis, sapiente facere tempora eos voluptatem soluta dicta eum, eveniet, earum illum dolores obcaecati quos optio magnam laborum voluptas molestias? Commodi at ipsum quas. Delectus facilis, et velit quas repellat aliquid modi dignissimos ullam maxime odio cumque commodi, magnam molestiae enim quis. Odit, voluptate. Aut nemo rem pariatur unde, commodi possimus consequuntur soluta veritatis reprehenderit aspernatur, nesciunt maxime harum ducimus? Perspiciatis perferendis assumenda dolores provident! Libero dolore perferendis quaerat? Alias molestiae minus quibusdam necessitatibus. Sed labore optio inventore soluta, similique provident voluptates magni vel quidem, mollitia cum ducimus facilis autem asperiores non a maxime! Fugiat autem eius tempora, labore magnam exercitationem consequuntur voluptatem accusamus aliquid rerum soluta, assumenda veritatis voluptates vitae, beatae quidem. Perferendis quaerat odio pariatur dolores id, facere error, ipsum adipisci omnis alias delectus laudantium eius, voluptatibus sint. Totam quibusdam odit, rerum sunt quasi alias molestias consectetur in non amet eius deleniti voluptas!</p>
    <br>
    <br>
    <button @click="$router.push({path: '/test'})">TO-ONEEEE</button><p id="block2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore excepturi modi architecto doloremque saepe neque, illum sint aut! Quas perspiciatis, nobis alias error inventore facere, deleniti numquam accusamus labore quis corporis doloribus? Maxime, quisquam. Aliquid, non sapiente? Ipsa eligendi ullam nesciunt soluta ex aspernatur quidem aliquid vero quis enim consequatur recusandae veritatis rem quibusdam ut repellendus dolore vel doloremque debitis, nisi nostrum saepe? Laudantium in id ea, quasi natus explicabo quisquam aliquam ex officia accusamus dolor, quas distinctio, at adipisci? Beatae minus eveniet dolore repellendus quo sint accusantium error quam molestias, excepturi aliquam soluta pariatur ex. Obcaecati, corporis. Aliquid illum mollitia commodi totam quae, quam aperiam nostrum! Maxime aliquid quos accusantium repellendus, minus accusamus ab, saepe perferendis quibusdam fuga dolores impedit alias unde odit veritatis labore odio! Accusamus quisquam modi iure, culpa suscipit a voluptate nobis nisi placeat praesentium corrupti eaque molestiae veniam vel nostrum? Vero dolore corporis doloribus fugiat repellat ipsa architecto exercitationem eius commodi deleniti ab repudiandae suscipit magni, libero iste sit reprehenderit cum similique quam aut? Laudantium minus cupiditate dolor eius sunt totam eveniet architecto inventore ex? Repellat corrupti tempora eius explicabo voluptas ex harum, officiis ipsa, perspiciatis debitis quod a officia obcaecati, possimus placeat maiores accusantium ratione similique vel esse magni accusamus consequatur. Eum nulla tenetur laboriosam sint quo non eos consequatur, ab necessitatibus architecto nemo veritatis eaque soluta eligendi expedita ipsa repudiandae impedit ipsum accusamus fuga, quos nobis quia at? Fuga dolor commodi vitae odio facere, optio explicabo! Perspiciatis commodi explicabo odit consectetur magni ea obcaecati, dolorem cupiditate inventore, saepe dolores incidunt aliquam. Asperiores rerum quia explicabo facere, dolorum error tenetur a sit, consectetur ipsa nemo? Exercitationem aperiam id quod praesentium commodi doloribus aut sapiente, molestias velit, itaque libero quo tenetur laboriosam quidem, cumque labore quisquam dolore maiores! Amet atque aut ex nesciunt sint, quia, numquam repellat cupiditate perferendis, quaerat ratione expedita officia voluptatum quae provident dolor illum sed aspernatur libero quisquam dicta magnam totam? A doloremque eveniet soluta porro laudantium, non earum quibusdam sapiente consectetur rerum nisi laborum vitae nostrum cum unde doloribus consequatur iure magni tempore accusantium rem minus. Animi doloribus tempore natus molestiae, soluta unde. Minus dignissimos debitis, sapiente facere tempora eos voluptatem soluta dicta eum, eveniet, earum illum dolores obcaecati quos optio magnam laborum voluptas molestias? Commodi at ipsum quas. Delectus facilis, et velit quas repellat aliquid modi dignissimos ullam maxime odio cumque commodi, magnam molestiae enim quis. Odit, voluptate. Aut nemo rem pariatur unde, commodi possimus consequuntur soluta veritatis reprehenderit aspernatur, nesciunt maxime harum ducimus? Perspiciatis perferendis assumenda dolores provident! Libero dolore perferendis quaerat? Alias molestiae minus quibusdam necessitatibus. Sed labore optio inventore soluta, similique provident voluptates magni vel quidem, mollitia cum ducimus facilis autem asperiores non a maxime! Fugiat autem eius tempora, labore magnam exercitationem consequuntur voluptatem accusamus aliquid rerum soluta, assumenda veritatis voluptates vitae, beatae quidem. Perferendis quaerat odio pariatur dolores id, facere error, ipsum adipisci omnis alias delectus laudantium eius, voluptatibus sint. Totam quibusdam odit, rerum sunt quasi alias molestias consectetur in non amet eius deleniti voluptas!</p>
  </main>
</template>

<script>
  export default {
    name: 'Index',
    data() {
      return {
        content: {
          name: null,
          number: null,
          password: null,
          phone: null,
        },
        test: false,
      }
    },
    methods: {}
  }
</script>

<style lang="scss" scoped>
  .Index {

  }
</style>
