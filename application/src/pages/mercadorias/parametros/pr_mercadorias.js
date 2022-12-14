import { urlServer } from "../../../serverConfig";

import iconeInfantil from '../../../assets/icon-infantil.png'
import iconeHigiene from '../../../assets/icon-higiene.png'
import iconeCosmeticos from '../../../assets/icon-cosmeticos.png'
import iconeMedicamentos from '../../../assets/icon-medicamentos.png'
import iconeOutros from '../../../assets/icon-outros.png'
import iconeBeleza from '../../../assets/icon-beleza.png'
import iconeSuplemento from '../../../assets/icon-suplemento.png'
import iconeIdoso from '../../../assets/icon-idoso.png'

export const parametrosMercadorias = [
  { id: 1, atributo: 'nome', rotulo: 'Nome', tipo: 'text' },
  { id: 2, atributo: 'codigo', rotulo: 'Código', tipo: 'text' },
  {
    id: 3, atributo: 'departamento', rotulo: 'Departamento', tipo: 'select',
    opcoes: [
      { id: 1, valor: 'MEDICAMENTO' },
      { id: 2, valor: 'SUPLEMENTOS' },
      { id: 3, valor: 'DERMATOLOGICO' },
      { id: 4, valor: 'HIGIENE' },
      { id: 5, valor: 'GERIATRIA' },
      { id: 6, valor: 'INFANTIL' },
      { id: 7, valor: 'BELEZA' },
      { id: 8, valor: 'OUTROS' }
    ]
  },
  {
    id: 4, atributo: 'classificacao', rotulo: 'Classificação', tipo: 'select',
    opcoes: [
      { id: 1, valor: 'LIVRE' },
      { id: 2, valor: 'GENERICO' },
      { id: 3, valor: 'SIMILAR' },
      { id: 4, valor: 'REFERENCIA' },
    ]
  },
  { id: 5, atributo: 'marca', rotulo: 'Marca', tipo: 'text' },
  { id: 6, atributo: 'princ_ativo', rotulo: 'Principio ativo', tipo: 'text' },
  { id: 7, atributo: 'grupoFarmacologico', rotulo: 'Grupos Framacologicos', tipo: 'selectBox', urlFetch: `${urlServer}/gruposFarmacologicos/` },
  {
    id: 8, atributo: 'tarja', rotulo: 'Tarja:', tipo: 'select',
    opcoes: [
      { id: 4, valor: 'SEM TARJA' },
      { id: 1, valor: 'AMARELA' },
      { id: 2, valor: 'VERMELHA' },
      { id: 3, valor: 'PRETA' },
    ]
  },
  {
    id: 9, atributo: 'peresivel', rotulo: 'Peresivel', tipo: 'select',
    opcoes: [
      { id: 1, valor: 'SIM' },
      { id: 2, valor: 'NÃO' },
    ]
  },
  {
    id: 10, atributo: 'temp_armazenamento', rotulo: 'Temperatura de armazenamento', tipo: 'select',
    opcoes: [
      { id: 1, valor: '15° a 30°' },
      { id: 2, valor: '0° a 15°' },
      { id: 3, valor: '-15° a 0°' },
    ]
  },
  { id: 11, atributo: 'registro_ms', rotulo: 'Registro MS', tipo: 'text' },
  { id: 12, atributo: 'estoque_minimo', rotulo: 'Estoque minimo', tipo: 'number' },
  { id: 13, atributo: 'estoque_maximo', rotulo: 'Estoque máximo', tipo: 'number' },
  { id: 14, atributo: 'preco_com_desconto', rotulo: 'Preço s/desconto', tipo: 'number' },
  { id: 15, atributo: 'desconto', rotulo: 'Desconto', tipo: 'number' },
  { id: 16, atributo: 'preco_com_desconto', rotulo: 'Preço c/desconto', tipo: 'number' },
  { id: 17, atributo: 'grupoDesconto', rotulo: 'Grupo de desconto', tipo: 'selectBox', urlFetch: `${urlServer}/grupoDescontos/` },
  { id: 18, atributo: 'comissao', rotulo: 'Percentual de comissão', tipo: 'number' },
  { id: 19, atributo: 'pmc', rotulo: 'PMC', tipo: 'number' },
  { id: 20, atributo: 'descricao', rotulo: 'Descricao', tipo: 'textarea' }
]

export const menuDepartamentos = [
  { id: 1, departamento: 'MEDICAMENTO', rotulo: 'Medicamento', src: iconeMedicamentos, alt: "Ilustração de medicamentos" },
  { id: 2, departamento: 'DERMATOLOGICO', rotulo: 'Dermatologia', src: iconeCosmeticos, alt: "Ilustração de cosmeticos" },
  { id: 3, departamento: 'GERIATRIA', rotulo: 'Geriatria', src: iconeIdoso, alt: "Icone ilustração de um idoso" },
  { id: 4, departamento: 'BELEZA', rotulo: 'Beleza', src: iconeBeleza, alt: "Ilustração de produtos de beleza" },
  { id: 5, departamento: 'SUPLEMENTOS', rotulo: 'Suplementos', src: iconeSuplemento, alt: "Ilustração de suplementos" },
  { id: 6, departamento: 'HIGIENE', rotulo: 'Higiene', src: iconeHigiene, alt: "Ilustração de produtos de higiene" },
  { id: 7, departamento: 'INFANTIL', rotulo: 'Infantil', src: iconeInfantil, alt: "Ilustração produtos infantis" },
  { id: 8, departamento: 'OUTROS', rotulo: 'Outros', src: iconeOutros, alt: "Ilustração outros" }
]