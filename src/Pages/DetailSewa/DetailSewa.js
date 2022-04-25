import React, { useEffect, useState } from "react";
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
import { useParams } from "react-router";
import axios from "axios";
import {Card, CardActionArea, CardActions, CardContent, CardMedia, makeStyles, Typography } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { fetchItem, setButton } from "../../Redux/Action/Action";
import { CalendarTodayOutlined, PeopleOutline, SettingsOutlined } from "@material-ui/icons";


const useStyles = makeStyles((theme) => ({
  detailCard: {
    background: "white",
    padding: "100px 0",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
}));

export const DetailSewa = () => {
  const { carId } = useParams();
  console.log(carId);
  const cars = useSelector((state) => state.selectedItem);
  console.log(cars);
  const dispatch = useDispatch();
  const btn = useSelector((state) => state.buttonText.buttonText);

  useEffect(() => {
    if (carId && carId !== "") dispatch(fetchItem(carId));
    dispatch(setButton("Lanjutkan pembayaran"));
  });

  const classes = useStyles();

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

    <div className="detailCard">
      <div className={classes.detailCard}>
        <div style={{ width: "80%", display: "flex", justifyContent: "space-between", alignItems: "flex-start", paddingBottom: "20px" }}>
          <Card item={true} style={{ width: "60%", marginBottom: "10px" }}>
            <CardActionArea>
              <CardContent>
                <Typography variant="p" component="div" style={{ fontWeight: "bold", paddingBottom: "8px" }}>
                  Tentang Paket
                </Typography>
                <Typography variant="body2" color="text.secondary" style={{ paddingBottom: "8px" }}>
                  Include
                </Typography>

                <Typography variant="body2" color="text.secondary" style={{ paddingBottom: "8px" }}>
                  <ul>
                    <li>Apa saja yang termasuk dalam paket misal durasi max 12 jam</li>
                    <li>Sudah termasuk bensin selama 12 jam</li>
                    <li>Sudah termasuk Tiket Wisata</li>
                    <li>Sudah termasuk pajak</li>
                  </ul>
                </Typography>

                <Typography variant="body2" color="text.secondary" style={{ paddingBottom: "8px" }}>
                  Exclude
                </Typography>
                <Typography variant="body2" color="text.secondary" style={{ paddingBottom: "8px" }}>
                  <ul>
                    <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                    <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                    <li>Tidak termasuk akomodasi penginapan</li>
                  </ul>
                </Typography>
                <Typography variant="p" component="div" style={{ fontWeight: "bold", paddingBottom: "8px" }}>
                  Refund, Reschedule, Overtime
                </Typography>
                <Typography variant="body2" color="text.secondary" style={{ paddingBottom: "8px" }}>
                  <ul>
                    <li>Tidak termasuk biaya makan sopir Rp 75.000/hari </li>
                    <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                    <li>Tidak termasuk akomodasi penginapan</li>
                    <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                    <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                    <li>Tidak termasuk biaya makan sopir Rp 75.000/hari </li>
                    <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                    <li>Tidak termasuk akomodasi penginapan</li>
                    <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                    <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                  </ul>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>

          <Card style={{ width: "32%", marginBottom: "10px" }}>
            <CardActionArea>
              <CardMedia component="img" image={cars.image} alt={cars.name} style={{ padding: "10px", maxHeight: "200px" }} />
              <CardContent>
                <Typography variant="h6" component="div" style={{ paddingBottom: "8px" }}>
                  {cars.name}
                </Typography>
                <Typography style={{ display: "flex", color: "grey" }}>
                  <Typography variant="body2" color="text.secondary" style={{ display: "flex", alignItems: "center" }}>
                    <PeopleOutline /> 4 Orang &nbsp;
                  </Typography>
                  <Typography variant="body2" color="text.secondary" style={{ display: "flex", alignItems: "center" }}>
                    <SettingsOutlined /> {cars?.category} &nbsp;
                  </Typography>
                  <Typography variant="body2" color="text.secondary" style={{ display: "flex", alignItems: "center" }}>
                    <CalendarTodayOutlined /> {cars.time}
                  </Typography>
                </Typography>

                <Typography style={{ display: "flex" }}>
                  <Typography style={{ paddingTop: "40px" }}>Total </Typography>
                  <Typography variant="p" component="div" style={{ fontWeight: "bold", paddingTop: "40px", marginLeft: "188px" }}>
                    Rp {cars.price}
                  </Typography>
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button variant="contained" style={{ background: "#5CB85F", color: "white" }} fullWidth>
                {/* Pilih Mobil */}
                {btn}
              </Button>
            </CardActions>
          </Card>
        </div>
        <Button href={`/pemesanan`} variant="contained" style={{ background: "#5CB85F", color: "white" }}>
          Lanjutkan Pembayaran
        </Button>
      </div>
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
