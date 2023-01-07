import pdfMake from 'pdfmake/build/pdfmake'
import pdfFonts from 'pdfmake/build/vfs_fonts'

function fornecedorPDF(fornecedores) {
    pdfMake.vfs = pdfFonts.pdfMake.vfs;
    const reportTitle = [
        {
            text: 'Relatório de fornecedores',
            fontSize: 25,
            bold: true,
            margin: [15, 20, 0, 45]
        }
    ]

    const dados = fornecedores.map((fornecedor)=>{
        return [
            { text: fornecedor.id, fontSize: 5, margin: [0,2,0,2] },
            { text: fornecedor.nome, fontSize: 5, margin: [0,2,0,2] },
            { text: fornecedor.cnpj, fontSize: 5, margin: [0,2,0,2] },
            { text: fornecedor.cep, fontSize: 5, margin: [0,2,0,2] },
            { text: fornecedor.cidade, fontSize: 5, margin: [0,2,0,2] },
            { text: fornecedor.uf, fontSize: 5, margin: [0,2,0,2]  },
            { text: fornecedor.bairro, fontSize: 5, margin: [0,2,0,2] },
            { text: fornecedor.logradouro, fontSize: 5, margin: [0,2,0,2]  },
            { text: fornecedor.numero, fontSize: 5, margin: [0,2,0,2] },
            { text: fornecedor.complemento, fontSize: 5, margin: [0,2,0,2]  },
            { text: fornecedor.telefone_um, fontSize: 5, margin: [0,2,0,2] },
            { text: fornecedor.telefone_dois, fontSize: 5, margin: [0,2,0,2]  },
            { text: fornecedor.email, fontSize: 5, margin: [0,2,0,2]  }
        ]
    });

    const details = [
        {text: 'Listagem de fornecedores'},
        {
            table:{
                headerRows: 1,
                widths: ['*', '*', '*', '*', '*', '*','*', '*', '*', '*', '*', '*','*'],
                body: [
                    [
                        { text: 'Id', style: 'tableHeader', fontSize: 6 },
                        { text: 'Nome', style: 'tableHeader', fontSize: 6 },
                        { text: 'CNPJ', style: 'tableHeader', fontSize: 6 },
                        { text: 'CEP', style: 'tableHeader', fontSize: 6 },
                        { text: 'Cidade', style: 'tableHeader', fontSize: 6 },
                        { text: 'UF', style: 'tableHeader', fontSize: 6 },
                        { text: 'Bairro', style: 'tableHeader', fontSize: 6 },
                        { text: 'logradouro', style: 'tableHeader', fontSize: 6 },
                        { text: 'numero', style: 'tableHeader', fontSize: 6 },
                        { text: 'complemento', style: 'tableHeader', fontSize: 6 },
                        { text: 'telefone_um', style: 'tableHeader', fontSize: 6 },
                        { text: 'telefone_dois', style: 'tableHeader', fontSize: 6 },
                        { text: 'email', style: 'tableHeader', fontSize: 6 } 
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
export default fornecedorPDF