<template>
  <div class="company-details-page">
    <div class="container">
      <div>
        <div class="company-details-page__new-company-header">
          <h3>Company Details</h3>
        </div>

        <div class="company-details-page__breadcrumbs">
          <div>
            <nuxt-link to="/">Home</nuxt-link>
          </div>
          <div>
            <h6>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                xmlns:svgjs="http://svgjs.com/svgjs"
                version="1.1"
                width="10"
                height="10"
                x="0"
                y="0"
                viewBox="0 0 24 24"
                style="enable-background: new 0 0 512 512"
                xml:space="preserve"
                class=""
              >
                <g>
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    d="m6.293 22.707a1 1 0 0 1 0-1.414l9.293-9.293-9.293-9.293a1 1 0 0 1 1.414-1.414l10 10a1 1 0 0 1 0 1.414l-10 10a1 1 0 0 1 -1.414 0z"
                    fill="#707070"
                    data-original="#000000"
                    class=""
                  />
                </g>
              </svg>
            </h6>
          </div>
          <div>
            <h6 class="mb-0">Company Details</h6>
          </div>
        </div>

        <section class="company-details-page__company">
          <div class="row">
            <div class="col-md-8">
              <div class="d-flex flex-wrap image-details">
                <div>
                  <img class="company-name" :src="company.logo" alt="" />
                </div>
                <div class="compony-details">
                  <h6>{{ company.name }}</h6>
                  <div class="mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      viewBox="0 0 13.57 15.689"
                    >
                      <g
                        id="noun-date-1076224"
                        transform="translate(-98.651 -80.081)"
                      >
                        <path
                          id="Path_9"
                          data-name="Path 9"
                          d="M174.777,81.553h-.551V80.52a.409.409,0,1,0-.816,0v1.033h-5.1V80.52a.409.409,0,1,0-.816,0v1.033h-.551a2.981,2.981,0,0,0-2.857,3.076v8.064a2.981,2.981,0,0,0,2.857,3.076H174.8a2.981,2.981,0,0,0,2.857-3.076V84.629a3,3,0,0,0-2.877-3.076Zm0,13.338h-7.836a2.13,2.13,0,0,1-2.041-2.2V86.607h11.938v6.087a2.16,2.16,0,0,1-2.061,2.2Zm2.041-9.163H164.9v-1.1a2.13,2.13,0,0,1,2.041-2.2h.551v1.033a.409.409,0,1,0,.816,0V82.432h5.1v1.033a.409.409,0,1,0,.816,0V82.432h.551a2.13,2.13,0,0,1,2.041,2.2Z"
                          transform="translate(-65.433 0)"
                          fill="#707070"
                        />
                        <path
                          id="Path_10"
                          data-name="Path 10"
                          d="M249.448,369.6h-4.992c-.162,0-.3.25-.3.556s.133.556.3.556h4.977c.162,0,.3-.25.3-.556s-.118-.556-.281-.556Z"
                          transform="translate(-141.537 -278.337)"
                          fill="#707070"
                        />
                        <path
                          id="Path_11"
                          data-name="Path 11"
                          d="M276.637,307.433h6.252a.556.556,0,1,0,0-1.111h-6.252a.556.556,0,1,0,0,1.111Z"
                          transform="translate(-174.327 -217.503)"
                          fill="#707070"
                        />
                      </g>
                    </svg>
                    Date created :
                    {{ new Date(company.createdAt).toLocaleDateString() }}
                  </div>

                  <div class="mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      viewBox="0 0 12.454 15.222"
                    >
                      <g
                        id="noun-profile-1594258"
                        transform="translate(-130.195 -156.8)"
                      >
                        <path
                          id="Path_12"
                          data-name="Path 12"
                          d="M261.654,171.33a.692.692,0,0,1-1.384,0,4.843,4.843,0,0,0-9.687,0,.692.692,0,0,1-1.384,0,6.227,6.227,0,0,1,12.454,0Zm-6.227-6.919a3.806,3.806,0,1,1,3.806-3.806A3.806,3.806,0,0,1,255.427,164.411Zm0-1.384a2.422,2.422,0,1,0-2.422-2.422A2.422,2.422,0,0,0,255.427,163.027Z"
                          transform="translate(-119.005)"
                          fill="#707070"
                        />
                      </g>
                    </svg>
                    Created By :
                    {{ company.createdBy ? company.createdBy.name : "" }}
                  </div>

                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      xmlns:svgjs="http://svgjs.com/svgjs"
                      version="1.1"
                      width="26"
                      height="26"
                      x="0"
                      y="0"
                      viewBox="0 0 24 24"
                      style="enable-background: new 0 0 512 512"
                      xml:space="preserve"
                      class=""
                    >
                      <g>
                        <path
                          xmlns="http://www.w3.org/2000/svg"
                          d="m16.5 4h-8a4.505 4.505 0 0 0 -4.5 4.5v8a4.505 4.505 0 0 0 4.5 4.5h8a4.505 4.505 0 0 0 4.5-4.5v-8a4.505 4.505 0 0 0 -4.5-4.5zm3.5 12.5a3.5 3.5 0 0 1 -3.5 3.5h-8a3.5 3.5 0 0 1 -3.5-3.5v-8a3.5 3.5 0 0 1 3.5-3.5h8a3.5 3.5 0 0 1 3.5 3.5zm-1-4a.5.5 0 0 1 -.5.5h-2.691l-1.862 3.724a.5.5 0 0 1 -.906-.027l-2.482-5.791-.585 1.752a.5.5 0 0 1 -.474.342h-3a.5.5 0 0 1 0-1h2.64l.886-2.658a.5.5 0 0 1 .933-.039l2.576 6.01 1.518-3.037a.5.5 0 0 1 .447-.276h3a.5.5 0 0 1 .5.5z"
                          fill="#707070"
                          data-original="#000000"
                          class=""
                        />
                      </g>
                    </svg>
                    Status:

                    <span v-if="company.status == 'PENDDING'" class="pendding">
                      Pendding
                    </span>
                    <span v-else-if="company.status == 'DEAL'" class="deal">
                      Deal
                    </span>
                    <span
                      v-else-if="company.status == 'APPROACH'"
                      class="approach"
                    >
                      Approach
                    </span>
                    <span v-else-if="company.status == 'LOSE'" class="lose">
                      Lose
                    </span>
                    <span
                      v-else-if="company.status == 'PROPOSAL'"
                      class="proposal"
                    >
                      Proposal
                    </span>
                    <span
                      v-else-if="company.status == 'MEETING'"
                      class="meeting"
                    >
                      Meeting
                    </span>
                    <span
                      v-else-if="company.status == 'SALES_TEAM'"
                      class="salesTeam"
                    >
                      Sales Team
                    </span>
                    <span
                      v-else-if="company.status == 'FOLLOW_UP'"
                      class="followUp"
                    >
                      Follow-Up
                    </span>

                    <button v-if="company.status != 'SALES_TEAM' " class="bordered" @click="openUpdateCompanyStatus(company)">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        xmlns:svgjs="http://svgjs.com/svgjs"
                        version="1.1"
                        width="25"
                        height="25"
                        x="0"
                        y="0"
                        viewBox="0 0 6.3499999 6.3500002"
                        style="enable-background: new 0 0 512 512"
                        xml:space="preserve"
                        class=""
                      >
                        <g>
                          <g
                            xmlns="http://www.w3.org/2000/svg"
                            id="layer1"
                            transform="translate(0 -290.65)"
                          >
                            <path
                              id="path9559"
                              d="m1.5818147 290.91246a.26460982.26460982 0 0 0 -.1819011.0801l-1.05833327 1.05834a.26460982.26460982 0 0 0 0 .3731l1.05833327 1.05885a.2652852.2652852 0 0 0 .3751686-.37517l-.6051286-.60513h4.1227456v.81029a.26460982.26460982 0 1 0 .5270977 0v-.81029c0-.28858-.2385166-.52968-.5270977-.52968h-4.1253305l.6077135-.6072a.26460982.26460982 0 0 0 -.1932675-.4532zm3.1775824 3.17396a.26460982.26460982 0 0 0 -.1834515.45475l.6071976.60772h-4.124812v-.78703a.26460982.26460982 0 0 0 -.26768417-.26769.26460982.26460982 0 0 0 -.2614824.26769v.78703c0 .28858.2405856.5271.52916657.5271h4.124812l-.6071976.60771a.26460982.26460982 0 1 0 .3731049.37466l1.0583333-1.05834a.26460982.26460982 0 0 0 0-.37516l-1.0583333-1.05834a.26460982.26460982 0 0 0 -.1896534-.0801z"
                              font-variant-ligatures="normal"
                              font-variant-position="normal"
                              font-variant-caps="normal"
                              font-variant-numeric="normal"
                              font-variant-alternates="normal"
                              font-feature-settings="normal"
                              text-indent="0"
                              text-align="start"
                              text-decoration-line="none"
                              text-decoration-style="solid"
                              text-decoration-color="rgb(0,0,0)"
                              text-transform="none"
                              text-orientation="mixed"
                              white-space="normal"
                              shape-padding="0"
                              isolation="auto"
                              mix-blend-mode="normal"
                              solid-color="rgb(0,0,0)"
                              solid-opacity="1"
                              vector-effect="none"
                              fill="#FFCB05"
                              data-original="#000000"
                              class=""
                            />
                          </g>
                        </g>
                      </svg>
                      Change
                    </button>
                  </div>
                </div>

                <div class="company-details-page__profits">
                  <h5 v-if="company.status != 'SALES_TEAM'" @click="salesTeamModel = true" class="sales-team">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      xmlns:svgjs="http://svgjs.com/svgjs"
                      version="1.1"
                      width="30"
                      height="30"
                      x="0"
                      y="0"
                      viewBox="0 0 512 512"
                      style="enable-background: new 0 0 512 512"
                      xml:space="preserve"
                      class=""
                    >
                      <g>
                        <g xmlns="http://www.w3.org/2000/svg">
                          <g>
                            <path
                              d="M436,0c-24.814,0-45,20.186-45,45c0,10.065,3.439,19.272,9.044,26.776l-73.392,79.636C323.22,150.571,319.688,150,316,150    c-9.212,0-17.77,2.802-24.91,7.57l-52.335-39.24c1.328-4.239,2.245-8.659,2.245-13.33c0-24.814-20.186-45-45-45    c-24.814,0-45,20.186-45,45c0,4.671,0.917,9.091,2.245,13.33l-52.335,39.24C93.77,152.802,85.212,150,76,150    c-24.814,0-45,20.186-45,45c0,24.814,20.186,45,45,45s45-20.186,45-45c0-4.671-0.917-9.091-2.245-13.33l52.335-39.24    c7.139,4.768,15.698,7.57,24.91,7.57c9.212,0,17.77-2.802,24.91-7.57l52.335,39.24C271.917,185.909,271,190.329,271,195    c0,24.814,20.186,45,45,45c24.814,0,45-20.186,45-45c0-10.065-3.439-19.272-9.044-26.776l73.392-79.636    C428.78,89.429,432.312,90,436,90c24.814,0,45-20.186,45-45C481,20.186,460.814,0,436,0z"
                              fill="#EA0552"
                              data-original="#000000"
                              class=""
                            />
                          </g>
                        </g>
                        <g xmlns="http://www.w3.org/2000/svg">
                          <g>
                            <path
                              d="M226,240h-60c-8.291,0-15,6.709-15,15v197h90V255C241,246.709,234.291,240,226,240z"
                              fill="#EA0552"
                              data-original="#000000"
                              class=""
                            />
                          </g>
                        </g>
                        <g xmlns="http://www.w3.org/2000/svg">
                          <g>
                            <path
                              d="M346,300h-60c-8.291,0-15,6.709-15,15v137h90V315C361,306.709,354.291,300,346,300z"
                              fill="#EA0552"
                              data-original="#000000"
                              class=""
                            />
                          </g>
                        </g>
                        <g xmlns="http://www.w3.org/2000/svg">
                          <g>
                            <path
                              d="M466,180h-60c-8.291,0-15,6.709-15,15v257h90V195C481,186.709,474.291,180,466,180z"
                              fill="#EA0552"
                              data-original="#000000"
                              class=""
                            />
                          </g>
                        </g>
                        <g xmlns="http://www.w3.org/2000/svg">
                          <g>
                            <path
                              d="M106,330H46c-8.291,0-15,6.709-15,15v107h90V345C121,336.709,114.291,330,106,330z"
                              fill="#EA0552"
                              data-original="#000000"
                              class=""
                            />
                          </g>
                        </g>
                        <g xmlns="http://www.w3.org/2000/svg">
                          <g>
                            <path
                              d="M497,482c-66.985,0-97.729,0-109.871,0c-5.55,0-7.533,0-7.518,0c-22.103,0-104.372,0-364.611,0c-8.291,0-15,6.709-15,15    c0,8.291,6.709,15,15,15c181.52,0,312.43,0,482,0c8.291,0,15-6.709,15-15C512,488.709,505.291,482,497,482z"
                              fill="#EA0552"
                              data-original="#000000"
                              class=""
                            />
                          </g>
                        </g>
                        <g xmlns="http://www.w3.org/2000/svg"></g>
                        <g xmlns="http://www.w3.org/2000/svg"></g>
                        <g xmlns="http://www.w3.org/2000/svg"></g>
                        <g xmlns="http://www.w3.org/2000/svg"></g>
                        <g xmlns="http://www.w3.org/2000/svg"></g>
                        <g xmlns="http://www.w3.org/2000/svg"></g>
                        <g xmlns="http://www.w3.org/2000/svg"></g>
                        <g xmlns="http://www.w3.org/2000/svg"></g>
                        <g xmlns="http://www.w3.org/2000/svg"></g>
                        <g xmlns="http://www.w3.org/2000/svg"></g>
                        <g xmlns="http://www.w3.org/2000/svg"></g>
                        <g xmlns="http://www.w3.org/2000/svg"></g>
                        <g xmlns="http://www.w3.org/2000/svg"></g>
                        <g xmlns="http://www.w3.org/2000/svg"></g>
                        <g xmlns="http://www.w3.org/2000/svg"></g>
                      </g>
                    </svg>

                    Sales Team
                  </h5>



                   <h5 v-if="company.status == 'SALES_TEAM' " @click="assignToMe()" class="assign-to-me">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 17.08 21.751">
                      <g id="noun-money-1806108" transform="translate(-75.769 -14.004)">
                        <path id="Path_226" data-name="Path 226" d="M153.026,19.727a26.057,26.057,0,0,1-3.366.206,26.317,26.317,0,0,1-3.366-.206c-2.45,2.084-5.174,5.564-5.174,8.723,0,4.968,3.824,7.3,8.54,7.3s8.54-2.335,8.54-7.3C158.2,25.268,155.476,21.811,153.026,19.727ZM150.3,31.4v.939a.181.181,0,0,1-.183.183H149.2a.181.181,0,0,1-.183-.183v-.916a1.908,1.908,0,0,1-1.763-1.694.2.2,0,0,1,.183-.183h.916a.174.174,0,0,1,.183.137.613.613,0,0,0,.6.481h.8a.946.946,0,0,0,.962-.8A.9.9,0,0,0,150,28.359h-.6a2.234,2.234,0,0,1-2.244-1.969,2.167,2.167,0,0,1,1.878-2.358v-.916a.2.2,0,0,1,.183-.183h.916a.181.181,0,0,1,.183.183v.916a1.908,1.908,0,0,1,1.763,1.694.181.181,0,0,1-.183.183h-.916a.192.192,0,0,1-.183-.137.639.639,0,0,0-.618-.481h-.8a.964.964,0,0,0-.962.8.91.91,0,0,0,.893,1.007H150a2.142,2.142,0,0,1,2.152,2.381A2.188,2.188,0,0,1,150.3,31.4Zm-.641-12.822a26.5,26.5,0,0,0,3.114-.183,11.99,11.99,0,0,0,1.213-3.389.975.975,0,0,0-1.855-.412c-.916,1.282-1.328-.6-2.381-.6s-1.6,1.74-2.427.572a1.078,1.078,0,0,0-2.015.412,10.085,10.085,0,0,0,1.122,3.411,28.225,28.225,0,0,0,3.228.183Z" transform="translate(-65.351)" fill="#fff"/>
                      </g>
                    </svg>
                    Assing to me
                  </h5>

                  
                  <div class="d-flex justify-content-center" v-if="company.status != 'SALES_TEAM'">
                    <div v-if="company.expectedRevenue">
                      <span>Expected profit :</span>
                      <h6 class="text-center">{{formatCurrency(1000)}}</h6>
                    </div>
                    <!-- <div>
                      <span>Total profit :</span>
                      <h6> {{formatCurrency(1000)}} </h6>
                    </div> -->
                  </div>

                  <h5 v-if="company.status != 'SALES_TEAM' && !company.expectedRevenue" @click="openExpectedProfitModel" class="expected-profit">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 17.08 21.751">
                      <g id="noun-money-1806108" transform="translate(-75.769 -14.004)">
                        <path id="Path_226" data-name="Path 226" d="M153.026,19.727a26.057,26.057,0,0,1-3.366.206,26.317,26.317,0,0,1-3.366-.206c-2.45,2.084-5.174,5.564-5.174,8.723,0,4.968,3.824,7.3,8.54,7.3s8.54-2.335,8.54-7.3C158.2,25.268,155.476,21.811,153.026,19.727ZM150.3,31.4v.939a.181.181,0,0,1-.183.183H149.2a.181.181,0,0,1-.183-.183v-.916a1.908,1.908,0,0,1-1.763-1.694.2.2,0,0,1,.183-.183h.916a.174.174,0,0,1,.183.137.613.613,0,0,0,.6.481h.8a.946.946,0,0,0,.962-.8A.9.9,0,0,0,150,28.359h-.6a2.234,2.234,0,0,1-2.244-1.969,2.167,2.167,0,0,1,1.878-2.358v-.916a.2.2,0,0,1,.183-.183h.916a.181.181,0,0,1,.183.183v.916a1.908,1.908,0,0,1,1.763,1.694.181.181,0,0,1-.183.183h-.916a.192.192,0,0,1-.183-.137.639.639,0,0,0-.618-.481h-.8a.964.964,0,0,0-.962.8.91.91,0,0,0,.893,1.007H150a2.142,2.142,0,0,1,2.152,2.381A2.188,2.188,0,0,1,150.3,31.4Zm-.641-12.822a26.5,26.5,0,0,0,3.114-.183,11.99,11.99,0,0,0,1.213-3.389.975.975,0,0,0-1.855-.412c-.916,1.282-1.328-.6-2.381-.6s-1.6,1.74-2.427.572a1.078,1.078,0,0,0-2.015.412,10.085,10.085,0,0,0,1.122,3.411,28.225,28.225,0,0,0,3.228.183Z" transform="translate(-65.351)" fill="#fff"/>
                      </g>
                    </svg>
                    Expected profit
                  </h5>


                </div>
              </div>

              <div class="home-page__tabs">
                <b-tabs pills>
                  <b-tab active>
                    <template #title> Contacts List </template>
                    <div
                      v-if="company.status != 'SALES_TEAM' "
                      class="add-new-contact d-flex justify-content-end"
                    >
                      <button  @click="addNewContact(company.id)">Add Contact</button>
                    </div>
                    <div class="company-details-page__contact-list">
                      <el-table :data="companyContacts" style="width: 100%">
                        <el-table-column
                          width="50"
                          type="index"
                          label="#"
                          :index="companyIndex">
                        </el-table-column>

                        <el-table-column width="100" prop="type" label="profile">
                          <template slot-scope="scope">
                            <img :src="scope.row.photo" alt="" />
                          </template>
                        </el-table-column>

                        <el-table-column
                          prop="email"
                          width="220"
                          label="Email">
                        </el-table-column>

                        <el-table-column
                          prop="phone"
                          width="160"
                          label="Phone">
                        </el-table-column>

                        <el-table-column
                          prop="position"
                          width="150"
                          label="Position">
                        </el-table-column>

                        <el-table-column
                          prop="createdBy.name"
                          width="150"
                          label="Created By">
                        </el-table-column>
                        
                      </el-table>
                    </div>

                    <div class="center" v-if="companyPage > 1">
                        <vs-pagination v-model="companyPage" :length="companyTotalPages" />
                    </div>
                  </b-tab>

                  <b-tab>
                    <div v-if="company.status != 'SALES_TEAM' " class="add-new-proposal d-flex justify-content-end">
                      <button  @click="openProposalModel()">
                        Add New Proposal
                      </button>
                    </div>
                    <template #title> Proposal </template>
                    <div class="company-details-page__contact-list proposal">
                      <el-table :data="companyProposals" style="width: 100%">
                        <el-table-column
                          width="60"
                          type="index"
                          label="#"
                          :index="proposalIndex">
                        </el-table-column>

                        <el-table-column width="120" prop="type" label="Proposal Date">
                          <template slot-scope="scope">
                            <span>{{ new Date(scope.row.createdAt).toLocaleDateString() }}</span>
                          </template>
                        </el-table-column>

                        <el-table-column
                          label="service">
                          <template slot-scope="scope">
                             <span>{{ scope.row.service ? scope.row.service.name : "-" }}</span>
                          </template>
                        </el-table-column>

                        <el-table-column
                          prop="amount"
                          label="Expected Profit">
                          <template slot-scope="scope">
                             <span>{{ formatCurrency(scope.row.amount)}}</span>
                          </template>
                        </el-table-column>

                        <el-table-column
                          prop="createdBy.name"
                          label="Position">
                          <template slot-scope="scope">
                             <span>{{ scope.row.createdBy ? scope.row.createdBy.name : '' }}</span>
                          </template>
                        </el-table-column>

                        <el-table-column
                        width="120"
                          label="Status">
                          <template slot-scope="scope">
                             <span
                                v-if="scope.row.status == 'PENDING'"
                                class="pendding"
                              >
                                Pendding
                              </span>
                              <span
                                v-else-if="scope.row.status == 'DEAL'"
                                class="deal"
                              >
                                Deal
                              </span>
                              <span
                                v-else-if="scope.row.status == 'LOSE'"
                                class="lose"
                              >
                                Lose
                              </span>
                          </template>
                        </el-table-column>

                        <el-table-column width="150" label="Options">

                          <template slot-scope="scope">

                          <button
                                @click="confirmStatus(scope.row)"
                                class="select-status-btn"
                                v-if="scope.row.status == 'PENDING'"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlns:xlink="http://www.w3.org/1999/xlink"
                                  xmlns:svgjs="http://svgjs.com/svgjs"
                                  version="1.1"
                                  width="25"
                                  height="25"
                                  x="0"
                                  y="0"
                                  viewBox="0 0 512 512"
                                  style="enable-background: new 0 0 512 512"
                                  xml:space="preserve"
                                >
                                  <g>
                                    <g xmlns="http://www.w3.org/2000/svg">
                                      <g>
                                        <path
                                          d="m80.1,405.6c3.5,2.4 17,9.1 28.4-5.3l77.2-112.8 81.7,78.8c4.3,4.1 10.2,6.3 16.2,5.6 5.9-0.6 11.3-3.7 14.8-8.6l135.5-194.3 4.9,65c1.2,16.5 16.7,19.2 21.9,18.8 11.2-0.9 19.7-10.6 18.8-21.9l-8.6-114.3c-0.8-11.2-10.6-19.7-21.9-18.8l-114.3,8.6c-11.2,0.8-19.7,10.6-18.8,21.9 0.8,11.2 10.5,19.6 21.9,18.8l65-4.9-124.2,178-81.9-79c-4.3-4.2-10.3-6.3-16.2-5.6-6,0.6-11.4,3.8-14.8,8.8l-90.9,132.8c-6.4,9.3-4,22 5.3,28.4z"
                                          fill="#E2AA59"
                                          data-original="#000000"
                                        />
                                        <path
                                          d="M480.6,460.2H51.8V31.4c0-11.3-9.1-20.4-20.4-20.4S11,20.1,11,31.4v449.2c0,11.3,9.1,20.4,20.4,20.4h449.2    c11.3,0,20.4-9.1,20.4-20.4C501,469.3,491.9,460.2,480.6,460.2z"
                                          fill="#E2AA59"
                                          data-original="#000000"
                                        />
                                      </g>
                                    </g>
                                  </g>
                                </svg>
                                Select Status
                              </button>
                              <button
                                class="selected-status-btn "
                                v-else
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlns:xlink="http://www.w3.org/1999/xlink"
                                  xmlns:svgjs="http://svgjs.com/svgjs"
                                  version="1.1"
                                  width="25"
                                  height="25"
                                  x="0"
                                  y="0"
                                  viewBox="0 0 512 512"
                                  style="enable-background: new 0 0 512 512"
                                  xml:space="preserve"
                                  class=""
                                >
                                  <g>
                                    <g xmlns="http://www.w3.org/2000/svg">
                                      <g>
                                        <path
                                          d="M256,0C115.39,0,0,115.39,0,256s115.39,256,256,256s256-115.39,256-256S396.61,0,256,0z M225.019,372.44L112.914,260.336    l42.422-42.422l71.646,71.646l143.833-130.752l40.371,44.385L225.019,372.44z"
                                          fill="#000000"
                                          data-original="#000000"
                                        />
                                      </g>
                                    </g>
                                    <g xmlns="http://www.w3.org/2000/svg"></g>
                                    <g xmlns="http://www.w3.org/2000/svg"></g>
                                    <g xmlns="http://www.w3.org/2000/svg"></g>
                                    <g xmlns="http://www.w3.org/2000/svg"></g>
                                    <g xmlns="http://www.w3.org/2000/svg"></g>
                                    <g xmlns="http://www.w3.org/2000/svg"></g>
                                    <g xmlns="http://www.w3.org/2000/svg"></g>
                                    <g xmlns="http://www.w3.org/2000/svg"></g>
                                    <g xmlns="http://www.w3.org/2000/svg"></g>
                                    <g xmlns="http://www.w3.org/2000/svg"></g>
                                    <g xmlns="http://www.w3.org/2000/svg"></g>
                                    <g xmlns="http://www.w3.org/2000/svg"></g>
                                    <g xmlns="http://www.w3.org/2000/svg"></g>
                                    <g xmlns="http://www.w3.org/2000/svg"></g>
                                    <g xmlns="http://www.w3.org/2000/svg"></g>
                                  </g>
                                </svg>
                                Select Status
                              </button>

                            </template>

                        </el-table-column>
                        
                      </el-table>
                    
                    </div>

                    <div class="center" v-if="proposalsPage > 1">
                        <vs-pagination v-model="proposalsPage" :length="proposalsTotalPages" />
                    </div>

                  </b-tab>
                </b-tabs>
              </div>
            </div>

            <div class="col-md-4">
              <div class="company-details-page__activities">
                <h5 class="mb-3">Recent Activities</h5>

                <div
                  v-for="activity in activities"
                  :key="activity.id"
                  class="mb-3 company-details-page__activity"
                >
                  <div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        viewBox="0 0 19 18"
                      >
                        <g id="Icon" transform="translate(0.462 0.038)">
                          <rect
                            id="Area"
                            width="19"
                            height="18"
                            transform="translate(-0.462 -0.038)"
                            fill="#fcfcfc"
                            opacity="0"
                          />
                          <g
                            id="Icon-2"
                            data-name="Icon"
                            transform="translate(2.268 2.268)"
                          >
                            <path
                              id="Path"
                              d="M2.5,13.838V9.3a6.8,6.8,0,0,1,13.606,0v4.535"
                              transform="translate(-2.5 -2.5)"
                              fill="none"
                              stroke="#ffcb05"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="1.667"
                            />
                            <path
                              id="Path-2"
                              data-name="Path"
                              d="M16.106,15.446a1.512,1.512,0,0,1-1.512,1.512h-.756a1.512,1.512,0,0,1-1.512-1.512V13.178a1.512,1.512,0,0,1,1.512-1.511h2.268Zm-13.606,0a1.512,1.512,0,0,0,1.512,1.512h.756A1.512,1.512,0,0,0,6.28,15.446V13.178a1.512,1.512,0,0,0-1.512-1.511H2.5Z"
                              transform="translate(-2.5 -3.352)"
                              fill="none"
                              stroke="#ffcb05"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="1.667"
                            />
                          </g>
                        </g>
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h6> {{ activity.type }} </h6>
                    <span>By {{activity.sales ? activity.sales.name : activity.from }} </span>
                    <span> {{$moment(activity.createdAt).fromNow()}} </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>

    <vs-dialog
      class="expected-form-model change_company_status_model"
      v-model="changeCompanyStatusModel"
    >
      <div class="con-form">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            xmlns:svgjs="http://svgjs.com/svgjs"
            version="1.1"
            width="40"
            height="40"
            x="0"
            y="0"
            viewBox="0 0 6.3499999 6.3500002"
            style="enable-background: new 0 0 512 512"
            xml:space="preserve"
            class=""
          >
            <g>
              <g
                xmlns="http://www.w3.org/2000/svg"
                id="layer1"
                transform="translate(0 -290.65)"
              >
                <path
                  id="path9559"
                  d="m1.5818147 290.91246a.26460982.26460982 0 0 0 -.1819011.0801l-1.05833327 1.05834a.26460982.26460982 0 0 0 0 .3731l1.05833327 1.05885a.2652852.2652852 0 0 0 .3751686-.37517l-.6051286-.60513h4.1227456v.81029a.26460982.26460982 0 1 0 .5270977 0v-.81029c0-.28858-.2385166-.52968-.5270977-.52968h-4.1253305l.6077135-.6072a.26460982.26460982 0 0 0 -.1932675-.4532zm3.1775824 3.17396a.26460982.26460982 0 0 0 -.1834515.45475l.6071976.60772h-4.124812v-.78703a.26460982.26460982 0 0 0 -.26768417-.26769.26460982.26460982 0 0 0 -.2614824.26769v.78703c0 .28858.2405856.5271.52916657.5271h4.124812l-.6071976.60771a.26460982.26460982 0 1 0 .3731049.37466l1.0583333-1.05834a.26460982.26460982 0 0 0 0-.37516l-1.0583333-1.05834a.26460982.26460982 0 0 0 -.1896534-.0801z"
                  font-variant-ligatures="normal"
                  font-variant-position="normal"
                  font-variant-caps="normal"
                  font-variant-numeric="normal"
                  font-variant-alternates="normal"
                  font-feature-settings="normal"
                  text-indent="0"
                  text-align="start"
                  text-decoration-line="none"
                  text-decoration-style="solid"
                  text-decoration-color="rgb(0,0,0)"
                  text-transform="none"
                  text-orientation="mixed"
                  white-space="normal"
                  shape-padding="0"
                  isolation="auto"
                  mix-blend-mode="normal"
                  solid-color="rgb(0,0,0)"
                  solid-opacity="1"
                  vector-effect="none"
                  fill="#FFCB05"
                  data-original="#000000"
                  class=""
                />
              </g>
            </g>
          </svg>
        </div>
        <h4 class="m-2">Change Company Status</h4>
        <p>Select Company Status :</p>

        <div class="company-logo">
          <img class="company-name" src="@/assets/imgs/cib-icon.png" alt="" />
        </div>
        <span class="d-block text-center mt-3"> Company Name </span>

        <el-form :model="changeCompanyForm" ref="changeCompanyForm">
          <h6>Company Status</h6>
          <el-form-item
            prop="status"
            :rules="[{ required: true, message: 'status is required' }]"
          >
            <el-select
              v-model="changeCompanyForm.status"
              placeholder="Select Company Status"
            >
              <el-option
                v-for="item in companyStatus"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button
              class="primary-btn"
              @click="submitCompanyStatusForm('changeCompanyForm')"
              >Submit</el-button
            >
            <el-button @click="changeCompanyStatusModel = false" class="close-btn"
              >Close</el-button
            >
          </el-form-item>
        </el-form>
      </div>
    </vs-dialog>

    <vs-dialog class="expected-form-model" v-model="expectedProfitModel">
      <div class="con-form">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 17.08 21.751"
          >
            <g id="noun-money-1806108" transform="translate(-75.769 -14.004)">
              <path
                id="Path_226"
                data-name="Path 226"
                d="M153.026,19.727a26.057,26.057,0,0,1-3.366.206,26.317,26.317,0,0,1-3.366-.206c-2.45,2.084-5.174,5.564-5.174,8.723,0,4.968,3.824,7.3,8.54,7.3s8.54-2.335,8.54-7.3C158.2,25.268,155.476,21.811,153.026,19.727ZM150.3,31.4v.939a.181.181,0,0,1-.183.183H149.2a.181.181,0,0,1-.183-.183v-.916a1.908,1.908,0,0,1-1.763-1.694.2.2,0,0,1,.183-.183h.916a.174.174,0,0,1,.183.137.613.613,0,0,0,.6.481h.8a.946.946,0,0,0,.962-.8A.9.9,0,0,0,150,28.359h-.6a2.234,2.234,0,0,1-2.244-1.969,2.167,2.167,0,0,1,1.878-2.358v-.916a.2.2,0,0,1,.183-.183h.916a.181.181,0,0,1,.183.183v.916a1.908,1.908,0,0,1,1.763,1.694.181.181,0,0,1-.183.183h-.916a.192.192,0,0,1-.183-.137.639.639,0,0,0-.618-.481h-.8a.964.964,0,0,0-.962.8.91.91,0,0,0,.893,1.007H150a2.142,2.142,0,0,1,2.152,2.381A2.188,2.188,0,0,1,150.3,31.4Zm-.641-12.822a26.5,26.5,0,0,0,3.114-.183,11.99,11.99,0,0,0,1.213-3.389.975.975,0,0,0-1.855-.412c-.916,1.282-1.328-.6-2.381-.6s-1.6,1.74-2.427.572a1.078,1.078,0,0,0-2.015.412,10.085,10.085,0,0,0,1.122,3.411,28.225,28.225,0,0,0,3.228.183Z"
                transform="translate(-65.351)"
                fill="#333"
              />
            </g>
          </svg>
        </div>
        <h4>Expected profit</h4>
        <p>Write the expected Profit to be achieved with this company</p>

        <el-form :model="expectedProfitForm" ref="expectedProfitForm">
          <h6>Profit</h6>
          <el-form-item
            prop="profit"
            :rules="[{ required: true, message: 'profit is required' }]"
          >
            <el-input
              type="age"
              v-model.number="expectedProfitForm.profit"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              class="primary-btn"
              @click="submitForm('expectedProfitForm')"
              >Submit</el-button
            >
            <el-button @click="expectedProfitModel = false" class="close-btn"
              >Close</el-button
            >
          </el-form-item>
        </el-form>
      </div>
    </vs-dialog>

    <vs-dialog class="expected-form-model" v-model="salesTeamModel">
      <div class="con-form">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            xmlns:svgjs="http://svgjs.com/svgjs"
            version="1.1"
            width="40"
            height="40"
            x="0"
            y="0"
            viewBox="0 0 512 512"
            style="enable-background: new 0 0 512 512"
            xml:space="preserve"
            class=""
          >
            <g>
              <g xmlns="http://www.w3.org/2000/svg">
                <g>
                  <path
                    d="M436,0c-24.814,0-45,20.186-45,45c0,10.065,3.439,19.272,9.044,26.776l-73.392,79.636C323.22,150.571,319.688,150,316,150    c-9.212,0-17.77,2.802-24.91,7.57l-52.335-39.24c1.328-4.239,2.245-8.659,2.245-13.33c0-24.814-20.186-45-45-45    c-24.814,0-45,20.186-45,45c0,4.671,0.917,9.091,2.245,13.33l-52.335,39.24C93.77,152.802,85.212,150,76,150    c-24.814,0-45,20.186-45,45c0,24.814,20.186,45,45,45s45-20.186,45-45c0-4.671-0.917-9.091-2.245-13.33l52.335-39.24    c7.139,4.768,15.698,7.57,24.91,7.57c9.212,0,17.77-2.802,24.91-7.57l52.335,39.24C271.917,185.909,271,190.329,271,195    c0,24.814,20.186,45,45,45c24.814,0,45-20.186,45-45c0-10.065-3.439-19.272-9.044-26.776l73.392-79.636    C428.78,89.429,432.312,90,436,90c24.814,0,45-20.186,45-45C481,20.186,460.814,0,436,0z"
                    fill="#EA0552"
                    data-original="#000000"
                    class=""
                  />
                </g>
              </g>
              <g xmlns="http://www.w3.org/2000/svg">
                <g>
                  <path
                    d="M226,240h-60c-8.291,0-15,6.709-15,15v197h90V255C241,246.709,234.291,240,226,240z"
                    fill="#EA0552"
                    data-original="#000000"
                    class=""
                  />
                </g>
              </g>
              <g xmlns="http://www.w3.org/2000/svg">
                <g>
                  <path
                    d="M346,300h-60c-8.291,0-15,6.709-15,15v137h90V315C361,306.709,354.291,300,346,300z"
                    fill="#EA0552"
                    data-original="#000000"
                    class=""
                  />
                </g>
              </g>
              <g xmlns="http://www.w3.org/2000/svg">
                <g>
                  <path
                    d="M466,180h-60c-8.291,0-15,6.709-15,15v257h90V195C481,186.709,474.291,180,466,180z"
                    fill="#EA0552"
                    data-original="#000000"
                    class=""
                  />
                </g>
              </g>
              <g xmlns="http://www.w3.org/2000/svg">
                <g>
                  <path
                    d="M106,330H46c-8.291,0-15,6.709-15,15v107h90V345C121,336.709,114.291,330,106,330z"
                    fill="#EA0552"
                    data-original="#000000"
                    class=""
                  />
                </g>
              </g>
              <g xmlns="http://www.w3.org/2000/svg">
                <g>
                  <path
                    d="M497,482c-66.985,0-97.729,0-109.871,0c-5.55,0-7.533,0-7.518,0c-22.103,0-104.372,0-364.611,0c-8.291,0-15,6.709-15,15    c0,8.291,6.709,15,15,15c181.52,0,312.43,0,482,0c8.291,0,15-6.709,15-15C512,488.709,505.291,482,497,482z"
                    fill="#EA0552"
                    data-original="#000000"
                    class=""
                  />
                </g>
              </g>
              <g xmlns="http://www.w3.org/2000/svg"></g>
              <g xmlns="http://www.w3.org/2000/svg"></g>
              <g xmlns="http://www.w3.org/2000/svg"></g>
              <g xmlns="http://www.w3.org/2000/svg"></g>
              <g xmlns="http://www.w3.org/2000/svg"></g>
              <g xmlns="http://www.w3.org/2000/svg"></g>
              <g xmlns="http://www.w3.org/2000/svg"></g>
              <g xmlns="http://www.w3.org/2000/svg"></g>
              <g xmlns="http://www.w3.org/2000/svg"></g>
              <g xmlns="http://www.w3.org/2000/svg"></g>
              <g xmlns="http://www.w3.org/2000/svg"></g>
              <g xmlns="http://www.w3.org/2000/svg"></g>
              <g xmlns="http://www.w3.org/2000/svg"></g>
              <g xmlns="http://www.w3.org/2000/svg"></g>
              <g xmlns="http://www.w3.org/2000/svg"></g>
            </g>
          </svg>
        </div>
        <h4>Sales Team</h4>
        <p>Are you sure to assign this company to the sales team ?</p>
      </div>

      <template #footer>
        <div class="footer-dialog">
          <el-button
            @click="setSealsTeamStatus()"
            class="primary-btn sales-team"
          >
            Yes , Sure
          </el-button>

          <el-button
            @click="salesTeamModel = false"
            class="close-btn sales-team"
          >
            Close
          </el-button>
        </div>
      </template>
    </vs-dialog>

    <vs-dialog class="expected-form-model" v-model="openNewProposalModel">
      <div class="con-form">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            xmlns:svgjs="http://svgjs.com/svgjs"
            version="1.1"
            width="40"
            height="40"
            x="0"
            y="0"
            viewBox="0 0 512 512"
            style="enable-background: new 0 0 512 512"
            xml:space="preserve"
            class=""
          >
            <g>
              <g xmlns="http://www.w3.org/2000/svg">
                <g>
                  <path
                    d="M436,0c-24.814,0-45,20.186-45,45c0,10.065,3.439,19.272,9.044,26.776l-73.392,79.636C323.22,150.571,319.688,150,316,150    c-9.212,0-17.77,2.802-24.91,7.57l-52.335-39.24c1.328-4.239,2.245-8.659,2.245-13.33c0-24.814-20.186-45-45-45    c-24.814,0-45,20.186-45,45c0,4.671,0.917,9.091,2.245,13.33l-52.335,39.24C93.77,152.802,85.212,150,76,150    c-24.814,0-45,20.186-45,45c0,24.814,20.186,45,45,45s45-20.186,45-45c0-4.671-0.917-9.091-2.245-13.33l52.335-39.24    c7.139,4.768,15.698,7.57,24.91,7.57c9.212,0,17.77-2.802,24.91-7.57l52.335,39.24C271.917,185.909,271,190.329,271,195    c0,24.814,20.186,45,45,45c24.814,0,45-20.186,45-45c0-10.065-3.439-19.272-9.044-26.776l73.392-79.636    C428.78,89.429,432.312,90,436,90c24.814,0,45-20.186,45-45C481,20.186,460.814,0,436,0z"
                    fill="#EA0552"
                    data-original="#000000"
                    class=""
                  />
                </g>
              </g>
              <g xmlns="http://www.w3.org/2000/svg">
                <g>
                  <path
                    d="M226,240h-60c-8.291,0-15,6.709-15,15v197h90V255C241,246.709,234.291,240,226,240z"
                    fill="#EA0552"
                    data-original="#000000"
                    class=""
                  />
                </g>
              </g>
              <g xmlns="http://www.w3.org/2000/svg">
                <g>
                  <path
                    d="M346,300h-60c-8.291,0-15,6.709-15,15v137h90V315C361,306.709,354.291,300,346,300z"
                    fill="#EA0552"
                    data-original="#000000"
                    class=""
                  />
                </g>
              </g>
              <g xmlns="http://www.w3.org/2000/svg">
                <g>
                  <path
                    d="M466,180h-60c-8.291,0-15,6.709-15,15v257h90V195C481,186.709,474.291,180,466,180z"
                    fill="#EA0552"
                    data-original="#000000"
                    class=""
                  />
                </g>
              </g>
              <g xmlns="http://www.w3.org/2000/svg">
                <g>
                  <path
                    d="M106,330H46c-8.291,0-15,6.709-15,15v107h90V345C121,336.709,114.291,330,106,330z"
                    fill="#EA0552"
                    data-original="#000000"
                    class=""
                  />
                </g>
              </g>
              <g xmlns="http://www.w3.org/2000/svg">
                <g>
                  <path
                    d="M497,482c-66.985,0-97.729,0-109.871,0c-5.55,0-7.533,0-7.518,0c-22.103,0-104.372,0-364.611,0c-8.291,0-15,6.709-15,15    c0,8.291,6.709,15,15,15c181.52,0,312.43,0,482,0c8.291,0,15-6.709,15-15C512,488.709,505.291,482,497,482z"
                    fill="#EA0552"
                    data-original="#000000"
                    class=""
                  />
                </g>
              </g>
              <g xmlns="http://www.w3.org/2000/svg"></g>
              <g xmlns="http://www.w3.org/2000/svg"></g>
              <g xmlns="http://www.w3.org/2000/svg"></g>
              <g xmlns="http://www.w3.org/2000/svg"></g>
              <g xmlns="http://www.w3.org/2000/svg"></g>
              <g xmlns="http://www.w3.org/2000/svg"></g>
              <g xmlns="http://www.w3.org/2000/svg"></g>
              <g xmlns="http://www.w3.org/2000/svg"></g>
              <g xmlns="http://www.w3.org/2000/svg"></g>
              <g xmlns="http://www.w3.org/2000/svg"></g>
              <g xmlns="http://www.w3.org/2000/svg"></g>
              <g xmlns="http://www.w3.org/2000/svg"></g>
              <g xmlns="http://www.w3.org/2000/svg"></g>
              <g xmlns="http://www.w3.org/2000/svg"></g>
              <g xmlns="http://www.w3.org/2000/svg"></g>
            </g>
          </svg>
        </div>
        <h4>Add New Proposal</h4>
        <p>Determine service and amount to add new proposal.</p>

        <el-form :model="newProposalFrom" ref="newProposalFrom">
          <h6>Services</h6>
          <el-form-item
            :rules="[{ required: true, message: 'service is required' }]"
          >
            <el-select v-model="newProposalFrom.service" placeholder=" ">
              <el-option
                v-for="item in services"
                :key="item.id"
                :label="item.name"
                :value="item.id"
              >
              </el-option>
            </el-select>
          </el-form-item>

          <h6>Status</h6>
          <el-form-item
            :rules="[{ required: true, message: 'Status is required' }]"
          >
            <el-select v-model="newProposalFrom.status" placeholder=" ">
              <el-option
                v-for="item in proposalStatus"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-form-item>

          <h6>Amount</h6>
          <el-form-item
            :rules="[{ required: true, message: 'amount is required' }]"
          >
            <el-input
              type="age"
              v-model.number="newProposalFrom.amount"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              class="primary-btn"
              @click="submitProposalForm('newProposalFrom')"
              >Apply</el-button
            >
            <el-button @click="openNewProposalModel = false" class="close-btn"
              >Close</el-button
            >
          </el-form-item>
        </el-form>
      </div>
    </vs-dialog>

    <vs-dialog
      class="expected-form-model confirm-form-model"
      v-model="selectProposalStatusModel"
    >
      <div class="con-form">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            xmlns:svgjs="http://svgjs.com/svgjs"
            version="1.1"
            width="40"
            height="40"
            x="0"
            y="0"
            viewBox="0 0 512 512"
            style="enable-background: new 0 0 512 512"
            xml:space="preserve"
            class=""
          >
            <g>
              <g xmlns="http://www.w3.org/2000/svg">
                <g>
                  <path
                    d="M488.399,492h-21.933V173.536c0-14.823-12.06-26.882-26.882-26.882H390.56c-14.823,0-26.882,12.06-26.882,26.882V492    h-55.692V317.825c0-14.823-12.059-26.882-26.882-26.882H232.08c-14.823,0-26.882,12.06-26.882,26.882V492h-55.692v-90.204    c0-14.823-12.06-26.882-26.882-26.882H73.599c-14.823,0-26.882,12.06-26.882,26.882V492H23.601c-5.523,0-10,4.477-10,10    s4.477,10,10,10h464.798c5.523,0,10-4.477,10-10S493.922,492,488.399,492z M129.504,492H66.716v-90.204    c0-3.795,3.087-6.882,6.882-6.882h49.024c3.795,0,6.882,3.087,6.882,6.882V492z M287.985,492h-62.788V317.825    c0-3.795,3.087-6.882,6.882-6.882h49.024c3.794,0,6.882,3.087,6.882,6.882V492z M446.466,492h-62.788V173.536    c0-3.795,3.087-6.882,6.882-6.882h49.024c3.795,0,6.882,3.087,6.882,6.882V492z"
                    fill="#E2AA59"
                    data-original="#000000"
                  />
                </g>
              </g>
              <g xmlns="http://www.w3.org/2000/svg">
                <g>
                  <path
                    d="M466.442,10.516c0.14-2.729-0.82-5.504-2.904-7.588c-2.084-2.084-4.859-3.045-7.588-2.904    C455.789,0.017,455.63,0,455.466,0h-60.5c-5.523,0-10,4.477-10,10s4.477,10,10,10h37.357l-98.857,98.858l-37.28-37.28    c-1.875-1.875-4.419-2.929-7.071-2.929c-2.652,0-5.196,1.054-7.071,2.929l-179.769,179.77c-3.905,3.905-3.905,10.237,0,14.143    c1.953,1.951,4.512,2.927,7.071,2.927s5.119-0.976,7.071-2.929L289.115,102.79l37.28,37.28c3.905,3.905,10.237,3.905,14.143,0    L446.466,34.143v33.81c0,5.523,4.477,10,10,10s10-4.477,10-10V11C466.466,10.837,466.449,10.678,466.442,10.516z"
                    fill="#E2AA59"
                    data-original="#000000"
                  />
                </g>
              </g>
              <g xmlns="http://www.w3.org/2000/svg">
                <g>
                  <circle
                    cx="75.64"
                    cy="303.31"
                    r="10"
                    fill="#E2AA59"
                    data-original="#000000"
                  />
                </g>
              </g>
              <g xmlns="http://www.w3.org/2000/svg"></g>
              <g xmlns="http://www.w3.org/2000/svg"></g>
              <g xmlns="http://www.w3.org/2000/svg"></g>
              <g xmlns="http://www.w3.org/2000/svg"></g>
              <g xmlns="http://www.w3.org/2000/svg"></g>
              <g xmlns="http://www.w3.org/2000/svg"></g>
              <g xmlns="http://www.w3.org/2000/svg"></g>
              <g xmlns="http://www.w3.org/2000/svg"></g>
              <g xmlns="http://www.w3.org/2000/svg"></g>
              <g xmlns="http://www.w3.org/2000/svg"></g>
              <g xmlns="http://www.w3.org/2000/svg"></g>
              <g xmlns="http://www.w3.org/2000/svg"></g>
              <g xmlns="http://www.w3.org/2000/svg"></g>
              <g xmlns="http://www.w3.org/2000/svg"></g>
              <g xmlns="http://www.w3.org/2000/svg"></g>
            </g>
          </svg>
        </div>
        <h4 class="mb-4">Select Proposal Status</h4>
        <p>Select the state of Proposal below :</p>

        <table>
          <tr>
            <td>Proposal Date :</td>
            <td>{{ new Date(currProposal.createdAt).toLocaleDateString() }}</td>
          </tr>

          <tr>
            <td>Service :</td>
            <td>
              {{ currProposal.service ? currProposal.service.name : "-" }}
            </td>
          </tr>

          <tr>
            <td>Expected Profit :</td>
            <td>{{ formatCurrency(currProposal.amount) }}</td>
          </tr>
        </table>

        <el-form :model="chaneProposalStatus" ref="submitChangeStatus">
          <h6>Select Status</h6>
          <el-form-item
          prop="status"
            :rules="[{ required: true, message: 'Status is required' }]"
          >
            <el-select v-model="chaneProposalStatus.status" placeholder=" ">
              <el-option
                v-for="item in confirmStatusProposal"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-form-item>

          <el-form-item>
            <el-button
              class="primary-btn"
              @click="submitChangeProposalForm('submitChangeStatus')"
              >Apply</el-button
            >
            <el-button
              @click="selectProposalStatusModel = false"
              class="close-btn"
              >Close</el-button
            >
          </el-form-item>
        </el-form>
      </div>
    </vs-dialog>

    <vs-dialog class="expected-form-model" v-model="confirmSelectedStatus">
      <div class="con-form">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            xmlns:svgjs="http://svgjs.com/svgjs"
            version="1.1"
            width="40"
            height="40"
            x="0"
            y="0"
            viewBox="0 0 512 512"
            style="enable-background: new 0 0 512 512"
            xml:space="preserve"
            class=""
          >
            <g>
              <g xmlns="http://www.w3.org/2000/svg">
                <g>
                  <path
                    d="M436,0c-24.814,0-45,20.186-45,45c0,10.065,3.439,19.272,9.044,26.776l-73.392,79.636C323.22,150.571,319.688,150,316,150    c-9.212,0-17.77,2.802-24.91,7.57l-52.335-39.24c1.328-4.239,2.245-8.659,2.245-13.33c0-24.814-20.186-45-45-45    c-24.814,0-45,20.186-45,45c0,4.671,0.917,9.091,2.245,13.33l-52.335,39.24C93.77,152.802,85.212,150,76,150    c-24.814,0-45,20.186-45,45c0,24.814,20.186,45,45,45s45-20.186,45-45c0-4.671-0.917-9.091-2.245-13.33l52.335-39.24    c7.139,4.768,15.698,7.57,24.91,7.57c9.212,0,17.77-2.802,24.91-7.57l52.335,39.24C271.917,185.909,271,190.329,271,195    c0,24.814,20.186,45,45,45c24.814,0,45-20.186,45-45c0-10.065-3.439-19.272-9.044-26.776l73.392-79.636    C428.78,89.429,432.312,90,436,90c24.814,0,45-20.186,45-45C481,20.186,460.814,0,436,0z"
                    fill="#EA0552"
                    data-original="#000000"
                    class=""
                  />
                </g>
              </g>
              <g xmlns="http://www.w3.org/2000/svg">
                <g>
                  <path
                    d="M226,240h-60c-8.291,0-15,6.709-15,15v197h90V255C241,246.709,234.291,240,226,240z"
                    fill="#EA0552"
                    data-original="#000000"
                    class=""
                  />
                </g>
              </g>
              <g xmlns="http://www.w3.org/2000/svg">
                <g>
                  <path
                    d="M346,300h-60c-8.291,0-15,6.709-15,15v137h90V315C361,306.709,354.291,300,346,300z"
                    fill="#EA0552"
                    data-original="#000000"
                    class=""
                  />
                </g>
              </g>
              <g xmlns="http://www.w3.org/2000/svg">
                <g>
                  <path
                    d="M466,180h-60c-8.291,0-15,6.709-15,15v257h90V195C481,186.709,474.291,180,466,180z"
                    fill="#EA0552"
                    data-original="#000000"
                    class=""
                  />
                </g>
              </g>
              <g xmlns="http://www.w3.org/2000/svg">
                <g>
                  <path
                    d="M106,330H46c-8.291,0-15,6.709-15,15v107h90V345C121,336.709,114.291,330,106,330z"
                    fill="#EA0552"
                    data-original="#000000"
                    class=""
                  />
                </g>
              </g>
              <g xmlns="http://www.w3.org/2000/svg">
                <g>
                  <path
                    d="M497,482c-66.985,0-97.729,0-109.871,0c-5.55,0-7.533,0-7.518,0c-22.103,0-104.372,0-364.611,0c-8.291,0-15,6.709-15,15    c0,8.291,6.709,15,15,15c181.52,0,312.43,0,482,0c8.291,0,15-6.709,15-15C512,488.709,505.291,482,497,482z"
                    fill="#EA0552"
                    data-original="#000000"
                    class=""
                  />
                </g>
              </g>
              <g xmlns="http://www.w3.org/2000/svg"></g>
              <g xmlns="http://www.w3.org/2000/svg"></g>
              <g xmlns="http://www.w3.org/2000/svg"></g>
              <g xmlns="http://www.w3.org/2000/svg"></g>
              <g xmlns="http://www.w3.org/2000/svg"></g>
              <g xmlns="http://www.w3.org/2000/svg"></g>
              <g xmlns="http://www.w3.org/2000/svg"></g>
              <g xmlns="http://www.w3.org/2000/svg"></g>
              <g xmlns="http://www.w3.org/2000/svg"></g>
              <g xmlns="http://www.w3.org/2000/svg"></g>
              <g xmlns="http://www.w3.org/2000/svg"></g>
              <g xmlns="http://www.w3.org/2000/svg"></g>
              <g xmlns="http://www.w3.org/2000/svg"></g>
              <g xmlns="http://www.w3.org/2000/svg"></g>
              <g xmlns="http://www.w3.org/2000/svg"></g>
            </g>
          </svg>
        </div>
        <h4>Change Confirm Your Selection</h4>
        <p>Are you sure to confirm this proposal status as 
          <span v-if="chaneProposalStatus.status == 'DEAL'" class="text-success"> {{ chaneProposalStatus.status }} </span>
          <span v-else-if="chaneProposalStatus.status == 'LOSE'" class="text-danger"> {{ chaneProposalStatus.status }} </span>
          ?</p>
      </div>

      <template #footer>
        <div class="footer-dialog">
          <el-button
            @click="changeProposalStatus()"
            class="primary-btn sales-team"
          >
            Yes , Sure
          </el-button>

          <el-button
            @click="confirmSelectedStatus = false"
            class="close-btn sales-team"
          >
            Close
          </el-button>
        </div>
      </template>
    </vs-dialog>
  </div>
