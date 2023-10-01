import Button from "../../components/general/Button";
import React from "react";
import useRegisterModal from "../../stores/useRegisterModal";

const Register = () => {
  const { onRegisterOpen } = useRegisterModal();
  
  return (
    <div onClick={() => onRegisterOpen()} className="lg:order-0">
      <Button label="ورود / ثبت نام" onclick={() => {}} />
    </div>
  );
};

export default Register;
