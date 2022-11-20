import * as Yup from "yup";

export const BondingTileAndClinkerSchema = Yup.object().shape({
  area: Yup.string().required("Required"),
  tile_width: Yup.string().required("Required"),
  tile_length: Yup.string().required("Required"),
  joint_width: Yup.string().required("Required"),
  waste: Yup.string().required("Required"),
});