</template>

<script>
export default {
  mounted() {
    this.company = localStorage.getItem("currentCompany")
      ? JSON.parse(localStorage.getItem("currentCompany"))
      : {};
    this.getCompanyContacts();
    this.getCompanyProposals();
    this.getCompanyActivities();
  },
  methods: {
    indexMethod(index) {
      return this.allStudentsCount + index;
    },
    companyIndex(index){
      return this.allCompanyCount + index;
    },
    proposalIndex(index){
      return this.allProposalCount + index;
    },

    assignToMe(){
      const loading = this.$loading({
        lock: true,
        text: false,
        spinner: "el-icon-loading",
        background: "rgba(255,255,255,.7)",
        customClass: "fullscreen-loading",
      });
      this.$axios.put(`/companies/${this.company.id}/status`, {status: 'APPROACH'}).then(res => {
          this.$vs.notification({
            progress: "auto",
            color: "success",
            position: "top-center",
            text: `Company Status Updated Successfully`,
          });
          this.company.status = res.data.status;
          console.log(this.company.status);
          localStorage.setItem("currentCompany", JSON.stringify(this.company));
      }).catch((err) => {
          this.$vs.notification({
            progress: "auto",
            color: "danger",
            position: "top-center",
            text: `There Are Something Wrong`,
          });
        })
        .finally(() => loading.close());
    },
    getCompanyActivities(){
      const loading = this.$loading({
        lock: true,
        text: false,
        spinner: "el-icon-loading",
        background: "rgba(255,255,255,.7)",
        customClass: "fullscreen-loading",
      });

      this.$axios.get(`/companies/${this.company.id}/activities`).then(res => {
        this.activities = res.data;
        if(res.data.length > 5 ){
          this.activities = [];
          for(let i = 0 ; i < 5 ; i++){
            this.activities.push(res.data[0]);
          }
        }
      }).finally(() => loading.close());
    },
    submitChangeProposalForm(formName) {
      this.$refs[formName].validate((valid) => {
        if(valid){
          // console.log("hi")
          // this.confirmSelectedStatus = true;
          // this.confirmStatus();
          this.confirmSelectedStatus = true;

        }
      })
    },

    changeProposalStatus(){
      const loading = this.$loading({
        lock: true,
        text: false,
        spinner: "el-icon-loading",
        background: "rgba(255,255,255,.7)",
        customClass: "fullscreen-loading",
      });
      this.$axios.put(`/proposals/${this.currProposal.id}/status`, {status: this.chaneProposalStatus.status}).then(res => {
        this.selectProposalStatusModel = false;
        this.confirmSelectedStatus = false;

        this.$vs.notification({
            progress: "auto",
            color: "success",
            position: "top-center",
            text: `Proposal Status Updated Successfully`,
        });

        this.getCompanyProposals();


      }).catch((err) => {
          this.$vs.notification({
            progress: "auto",
            color: "danger",
            position: "top-center",
            text:`There Are Something Wrong`,
          });
        })
        .finally(() => loading.close());
    },

    confirmStatus(proposal) {
      this.currProposal = { ...proposal };
      this.selectProposalStatusModel = true;
    },
    openUpdateCompanyStatus(company) {
      this.changeCompanyForm = { ...company };
      this.changeCompanyStatusModel = true;
    },
    setSealsTeamStatus() {
      this.changeCompanyStatus("SALES_TEAM");
    },
    submitCompanyStatusForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.changeCompanyStatus();
        }
      });
    },
    changeCompanyStatus(status = false) {
      const loading = this.$loading({
        lock: true,
        text: false,
        spinner: "el-icon-loading",
        background: "rgba(255,255,255,.7)",
        customClass: "fullscreen-loading",
      });
      this.$axios
        .put(`/companies/${this.$route.params.id}/status`, {
          status: status ? status : this.changeCompanyForm.status,
        })
        .then((res) => {
          this.$vs.notification({
            progress: "auto",
            color: "success",
            position: "top-center",
            text: `Company Status Successfully`,
          });
          this.company.status = res.data.status;
          console.log(this.company.status);
          localStorage.setItem("currentCompany", JSON.stringify(this.company));
          this.changeCompanyStatusModel = false;
          this.salesTeamModel = false;
        })
        .catch((err) => {
          this.$vs.notification({
            progress: "auto",
            color: "danger",
            position: "top-center",
            text: `There Are Something Wrong`,
          });
        })
        .finally(() => loading.close());
    },
    getServices() {
      const loading = this.$loading({
        lock: true,
        text: false,
        spinner: "el-icon-loading",
        background: "rgba(255,255,255,.7)",
        customClass: "fullscreen-loading",
      });
      this.$axios
        .get(`/services`)
        .then((res) => {
          this.services = res.data;
          // this.se = res.data.page;
          // this.companyTotalPages = res.data.totalPages;
        })
        .finally(() => loading.close());
    },
    openProposalModel() {
      this.getServices();
      this.openNewProposalModel = true;
    },
    addNewContact() {
      this.$router.push(`/new-contact/${this.company.id}`);
    },
    getCompanyContacts() {
      const loading = this.$loading({
        lock: true,
        text: false,
        spinner: "el-icon-loading",
        background: "rgba(255,255,255,.7)",
        customClass: "fullscreen-loading",
      });
      this.$axios
        .get(`/companies/${this.company.id}/contacts?page=${this.companyPage}`)
        .then((res) => {
          this.companyContacts = res.data.docs;
          this.companyPage = res.data.page;
          this.companyTotalPages = res.data.totalPages;
          
        })
        .finally(() => loading.close());
    },
    getCompanyProposals() {
      const loading = this.$loading({
        lock: true,
        text: false,
        spinner: "el-icon-loading",
        background: "rgba(255,255,255,.7)",
        customClass: "fullscreen-loading",
      });
      this.$axios
        .get(`/proposals?company=${this.company.id}&page=${this.proposalsPage}`)
        .then((res) => {
          this.companyProposals = res.data.docs;
          this.proposalsPage = res.data.page;
          this.proposalsTotalPages = res.data.totalPages;
        })
        .finally(() => loading.close());
    },
    openExpectedProfitModel() {
      this.expectedProfitModel = true;
    },
    formatCurrency(value) {
      if (!value) {
        return;
      }
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        maximumFractionDigits: 3,
        currency: "USD",
      }).format(value);
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {

          const loading = this.$loading({
            lock: true,
            text: false,
            spinner: "el-icon-loading",
            background: "rgba(255,255,255,.7)",
            customClass: "fullscreen-loading",
          });


          this.$axios.put(`/companies/${this.company.id}/expected-revenue`, {expectedRevenue: this.expectedProfitForm.profit}).then(res => {
            this.expectedProfitModel = false;
            this.company = {...res.data};
            console.log(this.company);
            localStorage.setItem("currentCompany", JSON.stringify(this.company));

            this.$vs.notification({
              progress: "auto",
              color: "success",
              position: "top-center",
              text: `Expected Revenue Added Successfully`,
            });
          }).catch((err) => {
            this.$vs.notification({
              progress: "auto",
              color: "danger",
              position: "top-center",
              text: `There Are Something Wrong`,
            });
          })
          .finally(() => loading.close());
        }
      });
    },
    submitProposalForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.addProposal();
        }
      });
    },
    addProposal() {
      const loading = this.$loading({
        lock: true,
        text: false,
        spinner: "el-icon-loading",
        background: "rgba(255,255,255,.7)",
        customClass: "fullscreen-loading",
      });
      this.$axios
        .post(`/proposals`, {
          amount: this.newProposalFrom.amount,
          status: this.newProposalFrom.status,
          service: this.newProposalFrom.service,
          company: this.$route.params.id,
        })
        .then((res) => {
          this.$vs.notification({
            progress: "auto",
            color: "success",
            position: "top-center",
            text: `Proposal Added Successfully`,
          });
          this.openNewProposalModel = false;
          this.getCompanyProposals();
        })
        .catch((err) => {
          this.$vs.notification({
            progress: "auto",
            color: "danger",
            position: "top-center",
            text: `There Are Something Wrong`,
          });
        })
        .finally(() => loading.close());
    },
  },
  watch:{
    proposalsPage(newVal, oldVal){

      if (newVal > oldVal) {
        this.theTotalProposalIndex = Number(newVal) - Number(oldVal);
        this.allProposalCount += this.theTotalProposalIndex * 10;
      } else {
        this.theTotalProposalIndex = Number(oldVal) - Number(newVal);
        this.allProposalCount -= this.theTotalProposalIndex * 10;
      }

      this.getCompanyProposals();
    },
    companyPage(newVal, oldVal){
      if (newVal > oldVal) {
        this.theTotalCompanyIndex = Number(newVal) - Number(oldVal);
        this.allCompanyCount += this.theTotalCompanyIndex * 10;
      } else {
        this.theTotalCompanyIndex = Number(oldVal) - Number(newVal);
        this.allCompanyCount -= this.theTotalCompanyIndex * 10;
      }

      this.getCompanyContacts();
    },
    
  },
  data() {
    return {
      allProposalCount: 1,
      theTotalCompanyIndex: 1,
      allCompanyCount: 1,

      theTotalProposalIndex: 1,

      chaneProposalStatus: {},
      selectProposalStatusModel: false,
      currProposal: {},
      companyProposals: [],
      services: [],
      newProposalFrom: {},
      openNewProposalModel: false,
      companyContacts: [],
      proposalsTotalPages: 1,
      activities: [],
      proposalsPage: 1,
      companyPage: 1,
      companyTotalPages: 1,
      confirmSelectedStatus: false,

      company: {},
      changeCompanyForm: {},
      changeCompanyStatusModel: false,
      companyStatus: [
        { label: "Approach", value: "APPROACH" },
        { label: "Follow-Up", value: "FOLLOW_UP" },
        { label: "Sales Team", value: "SALES_TEAM" },
        { label: "Meeting", value: "MEETING" },
        { label: "Proposal", value: "PROPOSAL" },
      ],

      proposalStatus: [
        { label: "pendding", value: "PENDING" },
        { label: "Deal", value: "DEAL" },
        { label: "Lose", value: "LOSE" },
      ],

      confirmStatusProposal: [
        { label: "Deal", value: "DEAL" },
        { label: "Lose", value: "LOSE" },
      ],

      expectedProfitForm: {},
      salesTeamModel: false,
      expectedProfitModel: false,
      selectedProposals: [],
     
    };
  },
};
</script>

