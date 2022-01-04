interface ContainerFormProperties {
    children?: React.ReactNode;
}

export const ContainerForm = ({children}: ContainerFormProperties) => {
    return (
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
                {children}
              </div>
            </div>
          </div>
        </section>
    )
}