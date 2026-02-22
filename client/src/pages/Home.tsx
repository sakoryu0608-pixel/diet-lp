import { useState, useEffect } from "react";

// Image URLs from original site
const IMG = {
  fv: "https://diet-seikotu-seitai.com/08/wp-content/uploads/2025/05/bivari-karasuma-fv3.webp",
  topic: "https://diet-seikotu-seitai.com/08/wp-content/uploads/2025/04/vibari-topic.webp",
  hpb200: "https://diet-seikotu-seitai.com/02/wp-content/uploads/2025/06/katagihara-hpb200.webp",
  openOffer: "https://diet-seikotu-seitai.com/08/wp-content/uploads/2025/04/bivari-open-offer.webp",
  hpb: "https://diet-seikotu-seitai.com/02/wp-content/uploads/2025/06/katagihara-hpb2.webp",
  lineBtn: "https://diet-seikotu-seitai.com/sample/wp-content/uploads/2024/02/diet7-line-btn.webp",
  present1: "https://diet-seikotu-seitai.com/08/wp-content/uploads/2025/05/bivari-3present-1.webp",
  present2: "https://diet-seikotu-seitai.com/08/wp-content/uploads/2025/05/bivari-3present-2.webp",
  present3: "https://diet-seikotu-seitai.com/08/wp-content/uploads/2025/05/bivari-3present-3.webp",
  present4: "https://diet-seikotu-seitai.com/08/wp-content/uploads/2025/05/bivari-3present-4.webp",
  step1: "https://diet-seikotu-seitai.com/sample/wp-content/uploads/2024/02/diet7-3step1.webp",
  step2: "https://diet-seikotu-seitai.com/sample/wp-content/uploads/2024/02/diet7-3step2.webp",
  step3: "https://diet-seikotu-seitai.com/sample/wp-content/uploads/2024/02/diet7-3step3.webp",
  drKatagihara2: "https://diet-seikotu-seitai.com/02/wp-content/uploads/2024/08/mr-katagihara-2.webp",
  geneticLevel: "https://diet-seikotu-seitai.com/08/wp-content/uploads/2025/05/genetic-level.webp",
  diet95: "https://diet-seikotu-seitai.com/08/wp-content/uploads/2025/05/diet95.webp",
  rebound95: "https://diet-seikotu-seitai.com/08/wp-content/uploads/2025/05/rebound95.webp",
  oldAge: "https://diet-seikotu-seitai.com/08/wp-content/uploads/2025/05/old-age.webp",
  wakuwaku: "https://diet-seikotu-seitai.com/sample/wp-content/uploads/2024/02/diet7-wakuwaku-img1-1.webp",
  drKatagihara3: "https://diet-seikotu-seitai.com/02/wp-content/uploads/2024/08/mr-katagihara-3.webp",
  drBa: "https://diet-seikotu-seitai.com/02/wp-content/uploads/2024/09/katagihara-dr-ba.webp",
  approach1: "https://diet-seikotu-seitai.com/sample/wp-content/uploads/2024/02/diet7-approach1.webp",
  approach2: "https://diet-seikotu-seitai.com/sample/wp-content/uploads/2024/02/diet7-approach2.webp",
  approach2_3: "https://diet-seikotu-seitai.com/sample/wp-content/uploads/2024/02/diet7-approach2-3.webp",
  approach3: "https://diet-seikotu-seitai.com/sample/wp-content/uploads/2024/02/diet7-approach3.webp",
  woman3: "https://diet-seikotu-seitai.com/08/wp-content/uploads/2025/05/woman3.webp",
  counseling: "https://diet-seikotu-seitai.com/sample/wp-content/uploads/2024/02/counseling.webp",
  flow1: "https://diet-seikotu-seitai.com/sample/wp-content/uploads/2024/02/diet7-flow1-2.webp",
  flow2: "https://diet-seikotu-seitai.com/sample/wp-content/uploads/2024/02/diet7-flow2.webp",
  flow3: "https://diet-seikotu-seitai.com/sample/wp-content/uploads/2024/02/diet7-flow3.webp",
  flow4: "https://diet-seikotu-seitai.com/sample/wp-content/uploads/2024/02/diet7-flow4.webp",
  flow5: "https://diet-seikotu-seitai.com/sample/wp-content/uploads/2024/02/diet7-flow5.webp",
  flow6: "https://diet-seikotu-seitai.com/sample/wp-content/uploads/2024/02/diet7-flow6.webp",
  footBtn: "https://diet-seikotu-seitai.com/sample/wp-content/uploads/2024/02/diet7-foot-btn.webp",
  // Before/After
  before1: "https://diet-seikotu-seitai.com/02/wp-content/uploads/2024/03/1before.webp",
  after1: "https://diet-seikotu-seitai.com/02/wp-content/uploads/2024/03/1after.webp",
  before3: "https://diet-seikotu-seitai.com/02/wp-content/uploads/2024/03/3before.webp",
  after3: "https://diet-seikotu-seitai.com/02/wp-content/uploads/2024/03/3after.webp",
  before4: "https://diet-seikotu-seitai.com/02/wp-content/uploads/2024/03/4before.webp",
  after4: "https://diet-seikotu-seitai.com/02/wp-content/uploads/2024/03/4after.webp",
  before5: "https://diet-seikotu-seitai.com/02/wp-content/uploads/2024/03/5before.webp",
  after5: "https://diet-seikotu-seitai.com/02/wp-content/uploads/2024/03/5after.webp",
  before2: "https://diet-seikotu-seitai.com/02/wp-content/uploads/2024/03/2before.webp",
  after2: "https://diet-seikotu-seitai.com/02/wp-content/uploads/2024/03/2after.webp",
  before6: "https://diet-seikotu-seitai.com/02/wp-content/uploads/2024/03/6before.webp",
  after6: "https://diet-seikotu-seitai.com/02/wp-content/uploads/2024/03/6after.webp",
};

