(continuum:principles-integral-arbitrary)=
# Princìpi in forma integrale per domini arbitrari

Usando i teoremi del trasporto per la derivata nel tempo di grandezze fisiche su domini mobili **todo** *aggiungere riferimento* si può ricavare la forma integrale dei princìpi per sistemi aperti.

## Volume di controllo, $V$

**Bilancio di massa**

$$\frac{d}{dt} \int_{V} \rho + \oint_{\partial V} \rho \mathbf{u} \cdot \mathbf{\hat{n}} = 0 \ .$$

**Bilancio della quantità di moto**

$$\dfrac{d}{dt} \int_{V} \rho \mathbf{u} + \oint_{\partial V} \rho \mathbf{u} \mathbf{u} \cdot \mathbf{\hat{n}} = \int_{V} \rho \mathbf{g} + \oint_{\partial V} \mathbf{t}_{\mathbf{n}} \ .$$

**Bilancio dell'energia totale.**

$$\dfrac{d}{dt} \int_{V} \rho e^t + \oint_{\partial V} \rho e^t \mathbf{u} \cdot \mathbf{\hat{n}} = \int_{V} \rho \mathbf{g} \cdot \mathbf{u} + \oint_{\partial V} \mathbf{t}_{\mathbf{n}} \cdot \mathbf{u} - \oint_{\partial V} \mathbf{q} \cdot \mathbf{\hat{n}} + \int_{V} \rho r \ .$$

## Volume arbitrario, $v_t$

**Bilancio di massa**

$$\frac{d}{dt} \int_{v_t} \rho + \oint_{\partial v_t} \rho ( \mathbf{u} - \mathbf{u}_b ) \cdot \mathbf{\hat{n}} = 0 \ .$$

**Bilancio della quantità di moto**

$$\dfrac{d}{dt} \int_{v_t} \rho \mathbf{u} + \oint_{\partial v_t} \rho \mathbf{u} ( \mathbf{u} - \mathbf{u}_b ) \cdot \mathbf{\hat{n}} = \int_{v_t} \rho \mathbf{g} + \oint_{\partial v_t} \mathbf{t}_{\mathbf{n}} \ .$$

**Primo principio della termodinamica: bilancio di energia totale.** $\dot{E}^{tot} = P^{ext} + \dot{Q}^{ext}$

$$\dfrac{d}{dt} \int_{v_t} \rho e^t + \oint_{\partial v_t} \rho e^t ( \mathbf{u} - \mathbf{u}_b ) \cdot \mathbf{\hat{n}} = \int_{v_t} \rho \mathbf{g} \cdot \mathbf{u} + \oint_{\partial v_t} \mathbf{t}_{\mathbf{n}} \cdot \mathbf{u} - \oint_{\partial v_t} \mathbf{q} \cdot \mathbf{\hat{n}} + \int_{v_t} \rho r \ .$$

