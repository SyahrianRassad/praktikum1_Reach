import React, {Component} from 'react';
import './App.css';
import Alert from './Components/Alert';
import Media from './Components/Media';

class App extends Component {
  constructor(){
    super();
    this.state={
      //BMI
      tinggi: 0,
      berat: 0,
      bmi: "",

      //Bank
      nominal: 0,
      bunga: 0,
      periode: "",
      cicilan: 0,

      //Harga Akhir
      hargaAwal: 0,
      ppn: 0,
      diskon: 0,
      hargaAkhir: 0,

      //4 Bilangan
      biner: 0,
      oktal: 0,
      decimal: 0,
      hexadecimal : 0,
      change: "",
      bodh: 0,
    }
  }
  
  //Body Mask Indexx
  changeTinggi = (event) =>{
    this.setState({tinggi: event.target.value});
  }

  changeBerat = (event) =>{
    this.setState({berat: event.target.value});
  }

  HitungBmi = () =>{
    
    let t = this.state.tinggi;
    let b = this.state.berat;
    let nilai = b/Math.pow(t,2);

    if(nilai<18.5){
      var anwer = "Kekurangan Berat Badan"
    }else if(nilai > 18 && nilai < 25){
      anwer = "Berat Badan Normal"
    }else if(nilai > 25 && nilai < 30){
      anwer = "Kelebihan Badan Normal"
    }else if(nilai > 30){
      anwer = "Kegemukan / Obesitas"
    }

    this.setState({bmi: anwer})
  }

  //Cicilan Bank
  changeNominal = (event)=>{
    this.setState({nominal: event.target.value});
  }

  changePeriode = (event)=>{
    this.setState({periode: event.target.value});
  }

  changeBunga = (event)=>{
    this.setState({bunga: event.target.value});
  }

  HitungCicilan = () =>{
    let n,b,p,nilai;

    n = this.state.nominal
    b = this.state.bunga
    p = eval(this.state.periode)

    if(p != 0){
      nilai = n/p + ((n/p)*(b/100));
    }else{
      nilai = n
    }
    


    this.setState({cicilan: nilai})
  }

  //Hitung Harga Akhir
  changeHarga = (event)=>{
    this.setState({hargaAwal: event.target.value});
  }

  changePPN = (event)=>{
    this.setState({ppn: event.target.value});
  }

  changeDiskon = (event)=>{
    this.setState({diskon: event.target.value});
  }

  hitungHarga = () =>{
    let d,h,p,nilai;

    d = this.state.diskon
    h = this.state.hargaAwal
    p = this.state.ppn

    if(d != 0){
      let hd = h - (h * (d/100))
      nilai = hd + (hd*(p/100));
      
    }else{
      nilai = h + (h*(p/100));
    }
    

    this.setState({hargaAkhir: nilai})
  }


  //Konvert 4 bilangan
  changeBiner = (event)=>{
    this.setState({biner: event.target.value});
  }

  changeChange = (event)=>{
    this.setState({change: event.target.value});
  }

  changeOktal = (event)=>{
    this.setState({oktal: event.target.value});
  }
  
  changeDecimal = (event)=>{
    this.setState({decimal: event.target.value});
  }

  changeHexadecimal = (event)=>{
    this.setState({hexadecimal: event.target.value});
  }

  binToAll = () =>{
    let bin,dec,ok,rem,i,nama,hex

    nama = this.state.change
    bin = this.state.biner
    dec = parseInt(bin, 2)

    this.setState({decimal: dec})

    if(nama == "decimal"){
      this.setState({bodh: dec})
    }else if(nama == "oktal"){
      ok = 0
      i = 1

      while(dec != 0){
        rem = dec%8
        dec = parseInt(dec/8)
        ok = ok + (rem * i)
        i = i * 10
      }

      this.setState({oktal: ok})
      this.setState({bodh: ok})
    }else if(nama == "hexadecimal"){
      hex = Number(dec).toString(16)

      this.setState({hexadecimal: hex})
      this.setState({bodh: hex})
    }else{
      alert("Error")
    }

    
  }

  okToAll = () =>{
    let bin,dec,ok,rem,i,nama,hex

    nama = this.state.change
    ok = this.state.oktal
    dec = parseInt(ok, 8)

    this.setState({decimal: dec})

    if(nama == "decimal"){
      this.setState({bodh: dec})
    }else if(nama == "biner"){
      bin = 0
      i = 1

      while(dec != 0){
        rem = dec%2
        dec = parseInt(dec/2)
        bin = bin + (rem * i)
        i = i * 10
      }

      this.setState({biner: bin})
      this.setState({bodh: bin})
    }else if(nama == "hexadecimal"){
      hex = Number(dec).toString(16)

      this.setState({hexadecimal: hex})
      this.setState({bodh: hex})
    }else{
      alert("Error")
    }
  }

