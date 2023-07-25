"use client";

import styles from "@/app/[locale]/contact/contact.module.css";
import images from "@/constants/images";
import useOnlineStatus from "@/hooks/useOnlineStatus";
import Image from "next/image";

const ContactPage = () => {
  const isOnline = useOnlineStatus();
  return (
    <div className={`${styles.contactContainer}`}>
      <div className={`${styles.contactContent} ${styles.flexContainer}`}>
        <ul className={styles.contactList}>
          <li className={styles.contactItem}>
            <Image
              src={images.CONTACT_PHONE.src}
              alt="contact - phone"
              width={20}
              height={20}
            />
            <p>333-4444-5555</p>
          </li>
          <li className={styles.contactItem}>
            <Image
              src={images.CONTACT_EMAIL.src}
              alt="contact - phone"
              width={20}
              height={20}
            />
            <p>info@oishiicuisine.com</p>
          </li>
          <li className={styles.contactItem}>
            <Image
              src={images.CONTACT_WEBSITE.src}
              alt="contact - phone"
              width={20}
              height={20}
            />
            <p>www.oishiicuisine.com</p>
          </li>
          <li className={styles.contactItem}>
            <Image
              src={images.CONTACT_LOCATION.src}
              alt="contact - phone"
              width={20}
              height={20}
            />
            <p>
              177 Broadway, Lower Manhattan,
              <br />
              New York City, NY
              <br />
              Verenigde Staten
            </p>
          </li>
        </ul>
        <div>
          <div className={styles.googleMap}>
            <iframe
              width="600"
              height="500"
              id="gmap_canvas"
              src="https://www.google.com/maps/embed/v1/place?q=177+Broadway,+Manhattan,+New+York,+NY,+USA&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
