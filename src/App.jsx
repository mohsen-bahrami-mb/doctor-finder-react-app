import { AiOutlineCalendar } from "react-icons/ai";
import { AiOutlineLike } from "react-icons/ai";
import Button from "./components/general/Button";
import DoctorTag from "./components/doctors/DoctorTag";
import IconWithText from "./components/general/IconWithText";
import Input from "./components/general/Input";
import { IoLocationOutline } from "react-icons/io5";
import { RiSearchLine } from "react-icons/ri";
import Tag from "./components/blogs/Tag";
function App() {
  return (
    <main dir="rtl" lang="fa">
      <Button label="جستجو" large filled onclick={() => {}} />
      <br />
      <br />
      <br />
      <Button label="جستجو" large onclick={() => {}} />
      <br />
      <br />
      <br />
      <Button label="جستجو" filled onclick={() => {}} />
      <br />
      <br />
      <br />
      <Button label="جستجو" onclick={() => {}} />
      <br />
      <br />
      <br />
      <Input
        icon={RiSearchLine}
        large
        placeholder="جستجوی پزشکان"
        value=""
        onchange={() => {}}
      />
      <br />
      <br />
      <br />
      <Input large placeholder="جستجوی پزشکان" value="" onchange={() => {}} />
      <br />
      <br />
      <br />
      <Input placeholder="جستجوی پزشکان" value="" onchange={() => {}} />
      <br />
      <br />
      <br />
      <Tag label="قلب و عروق" sidebar />
      <br />
      <br />
      <br />
      <Tag label="قلب و عروق" />
      <br />
      <br />
      <br />
      <IconWithText text="ایران" icon={IoLocationOutline} />
      <br />
      <IconWithText text="5 رای" icon={AiOutlineLike} />
      <br />
      <IconWithText large text="5 رای" icon={AiOutlineLike} />
      <br />
      <IconWithText
        color="text-[#11c195]"
        text="دوشنبه, چهارشنبه"
        icon={AiOutlineCalendar}
      />
      <br />
      <br />
      <IconWithText large text="دوشنبه, چهارشنبه" icon={AiOutlineCalendar} />
      <br />
      <br />
      <br />
      <DoctorTag label="بیهوشی" />
      <br />
      <br />
    </main>
  );
}

export default App;