  decToAll = () =>{
    let bin,dec,ok,rem,i,nama,hex

    nama = this.state.change
    dec = this.state.decimal

    this.setState({decimal: dec})

    if(nama == "biner"){
      bin = 0
      i = 1

      while(dec != 0){
        rem = dec%2
        dec = parseInt(dec/2)
        bin = bin + (rem * i)
        i = i * 10
      }

      this.setState({biner: bin})
      this.setState({bodh: bin})
    }else if(nama == "oktal"){
      ok = 0
      i = 1

      while(dec != 0){
        rem = dec%8
        dec = parseInt(dec/8)
        ok = ok + (rem * i)
        i = i * 10
      }

      this.setState({oktal: ok})
      this.setState({bodh: ok})
    }else if(nama == "hexadecimal"){
      hex = Number(dec).toString(16)

      this.setState({hexadecimal: hex})
      this.setState({bodh: hex})
    }else{
      alert("Error")
    }

    
  }

  hexToAll = () =>{
    let bin,dec,ok,rem,i,nama,hex

    nama = this.state.change
    hex = this.state.hexadecimal
    dec = parseInt(hex, 16)

    this.setState({decimal: dec})

    if(nama == "decimal"){
      this.setState({bodh: dec})
    }else if(nama == "oktal"){
      ok = 0
      i = 1

      while(dec != 0){
        rem = dec%8
        dec = parseInt(dec/8)
        ok = ok + (rem * i)
        i = i * 10
      }

      this.setState({oktal: ok})
      this.setState({bodh: ok})
    }else if(nama == "biner"){
      bin = 0
      i = 1

      while(dec != 0){
        rem = dec%2
        dec = parseInt(dec/2)
        bin = bin + (rem * i)
        i = i * 10
      }

      this.setState({biner: bin})
      this.setState({bodh: bin})
    }else{
      alert("Error")
    }

    
  }

  

