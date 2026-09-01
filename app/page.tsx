import Image from "next/image";
import Link from "next/link";

const officialUrl = "/v2";
const sections = [
  [
    "Quem tem direito ao Gás do Povo em 2026",
    "Tem direito a família inscrita no CadÚnico com renda mensal de até meio salário mínimo por pessoa. Quem recebe Bolsa Família tem prioridade, e o cadastro precisa estar atualizado nos últimos 24 meses.",
  ],
  [
    "Como consultar o Gás do Povo pelo CPF",
    "A consulta é feita pelo CPF do responsável familiar. O sistema informa se o vale está liberado, quantos botijões a família tem e onde o benefício pode ser usado. A consulta é gratuita.",
  ],
  [
    "Quantos botijões por ano cada família recebe",
    "A quantidade varia conforme o tamanho da família registrada no CadÚnico. O saldo não vira dinheiro nem pode ser transferido.",
  ],
  [
    "Onde retirar o botijão do Gás do Povo",
    "A retirada acontece nas revendas credenciadas ao programa. O beneficiário informa o CPF e a troca é feita na hora.",
  ],
  [
    "Gás do Povo e Bolsa Família: como os dois se somam",
    "Receber o Gás do Povo não reduz o valor do Bolsa Família nem de outro benefício social.",
  ],
  [
    "O que fazer quando o CPF não aparece liberado",
    "Verifique a situação do cadastro no CRAS. Os motivos mais comuns são cadastro vencido, mudança de endereço ou alteração familiar não registrada.",
  ],
  [
    "O efeito do vale-gás no orçamento e no crédito da família",
    "Um botijão a menos no orçamento representa uma folga relevante para quem vive com renda curta.",
  ],
  [
    "Cuidados com golpes no Gás do Povo",
    "Nenhum órgão público cobra taxa para liberar o benefício. Mensagens que pedem PIX, dados bancários ou senha são tentativas de golpe.",
  ],
];

export default function Home() {
  return (
    <>
      <header className="tb-hd">
        <div className="tb-hd-in">
          <Link className="tb-hd-brand" href="/">
            <Image
              src="/images/logo-tb-square-512-150x150.webp"
              alt="Tudo Benefícios"
              width={36}
              height={36}
            />
            <span>tudo benefícios</span>
          </Link>
          <nav className="tb-hd-nav" aria-label="Navegação principal">
            <a href="#sobre">Sobre nós</a>
            <a href="#sobre">Política de Privacidade</a>
            <a href="#sobre">Termos de Uso</a>
            <a href="#sobre">Disclaimer</a>
            <a href="#sobre">Contato</a>
          </nav>
        </div>
      </header>
      <div className="tb-lp">
        <div className="tb-lp-hero">
          <main className="tb-lp-card">
            <Link
              className="tb-lp-overlay"
              href={officialUrl}
              aria-label="Consultar vale gás"
            />
            <p className="tb-lp-selo">
              <i aria-hidden />
              Benefício liberado
            </p>
            <div className="tb-lp-marca">
              <Image
                src="/images/logo-gdp-trim.webp"
                alt="Gás do Povo"
                width={712}
                height={659}
                priority
              />
            </div>
            <p className="tb-lp-desc">
              O Gás do Povo garante gás de graça para a sua família. A consulta
              é feita online, é gratuita e leva menos de um minuto.
            </p>
            <hr className="tb-lp-rule" />
            <p className="tb-lp-ask">Consulte agora mesmo!</p>
            <Link className="tb-lp-btn" href={officialUrl}>
              <span>CONSULTAR VALE GÁS</span>
              <span className="tb-lp-arrow" aria-hidden>
                →
              </span>
            </Link>
            <p className="tb-lp-seg">Veja quem tem direito</p>
          </main>
        </div>
      </div>
      <footer className="tb-ft">
        <div className="tb-ft-in">
          <div className="tb-ft-row">
            <div className="tb-ft-brand">
              <Link href="/">
                <Image
                  src="/images/logo-tb-square-512-150x150.webp"
                  alt="Tudo Benefícios"
                  width={34}
                  height={34}
                />
                <span>tudo benefícios</span>
              </Link>
              <p>
                Guia independente sobre benefícios do governo, finanças e vagas
                de emprego. Conteúdo informativo, sem intermediação de cadastro.
              </p>
            </div>
            <nav className="tb-ft-links" aria-label="Páginas institucionais">
              <a href="#sobre">Sobre nós</a>
              <a href="#sobre">Política de Privacidade</a>
              <a href="#sobre">Termos de Uso</a>
              <a href="#sobre">Disclaimer</a>
              <a href="#sobre">Contato</a>
            </nav>
          </div>
          <p className="tb-ft-copy">
            © 2026 tudo benefícios. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </>
  );
}
