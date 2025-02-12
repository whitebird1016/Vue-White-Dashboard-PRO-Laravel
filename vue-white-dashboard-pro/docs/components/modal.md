# Modal

Use Bootstrap’s JavaScript modal plugin to add dialogs to your site for lightboxes, user notifications, or completely custom content.

<hr>

```js
import {Modal} from 'src/components'
```

Global usage

```js
Vue.component(Modal.name, Modal)
```

For local usage

```js
export default {
  components: {
    Modal
  }
}
```

## Example

:::demo
```html
<div>
    <base-button type="primary" @click="modals.modal0 = true">
      Launch demo modal
    </base-button>
   <modal :show.sync="modals.modal0">
     <template slot="header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
     </template>
     <div>
      ...
     </div>
     <template slot="footer">
         <base-button type="secondary" @click="modals.modal0 = false">Close</base-button>
         <base-button type="primary">Save changes</base-button>
     </template>
   </modal>

</div>
```
:::

## Variations

:::demo
```html
<div class="row">
    <div class="col-md-4">
        <base-button block type="primary" class=" mb-3" @click="modals.modal1 = true">
            Default
        </base-button>
        <modal :show.sync="modals.modal1">
            <h6 slot="header" class="modal-title" id="modal-title-default">Type your modal title</h6>

            <p>Far far away, behind the word mountains, far from the countries Vokalia and
                Consonantia, there live the blind texts. Separated they live in Bookmarksgrove
                right at the coast of the Semantics, a large language ocean.</p>
            <p>A small river named Duden flows by their place and supplies it with the necessary
                regelialia. It is a paradisematic country, in which roasted parts of sentences
                fly into your mouth.</p>

            <template slot="footer">
                <base-button type="primary">Save changes</base-button>
                <base-button type="secondary" class="ml-auto" @click="modals.modal1 = false">Close
                </base-button>
            </template>
        </modal>
    </div>
    <div class="col-md-4">
        <base-button block type="default" class=" mb-3" @click="modals.modal3 = true">
            Form
        </base-button>

        <modal :show.sync="modals.modal3"
               body-classes="p-0"
               modal-classes="modal-dialog-centered modal-sm">
            <card type="secondary"
                  header-classes="bg-white pb-5"
                  body-classes="px-lg-5 py-lg-5"
                  class="border-0 mb-0">
                <template>
                    <div class="text-muted text-center mb-3">
                        <small>Sign in with</small>
                    </div>
                    <div class="btn-wrapper text-center">
                        <base-button type="default">
                            <img slot="icon" src="https://demos.creative-tim.com/argon-design-system/assets/img/icons/common/github.svg">
                            Github
                        </base-button>

                        <base-button type="danger">
                            <img slot="icon" src="https://demos.creative-tim.com/argon-design-system/assets/img/icons/common/google.svg">
                            Google
                        </base-button>
                    </div>
                </template>
                <template>
                    <div class="text-center text-muted mb-4">
                        <small>Or sign in with credentials</small>
                    </div>
                    <form role="form">
                        <base-input alternative
                                    class="mb-3"
                                    placeholder="Email"
                                    addon-left-icon="ni ni-email-83">
                        </base-input>
                        <base-input alternative
                                    type="password"
                                    placeholder="Password"
                                    addon-left-icon="ni ni-lock-circle-open">
                        </base-input>
                        <base-checkbox>
                            Remember me
                        </base-checkbox>
                        <div class="text-center">
                            <base-button type="primary" class="my-4">Sign In</base-button>
                        </div>
                    </form>
                </template>
            </card>
        </modal>
    </div>
</div>
```
:::


<script>
export default {
props: ['slot-key'],
    data(){
        return {
            modals: {
               modal0: false,
               modal1: false,
               modal2: false,
               modal3: false
            }
        }
    }
}
</script>


## Modal props

<props-table component-name="modal"></props-table>


## Modal Slots
<slots-table :slots="[
          {name: 'default', description: 'Default content for modal'},
          {name: 'header', description: 'Modal header content'},
          {name: 'footer', description: 'Modal footer content'},
          {name: 'close-button', description: 'Content for modal close button'},
          ]"/>
