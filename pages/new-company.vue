<template>
  <div class="add-new-company-page">
      <div class="container">
          <section>

            <div class="new-company-header">
                <h3> Add New Company </h3>
            </div>

            <div class="add-new-company-page__breadcrumbs">
                <div>
                    <nuxt-link to="/">Home</nuxt-link>
                </div>
                <div>
                    <h6> 
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" version="1.1" width="10" height="10" x="0" y="0" viewBox="0 0 24 24" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><path xmlns="http://www.w3.org/2000/svg" d="m6.293 22.707a1 1 0 0 1 0-1.414l9.293-9.293-9.293-9.293a1 1 0 0 1 1.414-1.414l10 10a1 1 0 0 1 0 1.414l-10 10a1 1 0 0 1 -1.414 0z" fill="#707070" data-original="#000000" class=""/></g></svg>
                    </h6>
                </div>
                <div>
                    <h6 class="mb-0"> Add New Company </h6>
                </div>
            </div>
            


            <section v-if="!nextStep" class="mt-4 add-new-company-page__domain-step">
                <div class="mb-5 add-new-company-page__title">
                    <h6> Write Company Domain To Check. </h6>
                </div>

                <el-form :model="domainForm" ref="domainForm">
                    <h6 class="add-new-company-page__domain-label">Company Domain</h6>
                    <el-form-item
                        prop="domain"
                        :rules="[
                            { required: true, message: 'domain is required'},
                        ]"
                    >
                        <el-input v-model="domainForm.domain"></el-input>
                    </el-form-item>

                    <el-form-item>
                        <el-button type="primary" @click.prevent="submitForm('domainForm')">CHECK</el-button>
                    </el-form-item>
                </el-form>
            </section>




            <section v-else class="mt-4 add-new-company-page__company-info">
                

                <el-form :model="addCompanyInfo" ref="addCompanyInfo">



                    <div class="add-new-company-page__upload-img">
                        <div class="d-flex flex-wrap">

                            <div class="add-new-company-page__img">
                                <input @change="uploadImg" type="file">
                                <svg v-if="!url" xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 44.124 36.246">
                                    <g id="noun-upload-photos-4187203" transform="translate(-80.035 -78.738)">
                                        <path id="Path_5" data-name="Path 5" d="M132.632,110.256H108.94a3.939,3.939,0,0,1-3.94-3.94V87.406a3.939,3.939,0,0,1,3.94-3.94h8.1l1.395-4.192a.788.788,0,0,1,.749-.536h11.031a.788.788,0,0,1,.788.536l1.355,4.192h8.1a3.939,3.939,0,0,1,3.94,3.94V98.437H142.82V87.406a2.363,2.363,0,0,0-2.364-2.364h-8.667a.788.788,0,0,1-.788-.536l-1.355-4.192h-9.9l-1.355,4.192a.788.788,0,0,1-.788.536h-8.667a2.363,2.363,0,0,0-2.364,2.364v18.91a2.363,2.363,0,0,0,2.364,2.364h23.693ZM124.7,93.71a3.151,3.151,0,1,0,2.229.923A3.153,3.153,0,0,0,124.7,93.71Zm9.455,3.152a9.455,9.455,0,1,1-2.769-6.686A9.455,9.455,0,0,1,134.153,96.861Zm-4.728,0a4.727,4.727,0,1,0-1.385,3.343A4.729,4.729,0,0,0,129.425,96.861Zm19.7,10.243a7.88,7.88,0,1,1-2.308-5.571A7.879,7.879,0,0,1,149.124,107.1Zm-4.255-2.206-3.152-2.364a.788.788,0,0,0-.946,0L137.62,104.9l.946,1.261,1.891-1.418v7.091h1.576v-7.091l1.891,1.418Z" transform="translate(-24.965)" fill="#919191"/>
                                    </g>
                                </svg>
                                <img :src="url" v-if="url" alt="">
                            </div>

                            <div>
                                <h6 >Upload Company Logo</h6>
                                <p>
                                    Upload Png Logo For Company
                                </p>
                                <h6>Logo Limit : 4 MB</h6>
                            </div>


                        </div>
                    </div>


                    <div class="row">
                        
                        <div class="col-md-3">
                            <div>
                                <h6 class="add-new-company-page__label">Company Name</h6>
                                <el-form-item
                                    prop="name"
                                    :rules="[
                                        { required: true, message: 'name is required'},
                                    ]"
                                >
                                    <el-input v-model="addCompanyInfo.name"></el-input>
                                </el-form-item>
                            </div>
                        </div>



                        <div class="col-md-3">
                            <div>
                                <h6 class="add-new-company-page__label">Email Address</h6>
                                <el-form-item
                                    prop="email"
                                    :rules="[
                                        { required: true, message: 'email is required'},
                                        { required: true, type: 'email' , message: 'email not valid'},
                                    ]"
                                >
                                    <el-input v-model="addCompanyInfo.email"></el-input>
                                </el-form-item>
                            </div>
                        </div>




                        <div class="col-md-3">
                            <div>
                                <h6 class="add-new-company-page__label">Phone Number</h6>
                                <el-form-item
                                    prop="phone"
                                    :rules="[
                                        { required: true, message: 'phone is required'},
                                    ]"
                                >
                                    <el-input v-model="addCompanyInfo.phone"></el-input>
                                </el-form-item>
                            </div>
                        </div>




                        <div class="col-md-3">
                            <div>
                                <h6 class="add-new-company-page__label">Facebook Url</h6>
                                <el-form-item
                                    prop="facebookUrl"
                                    :rules="[
                                        { required: true, message: 'facebook Url is required'},
                                    ]"
                                >
                                    <el-input v-model="addCompanyInfo.facebookUrl"></el-input>
                                </el-form-item>
                            </div>
                        </div>




                        <div class="col-md-3">
                            <div>
                                <h6 class="add-new-company-page__label">Instgram Url</h6>
                                <el-form-item
                                    prop="instgramUrl"
                                    :rules="[
                                        { required: true, message: 'instgram Url is required'},
                                    ]"
                                >
                                    <el-input v-model="addCompanyInfo.instgramUrl"></el-input>
                                </el-form-item>
                            </div>
                        </div>




                        <div class="col-md-3">
                            <div>
                                <h6 class="add-new-company-page__label">Twitter Url</h6>
                                <el-form-item
                                    prop="twitterUrl"
                                    :rules="[
                                        { required: true, message: 'Twitter Url is required'},
                                    ]"
                                >
                                    <el-input v-model="addCompanyInfo.twitterUrl"></el-input>
                                </el-form-item>
                            </div>
                        </div>



                        <div class="col-md-3">
                            <div>
                                <h6 class="add-new-company-page__label">Youtube Url</h6>
                                <el-form-item
                                    prop="youtubeUrl"
                                    :rules="[
                                        { required: true, message: 'Youtube Url is required'},
                                    ]"
                                >
                                    <el-input v-model="addCompanyInfo.youtubeUrl"></el-input>
                                </el-form-item>
                            </div>
                        </div>



                        <div class="col-md-3">
                            <div>
                                <h6 class="add-new-company-page__label">LinkedIn Url</h6>
                                <el-form-item
                                    prop="linkedInUrl"
                                    :rules="[
                                        { required: true, message: 'LinkedIn Url is required'},
                                    ]"
                                >
                                    <el-input v-model="addCompanyInfo.linkedInUrl"></el-input>
                                </el-form-item>
                            </div>
                        </div>



                        <div class="col-md-6">
                            <div>
                                <h6 class="add-new-company-page__label">Description</h6>
                                <el-form-item
                                    prop="description"
                                    :rules="[
                                        { required: true, message: 'description is required'},
                                    ]"
                                >
                                    <el-input v-model="addCompanyInfo.description"></el-input>
                                </el-form-item>
                            </div>
                        </div>


                        <div class="col-md-3">
                            <div>
                                <h6 class="add-new-company-page__label">Sectors</h6>
                                <el-form-item
                                    prop="sector"
                                    :rules="[
                                        { required: true, message: 'sector is required'},
                                    ]"
                                >
                                    <el-select v-model="addCompanyInfo.sector" placeholder="Select">
                                        <el-option
                                        v-for="item in sectors"
                                        :key="item.id"
                                        :label="item.name"
                                        :value="item.id">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </div>
                        </div>


                        <div class="col-md-3">
                            <el-form-item>
                                <el-button data-submit="company-info" type="primary" @click="submitCompanyInfo('addCompanyInfo')">Save New Company</el-button>
                            </el-form-item>
                        </div>


                    </div>
         
                </el-form>


            </section>


          </section>
      </div>

      <CheckAddCompanyNextStep @nextStep="nextStep = true" @close="checkForNextStep = false" v-if="checkForNextStep" :status="companyAvailable" />
  </div>
