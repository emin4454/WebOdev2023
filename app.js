const app = Vue.createApp({
    data(){
        return{
            nameF:'',
            surname:'',
            email:'',
            phoneNum:'',
            message:'',
            outputString:'',
            canGonder:false,
        }
    },
    methods:{
        clearTheForms(){
            this.nameF='';
            this.surname='';
            this.email='';
            this.phoneNum='';
            this.message='';
        },
        checkTheForms(){
            this.outputString=''
            this.outputString+=this.IsEmpty('İsim ',this.nameF);
            this.outputString+=this.IsEmpty('Soyisim ',this.surname);
            this.outputString+=this.IsEmpty('Email ',this.email);
            this.outputString+=this.IsEmpty('Numarasa ',this.phoneNum);
            this.outputString+=this.IsEmpty('Mesajınız ',this.message);
            this.outputString+=this.IsEmail(this.email);
            this.outputString+=this.IsPhoneNum(this.phoneNum);
            if(this.outputString =='')
            {
                this.canGonder = true;
            }
        },
        IsEmpty(text,value){
            if(value == '' || value == null)
                return text+' kısmı boş ----';
            else return '';
        },
        IsEmail(value){
           const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                return 'Bu e-mail geçersiz ----';
            }  else {
                return '';
            }
        },
        IsPhoneNum(value){
            const regex = /^(0\d{10})$/;
            return regex.test(value) ? '' : 'Telefon numarası geçersiz';
        }
    },
}).mount('#app')