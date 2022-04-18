import React from 'react';
import {Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle';
// import 'bootstrap/dist/css/'

import Beranda from './Beranda';
import TentangSaya from "./TentangSaya";
import Karya from "./Karya";
import Kontak from "./Kontak";
import Galeri from "./Galeri";
import Pegawai from './pegawai';

const Utama = () => (
        <Routes>
            <Route exact path="/" element={<Beranda/>} />
            <Route path="/TentangSaya" element={<TentangSaya/>} />
            <Route path="/karya" element={<Karya/>} />
            <Route path="/kontak" element={<Kontak/>} />
            <Route path="/galeri" element={<Galeri/>} />
            <Route path="/pegawai" element={<Pegawai/>} />
        </Routes>
)

export default Utama;