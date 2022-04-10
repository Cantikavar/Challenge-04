import React, { useState } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import "../DetailSewa/DetailSewa.css";
import logoDashboard from "../../Assets/IMG/logo.png";
import logoCalender from "../../Assets/IMG/fi_calendar.png";
import logoClock from "../../Assets/IMG/fi_clock.png";
import logoUser from "../../Assets/IMG/fi_users.png";
import carMobil from "../../Assets/IMG/image 1.png";
import logoSetting from "../../Assets/IMG/fi_settings.png";
import logoFacbook from "../../Assets/IMG/icon_facebook.png";
import logoInstagram from "../../Assets/IMG/icon_instagram.png";
import logoTwitter from "../../Assets/IMG/icon_twitter.png";
import logoMail from "../../Assets/IMG/icon_mail.png";
import logoTwicth from "../../Assets/IMG/icon_twitch.png";

export const DetailSewa = () => {
  return (
    <div className="main-container">
      <div className="container-dashboard">
        <Navbar>
          <Container>
            <Navbar.Brand>
              <img alt="" src={logoDashboard} className="logoDashboard" />{" "}
            </Navbar.Brand>
            <Nav className="justify-content-end">
              <Nav.Link href="#our-sevices" className="ourServices">
                Our Services
              </Nav.Link>
              <Nav.Link href="#why-us" className="whyUs">
                Why Us
              </Nav.Link>
              <Nav.Link href="#testimonial" className="testMoni">
                Testimonial
              </Nav.Link>
              <Nav.Link href="#faq" className="faQ">
                FAQ
              </Nav.Link>
              <div className="btn-register">
                <p>Register</p>
              </div>
            </Nav>
          </Container>
        </Navbar>
      </div>

      <div className="container-frame">
        <p className="pencarianS">
          <strong>Pencarianmu</strong>
        </p>
        <div className="judul01">
          <p>Tipe Driver</p>
        </div>
        <div className="tipeDriver"></div>

        <div className="judul02">
          <p>Tanggal</p>
        </div>
        <div className="date-frame">
          <img alt="" src={logoCalender} className="logoCalender03" />
        </div>

        <div className="judul03">
          <p>Waktu Jemput/Ambil</p>
        </div>
        <div className="time-frame">
          <img alt="" src={logoClock} className="logoClock03" />
        </div>

        <div className="judul04">
          <p>Jumlah Penumpang (optional)</p>
        </div>
        <div className="people-frame">
          <img alt="" src={logoUser} className="logoUser03" />
        </div>
      </div>

      <div className="container-content0103">
        <h5 className="judul-card0103">Tentang Paket</h5>
        <p className="line-01">Include</p>
        <ul className="point-01">
          <li>Apa saja yang termasuk dalam paket misal durasi max 12 jam</li>
          <li>Sudah termasuk bensin selama 12 jam</li>
          <li>Sudah termasuk Tiket Wisata</li>
          <li>Sudah termasuk pajak</li>
        </ul>

        <p className="line-01">Exclude</p>
        <ul className="point-01">
          <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
          <li>
            Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
            20.000/jam
          </li>
          <li>Tidak termasuk akomodasi penginapan</li>
        </ul>
        <div className="line-strong">
          <p>
            <strong>Refund, Reschedule, Overtime</strong>
          </p>
        </div>
        <ul className="point-03">
          <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
          <li>
            Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
            20.000/jam
          </li>
          <li>Tidak termasuk akomodasi penginapan</li>
          <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
          <li>
            Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
            20.000/jam
          </li>
          <li>Tidak termasuk akomodasi penginapan</li>
          <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
          <li>
            Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
            20.000/jam
          </li>
          <li>Tidak termasuk akomodasi penginapan</li>
        </ul>
      </div>

      <div className="container-cardCar03">
        <img alt="" src={carMobil} className="carMobil" />
        <div className="judul-cardcar">
          <p>
            <strong>Nama/Tipe Mobil</strong>
          </p>
        </div>
        <div className="property-car-2">
          <img alt="" src={logoUser} /> 4 orang
        </div>

        <div className="property-car-settings">
          <img alt="" src={logoSetting} /> Manual
        </div>

        <div className="property-car-calender">
          <img alt="" src={logoCalender} /> Tahun 2020
        </div>

        <p className="judul-cardcar02">Total</p>
        <div className="price-car">
          <p>
            <strong>Rp 430.000</strong>
          </p>
        </div>

        <div className="btn-payment">
          <p>Lanjutkan Pembayaran</p>
        </div>
      </div>

      <div className="btn-payment-0302">
        <p>Lanjutkan Pembayaran</p>
      </div>

      <div className="Footer-Container">
        <div className="footer-content1">
          <ul>
            <li>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</li>
            <li>binarcarrental@gmail.com</li>
            <li>081-233-334-808</li>
          </ul>
        </div>

        <div className="footer-content2">
          <ul>
            <li>Our Services</li>
            <li>Why Us</li>
            <li>Testimonial</li>
            <li>FAQ</li>
          </ul>
        </div>

        <div className="footer-content3">
          <p>Connect with us</p>
          <ul>
            <li>
              <img alt="" src={logoFacbook} className="logoFacbook" />
            </li>
            <li>
              <img alt="" src={logoInstagram} className="logoInstagram" />
            </li>
            <li>
              <img alt="" src={logoTwitter} className="logoTwitter" />
            </li>
            <li>
              <img alt="" src={logoMail} className="logoMail" />
            </li>
            <li>
              <img alt="" src={logoTwicth} className="logoTwicth" />
            </li>
          </ul>
        </div>

        <div className="footer-content4">
          <p>Copyright Binar 2022</p>
          <img alt="" src={logoDashboard} className="logoDashboard" />
        </div>
      </div>
    </div>
  );
};
