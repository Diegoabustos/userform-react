import { InputSimple } from "../Input/InputSimple";
import { InputUpDoc } from "../Input/InputUpDoc";
import { Formik, FormikErrors } from "formik";
import { Button } from "../Button";
import { ContainerForm } from "./ContainerForm";

interface StepOneProperties {
  nextStep?: any;
}

interface MyFormValues {
  razonSocial: string;
  nombreComercial: string;
  nacionalidad: string;
  fechaConstitucion: string;
  rfc: string;
  regimenFiscal: string;
  industria: string;
  telefono: string;
  email: string;
  comprobanteDomicilio: any;
  calle: string;
  ext: string;
  int: string;
  zipcode: string;
  colonia: string;
  ciudad: string;
  entidad: string;
  pais: string;
  clabe: string;
  banco: string;
}

export const StepOne: React.FC<StepOneProperties> = ({
  nextStep,
}: StepOneProperties): JSX.Element => {
  const initialValues: MyFormValues = {
    razonSocial: "",
    nombreComercial: "",
    nacionalidad: "",
    fechaConstitucion: "",
    rfc: "",
    regimenFiscal: "",
    industria: "",
    telefono: "",
    email: "",
    comprobanteDomicilio: "",
    calle: "",
    ext: "",
    int: "",
    zipcode: "",
    colonia: "",
    ciudad: "",
    entidad: "",
    pais: "",
    clabe: "",
    banco: "",
  };

  return (
    <Formik
      initialValues={initialValues}
      validate={(values) => {
        let errors: FormikErrors<MyFormValues> = {};

        if (!values.razonSocial) {
          errors.razonSocial = "Favor de ingresar la razón social";
        } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.razonSocial)) {
          errors.razonSocial = "La razon social solo permite letras y espacios";
        }
        if (!values.nombreComercial) {
          errors.nombreComercial = "Favor de ingresar el nombre comercial";
        } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.nombreComercial)) {
          errors.nombreComercial =
            "El nombre comercial solo permite letras y espacios";
        }
        if (!values.nacionalidad) {
          errors.nacionalidad = "Favor de ingresar a nacionalidad";
        } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.nacionalidad)) {
          errors.nacionalidad =
            "La nacionalidad solo permite letras y espacios";
        }
        if (!values.regimenFiscal) {
          errors.regimenFiscal = "Favor de ingresar el regimen fiscal";
        } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.regimenFiscal)) {
          errors.regimenFiscal =
            "El regimen fiscal solo permite letras y espacios";
        }

        // indusrty validation
        if (!values.industria) {
          errors.industria = "Favor de ingresar la industria";
        } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.industria)) {
          errors.industria = "La industria solo permite letras y espacios";
        }

        // rfc validation
        if (!values.rfc) {
          errors.rfc = "Favor ingrese un rfc";
        } else if (
          !/^([A-Z,Ñ,&]{3,4}([0-9]{2})(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])[A-Z|\d]{3})$/.test(
            values.rfc
          )
        ) {
          errors.rfc = "ingrese un rfc válido";
        }

        // date validation
        if (!values.fechaConstitucion) {
          errors.fechaConstitucion = "Campo de fecha obligatorio";
        }

        // comprobante de domicilio validation
        if (!values.comprobanteDomicilio) {
          errors.comprobanteDomicilio = "Favor de cargar el documento";
        }

        // thelephone number validation
        if (!values.telefono) {
          errors.telefono = "Porfavor ingrese un telefono";
        } else if (
          !/^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/.test(
            values.telefono
          )
        ) {
          errors.telefono = "Formato telefonico inválido";
        }

        // email validation
        if (!values.email) {
          errors.email = "Fvor de ingresar un email";
        } else if (
          !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.email)
        ) {
          errors.email = "formato de mail inváñido";
        }

        // street validation
        if (!values.calle) {
          errors.calle = "Favor de ingresar la calle";
        } else if (!/^[#.0-9a-zA-Z\s,-]+$/.test(values.calle)) {
          errors.calle = "No se permiten simbolos en esté campo";
        }

        // ext validation
        if (!values.ext) {
          errors.ext = "Favor de ingresar el número exterior";
        } else if (!/^[#.0-9a-zA-Z\s,-]+$/.test(values.ext)) {
          errors.ext= "No se permiten simbolos en esté campo";
        }

        // zipcode validation
        if (!values.zipcode) {
          errors.zipcode = "Favor de ingresar el codigo postal";
        } else if (!/^\d{4,5}$/.test(values.zipcode)) {
          errors.zipcode= "formato de código postal inválido";
        }

        // colonia
        if (!values.colonia) {
          errors.colonia = "Favor de ingresar la colonia";
        } else if (!/^\d{4,5}$/.test(values.colonia)) {
          errors.colonia = "EL campo de colonia solo permite letras y espacios";
        }

        // ciudad
        if (!values.ciudad) {
          errors.ciudad = "Favor de ingresar la ciudad";
        } else if (!/^\d{4,5}$/.test(values.ciudad)) {
          errors.ciudad = "EL campo de ciudad solo permite letras y espacios";
        }

        // entidad
        if (!values.entidad) {
          errors.entidad = "Favor de ingresar entidad o estado";
        } else if (!/^\d{4,5}$/.test(values.entidad)) {
          errors.entidad = "Solo se permite letras y espacios en este campo";
        }

        // pais
        if (!values.pais) {
          errors.pais = "Favor de ingresar el pais";
        } else if (!/^\d{4,5}$/.test(values.pais)) {
          errors.pais = "EL campo de pais solo permite letras y espacios";
        }

        return errors;
      }}
      onSubmit={(data) => {
        nextStep(2);
        console.log("Formulario Enviado", data);
      }}
    >
      {({
        errors,
        touched,
        handleSubmit,
        values,
        handleChange,
        setFieldValue,
        handleBlur,
      }) => (
        <ContainerForm
          children={
            <form onSubmit={handleSubmit}>
              <h6 className="text-black text-sm mt-3 mb-6 font-bold uppercase">
                Datos de Usuario
              </h6>
              <div className="flex flex-wrap">
                <InputSimple
                  errorMessage={
                    touched.razonSocial && errors.razonSocial
                      ? errors.razonSocial
                      : null
                  }
                  label="razon social"
                  name="razonSocial"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="text"
                  size="normal"
                  placeholder=""
                  value={values.razonSocial}
                />
                <InputSimple
                  errorMessage={
                    touched.nombreComercial && errors.nombreComercial
                      ? errors.nombreComercial
                      : null
                  }
                  label="nombre comercial"
                  name="nombreComercial"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="text"
                  size="normal"
                  placeholder=""
                  value={values.nombreComercial}
                />
                <InputSimple
                  errorMessage={
                    touched.email && errors.email ? errors.email : null
                  }
                  label="dirección de correo electrónico"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  size="small"
                  type="email"
                  placeholder=""
                  value={values.email}
                />
                <InputSimple
                  errorMessage={
                    touched.nacionalidad && errors.nacionalidad
                      ? errors.nacionalidad
                      : null
                  }
                  label="nacionalidad"
                  name="nacionalidad"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="text"
                  size="small"
                  placeholder=""
                  value={values.nacionalidad}
                />
                <InputSimple
                  errorMessage={
                    touched.regimenFiscal && errors.regimenFiscal
                      ? errors.regimenFiscal
                      : null
                  }
                  label="regimen fiscal"
                  name="regimenFiscal"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  size="small"
                  type="text"
                  placeholder=""
                  value={values.regimenFiscal}
                />
                <InputSimple
                  errorMessage={
                    touched.industria && errors.industria
                      ? errors.industria
                      : null
                  }
                  label="industria"
                  name="industria"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  size="small"
                  type="text"
                  placeholder=""
                  value={values.industria}
                />
                <InputSimple
                  errorMessage={touched.rfc && errors.rfc ? errors.rfc : null}
                  label="rfc"
                  name="rfc"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="text"
                  size="small"
                  placeholder=""
                  value={values.rfc}
                />

                <InputSimple
                  errorMessage={
                    touched.fechaConstitucion && errors.fechaConstitucion
                      ? errors.fechaConstitucion
                      : null
                  }
                  label="fecha de constitución"
                  name="fechaConstitucion"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="date"
                  size="small"
                  placeholder=""
                  value={values.fechaConstitucion}
                />

                <InputSimple
                  errorMessage={
                    touched.telefono && errors.telefono ? errors.telefono : null
                  }
                  label="número telefónico"
                  name="telefono"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  size="small"
                  type="text"
                  placeholder=""
                  value={values.telefono}
                />

                <InputSimple
                  errorMessage={
                    touched.clabe && touched.clabe ? errors.clabe : null
                  }
                  label="CLABE"
                  name="clabe"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  size="small"
                  type="text"
                  placeholder=""
                  value={values.clabe}
                />

                <InputSimple
                  errorMessage={
                    touched.banco && touched.banco ? errors.banco : null
                  }
                  label="Banco"
                  name="banco"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  size="small"
                  type="text"
                  placeholder=""
                  value={values.banco}
                />

                <InputUpDoc
                  errorMessage={
                    touched.comprobanteDomicilio && touched.comprobanteDomicilio ? errors.comprobanteDomicilio : null
                  }
                  label="Comprobante de Domicilio"
                  name="comprobanteDomicilio"
                  onChange={handleChange}
                  type="file"
                  placeholder="Cargar documento"
                  value={values.comprobanteDomicilio}
                />
              </div>
              <hr className="mt-6 border-b-10 border-blue-900" />
              <h6 className="text-black text-sm mt-3 mb-6 font-bold uppercase">
                Domicilio
              </h6>

              <div className="flex flex-wrap">
                <InputSimple
                  errorMessage={
                    touched.calle && touched.calle ? errors.calle : null
                  }
                  label="Calle o Avenida"
                  name="calle"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  size="medium"
                  type="text"
                  placeholder=""
                  value={values.calle}
                />
                <InputSimple
                  errorMessage={touched.ext && touched.ext ? errors.ext : null}
                  label="Número exterior"
                  name="ext"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  size="small"
                  type="text"
                  placeholder=""
                  value={values.ext}
                />
                <InputSimple
                  errorMessage={touched.int && touched.int ? errors.int : null}
                  label="Número interior"
                  name="int"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  size="small"
                  type="text"
                  placeholder=""
                  value={values.int}
                />
                <InputSimple
                  errorMessage={
                    touched.zipcode && touched.zipcode ? errors.zipcode : null
                  }
                  label="Código Postal"
                  name="zipcode"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  size="small"
                  type="text"
                  placeholder=""
                  value={values.zipcode}
                />
                <InputSimple
                  errorMessage={
                    touched.colonia && touched.colonia ? errors.colonia : null
                  }
                  label="Colonia o Urbanización"
                  name="colonia"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  size="small"
                  type="text"
                  placeholder=""
                  value={values.colonia}
                />
                <InputSimple
                  errorMessage={
                    touched.ciudad && touched.ciudad ? errors.ciudad : null
                  }
                  label="Ciudad o Población"
                  name="ciudad"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  size="small"
                  type="text"
                  placeholder=""
                  value={values.ciudad}
                />
                <InputSimple
                  errorMessage={
                    touched.entidad && touched.entidad ? errors.entidad : null
                  }
                  label="Entidad Federativa o Estado"
                  name="entidad"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  size="small"
                  type="text"
                  placeholder=""
                  value={values.entidad}
                />
                <InputSimple
                  errorMessage={
                    touched.pais && touched.pais ? errors.pais : null
                  }
                  label="País"
                  name="pais"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  size="small"
                  type="text"
                  placeholder=""
                  value={values.pais}
                />
              </div>

              <div className="flex flex-wrap justify-end">
                <Button primary="Enviar" type="submit" />
              </div>
            </form>
          }
        />
      )}
    </Formik>
  );
};
