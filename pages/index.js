import localFont from '@next/font/local'

const heavitas = localFont({src: "../public/heavitas/heavitas-webfont.woff2"})

function home()
{
    const styles = {
        txt: {
            "fontFamily": "heavitas"
        }
    }
    
    return (
        // <div style={{display:"flex", alignItems:"center", justifyContent:"center", width:"100%", height:"100%"}}>
        <div>
            <h1 style={styles.txt}> Mamãe, você é um amor 😍💖💗</h1>
            {/* <h1 style={styles.txt}> <b> Vicente 0-0 </b>, se você não estiver codando 👨‍💻 quando abrir isso</h1> */}
            {/* <h1 style={styles.txt}> Eu vou aparecer debaixo da sua cama 🛏️, de noite 🌙</h1> */}
            {/* <h1 style={styles.txt}> E puxar seu pé 🦶🏻🔪</h1> */}
        </div>
    );
}

export default home;
