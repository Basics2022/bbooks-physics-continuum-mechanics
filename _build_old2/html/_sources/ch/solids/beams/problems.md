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

The structure is three times hyper-static. One hyperstatic acting in the axial direction is identically zero. Other two hyper-static actions are choosen here to be the vertical reaction $V_B$ and moment $M_B$ at the clamp in $B$. Bending moment as a function of the hyperstatics reads

$$M(z) = - q \left( \dfrac{z^2}{2} - b z + \dfrac{b^2}{2} \right) + V_B ( b - z ) + M_B  \ ,$$

**Method 1 - Elastic line.**

...

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
 & = \begin{bmatrix} \frac{1}{2} \\ - \frac{1}{12} \end{bmatrix} qb + \begin{bmatrix} 0 \\ -1 \end{bmatrix} \dfrac{\alpha \Delta T \, EJ}{hb} \ .
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
:open:

Rotational spring in $B$ links the rotation with the moment as $M_B = - k \theta_B = - k w'_B$. Mathematically, this is a Robin boundary condition, i.e. a linear combination of a kinematic variable and an action, here an angle and a moment.

As the elastic constraint introduce the unknown moment $M_B$, or equivalenly the unknown angle $\theta_B = - \frac{M_B}{k}$, the structure can be treated as three times hyper-static. One hyperstatic acting in the axial direction is identically zero. Other two hyper-static actions are choosen here to be the vertical reaction $V_B$ and moment $M_B$ at the clamp in $B$. Bending moment as a function of the hyperstatics reads

$$M(z) = - q \left( \dfrac{z^2}{2} - b z + \dfrac{b^2}{2} \right) + V_B ( b - z ) + M_B  \ ,$$

**Method 1 - Elastic line.**

**Method 2 - PCVW.** Differently from previous problems, the real displacements are not identically zero as the rotation $\theta_B$ is not rigidly constrained to be zero, but this rotation is contrasted by an elastic spring introducing a real benging moment $M_B = - k \theta_B$ into the beam. The principle of complementary virtual work reads

$$\begin{aligned}
0 & = \int_{str} \widetilde{M}(s) \theta'(s; V_B, M_B) \, ds - \widetilde{V}_B w_B - \widetilde{M}_B \theta_B = \\
  & = \int_{z=0}^{b} \widetilde{M}(z) \left( \dfrac{M(z; V_B, M_B)}{EJ} + \dfrac{\alpha \Delta T}{h} \right) \, dz + \widetilde{M}_B \dfrac{M_B}{k} \ .
\end{aligned}$$

as the two real displacements in $B$ are $w_B = 0$, $\theta_B = - \frac{M_B}{k}$.
Two independent *virtual loads* are used to get a system of 2 equations in the 2 hyperstatic unknowns:
1. $\widetilde{V}_B^1 = 1$, $\widetilde{M}_B^1 = 0$ and thus $\widetilde{M}^1(z) = b-z$
2. $\widetilde{V}_B^2 = 0$, $\widetilde{M}_B^2 = 1$ and thus $\widetilde{M}^2(z) = 1$

The equations become

$$\begin{aligned}
0 & = \int_{z=0}^{b} \left( b - z \right) \left[ \dfrac{1}{EJ} \left( -q \left( \dfrac{z^2}{2} - b z + \dfrac{b^2}{2} \right) + V_B ( b - z ) + M_B \right) + \dfrac{\alpha \Delta T}{h} \right] \, dz = \\
  & = - \dfrac{1}{8} \dfrac{q b^4}{EJ} + \dfrac{1}{3} \dfrac{V_B b^3}{EJ} + \dfrac{1}{2} \dfrac{M_B b^2}{EJ} + \dfrac{\alpha \Delta T b^2}{2 h} \\
0 & = \int_{z=0}^{b} 1 \, \left[ \dfrac{1}{EJ} \left( -q \left( \dfrac{z^2}{2} - b z + \dfrac{b^2}{2} \right) + V_B ( b - z ) + M_B \right) + \dfrac{\alpha \Delta T}{h} \right] \, dz + 1 \cdot \dfrac{M_B}{k} = \\
  & = - \dfrac{1}{6} \dfrac{q b^3}{EJ} + \dfrac{1}{2} \dfrac{V_B b^2}{EJ} + \dfrac{M_B b}{EJ} + \dfrac{\alpha \Delta T b}{h} + \frac{M_B}{k} \ ,