</template>

<script>
import CheckAddCompanyNextStep from '@/components/CheckAddCompanyNextStep';
export default {
    components:{CheckAddCompanyNextStep},
    data(){
        return {
            domainForm: {},
            nextStep: false,
            checkForNextStep: false,
            companyAvailable: false,
            addCompanyInfo:{},
            photo: "",
            url: ""
        }
    },
    mounted(){
        this.getSectors();
    },
    methods:{
        getSectors(){
            const loading = this.$loading({
                lock: true,
                text: false,
                spinner: "el-icon-loading",
                background: "rgba(255,255,255,.7)",
                customClass: "fullscreen-loading",
            });

            this.$axios.get(`/sectors`).then(res => {
                this.sectors = res.data;
            }).finally(() => loading.close());
        },
        submitCompanyInfo(formName){
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.addCompany();
                }else{
                    }
            })
                    // this.$router.push(`/new-contact`);
        },
        addCompany(){

             const loading = this.$loading({
                lock: true,
                text: false,
                spinner: "el-icon-loading",
                background: "rgba(255,255,255,.7)",
                customClass: "fullscreen-loading",
            });

            let formData = new FormData();
            if(this.photo && this.url){
                formData.append('photos' , this.photo)
            }
            let photoJson = '';
            let getPhotoJson = this.$axios.post('/photos', formData).then(res => {
                photoJson = res.data[0].url;
            }).catch((err) => {
                this.$vs.notification({
                        progress: "auto",
                        color: "danger",
                        position: "top-center",
                        text: `There Are Something Wrong In Upload Logo`,
                });
                loading.close();
            });
            
            Promise.all([getPhotoJson]).then(() => {
                this.$axios.post('/companies', {
                    name: this.addCompanyInfo.name,
                    email: this.addCompanyInfo.email,
                    phone: this.addCompanyInfo.phone,
                    website: this.domainForm.domain,
                    description: this.addCompanyInfo.description,
                    sector: this.addCompanyInfo.sector,
                    socialMedia: [
                        {name: 'facebook', link: this.addCompanyInfo.facebookUrl},
                        {name: 'twitter', link: this.addCompanyInfo.twitterUrl},
                        {name: 'linkedIn', link: this.addCompanyInfo.linkedInUrl},
                        {name: 'youtube', link: this.addCompanyInfo.youtubeUrl},
                    ],
                    logo: photoJson
                }).then(() => {
                    this.$vs.notification({
                        progress: "auto",
                        color: "success",
                        position: "top-center",
                        text: `Company Information Saved Successfully`,
                    });
                    this.$router.push(`/new-contact?company=${res.data.id}`);
                }).catch(err => {
                   
                   if(err.response.status == 400) {
                       this.$vs.notification({
                            progress: "auto",
                            color: "danger",
                            position: "top-center",
                            text: `Phone Number Invalid`,
                        });
                   }

                   
                })
                .finally(() => loading.close())
            })
            
        },
        uploadImg(e){
            if(e.target.files.length > 0){
                this.photo = e.target.files[0];
                this.url = URL.createObjectURL(this.photo);
            }
        },
        submitForm(formName){
            this.$refs[formName].validate((valid) => {
                if (valid){
                    this.sendDomain()
                    // this.checkForNextStep = true;
                    // this.companyAvailable = true;

                }
            })
        },
        sendDomain(){
            const loading = this.$loading({
                lock: true,
                text: false,
                spinner: "el-icon-loading",
                background: "rgba(255,255,255,.7)",
                customClass: "fullscreen-loading",
            });
            this.$axios.get(`/companies?website=${this.domainForm.domain}`).then(res => {
                if(res.data.docs.length == 0){
                    this.nextStep = true;
                }
            }).catch(err => {
                if (err.response.status == 400) {
                    this.nextStep = true;
                }
            })
            .finally(() => loading.close())
        },
    }
}
</script>

