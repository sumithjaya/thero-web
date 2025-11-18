import Image from "next/image";
import styles from "./OurProcess.module.css";
export default function OurProcess() {
  return (
    <section className={styles.op_container}>
      <h2>
        Our <span className={styles.brand}>Process</span>
      </h2>
      <div className={styles.op_cards}>
        <div className={styles.op_card}>
          <div className={styles.op_icon}>
            <div className={styles.op_icon_wrap}>
              <svg
                width="54"
                height="54"
                viewBox="0 0 54 54"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M44.999 24.7501C44.999 35.9326 35.9315 45.0001 24.749 45.0001C13.5665 45.0001 4.49902 35.9326 4.49902 24.7501C4.49902 13.5676 13.5665 4.50012 24.749 4.50012"
                  stroke="#0047AB"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M42.5929 46.5518C43.7854 50.1518 46.5079 50.5118 48.6004 47.3618C50.5129 44.4818 49.2529 42.1193 45.7879 42.1193C43.2229 42.0968 41.7829 44.0993 42.5929 46.5518Z"
                  stroke="#0047AB"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M31.499 11.2501H44.999"
                  stroke="#0047AB"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M31.499 18.0001H38.249"
                  stroke="#0047AB"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <div className={styles.op_content}>
            <h3 className={styles.op_title}>Research</h3>
            <p className={styles.op_description}>
              One disadvantage of Lorum Ipsum is that in Latin certain letters
              appear
            </p>
          </div>
        </div>
        <div className={styles.op_card}>
          <div className={styles.op_icon}>
            <div className={styles.op_icon_wrap}>
              <svg
                width="54"
                height="54"
                viewBox="0 0 54 54"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M27 33.75C30.7279 33.75 33.75 30.7279 33.75 27C33.75 23.2721 30.7279 20.25 27 20.25C23.2721 20.25 20.25 23.2721 20.25 27C20.25 30.7279 23.2721 33.75 27 33.75Z"
                  stroke="#0047AB"
                  strokeWidth="3.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4.49902 28.9802V25.0202C4.49902 22.6802 6.41152 20.7452 8.77402 20.7452C12.8465 20.7452 14.5115 17.8652 12.464 14.3327C11.294 12.3077 11.9915 9.67522 14.039 8.50522L17.9315 6.27772C19.709 5.22022 22.004 5.85022 23.0615 7.62772L23.309 8.05522C25.334 11.5877 28.664 11.5877 30.7115 8.05522L30.959 7.62772C32.0165 5.85022 34.3115 5.22022 36.089 6.27772L39.9815 8.50522C42.029 9.67522 42.7265 12.3077 41.5565 14.3327C39.509 17.8652 41.174 20.7452 45.2465 20.7452C47.5865 20.7452 49.5215 22.6577 49.5215 25.0202V28.9802C49.5215 31.3202 47.609 33.2552 45.2465 33.2552C41.174 33.2552 39.509 36.1352 41.5565 39.6677C42.7265 41.7152 42.029 44.3252 39.9815 45.4952L36.089 47.7227C34.3115 48.7802 32.0165 48.1502 30.959 46.3727L30.7115 45.9452C28.6865 42.4127 25.3565 42.4127 23.309 45.9452L23.0615 46.3727C22.004 48.1502 19.709 48.7802 17.9315 47.7227L14.039 45.4952C11.9915 44.3252 11.294 41.6927 12.464 39.6677C14.5115 36.1352 12.8465 33.2552 8.77402 33.2552C6.41152 33.2552 4.49902 31.3202 4.49902 28.9802Z"
                  stroke="#0047AB"
                  strokeWidth="3.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <div className={styles.op_content}>
            <h3 className={styles.op_title}>Build</h3>
            <p className={styles.op_description}>
              One disadvantage of Lorum Ipsum is that in Latin certain letters
              appear
            </p>
          </div>
        </div>{" "}
        <div className={styles.op_card}>
          <div className={styles.op_icon}>
            <div className={styles.op_icon_wrap}>
              <svg
                width="54"
                height="54"
                viewBox="0 0 54 54"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.6029 5.01727L12.3754 9.24727C9.78785 10.2148 7.67285 13.2748 7.67285 16.0198V32.7373C7.67285 35.3923 9.42785 38.8798 11.5654 40.4773L21.2404 47.6998C24.4129 50.0848 29.6329 50.0848 32.8054 47.6998L42.4804 40.4773C44.6178 38.8798 46.3729 35.3923 46.3729 32.7373V16.0198C46.3729 13.2523 44.2579 10.1923 41.6704 9.22477L30.4429 5.01727C28.5304 4.31977 25.4704 4.31977 23.6029 5.01727Z"
                  stroke="#0047AB"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M20.3613 26.7078L23.9838 30.3303L33.6588 20.6553"
                  stroke="#0047AB"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <div className={styles.op_content}>
            <h3 className={styles.op_title}>Protect</h3>
            <p className={styles.op_description}>
              One disadvantage of Lorum Ipsum is that in Latin certain letters
              appear
            </p>
          </div>
        </div>
      </div>
      <div className={styles.dotsTwo}>
        <Image
          src="/images/svg/dotsTwo.svg"
          alt="image"
          width={120}
          height={187}
        />
      </div>
    </section>
  );
}
