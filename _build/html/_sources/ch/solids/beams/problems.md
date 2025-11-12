(solid-mechanics:small-displacements:beams:problems)=
# Problems


````{only} html

<!-- Esercizio ************************************************************* -->
::::{grid}
:gutter: 2

:::{grid-item-card} Problem 1.
:columns: 6

Solve the structure and evaluate the displacement in B.

:::

:::{grid-item-card} 
:columns: 6

![](../../../media/solids/clamped-q.png)
<!-- *Didascalia, se necessaria* -->
:::

::::

```{dropdown} Solution.
:open:

**Method 1. Elastic line.**

$$w''(z) = w^{mech \ ''} + w^{th \, ''} = \frac{M(z)}{EJ} + \dfrac{\alpha \, \Delta T}{h}$$

From equilibrium, bending internal action as a function of coordinate $z$, from $A: \, z = 0$ to $B: \, z = b$ reads

$$M(z) = - \dfrac{q b^2}{2} + q b z - \dfrac{q z^2}{2} = - \dfrac{q \widetilde{z}^2}{2} \ ,$$

with $\widetilde{z} = b - z$ the coordinates pointing from $B$ to $A$.

Integrating twice with boundary conditions at clamp $w(z=0)$, $w'(z) = 0$

$$\begin{aligned}
  w'(z) & = \frac{1}{EJ} \left( -\frac{q z^3}{6} + \frac{q z^2}{2} - \frac{q b^2}{2} z \right) + \frac{\alpha \, \Delta T}{h} z + \underbrace{a}_{=0} \\
  w (z) & = \frac{1}{EJ} \left( -\frac{q z^4}{24} + \frac{q z^3}{6} - \frac{q b^2}{4} z^2 \right) + \frac{\alpha \, \Delta T}{ 2 h} z^2 + \underbrace{a z}_{=0} + \underbrace{b}_{=0} \\
\end{aligned}$$

The displacement in B reads

$$w_B = w(z=b) = - \dfrac{1}{8} \dfrac{q b^4}{EJ} + \dfrac{1}{2} \dfrac{\alpha \, \Delta T b^2}{h} \ . $$

**Method 2.**

...

```

<!-- Esercizio ************************************************************* -->
::::{grid}
:gutter: 2

:::{grid-item-card} Problem 2.
:columns: 6


:::

:::{grid-item-card} 
:columns: 6

![](../../../media/solids/clamped-f.png)
<!-- *Didascalia, se necessaria* -->
:::

::::

```{dropdown} Solution.
:open:

**Method 1. Elastic line.**

$$w''(z) = w^{mech \ ''} + w^{th \, ''} = \frac{M(z)}{EJ} + \dfrac{\alpha \, \Delta T}{h}$$

From equilibrium, bending internal action as a function of coordinate $z$, from $A: \, z = 0$ to $B: \, z = b$ reads

$$M(z) = - F b + F z = - F \widetilde{z} \ ,$$

with $\widetilde{z} = b - z$ the coordinates pointing from $B$ to $A$.

Integrating twice with boundary conditions at clamp $w(z=0)$, $w'(z) = 0$

$$\begin{aligned}
  w'(z) & = \frac{1}{EJ} \left( \frac{F z^2}{2} - F z \right) + \frac{\alpha \, \Delta T}{h} z + \underbrace{a}_{=0} \\
  w (z) & = \frac{1}{EJ} \left( \frac{F z^3}{6} - \dfrac{F z^2}{2} \right) + \frac{\alpha \, \Delta T}{2 \, h} z + \underbrace{a z }_{=0} + \underbrace{b}_{=0} \\
\end{aligned}$$

The displacement in B reads

$$w_B = w(z=b) = - \dfrac{1}{3} \dfrac{q b^4}{EJ} + \dfrac{1}{2} \dfrac{\alpha \, \Delta T b^2}{h} \ . $$

**Method 2.**

...

```

