import pdfMake from 'pdfmake/build/pdfmake'
import pdfFonts from 'pdfmake/build/vfs_fonts'

function estoquePDF(devolucoes) {
    pdfMake.vfs = pdfFonts.pdfMake.vfs;
    const reportTitle = [
        {
            text: 'Relatorio de mercadorias no estoque',
            fontSize: 25,
            bold: true,
            margin: [15, 20, 0, 45]
        }
    ]

    const dados = devolucoes.map((devolucao)=>{
        return [
            { text: devolucao.id, fontSize: 9, margin: [0,2,0,2] },
            { text: devolucao.unidades, fontSize: 9, margin: [0,2,0,2] },
            { text: devolucao.valorDevolvido, fontSize: 9, margin: [0,2,0,2] },
            { text: devolucao.vendaId, fontSize: 9, margin: [0,2,0,2] },
            { text: devolucao.mercadoria.nome, fontSize: 9, margin: [0,2,0,2]  }
        ]
    });

    const details = [
        {text: 'Listagem de devoluções realizadas'},
        {
            table:{
                headerRows: 1,
                widths: ['*', '*', '*', '*', '*'],
                body: [
                    [
                        { text: 'Id', style: 'tableHeader', fontSize: 10 },
                        { text: 'Unidades', style: 'tableHeader', fontSize: 10 },
                        { text: 'Valor estornado', style: 'tableHeader', fontSize: 10 },
                        { text: 'Id venda', style: 'tableHeader', fontSize: 10 },
                        { text: 'Mercadoria', style: 'tableHeader', fontSize: 10 },
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
export default estoquePDF