const LINE_URL = "https://liff.line.me/1657543912-RMJdJXbp/landing?follow=@798ddeqo&lp=BkHwlk&liff_id=1657543912-RMJdJXbp";
const HPB_URL = "https://beauty.hotpepper.jp/kr/slnH000752318/?vos=nhpkbiga20090420001";

// CTA Buttons component
function CtaButtons() {
  return (
    <div className="cta-buttons">
      <div className="campaign">
        <img src={IMG.openOffer} alt="期間限定オープンキャンペーン！美容痩身整体xカウンセリング 500円" loading="lazy" />
      </div>
      <div className="line-btn m30-t">
        <a href={HPB_URL} target="_blank" rel="noopener noreferrer">
          <img src={IMG.hpb} alt="ホットペッパービューティー" loading="lazy" />
        </a>
      </div>
      <div className="line-btn">
        <a href={LINE_URL} target="_blank" rel="noopener noreferrer">
          <img src={IMG.lineBtn} alt="LINEで予約する" loading="lazy" />
        </a>
      </div>
      <div className="line-bn-katagihara">
        <a href={LINE_URL} target="_blank" rel="noopener noreferrer">
          <img src={IMG.present1} alt="豪華3大特典プレゼント" loading="lazy" />
        </a>
      </div>
    </div>
  );
}

// Modal component for before/after images
function ImageModal({ id, src, alt }: { id: string; src: string; alt: string }) {
  return (
    <div className="modal" id={id}>
      <a href="#!" className="overlay" aria-label="閉じる"></a>
      <div className="modal-wrapper">
        <div className="modal-contents">
          <a href="#!" className="modal-close">✕</a>
          <div className="modal-content">
            <img src={src} alt={alt} />
          </div>
        </div>
      </div>
    </div>
  );
}

// Customer case component
function CustomerCase({
  num,
  beforeImg,
  afterImg,
  weight,
  course,
  age,
  comment,
  highlightText,
}: {
  num: number;
  beforeImg: string;
  afterImg: string;
  weight: string;
  course: string;
  age: string;
  comment: string;
  highlightText: string;
}) {
  const bId1 = `modal${num}-1`;
  const bId2 = `modal${num}-2`;
  return (
    <li>
      <div className="customer-ba">
        <div className="customer-ba-img">
          <div className="modal-open">
            <a href={`#${bId1}`}><img src={beforeImg} alt="before" /></a>
          </div>
          <ImageModal id={bId1} src={beforeImg} alt="before" />
        </div>
        <div className="customer-ba-img">
          <div className="modal-open">
            <a href={`#${bId2}`}><img src={afterImg} alt="after" /></a>
          </div>
          <ImageModal id={bId2} src={afterImg} alt="after" />
          <div className="customer-ba-img-value customer-ba-img-value-after">
            <p className="unit">{weight}</p>
          </div>
        </div>
      </div>
      <div className="customer-report">
        <p className="customer-report-ttl">{course}</p>
        <p className="customer-report-name">{age}</p>
      </div>
      <div className="customer-report-detail">
        <p dangerouslySetInnerHTML={{ __html: comment.replace(highlightText, `<span>${highlightText}</span>`) }} />
        <p className="customer-report-note">※ 効果には個人差があります。</p>
      </div>
    </li>
  );
}

