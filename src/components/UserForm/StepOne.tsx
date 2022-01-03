import { InputSimple } from "../InputSimple";
import { InputUpDoc } from "../InputUpDoc";
import { Form, Formik, FormikErrors } from "formik";
import { MultiInputAddress } from "../MultiInputAddress";

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
    email: "jojojo",
  };

  return (
    <Formik
      initialValues={initialValues}
      validate={(values) => {
        let errors: FormikErrors<MyFormValues> = {};
        if (
          !values.razonSocial ||
          !values.nacionalidad ||
          !values.regimenFiscal ||
          !values.industria ||
          !values.nombreComercial
        ) {
          errors.razonSocial = "El";
          errors.nacionalidad = "Campo obligatorio *";
          errors.regimenFiscal = "Campo obligatorio *";
          errors.industria = "Campo obligatorio *";
          errors.nombreComercial = "Campo obligatorio *";
        } else if (
          !/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(
            values.razonSocial &&
              values.nacionalidad &&
              values.regimenFiscal &&
              values.industria &&
              values.nombreComercial
          )
        ) {
          errors.razonSocial = "SOlo se permiten letras y espacios";
          errors.nacionalidad = "SOlo se permiten letras y espacios";
          errors.regimenFiscal = "SOlo se permiten letras y espacios";
          errors.industria = "SOlo se permiten letras y espacios";
          errors.nombreComercial = "SOlo se permiten letras y espacios";
        }

        // email validation
        if (!values.email) {
          errors.email = "Porfavor ingrese un email";
        } else if (
          !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.email)
        ) {
          errors.email = "ingrese un mail válido";
        }

        if (!values.rfc) {
          errors.rfc = "Porfavor ingrese un rfc";
        } else if (
          !/^([A-Z,Ñ,&]{3,4}([0-9]{2})(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])[A-Z|\d]{3})$/.test(
            values.rfc
          )
        ) {
          errors.rfc = "ingrese un rfc válido";
        }
        if (!values.telefono) {
          errors.telefono = "Porfavor ingrese un telefono";
        } else if (
          !/^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/.test(
            values.telefono
          )
        ) {
          errors.telefono = "ingrese un telefono válido";
        }
        if (!values.fechaConstitucion) {
          errors.fechaConstitucion = "Porfavor ingrese una fecha";
        }
        return errors;
      }}
      onSubmit={(data) => {
        nextStep();
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
          <div className="w-full lg:w-10/12 px-4 mx-auto mt-6">
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
                      size="small"
                      placeholder="Juan Perez"
                      value={values.nombreComercial}
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
                      size="short"
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
                      size="short"
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
                      size="short"
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
                        touched.email && errors.email ? errors.email : null
                      }
                      label="dirección de correo electrónico"
                      name="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      size="small"
                      type="email"
                      placeholder="juan@perezmail.com"
                      value={values.email}
                    />
                    <MultiInputAddress
                      data={[
                        {
                          error: (`${touched.email && errors.email ? errors.email : null}`),
                          name: (`${values.email}`),
                          label: (`${values.email}`),
                          value: (`${values.email}`),
                          placeholder: (`${values.email}`),
                          type: "text",
                          size: "normal",
                        },
                        {
                          name: "calle",
                          label: "Calle o Avenida",
                          value: "calle",
                          placeholder: "michael",
                          type: "text",
                          size: "normal",
                        },
                        {
                          name: "calle",
                          label: "Calle o Avenida",
                          value: "calle",
                          placeholder: "michael",
                          type: "text",
                          size: "normal",
                        },
                        {
                          name: "calle",
                          label: "Calle o Avenida",
                          value: "calle",
                          placeholder: "michael",
                          type: "text",
                          size: "normal",
                        },
                        {
                          name: "calle",
                          label: "Calle o Avenida",
                          value: "calle",
                          placeholder: "michael",
                          type: "text",
                          size: "normal",
                        },
                        {
                          name: "calle",
                          label: "Calle o Avenida",
                          value: "calle",
                          placeholder: "michael",
                          type: "text",
                          size: "normal",
                        },
                        {
                          name: "calle",
                          label: (`${values.email}`),
                          value: "calle",
                          placeholder: "michael",
                          type: "text",
                          size: "normal",
                        },
                        {
                          name: "calle",
                          label: "Calle o Avenida",
                          value: "calle",
                          placeholder: "michael",
                          type: "text",
                          size: "normal",
                        },
                      ]}
                      onChange={handleChange}
                      errorMessage={
                        touched.email && errors.email ? errors.email : null
                      }
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
