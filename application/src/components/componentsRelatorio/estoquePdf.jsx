import pdfMake from 'pdfmake/build/pdfmake'
import pdfFonts from 'pdfmake/build/vfs_fonts'

function estoquePDF(lotes) {
    pdfMake.vfs = pdfFonts.pdfMake.vfs;
    const reportTitle = [
        {
            text: 'Relatorio de mercadorias no estoque',
            fontSize: 25,
            bold: true,
            margin: [15, 20, 0, 45]
        }
    ]

    const dados = lotes.map((lote)=>{
        return [
            { text: lote.id, fontSize: 9, margin: [0,2,0,2] },
            { text: lote.validade, fontSize: 9, margin: [0,2,0,2] },
            { text: lote.unidades, fontSize: 9, margin: [0,2,0,2] },
            { text: lote.mercadoria.estoque_maximo, fontSize: 9, margin: [0,2,0,2] },
            { text: lote.mercadoria.estoque_minimo, fontSize: 9, margin: [0,2,0,2] },
            { text: lote.custo_unidade, fontSize: 9, margin: [0,2,0,2] },
            { text: lote.mercadoria.nome, fontSize: 9, margin: [0,2,0,2] },
            { text: lote.fornecedoreId, fontSize: 9, margin: [0,2,0,2] }
        ]
    });

    const details = [
        {text: 'Listagem de todos os lotes cadastrados até o momento'},
        {
            table:{
                headerRows: 1,
                widths: ['*', '*', '*', '*', '*', '*', '*', '*'],
                body: [
                    [
                        { text: 'Id', style: 'tableHeader', fontSize: 10 },
                        { text: 'Validade', style: 'tableHeader', fontSize: 10 },
                        { text: 'Unidade', style: 'tableHeader', fontSize: 10 },
                        { text: 'Estoque maximo', style: 'tableHeader', fontSize: 10 },
                        { text: 'Estoque minimo', style: 'tableHeader', fontSize: 10 },
                        { text: 'custo/unidade', style: 'tableHeader', fontSize: 10 },
                        { text: 'Mercadoria', style: 'tableHeader', fontSize: 10 },
                        { text: 'id fornecedor', style: 'tableHeader', fontSize: 10 }
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