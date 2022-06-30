import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Link from "@docusaurus/Link";
import SearchBar from "@theme/SearchBar";

import styles from "./index.module.css";
import guideSketch from "@site/static/img/guides-sketch.png";
import referenceSketch from "@site/static/img/reference-sketch.png";
import trainingSketch from "@site/static/img/training-sketch.png";
import gotQuestionsImage from "@site/static/img/got-questions.png";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <main>
        <header className={`${styles.heroBanner} home__hero-banner`}>
          <h1>Welcome to the 10up Gutenberg Best Practices!</h1>
          <p>The go-to place for all your Gutenberg questions</p>
          <SearchBar className={styles.searchBar} />
        </header>
        <section className={`${styles.grid} content-wrapper`}>
          <article className={`${styles.gridItem} home_grid-item`}>
            <img
              src={referenceSketch}
              alt="Hand drawn papers"
              width={96}
              height={96}
            />
            <h2>Reference</h2>
            <p>
              This is where you will find detailed information about how we
              approach building blocks at 10up. The reference documentation is
              structured into a few different sections.
            </p>
            <Link className={styles.gridLink} to={"/reference"}>
              Quick access
            </Link>
          </article>
          <article className={`${styles.gridItem} home_grid-item`}>
            <img
              src={trainingSketch}
              alt="Hand drawn lifting weights"
              width={96}
              height={96}
            />
            <h2>Training</h2>
            <p>
              The purpose of this project is to help you build and customize
              (Gutenberg) blocks. This training applies to all engineering
              disciplines at 10up.
            </p>
            <Link className={styles.gridLink} to="/training">
              I am ready!
            </Link>
          </article>
          <article className={`${styles.gridItem} home_grid-item`}>
            <img
              src={guideSketch}
              alt="Two hand drawn books with light bulb over them"
              width={96}
              height={96}
            />
            <h2>Guides</h2>
            <p>
              This section of the Gutenberg Best Practices is meant as a
              collection of individual deep dive articles. You are also welcome
              to contribute article so this guide!
            </p>
            <Link className={styles.gridLink} to="/guides">
              Give me the details
            </Link>
          </article>
        </section>

        <hr />

        <section className="got-questions">
          <h2>Got a question?</h2>
          <div className="got-questions__wrapper">
            <img
              src={gotQuestionsImage}
              alt=""
              className="got-questions__image"
              width={663}
              height={250}
            />
            <svg
              className={styles.svgAnimation}
              width="984"
              height="186"
              viewBox="0 0 984 186"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.3"
                d="M80.1562 115.906H83.4062V115.031C83.4062 114.5 83.4792 114.042 83.625 113.656C83.7812 113.26 84.0469 112.891 84.4219 112.547C84.7969 112.193 85.3177 111.818 85.9844 111.422C87.026 110.807 87.8333 110.068 88.4062 109.203C88.9896 108.328 89.2812 107.292 89.2812 106.094V106.062C89.2812 104.938 88.9896 103.943 88.4062 103.078C87.8333 102.214 87.026 101.531 85.9844 101.031C84.9531 100.521 83.7448 100.266 82.3594 100.266C80.8594 100.266 79.5938 100.536 78.5625 101.078C77.5312 101.62 76.7396 102.349 76.1875 103.266C75.6458 104.182 75.3438 105.203 75.2812 106.328L75.2656 106.5H78.5156L78.5312 106.359C78.5833 105.724 78.7604 105.167 79.0625 104.688C79.375 104.208 79.7969 103.833 80.3281 103.562C80.8594 103.281 81.4844 103.141 82.2031 103.141C82.901 103.141 83.5104 103.271 84.0312 103.531C84.5625 103.792 84.974 104.156 85.2656 104.625C85.5573 105.083 85.7031 105.609 85.7031 106.203V106.234C85.7031 106.755 85.6198 107.219 85.4531 107.625C85.2969 108.031 85.0312 108.411 84.6562 108.766C84.2812 109.109 83.7812 109.474 83.1562 109.859C82.4479 110.286 81.8646 110.734 81.4062 111.203C80.9583 111.672 80.6302 112.193 80.4219 112.766C80.2135 113.328 80.1198 113.964 80.1406 114.672L80.1562 115.906ZM81.8125 123.172C82.3958 123.172 82.8854 122.979 83.2812 122.594C83.6771 122.198 83.875 121.714 83.875 121.141C83.875 120.568 83.6771 120.089 83.2812 119.703C82.8854 119.307 82.3958 119.109 81.8125 119.109C81.2292 119.109 80.7396 119.307 80.3438 119.703C79.9479 120.089 79.75 120.568 79.75 121.141C79.75 121.714 79.9479 122.198 80.3438 122.594C80.7396 122.979 81.2292 123.172 81.8125 123.172Z"
                fill="#DF2B26"
              />
              <path
                opacity="0.1"
                d="M907.891 155.641H911.141V154.766C911.141 154.234 911.214 153.776 911.359 153.391C911.516 152.995 911.781 152.625 912.156 152.281C912.531 151.927 913.052 151.552 913.719 151.156C914.76 150.542 915.568 149.802 916.141 148.938C916.724 148.062 917.016 147.026 917.016 145.828V145.797C917.016 144.672 916.724 143.677 916.141 142.812C915.568 141.948 914.76 141.266 913.719 140.766C912.688 140.255 911.479 140 910.094 140C908.594 140 907.328 140.271 906.297 140.812C905.266 141.354 904.474 142.083 903.922 143C903.38 143.917 903.078 144.938 903.016 146.062L903 146.234H906.25L906.266 146.094C906.318 145.458 906.495 144.901 906.797 144.422C907.109 143.943 907.531 143.568 908.062 143.297C908.594 143.016 909.219 142.875 909.938 142.875C910.635 142.875 911.245 143.005 911.766 143.266C912.297 143.526 912.708 143.891 913 144.359C913.292 144.818 913.438 145.344 913.438 145.938V145.969C913.438 146.49 913.354 146.953 913.188 147.359C913.031 147.766 912.766 148.146 912.391 148.5C912.016 148.844 911.516 149.208 910.891 149.594C910.182 150.021 909.599 150.469 909.141 150.938C908.693 151.406 908.365 151.927 908.156 152.5C907.948 153.062 907.854 153.698 907.875 154.406L907.891 155.641ZM909.547 162.906C910.13 162.906 910.62 162.714 911.016 162.328C911.411 161.932 911.609 161.448 911.609 160.875C911.609 160.302 911.411 159.823 911.016 159.438C910.62 159.042 910.13 158.844 909.547 158.844C908.964 158.844 908.474 159.042 908.078 159.438C907.682 159.823 907.484 160.302 907.484 160.875C907.484 161.448 907.682 161.932 908.078 162.328C908.474 162.714 908.964 162.906 909.547 162.906Z"
                fill="#DF2B26"
              />
              <path
                opacity="0.2"
                d="M153.891 178.641H157.141V177.766C157.141 177.234 157.214 176.776 157.359 176.391C157.516 175.995 157.781 175.625 158.156 175.281C158.531 174.927 159.052 174.552 159.719 174.156C160.76 173.542 161.568 172.802 162.141 171.938C162.724 171.062 163.016 170.026 163.016 168.828V168.797C163.016 167.672 162.724 166.677 162.141 165.812C161.568 164.948 160.76 164.266 159.719 163.766C158.688 163.255 157.479 163 156.094 163C154.594 163 153.328 163.271 152.297 163.812C151.266 164.354 150.474 165.083 149.922 166C149.38 166.917 149.078 167.938 149.016 169.062L149 169.234H152.25L152.266 169.094C152.318 168.458 152.495 167.901 152.797 167.422C153.109 166.943 153.531 166.568 154.062 166.297C154.594 166.016 155.219 165.875 155.938 165.875C156.635 165.875 157.245 166.005 157.766 166.266C158.297 166.526 158.708 166.891 159 167.359C159.292 167.818 159.438 168.344 159.438 168.938V168.969C159.438 169.49 159.354 169.953 159.188 170.359C159.031 170.766 158.766 171.146 158.391 171.5C158.016 171.844 157.516 172.208 156.891 172.594C156.182 173.021 155.599 173.469 155.141 173.938C154.693 174.406 154.365 174.927 154.156 175.5C153.948 176.062 153.854 176.698 153.875 177.406L153.891 178.641ZM155.547 185.906C156.13 185.906 156.62 185.714 157.016 185.328C157.411 184.932 157.609 184.448 157.609 183.875C157.609 183.302 157.411 182.823 157.016 182.438C156.62 182.042 156.13 181.844 155.547 181.844C154.964 181.844 154.474 182.042 154.078 182.438C153.682 182.823 153.484 183.302 153.484 183.875C153.484 184.448 153.682 184.932 154.078 185.328C154.474 185.714 154.964 185.906 155.547 185.906Z"
                fill="#DF2B26"
              />
              <path
                opacity="0.1"
                d="M855.891 74.6406H859.141V73.7656C859.141 73.2344 859.214 72.776 859.359 72.3906C859.516 71.9948 859.781 71.625 860.156 71.2812C860.531 70.9271 861.052 70.5521 861.719 70.1562C862.76 69.5417 863.568 68.8021 864.141 67.9375C864.724 67.0625 865.016 66.026 865.016 64.8281V64.7969C865.016 63.6719 864.724 62.6771 864.141 61.8125C863.568 60.9479 862.76 60.2656 861.719 59.7656C860.688 59.2552 859.479 59 858.094 59C856.594 59 855.328 59.2708 854.297 59.8125C853.266 60.3542 852.474 61.0833 851.922 62C851.38 62.9167 851.078 63.9375 851.016 65.0625L851 65.2344H854.25L854.266 65.0938C854.318 64.4583 854.495 63.901 854.797 63.4219C855.109 62.9427 855.531 62.5677 856.062 62.2969C856.594 62.0156 857.219 61.875 857.938 61.875C858.635 61.875 859.245 62.0052 859.766 62.2656C860.297 62.526 860.708 62.8906 861 63.3594C861.292 63.8177 861.438 64.3438 861.438 64.9375V64.9688C861.438 65.4896 861.354 65.9531 861.188 66.3594C861.031 66.7656 860.766 67.1458 860.391 67.5C860.016 67.8438 859.516 68.2083 858.891 68.5938C858.182 69.0208 857.599 69.4688 857.141 69.9375C856.693 70.4062 856.365 70.9271 856.156 71.5C855.948 72.0625 855.854 72.6979 855.875 73.4062L855.891 74.6406ZM857.547 81.9062C858.13 81.9062 858.62 81.7135 859.016 81.3281C859.411 80.9323 859.609 80.4479 859.609 79.875C859.609 79.3021 859.411 78.8229 859.016 78.4375C858.62 78.0417 858.13 77.8438 857.547 77.8438C856.964 77.8438 856.474 78.0417 856.078 78.4375C855.682 78.8229 855.484 79.3021 855.484 79.875C855.484 80.4479 855.682 80.9323 856.078 81.3281C856.474 81.7135 856.964 81.9062 857.547 81.9062Z"
                fill="#DF2B26"
              />
              <path
                opacity="0.2"
                d="M199.891 74.6406H203.141V73.7656C203.141 73.2344 203.214 72.776 203.359 72.3906C203.516 71.9948 203.781 71.625 204.156 71.2812C204.531 70.9271 205.052 70.5521 205.719 70.1562C206.76 69.5417 207.568 68.8021 208.141 67.9375C208.724 67.0625 209.016 66.026 209.016 64.8281V64.7969C209.016 63.6719 208.724 62.6771 208.141 61.8125C207.568 60.9479 206.76 60.2656 205.719 59.7656C204.688 59.2552 203.479 59 202.094 59C200.594 59 199.328 59.2708 198.297 59.8125C197.266 60.3542 196.474 61.0833 195.922 62C195.38 62.9167 195.078 63.9375 195.016 65.0625L195 65.2344H198.25L198.266 65.0938C198.318 64.4583 198.495 63.901 198.797 63.4219C199.109 62.9427 199.531 62.5677 200.062 62.2969C200.594 62.0156 201.219 61.875 201.938 61.875C202.635 61.875 203.245 62.0052 203.766 62.2656C204.297 62.526 204.708 62.8906 205 63.3594C205.292 63.8177 205.438 64.3438 205.438 64.9375V64.9688C205.438 65.4896 205.354 65.9531 205.188 66.3594C205.031 66.7656 204.766 67.1458 204.391 67.5C204.016 67.8438 203.516 68.2083 202.891 68.5938C202.182 69.0208 201.599 69.4688 201.141 69.9375C200.693 70.4062 200.365 70.9271 200.156 71.5C199.948 72.0625 199.854 72.6979 199.875 73.4062L199.891 74.6406ZM201.547 81.9062C202.13 81.9062 202.62 81.7135 203.016 81.3281C203.411 80.9323 203.609 80.4479 203.609 79.875C203.609 79.3021 203.411 78.8229 203.016 78.4375C202.62 78.0417 202.13 77.8438 201.547 77.8438C200.964 77.8438 200.474 78.0417 200.078 78.4375C199.682 78.8229 199.484 79.3021 199.484 79.875C199.484 80.4479 199.682 80.9323 200.078 81.3281C200.474 81.7135 200.964 81.9062 201.547 81.9062Z"
                fill="#DF2B26"
              />
              <path
                opacity="0.2"
                d="M973.891 92.6406H977.141V91.7656C977.141 91.2344 977.214 90.776 977.359 90.3906C977.516 89.9948 977.781 89.625 978.156 89.2812C978.531 88.9271 979.052 88.5521 979.719 88.1562C980.76 87.5417 981.568 86.8021 982.141 85.9375C982.724 85.0625 983.016 84.026 983.016 82.8281V82.7969C983.016 81.6719 982.724 80.6771 982.141 79.8125C981.568 78.9479 980.76 78.2656 979.719 77.7656C978.688 77.2552 977.479 77 976.094 77C974.594 77 973.328 77.2708 972.297 77.8125C971.266 78.3542 970.474 79.0833 969.922 80C969.38 80.9167 969.078 81.9375 969.016 83.0625L969 83.2344H972.25L972.266 83.0938C972.318 82.4583 972.495 81.901 972.797 81.4219C973.109 80.9427 973.531 80.5677 974.062 80.2969C974.594 80.0156 975.219 79.875 975.938 79.875C976.635 79.875 977.245 80.0052 977.766 80.2656C978.297 80.526 978.708 80.8906 979 81.3594C979.292 81.8177 979.438 82.3438 979.438 82.9375V82.9688C979.438 83.4896 979.354 83.9531 979.188 84.3594C979.031 84.7656 978.766 85.1458 978.391 85.5C978.016 85.8438 977.516 86.2083 976.891 86.5938C976.182 87.0208 975.599 87.4688 975.141 87.9375C974.693 88.4062 974.365 88.9271 974.156 89.5C973.948 90.0625 973.854 90.6979 973.875 91.4062L973.891 92.6406ZM975.547 99.9062C976.13 99.9062 976.62 99.7135 977.016 99.3281C977.411 98.9323 977.609 98.4479 977.609 97.875C977.609 97.3021 977.411 96.8229 977.016 96.4375C976.62 96.0417 976.13 95.8438 975.547 95.8438C974.964 95.8438 974.474 96.0417 974.078 96.4375C973.682 96.8229 973.484 97.3021 973.484 97.875C973.484 98.4479 973.682 98.9323 974.078 99.3281C974.474 99.7135 974.964 99.9062 975.547 99.9062Z"
                fill="#DF2B26"
              />
              <path
                opacity="0.1"
                d="M107.891 15.6406H111.141V14.7656C111.141 14.2344 111.214 13.776 111.359 13.3906C111.516 12.9948 111.781 12.625 112.156 12.2812C112.531 11.9271 113.052 11.5521 113.719 11.1562C114.76 10.5417 115.568 9.80208 116.141 8.9375C116.724 8.0625 117.016 7.02604 117.016 5.82812V5.79688C117.016 4.67188 116.724 3.67708 116.141 2.8125C115.568 1.94792 114.76 1.26562 113.719 0.765625C112.688 0.255208 111.479 0 110.094 0C108.594 0 107.328 0.270833 106.297 0.8125C105.266 1.35417 104.474 2.08333 103.922 3C103.38 3.91667 103.078 4.9375 103.016 6.0625L103 6.23438H106.25L106.266 6.09375C106.318 5.45833 106.495 4.90104 106.797 4.42188C107.109 3.94271 107.531 3.56771 108.062 3.29688C108.594 3.01562 109.219 2.875 109.938 2.875C110.635 2.875 111.245 3.00521 111.766 3.26562C112.297 3.52604 112.708 3.89062 113 4.35938C113.292 4.81771 113.438 5.34375 113.438 5.9375V5.96875C113.438 6.48958 113.354 6.95312 113.188 7.35938C113.031 7.76562 112.766 8.14583 112.391 8.5C112.016 8.84375 111.516 9.20833 110.891 9.59375C110.182 10.0208 109.599 10.4688 109.141 10.9375C108.693 11.4062 108.365 11.9271 108.156 12.5C107.948 13.0625 107.854 13.6979 107.875 14.4062L107.891 15.6406ZM109.547 22.9062C110.13 22.9062 110.62 22.7135 111.016 22.3281C111.411 21.9323 111.609 21.4479 111.609 20.875C111.609 20.3021 111.411 19.8229 111.016 19.4375C110.62 19.0417 110.13 18.8438 109.547 18.8438C108.964 18.8438 108.474 19.0417 108.078 19.4375C107.682 19.8229 107.484 20.3021 107.484 20.875C107.484 21.4479 107.682 21.9323 108.078 22.3281C108.474 22.7135 108.964 22.9062 109.547 22.9062Z"
                fill="#DF2B26"
              />
              <path
                opacity="0.2"
                d="M911.891 15.6406H915.141V14.7656C915.141 14.2344 915.214 13.776 915.359 13.3906C915.516 12.9948 915.781 12.625 916.156 12.2812C916.531 11.9271 917.052 11.5521 917.719 11.1562C918.76 10.5417 919.568 9.80208 920.141 8.9375C920.724 8.0625 921.016 7.02604 921.016 5.82812V5.79688C921.016 4.67188 920.724 3.67708 920.141 2.8125C919.568 1.94792 918.76 1.26562 917.719 0.765625C916.688 0.255208 915.479 0 914.094 0C912.594 0 911.328 0.270833 910.297 0.8125C909.266 1.35417 908.474 2.08333 907.922 3C907.38 3.91667 907.078 4.9375 907.016 6.0625L907 6.23438H910.25L910.266 6.09375C910.318 5.45833 910.495 4.90104 910.797 4.42188C911.109 3.94271 911.531 3.56771 912.062 3.29688C912.594 3.01562 913.219 2.875 913.938 2.875C914.635 2.875 915.245 3.00521 915.766 3.26562C916.297 3.52604 916.708 3.89062 917 4.35938C917.292 4.81771 917.438 5.34375 917.438 5.9375V5.96875C917.438 6.48958 917.354 6.95312 917.188 7.35938C917.031 7.76562 916.766 8.14583 916.391 8.5C916.016 8.84375 915.516 9.20833 914.891 9.59375C914.182 10.0208 913.599 10.4688 913.141 10.9375C912.693 11.4062 912.365 11.9271 912.156 12.5C911.948 13.0625 911.854 13.6979 911.875 14.4062L911.891 15.6406ZM913.547 22.9062C914.13 22.9062 914.62 22.7135 915.016 22.3281C915.411 21.9323 915.609 21.4479 915.609 20.875C915.609 20.3021 915.411 19.8229 915.016 19.4375C914.62 19.0417 914.13 18.8438 913.547 18.8438C912.964 18.8438 912.474 19.0417 912.078 19.4375C911.682 19.8229 911.484 20.3021 911.484 20.875C911.484 21.4479 911.682 21.9323 912.078 22.3281C912.474 22.7135 912.964 22.9062 913.547 22.9062Z"
                fill="#DF2B26"
              />
              <path
                opacity="0.1"
                d="M4.89062 160.641H8.14062V159.766C8.14062 159.234 8.21354 158.776 8.35938 158.391C8.51562 157.995 8.78125 157.625 9.15625 157.281C9.53125 156.927 10.0521 156.552 10.7188 156.156C11.7604 155.542 12.5677 154.802 13.1406 153.938C13.724 153.062 14.0156 152.026 14.0156 150.828V150.797C14.0156 149.672 13.724 148.677 13.1406 147.812C12.5677 146.948 11.7604 146.266 10.7188 145.766C9.6875 145.255 8.47917 145 7.09375 145C5.59375 145 4.32812 145.271 3.29688 145.812C2.26562 146.354 1.47396 147.083 0.921875 148C0.380208 148.917 0.078125 149.938 0.015625 151.062L0 151.234H3.25L3.26562 151.094C3.31771 150.458 3.49479 149.901 3.79688 149.422C4.10938 148.943 4.53125 148.568 5.0625 148.297C5.59375 148.016 6.21875 147.875 6.9375 147.875C7.63542 147.875 8.24479 148.005 8.76562 148.266C9.29688 148.526 9.70833 148.891 10 149.359C10.2917 149.818 10.4375 150.344 10.4375 150.938V150.969C10.4375 151.49 10.3542 151.953 10.1875 152.359C10.0312 152.766 9.76562 153.146 9.39062 153.5C9.01562 153.844 8.51562 154.208 7.89062 154.594C7.18229 155.021 6.59896 155.469 6.14062 155.938C5.69271 156.406 5.36458 156.927 5.15625 157.5C4.94792 158.062 4.85417 158.698 4.875 159.406L4.89062 160.641ZM6.54688 167.906C7.13021 167.906 7.61979 167.714 8.01562 167.328C8.41146 166.932 8.60938 166.448 8.60938 165.875C8.60938 165.302 8.41146 164.823 8.01562 164.438C7.61979 164.042 7.13021 163.844 6.54688 163.844C5.96354 163.844 5.47396 164.042 5.07812 164.438C4.68229 164.823 4.48438 165.302 4.48438 165.875C4.48438 166.448 4.68229 166.932 5.07812 167.328C5.47396 167.714 5.96354 167.906 6.54688 167.906Z"
                fill="#DF2B26"
              />
              <path
                opacity="0.2"
                d="M808.891 160.641H812.141V159.766C812.141 159.234 812.214 158.776 812.359 158.391C812.516 157.995 812.781 157.625 813.156 157.281C813.531 156.927 814.052 156.552 814.719 156.156C815.76 155.542 816.568 154.802 817.141 153.938C817.724 153.062 818.016 152.026 818.016 150.828V150.797C818.016 149.672 817.724 148.677 817.141 147.812C816.568 146.948 815.76 146.266 814.719 145.766C813.688 145.255 812.479 145 811.094 145C809.594 145 808.328 145.271 807.297 145.812C806.266 146.354 805.474 147.083 804.922 148C804.38 148.917 804.078 149.938 804.016 151.062L804 151.234H807.25L807.266 151.094C807.318 150.458 807.495 149.901 807.797 149.422C808.109 148.943 808.531 148.568 809.062 148.297C809.594 148.016 810.219 147.875 810.938 147.875C811.635 147.875 812.245 148.005 812.766 148.266C813.297 148.526 813.708 148.891 814 149.359C814.292 149.818 814.438 150.344 814.438 150.938V150.969C814.438 151.49 814.354 151.953 814.188 152.359C814.031 152.766 813.766 153.146 813.391 153.5C813.016 153.844 812.516 154.208 811.891 154.594C811.182 155.021 810.599 155.469 810.141 155.938C809.693 156.406 809.365 156.927 809.156 157.5C808.948 158.062 808.854 158.698 808.875 159.406L808.891 160.641ZM810.547 167.906C811.13 167.906 811.62 167.714 812.016 167.328C812.411 166.932 812.609 166.448 812.609 165.875C812.609 165.302 812.411 164.823 812.016 164.438C811.62 164.042 811.13 163.844 810.547 163.844C809.964 163.844 809.474 164.042 809.078 164.438C808.682 164.823 808.484 165.302 808.484 165.875C808.484 166.448 808.682 166.932 809.078 167.328C809.474 167.714 809.964 167.906 810.547 167.906Z"
                fill="#DF2B26"
              />
            </svg>
          </div>

          <Link href="https://github.com/10up/gutenberg-best-practices/discussions">
            Head to our Discussions board
          </Link>
        </section>
      </main>
    </Layout>
  );
}
