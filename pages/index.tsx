import React from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';
import Image from 'next/image';

export const About = (): JSX.Element => {
  return (
    <Layout
      customMeta={{
        title: 'Home - KentarouTawara',
      }}
    >
      <h1>Home</h1>
      <div className="flex flex-col justify-center items-start max-w-4xl mx-auto mb-16 w-full">
        <div className="mb-8 prose dark:prose-dark leading-6 max-w-none">
          <h2>著者近影</h2>
          <div className="flex justify-center">
            <Image
              src="/profile.jpg"
              alt="Picture of the author"
              width={450}
              height={300}
            />
          </div>
          <h2>Links</h2>
          <ul>
            <li>
              Twitter:{' '}
              <a href="https://twitter.com/kentaroutawra">@kentarotawara</a>
            </li>
            <li>
              GitHub:{' '}
              <a href="https://github.com/kentarotawara">@kentarotawara</a>
            </li>
            <li>
              Wantedly:{' '}
              <a href="https://www.wantedly.com/id/kentarou_tawara_b">
                @kentarotawara
              </a>
            </li>
            <li>
              note: <a href="https://note.com/kentarotawara">@kentarotawara</a>
            </li>
            <li>
              Website:{' '}
              <Link href="https://www.kentaroutawara.dev">
                <a>https://www.kentaroutawara.dev</a>
              </Link>
            </li>
          </ul>

          <h2>概略</h2>
          <p className="mb-8 prose text-lg dark:prose-dark leading-6 max-w-none">
            1991年生まれ。小学校卒業をするまでに愛知→佐賀→東京→埼玉と移動。2010年立教大学社会学部社会学科に入学。
            東日本大震災後の原子力発電に対する社会の位置付けに関心を持ち、社会統計学を学び、量的調査を実施。
            <br />
            <br />
            大学院に進み同テーマをさらに探求する。仙台と東京で実施された社会調査データを用い比較検討し、学会で発表。
            ものづくりで社会に関わると決めて2016年に一般社団法人日本家族計画協会に入社。健康啓発資材の制作・営業・販促に従事。
            2019年に小説執筆に専念するために退職。第57回文藝賞に応募。落選。
            <br />
            <br />
            自分でサービスを作り上げられることに感動してエンジニア転職を目指す。2020年プログラミングスクールRUNTEQにてRailsを中心に学習。
            同年11月にオンライン英会話サービスを提供する株式会社ベストティーチャーにバックエンドエンジニアとして入社。
            <br />
            <br />
            2022年4月15日より株式会社SUPER
            STUDIOにバックエンドエンジニアとして入社。
          </p>
          <h2>学歴・経歴</h2>
          <div className="mb-8 prose dark:prose-dark text-lg">
            <ul>
              <li>2022年4月: 株式会社SUPER STUDIO 入社</li>
              <li>2022年1月: 株式会社ベストティーチャー 退社</li>
              <li>2020年11月: 株式会社ベストティーチャー 入社</li>
              <li>2019年4月: 一般社団法人日本家族計画協会 退社</li>
              <li>2019年4月: 一般社団法人日本家族計画協会 退社</li>
              <li>2016年4月: 一般社団法人日本家族計画協会 入社</li>
              <li>2016年3月: 立教大学大学院社会学研究科 卒業</li>
              <li>2014年4月: 立教大学大学院社会学研究科 入学</li>
              <li>2014年3月: 立教大学社会学部社会学科 卒業</li>
              <li>2010年4月: 立教大学社会学部社会学科 入学</li>
              <li>2008年3月: 埼玉県立春日部高校 卒業</li>
            </ul>

            <h2>作品</h2>
            <ul>
              <li>
                <Link href="https://note.com/kentarotawara/n/n92719a929d1f">
                  <a>「回虫のように」第57回文藝賞応募作品</a>
                </Link>
              </li>
            </ul>

            <h2>資格</h2>
            <ul>
              <li>RubySilver</li>
              <li>情報セキュリティマネジメント</li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