<!-- Esercizio ************************************************************* -->
::::{grid}
:gutter: 2

:::{grid-item-card} Problem 3.
:columns: 6


:::

:::{grid-item-card} 
:columns: 6

![](../../../media/solids/clamp-cart.png)
<!-- *Didascalia, se necessaria* -->
:::

::::

```{dropdown} Solution.
:open:

The structure is hyper-static once. Let's use the verical reaction $V_B$ introduced by the cart in $B$ as the (independent) unknown hyper-static action. Exploiting the results of the previous problems (1, 2) and the principle of superposition of causes and effects, bending momentum reads

$$M(z) = - q \left( \dfrac{z^2}{2} - b z + \dfrac{b^2}{2} \right) + V_B ( b - z )  \ ,$$

**Method 1 - Elastic line.** Integrating the expression of the bending moment twice

$$\begin{aligned}
  w'(z) & = -\dfrac{q z^3}{6 EJ} + (q b - V_B) \frac{z^2}{2 EJ} + \left[ \dfrac{1}{EJ} \left( - \frac{q b^2}{2} + V_B b \right) + \frac{\alpha \, \Delta T}{h} \right] z + a \\
  w (z) & = -\dfrac{q z^4}{24 EJ} + (q b - V_B) \frac{z^3}{6 EJ} + \left[ \dfrac{1}{EJ} \left( - \frac{q b^2}{2} + V_B b \right) + \frac{\alpha \, \Delta T}{h} \right] \frac{z^2}{2} + a z + b \ .
\end{aligned}$$

Boundary conditions (3) are

$$\begin{aligned}
  \text{A: } & w(0) = 0 \ , \quad w'(0) = 0 \\
  \text{B: } & w(b) = 0 \\
\end{aligned}$$

and allows to evaluate both the integration constant $a = 0$, $b = 0$ and the hyperstatic action $V_B$

$$\begin{aligned}
  0 & = w(b) = - \dfrac{q b^4}{8 EJ} + \dfrac{V_B b^3}{3 EJ} + \dfrac{\alpha \, \Delta T b^2}{2 h} \\
    & \quad  \rightarrow \quad V_B = \dfrac{3}{8} q b - \dfrac{3}{2} \dfrac{\alpha \, \Delta T \, EJ}{ h \, b } \ .
\end{aligned}$$

Thus, the displacement reads

$$w(z) = \dfrac{qb^4}{EJ} \left( - \dfrac{1}{24} \dfrac{z^4}{b^4} + \dfrac{5}{48} \dfrac{z^3}{b^3} - \dfrac{1}{16} \dfrac{z^2}{b^2} \right) + \dfrac{\alpha \Delta T}{h} \left( \frac{1}{4} \dfrac{z^3}{b^3} - \dfrac{1}{4} \dfrac{z^2}{b^2} \right) \ .$$

**Method 2 - PCVW.** The problem can be also solved using the [principle of complementary virtual work for beams](solid-mechanics:intro:small-displacements-statics-beam-weak-form:weak:pcvw), ignoring contributions of axial and shear deformation. Here, a virtual load corresponding to unitary hyperstatic action in $B$, $\widetilde{V}_B = 1$, s.t. the virtual internal bending moment reads $\widetilde{M}(z) = b - z$, and the "real" displacement $w_B = 0$ due to the carti constraint in $B$. Thus, the PCVW reads

$$\begin{aligned}
0 & = \int_{str} \widetilde{M}(s) \theta'(s) \, ds - \widetilde{F}_B w_B = \\
  & = \int_{z=0}^{b} \widetilde{M}(z) \left( \dfrac{M(z)}{EJ} + \dfrac{\alpha \Delta T}{h} \right) \, dz = \\
  & = \int_{z=0}^{b} \left( b - z \right) \left[ \dfrac{1}{EJ} \left( -q \left( \dfrac{z^2}{2} - b z + \dfrac{b^2}{2} \right) + V_B ( b - z) \right) + \dfrac{\alpha \Delta T}{h} \right] \, dz = \\
  & = - \dfrac{1}{8} \dfrac{q b^4}{EJ} + \dfrac{1}{3} \dfrac{V_B b^3}{EJ} + \dfrac{\alpha \Delta T b^2}{2 h} \ ,
\end{aligned}$$

so that the hyper-static action is

$$V_B = \dfrac{3}{8} qb - \dfrac{3}{2} \dfrac{\alpha \Delta T}{h b} \ .$$



```