\end{aligned}$$

or in matrix form,

$$
\begin{bmatrix} \frac{1}{3} & \frac{1}{2} \\ \frac{1}{2} & 1 + \frac{EJ}{k b^2} \end{bmatrix} \begin{bmatrix} V_B \\ \frac{M_B}{b} \end{bmatrix} = \begin{bmatrix} \frac{1}{8} \\ \frac{1}{6} \end{bmatrix} qb + \begin{bmatrix} -\frac{1}{2} \\ - 1 \end{bmatrix} \dfrac{\alpha \Delta T  \, EJ}{h b} \ .
$$

The solution of the linear system reads

$$
\begin{bmatrix} V_B \\ \frac{M_B}{b} \end{bmatrix} & = \dfrac{1}{\frac{1}{3} + \frac{EJ}{3 k b^2} - \frac{1}{2} \frac{1}{2}} \begin{bmatrix} 1 + \frac{EJ}{k b^2} & -\frac{1}{2} \\ -\frac{1}{2} & \frac{1}{3} \end{bmatrix} \left(  \begin{bmatrix} \frac{1}{8} \\ \frac{1}{6} \end{bmatrix} qb + \begin{bmatrix} -\frac{1}{2} \\ - 1 \end{bmatrix} \dfrac{\alpha \Delta T  \, EJ}{h b} \right) = \\
 & = \dfrac{1}{\frac{1}{12} + \frac{EJ}{3 k b^2}} \left( \begin{bmatrix} \frac{1}{24} + \frac{EJ}{8 k b^2} \\ \frac{-1}{144} \end{bmatrix} qb + \begin{bmatrix} -\frac{EJ}{2 k b^2} \\ \frac{1}{12} \end{bmatrix}  \dfrac{\alpha \Delta T  \, EJ}{h b} \right) = \\
$$

**Limit cases.** 

$$\begin{aligned}
  \frac{k b^2}{EJ} & \rightarrow +\infty && : && \begin{bmatrix} V_B \\ \frac{M_B}{b} \end{bmatrix} \rightarrow \begin{bmatrix} V_B \\ \frac{M_B}{b} \end{bmatrix}_{clamp} = \begin{bmatrix} \frac{1}{2} \\ \frac{-1}{12} \end{bmatrix} qb + \begin{bmatrix} 0 \\ 1 \end{bmatrix}  \dfrac{\alpha \Delta T  \, EJ}{h b} \\
  \frac{k b^2}{EJ} & \rightarrow 0       && : && \begin{bmatrix} V_B \\ \frac{M_B}{b} \end{bmatrix} \rightarrow \begin{bmatrix} V_B \\ \frac{M_B}{b} \end{bmatrix}_{hinge} = \begin{bmatrix} \frac{3}{8} \\ 0 \end{bmatrix} qb + \begin{bmatrix} -\frac{3}{2} \\ 0 \end{bmatrix}  \dfrac{\alpha \Delta T  \, EJ}{h b} \\
\end{aligned}$$

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
:open:

The structure is hyper-static once. Let the vertical component $V_C$ of the reaction in $B$ be the (independent unknown) hyperstatic action.
From equilibrium conditions, the reactions in $A$ and $B$ read

$$\begin{aligned}
  M_A: & \  0 = 2 b V_C + b H_B - \frac{qb^2}{2} \\
    H: & \  0 = H_A + H_B \\
    V: & \  0 = V_A + V_C - qb \\
\end{aligned} \quad \rightarrow \quad
\begin{aligned}
  H_B & = - 2 V_C + \frac{qb^2}{2} \\
  H_A & = - H_B = 2 V_C - \frac{qb^2}{2} \\
  V_A & = qb - V_C
\end{aligned}$$

**Bending moment.** In $AB$, with $z$-coordinate as the coordinate along the axis from $A: z= 0$, to $B: z=\sqrt{2}b$,

