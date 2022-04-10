import React, { useState } from "react";
import { Button, Container, Dropdown, Nav, Navbar } from "react-bootstrap";
import DatePicker from "react-datepicker";
import logoDashboard from "../../Assets/IMG/logo.png";
import logoCar from "../../Assets/IMG/img_car.png";
import logoFacbook from "../../Assets/IMG/icon_facebook.png";
import logoInstagram from "../../Assets/IMG/icon_instagram.png";
import logoTwitter from "../../Assets/IMG/icon_twitter.png";
import logoMail from "../../Assets/IMG/icon_mail.png";
import logoTwicth from "../../Assets/IMG/icon_twitch.png";

import "../Dashboard/Dashboard.css";

export const Dasboard = () => {
  const [date, setDate] = useState(new Date());
  const [startDate, setStartDate] = useState(new Date());

  const handleCalendarClose = () => console.log("Calendar closed");
  const handleCalendarOpen = () => console.log("Calendar opened");

  const GoHalamanC =()=>{
    window.location.href="/pencarianMobil"
  }

  return (
    <div className="main-container">
      <div className="container-dashboard01">
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

        <div className="container-content">
          <h1>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
          <p>
            Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas
            terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu
            untuk sewa mobil selama 24 jam.
          </p>
        </div>

        <div className="container-content-car">
          <img alt="" src={logoCar} className="logoCar" />
        </div>
      </div>

      <div className="container-frame01">
        <div className="judul0101">
          <p>Tipe Driver</p>
        </div>
        <div className="tipeDriver01">
          <select>
            <option value={"Pilih Tipe Driver"}>Pilih Tipe Driver</option>
            <option value={"Dengan Sopir"}>Dengan Sopir</option>
            <option value={"Tanpa Sopir (Lepas Kunci)"}>
              Tanpa Sopir (Lepas Kunci)
            </option>
          </select>
        </div>

        <div className="judul0102">
          <p>Tanggal</p>
        </div>
        <div className="date-frame01">
          <DatePicker
            value="Pilih Tanggal"
            selected={date}
            onChange={(date) => setDate(date)}
            onCalendarClose={handleCalendarClose}
            onCalendarOpen={handleCalendarOpen}
          />
        </div>

        <div className="judul0103">
          <p>Waktu Jemput/Ambil</p>
        </div>
        <div className="time-frame01">
          <DatePicker
            value="Pilih Waktu"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={15}
            timeCaption="Time"
            dateFormat="h:mm aa"
          />
        </div>

        <div className="judul0104">
          <p>Jumlah Penumpang (optional)</p>
        </div>
        <div className="people-frame01">
          <form>
            <label>
              <input type="text" name="name" value="Jumlah Penumpang" />
            </label>
          </form>
        </div>

        <div className="btn-searchmobil01">
        <a href='pencarianMobil' className='tag' onClick={()=>{GoHalamanC()}}>
        Cari Mobil </a>
          
        </div>
      </div>

      <div className="Footer-Container01">
        <div className="footer-content101">
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