<!-- Esercizio ************************************************************* -->
::::{grid}
:gutter: 2

:::{grid-item-card} Problem 4.
:columns: 6


:::

:::{grid-item-card} 
:columns: 6

![](../../../media/solids/clamp-clamp.png)
<!-- *Didascalia, se necessaria* -->
:::

::::

```{dropdown} Solution.
:open:

The structure is three times hyper-static. One hyperstatic acting in the axial direction is identically zero. Other two hyper-static actions are choosen here to be thhe vertical reaction $V_B$ and moment $M_B$ at the clamp in $B$. Bending moment as a function of the hyperstatics reads

$$M(z) = - q \left( \dfrac{z^2}{2} - b z + \dfrac{b^2}{2} \right) + V_B ( b - z ) + M_B  \ ,$$

**Method 1 - Elastic line.**

**Method 2 - PCVW.**

$$\begin{aligned}
0 & = \int_{str} \widetilde{M}(s) \theta'(s) \, ds - \widetilde{V}_B w_B - \widetilde{M}_B \theta_B = \\
  & = \int_{z=0}^{b} \widetilde{M}(z) \left( \dfrac{M(z)}{EJ} + \dfrac{\alpha \Delta T}{h} \right) \, dz
\end{aligned}$$

as the two real displacements in $B$ are zero, $w_B = 0$, $\theta_B = 0$.
Two independent *virtual loads* are used to get a system of 2 equations in the 2 hyperstatic unknowns:
1. $\widetilde{V}_B^1 = 1$, $\widetilde{M}_B^1 = 0$ and thus $\widetilde{M}^1(z) = b-z$
2. $\widetilde{V}_B^2 = 0$, $\widetilde{M}_B^2 = 1$ and thus $\widetilde{M}^2(z) = 1$

The equations become

$$\begin{aligned}
0 & = \int_{z=0}^{b} \left( b - z \right) \left[ \dfrac{1}{EJ} \left( -q \left( \dfrac{z^2}{2} - b z + \dfrac{b^2}{2} \right) + V_B ( b - z ) + M_B \right) + \dfrac{\alpha \Delta T}{h} \right] \, dz = \\
  & = - \dfrac{1}{8} \dfrac{q b^4}{EJ} + \dfrac{1}{3} \dfrac{V_B b^3}{EJ} + \dfrac{1}{2} \dfrac{M_B b^2}{EJ} + \dfrac{\alpha \Delta T b^2}{2 h} \\
0 & = \int_{z=0}^{b} 1 \, \left[ \dfrac{1}{EJ} \left( -q \left( \dfrac{z^2}{2} - b z + \dfrac{b^2}{2} \right) + V_B ( b - z ) + M_B \right) + \dfrac{\alpha \Delta T}{h} \right] \, dz = \\
  & = - \dfrac{1}{6} \dfrac{q b^3}{EJ} + \dfrac{1}{2} \dfrac{V_B b^2}{EJ} + \dfrac{M_B b}{EJ} + \dfrac{\alpha \Delta T b}{h} \ ,
\end{aligned}$$

or in matrix form,

$$
\begin{bmatrix} \frac{1}{3} & \frac{1}{2} \\ \frac{1}{2} & 1 \end{bmatrix} \begin{bmatrix} V_B \\ \frac{M_B}{b} \end{bmatrix} = \begin{bmatrix} \frac{1}{8} \\ \frac{1}{6} \end{bmatrix} qb + \begin{bmatrix} -\frac{1}{2} \\ - 1 \end{bmatrix} \dfrac{\alpha \Delta T  \, EJ}{h b} \ .
$$

The solution of the linear system reads

$$
\begin{bmatrix} V_B \\ \frac{M_B}{b} \end{bmatrix} & = \dfrac{1}{\frac{1}{3} - \frac{1}{2} \frac{1}{2}} \begin{bmatrix} 1 & -\frac{1}{2} \\ -\frac{1}{2} & \frac{1}{3} \end{bmatrix} \left(  \begin{bmatrix} \frac{1}{8} \\ \frac{1}{6} \end{bmatrix} qb + \begin{bmatrix} -\frac{1}{2} \\ - 1 \end{bmatrix} \dfrac{\alpha \Delta T  \, EJ}{h b} \right) = \\
 & = 12 \left( \begin{bmatrix} \frac{1}{24} \\ \frac{-1}{144} \end{bmatrix} qb + \begin{bmatrix} 0 \\ \frac{1}{12} \end{bmatrix}  \dfrac{\alpha \Delta T  \, EJ}{h b} \right) = \\
 & = \begin{bmatrix} \frac{1}{2} \\ - \frac{1}{12} \end{bmatrix} qb + \begin{bmatrix} 0 \\ -1 \end{bmatrix} \dfrac{\alpha \Delta T \, EJ}{hb}
$$

```