$$\begin{aligned}
  M_{AB}(z) 
  & = \left( V_A + H_A \right) \frac{z}{\sqrt{2}} - \frac{q \left(\frac{z}{\sqrt{2}}\right)^2}{2} = \quad , \quad z \in \left[0, \sqrt{2} b \right] \\
  & = \left( \dfrac{q b}{2} + V_C \right) \dfrac{z}{\sqrt{2}} - \dfrac{q z^2}{4}
\end{aligned}$$

In $CB$, with $z$-coordinate from $C$ to $B$

$$\begin{aligned}
  M_{BC}(z)
  & = V_C z \quad , \quad z \in \left[ 0 , b \right] \\
\end{aligned}$$

**Method 1 - Elastic line.**

...

**Method 2 - PCVW.**

$$\begin{aligned}
0 & = \int_{str} \widetilde{M}(s) \theta'(s; V_C) \, ds - \widetilde{V}_C w_C  = \\
  & = \int_{AB \cup BC} \widetilde{M}(z) \left( \dfrac{M(z; V_C)}{EJ} + \dfrac{\alpha \Delta T}{h} \right) \, dz \ .
\end{aligned}$$

as the real displacement $w_C = 0$.
One set of *virtual loads* is used to get the equation required to evaluate the hyper-static action $V_C$:
1. $\widetilde{V}_C^1 = 1$ and thus $\widetilde{M}_{AB}^1(z) = \frac{z}{\sqrt{2}}$, $\widetilde{M}_{BC}^1(z) = z$

The equation becomes

$$\begin{aligned}
0 & = \int_{z=0}^{\sqrt{2} b} \dfrac{z}{\sqrt{2}} \dfrac{1}{EJ} \left( \left( \dfrac{qb}{2} + V_C \right) \dfrac{z}{\sqrt{2}} - \dfrac{q z^2}{4} \right) \, dz
    + \int_{z=0}^{         b}        z           \left( \dfrac{1}{EJ} V_C z + \dfrac{\alpha \Delta T}{h} \right)  \, dz = \\
  & = \dfrac{1}{EJ} \left( \left( qb + V_C \right) \dfrac{\left(\sqrt{2} b \right)^3}{6} - \dfrac{q \left(\sqrt{2}b\right)^4}{16 \sqrt{2}} \right) + \dfrac{V_C b^3}{3 EJ} + \dfrac{\alpha \Delta T \, b^2}{2 h} = \\
  & = \dfrac{qb^4}{EJ} \left( \dfrac{\sqrt{2}}{6} - \dfrac{\sqrt{2}}{8} \right) + \dfrac{V_C b^3}{EJ} \left( \dfrac{\sqrt{2}}{3} + \dfrac{1}{3} \right) + \dfrac{\alpha \Delta T \, b^2}{2 h} = \\
  & = \dfrac{\sqrt{2}}{24} \dfrac{qb^4}{EJ} + \dfrac{V_C b^3}{EJ} \dfrac{\sqrt{2}+1}{3} + \dfrac{\alpha \Delta T \, b^2}{2h}
\end{aligned}$$

so that

$$\begin{aligned}
  V_C 
  & = - \dfrac{\sqrt{2}}{8(\sqrt{2}+1)} qb - \dfrac{3}{2(\sqrt{2}+1)} \dfrac{\alpha \Delta T \, E J}{2 h b} = \\
  & = - \dfrac{\sqrt{2}-1}{4\sqrt{2}} qb - \dfrac{3(\sqrt{2}-1)}{2} \dfrac{\alpha \Delta T \, E J}{2 h b} \ .
\end{aligned}$$



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
:open:

Solve with $F = qb$.

**Kinematic analysis.**

