import Image from "next/image";
import Link from "next/link";

const officialUrl = "/v2";

export default function Home() {
  return (
    <>
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
                width={412}
                height={359}
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
    </>
  );
}
