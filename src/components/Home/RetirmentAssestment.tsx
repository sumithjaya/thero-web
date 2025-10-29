import Image from "next/image";
import styles from "./RetirmentAssestment.module.css";
import Link from "next/link";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import RatingStars from "../Testimonials/RatingStars";
export default function RetirmentAssestment() {
  return (
    <section className={styles.sectionPadLg}>
      <div className={`${styles.rowBetween}`}>
        {/* Left column cards */}
        <div className={styles.leftCol}>
          {/* Assessment card */}
          <div className={styles.assessmentCard}>
            <div className={styles.cardIconPad}>
              <div className={styles.iconCircle}>
                <Image
                  src="/images/writing.png"
                  width={44}
                  height={44}
                  alt=""
                />
              </div>
            </div>
            <div className={styles.cardContent}>
              <div>
                <h5 className={styles.cardTitle}>Retirement Assessment</h5>
              <p className={styles.cardText}>
                Answer a few questions to get personalized recommendations
              </p>
              </div>
              <Link href={"/assessment"} className={styles.assessmentCta}>
                Take the assessment
              </Link>
            </div>
          </div>

          {/* Sustainability card */}
          <div className={styles.sustainabilityCard}>
            <div className={styles.sustainabilityIconWrap}>
              <div className={`${styles.iconCirclePrimary}  `}>
                <Image src="/images/saving.png" width={44} height={44} alt="" />
              </div>
            </div>
            <div className={styles.sustainabilityContent}>
              <h5 className={styles.sustainabilityTitle}>
                Income Sustainability Check
              </h5>
              <p className={styles.sustainabilityText}>
                Will your money last through retirement?
              </p>
              <Link href={"/assessment"} className={styles.sustainabilityCta}>
                Calculate now
              </Link>
            </div>
          </div>
        </div>

        {/* Right column chart */}
        <div className={styles.planPanel}>
          <h4 className={styles.planTitle}>Retirement Plan</h4>
          <p className={styles.planSubtitle}>
            Get a report with a strategy and balance projections
          </p>
          <div className={styles.planCharts}>
            {/* Donut + label */}
            <div className={styles.donutCol}>
              <div className={styles.donutSvgWrap}>
                <svg
                  width="218"
                  height="219"
                  viewBox="0 0 218 219"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M218 109.876C218 95.562 215.181 81.3881 209.703 68.1636C204.225 54.9391 196.196 42.923 186.075 32.8015C175.953 22.6799 163.937 14.651 150.712 9.17323C137.488 3.69547 123.314 0.876098 109 0.876099C94.6859 0.876099 80.512 3.69547 67.2875 9.17323C54.063 14.651 42.0469 22.6799 31.9254 32.8015C21.8038 42.923 13.7749 54.9391 8.29713 68.1636C2.81937 81.3881 -1.25138e-06 95.562 0 109.876H33.5611C33.5611 99.9693 35.5124 90.1596 39.3035 81.0069C43.0947 71.8542 48.6515 63.5379 55.6566 56.5327C62.6618 49.5276 70.9781 43.9708 80.1308 40.1796C89.2834 36.3885 99.0932 34.4372 109 34.4372C118.907 34.4372 128.717 36.3885 137.869 40.1796C147.022 43.9708 155.338 49.5276 162.343 56.5327C169.349 63.5379 174.905 71.8542 178.696 81.0069C182.488 90.1596 184.439 99.9693 184.439 109.876H218Z"
                    fill="#6FA3EC"
                  />
                  <path
                    d="M0.0171338 111.796C0.269273 126.108 3.33787 140.23 9.04774 153.356C14.7576 166.482 22.9969 178.355 33.2952 188.296C43.5935 198.238 55.7491 206.054 69.0681 211.298C82.387 216.542 96.6084 219.111 110.92 218.859C125.232 218.607 139.354 215.538 152.48 209.829C165.606 204.119 177.479 195.879 187.421 185.581C197.362 175.283 205.178 163.127 210.422 149.808C215.666 136.489 218.235 122.268 217.983 107.956L184.427 108.547C184.602 118.453 182.824 128.295 179.194 137.513C175.565 146.731 170.156 155.144 163.275 162.272C156.394 169.399 148.177 175.101 139.093 179.053C130.008 183.005 120.234 185.129 110.329 185.303C100.424 185.478 90.5812 183.7 81.3632 180.07C72.1451 176.441 63.7322 171.032 56.6048 164.151C49.4773 157.27 43.7749 149.053 39.8231 139.969C35.8713 130.884 33.7475 121.11 33.573 111.205L0.0171338 111.796Z"
                    fill="#002855"
                  />
                  <path
                    d="M58.9573 13.0426C46.2409 19.6143 34.9434 28.6263 25.7099 39.5641C16.4764 50.5019 9.48768 63.1513 5.14275 76.79C0.797814 90.4287 -0.818235 104.79 0.386875 119.053C1.59199 133.316 5.59466 147.202 12.1664 159.919C18.738 172.635 27.7501 183.933 38.6879 193.166C49.6256 202.4 62.275 209.388 75.9137 213.733C89.5524 218.078 103.913 219.694 118.177 218.489C132.44 217.284 146.326 213.281 159.043 206.71L143.635 176.895C134.834 181.444 125.223 184.214 115.351 185.048C105.479 185.882 95.5402 184.764 86.1007 181.756C76.6612 178.749 67.9065 173.912 60.3364 167.522C52.7663 161.131 46.529 153.312 41.9806 144.511C37.4323 135.71 34.662 126.099 33.828 116.227C32.9939 106.356 34.1124 96.4164 37.1196 86.9769C40.1267 77.5375 44.9637 68.7828 51.3543 61.2126C57.7448 53.6425 65.5639 47.4052 74.365 42.8569L58.9573 13.0426Z"
                    fill="#1D65C9"
                  />
                </svg>
              </div>{" "}
              <div className={styles.donutSvgWrapMobile}>
                <svg
                  width="75"
                  height="75"
                  viewBox="0 0 218 219"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M218 109.876C218 95.562 215.181 81.3881 209.703 68.1636C204.225 54.9391 196.196 42.923 186.075 32.8015C175.953 22.6799 163.937 14.651 150.712 9.17323C137.488 3.69547 123.314 0.876098 109 0.876099C94.6859 0.876099 80.512 3.69547 67.2875 9.17323C54.063 14.651 42.0469 22.6799 31.9254 32.8015C21.8038 42.923 13.7749 54.9391 8.29713 68.1636C2.81937 81.3881 -1.25138e-06 95.562 0 109.876H33.5611C33.5611 99.9693 35.5124 90.1596 39.3035 81.0069C43.0947 71.8542 48.6515 63.5379 55.6566 56.5327C62.6618 49.5276 70.9781 43.9708 80.1308 40.1796C89.2834 36.3885 99.0932 34.4372 109 34.4372C118.907 34.4372 128.717 36.3885 137.869 40.1796C147.022 43.9708 155.338 49.5276 162.343 56.5327C169.349 63.5379 174.905 71.8542 178.696 81.0069C182.488 90.1596 184.439 99.9693 184.439 109.876H218Z"
                    fill="#6FA3EC"
                  />
                  <path
                    d="M0.0171338 111.796C0.269273 126.108 3.33787 140.23 9.04774 153.356C14.7576 166.482 22.9969 178.355 33.2952 188.296C43.5935 198.238 55.7491 206.054 69.0681 211.298C82.387 216.542 96.6084 219.111 110.92 218.859C125.232 218.607 139.354 215.538 152.48 209.829C165.606 204.119 177.479 195.879 187.421 185.581C197.362 175.283 205.178 163.127 210.422 149.808C215.666 136.489 218.235 122.268 217.983 107.956L184.427 108.547C184.602 118.453 182.824 128.295 179.194 137.513C175.565 146.731 170.156 155.144 163.275 162.272C156.394 169.399 148.177 175.101 139.093 179.053C130.008 183.005 120.234 185.129 110.329 185.303C100.424 185.478 90.5812 183.7 81.3632 180.07C72.1451 176.441 63.7322 171.032 56.6048 164.151C49.4773 157.27 43.7749 149.053 39.8231 139.969C35.8713 130.884 33.7475 121.11 33.573 111.205L0.0171338 111.796Z"
                    fill="#002855"
                  />
                  <path
                    d="M58.9573 13.0426C46.2409 19.6143 34.9434 28.6263 25.7099 39.5641C16.4764 50.5019 9.48768 63.1513 5.14275 76.79C0.797814 90.4287 -0.818235 104.79 0.386875 119.053C1.59199 133.316 5.59466 147.202 12.1664 159.919C18.738 172.635 27.7501 183.933 38.6879 193.166C49.6256 202.4 62.275 209.388 75.9137 213.733C89.5524 218.078 103.913 219.694 118.177 218.489C132.44 217.284 146.326 213.281 159.043 206.71L143.635 176.895C134.834 181.444 125.223 184.214 115.351 185.048C105.479 185.882 95.5402 184.764 86.1007 181.756C76.6612 178.749 67.9065 173.912 60.3364 167.522C52.7663 161.131 46.529 153.312 41.9806 144.511C37.4323 135.71 34.662 126.099 33.828 116.227C32.9939 106.356 34.1124 96.4164 37.1196 86.9769C40.1267 77.5375 44.9637 68.7828 51.3543 61.2126C57.7448 53.6425 65.5639 47.4052 74.365 42.8569L58.9573 13.0426Z"
                    fill="#1D65C9"
                  />
                </svg>
              </div>
              <div className={styles.legendRow}>
                <div className={styles.legendDotPrimary} />
                <div className={styles.legendLabel}>Cash</div>
              </div>
            </div>

            {/* Area + label */}
            <div className={styles.areaCol}>
              <div className={styles.areaSvgWrap}>
                <svg
                  width="301"
                  height="219"
                  viewBox="0 0 301 151"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line y1="0.5" x2="300" y2="0.5" stroke="#CFD5DD" />
                  <line y1="50.5" x2="300" y2="50.5" stroke="#CFD5DD" />
                  <line y1="100.5" x2="300" y2="100.5" stroke="#CFD5DD" />
                  <line y1="150.5" x2="300" y2="150.5" stroke="#CFD5DD" />
                  <path
                    d="M298.5 1C235.3 93 73.1667 139 0 150.5H300.5V1H298.5Z"
                    fill="#CDE0FC"
                  />
                </svg>
              </div>{" "}
              <div className={styles.areaSvgWrapMobile}>
                <svg
                  width="100"
                  height="151"
                  viewBox="0 0 301 151"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line y1="0.5" x2="300" y2="0.5" stroke="#CFD5DD" />
                  <line y1="50.5" x2="300" y2="50.5" stroke="#CFD5DD" />
                  <line y1="100.5" x2="300" y2="100.5" stroke="#CFD5DD" />
                  <line y1="150.5" x2="300" y2="150.5" stroke="#CFD5DD" />
                  <path
                    d="M298.5 1C235.3 93 73.1667 139 0 150.5H300.5V1H298.5Z"
                    fill="#CDE0FC"
                  />
                </svg>
              </div>
              <div
                className={`${styles.legendRow} flex flex-row items-center justify-center`}
              >
                <div className={styles.legendDotSecondary} />
                <p className={styles.legendLabel}>conservative invested</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