<style lang="scss">

.add-new-company-page{
    &__breadcrumbs{
        padding-top: 20px;
        display: flex;
        gap: 5px;
        h6 , a{
            font-weight: 400;
            color: #707070;
        }
    }

    &__title{
        h6{
            color: #FFCB05;
        }
    }

    &__domain-label{
        font-weight: 100;
        color: #707070;
        font-size: 14px;
    }

    &__domain-step{
        .el-form{
            max-width: 300px;
            .el-button{
                width: 100%;
            }
        }
    }


    &__company-info{
        [data-submit="company-info"]{
            width: 100%;
            margin-top: 27px;
            border-radius: 5px;
        }


        
    }
    &__upload-img{
        margin-bottom: 25px;
        >div{
            gap: 15px;
            color: #838383;
            &:last-of-type{
                div{
                    &:last-of-type{
                        h6{
                            margin-bottom: 15px;
                        }
                    }
                }
                p{
                        width: 183px;
                        line-height: 1.4;
                }
            }
        }
    }
    &__img{
        padding: 45px;
        border: 1px solid #ccc;
        border-radius: 5px;
        
        position: relative;
        width: 132px;
        height: 132px;
        input[type="file"]{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            opacity: 0;
            cursor: pointer;
        }
        img{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            /* min-height: 126px; */
            padding: 3px;
            z-index: -1;
            object-fit: contain;
        }
    }
}
</style>