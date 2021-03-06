import React from 'react';

import InfiniteCarousel from 'react-leaf-carousel';

import { Grid, Button } from '@material-ui/core';
import { COLOR, BOLD, COLUMN_CENNTER, BUTTON_OVAL, DARK } from '../../../assets/css/main';
import { Link } from "react-router-dom";
import { grey } from '@material-ui/core/colors';
import "react-multi-carousel/lib/styles.css"; 
import {Gambarinput,Frame } from '../../../assets/img';
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { Header,Headerafter, Footer } from '../../components/index.js';
import './Kontentrainersimpan.css';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import InfoIcon from '@material-ui/icons/Info';
import CollectionsBookmarkIcon from '@material-ui/icons/CollectionsBookmark';

import IconButton from '@material-ui/core/IconButton';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'; 
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
//My first changex
const useStyles = makeStyles(theme => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: "100%",
      
      border :" #e0e0e0",
      backgroundColor:"#fbfbfb" ,
      opacity:"0.1",
      
      
    },
    selectEmpty: {
      marginTop: theme.spacing(0)
    }
  }));
  

export default function Uploadtrainer()  {
    const classes = useStyles();
    const [state, setState] = React.useState({
      level: ""
    });
    
    

    const handleChange = name => event => {
      setState({
        ...state,
        [name]: event.target.value
      });
    };
    
    
    
    
        return (
             
            <React.Fragment>
                <Grid container justify="center" alignContent="center" >
                    
                
                    <Grid item lg={12} container justify="center"   style={{ backgroundColor:"#fbfbfb"  }}>
                            <Grid item lg={12}  style={{height:"1000px" }}  >
                                    <Grid container direction="row" item lg={12} style={{height:"75px"}}>
                                              <Grid container direction="row" item lg={12}  style={{ height:"60px" ,backgroundColor:"#656c9a" }}>
                                                  <Grid container alignItems="center" justify="center" item md={3}  style={{height:"100%" }}>
                                                      <Button variant="text" startIcon={<ArrowBackIosIcon />} style={{ fontSize:"12px" ,color:"#4e7ad2",textAlign:"center",textTransform:"capitalize",fontWeight:"bold",borderRadius:"40px",border:"solid 1px #4774d1" ,backgroundColor:"#ffffff",width:"40%" ,height:"60%"}}>Kembali</Button>
                                                  </Grid>
                                                  <Grid container alignItems="center" justify="flex-start" item md={9} style={{height:"100%"}}>
                                                      <div className="materibaru">
                                                        Buat Materi Baru
                                                      </div>
                                                  </Grid>

                                              </Grid>
                                             
                                    </Grid>
                                    <Grid item lg={12} container direction="row" style={{backgroundColor:"#ffffff", height:"120px"}}  >
                                          <Grid item lg={3} c style={{height:"120px" ,backgroundColor:"#ffffff"}}>
                                                <Grid container direction="row" item md={12} style={{height:"60px",backgroundColor:"#ffffff"}}>
                                                  <Grid item lg={3} >

                                                  </Grid>
                                                  <Grid container alignItems="center" justify="flex-start"  item lg={9} >
                                                     <Button  startIcon={<InfoIcon style={{color:"#4e7ad2"}} />} style={{ fontSize:"16px" ,color:"#333333",textTransform:"capitalize",fontWeight:"bold",backgroundColor:"#ffffff",width:"80%" ,height:"60px"}}>Informasi Materi</Button>
                                                  </Grid>
                                                </Grid>
                                                <Grid container direction="row" item md={12} style={{height:"60px",backgroundColor:"#ffffff"}}>
                                                     <Grid item lg={3} >
                                                       </Grid>
                                                       
                                                       <Grid container alignItems="center" justify="flex-start" item lg={9} >
                                                       <Button  startIcon={<CollectionsBookmarkIcon style={{color:"#4e7ad2"}} />} style={{ fontSize:"16px" ,color:"#333333",textAlign:"center",textTransform:"capitalize",fontWeight:"bold",backgroundColor:"#ffffff",width:"50%" ,height:"60px"}}>Konten</Button>
                                                         </Grid> 
                                                      
                                                      
                                                      
                                                </Grid>
                                          </Grid>
                                          <Grid container  justify="center" item lg={9}  style={{height:"800px" ,backgroundColor:"#fbfbfb"}}>
                                               <Grid item lg={11}  style={{height:"800px"  }}>
                                                      <Grid container alignItems="center" justify="flex-start" item lg={12}  style={{height:"60px" ,backgroundColor:"#fbfbfb"}}>
                                                        <div className="informasimateri">
                                                        Detail Konten
                                                        </div>
                                                    
                                                     </Grid>
                                                     <Grid container justify="center"  item lg={12}  style={{height:"300px" ,backgroundColor:"#ffffff",borderRadius:"4px",border:"solid 1px #eaeaea"}}>
                                                          <Grid item lg={11} style={{marginTop:"30px",marginBottom:"30px"}}>
                                                                        <Grid container direction="row" item lg={12} style={{ height:"50px"}}>
                                                                                <Grid item lg={3} style={{height:"100%"}}>
                                                                                <div className="tabelawal">
                                                                                    Judul Konten
                                                                                    </div>
                                                                                </Grid>
                                                                                <Grid item lg={9} style={{height:"100%"}}>
                                                                                <div >
                                                                                        <input className="input2"  type="text" name="username" placeholder="Tuliskan Judul Konten" style={{paddingLeft:"20px"}} />
                                                                                    </div>
                                                                                </Grid>
                                                                        </Grid>
                                                                        <Grid container direction="row" item lg={12} style={{height:"150px"}}>
                                                                                <Grid item lg={3} style={{height:"100%"}}>
                                                                                    <div className="tabelawal">
                                                                                    Foto Thumbnail Materi
                                                                                    </div>
                                                                                </Grid>
                                                                                <Grid item lg={3} style={{height:"100%"}}>
                                                                                            <Grid style={{ height:"90%",width:"90%",border:"dashed 1px #e0e0e0",borderRadius:"4px" ,backgroundColor:"#fbfbfb"}}>
                                                                                                <Grid container justify="center" alignItems="flex-end" style={{height:"50%"}}>
                                                                                                <img
                                                                                                    src={Gambarinput}
                                                                                                    alt="gambarinput"
                                                                                                    style={{  }}
                                                                                                />
                                                                                                </Grid>
                                                                                                <Grid container justify="center" alignItems="center" style={{height:"50%"}} >
                                                                                                        <div className="gambarthumbnil">
                                                                                                        Format gambar .jpg .jpeg .png dan ukuran minimum 300 x 300px
                                                                                                        </div>
                                                                                                </Grid>

                                                                                                
                                                                                            </Grid>
                                                                                </Grid>
                                                                                <Grid item lg={6} style={{height:"100%"}}>
                                                                                <Button variant="text"  style={{ fontSize:"12px" ,color:"#4e7ad2",textAlign:"center",textTransform:"capitalize",fontWeight:"bold",borderRadius:"40px" ,backgroundColor:"#ffffff",width:"35%" ,height:"22%",border:"solid 1px #4774d1" ,boxShadow:"0 8px 20px 0 rgba(0, 0, 0, 0.1)"}}>Pilih File</Button>
                                                                                </Grid>
                                                                        </Grid>
                                                                        <Grid container justify="flex-end" alignItems="center" item lg={12} style={{height:"60px"}}>
                                                                        <Button style={{ fontSize:"12px" ,color:"#ffffff",textAlign:"center",textTransform:"capitalize",fontWeight:"bold",borderRadius:"40px" ,backgroundImage:"linear-gradient(to left, #7aa2dc, #3b69ce)",width:"15%" ,height:"50%",boxShadow:"0 8px 20px 0 rgba(0, 0, 0, 0.2)"}}>Simpan</Button>
                                                                        </Grid>
      
                                                            </Grid>
                                                     </Grid>
                                                                          <Grid  item lg={12}  style={{height:"40px"}}>
                                                                            
                                                                            </Grid>
                                                                            <Grid container alignItems="center" justify="flex-start" item lg={12}  style={{height:"60px" ,backgroundColor:"#fbfbfb"}}>
                                                                                <div className="informasimateri">
                                                                                List Konten
                                                                                </div>
                                                                            
                                                                            </Grid>
                                                                            <Grid container direction="column"  item lg={12}  style={{height:"300px" ,backgroundColor:"#ffffff",borderRadius:"4px",border:"solid 1px #eaeaea"}}>
                                                                                            <Grid container direction="row" style ={{height:"15%" ,width:"100%" ,background:"rgba(122, 162, 220, 0.2)"}}>
                                                                                                <Grid container justify="center" alignItems="center" style={{width:"5%" , height:"100%"}}>
                                                                                                      <div className="tabeltext">
                                                                                                         No.
                                                                                                      </div>
                                                                                                </Grid>
                                                                                                <Grid container justify="flex-start" alignItems="center"  style={{width:"55%" , height:"100%" }}>
                                                                                                <div className="tabeltext">
                                                                                                     Judul Konten
                                                                                                      </div>
                                                                                                </Grid>
                                                                                                <Grid container justify="flex-start" alignItems="center" style={{width:"15%" , height:"100%" }}>
                                                                                                <div className="tabeltext">
                                                                                                Format File
                                                                                                      </div>
                                                                                                </Grid>
                                                                                                <Grid container justify="flex-start" alignItems="center" style={{width:"15%" , height:"100%" }}>
                                                                                                <div className="tabeltext">
                                                                                                Action
                                                                                                      </div>
                                                                                                </Grid>
                                                                                                <Grid container justify="flex-start" alignItems="center" style={{width:"10%" , height:"100%" }}>

                                                                                                </Grid>
                                                                                            </Grid>
                                                                                            <Grid container direction="column" style={{height:"45%" ,width:"100%" }}>

                                                                                            
                                                                                            <Grid container direction="row" style ={{height:"33%" ,width:"100%" ,background:"#ffffff" ,borderBottom:" 1px solid #eaeaea" ,borderLeft:"1px solid #eaeaea"}}>
                                                                                                <Grid container justify="center" alignItems="center" style={{width:"5%" , height:"100%"}}>
                                                                                                      <div className="tabeltext">
                                                                                                         1
                                                                                                      </div>
                                                                                                </Grid>
                                                                                                <Grid container justify="flex-start" alignItems="center"  style={{width:"55%" , height:"100%" }}>
                                                                                                <div className="tabeltext">
                                                                                                Cara kerja transmisi otomatis
                                                                                                      </div>
                                                                                                </Grid>
                                                                                                <Grid container justify="flex-start" alignItems="center" style={{width:"15%" , height:"100%" }}>
                                                                                                <div className="tabeltext">
                                                                                                Video
                                                                                                      </div>
                                                                                                </Grid>
                                                                                                <Grid container justify="flex-start" alignItems="center" style={{width:"15%" , height:"100%" }}>
                                                                                                        <IconButton   >
                                                                                                          <MoreHorizIcon />
                                                                                                        </IconButton>
                                                                                                </Grid>
                                                                                                <Grid  container direction="column" justify="flex-start" alignItems="center" style={{width:"10%" , height:"100%" }}>
                                                                                                        <Grid container justify="center" alignItems="center" style={{width:"100%" ,height:"50%"}}>
                                                                                                        <IconButton size="small" >
                                                                                                                   <KeyboardArrowUpIcon fontSize="small"  />
                                                                                                        </IconButton>
                                                                                                        </Grid>

                                                                                                        <Grid container justify="center" alignItems="center" style={{width:"100%" ,height:"50%"}}> 
                                                                                                        <IconButton size="small" >
                                                                                                                   <KeyboardArrowDownIcon fontSize="small"  />
                                                                                                        </IconButton>
                                                                                                        </Grid>
                                                                                                </Grid>
                                                                                            </Grid>
                                                                                            
                                                                                            <Grid container direction="row" style ={{height:"33%" ,width:"100%" ,background:"#ffffff" ,borderBottom:" 1px solid #eaeaea",borderLeft:"1px solid #eaeaea"}}>
                                                                                                <Grid container justify="center" alignItems="center" style={{width:"5%" , height:"100%"}}>
                                                                                                      <div className="tabeltext">
                                                                                                         2
                                                                                                      </div>
                                                                                                </Grid>
                                                                                                <Grid container justify="flex-start" alignItems="center"  style={{width:"55%" , height:"100%" }}>
                                                                                                <div className="tabeltext">
                                                                                                Bag 2. Bagaimana Otomatisasi gearbox bekerja
                                                                                                      </div>
                                                                                                </Grid>
                                                                                                <Grid container justify="flex-start" alignItems="center" style={{width:"15%" , height:"100%" }}>
                                                                                                <div className="tabeltext">
                                                                                                PDF
                                                                                                      </div>
                                                                                                </Grid>
                                                                                                <Grid container justify="flex-start" alignItems="center" style={{width:"15%" , height:"100%" }}>
                                                                                                        <IconButton   >
                                                                                                          <MoreHorizIcon />
                                                                                                        </IconButton>
                                                                                                </Grid>
                                                                                                <Grid  container direction="column" justify="flex-start" alignItems="center" style={{width:"10%" , height:"100%" }}>
                                                                                                        <Grid container justify="center" alignItems="center" style={{width:"100%" ,height:"50%"}}>
                                                                                                        <IconButton size="small" >
                                                                                                                   <KeyboardArrowUpIcon fontSize="small"  />
                                                                                                        </IconButton>
                                                                                                        </Grid>

                                                                                                        <Grid container justify="center" alignItems="center" style={{width:"100%" ,height:"50%"}}> 
                                                                                                        <IconButton size="small" >
                                                                                                                   <KeyboardArrowDownIcon fontSize="small"  />
                                                                                                        </IconButton>
                                                                                                        </Grid>
                                                                                                </Grid>
                                                                                            </Grid>
                                                                                            <Grid container direction="row" style ={{height:"33%" ,width:"100%" ,background:"#ffffff" ,borderBottom:" 1px solid #eaeaea",borderLeft:"1px solid #eaeaea"}}>
                                                                                                <Grid container justify="center" alignItems="center" style={{width:"5%" , height:"100%"}}>
                                                                                                      <div className="tabeltext">
                                                                                                         3
                                                                                                      </div>
                                                                                                </Grid>
                                                                                                <Grid container justify="flex-start" alignItems="center"  style={{width:"55%" , height:"100%" }}>
                                                                                                <div className="tabeltext">
                                                                                                Bag 3. Bagaimana Otomatisasi gearbox bekerja
                                                                                                      </div>
                                                                                                </Grid>
                                                                                                <Grid container justify="flex-start" alignItems="center" style={{width:"15%" , height:"100%" }}>
                                                                                                <div className="tabeltext">
                                                                                                PDF
                                                                                                      </div>
                                                                                                </Grid>
                                                                                                <Grid container justify="flex-start" alignItems="center" style={{width:"15%" , height:"100%" }}>
                                                                                                        <IconButton   >
                                                                                                          <MoreHorizIcon />
                                                                                                        </IconButton>
                                                                                                </Grid>
                                                                                                <Grid  container direction="column" justify="flex-start" alignItems="center" style={{width:"10%" , height:"100%" }}>
                                                                                                        <Grid container justify="center" alignItems="center" style={{width:"100%" ,height:"50%"}}>
                                                                                                        <IconButton size="small" >
                                                                                                                   <KeyboardArrowUpIcon fontSize="small"  />
                                                                                                        </IconButton>
                                                                                                        </Grid>

                                                                                                        <Grid container justify="center" alignItems="center" style={{width:"100%" ,height:"50%"}}> 
                                                                                                        <IconButton size="small" >
                                                                                                                   <KeyboardArrowDownIcon fontSize="small"  />
                                                                                                        </IconButton>
                                                                                                        </Grid>
                                                                                                </Grid>
                                                                                            </Grid>
                                                                                            </Grid>
                                                                                            <Grid container direction="row" style={{height:"15%",width:"100%"}}>
                                                                                                    <Grid container justify="center" alignItems="center" style={{height:"100%" ,width:"16%" }}>
                                                                                                          <div className="materiperhalaman">
                                                                                                            Materi perhalaman 
                                                                                                          </div>
                                                                                                    </Grid>
                                                                                                    <Grid container justify="center" alignItems="center"  style={{height:"100%" ,width:"5%" }}>
                                                                                                          
                                                                                                         <div className="buttonallblue">
                                                                                                           10
                                                                                                         </div>
                                                                                                    </Grid>
                                                                                                    <Grid container justify="center" alignItems="center"  style={{height:"100%" ,width:"5%" }}>
                                                                                                          
                                                                                                          <div className="buttonallwhite">
                                                                                                            15
                                                                                                          </div>
                                                                                                     </Grid>
                                                                                                     <Grid container justify="center" alignItems="center"  style={{height:"100%" ,width:"5%" }}>
                                                                                                          
                                                                                                          <div className="buttonallwhite">
                                                                                                            20
                                                                                                          </div>
                                                                                                     </Grid>


                                                                                            </Grid>
                                                                            </Grid>
                                                                            <Grid container justify="center" alignItems="center" item lg={12}  style={{height:"90px" }}>
                                                                                  <Link to="/Home/Hometrainersimpan" style={{width:"25%" ,height:"40%"}}>
                                                                            
                                                                                <Button style={{ fontSize:"12px" ,color:"#ffffff",textAlign:"center",textTransform:"capitalize",fontWeight:"bold",borderRadius:"40px" ,backgroundImage:"linear-gradient(to left, #7aa2dc, #3b69ce)",width:"100%" ,height:"100%",boxShadow:"0 8px 20px 0 rgba(0, 0, 0, 0.2)" ,opacity:"0.5"}}>Simpan dan Publish</Button>
                                                                                </Link>
                                                                            </Grid>
                                                
                                                
                                                </Grid>
                                                
                                          </Grid>

                                    </Grid>

                                    
                                     

                                     
                                     
                                     
                                                       
                                     
                                    
                                    
                                    
        

                                
                            </Grid>
                        
                    </Grid>
                    
                       
                </Grid>
            </React.Fragment>
           
        )
    
}