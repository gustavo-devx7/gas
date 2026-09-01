"use client";

import Image from "next/image";
import { useState } from "react";
import { officialUrl } from "../config";
const faqs = [
  ["Quem recebe Bolsa Família tem direito automático?", <>Famílias do <strong>Bolsa Família</strong> entram primeiro na fila. Confira se o CadÚnico está atualizado para não travar a emissão do vale.</>],
  ["Posso receber o Gás do Povo se já recebo BPC?", <>Sim. O benefício é <strong>cumulativo</strong> com BPC/LOAS, Bolsa Família, Tarifa Social de Energia e outros programas.</>],
  ["O benefício vem em dinheiro na conta?", <>Não. 0 um <strong>vale eletrônico</strong> para um botijão de 13 kg em revenda credenciada. Não há depósito ou saque.</>],
  ["O vale tem prazo para ser usado?", <>Não.</>],
  ["E se a revenda se recusar a aceitar o vale?", <>Registre a reclamação nas centrais 121 (MDS) ou 111 (Caixa) e procure outro ponto participante.</>],
  ["Quem tem CadÚnico ativo tem acesso a outros benefícios financeiros?", <>Sim: Bolsa Família, BPC/LOAS, Tarifa Social, Pé-de-Meia, Minha Casa Minha Vida e outros.</>],
] as const;

function OfficialButton() {
  return <div className="cta"><a href="/v3" className="official-button" aria-label="Consultar meu benefício no site oficial do Gás do Povo">CONSULTAR NO SITE OFICIAL <span aria-hidden>→</span></a><small>Você será redirecionado para o site oficial</small></div>;
}

function Figure({ src, alt, caption }: { src: string; alt: string; caption: string }) {
  return <figure className="feature-figure"><Image src={src} alt={alt} width={680} height={453} /><figcaption>{caption}</figcaption></figure>;
}

function Header() {
  const [open, setOpen] = useState(false);
  return <header className="site-header"><div className="header-inner"><a className="brand" href="/"><Image src="/images/logo-tb-square-512-150x150.webp" alt="" width={36} height={36} /><span>tudo benefícios</span></a><button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Abrir menu"><i /><i /><i /></button><nav className={open ? "nav open" : "nav"}><a href={officialUrl}>Sobre nós</a><a href={officialUrl}>Política de Privacidade</a><a href={officialUrl}>Termos de Uso</a><a href={officialUrl}>Disclaimer</a><a href={officialUrl}>Contato</a></nav></div></header>;
}

export default function Home() {
  return <><Header /><main className="post"><header className="post-head"><p className="eyebrow">BENEFÍCIOS DO GOVERNO</p><h1>Como se cadastrar no Gás do Povo</h1><p className="lead">Veja quem tem direito, quantos botijões sua família recebe e como retirar o vale no portal oficial.</p></header><article>
    <p>O <strong>Gás do Povo</strong> chegou para tirar o peso do botijão do orçamento de quem ganha pouco. Neste guia você vê o que é o programa, quem tem direito, quantos botijões a sua família recebe, como retirar na revenda e o cuidado que evita perder o vale.</p>
    <h2>O que é o Gás do Povo</h2><Figure src="/images/header-gdp.webp" alt="Botijões de 13 kg e a logomarca do programa Gás do Povo" caption="O vale dá direito ao botijão de 13 kg cheio ou a dinheiro" /><p>O Gás do Povo é um programa social do <strong>Ministério do Desenvolvimento Social (MDS)</strong> que garante o <strong>botijão de gás de 13 kg gratuito</strong> para famílias brasileiras. A família troca o vale por um botijão cheio na revenda credenciada, sem pagar nada.</p>
    <h2>Como funciona o vale</h2><p>Antes de ir à revenda, vale entender a mecânica do benefício:</p><ul><li><strong>Formato:</strong> vale eletrônico, não depósito em dinheiro.</li><li><strong>Valor:</strong> cobre o botijão de 13 kg cheio.</li><li><strong>Onde usar:</strong> em qualquer revenda credenciada.</li><li><strong>Repetição:</strong> o vale volta ao longo do ano; você pode aumentar o prazo do vale.</li></ul>
    <h2>Quem tem direito ao Gás do Povo</h2><p>Os critérios são aplicados por cruzamento automático com a base do Governo:</p><ul><li>Renda mensal por pessoa de <strong>até 3 (três) salários mínimos</strong>.</li><li>Quem já recebia o Auxílio Gás migra automaticamente.</li></ul><OfficialButton />
    <h2>Quantos botijões sua família recebe</h2><ul><li><strong>1 ou 2 pessoas:</strong> até 3 botijões por ano.</li><li><strong>3 pessoas:</strong> até 4 botijões por ano.</li><li><strong>4 pessoas ou mais:</strong> até 6 botijões por ano.</li></ul>
    <h2>Dúvidas frequentes sobre o Gás do Povo</h2>{faqs.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}
    <Related />
  </article></main><Footer /></>;
}

function Related() { const cards = [["/images/Capa-Botijao-768x512.webp", "Gás do Povo: veja se a sua família tem direito"], ["/images/CONSULTA-CPF-SERASA-1024x682-1-768x512.webp", "Consulte seu CPF e score de graça no Serasa"], ["/images/cdi-p2-featured-v2-300x200.webp", "Como solicitar a Carteira do Idoso"]]; return <section className="related"><h2>Veja também</h2><div className="related-grid">{cards.map(([image, title]) => <a href={officialUrl} key={title}><Image src={image} alt="" width={300} height={200} /><span>{title}<small>BENEFÍCIOS</small></span></a>)}</div></section>; }
function Footer() { return <footer><div className="footer-grid"><div><a className="footer-brand" href="/">tudo benefícios</a><p>Guia independente sobre benefícios do governo, finanças e vagas de emprego.</p></div><nav><strong>Editorias</strong><a href="/">Benefícios</a><a href="/">Empregos</a><a href="/">Finanças</a></nav><nav><strong>Institucional</strong><a href="/">Sobre nós</a><a href="/">Privacidade</a><a href="/">Termos de Uso</a><a href="/">Contato</a></nav></div><div className="footer-bar">© 2026 tudo benefícios. Todos os direitos reservados.</div></footer>; }

