<template>
  <page title="规则管理" subtitle="总计240条规则">
    <grid-row cards>
      <grid-col xs="4" lg="4">
        <card>
          <card-header title="Development Activity"/>
          <card-body>
            <form-group>
              <form-label>Filter</form-label>
              <form-input type="text" placeholder=""/>
            </form-group>
            <form-group>
              <form-label>Filter</form-label>
              <form-input type="text" placeholder=""/>
            </form-group>
            <form-group>
              <form-label>Country</form-label>
              <select class="form-control custom-select">
                <option value="">Germany</option>
              </select>
            </form-group>
          </card-body>
          <card-footer>
          </card-footer>
        </card>
      </grid-col>
      <grid-col xs="8" lg="8">
        <card>
          <t-table responsive hover cards outline vertical-align="center" className="text-nowrap">
            <table-head>
              <table-row>
                <table-cel header class="text-center w-1"></table-cel>
                <table-cel header>User</table-cel>
                <table-cel header>Usage</table-cel>
                <table-cel header class="text-center">Payment</table-cel>
                <table-cel header>Activity</table-cel>
                <table-cel header class="text-center">Satisfaction</table-cel>
                <table-cel header class="text-center"></table-cel>
              </table-row>
            </table-head>
            <table-body>
              <table-row>
                <table-cel class="text-center">
                  <avatar image-url="/static/demo/faces/female/26.jpg" status-color="green"/>
                </table-cel>
                <table-cel>
                  <div>Elizabeth Martin</div>
                  <div class="small text-muted">Registered: Mar 19, 2018</div>
                </table-cel>

                <table-cel>
                  <div class="clearfix">
                    <div class="float-left">
                      <strong>42%</strong>
                    </div>
                    <div class="float-right">
                      <small class="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
                    </div>
                  </div>
                  <progress-bar size="xs" color="yellow" :progress="42" />
                </table-cel>

                <table-cel class="text-center">
                  <i class="payment payment-visa"></i>
                </table-cel>

                <table-cel>
                  <div class="small text-muted">Last login</div>
                  <div>4 minutes ago</div>
                </table-cel>

                <table-cel class="text-center">
                  <div class="mx-auto chart-circle chart-circle-xs" data-value="0.42" data-thickness="3" data-color="blue">
                    <div class="chart-circle-value">42%</div>
                  </div>
                </table-cel>

                <table-cel>
                  <dropdown position="right" class="item-action">
                    <template slot="dropdown-toggle">
                      <a href="javascript:void(0)" class="icon"><i class="fe fe-more-vertical"></i></a>
                    </template>
                    <dropdown-menu-item label="Hello"/>
                  </dropdown>
                </table-cel>
              </table-row>
            </table-body>
          </t-table>
        </card>
      </grid-col>
    </grid-row>
  </page>
</template>

<script>
export default {
  name: 'Rules'
}
</script>

<style lang="scss">
@import '../assets/scss/dashboard.css';
</style>
