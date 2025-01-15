(continuum:principles-differential)=
# Princìpi in forma differenziale

## Bilanci in coordinate fisiche
Partendo dai bilanci in forma integrale per volumi di controllo, se sono soddifatte le condizioni di "sufficiente regolarità" dei campi (intese come "ogni cosa che scriviamo ha senso"), si possono ricavare i bilanci i forma differenziale, sfruttando il teorema della divregenza per trasformare gli integrali di superficie in integrali di volume, e l'arbitrarietà del volume di controllo (poiché la validità dei princìpi fisici è indipendente dal particolare sistema considerato).

Viene usata la relazione di Cauchy per esprimere il vettore sforzo sul contorno del dominio $\partial V$ come in funzione della normale alla superficie e del tensore degli sforzi $\mathbb{T}$ **todo** riferimento alla relazione di Cauchy,

$$\mathbf{t_n} = \mathbf{\hat{n}} \cdot \mathbb{T} \ .$$

**Bilancio di massa.**

$$\begin{aligned}
 0 & = \frac{d}{dt} \int_{V} \rho + \oint_{\partial V} \rho \mathbf{u} \cdot \mathbf{\hat{n}} = \\
   & = \int_{V} \dfrac{\partial \rho }{\partial t} + \int_{V} \nabla \cdot \left( \rho \mathbf{u} \right) = \\
   & = \int_{V} \left\{ \dfrac{\partial \rho }{\partial t} + \nabla \cdot \left( \rho \mathbf{u} \right) \right\} 
\end{aligned}$$

$$\dfrac{\partial \rho }{\partial t} + \nabla \cdot \left( \rho \mathbf{u} \right) = 0$$

**Bilancio della quantità di moto.**

$$\begin{aligned}
 \mathbf{0} & = \dfrac{d}{dt} \int_{V} \rho \mathbf{u} + \oint_{\partial V} \rho \mathbf{u} \mathbf{u} \cdot \mathbf{\hat{n}} - \int_{V} \rho \mathbf{g} - \oint_{\partial V} \mathbf{\hat{n}} \cdot \mathbb{T} = \\
            & = \int_{V} \dfrac{\partial }{\partial t} \left( \rho \mathbf{u} \right) + \int_{V} \nabla \cdot \left( \rho \mathbf{u} \otimes \mathbf{u} \right) - \int_{V} \rho \mathbf{g} - \int_{V} \nabla \cdot \mathbb{T} = \\
            & = \int_{V} \left\{ \dfrac{\partial }{\partial t} \left( \rho \mathbf{u} \right) +  \nabla \cdot \left( \rho \mathbf{u} \otimes \mathbf{u} \right) - \rho \mathbf{g} - \nabla \cdot \mathbb{T} \right\} 
\end{aligned}$$

$$ \dfrac{\partial }{\partial t} \left( \rho \mathbf{u} \right) +  \nabla \cdot \left( \rho \mathbf{u} \otimes \mathbf{u} \right) = \rho \mathbf{g} - \nabla \cdot \mathbb{T} $$

**Bilancio dell'energia totale.**

<!--
$$\begin{aligned}
0 & = \dfrac{d}{dt} \int_{V} \rho e^t + \oint_{\partial V} \rho e^t \mathbf{u} \cdot \mathbf{\hat{n}} - \int_{V} \rho \mathbf{g} \cdot \mathbf{u} - \oint_{\partial V} \mathbf{\hat{n}} \cdot \mathbb{T} \cdot \mathbf{u} + \oint_{\partial V} \mathbf{q} \cdot \mathbf{\hat{n}} - \int_{V} \rho r = \\
\end{aligned}$$
-->
$$\begin{aligned}
0 & = \dfrac{d}{dt} \int_{V} \rho e^t + \oint_{\partial V} \rho e^t \mathbf{u} \cdot \mathbf{\hat{n}} - \int_{V} \rho \mathbf{g} \cdot \mathbf{u} - \oint_{\partial V} \mathbf{\hat{n}} \cdot \mathbb{T} \cdot \mathbf{u} + \oint_{\partial V} \mathbf{q} \cdot \mathbf{\hat{n}} - \int_{V} \rho r = \\
  & = \int_{V} \dfrac{\partial}{\partial t}  \left( \rho e^t \right) + \int_{\partial V} \nabla \cdot \left( \rho e^t \mathbf{u} \right) - \int_{V} \rho \mathbf{g} \cdot \mathbf{u} - \int_{V} \nabla \cdot \left( \mathbb{T} \cdot \mathbf{u} \right) + \int_{V} \nabla \cdot \mathbf{q} - \int_{V} \rho r = \\
  & = \int_{V} \left\{ \dfrac{\partial}{\partial t}  \left( \rho e^t \right) + \nabla \cdot \left( \rho e^t \mathbf{u} \right) - \rho \mathbf{g} \cdot \mathbf{u} - \nabla \cdot \left( \mathbb{T} \cdot \mathbf{u} \right) + \nabla \cdot \mathbf{q} - \rho r \right\} 
\end{aligned}$$
$$
  \dfrac{\partial}{\partial t}  \left( \rho e^t \right) + \nabla \cdot \left( \rho e^t \mathbf{u} \right) = \rho \mathbf{g} \cdot \mathbf{u} + \nabla \cdot \left( \mathbb{T} \cdot \mathbf{u} \right) - \nabla \cdot \mathbf{q} + \rho r
$$
