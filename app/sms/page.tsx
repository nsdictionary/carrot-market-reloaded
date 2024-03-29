import FormButton from "@/components/form-btn";
import FormInput from "@/components/form-input";
import Link from "next/link";

export default function SMSLogin() {
  return (
    <div className="flex flex-col gap-10 px-8 py-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">SMS Login!</h1>
        <h2 className="text-xl">Verify your phone number.</h2>
      </div>
      <form className="flex flex-col gap-3">
        <FormInput
          name="phone_number"
          type="number"
          placeholder="Phone number"
          required
          errors={[]}
        />
        <FormInput
          name="verification_code"
          type="number"
          placeholder="Verification code"
          required
          errors={[]}
        />
        <FormButton text="Verify" />
      </form>
    </div>
  );
}
