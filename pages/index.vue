<template>
  <main class="Index">
    {{ $t('index.title') }}
    <div class="container">
      <CommonAccordion>

        <CommonAccordionItem disabled>
          <template slot="trigger">
            <span class="fz-20 fw600">Disabled</span>
          </template>
          <template slot="content">
            disabled
          </template>
        </CommonAccordionItem>

        <CommonAccordionItem>
          <template slot="trigger">
            <span class="fz-20 fw600">input</span>
          </template>
          <template slot="content">
            <CommonButton @click="test = !test">{{test ? 'Hide Error' : 'Show Error'}}</CommonButton>
            <div class="d-flex fd-c r-gap-15 mt-15">
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
              />
              <CommonInput
                v-model="content.name"
                :options="{
                  label: 'Label',
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
            </div>
          </template>
        </CommonAccordionItem>

        <CommonAccordionItem>
          <template slot="trigger">
            <span class="fz-20 fw600">Button</span>
          </template>
          <template slot="content">
            <div class="d-flex c-gap-20">
              <CommonButton>One</CommonButton>
              <CommonButton buttonClass="two">Two</CommonButton>
              <CommonButton disabled>Disabled</CommonButton>
            </div>
          </template>
        </CommonAccordionItem>

        <CommonAccordionItem>
          <template slot="trigger">
            <span class="fz-20 fw600">Modal</span>
          </template>
          <template slot="content">
            <div class="d-flex c-gap-20">
              <CommonButton @click="showCommonModal = true">Show ModalOne</CommonButton>
              <CommonButton @click="showCommonModalTwo = true">Show ModalTwo</CommonButton>
            </div>
            <CommonModal
              :active="showCommonModal"
              @close-modal="showCommonModal = false"
              close
              >
              <template #header>header</template>
              <template #body>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dolores ab totam repellendus nihil cum ducimus quos enim, harum ex consectetur reprehenderit distinctio voluptates, neque saepe fugiat, quibusdam excepturi sunt!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dolores ab totam repellendus nihil cum ducimus quos enim, harum ex consectetur reprehenderit distinctio voluptates, neque saepe fugiat, quibusdam excepturi sunt!
              </template>
              <template #footer>footer</template>
            </CommonModal>
            <CommonModal
              isTheme="dark"
              close
              :active="showCommonModalTwo"
              @close-modal="showCommonModalTwo = false"
              >
              <template #header>header</template>
              <template #body>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dolores ab totam repellendus nihil cum ducimus quos enim, harum ex consectetur reprehenderit distinctio voluptates, neque saepe fugiat, quibusdam excepturi sunt!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dolores ab totam repellendus nihil cum ducimus quos enim, harum ex consectetur reprehenderit distinctio voluptates, neque saepe fugiat, quibusdam excepturi sunt!
              </template>
              <template #footer>footer</template>
            </CommonModal>
          </template>
        </CommonAccordionItem>

        <CommonAccordionItem>
          <template slot="trigger">
            <span class="fz-20 fw600">Teleport</span>
          </template>
          <template slot="content">
            <div class="d-flex">
              <Portal :disabled="width > 768" class="flex-1 bg_red" to="right-basic">
                <p class="white">
                  This is content from the left/top container (green).
                  The cool part is, it works across components,
                  so you can send your content anywhere!
                </p>
              </Portal>
              <div class="flex-1 bg_green">
                2
                <PortalTarget name="right-basic"></PortalTarget>
              </div>
            </div>
          </template>
        </CommonAccordionItem>

        <CommonAccordionItem style="background-color: #0C1C33">
          <template slot="trigger">
            <span class="fz-20 fw600 white">Checkbox</span>
          </template>
          <template slot="content">
            <span class="white">color-{{color}}</span>
            <br>
            <span class="white">size-{{size}}</span>
            <CommonCheckbox
              circle
              @update="updateColorVariation($event)"
              :data="colorVariation"
            />
            <CommonCheckbox
              @update="updateCheckboxList($event)"
              :data="checkboxList"
            />
          </template>
        </CommonAccordionItem>

        <CommonAccordionItem>
            <template slot="trigger">
              <span class="fz-20 fw600">Element UI</span>
            </template>
            <template slot="content">
              <div class="d-flex fd-c r-gap-20">
                <div class="d-flex c-gap-20">
                  <CommonButton @click="$message({
                    showClose: true,
                    message: 'Congrats, this is a success message. wefwe wefwefe',
                    type: 'success'})"
                    >
                    $message
                  </CommonButton>
                  <CommonButton @click="
                    $confirm(`Вы действительно хотите удалить?`, {
                      confirmButtonText: 'Да',
                      cancelButtonText: 'Нет',
                    })
                    .then()
                    .catch()"
                    >
                    $confirm
                  </CommonButton>
                </div>
                <ElSwitch v-model="toggleSwitch"></ElSwitch>
                <el-select v-model="selectValue" multiple placeholder="Select">
                  <el-option
                    v-for="item in select"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </div>
            </template>
        </CommonAccordionItem>

      </CommonAccordion>

      <span>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, sit. Quisquam quo, iusto architecto eveniet quos minima sed alias officiis, ut vitae atque! Alias veniam commodi repellendus aperiam! Minus recusandae cupiditate dolorem maxime amet error, voluptatibus doloribus delectus, vel molestias ipsa quisquam, cumque commodi adipisci ducimus labore assumenda debitis quae aperiam odio repellat ab perspiciatis. Ea eius necessitatibus perspiciatis quidem! Odit non id animi quibusdam nam magni cupiditate fuga eveniet culpa fugit. Blanditiis vel dicta eaque perferendis vero accusamus consequuntur ducimus? Eius tempore nesciunt neque nobis dolorem doloribus cumque eos qui molestias? Ratione vel, laudantium ab tempora fuga reiciendis error culpa quos, dignissimos minus unde atque repellendus illo quidem expedita. Voluptatum deserunt architecto doloremque, in eaque, ab nesciunt ut neque facilis itaque, aliquam nam odit earum et est dolor aperiam impedit? Incidunt sit, porro deserunt adipisci aut esse saepe necessitatibus facilis, ratione consequuntur soluta dicta harum eum obcaecati doloribus aperiam magnam tenetur iusto voluptatum voluptatibus, cupiditate asperiores natus! Optio dolores corrupti laudantium labore magnam iusto laboriosam atque quia vero enim molestias, commodi, corporis tempore fugiat iste esse, inventore voluptas impedit tempora eaque maiores delectus quasi! Laborum et voluptatem omnis maxime iusto commodi magni consectetur esse nesciunt, illum, magnam quod natus vero dolore nisi eligendi, ducimus possimus ad labore exercitationem architecto temporibus ullam deleniti earum. Facilis porro quibusdam asperiores aliquid eveniet distinctio nesciunt fuga nulla exercitationem magni beatae corporis, totam illo sint nisi odit. Est doloremque ut iusto dolore, aperiam cum mollitia ratione obcaecati tempora ipsa quas asperiores fugit eum error quibusdam qui voluptates voluptate maiores explicabo. Veniam corrupti quas fuga at id necessitatibus tenetur facilis dolorem ratione eveniet, dolorum doloribus veritatis nesciunt repellendus similique quae minus nemo cum quos rem aut numquam, ad sequi? Labore sapiente, quos deleniti ea quasi laboriosam! Reiciendis accusantium quidem, ut similique, quae, delectus doloremque eos in itaque quis perspiciatis placeat magni id autem saepe mollitia natus perferendis sapiente accusamus! Vero, sint nulla. Placeat hic quod expedita vero, iure libero necessitatibus perferendis recusandae, eveniet nulla culpa sit soluta enim exercitationem aspernatur suscipit cupiditate quos quae? Voluptates temporibus quia, incidunt dolores harum nemo sequi doloremque, asperiores earum, tempora dolor fuga obcaecati maiores minima praesentium eos quo quos? Earum eius inventore ad provident voluptas modi repudiandae sunt hic perspiciatis architecto voluptatibus, delectus nam unde nemo nesciunt distinctio odio reprehenderit tempore quos quam nisi nihil blanditiis quisquam assumenda? Possimus provident in perferendis sapiente doloremque? Quas eaque dolorem incidunt voluptatem dolore neque beatae vitae vel tempora reiciendis laboriosam omnis, eligendi repellat eos consequuntur. Eos molestias consequatur modi aliquam labore deserunt eveniet facilis maxime assumenda voluptatum, adipisci, nostrum nobis voluptates enim qui accusamus accusantium, temporibus ad libero dignissimos fugiat dolores architecto neque itaque! Minima quas sed commodi voluptate error accusantium nam rerum itaque, eum quo nobis optio, incidunt beatae sapiente. Doloribus ut suscipit sed quod similique nulla ipsa sequi cupiditate assumenda magnam eius obcaecati commodi temporibus debitis quos quis dolores, et eligendi quia. Quae provident neque reprehenderit eaque velit, illo magni porro numquam dolorum repellat quod odio amet voluptates maiores nobis.
      </span>
    </div>
  </main>
</template>

<script>
  import responsive from '../mixins/responsive'
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
        showCommonModal: false,
        showCommonModalTwo: false,
        toggleSwitch: false,
        select: [
          {
            value: 'Option1',
            label: 'Option1'
          }, {
            value: 'Option2',
            label: 'Option2'
          }, {
            value: 'Option3',
            label: 'Option3'
          }, {
            value: 'Option4',
            label: 'Option4'
          }, {
            value: 'Option5',
            label: 'Option5'
          }
        ],
        selectValue: '',
        color: [],
        size: [],
        colorVariation: ['#DC6872', '#DC68A7', '#68DCD5', '#94DC68', '#2036FF'],
        checkboxList: ['43', '31', '22', '51'],
      }
    },
    mixins: [responsive],
    methods: {
      updateColorVariation(val) {
        this.color = val
      },
      updateCheckboxList(val) {
        this.size = val
      },
    },
  }
</script>

<style lang="scss" scoped>
  .test {
    @include value_adaptive(font-size, 80, 20, 1400, 861);
    @include value_adaptive(font-size, 50, 30, 800, 320, !important);
    @include value_change(color, red, blue, 800);
  }
  .Index {
  }
</style>