<style lang="scss">
.pendding {
  font-size: 14px;
  color: var(--bs-secondary);
  font-weight: 500;
  font-family: sans-serif;
  display: block;
}

.followUp {
  font-size: 14px;
  color: #4c92f9;
  font-weight: 500;
  font-family: sans-serif;
}

.deal {
  font-size: 15px;
  color: var(--bs-green);
  font-weight: 500;
  font-family: sans-serif;
}

.lose {
  font-size: 15px;
  color: var(--bs-danger);
  font-weight: 500;
  font-family: sans-serif;
}

.approach {
  font-size: 15px;
  color: var(--bs-warning);
  font-weight: 500;
  font-family: sans-serif;
}

.salesTeam {
  font-size: 15px;
  color: var(--bs-pink);
  font-weight: 500;
  font-family: sans-serif;
}

.meeting {
  font-size: 15px;
  color: var(--bs-indigo);
  font-weight: 500;
  font-family: sans-serif;
}

.confirm-form-model {
  table {
    width: 240px;
    margin: 17px auto;
    line-height: 1.9;
  }
}

.change_company_status_model {
  .el-select {
    width: 100%;
  }
  .el-form {
    margin-top: 20px !important;
  }

  .company-logo {
    width: 132px;
    height: 117px;
    box-shadow: 0 4px 25px 0 rgba(0, 0, 0, 0.05882);
    -o-object-fit: contain;
    object-fit: contain;
    padding: 24px;
    border-radius: 15px;
    display: flex;
    margin-top: 15px;
    margin: auto;
    img {
      align-self: center;
    }
  }
}
.expected-form-model {
  .con-form {
    > div {
      text-align: center;
      margin-top: 35px;
    }
  }
  h4 {
    text-align: center;
    margin: 15px 0;
  }
  p {
    width: 300px;
    text-align: center;
    margin: auto;
  }
  .primary-btn {
    border-radius: 7px;
    color: #fff;
    padding: 15px 20px;
    border: none;
    margin: auto;
    display: block;
    min-width: 250px;
    font-size: 16px;
    background: var(--primary);

    &.sales-team {
      background: #ea0552;
      margin-top: 25px;
    }
  }
  .el-form {
    width: 250px;
    margin: auto;
    margin-top: 35px;
  }
  .close-btn {
    background: none;
    border: none;
    margin: auto;
    display: block;
    margin-top: 6px;
    margin-bottom: -33px;

    &.sales-team {
      margin-bottom: 15px !important;
    }
  }
}

