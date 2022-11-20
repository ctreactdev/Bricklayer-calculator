import * as Yup from "yup";

export const JointingTilesAndClinkerSchema = Yup.object().shape({
  tile_height: Yup.string().required("Required"),
  area: Yup.string().required("Required"),
  tile_width: Yup.string().required("Required"),
  tile_length: Yup.string().required("Required"),
  joint_width: Yup.string().required("Required"),
  waste: Yup.string().required("Required"),
});
