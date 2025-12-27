import React from "react";
import { useForm } from "react-hook-form";

const SendParcel = () => {
  const {
    register,
    handleSubmit,watch,
    formState: { errors },
  } = useForm();
  const onSubmit = () => {};

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        {/* Parcel Info */}
        <section>
          <h3 className="text-lg font-semibold mb-2">Parcel Info</h3>

          <select {...register("type", { required: true })} className="input">
            <option value="">Select Parcel Type</option>
            <option value="document">Document</option>
            <option value="non-document">Non Document</option>
          </select>

          <input
            {...register("title", { required: true })}
            placeholder="Parcel Title"
            className="input"
          />

          {watch("type") === "non-document" && (
            <input
              type="number"
              {...register("weight")}
              placeholder="Weight (kg)"
              className="input"
            />
          )}
        </section>

        {/* Sender Info */}
        <section>
          <h3 className="text-lg font-semibold mb-2">Sender Info</h3>

          <input
            {...register("senderName", { required: true })}
            placeholder="Sender Name"
            className="input"
          />

          <input
            {...register("senderContact", { required: true })}
            placeholder="Sender Contact"
            className="input"
          />

          <select
            {...register("senderRegion", { required: true })}
            className="input"
          >
            <option value="">Select Region</option>
            <option value="Dhaka">Dhaka</option>
            <option value="Chattogram">Chattogram</option>
          </select>

          <select
            {...register("senderServiceCenter", { required: true })}
            className="input"
          >
            <option value="">Select Service Center</option>
            <option value="Uttara">Uttara</option>
            <option value="Mirpur">Mirpur</option>
          </select>

          <textarea
            {...register("senderAddress", { required: true })}
            placeholder="Pickup Address"
            className="input"
          />

          <textarea
            {...register("pickupInstruction", { required: true })}
            placeholder="Pickup Instruction"
            className="input"
          />
        </section>

        {/* Receiver Info */}
        <section>
          <h3 className="text-lg font-semibold mb-2">Receiver Info</h3>

          <input
            {...register("receiverName", { required: true })}
            placeholder="Receiver Name"
            className="input"
          />

          <input
            {...register("receiverContact", { required: true })}
            placeholder="Receiver Contact"
            className="input"
          />

          <select
            {...register("receiverRegion", { required: true })}
            className="input"
          >
            <option value="">Select Region</option>
            <option value="Dhaka">Dhaka</option>
            <option value="Chattogram">Chattogram</option>
          </select>

          <select
            {...register("receiverServiceCenter", { required: true })}
            className="input"
          >
            <option value="">Select Service Center</option>
            <option value="Banani">Banani</option>
            <option value="Agrabad">Agrabad</option>
          </select>

          <textarea
            {...register("receiverAddress", { required: true })}
            placeholder="Delivery Address"
            className="input"
          />

          <textarea
            {...register("deliveryInstruction", { required: true })}
            placeholder="Delivery Instruction"
            className="input"
          />
        </section>

        <button type="submit" className="btn btn-primary w-full">
          Submit
        </button>
      </form>
    </div>
  );
};

export default SendParcel;
