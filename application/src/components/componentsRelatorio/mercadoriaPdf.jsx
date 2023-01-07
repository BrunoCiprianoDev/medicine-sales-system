import pdfMake from 'pdfmake/build/pdfmake'
import pdfFonts from 'pdfmake/build/vfs_fonts'

function mercadoriasPDF(lotes) {
    pdfMake.vfs = pdfFonts.pdfMake.vfs;
    const reportTitle = [
        {
            text: 'Mercadorias',
            fontSize: 25,
            bold: true,
            margin: [15, 20, 0, 45]
        }
    ]

    const dados = lotes.map((lote)=>{
        return [
            { text: lote.id, fontSize: 5, margin: [0,2,0,2] },
            { text: lote.codigo, fontSize: 5, margin: [0,2,0,2] },
            { text: lote.classificacao, fontSize: 5, margin: [0,2,0,2] },
            { text: lote.marca, fontSize: 5, margin: [0,2,0,2] },
            { text: lote.princ_ativo, fontSize: 5, margin: [0,2,0,2]  },
            { text: lote.grupoFarmacologico, fontSize: 5, margin: [0,2,0,2] },
            { text: lote.tarja, fontSize: 5, margin: [0,2,0,2] },
            { text: lote.estoque_minimo, fontSize: 5, margin: [0,2,0,2]  },
            { text: lote.estoque_maximo, fontSize: 5, margin: [0,2,0,2] },
            { text: lote.valor_venda, fontSize: 5, margin: [0,2,0,2] }
        ]
    });

    const details = [
        {text: 'Listagem de todas mercadorias cadastradas no sistema'},
        {
            table:{
                headerRows: 1,
                widths: ['*', '*', '*', '*', '*', '*','*', '*', '*', '*'],
                body: [
                    [
                        { text: 'Id', style: 'tableHeader', fontSize: 6 },
                        { text: 'Nome', style: 'tableHeader', fontSize: 6 },
                        { text: 'Departamento', style: 'tableHeader', fontSize: 6 },
                        { text: 'Classificação', style: 'tableHeader', fontSize: 6 },
                        { text: 'Marca', style: 'tableHeader', fontSize: 6},
                        { text: 'Princ_ativo', style: 'tableHeader', fontSize: 6 },
                        { text: 'tarja', style: 'tableHeader', fontSize: 6 },
                        { text: 'estoque_max', style: 'tableHeader', fontSize: 6 },
                        { text: 'estoque_min', style: 'tableHeader', fontSize: 6 },
                        { text: 'Preço', style: 'tableHeader', fontSize: 5 }
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
export default mercadoriasPDF