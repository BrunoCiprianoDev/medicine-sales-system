import pdfMake from 'pdfmake/build/pdfmake'
import pdfFonts from 'pdfmake/build/vfs_fonts'

function funcionarioPDF(funcionarios) {

    pdfMake.vfs = pdfFonts.pdfMake.vfs;

    const reportTitle = [
        {
            text: 'Relatório de funcionarios',
            fontSize: 25,
            bold: true,
            margin: [15, 20, 0, 45]
        }
    ]

    const dados = funcionarios.map((funcionario)=>{
        return [
            { text: funcionario.id, fontSize: 7, margin: [0,2,0,2] },
            { text: funcionario.nome, fontSize: 7, margin: [0,2,0,2] },
            { text: funcionario.cpf, fontSize: 7, margin: [0,2,0,2] },
            { text: funcionario.dt_nascimento, fontSize: 7, margin: [0,2,0,2] },
            { text: funcionario.funcao, fontSize: 7, margin: [0,2,0,2] },
            { text: funcionario.email, fontSize: 7, margin: [0,2,0,2]  }
        ]
    });

    const details = [
        {text: 'Listagem de funcionarios'},
        {
            table:{
                headerRows: 1,
                widths: ['*', '*', '*', '*', '*', '*', '*'],
                body: [
                    [
                        { text: 'Id', style: 'tableHeader', fontSize: 10 },
                        { text: 'Nome', style: 'tableHeader', fontSize: 10 },
                        { text: 'CPF', style: 'tableHeader', fontSize: 10 },
                        { text: 'Dt_nascimento', style: 'tableHeader', fontSize: 10 },
                        { text: 'Função', style: 'tableHeader', fontSize: 10 },
                        { text: 'E-mail', style: 'tableHeader', fontSize: 10 }
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
export default funcionarioPDF