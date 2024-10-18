(continuum:derived-balances)=
# Equazioni di bilancio di altre grandezze fisiche

Partendo dai bilanci di massa, quantità di moto e di energia totale, si possono ricare le le equazioni di bilancio di altre grandezze fisiche come l'*energia cinetica*, l'*energia interna*, l'*entropia*.

## Bilanci in forma differenziale, convettiva

**Energia cinetica.** L'energia cinetica (macroscopica) per unità di massa è $k = \frac{1}{2}|\mathbf{u}|^2 = \frac{1}{2} \mathbf{u} \cdot \mathbf{u}$. L'equazione di bilancio dell'energia cinetica viene derivata moltiplicando scalarmente l'equazione della quantità di moto

$$\rho \dfrac{D \mathbf{u}}{Dt} = \rho \mathbf{g} + \nabla \cdot \mathbb{T} \ ,$$

per il campo di velocità $\mathbf{u}$,

$$\rho \dfrac{D k}{Dt} = \rho \mathbf{g} \cdot \mathbf{u} + \nabla \cdot \mathbb{T} \cdot \mathbf{u} \ ,$$

avendo usato $\mathbf{u} \cdot d \mathbf{u} = d \left( \dfrac{\mathbf{u} \cdot \mathbf{u}}{2} \right) = dk$.

**Energia interna.** L'energia interna per unità di massa è la differenza tra l'energia totale e l'energia cinetica, $e = e^{tot} - k$. L'equazione di bilancio dell'energia interna viene ottenuta come differenza dell'equazione dell'energia totale

$$\rho \dfrac{D e^{tot}}{Dt} = \rho \mathbf{g} \cdot \mathbf{u} + \nabla \cdot (\mathbb{T} \cdot \mathbf{u}) - \nabla \cdot \mathbf{q} + \rho r \ ,$$

e quella dell'energia cinetica, per ottenere

$$\rho \dfrac{D e}{D t} = \mathbb{T} : \nabla \mathbf{u} - \nabla \cdot \mathbf{q} + \rho r \ . $$