<!-- Esercizio ************************************************************* -->
::::{grid}
:gutter: 2

:::{grid-item-card} Problem 5.
:columns: 6


:::

:::{grid-item-card} 
:columns: 6

![](../../../media/solids/clamp-hinge.png)
<!-- *Didascalia, se necessaria* -->
:::

::::

```{dropdown} Solution.

```

<!-- Esercizio ************************************************************* -->
::::{grid}
:gutter: 2

:::{grid-item-card} Problem 6.
:columns: 6


:::

:::{grid-item-card} 
:columns: 6

![](../../../media/solids/s02.png)
<!-- *Didascalia, se necessaria* -->
:::

::::

```{dropdown} Solution.

```

<!-- Esercizio ************************************************************* -->
::::{grid}
:gutter: 2

:::{grid-item-card} Problem 7.
:columns: 6


:::

:::{grid-item-card} 
:columns: 6

![](../../../media/solids/s03.png)
<!-- *Didascalia, se necessaria* -->
:::

::::

```{dropdown} Solution.

```



````

<!--
```{only} latex
$$
\begin{minipage}[t]{.55\textwidth}
  \vspace{0pt}
  \textbf{Problema 1.}
Una palla di massa $m$ si trova inizialmente in quiete rispetto a un'osservatore inerziale, a una quota $h$ sopra la superficie terrestre.
La palla viene lasciata cadere dalla condizione di quiete. Viene chiesto di determinare:
1. la velocità di impatto con il terreno
2. il tempo impiegato per raggiungere il terreno.

Viene chiesto di svolgere i conti trascurando la resistenza dell'aria. Si chiede poi di:
3. confrontare i risultati ottenuti con i risultati per un corpo di massa $M > m$ 
4. confrontare i risultati ottenuti con i risultati che si otterrebbero nei pressi della superficie lunare.

Raggio Terra: $R_E = 6380 \, km$ ; massa Terra: $M_E = 5.98 \cdot 10^{24} \, kg$;
Raggio Luna:  $R_M = 1740 \, km$ ; massa Luna:  $M_M = 7.34 \cdot 10^{22} \, kg$;
\end{minipage}
\hspace{.05\textwidth}
\begin{minipage}[t]{.40\textwidth}
  \vspace{0pt}
  \includegraphics[width=.95\textwidth]{../../../media/solids/free-fall.png}
\end{minipage}
$$

**Soluzione.**


```
-->
