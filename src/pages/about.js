import * as React from 'react'
import LayoutPage from '../components/layout'
import Seo from '../components/seo'


const AboutPage = () => {
    return(
        <>
            <LayoutPage pageTitle="About Page">
                IELTS စာမေးပွဲဖြေဖို့ပြင်ဆင်နေပါသလား? IELTS skills (၄) ခုလုံး (သို့) မိမိကြိုက်နှစ်သက်ရာ skill ကိုရွေးချယ်တက်ရောက်နိုင်တဲ့ ဗြိတိသျှကောင်စီမှ ကျွမ်းကျင်ပညာရှင်များ ရေးဆွဲထားသည့်သင်ရိုးညွှန်းတမ်းများဖြင့်သင်ကြားပေးမယ့် IELTS သင်တန်းက သင်လိုအပ်သောရလဒ်ကောင်းများရရှိအောင် ပံ့ပိုးကူညီပေးပါလိမ့်မယ်။ 
                IELTS သင်တန်းအကြောင်းပိုမိုသိရှိရန် ဖုန်း 09 9400 700 99 သို့ဆက်သွယ်စုံစမ်းနိုင်ပါတယ်။ သို့မဟုတ် အောက်တွင်ပေးထားသောလင့်ခ်မှတစ်ဆင့် ဝင်ရောက်ဖတ်ရှုနိုင်ပါတယ်။
            </LayoutPage>
        </>
    )
}

export const Head = () => <Seo title="About Page" />

export default AboutPage