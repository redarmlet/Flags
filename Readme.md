#  Flags

** Language / Idioma:** [English](#english) | [Español](#español)

** Play it here / Juégalo aquí:** [redarmlet-flags.netlify.app](https://redarmlet-flags.netlify.app)

---

<a name="english"></a>
## English

A retro-styled flag-guessing game built as a personal HTML/CSS/JavaScript learning project — and it grew into something bigger than a simple exercise.

### About the project

Flags started as a way to learn HTML and JavaScript from scratch, combined with an idea I'd wanted to build for a while: a flag-guessing game. What began as a learning exercise ended up growing into a full project with menus, difficulty scaling, custom country pools, and its own visual identity.

Beyond learning to code, the game doubles as a way to learn countries and their flags — and, as a non-native English speaker, to learn their names in English too.

The game draws inspiration from retro games and early web aesthetics, and it also carries some alchemy-themed visual elements — a direction I plan to expand further as I add more story and narrative to the game in the future.

#### A note on AI usage

One rule I've kept throughout this project: **no AI-generated code**. I use AI as a tutor to understand concepts and resolve doubts about HTML/JS as I go, always explicitly asking it *not* to give me code or solutions — otherwise I wouldn't actually learn anything. The one exception is the countries database (names, codes, continents, difficulty), which was AI-assisted as a data-formatting/automation task rather than actual programming work.

### Features

- 197 countries, each tagged by continent and difficulty
- Selectable country pools: Classic mode (76 well-known flags) or by continent (Africa, America, Asia, Europe, Oceania)
- Lives and time-based rounds with a scaling difficulty curve
- In-game menu with How to Play, Controls, and Sound settings (adjustable music/SFX volume)
- Paginated countries reference book, browsable by continent
- Score system with bonuses for correct answers, time, and remaining lives
- Retro CRT-style visual effects

### How to play

- You have a limited time to recognize each flag from your selected pool
- You get up to **2 attempts** per flag — failing both costs 1 of your **3 lives**
- Open the book anytime to check the list of possible countries

### Controls

| Key | Action |
|---|---|
| `Enter` | Submit your answer |
| `1` | Toggle the flag book |
| `2` / `Esc` | Open/close the menu |
| `0` | Toggle music |
| `9` | Toggle sound effects |
| `8` | Start a new game |

### Tech stack

Plain **HTML, CSS, and vanilla JavaScript** — no frameworks, no build tools, no dependencies.

### Project structure

```
Flags/
├── index.html      # Landing/menu screen
├── game.html        # Main game screen
├── style.css         # Landing page styles
├── style-1.css       # Game styles
├── script.js         # Game logic
├── images/           # Flags, UI, and artwork
├── music/             # Music and sound effects
└── fonts/              # Pixel/retro fonts
```

### Running it locally

Just clone the repo and open `index.html` in your browser:

```bash
git clone https://github.com/<your-username>/Flags.git
cd Flags
```

> Some browsers restrict audio/autoplay on `file://` pages — if sounds don't load properly, try serving the folder with a local server (e.g. the VS Code Live Server extension).

### Credits

- **Font:** Google
- **Sound effects:** [Pixabay](https://pixabay.com)
- **Music & background art:** [OpenGameArt.org](https://opengameart.org)
- **UI, logo, and other visual elements:** made by me

### Changelog

See release notes for version history and changes between updates.

[ Back to top](#-flags)

---

<a name="español"></a>
## Español

Un juego retro de adivinar banderas, creado como proyecto personal para aprender HTML/CSS/JavaScript — y que terminó creciendo más allá de un simple ejercicio.

### Sobre el proyecto

Flags empezó como una forma de aprender HTML y JavaScript desde cero, combinado con una idea que quería hacer hace tiempo: un juego de adivinar banderas. Lo que comenzó como un ejercicio de aprendizaje terminó convirtiéndose en un proyecto completo, con menús, escalado de dificultad, selección de países personalizada y una identidad visual propia.

Más allá de aprender a programar, el juego también sirve para aprender los países y sus banderas — y, al no ser nativo del inglés, para aprender sus nombres en ese idioma también.

El juego está inspirado en videojuegos y sitios web retro, y además tiene algunos elementos visuales de alquimia — una dirección que planeo explorar más a fondo cuando agregue más historia y narrativa al juego en el futuro.

#### Sobre el uso de IA

Una regla que he mantenido durante todo el proyecto: **no usar código generado por IA**. Uso la IA como tutor para entender conceptos y resolver dudas de HTML/JS a medida que avanzo, pidiéndole explícitamente que *no* me dé código ni soluciones — de lo contrario no aprendería realmente. La única excepción es la base de datos de países (nombres, códigos, continentes, dificultad), que fue asistida por IA como una tarea de automatización/formato de datos, más que trabajo real de programación.

### Características

- 197 países, cada uno con su continente y nivel de dificultad
- Selección de países: modo Clásico (76 banderas conocidas) o por continente (África, América, Asia, Europa, Oceanía)
- Rondas con vidas y tiempo, con una curva de dificultad progresiva
- Menú dentro del juego con Cómo Jugar, Controles y ajustes de Sonido (volumen de música/SFX)
- Libro de países paginado, navegable por continente
- Sistema de puntaje con bonos por aciertos, tiempo y vidas restantes
- Efectos visuales estilo CRT retro

### Cómo jugar

- Tienes un tiempo limitado para reconocer cada bandera del grupo seleccionado
- Tienes hasta **2 intentos** por bandera — fallar ambos te cuesta 1 de tus **3 vidas**
- Puedes abrir el libro en cualquier momento para revisar la lista de países posibles

### Controles

| Tecla | Acción |
|---|---|
| `Enter` | Enviar tu respuesta |
| `1` | Abrir/cerrar el libro de banderas |
| `2` / `Esc` | Abrir/cerrar el menú |
| `0` | Activar/desactivar música |
| `9` | Activar/desactivar efectos de sonido |
| `8` | Iniciar una nueva partida |

### Tecnologías utilizadas

**HTML, CSS y JavaScript puro** — sin frameworks, sin herramientas de build, sin dependencias.

### Estructura del proyecto

```
Flags/
├── index.html      # Pantalla de inicio/menú
├── game.html        # Pantalla principal del juego
├── style.css         # Estilos de la pantalla de inicio
├── style-1.css       # Estilos del juego
├── script.js         # Lógica del juego
├── images/           # Banderas, UI e ilustraciones
├── music/             # Música y efectos de sonido
└── fonts/              # Fuentes pixeladas/retro
```

### Cómo correrlo localmente

Solo clona el repositorio y abre `index.html` en tu navegador:

```bash
git clone https://github.com/<tu-usuario>/Flags.git
cd Flags
```

> Algunos navegadores restringen el autoplay de audio en páginas `file://` — si los sonidos no cargan bien, intenta servir la carpeta con un servidor local (por ejemplo, la extensión Live Server de VS Code).

### Créditos

- **Fuente:** Google
- **Efectos de sonido:** [Pixabay](https://pixabay.com)
- **Música e imágenes de fondo:** [OpenGameArt.org](https://opengameart.org)
- **Interfaz, logo y demás elementos visuales:** hechos por mí

### Historial de cambios

Consulta las notas de versión para ver el historial y los cambios entre actualizaciones.

[ Volver arriba](#-flags)