...as the reactions from the springs are unknown, the structure can be considered as three times hyperstatic ($3$ beams: $3 \times 3 = 9$ d.o.f., $12$ d.o.c., $12-9 = 3$ actual d.o.c.; todo: explicitly prove that there's no rigid degree of freedom...)

**Reactions at ground and opening the loops.**

![](../../../media/solids/s03-iso.png)

With an incremental removal of constraints, and the corresponding equilibrium conditions provide 5 relations between 8 unknown actions,

$$\begin{aligned}
  M_{G,3}    : & \quad 0 = V_H b + M_H \\
  M_{A,1+2+3}: & \quad 0 = - \dfrac{qb^2}{2} - F \frac{3}{2}b + M_H + 3b V_H + 2b H_H + M_A \\
  M_{G,2}    : & \quad 0 = F \frac{b}{2} - V_D b - H_D b \\
  V_{1+2+3}  : & \quad 0 = - qb - F + V_A + V_H \\
  H_{1+2+3}  : & \quad 0 =            H_A + H_H \ ,
\end{aligned}$$

i.e. a linear system that is 3 times under-determined (in agreement with the 3 hyperstatics evaluated above). Here the independent unknown hyperstatics are chosen to be $V_D$, $M_A$, $M_H$, and thus

$$\begin{aligned}
  V_H & = - \frac{M_H}{b} \\
  H_H & = F - \dfrac{3}{2} V_H - \dfrac{1}{2} \dfrac{M_H}{b} - \dfrac{1}{2} \dfrac{M_A}{b} && = F + \dfrac{M_H}{b} - \dfrac{1}{2}\dfrac{M_A}{b} \\
  H_D & = \dfrac{F}{2} - V_D \\
  V_A & = 2 F - V_H = 2 F + \dfrac{M_H}{b} \\
  H_A & = - H_H = - F - \dfrac{M_H}{b} + \dfrac{1}{2} \dfrac{M_A}{b} \ .
\end{aligned}$$

**Internal bending moment, as a function of the hyperstatics.**

$$\begin{aligned}
  M_{AD}(z) & = -M_A + \left( H_A + V_A \right) \dfrac{z}{\sqrt{2}} - \dfrac{q \left(\frac{z}{\sqrt{2}}\right)^2}{2} = \\
            & = -M_A + \left( F + \dfrac{1}{2} \dfrac{M_A}{b} \right) \dfrac{z}{\sqrt{2}} - \dfrac{q \left(\frac{z}{\sqrt{2}}\right)^2}{2} \\
  M_{DF}(z) & = -M_A + H_A ( b + z ) + V_A b - \dfrac{q b^2}{2} - H_D z = \\
            & = -M_A + Fb + \dfrac{3}{2} M_A + z \left( - \dfrac{3}{2} F- \dfrac{M_H}{b} + \dfrac{1}{2}\dfrac{M_A}{b} + V_D \right) = \\
            & = \dfrac{1}{2} M_A + Fb + z \left( - \dfrac{3}{2} F- \dfrac{M_H}{b} + \dfrac{1}{2}\dfrac{M_A}{b} + V_D \right) \\
  M_{FG}(z) & = -M_A + 2 H_A b  + V_A ( b + z ) - qb \left( \dfrac{b}{2} + z \right) - H_D b - V_D z \\
            & = -M_A - M_H + M_A - \frac{qb^2}{2} - \frac{Fb}{2} + V_D b + z \left( 2 F + \dfrac{M_H}{b} - V_D - qb \right) = \\
            & = \left( F b + M_H - V_D b \right) \left( \dfrac{z}{b} - 1 \right) \\
  M_{DE}(z) & = V_D z \\
  M_{BC}(z) & = - F z \\
  M_{CE}(z) & = - F \frac{b}{2} \\
  M_{EG}(z) & = - F \frac{b}{2} + V_D b + H_D z = \\
            & = \left( \dfrac{F}{2} - V_D \right) \left( z - b \right) \\
  M_{HG}(z) & = M_H + V_H z = \\
            & = M_H \left( 1 - \dfrac{z}{b} \right) \ .
\end{aligned}$$

**Method 1 - Elastic line.**

**Method 2 - PCVW.**

$$\begin{aligned}
0 & = \int_{str} \widetilde{M}(s) \theta'(s; M_A, M_H, V_D) \, ds - \widetilde{M}_A \theta_A - \widetilde{M}_H \theta_H - \widetilde{V}_D ( u_{D,2} - u_{D,1} )  = \\
  & = \int_{str} \widetilde{M}(z) \left( \dfrac{M(z; M_A, M_H, V_D)}{EJ} + \dfrac{\alpha \Delta T}{h} \right) + \widetilde{M}_A \dfrac{M_A}{k} + \widetilde{M}_H \dfrac{M_H}{k}  \ ,
\end{aligned}$$

as the hinge constraint set no relative displacement in $D$, $u_{D,2} - u_{D,1} = 0$, and the rotations in $A$ and $H$ can be written as functions of the moments $M_A$, $M_H$ introduced into the structure by the rotational springs.
Three sets of *virtual loads* are used to get the linear system required to evaluate the hyper-static actions $M_A$, $M_H$, $V_D$
1. $\widetilde{M}_A^1 = 1$, $\widetilde{M}_H^1 = 0$, $\widetilde{V}_D^1 = 0$,
2. $\widetilde{M}_A^2 = 0$, $\widetilde{M}_H^2 = 1$, $\widetilde{V}_D^2 = 0$,
3. $\widetilde{M}_A^3 = 0$, $\widetilde{M}_H^3 = 0$, $\widetilde{V}_D^3 = 1$,

$$\begin{aligned}
0 & = 
    \int_{z=0}^{\sqrt{2}b} \left( \dfrac{z}{2 \sqrt{2} b} - 1 \right) \dfrac{1}{EJ} \left[ -M_A + \left( F + \dfrac{1}{2} \dfrac{M_A}{b} \right) \dfrac{z}{\sqrt{2}} - \dfrac{q \left(\frac{z}{\sqrt{2}}\right)^2}{2} \right] \, dz 
  + \int_{z=0}^{b} \left( \dfrac{1}{2} + \dfrac{1}{2} \dfrac{z}{b} \right) \dfrac{1}{EJ} \left[ \dfrac{1}{2} M_A + Fb + z \left( - \dfrac{3}{2} F- \dfrac{M_H}{b} + \dfrac{1}{2}\dfrac{M_A}{b} + V_D \right) \right] \ , dz + \dfrac{M_A}{k} 
\end{aligned}$$

$$\begin{aligned}
0 & =
    \int_{z=0}^{b} - \dfrac{z}{b} \dfrac{1}{EJ} \left[ \dfrac{1}{2} M_A + Fb + z \left( - \dfrac{3}{2} F- \dfrac{M_H}{b} + \dfrac{1}{2}\dfrac{M_A}{b} + V_D \right) \right] \, dz 
  + \int_{z=0}^{b} \left( \dfrac{z}{b} - 1  \right) \left[ \dfrac{1}{EJ} \left( F b + M_H - V_D b \right) \left( \dfrac{z}{b} - 1 \right) + \dfrac{\alpha \Delta T}{h} \right] \, dz
  + \int_{z=0}^{b} \left( 1 - \dfrac{z}{b} \right) \dfrac{1}{EJ} M_H \left( 1 - \dfrac{z}{b} \right) \, dz + \dfrac{M_H}{k}
\end{aligned}$$

$$\begin{aligned}
0 & = 
    \int_{z=0}^{b} z \dfrac{1}{EJ} \left[ \dfrac{1}{2} M_A + Fb + z \left( - \dfrac{3}{2} F- \dfrac{M_H}{b} + \dfrac{1}{2}\dfrac{M_A}{b} + V_D \right) \right] \, dz
  + \int_{z=0}^{b} - b\left( \dfrac{z}{b} - 1  \right) \left[ \dfrac{1}{EJ} \left( F b + M_H - V_D b \right) \left( \dfrac{z}{b} - 1 \right) + \dfrac{\alpha \Delta T}{h} \right] \, dz
  + \int_{z=0}^{b} z \, \dfrac{1}{EJ} V_D z \, dz
  + \int_{z=0}^{b} - (z-b) \dfrac{1}{EJ} \left( \dfrac{F}{2} - V_D \right) (z-b) \, dz
\end{aligned}$$


$$\begin{bmatrix} 11 & 12 & 13 \\ 12 & 22 & 23 \\ 13 & 23 & 33 \end{bmatrix} \begin{bmatrix} M_A \\ M_H \\ V_D b \end{bmatrix} = \begin{bmatrix} f_1 \\ f_2 \\ f_3  \end{bmatrix} \dfrac{F \dots}{\dots} + \begin{bmatrix} t_1 \\ t_2 \\ t_3 \end{bmatrix} \dfrac{\alpha \Delta T \dots}{\dots}$$


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