  render(){
    return (
      <div className='App'>
        <div className='App container col-sm-5'>
          <div className='card pt-4'>
            <h2 className='d-flex justify-content-center align-items-center'>Body Mask Indexx</h2>
            
            <div className='form-group mb-3'>
              <label>Tinggi</label>
              <input type='number' name='tinggi' value={this.state.tinggi} onChange={this.changeTinggi} />
            </div>
            
            <div className='form-group mb-3'>
              <label>Berat</label>
              <input type='number' name='berat' value={this.state.berat} onChange={this.changeBerat} />
            </div>

            <div className='d-flex align-items-center justify-content-center'>
              <button className='btn btn-success' onClick={this.HitungBmi}>Hitung</button>
            </div>

            <div className='card p-3'>
              <h4 className='text-center fw-bold'>Hasil</h4><br></br>
              <Alert type="success" onChange={this.HitungBmi}>{this.state.bmi}</Alert>
            </div>
          </div>
          
          
        </div>

        <div className='App container col-sm-5 my-5'>
          <div className='card pt-4'>
            <h2 className='d-flex justify-content-center align-items-center'>Cicilan Bank</h2>

            <div className='form-group mb-3'>
              <label>Nominal</label>  
              <input type='number' name='nominal' value={this.state.nominal} onChange={this.changeNominal} />
            </div>

            <div className='form-group mb-3'>
            <label>Bunga</label>
            <input type='number' name='bunga' value={this.state.bunga} onChange={this.changeBunga} />
            </div>

            <div className='form-group mb-3'>
              <label>Periode</label>
              <select name='periode' value={this.state.periode} onChange={this.changePeriode}>
                <option value='0'>0 Bulan</option>
                <option value='1'>1 Bulan</option> 
                <option value='2'>2 Bulan</option> 
                <option value='3'>3 Bulan</option> 
                <option value='4'>4 Bulan</option> 
                <option value='5'>5 Bulan</option> 
                <option value='6'>6 Bulan</option> 
                <option value='7'>7 Bulan</option> 
                <option value='8'>8 Bulan</option> 
                <option value='9'>9 Bulan</option>
                <option value='10'>10 Bulan</option> 
                <option value='11'>11 Bulan</option> 
                <option value='12'>12 Bulan</option>  
              </select><br></br>
            </div>

            <div className='d-flex align-items-center justify-content-center'>
              <button className='btn btn-info' onClick={this.HitungCicilan}>Hitung</button>
            </div>

            <div className='card p-3 my-1'>
              <h5>Hasil</h5>
              <Alert type="success" onChange={this.HitungCicilan}>{this.state.cicilan}</Alert>
            </div>
          </div>
          
          
        </div>

        <div className='App container col-sm-5 my-5'>
          <div className='card pt-4'>
            <h2 className='d-flex justify-content-center align-items-center'>Hitung Harga Akhir</h2>

            <div className='form-group mb-3'>
              <p>Harga Awal <input className='form-control' type='number' name='hargaAwal' value={this.state.hargaAwal} onChange={this.changeHarga} /></p>
            </div>

            <div className='form-group mb-3'>
              <p>PPN  <input className='form-control' type='number' name='ppn' value={this.state.ppn} onChange={this.changePPN} /></p>
            </div>

            <div className='form-group mb-3'>
              <p>Diskom  <input className='form-control' type='number' name='diskon' value={this.state.diskon} onChange={this.changeDiskon} /></p>
            </div>

            <div className='d-flex align-items-center justify-content-center'>
              <button className='btn btn-danger' onClick={this.hitungHarga}>Hitung</button>
            </div>

            <div className='card p-3 my-1'>
            <h5>Hasil Akhir</h5>
            <Alert type="success" onChange={this.hitungHarga}>{this.state.hargaAkhir}</Alert>
            </div>
          </div>
        </div>

        <div className='App container col-sm-5 my-5'>
          <div className='card pt-4'>
            <h2 className='d-flex justify-content-center align-items-center'>Konversi Bilangan Biner</h2>

            <div className='form-group mb-3'>
              <p>Biner <input className='form-control' type='number' name='hargaAwal' value={this.state.biner} onChange={this.changeBiner} /></p>
            </div>

            <div className='form-group mb-3'>
              <p>Konvert
                <select name='periode' className='form-control' value={this.state.change} onChange={this.changeChange}>
                  <option></option>
                  <option value='oktal'>Oktal</option>
                  <option value='decimal'>Decimal</option> 
                  <option value='hexadecimal'>hexadecimal</option> 
                </select><br></br>
              </p>
            </div>

            <div className='d-flex align-items-center justify-content-center'>
              <button className='btn btn-danger' onClick={this.binToAll} onChange={this.binToAll} >Convert</button>
            </div>

            <div className='card p-3 my-1'>
              <h5>Hasil Akhir</h5>
              <Alert type="success" onChange={this.binToAll}>{this.state.bodh}</Alert>
            </div>
          </div>
        </div>

        <div className='App container col-sm-5 my-5'>
          <div className='card pt-4'>
            <h2 className='d-flex justify-content-center align-items-center'>Konversi Bilangan Oktal</h2>

            <div className='form-group mb-3'>
              <p>Oktal <input className='form-control' type='number' name='hargaAwal' value={this.state.oktal} onChange={this.changeOktal} /></p>
            </div>

            <div className='form-group mb-3'>
              <p>Konvert
                <select name='periode' className='form-control' value={this.state.change} onChange={this.changeChange}>
                  <option></option>
                  <option value='biner'>Biner</option>
                  <option value='decimal'>Decimal</option> 
                  <option value='hexadecimal'>hexadecimal</option> 
                </select>
              </p>
            </div>

            <div className='d-flex align-items-center justify-content-center'>
              <button className='btn btn-danger' onClick={this.okToAll} onChange={this.okToAll} >Convert</button>
            </div>

            <div className='card p-3 my-1'>
              <h5>Hasil Akhir</h5>
              <Alert type="success" onChange={this.okToAll}>{this.state.bodh}</Alert>
            </div>
          </div>
        </div>

        <div className='App container col-sm-5 my-5'>
          <div className='card pt-4'>
            <h2 className='d-flex justify-content-center align-items-center'>Konversi Bilangan Decimal</h2>

            <div className='form-group mb-3'>
              <p>Decimal <input className='form-control' type='number' name='hargaAwal' value={this.state.decimal} onChange={this.changeDecimal} /></p>
            </div>

            <div className='form-group mb-3'>
              <p>Konvert
                <select name='periode' className='form-control' value={this.state.change} onChange={this.changeChange}>
                  <option></option>
                  <option value='biner'>Biner</option>
                  <option value='oktal'>Oktal</option> 
                  <option value='hexadecimal'>hexadecimal</option> 
                </select><br></br>
              </p>
            </div>

            <div className='form-group mb-3'>
              
            </div>

            <div className='d-flex align-items-center justify-content-center'>
              <button className='btn btn-danger' onClick={this.decToAll} onChange={this.decToAll} >Convert</button>
            </div>
              <h5>Hasil Akhir</h5><br></br>
              <Alert type="success" onChange={this.decToAll}>{this.state.bodh}</Alert>
            <div className='card p-3 my-1'>
              
            </div>
          </div>
        </div>

        <div className='App container col-sm-5 my-5'>
          <div className='card pt-4'>
            <h2 className='d-flex justify-content-center align-items-center'>Konversi Bilangan Hexadecimal</h2>

            <div className='form-group mb-3'>
              <p>Hexadecimal <input className='form-control' type='text' name='hargaAwal' value={this.state.hexadecimal} onChange={this.changeHexadecimal} /></p>
            </div>

            <div className='form-group mb-3'>
              <p>Konvert
                <select name='periode' className='form-control' value={this.state.change} onChange={this.changeChange}>
                  <option></option>
                  <option value='biner'>Biner</option>
                  <option value='decimal'>Decimal</option> 
                  <option value='oktal'>Oktal</option> 
                </select><br></br>
              </p>
            </div>

            <div className='d-flex align-items-center justify-content-center'>
              <button className='btn btn-danger' onClick={this.hexToAll} onChange={this.hexToAll} >Convert</button>
            </div>

            <div className='card p-3 my-1'>
              <h5>Hasil Akhir</h5><br></br>
              <Alert type="success" onChange={this.hexToAll}>{this.state.bodh}</Alert>
            </div>
          </div>
        </div>
      </div>
    );
  }
}



export default App;