import { InputSimple } from "../Input/InputSimple";
import Swal from 'sweetalert2'
import { Formik, FormikErrors } from "formik";
import { ContainerForm } from "./ContainerForm";
import { Button } from "../Button";
import { InputUpDoc } from "../Input/InputUpDoc";

interface StepTwoProperties {
  prevStep?: any;
}

interface MyFormValues {
  nombre: string;
  genero: string;
  fechaNacimiento: string;
  entidadNacimiento: string;
  paisNacimiento: string;
  nacionalidad: string;
  curp: string;
  rfc: string;

  calle: string;
  ext: string;
  int: string;
  zipcode: string;
  colonia: string;
  ciudad: string;
  entidad: string;
  pais: string;
  estadoCivil: string;
  email: string;
  telefono: string;
  identificacionDoc: any;
}

export const StepTwo: React.FC<StepTwoProperties> = ({
  prevStep,
}: StepTwoProperties): JSX.Element => {
  const initialValues: MyFormValues = {
    nombre: "",
    genero: "",
    fechaNacimiento: "",
    entidadNacimiento: "",
    paisNacimiento: "",
    nacionalidad: "",
    curp: "",
    rfc: "",
    calle: "",
    ext: "",
    int: "",
    zipcode: "",
    colonia: "",
    ciudad: "",
    entidad: "",
    pais: "",
    estadoCivil: "",
    email: "",
    telefono: "",
    identificacionDoc: "",
  };

  return (
    <Formik
      initialValues={initialValues}
      validate={(values) => {
        let errors: FormikErrors<MyFormValues> = {};

        // name validation
        if (!values.nombre) {
          errors.nombre = "Favor de ingresar en nombre";
        } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.nombre)) {
          errors.nombre = "El nombre solo permite letras  y espacios";
        }

        // gender validation
        if (!values.genero) {
          errors.genero = "Favor de ingresar el genero";
        } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.genero)) {
          errors.genero = "El genero solo permite letras y espacios";
        }

        // date validation
        if (!values.fechaNacimiento) {
          errors.fechaNacimiento = "Campo de fecha obligatorio";
        }

        // doc identificacion validation
        if (!values.identificacionDoc) {
          errors.identificacionDoc = "Favor de cargar documento de identificación";
        }

        // entity validation
        if (!values.entidadNacimiento) {
          errors.entidadNacimiento =
            "Favor de ingresar la entidad de nacimiento";
        } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.entidadNacimiento)) {
          errors.entidadNacimiento =
            "La entidad de nacimiento solo permite letras y espacios";
        }

        // nacionalidad validation
        if (!values.nacionalidad) {
          errors.nacionalidad = "Favor de ingresar a nacionalidad";
        } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.nacionalidad)) {
          errors.nacionalidad =
            "La nacionalidad solo permite letras y espacios";
        }

        // CURP validation
        if (!values.curp) {
          errors.curp = "Porfavor ingrese un curp";
        } else if (
          !/^([A-Z][AEIOUX][A-Z]{2}\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])[HM](?:AS|B[CS]|C[CLMSH]|D[FG]|G[TR]|HG|JC|M[CNS]|N[ETL]|OC|PL|Q[TR]|S[PLR]|T[CSL]|VZ|YN|ZS)[B-DF-HJ-NP-TV-Z]{3}[A-Z\d])(\d)$/.test(
            values.curp
          )
        ) {
          errors.curp = "ingrese un curp válido";
        }

        // RFC validation
        if (!values.rfc) {
          errors.rfc = "Favor ingrese un rfc";
        } else if (
          !/^([A-Z,Ñ,&]{3,4}([0-9]{2})(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])[A-Z|\d]{3})$/.test(
            values.rfc
          )
        ) {
          errors.rfc = "ingrese un rfc válido";
        }

        // estado civil validation
        if (!values.estadoCivil) {
          errors.estadoCivil = "Favor de ingresar el estado civil";
        } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.estadoCivil)) {
          errors.estadoCivil = "El estado civil solo permite letras y espacios";
        }

        // phonenumber validation
        if (!values.telefono) {
          errors.telefono = "Porfavor ingrese un telefono";
        } else if (
          !/^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/.test(
            values.telefono
          )
        ) {
          errors.telefono = "ingrese un telefono válido";
        }

        // email validation
        if (!values.email) {
          errors.email = "Porfavor ingrese un email";
        } else if (
          !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.email)
        ) {
          errors.email = "ingrese un mail válido";
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
        } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.colonia)) {
          errors.colonia = "EL campo de colonia solo permite letras y espacios";
        }

        // ciudad
        if (!values.ciudad) {
          errors.ciudad = "Favor de ingresar la ciudad";
        } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.ciudad)) {
          errors.ciudad = "EL campo de ciudad solo permite letras y espacios";
        }

        // entidad
        if (!values.entidad) {
          errors.entidad = "Favor de ingresar entidad o estado";
        } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.entidad)) {
          errors.entidad = "Solo se permite letras y espacios en este campo";
        }

        // pais
        if (!values.pais) {
          errors.pais = "Favor de ingresar el pais";
        } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.pais)) {
          errors.pais = "EL campo de pais solo permite letras y espacios";
        }

        return errors;
      }}
      onSubmit={(data) => {
        prevStep(1)
        setTimeout(() => {
          
        }, 3000);
        console.log("Formulario Enviado", data);
        let alert;
        Swal.fire({
          title: 'Registro exitoso',
          icon: 'success',
          showConfirmButton: false,
          timer: 2000,
        })
      }}
    >
      {({
        errors,
        touched,
        handleSubmit,
        values,
        handleChange,
        handleBlur,
      }) => (
        <ContainerForm
          children={
            <form onSubmit={handleSubmit}>
              <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                Representante Legal
              </h6>
              <div className="flex flex-wrap">
                <InputSimple
                  errorMessage={
                    touched.nombre && errors.nombre ? errors.nombre : null
                  }
                  label="nombre"
                  name="nombre"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="text"
                  size="normal"
                  placeholder=""
                  value={values.nombre}
                />
                <InputSimple
                  errorMessage={
                    touched.email && errors.email ? errors.email : null
                  }
                  label="dirección de correo electrónico"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  size="normal"
                  type="email"
                  placeholder=""
                  value={values.email}
                />
                
                <InputSimple
                  errorMessage={
                    touched.fechaNacimiento && errors.fechaNacimiento
                      ? errors.fechaNacimiento
                      : null
                  }
                  label="fecha de nacimiento"
                  name="fechaNacimiento"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="date"
                  size="small"
                  placeholder=""
                  value={values.fechaNacimiento}
                />
                <InputSimple
                  errorMessage={
                    touched.entidadNacimiento && errors.entidadNacimiento
                      ? errors.entidadNacimiento
                      : null
                  }
                  label="entidad de nacimiento"
                  name="entidadNacimiento"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  size="small"
                  type="text"
                  placeholder=""
                  value={values.entidadNacimiento}
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
                  size="small"
                  type="text"
                  placeholder=""
                  value={values.nacionalidad}
                />
                <InputSimple
                  errorMessage={
                    touched.curp && errors.curp ? errors.curp : null
                  }
                  label="curp"
                  name="curp"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="text"
                  size="small"
                  placeholder=""
                  value={values.curp}
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
                    touched.genero && errors.genero ? errors.genero : null
                  }
                  label="genero"
                  name="genero"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="text"
                  size="small"
                  placeholder=""
                  value={values.genero}
                />
                <InputSimple
                  errorMessage={
                    touched.estadoCivil && errors.estadoCivil
                      ? errors.estadoCivil
                      : null
                  }
                  label="estado civil"
                  name="estadoCivil"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="text"
                  size="small"
                  placeholder=""
                  value={values.estadoCivil}
                />
                <InputUpDoc
                  errorMessage={
                    touched.identificacionDoc && touched.identificacionDoc ? errors.identificacionDoc : null
                  }
                  label="Documento de indentificación"
                  name="identificacionDoc"
                  onChange={handleChange}
                  type="file"
                  placeholder="Cargar documento"
                  value={values.identificacionDoc}
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

              <div className="flex justify-between ">
                <Button
                  primary="Regresar"
                  position="start"
                  onClick={prevStep}
                />

                <Button primary="Enviar" position="end" />
              </div>
            </form>
          }
        />
      )}
    </Formik>
  );
};