.company-details-page {
  &__breadcrumbs {
    padding-top: 20px;
    display: flex;
    gap: 5px;
    h6,
    a {
      font-weight: 400;
      color: #707070;
    }
  }
  &__title {
    h6 {
      color: #ffcb05;
    }
  }
  &__company {
    >div{
      &.row{
        .col-md-8{
          margin-bottom: 35px;
        }
        .col-md-4 , .col-md-8{
          .company-details-page__activities{
             @media screen and (max-width: 1050px) {
              width: auto !important;
            }
          }
          @media screen and (max-width: 1050px) {
            width: 100% !important;
          }
        }
      }
    }
    @media screen and (max-width: 1050px) {

    }
  
    .image-details {
      gap: 25px;
      margin-top: 20px;
    }
    > div {
      img.company-name {
        width: 137px;
        height: 137px;
        box-shadow: 0 4px 25px 0 #0000000f;
        -o-object-fit: contain;
        object-fit: contain;
        padding: 24px;
        border-radius: 15px;
      }
      h6 {
        font-family: sans-serif;
        font-weight: 600;
        padding-top: 5px;
        font-size: 20px;
      }
      svg {
        background: #efefef;
        padding: 4px;
        border-radius: 6px;
      }
      div {
        span.followUp {
          display: inline-block;
          color: #4c92f9;
          font-weight: 600;
          font-family: sans-serif;
          margin: 0 5px;
        }
        button.bordered {
          background: none;
          padding: 3px 9px;
          border: 1px solid #ffcb05;
          border-radius: 8px;
          color: #ffcb05;
          svg {
            background: none;
          }
        }
      }
    }
  }

  &__activities {
      padding: 14px 64px 14px 18px;
      box-shadow: 0 4px 25px 0 #0000000f;
      width: auto;
      margin: auto;
  }
  &__activity {
    display: flex;
    gap: 15px;
    > div {
      &:first-of-type {
        // align-self: center;
        div {
          padding: 12px;
          box-shadow: 0 0px 10px 0 #00000012;
          border-radius: 50%;
          z-index: 2;
          position: relative;
          background: #fff;
        }
      }
    }

    &:not(:last-of-type) {
      > div {
        &:first-of-type {
          position: relative;

          &::after {
            position: absolute;
            left: 23px;
            content: "";
            width: 1px;
            height: 80%;
            background: rgba(154, 154, 167, 0.43137);
            border-radius: 50%;
            bottom: -30px;
            z-index: -1;
          }
        }
      }
    }

    h6 {
      font-weight: normal !important;
      margin-bottom: 0;
      font-size: 15px !important;
      color: var(--bs-primary);
    }
    svg {
      background: none !important;
      padding: 0 !important;
    }
    span {
      &:first-of-type {
        display: block;
        font-size: 18px;
        color: #322e2e;
        margin-bottom: 0;
      }
      &:last-of-type {
        color: #9a9a9a;
        font-size: 16px;
        position: relative;
        top: -4px;
        left: 13px;

        &::after {
          position: absolute;
          left: -10px;
          content: "";
          width: 5px;
          height: 5px;
          background: #9a9aa7;
          top: 10px;
          border-radius: 50%;
        }
      }
    }
  }

  .compony-details {
    flex: 1;
    flex-basis: 221px;
    flex-shrink: 0;
  }

  &__profits {
    .sales-team {
      cursor: pointer;

      background: #fdecf2;
      color: #ea0552;
      padding: 11px;
      text-align: center;
      border-radius: 6px;
      font-size: 15px;
      svg {
        background: none !important;
        path {
          fill: #ea0552;
        }
      }
    }
    .expected-profit {
      cursor: pointer;
      background: #3d3d3d;
      color: #fff;
      padding: 11px;
      text-align: center;
      border-radius: 6px;
      font-size: 15px;
      svg {
        background: none !important;
        path {
          fill: #fff;
        }
      }
    }

    .assign-to-me{
      cursor: pointer;
      background: #EA0552;
      color: #fff;
      padding: 11px;
      text-align: center;
      border-radius: 6px;
      font-size: 15px;
      svg {
        background: none !important;
        path {
          fill: #fff;
        }
      }
    }
    > div {
      gap: 15px;
    }
  }

  .home-page__tabs {
    margin-top: 25px;
  }

  .proposal {
    .vs-table .vs-table__tr div {
      margin-bottom: 10px;
      margin-top: 20px;
    }
  }

  &__contact-list {
    .el-table {
      margin-bottom: 30px;
      .vs-table__th {
        background: none;
        width: 134px;
        padding: 0;
        div {
          margin: auto;
          text-align: center;
          display: block;
        }
      }
      .vs-table__td {
        color: #707070;
        width: 134px;
        text-align: center;
      }
      .el-table__row{
        &:not(:first-of-type) {
            box-shadow: 0 -3px 25px 0 #00000005;
        }
        td{
          border: none !important;
    padding: 15px 0;
        }
      }
      .vs-table__tr {
        &:not(:first-of-type) {
          div {
            box-shadow: 0 -3px 25px 0 #00000005;
          }
        }
        div {
          margin: 10px;
          margin-bottom: 0;
        }
      }

      .vs-table__th__content {
        
      }

      .el-table__cell > .cell{
        font-family: "segoe";
        font-weight: 500;
        text-align: center;
      }

      img {
            width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1px solid #ddd;
    padding: 2px;
      }
    }
  }

 

  .add-new-proposal,
  .add-new-contact {
    margin-top: -48px !important;
    margin-bottom: 18px;

    @media screen and (max-width: 540px) {
      margin-top: 15px !important;
    }
    button{
      background: #0AD819;
      border: none;
      padding: 10px 15px;
      border-radius: 9px;
      color: #FFF;
    }
  }

  .select-status-btn {
    background: #fff9e9b0;
    color: #d69f64;
    padding: 6px 7px;
    border: none;
    font-weight: 500;
    border-radius: 4px;
    font-size: 13px;
    svg{
      background: none;
    }
  }

  .selected-status-btn {
    color: #3b3b3b;
    border: none;
    font-size: 14px;
    background: none;
    svg{
      background: none;
    }
  }
}
</style>