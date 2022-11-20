interface ISubmitBtnProps {
  text: string;
}
const SubmitButton = (values: ISubmitBtnProps) => {
  const { text } = values;

  return (
    <>
      <button type="submit" className="submitBtn">
        {text}
      </button>
    </>
  );
};

export default SubmitButton;
