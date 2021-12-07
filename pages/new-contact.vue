<template>
  <div class="add-new-contact-page">
      <div class="container">
          <section>
                <div class="new-contact-header">
                    <h3> Add New Contact </h3>
                </div>

                <div class="add-new-contact-page__breadcrumbs">
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


                <div class="mt-5">
                    <h4> You can add contact for this copmany right now ! </h4>
                </div>



                <el-form :model="addContactInfo" ref="addContactInfo">



                    <div class="add-new-contact-page__upload-img mt-4 mb-5">
                        <div class="d-flex flex-wrap">

                            <div class="add-new-contact-page__img">
                                <input @change="uploadImg" type="file">
                                <svg v-if="!url" xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 44.124 36.246">
                                    <g id="noun-upload-photos-4187203" transform="translate(-80.035 -78.738)">
                                        <path id="Path_5" data-name="Path 5" d="M132.632,110.256H108.94a3.939,3.939,0,0,1-3.94-3.94V87.406a3.939,3.939,0,0,1,3.94-3.94h8.1l1.395-4.192a.788.788,0,0,1,.749-.536h11.031a.788.788,0,0,1,.788.536l1.355,4.192h8.1a3.939,3.939,0,0,1,3.94,3.94V98.437H142.82V87.406a2.363,2.363,0,0,0-2.364-2.364h-8.667a.788.788,0,0,1-.788-.536l-1.355-4.192h-9.9l-1.355,4.192a.788.788,0,0,1-.788.536h-8.667a2.363,2.363,0,0,0-2.364,2.364v18.91a2.363,2.363,0,0,0,2.364,2.364h23.693ZM124.7,93.71a3.151,3.151,0,1,0,2.229.923A3.153,3.153,0,0,0,124.7,93.71Zm9.455,3.152a9.455,9.455,0,1,1-2.769-6.686A9.455,9.455,0,0,1,134.153,96.861Zm-4.728,0a4.727,4.727,0,1,0-1.385,3.343A4.729,4.729,0,0,0,129.425,96.861Zm19.7,10.243a7.88,7.88,0,1,1-2.308-5.571A7.879,7.879,0,0,1,149.124,107.1Zm-4.255-2.206-3.152-2.364a.788.788,0,0,0-.946,0L137.62,104.9l.946,1.261,1.891-1.418v7.091h1.576v-7.091l1.891,1.418Z" transform="translate(-24.965)" fill="#919191"/>
                                    </g>
                                </svg>
                                <img :src="url" v-if="url" alt="">
                            </div>

                            <div>
                                <h6 class="mt-2 header">Contact person profile photo</h6>
                                <p>
                                    Upload Png Logo For contact
                                </p>
                                <h6>Logo Limit : 6 MB</h6>
                            </div>


                        </div>
                    </div>






                    <div class="row">
                        
                        <div class="col-md-3">
                            <div>
                                <h6 class="add-new-company-page__label">Name</h6>
                                <el-form-item
                                    prop="name"
                                    :rules="[
                                        { required: true, message: 'name is required'},
                                    ]"
                                >
                                    <el-input v-model="addContactInfo.name"></el-input>
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
                                    <el-input v-model="addContactInfo.email"></el-input>
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
                                    <el-input v-model="addContactInfo.phone"></el-input>
                                </el-form-item>
                            </div>
                        </div>




                        <div class="col-md-3">
                            <div>
                                <h6 class="add-new-company-page__label">Position</h6>
                                <el-form-item
                                    prop="position"
                                    :rules="[
                                        { required: true, message: 'position is required'},
                                    ]"
                                >
                                    <el-input v-model="addContactInfo.position"></el-input>
                                </el-form-item>
                            </div>
                        </div>





                        <div class="col-md-3">
                            <el-form-item>
                                <div class="d-flex add-new-contact-page__contact-btns mt-4">
                                    <div>
                                        <el-button data-submit="company-info" type="primary" @click="submitContactInfo('addContactInfo')">Save New Company</el-button>
                                    </div>
                                    <div>
                                        <el-button data-submit="company-info" >Skip For Know</el-button>
                                    </div>
                                </div>
                                
                                
                            </el-form-item>
                        </div>


                    </div>





                </el-form>

          </section>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            addContactInfo: {},
            photo: '',
            url:''
        }
    },
    methods:{
        uploadImg(e){
            if(e.target.files.length > 0){
                this.photo = e.target.files[0];
                this.url = URL.createObjectURL(this.photo);
            }
        },
        submitContactInfo(formName){
            this.$refs[formName].validate((valid) => {
                if(valid){

                }
            })
        }
    }
}
</script>

<style lang="scss">
.add-new-contact-page{
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


    &__upload-img{
        >div{
            gap: 15px;
            color: #838383;
            &:last-of-type{
                div{
                    &:last-of-type{
                        h6{
                            margin-bottom: 15px;
                            font-size: 14px;
                            &.header{
                                font-size: 19px;
                                font-weight: 500;
                                margin-bottom: 10px;
                            }
                        }
                    }
                }
                p{
                        width: 183px;
                        font-size: 15px;
                        margin-bottom: 13px;
                }
            }
        }
    }
    &__img{
        padding: 45px;
        border: 1px solid #ccc;
        border-radius: 50%;
     
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
            border-radius: 50%;
            overflow: hidden;
            padding: 3px;
            z-index: -1;
            object-fit: contain;
        }
    }


    &__contact-btns{
        gap: 15px;
    }

}
</style>