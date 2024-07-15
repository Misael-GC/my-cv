import React, { Component, createRef } from 'react';

class PDF extends Component {
    enlaceDescargarPdfRef = createRef();

    componentDidMount() {
        // Intentar abrir el enlace automáticamente si el dispositivo es móvil
        if (typeof window.orientation !== "undefined" && this.enlaceDescargarPdfRef.current) {
            this.enlaceDescargarPdfRef.current.click();
        }
    }

    render() {
        const pdfUrl = '../../../public/CV Act.pdf'; // Ruta relativa al PDF dentro de tu proyecto

        return (
            <div className='mt-[87px]' style={{ position: 'absolute', width: '100%', height: '100%'}}>
                <object
                    data={pdfUrl}
                    type="application/pdf"
                    width="100%"
                    height="100%"
                >
                    <br />
                    <a 
                        href={pdfUrl} 
                        id="enlaceDescargarPdf"
                        download="CV Act.pdf"
                        ref={this.enlaceDescargarPdfRef}
                    >
                        Tu dispositivo no puede visualizar los PDF, da click aquí para descargarlo
                    </a>
                </object>
            </div>
        );
    }
}

export default PDF;