// Flow step component
function FlowStep({ title, img, desc, showTriangle = true }: { title: string; img: string; desc: string; showTriangle?: boolean }) {
  return (
    <li>
      <h3>{title}</h3>
      <img src={img} alt={title} loading="lazy" />
      <p>{desc}</p>
      {showTriangle && (
        <>
          <div className="flow-triangle-shadow">
            <div className="flow-triangle"></div>
          </div>
          <div className="flow-triangle-shadow-cover"></div>
        </>
      )}
    </li>
  );
}

// FAQ item
function FaqItem({ question, answer }: { question: string; answer: string }) {
  return (
    <details>
      <summary>{question}</summary>
      <p dangerouslySetInnerHTML={{ __html: answer }} />
    </details>
  );
}

export default function Home() {
  const [showCta, setShowCta] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowCta(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="lp-wrapper">
      {/* Header */}
      <div className="h1_title">
        <h1>美VARI Beauty Salon 四条烏丸整体院｜ダイエット</h1>
      </div>

      <div className="lp-content">
        {/* FV */}
        <img src={IMG.fv} alt="運動なし-8kgへの近道" className="m0-b" />
        <img src={IMG.topic} alt="京都市西京区で話題のダイエット専門院が四条烏丸に！" loading="lazy" />

        {/* HPB Banner */}
        <div className="hpb-bn">
          <img src={IMG.hpb200} alt="ホットペッパービューティー口コミ数200件突破！" loading="lazy" />
        </div>

        {/* Campaign + CTA */}
        <div className="campaign">
          <img src={IMG.openOffer} alt="期間限定オープンキャンペーン！美容痩身整体xカウンセリング 500円" loading="lazy" />
        </div>
        <div className="line-btn m30-t">
          <a href={HPB_URL} target="_blank" rel="noopener noreferrer">
            <img src={IMG.hpb} alt="ホットペッパービューティー" loading="lazy" />
          </a>
        </div>
        <div className="line-btn">
          <a href={LINE_URL} target="_blank" rel="noopener noreferrer">
            <img src={IMG.lineBtn} alt="LINEで予約する" loading="lazy" />
          </a>
        </div>
        <div className="line-bn-katagihara">
          <a href={LINE_URL} target="_blank" rel="noopener noreferrer">
            <img src={IMG.present1} alt="豪華3大特典プレゼント" loading="lazy" />
          </a>
        </div>

        {/* こんなお悩み */}
        <section>
          <div className="problem">
            <h2 className="gray-ttl">こんなお悩み<br className="sp" />ございませんか？</h2>
            <ul>
              <li>食事制限を頑張っても痩せない</li>
              <li>健康診断で痩せなさいと言われる</li>
              <li>痩せた→リバウンド→痩せた→リバウンドを繰り返す</li>
              <li>運動や体を動かすことが苦手</li>
              <li>色んなダイエットを試したが痩せない</li>
              <li>家事も仕事も忙しくてジムやエステに通う時間がない</li>
            </ul>
          </div>
        </section>

        {/* もうダイエットに失敗したくない */}
        <section>
          <div className="not-failure">
            <h2>もうダイエットに<br className="sp" />失敗したくない方は</h2>
            <p>身体の構造を知り尽くした<br /><span>鍼灸整体師監修</span><small>の</small><br /><span>痩身整体ダイエットプログラム</span><small>で</small><br />人生最後のダイエットをしませんか？</p>
          </div>
        </section>

        {/* 痩せる3ステップ */}
        <section>
          <div className="step3">
            <h2>痩身整体プログラムで痩せる<br className="br-sp" />3ステップ</h2>
            <div className="triangle"></div>
            <ul className="step3-item">
              <li>
                <div className="center">
                  <img src={IMG.step1} alt="整体師に身体の状態を説明する女性" loading="lazy" />
                </div>
                <h3>太った理由を徹底分析</h3>
                <p>肥満DNA検査による自分のスーパーフード知ることができ、分子栄養学を用いて体質を考慮した効率的なダイエットメニューを作成します。</p>
              </li>
              <li>
                <div className="center">
                  <img src={IMG.step2} alt="整体施術を受ける女性" loading="lazy" />
                </div>
                <h3>痩身整体で<br className="br-sp" />生涯太りにくい体質作り</h3>
                <p>主に姿勢矯正と骨盤矯正を行なって、痩せやすい体づくりをしていきます。</p>
              </li>
              <li>
                <div className="center">
                  <img src={IMG.step3} alt="バランスの取れた料理が並ぶ食卓" loading="lazy" />
                </div>
                <h3>マンツーマン食事サポート</h3>
                <p>LINEでサポート！楽しく続く食習慣を形成していきます。</p>
              </li>
            </ul>

            <div className="planning">
              <div className="ttl-border">
                <h3>国家資格保有の整体師が<br />あなただけのプランを<br className="sp" />提案します！</h3>
              </div>
              <img src={IMG.drKatagihara2} alt="院長" loading="lazy" />
              <p className="dr-name"><span>美VARI Beauty Salon<br />四条烏丸整体院 院長<br /></span>阪東 繁樹</p>
              <p className="planning-text">お客様一人ひとりに合ったダイエットプランを作成するため、目標体重・期日はもちろん、病歴やアレルギーなどをお聞きし、私が今まで臨床で得た経験を元に、医学の生理学・人間の分子栄養学・DNAの科学を用いてプランを考えてまいります。</p>
              <div className="dr-image-katagihara">
                <img src={IMG.geneticLevel} alt="あなたの肥満を遺伝子レベルで解明します！" className="m30-b" loading="lazy" />
              </div>
            </div>
          </div>
        </section>

        {/* 3大プレゼント中間 */}
        <div style={{ marginTop: "-4rem" }}>
          <div className="line-bn-katagihara">
            <a href={LINE_URL} target="_blank" rel="noopener noreferrer">
              <img src={IMG.present1} alt="豪華3大特典プレゼント" loading="lazy" />
            </a>
          </div>
        </div>

        {/* ダイエットが本当に成功できるか不安な方へ */}
        <div className="anxiety">
          <h2 className="gray-ttl">ダイエットが本当に<br className="sp" />成功できるか不安な方へ</h2>
          <img src={IMG.diet95} alt="ダイエット成功率95%超え！" loading="lazy" />
        </div>

        {/* ビフォーアフター */}
        <div className="customer">
          <ul className="customer-item">
            <CustomerCase
              num={1}
              beforeImg={IMG.before1}
              afterImg={IMG.after1}
              weight="-16.3"
              course="3ヶ月ダイエットコース"
              age="50代 女性"
              comment="3ヶ月で8kgくらいは痩せたいなぁと思っていたのが何と16.3kg痩せられました！きつい時でも励ましてくださった先生には本当に感謝です。服のサイズが戻ったので、オシャレを楽しみたいです。"
              highlightText="服のサイズが戻ったので、オシャレを楽しみたいです。"
            />
            <CustomerCase
              num={3}
              beforeImg={IMG.before3}
              afterImg={IMG.after3}
              weight="-10.0"
              course="3ヶ月ダイエットコース"
              age="50代 女性"
              comment="今回のダイエットは健康的に痩せて、さらにDNA検査もしていただき痩せる知識も身についたので、挑戦して本当に良かったです！"
              highlightText="健康的に痩せて、さらにDNA検査もしていただき痩せる知識も身についた"
            />
            <CustomerCase
              num={4}
              beforeImg={IMG.before4}
              afterImg={IMG.after4}
              weight="-14.6"
              course="3ヶ月ダイエットコース"
              age="50代 女性"
              comment="身体が楽になり、しんどさも取れました。新しい服を買ってお出かけしたいなとか、久しく会っていない友達に連絡してみようかななど、楽しみなことがいっぱいです。"
              highlightText="身体が楽になり、しんどさも取れました。"
            />
            <CustomerCase
              num={5}
              beforeImg={IMG.before5}
              afterImg={IMG.after5}
              weight="-8.1"
              course="3ヶ月ダイエットコース"
              age="40代 女性"
              comment="旅行も外食もお酒も楽しみながら、この結果は大満足です。スカートもゆるくなり嬉しいです！"
              highlightText="スカートもゆるくなり嬉しいです！"
            />
            <CustomerCase
              num={2}
              beforeImg={IMG.before2}
              afterImg={IMG.after2}
              weight="-29.8"
              course="6ヶ月ダイエットコース"
              age="30代 女性"
              comment="今までのダイエットはリバウンドの繰り返しで体重計に乗るのが嫌でしたが、今では毎回減っているので体重計に乗るのが楽しみになっています。"
              highlightText="今では毎回減っている"
            />
            <CustomerCase
              num={6}
              beforeImg={IMG.before6}
              afterImg={IMG.after6}
              weight="-13.8"
              course="3ヶ月ダイエットコース"
              age="30代 女性"
              comment="ウエストや太ももなど全体的にサイズダウンすることができました。家族や同僚から、体験が変わったと言われることが増えました！健康診断の数値も前回より良くなっていました。"
              highlightText="家族や同僚から、体験が変わったと言われることが増えました！"
            />
          </ul>
        </div>

        {/* たった3ヶ月続けるだけで */}
        <img src={IMG.rebound95} alt="たった3ヶ月続けるだけで平均8kg減！リバウンドしない率95%！" loading="lazy" />
        <p className="keep-style">プログラム終了後も<br />スタイルキープできます。</p>

        {/* CTA中間 */}
        <CtaButtons />

        {/* 3大プレゼント詳細 */}
        <div className="line-bn-katagihara">
          <a href={LINE_URL} target="_blank" rel="noopener noreferrer">
            <img src={IMG.present2} alt="3キロ痩せる7日間のダイエット動画" loading="lazy" />
          </a>
          <a href={LINE_URL} target="_blank" rel="noopener noreferrer">
            <img src={IMG.present3} alt="3キロ痩せるダイエットレシピ" loading="lazy" />
          </a>
          <a href={LINE_URL} target="_blank" rel="noopener noreferrer">
            <img src={IMG.present4} alt="代表が痩せた食事写真を特別公開" loading="lazy" />
          </a>
        </div>

        {/* なぜ今まで痩せられなかったのか */}
        <section>
          <div className="why">
            <h2 className="gray-ttl">なぜ今まで<br className="sp" />痩せられなかったのか<br />知っていますか？</h2>
            <div className="why-block1">
              <div className="why-block1-overlay">
                <p>世の中にはたくさんのダイエットが<br />出回っています。</p>
                <div className="why-block1-white">
                  <p>「色々試したけど<b>痩せられない</b>」</p>
                  <p>「時間がないから<b>しょうがない</b>」</p>
                </div>
                <p>と、思っていませんか？</p>
              </div>
            </div>
            <div className="why-block2">
              <p className="why-block2-rotate">\痩せない理由は/</p>
              <p>自分に合ったダイエット法を<br />知らないからです。</p>
              <div className="why-dot"></div>
            </div>
            <div className="why-block3">
              <p>忍耐力の続かない自分は</p>
              <p><span>痩せられない</span>と思っていませんか？</p>
            </div>
            <div className="why-block4">
              <div className="why-block4-but"><p>しかし</p></div>
              <p>自分に合ったダイエット法を<br className="br-sp" />見つけることで<br /><span>我慢せず無理なくスルッと<br className="br-sp" />痩せることができます。</span></p>
            </div>
            <div className="why-block5">
              <img src={IMG.oldAge} alt="窓辺で身体を伸ばしている女性" loading="lazy" />
            </div>
          </div>
        </section>

        {/* もう歳だから */}
        <section>
          <div className="never-giveup">
            <div className="never-giveup-block1">
              <h2 className="gray-ttl">もう歳だから…<br />と諦めるのはもったいない！</h2>
              <div className="never-giveup-block1-bg">
                <p><b>本当は<span className="yellow-text">痩せたい</span>けど…</b></p>
                <div className="never-giveup-block1-black">
                  <p>「もう<b>歳だから</b>…」</p>
                  <p>「若くないから<b>代謝も落ちて痩せにくいし</b>…」</p>
                </div>
                <p>と、年齢を理由に<br /><span>ダイエットを諦めてしまっていませんか？</span></p>
              </div>
            </div>
            <div className="never-giveup-block2">
              <p><b>体質改善ダイエット</b>なら<br />何歳からでも変われます！</p>
              <p className="bg-white"><b>痩せて<span>毎日ワクワクする人生</span><br className="br-sp" />を送りませんか？</b></p>
            </div>
            <img src={IMG.wakuwaku} alt="笑顔で空を見上げる女性" loading="lazy" />
          </div>
        </section>

        {/* お任せください */}
        <section>
          <h2 className="gray-ttl">美VARI Beauty Salon<br /><small>四条烏丸整体院</small><br />代表の阪東繁樹に<br className="sp" />お任せください！</h2>
          <div className="leave">
            <div className="leave-img">
              <img src={IMG.drKatagihara3} alt="院長" loading="lazy" />
            </div>
            <div className="leave-message">
              <p className="leave-message-name">阪東 繁樹（バンドウ シゲキ）</p>
              <p className="leave-message-qualifications">【医療免許】<br className="sp" />柔道整復師、はり師、きゅう師(国家資格)<br />日本再生美容医学協会　認定院</p>
              <h3>痩身整体プログラムで<br />一生涯リバウンドしにくい体へ！</h3>
              <p>はじめまして。<br />ダイエット専門の美VARI Beauty Salon 四条烏丸整体院 代表の阪東繁樹と申します。</p>
              <p>私はダイエットに特化したサロン・鍼灸整骨院を2店舗運営しており、地域の皆様を始めとする多くの方の施術に携わっています。<br />そんな私が、<span className="text-red">なぜダイエットの施術を始めたのか</span>には理由があります。</p>
              <p>実は、僕自身が太っていました。<br />30歳過ぎたあたりから<b>体重が落としにくくなり、落とすスピードより増えるスピードのほうが速くなり</b>、気が付けば65kgから80kg以上に・・・</p>
              <p>医療国家資格を持っている僕でさえ 『なぜ痩せないのか？』<br />この業界に入ってから15年間ずっと考えていました。</p>
              <p>・食事の量が少ない人<br />・間食をしない人<br />・お菓子やジャンクフードを食べていない人<br />でさえ太ったままで痩せない人がおり、めちゃくちゃ不思議でした。</p>
              <p>当時は私も<span className="text-red">痩せ方がわからず</span>、太ったまま5年もの月日が過ぎていました。<br />そんな時・・・<br />妻が第一子を妊娠中にバイク事故に遭いました。<br />事故の怪我は大したこと無かったのですが、血液検査もしたところ、お医者さんから怪我よりも内臓脂肪や臓器の数値に対して怒られました。<br />バイク事故も気を付けた方がいいけど、妻や今後生まれてくる子供のために<b>健康でいないと家族を守れない</b>、と本気で思いました。</p>
              <p>それから<br /><span className="text-red">ダイエットについて、本気で研究</span>を始めました！<br />・<span className="yellow-underline">生理学</span><br />・<span className="yellow-underline">分子栄養学</span><br />・<span className="yellow-underline">解剖学</span><br />・<span className="yellow-underline">運動学</span><br />・<span className="yellow-underline">遺伝子(DNA) </span><br /><br />その結果、<span className="text-red">今回のダイエット方程式が完成</span>したのです！<br />そして、私自身3ヶ月で-14.7kg痩せる事が出来ました。</p>
              <p>当院では下記の症状で悩まれている方が多くいらっしゃいました。<br /><span className="blue-underline">腰・股関節・膝の痛み・肩こり・頭痛</span><br /><span className="blue-underline">生活習慣病の、糖尿病・心筋梗塞・脳梗塞</span><br /><span className="blue-underline">他にも、命に関わらないけれど</span><br /><span className="blue-underline">冷え性・肌荒れ・アレルギー・生理不順・不妊などの症状</span><br /><br />当院のダイエットで、<span className="yellow-underline">人間の本来の健康を手に入れるために<b>体質改善をし、身体の中身も外見も綺麗になっていただく事が、お客様にとっての根本改善</b>だ</span>と思っております。</p>
              <p>本気でお客様の人生を変えるために、今もなお技術と知識を学び続けております。<br />・ダイエットを諦めている方<br />・何をやっても変わらなかった方<br /><span className="yellow-underline">そんな方々の最後の頼れる場所になれるよう、お一人お一人に真剣に向き合っています。</span></p>
              <p><span className="text-red">「理想の自分を叶えたい」</span>と思っている方がいらっしゃれば、ぜひ勇気を出して、お気軽に美VARI Beauty Salon 四条烏丸整体院へお越しください。<br />全力でお客様のサポートをさせていただきます。</p>
              <img src={IMG.drBa} alt="院長のビフォーアフター" loading="lazy" className="dr-ba-img" />
            </div>
          </div>
        </section>

        {/* 3つにアプローチ */}
        <section>
          <div className="approach3">
            <div className="approach3-ttl">
              <h2>美VARI Beauty Salon<br />四条烏丸整体院では<br />この3つにアプローチ</h2>
              <p>だから確実に痩せられます!</p>
            </div>
            <ul className="approach3-item">
              <li>
                <h3>筋肉をつける</h3>
                <img src={IMG.approach1} alt="整体施術を受ける女性" loading="lazy" />
                <p><b>筋肉がつきやすい姿勢づくり</b></p>
                <p>筋肉をほぐして姿勢・骨盤動が動きやすいようにします。そして正しい位置に戻していきます。<span className="text-red">正しい位置に戻すことで、痩せるために必要な筋肉が日常生活で使える</span>ようになります。</p>
              </li>
              <li>
                <h3>代謝を上げる</h3>
                <img src={IMG.approach2} alt="整体施術を受ける女性" loading="lazy" />
                <p><b>姿勢・骨盤矯正で代謝を上げ脂肪を減らす</b></p>
                <p><span className="text-red">姿勢・骨盤が歪んでいると、猫背や反り腰、巻き肩になりやすく、血流が悪い状態</span>に陥ります。血流が悪いと栄養素がスムーズに運ばれず、代謝が低下してしまうことに…。<br />そこで、姿勢、骨盤矯正で歪みを取り除き、正しい姿勢を身に付けると代謝をアップさせることができます。<br />すると、同じ動きをしても以前より多くのエネルギーを消費できるようになります。<br />また、姿勢、骨盤の位置が整うと、内蔵も本来の正常な位置に戻ります。そして<span className="text-red">胃腸の働きが良くなり、便秘の解消、代謝アップ</span>にも繋がります。</p>
                <div className="approach3-comparison">
                  <img src={IMG.approach2_3} alt="良い姿勢と悪い姿勢の比較図" loading="lazy" />
                </div>
              </li>
              <li>
                <h3>食事指導</h3>
                <img src={IMG.approach3} alt="スマホでLINE相談を行う女性" loading="lazy" />
                <p><b>LINEでサポート</b></p>
                <p>日々の食事を少し変えるだけで、実は大幅に摂取カロリーを落とせます。ちょっとの工夫で無理なくラクしてダイエットができます。<br />目標達成までの<span className="text-red">習慣化やモチベーション管理をマンツーマンで徹底的にサポート</span>します。</p>
              </li>
              <div className="approach3-triangle1"></div>
              <div className="approach3-triangle2"></div>
              <div className="approach3-triangle3"></div>
              <div className="approach3-triangle4"></div>
            </ul>
          </div>
        </section>

        {/* 痩せるだけでなく */}
        <section>
          <div className="improvement">
            <h2 className="gray-ttl">痩せるだけでなく<br />身体の不調も改善します！</h2>
            <div className="improvement-received"><p>こんなお声を頂きます</p></div>
            <ul>
              <li>腰痛が改善した</li>
              <li>姿勢が良くなり若く見られるように</li>
              <li>肌がきれいになった</li>
              <li>便秘が解消</li>
              <li>自律神経が整いイライラが減った</li>
            </ul>
            <img src={IMG.woman3} alt="笑顔の女性3名" loading="lazy" />
          </div>
          <div className="long3month">
            <p className="long3month-ttl">3ヶ月は長く感じますか？</p>
            <div className="long3month-dot"></div>
            <p>長い人生の3ヶ月<br />私と一緒にチャレンジしてみませんか？</p>
            <p>早ければ早いほど<br /><span>最短で結果が得られます！</span></p>
          </div>
        </section>

        {/* CTA中間2 */}
        <CtaButtons />

        {/* どんな相談でもOK */}
        <div className="line-ok">
          <p>どんな相談でもOKです！</p>
          <ul>
            <li>筋肉質ですが、痩せることはできますか？</li>
            <li>外食が多くても痩せられますか？</li>
            <li>施術に子どもと行ってもいいですか？<br className="br-sp" />など…</li>
          </ul>
        </div>

        <div className="line-btn">
          <a href={LINE_URL} target="_blank" rel="noopener noreferrer">
            <img src={IMG.lineBtn} alt="LINEで予約する" loading="lazy" />
          </a>
        </div>
        <div className="line-bn-katagihara">
          <a href={LINE_URL} target="_blank" rel="noopener noreferrer">
            <img src={IMG.present1} alt="豪華3大特典プレゼント" loading="lazy" />
          </a>
        </div>

        {/* 初回カウンセリング */}
        <section>
          <div className="first-counseling">
            <h2 className="gray-ttl">初回カウンセリングでは<br className="br-sp" />何をするの？</h2>
            <img src={IMG.counseling} alt="カウンセリングに答える女性" loading="lazy" />
            <div className="first-counseling-block1">
              <ul>
                <li>お身体の状態チェック</li>
                <li>食生活のカウンセリング</li>
                <li>痩身整体の体験</li>
              </ul>
              <p className="first-counseling-list-note">※1時間～1時間半程度のお時間を<br className="br-sp" />頂戴しております</p>
            </div>
            <div className="first-counseling-block2">
              <p>じっくりあなたと向きあい<br className="br-sp" /><span>痩せられない原因</span>を分析します。<br />実際に施術をご体感いただいた後に<br />不安に感じる点や相談したいことが<br />ありましたらお気軽に<br className="br-sp" />カウンセラーにお聞きください。<br /><small>（無理な売り込みなどは一切ございません！）</small></p>
            </div>
          </div>
        </section>

        {/* 流れ */}
        <section>
          <h2 className="gray-ttl">申し込みの流れ</h2>
          <div className="flow">
            <ul className="flow-item">
              <FlowStep title="受付" img={IMG.flow1} desc="予約時間にご来院ください。カウンセリングシートをお渡しします。" />
              <FlowStep title="カウンセリングシートを記入" img={IMG.flow2} desc="受付後にカウンセリングシートをご記入ください。" />
              <FlowStep title="測定" img={IMG.flow3} desc="現在の体重や体脂肪率などの数値を測定します。" />
              <FlowStep title="施術体験" img={IMG.flow4} desc="痩身施術の体験をしていただきます。" />
              <FlowStep title="最適なコースのご提案" img={IMG.flow5} desc="カウンセリング、測定を基にあなたに最適なプランを提案します。無理な売り込みなどは一切ありませんのでご安心ください。" />
              <FlowStep title="お会計、次回のご予約" img={IMG.flow6} desc="自宅でのセルフケアや、次回のご予約についてご説明します。" showTriangle={false} />
            </ul>
          </div>
        </section>

        {/* よくある質問 */}
        <section>
          <h2 className="gray-ttl">よくある質問</h2>
          <div className="qa">
            <FaqItem question="料金はいくらぐらいになりますか？" answer="カウンセリングを行い、お身体の状態を見せてもらってからのご案内となります。" />
            <FaqItem question="平均どれくらい痩せることができますか？" answer="個人差はありますが、3ヶ月で女性は8～10キロ程度　男性は10～12キロ程度痩せる方が多くいらっしゃいます。<br />※効果効能を保証するものではありません。" />
            <FaqItem question="クレジットカードは使えますか？" answer="はい、使えます。VISA、MasterCard、JCB、AmericanExpressが使用可能です。" />
            <FaqItem question="初回はどれくらい時間がかかりますか？" answer="1.5〜2時間程度頂いています。" />
            <FaqItem question="受付時間は何時までですか？" answer="初回体験の方は19時までです。" />
            <FaqItem question="予約制ですか？" answer="完全予約制です。" />
            <FaqItem question="服装に指定はありますか？" answer="指定はございませんが、動きやすい服装が望ましいです。着替えをしていただくスペースもご用意しておりますので、着替えをお持ちいただいても結構です。" />
          </div>
        </section>

        {/* アクセス */}
        <section>
          <h2 className="gray-ttl">アクセス情報</h2>
          <div className="access">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3268.030561879165!2d135.7565946759971!3d35.005940072812834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6001089b200dc80f%3A0x36e36df0c17c0946!2z44CSNjA0LTgxNTEg5Lqs6YO95bqc5Lqs6YO95biC5Lit5Lqs5Yy66Ju46Jas5bir6YCa5YOP5Li46KW_5YWl5qmL5byB5oW255S677yS77yT77yUIE1qcOeDr-S4uOODk-ODqw!5e0!3m2!1sja!2sjp!4v1744269908667!5m2!1sja!2sjp"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps"
            ></iframe>
            <div className="clinic-prof">
              <table>
                <tbody>
                  <tr><th>院名</th><td>美VARI Beauty Salon<br />四条烏丸整体院</td></tr>
                  <tr><th>住所</th><td>〒604-8151<br />京都市中京区橋弁慶町<br className="br-sp" />234-3階 南東側</td></tr>
                  <tr><th>電話番号</th><td>075-585-2777</td></tr>
                  <tr><th>受付時間</th><td>9:30〜20:00（不定休）</td></tr>
                  <tr><th>最寄駅</th><td>阪急烏丸駅から徒歩3分<br />地下鉄地上駅から徒歩4分<br />地下鉄烏丸御池駅徒歩5分</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* お問合せ */}
        <section>
          <h2 className="gray-ttl">お問合せ</h2>
          <div className="contact">
            <CtaButtons />
          </div>
        </section>
      </div>

      {/* フッター */}
      <footer className="lp-footer">
        <p>© ダイエットメニュー</p>
      </footer>

      {/* フローティングCTAボタン */}
      <div className={`footer-btn ${showCta ? "visible" : ""}`}>
        <a href={LINE_URL} target="_blank" rel="noopener noreferrer">
          <img src={IMG.footBtn} alt="体験お申し込みはこちらから" loading="lazy" />
        </a>
      </div>
    </div>
  );
}
