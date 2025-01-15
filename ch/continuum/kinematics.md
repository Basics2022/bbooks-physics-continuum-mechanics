(continuum:kinematics)=
# Cinematica

- coordinate fisiche $\mathbf{r}$
- coordinate materiali $\mathbf{r}_0$
- coordinate arbitrarie $\mathbf{r}_b$

Il moto dei punti materiali nello spazio fisico è descritto dalla una funzione 

$$\mathbf{r}(\mathbf{r}_0, t) \ ,$$

che associa a ogni punto materiale "etichettato" con la coordinata $\mathbf{r}_0$ la sua posizione nello spazio al tempo $t$

Il campo di velocità dei punti materiali è definito come la derivata nel tempo della posizione, tenendo fissa la coordinata $\mathbf{r}_0$ che identifica i punti,

$$\mathbf{u}(\mathbf{r}_0,t) = \dfrac{\partial \mathbf{r}}{\partial t}\bigg|_{\mathbf{r}_0} = \dfrac{D \mathbf{r}}{D t} \ ,$$

avendo introdotto l'operatore di derivata materiale $\frac{D}{Dt}$.

Alla stessa maniera la posizione nello spazio e la velocità dei punti in moto arbitrario, etichettati con le coordinate $\mathbf{r}_b$, sono

$$\mathbf{r}(\mathbf{r}_b, t) \ ,$$
$$\mathbf{u}(\mathbf{r}_b,t) = \dfrac{\partial \mathbf{r}}{\partial t}\bigg|_{\mathbf{r}_b} \ .$$

Le leggi di trasformazione tra le coordinate forniscono anche la legge di trasformazione delle derivate parziali,

<!--
$$\begin{cases}
 \mathbf{r} = \mathbf{r}(\mathbf{r}_0, t) \\
 t' = t(\mathbf{r}_0, t) = t \ , 
\end{cases}$$
-->

$$\begin{aligned}
\dfrac{\partial}{\partial t}\bigg|_{\mathbf{r}_0} f(\mathbf{r}(\mathbf{r}_0, t), t) 
    = \dfrac{\partial f}{\partial t}\bigg|_{\mathbf{r}} +
    \dfrac{\partial \mathbf{r}}{\partial t}\bigg|_{\mathbf{r}_0} \cdot \dfrac{\partial f}{\partial \mathbf{r}}\bigg|_{t} 
    = \dfrac{\partial f}{\partial t}\bigg|_{\mathbf{r}} +
      \mathbf{u} \cdot \nabla f 
\end{aligned}$$

$$\begin{aligned}
\dfrac{\partial}{\partial t}\bigg|_{\mathbf{r}_b} f(\mathbf{r}(\mathbf{r}_b, t), t) 
    = \dfrac{\partial f}{\partial t}\bigg|_{\mathbf{r}} +
    \dfrac{\partial \mathbf{r}}{\partial t}\bigg|_{\mathbf{r}_b} \cdot \dfrac{\partial f}{\partial \mathbf{r}}\bigg|_{t} 
    = \dfrac{\partial f}{\partial t}\bigg|_{\mathbf{r}} +
      \mathbf{u}_b \cdot \nabla f 
\end{aligned}$$

e quindi

$$
\dfrac{\partial}{\partial t}\bigg|_{\mathbf{r}_0} f =  
\dfrac{\partial}{\partial t}\bigg|_{\mathbf{r}  } f + \mathbf{u} \cdot \nabla f =  
\dfrac{\partial}{\partial t}\bigg|_{\mathbf{r}_b} f + ( \mathbf{u} - \mathbf{u}_b ) \cdot \nabla f \ . 
$$

()=
## Kinematics of two points

$$\vec{r}_2(t) - \vec{r}_1(t) = \dots $$

strain velocity tensor

$$\mathbb{D} = \frac{1}{2} \left[ \nabla \vec{u} + \nabla^T \vec{u} \right]$$ (eq:strain-vel-tensor)
