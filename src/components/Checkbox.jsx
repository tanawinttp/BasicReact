// ทำการรับ property มาทั้งหมด 2 ตัว คือ text (สำหรับแสดงผล Checkbox) isChecked (สำหรับบอกว่าตัวแปล Checkbox ถูกหรือผิด)
const Checkbox = ({ text, isChecked }) => {
  return (
    <div>
      {text}
      {isChecked ? "is done" : "is in progress"}
    </div>
  );
};

export default Checkbox;
