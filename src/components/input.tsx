// @ts-ignore
import { InputField } from "@cred/neopop-web/lib/components";

const InputFieldExample = () => {
    return (
        <div>
            <InputField
    autoFocus
    colorConfig={{
      labelColor: "#0d0d0d",
      textColor: "#000000",
    }}
    colorMode="light"
    id="text_field"
    inputMode="text"
    label="your name"
    maxLength={30}
    onBlur={function noRefCheck() {}}
    onChange={function noRefCheck() {}}
    onFocus={function noRefCheck() {}}
    placeholder="enter your name"
    type="text"
  />
        </div>
    );
};

export default InputFieldExample;