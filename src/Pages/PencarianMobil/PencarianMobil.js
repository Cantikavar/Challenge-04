import { Button, Card, Container, Nav, Navbar } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "../PencarianMobil/PencarianMobil.css";
import "../PencarianMobil/Cars";
import logoDashboard from "../../Assets/IMG/logo.png";
import carMobil from "../../Assets/IMG/image 1.png";
import logoUser from "../../Assets/IMG/fi_users.png";
import logoSetting from "../../Assets/IMG/fi_settings.png";
import logoCalender from "../../Assets/IMG/fi_calendar.png";
import logoFacbook from "../../Assets/IMG/icon_facebook.png";
import logoInstagram from "../../Assets/IMG/icon_instagram.png";
import logoTwitter from "../../Assets/IMG/icon_twitter.png";
import logoMail from "../../Assets/IMG/icon_mail.png";
import logoTwicth from "../../Assets/IMG/icon_twitch.png";
import { Grid, Typography } from "@material-ui/core";
import Cars from "../PencarianMobil/Cars";
import { useDispatch, useSelector } from "react-redux";
import { fetchItems, setButton } from "../../Redux/Action/Action";
import { useEffect, useState } from "react";

export const PencarianMobil = () => {
  
  const btn = useSelector((state) => state.buttonText.buttonText);
  const cars = useSelector((state) => state.cars.items);
  console.log(cars);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setButton("Pilih Mobil"));
    dispatch(fetchItems());
  });

  const [date, setDate] = useState(new Date());
  const [startDate, setStartDate] = useState(new Date());

  const handleCalendarClose = () => console.log("Calendar closed");
  const handleCalendarOpen = () => console.log("Calendar opened");

  const GoHalamanD = () => {
    window.location.href = "/detailSewa";
  };

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
        <div className="judul0201">
          <p>Tipe Driver</p>
        </div>
        <div className="tipeDriver02">
          <select>
            <option value={"Dengan Sopir"}>Dengan Sopir</option>
            <option value={"Tanpa Sopir (Lepas Kunci)"}>
              Tanpa Sopir (Lepas Kunci)
            </option>
          </select>
        </div>

        <div className="judul0202">
          <p>Tanggal</p>
        </div>
        <div className="date-frame02">
          <DatePicker
            value="27 Mar 2022"
            selected={date}
            onChange={(date) => setDate(date)}
            onCalendarClose={handleCalendarClose}
            onCalendarOpen={handleCalendarOpen}
          />
        </div>

        <div className="judul0203">
          <p>Waktu Jemput/Ambil</p>
        </div>
        <div className="time-frame02">
          <DatePicker
            value="10.00 WIB"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={15}
            timeCaption="Time"
            dateFormat="h:mm aa"
          />
        </div>

        <div className="judul0204">
          <p>Jumlah Penumpang (optional)</p>
        </div>
        <div className="people-frame02">
          <form>
            <label>
              <input type="text" name="name" value="Jumlah Penumpang" />
            </label>
          </form>
        </div>

        <div className="btn-edit02">
          <p>
            <strong>Edit</strong>
          </p>
        </div>
      </div>

      <div>
      <Grid container justifyContent="center">
        {/* {cars ? ( */}
        {typeof cars !== "undefined" ? (
          cars.map((item) => {
            return (
              <Grid elevation={0} spacing={1} item key={item.id}>
                <Cars item={item} />
              </Grid>
            );
          })
        ) : (
          <Typography>Empty List</Typography>
        )}
      </Grid>
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

export default Card;