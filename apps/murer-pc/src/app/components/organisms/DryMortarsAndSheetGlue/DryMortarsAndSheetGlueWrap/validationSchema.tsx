import * as Yup from "yup";

export const DryMortarsAndSheetGlueWrapSchema = Yup.object().shape({
  area: Yup.string().required("Required"),
  waste: Yup.string().required("Required"),
});
