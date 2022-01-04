import { InputSimple } from "../InputSimple";
import { InputUpDoc } from "../InputUpDoc";
import { Formik, FormikErrors } from "formik";

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
    calle: "",
    ext: "",
    int: "",
    zipcode: "",
    colonia: "",
    ciudad: "",
    entidad: "",
    pais: "",
    clabe: "",
    banco: ""
  };

  return (
    <Formik
      initialValues={initialValues}
      validate={(values) => {
        let errors: FormikErrors<MyFormValues> = {};

        if (!values.razonSocial) {
          errors.razonSocial = "Favor de ingresar la razón social";
        } else if (
          !/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.razonSocial)
        ) {
          errors.razonSocial = "La razon social solo permite letras y espacios";
        }
        if (!values.nombreComercial) {
          errors.nombreComercial = "Favor de ingresar el nombre comercial";
        } else if (
          !/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.nombreComercial)
        ) {
          errors.nombreComercial = "El nombre comercial solo permite letras y espacios";
        }
        if (!values.nacionalidad) {
          errors.nacionalidad = "Favor de ingresar a nacionalidad";
        } else if (
          !/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.nacionalidad)
        ) {
          errors.nacionalidad = "La nacionalidad solo permite letras y espacios";
        }
        if (!values.regimenFiscal) {
          errors.regimenFiscal = "Favor de ingresar el regimen fiscal";
        } else if (
          !/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.regimenFiscal)
        ) {
          errors.regimenFiscal = "El regimen fiscal solo permite letras y espacios";
        }

        // indusrty validation
        if (!values.industria) {
          errors.industria = "Favor de ingresar la industria";
        } else if (
          !/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.industria)
        ) {
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
        handleBlur,
      }) => (
        <section className="py-1">
          <div className="w-full lg:w-8/12 px-4 mx-auto mt-6">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white/90 border-0">
              <div className="rounded-t bg-white mb-0 px-6 py-6">
                <div className="text-center flex justify-between">
                  <h6 className="text-blue-900 text-xl font-bold">
                    Registro de Usuario
                  </h6>
                </div>
              </div>
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <form onSubmit={handleSubmit}>
                  <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
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
                      placeholder="Juan Perez"
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
                      size="normal"
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
                      placeholder="Juan Perez"
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
                      errorMessage={
                        touched.rfc && errors.rfc ? errors.rfc : null
                      }
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
                        touched.telefono && errors.telefono
                          ? errors.telefono
                          : null
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
                      touched.calle  && touched.calle ? errors.calle : null 
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
                    errorMessage={ 
                      touched.ext  && touched.ext ? errors.ext : null 
                    }
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
                    errorMessage={ 
                      touched.int  && touched.int ? errors.int : null 
                    }
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
                      touched.zipcode  && touched.zipcode ? errors.zipcode : null 
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
                      touched.colonia  && touched.colonia ? errors.colonia : null 
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
                      touched.ciudad  && touched.ciudad ? errors.ciudad : null 
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
                      touched.entidad  && touched.entidad ? errors.entidad : null 
                    }
                    label="Entidad Federativa o Estado"
                    name="entidad"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    size="medium"
                    type="text"
                    placeholder=""
                    value={values.entidad}
                    />
                    <InputSimple
                    errorMessage={ 
                      touched.pais  && touched.pais ? errors.pais : null 
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

                    <InputSimple
                    errorMessage={ 
                      touched.clabe  && touched.clabe ? errors.clabe : null 
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
                      touched.banco  && touched.banco ? errors.banco : null 
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
                    
                    <InputUpDoc />
                    
                    <div className="w-full lg:w-12/12 px-4">
                      <div className="relative w-full mb-3">
                        <button
                          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                          type="submit"
                        >
                          Enviar
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      )}
    </Formik>
  );
};