**Entropia.**
- **Entropia nei fluidi.** Se l'entropia può essere scritta come funzione dell'energia interna e della densità, e il primo principio della termodinamica viene scritto come

  $$de = \frac{P}{\rho^2} \, d \rho + T \, ds \ ,$$

  e il tensore degli sforzi può essere rappresentato come somma degli sforzi di pressione e degli sforzi viscosi **todo** *riferimento alle leggi costitutive*, 

  $$\mathbb{T} = - P \mathbb{I} + \mathbb{S} = - P \mathbb{I} + 2 \mu \mathbb{D} + \lambda (\nabla \cdot \mathbf{u}) \mathbb{I} \ ,$$

  si può ricavare l'equazione di governo dell'entropia usando il differenziale $ds = \dfrac{1}{T} \, de - \dfrac{P}{T \rho^2} \, d \rho$

  $$\begin{aligned}
    \rho \dfrac{D s}{D t} 
    & = \dfrac{\rho}{T} \left( \dfrac{D e }{D t} - \dfrac{P}{\rho^2} \dfrac{D \rho}{D t} \right) = \\
    & = \dfrac{1}{T} \left( \rho \dfrac{D e }{D t} - \dfrac{P}{\rho} \dfrac{D \rho}{D t} \right) = \\
    & = \dfrac{1}{T} \left( \mathbb{T} : \nabla \mathbf{u} - \nabla \cdot \mathbf{q} + \rho r - \dfrac{P}{\rho} \left( \rho \nabla \cdot \mathbf{u} \right) \right) = \\
    & = \dfrac{1}{T} \left( -P \nabla \cdot \mathbf{u} + \mathbb{S} : \nabla \mathbf{u} - \nabla \cdot \mathbf{q} + \rho r + P \ \nabla \cdot \mathbf{u}  \right) = \\
    & = \dfrac{1}{T} \left( \mathbb{S} : \nabla \mathbf{u} - \nabla \cdot \mathbf{q} + \rho r \right) = \\
    & = \dfrac{1}{T} \left( 2 \mu |\mathbb{D}|^2 + \lambda |(\nabla \cdot \mathbf{u})|^2 - \nabla \cdot \mathbf{q} + \rho r \right) = \\
    & = \dfrac{2 \mu |\mathbb{D}|^2 + \lambda |(\nabla \cdot \mathbf{u})|^2 }{T} - \frac{\mathbf{q} \cdot \nabla T}{T^2} - \nabla \cdot \left( \dfrac{\mathbf{q}}{T} \right) + \dfrac{\rho r}{T} \ , \\
  \end{aligned}$$

  avendo usato la degola del prodotto $\nabla \cdot \left( \dfrac{\mathbf{q}}{T} \right) = \dfrac{\nabla \cdot \mathbf{q}}{T} - \dfrac{\mathbf{q} \cdot \nabla T}{T^2}$.
 
  Gli ultimi due termini sono legati alla **sorgenti di entropia** nel sistema, dovute alla sorgente di calore nel sistema e al flusso di calore tramite la frontiera del sistema.

  I primi due termini possono essere ricondotti alla **dissipazione viscosa** e dovuta alla **conduzione termica** all'interno del volume: entrambi devono essere non-negativi per il secondo principio della termodinamica **todo**. Il primo termine è positivo se i coefficienti di viscosità del modello di fluido newtoniano sono non-negativi
  
  $$\mu, \lambda \ge 0$$
  
  . Il secondo termine impone che il flusso di calore avvenga in direzione opposta al gradiente di temperatura locale, e quindi la proiezione su di esso sia negativa (traducendo il concetto che il calore trasferisce energia da un corpo caldo a uno freddo),
  
  $$- \mathbf{q} \cdot \nabla T \ge 0 \ ,$$
  
  come è facile da verificare per il modello di Fourier per la conduzione in mezzi isotropi, $\mathbf{q} = - k \nabla T$, $- \mathbf{q} \cdot \nabla T = k |\nabla T|^2 \ge 0$ se
  
  $$k \ge 0 \ .$$
  
  Nel caso di modello lineare per la conduzione in mezzi non isotrpi, il flusso di conduzione può essere descritto usando un tensore del secondo ordine $\mathbb{K}$, $\mathbf{q} = - \mathbb{K} \cdot \nabla T$ (**todo** simmetria?) e la condizione diventa
  
  $$0 \le - \nabla T  \cdot \mathbf{q} = \nabla T \cdot \mathbb{K} \cdot \nabla T \ ,$$
  
  che impone che il tensore di conduzione sia (semi-)definito positivo, a causa dell'arbitrarietà del vettore $\nabla T$.

  Se questi due termini sono non-negativi, il bilancio di entropia può essere riscritto come la disuguaglianza

  $$\begin{aligned}
    \rho \dfrac{D s}{D t}
    & = \underbrace{\dfrac{2 \mu |\mathbb{D}|^2 + \lambda |(\nabla \cdot \mathbf{u})|^2 }{T} - \frac{\mathbf{q} \cdot \nabla T}{T^2}}_{\ge 0} - \nabla \cdot \left( \dfrac{\mathbf{q}}{T} \right) + \dfrac{\rho r}{T} = \\
    & \ge  - \nabla \cdot \left( \dfrac{\mathbf{q}}{T} \right) + \dfrac{\rho r}{T} \ ,
  \end{aligned}$$

  o nella forma integrale per un volume materiale

  $$\dfrac{d}{dt} \int_{V_t} \rho s \ge - \oint_{\partial V_t} \mathbf{\hat{n}} \cdot \dfrac{\mathbf{q}}{T} + \int_{V_t} \rho \dfrac{r}{T} \ ,$$

  che richiama alla mente la disuguaglianza di Clausius

  $$d S \ge \dfrac{\delta Q^{e}}{T} \ .$$

  La differenza di segno deriva dalla definizione di $d Q^e$ come flusso di calore dall'ambiente verso il sistema e del vettore flusso di calore $\mathbf{q}$ come flusso di calore "uscente dal sistema" **todo**

