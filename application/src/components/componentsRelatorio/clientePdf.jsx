import pdfMake from 'pdfmake/build/pdfmake'
import pdfFonts from 'pdfmake/build/vfs_fonts'

function clientePDF(clientes) {
    pdfMake.vfs = pdfFonts.pdfMake.vfs;
    const reportTitle = [
        {
            text: 'Relatório de Clientes',
            fontSize: 25,
            bold: true,
            margin: [15, 20, 0, 45]
        }
    ]

    const dados = clientes.map((cliente)=>{
        return [
            { text: cliente.id, fontSize: 7, margin: [0,2,0,2] },
            { text: cliente.nome, fontSize: 7, margin: [0,2,0,2] },
            { text: cliente.cpf, fontSize: 7, margin: [0,2,0,2] },
            { text: cliente.dt_nascimento, fontSize: 7, margin: [0,2,0,2] },
            { text: cliente.telefone, fontSize: 7, margin: [0,2,0,2] },
            { text: cliente.email, fontSize: 7, margin: [0,2,0,2]  }
        ]
    });

    const details = [
        {text: 'Listagem de clientes'},
        {
            table:{
                headerRows: 1,
                widths: ['*', '*', '*', '*', '*', '*'],
                body: [
                    [
                        { text: 'Id', style: 'tableHeader', fontSize: 10 },
                        { text: 'Nome', style: 'tableHeader', fontSize: 10 },
                        { text: 'CPF', style: 'tableHeader', fontSize: 10 },
                        { text: 'Dt_nascimento', style: 'tableHeader', fontSize: 10 },
                        { text: 'Telefone', style: 'tableHeader', fontSize: 10 },
                        { text: 'email', style: 'tableHeader', fontSize: 10 }
                    ],
                    ...dados
                ]
            },
            layout: 'lightHorizontalLines'
        }
    ];

    function Footer(currentPage, pageCount) {
        return [{
            text: currentPage + '/' + pageCount,
            aligment: 'center',
            fontSize: 9,
            margin: [300, 0, 0, 0]
        }]
    }

    const docDefinitions = {
        pageSize: 'A4',
        pageMargins: [15, 50, 15, 40],
        header: [reportTitle],
        content: [details],
        footer: Footer
    }

    pdfMake.createPdf(docDefinitions).download();
}
export default clientePDF