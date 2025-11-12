(solid-mechanics:intro:small-displacements-statics-weak-form)=
# Small displacement - Statics - Weak formulation and "Energy" theorems

Starting from strong form of equilibrium equations, inner compatibility and congruence with essential boundary conditions, it's possible to:
- derive a weak formulation of the problem
- derive energy theorems, with a proper choice of the test function involved in the weak formulation.

```{dropdown} Summary

- Strong formulation of the problem
- Weak formulation
  - Existence and uniqueness of the solution
  - Principle of virtual work and complementary virtual work
  - Principle of stationariety of the total potential energy $\Pi$ and total complementary potential energy $\Pi^*$
  - Classical theorems: Maxwell-Betti ($F^1 s^2 = F^2 s^1$), Menabrea-Castigliano ($s_i = \partial_{F_i} \Pi$, $F_i = \partial_{s_i} \Pi$)

```

(solid-mechanics:intro:small-displacements-statics-weak-form:strong)=
## Strong formulation of the problem

**Indefinite equilibrium and natural boundary conditions on $S_N$.** 

$$\begin{cases}
  \nabla \cdot \boldsymbol \sigma + \overline{\mathbf{f}} =  \mathbf{0} & \text{ in $V$} \\
  \hat{\mathbf{n}} \cdot \boldsymbol\sigma = \overline{\mathbf{t}}_{\mathbf{n}} & \text{on $S_N$}
\end{cases}$$

**Internal congruence and compatibility with essential constraints on $S_D$.**

$$\begin{cases}
\boldsymbol\varepsilon = \nabla^S \mathbf{s} = \dfrac{1}{2} \left( \nabla \mathbf{s} + \nabla^T \mathbf{s} \right) & \text{in $V$} \\
\mathbf{s} = \overline{\mathbf{s}} & \text{on $S_D$}
\end{cases}$$

**Other boundary conditions - e.g. Robin.** Beside essential boundary conditions (prescribing the displacement) and natural boundary condtions (prescribing the stress vector), other boundary conditions may exist. As an example, Robin boundary conditions are defined as a boundary condition prescribing a linear combination of displacement and stress, and may represent *flexible constraints*. The most general affine relation between dispacement and stress vector reads

$$\mathbf{a} \cdot \mathbf{s} = \mathbf{b} \cdot \boldsymbol\sigma \cdot \hat{\mathbf{n}} + \mathbf{c}  \qquad \text{on $S_R$} \ ,$$

having exploited here the symmetry (**todo**) of the stress tensor $\boldsymbol\sigma$.
If $\boldsymbol\alpha$ is invertible, the latter relation may be written in the form

$$\mathbf{s} = \mathbf{b} \cdot \boldsymbol\sigma \cdot \hat{\mathbf{n}} + \mathbf{c} \qquad \text{on $S_R$} \ .$$

**Linear elastic constitutive equation.** Constitutive equation of linear elastic media in the regime of small displacement reads

$$\boldsymbol\varepsilon = \mathbf{D} : \boldsymbol\sigma + \boldsymbol\alpha \, \Delta T \ ,$$

being the latter the contribution of thermal strains. The "inverse" relation reads

$$\boldsymbol\sigma = \mathbf{C} : \boldsymbol\varepsilon - \boldsymbol\beta \, \Delta T \ .$$

If temperature field is prescribed and known it can be treated as a forcing, otherwise its an unkown physical quantity and the internal energy (or temperature) balance equation needs to be solved along with the mechanical equilibrium equation.

(solid-mechanics:intro:small-displacements-statics-weak-form:weak)=
## Weak formulations of the problem

(solid-mechanics:intro:small-displacements-statics-weak-form:weak:equilibrium)=
### Weak formulation of equilibrium conditions

For every[^test-fun-regularity] function $\mathbf{w}$

[^test-fun-regularity]: For every test function that is **regular enough**, meaning that everything that is written in the equatiions exist.

$$\begin{aligned}
0 & = \int_{V} \mathbf{w} \cdot \left\{ \nabla \cdot \boldsymbol\sigma + \overline{\boldsymbol{f}} \right\} = \\
  & = \int_{V} w_j \left\{ \sigma_{ij/i} + \overline{f}_j \right\} = \\
  & = \oint_{\partial V} n_i \sigma_{ij} w_j - \int_{V} w_{j/i} \sigma_{ij} + \int_{V}  w_j \overline{f}_j = \\
  & = - \int_{V} w_{j/i} \sigma_{ij} + \int_{V}  w_j \overline{f}_j + \int_{S_N} w_j \overline{t}_n + \int_{\partial V / S_N} w_j t_j = \\
  & = - \int_{V} \dfrac{1}{2} \left(  w_{j/i} + w_{i/j} \right) \sigma_{ij} + \int_{V}  w_j \overline{f}_j + \int_{S_N} w_j \overline{t}_n + \int_{\partial V / S_N} w_j t_j = \\
\end{aligned}$$

having exploited symmetry of stress tensor $\boldsymbol\sigma$.

(solid-mechanics:intro:small-displacements-statics-weak-form:weak:congruence)=
### Weak formulation of congruence conditions

For every 2$^{nd}$ order tensor function $\boldsymbol\Omega$

$$\begin{aligned}
0 & = \int_V \boldsymbol\Omega : \left\{ \boldsymbol\varepsilon - \dfrac{1}{2} \left( \nabla \mathbf{s} + \nabla^T \mathbf{s} \right) \right\} = \\
  & = \int_V \Omega_{ij} \left\{ \varepsilon_{ij} - \frac{1}{2}\left( s_{i/j} + s_{j/i} \right) \right\} = \\
  & = \int_V \dfrac{1}{2} \left\{ \Omega_{ij/j} s_i + \Omega_{ij/i} s_j \right\} + \int_{V} \Omega_{ij} \varepsilon_{ij} - \oint_{\partial V} \dfrac{1}{2} \left\{ n_j \Omega_{ij} s_i + n_i \Omega_{ij} s_j \right\} \ .
\end{aligned}$$

If $\boldsymbol\Omega$ is chosen to be symmetric,

$$\begin{aligned}
0 & = \int_V \Omega_{ij/j} s_i  + \int_{V} \Omega_{ij} \varepsilon_{ij} - \oint_{\partial V} n_i \Omega_{ij} s_j = \\
  & = \int_V \Omega_{ij/j} s_i  + \int_{V} \Omega_{ij} \varepsilon_{ij} - \int_{S_D} n_i \Omega_{ij} \overline{s}_j - \int_{\partial V / S_D} n_i \Omega_{ij} s_j \ .
\end{aligned}$$

### Existence and uniqueness of the solution

```{prf:theorem} Existence and uniqueness of the solution of the small-strain, small-displacement elastic problem

Under the assumptions ..., there exists a unique solution of the elastic problem that is at the same time congruent and equilibrated.

```

...**todo**...

(solid-mechanics:intro:small-displacements-statics-weak-form:weak:pvw)=
### Principle of virtual work

Starting from the [weak form of equilibrium conditions](solid-mechanics:intro:small-displacements-statics-weak-form:weak:equilibrium), and choosing $\mathbf{w}$ to be the variation of a **congruent displacement field** $\widetilde{s}$  with internal congruence in $V$ and compatibility with *given* essential constraints on $S_D$, i.e. that satisfies the conditions

$$\begin{aligned}
  \widetilde{\boldsymbol{\varepsilon}} & := \dfrac{1}{2} \left( \nabla \widetilde{\mathbf{s}} + \nabla^T \widetilde{\mathbf{s}} \right) && \text{in $V$} \\
  \widetilde{\mathbf{s}} & = \overline{\mathbf{s}} && \text{on $S_D$} \ ,
\end{aligned}$$

with **no other conditions** on $\widetilde{\boldsymbol\sigma}$ in $V$ and $\widetilde{\mathbf{t}}_{\mathbf{n}}$ on $S_N$. From the definition $\mathbf{w} = \delta \widetilde{\mathbf{s}}$, it follows

$$\begin{aligned}
  \delta \widetilde{\boldsymbol{\varepsilon}} & = \dfrac{1}{2} \left( \nabla \delta \widetilde{\mathbf{s}} + \nabla^T \delta \widetilde{\mathbf{s}} \right) && \text{in $V$} \\
  \delta \widetilde{\mathbf{s}} & = \mathbf{0} && \text{on $S_D$} \ ,
\end{aligned}$$

and

$$\begin{aligned}
0 & = - \int_{V} \delta \widetilde{\varepsilon}_{ij} \sigma_{ij} + \int_{V}  \delta \widetilde{s}_j \overline{f}_j + \int_{S_N} \delta \widetilde{s}_j \overline{t}_j + \int_{S_R} \delta \widetilde{s}_j t_j \ .
\end{aligned}$$

(solid-mechanics:intro:small-displacements-statics-weak-form:weak:pcvw)=
### Principle of complementary virtual work

Starting from the weak form of the [congruence condition](solid-mechanics:intro:small-displacements-statics-weak-form:weak:congruence), and choosing $\boldsymbol\Omega$ to be the variation of an **equilibrated stress field** $\widetilde{\boldsymbol{\sigma}}$ due to *given* external loads $\widetilde{\mathbf{f}}$ in $V$ and $\widetilde{\mathbf{t}}_{\mathbf{n}}$ on $S_N$, i.e. satisfying the conditions

$$\begin{cases}
  \widetilde{\sigma}_{ij/i} + \widetilde{f}_j = 0 & \text{in $V$} \\
  n_i \widetilde{\sigma}_{ij} = \widetilde{t}_j   & \text{in $S_N$}
\end{cases}$$

with **no other conditions** on $\boldsymbol\varepsilon$ and $\mathbf{s}$ in $V$ and $S_D$. From the definition $\Omega_{ij} = \delta \widetilde{\sigma}_{ij}$, it follows

$$\begin{cases}
  \delta \widetilde{\sigma}_{ij/i}      = 0   & \text{in $V$} \\
  n_i \, \delta \widetilde{\sigma}_{ij} = 0   & \text{in $S_N$}
\end{cases}$$

and

$$\begin{aligned}
0 & = \int_V \underbrace{\delta \widetilde{\sigma}_{ij/i}}_{= 0} s_j  + \int_{V} \delta \widetilde{\sigma}_{ij} \varepsilon_{ij} - \int_{S_D} n_i \delta \widetilde{\sigma}_{ij} \overline{s}_j  - \int_{S_N} \underbrace{n_i \delta \widetilde{\sigma}_{ij}}_{=0} s_j  - \int_{S_R} n_i \delta \widetilde{\sigma}_{ij} s_j = \\
  & = \int_{V} \delta \widetilde{\sigma}_{ij} \varepsilon_{ij} - \int_{S_D} n_i \delta \widetilde{\sigma}_{ij} \overline{s}_j - \int_{S_R} n_i \delta \widetilde{\sigma}_{ij} s_j \ . 
\end{aligned}$$


(solid-mechanics:intro:small-displacements-statics-weak-form:weak:stationariety-potential)=
### Principle of stationariety of total potential energy

Choosing the (unique) solution of the elastic problem as the compatible field used in the principle of virtual work, $\widetilde{\mathbf{s}} = \mathbf{s}$, $\widetilde{\boldsymbol{\varepsilon}} = \boldsymbol{\varepsilon}$, it follows that

$$\begin{aligned}
 0 & = - \int_V \delta \boldsymbol\varepsilon : \boldsymbol\sigma + \int_{V} \delta \mathbf{s} \cdot \overline{\mathbf{f}} + \int_{S_N} \delta \mathbf{s} \cdot \overline{\mathbf{t}} + \int_{S_R} \delta \mathbf{s} \cdot \mathbf{t} =  
\end{aligned}$$

```{dropdown} Different expressions of variation of the "internal energy"
:open:

**todo** check which kind of thermodynamic potential it really is.

$$\begin{aligned}
  \int_V \delta \boldsymbol\varepsilon : \boldsymbol\sigma 
  & = \int_V \delta \boldsymbol\varepsilon : \left( \mathbf{C} : \boldsymbol\varepsilon - \boldsymbol\beta \Delta T \right) = \\
  & = \delta \int_V \left\{ \dfrac{1}{2} \boldsymbol\varepsilon : \mathbf{C} : \boldsymbol\varepsilon - \boldsymbol\varepsilon : \boldsymbol\beta \Delta T \right\} + \int_V \boldsymbol\varepsilon : \boldsymbol\beta \delta \Delta T 
\end{aligned}$$


$$\begin{aligned}
  \int_V \delta \boldsymbol\sigma : \boldsymbol\varepsilon
  & = \int_V \delta \boldsymbol\sigma : \left( \mathbf{D} : \boldsymbol\sigma + \boldsymbol\alpha \Delta T \right) = \\
  & = \delta \int_V \left\{ \dfrac{1}{2} \boldsymbol\sigma : \mathbf{D} : \boldsymbol\sigma + \boldsymbol\sigma : \boldsymbol\alpha\Delta T \right\} - \int_V \boldsymbol\sigma : \boldsymbol\alpha\delta \Delta T 
\end{aligned}$$



<!--

$$\begin{aligned}
  \int_V \delta \boldsymbol\varepsilon : \boldsymbol\sigma 
  & = \int_V \boldsymbol\sigma : \left( \mathbf{D} : \delta \boldsymbol\sigma - \boldsymbol\beta \delta \Delta T \right) = \\
  & = \delta \int_V \dfrac{1}{2} \boldsymbol\sigma : \mathbf{D} : \boldsymbol\sigma - \int_V \boldsymbol\sigma : \boldsymbol\beta \, \delta \Delta T = \\
  & = \delta \int_V \left\{ \dfrac{1}{2} \boldsymbol\sigma : \mathbf{D} : \boldsymbol\sigma - \boldsymbol\sigma : \boldsymbol\beta \Delta T \right\} + \int_V \delta \boldsymbol\sigma : \boldsymbol\beta  \Delta T 
\end{aligned}$$

-->

```

If the stress vector on Robin boundary reads $\mathbf{t} = - \mathbf{K} \cdot \mathbf{s} + \overline{\mathbf{h}}$, it follows

$$\begin{aligned}
 0 & = - \int_V \delta \boldsymbol\varepsilon : \boldsymbol\sigma + \int_{V} \delta \mathbf{s} \cdot \overline{\mathbf{f}} + \int_{S_N} \delta \mathbf{s} \cdot \overline{\mathbf{t}} + \int_{S_R} \delta \mathbf{s} \cdot \left( - \mathbf{K} \cdot \mathbf{s} + \overline{\mathbf{h}} \right) = \\ 
   & = \delta \underbrace{\left\{ - \int_V \dfrac{1}{2} \boldsymbol\varepsilon : \mathbf{C} : \boldsymbol\varepsilon + \int_{V} \boldsymbol\varepsilon : \boldsymbol\beta \Delta T + \int_{V} \mathbf{s} \cdot \overline{\mathbf{f}} + \int_{S_N} \mathbf{s} \cdot \overline{\mathbf{t}} - \int_{S_R} \dfrac{1}{2}\mathbf{s} \cdot \mathbf{K} \cdot \mathbf{s} + \int_{S_R} \mathbf{s} \cdot \overline{\mathbf{h}} \right\}}_{ =: \Pi(\boldsymbol\varepsilon, \mathbf{s})} + \int_{V} \boldsymbol\varepsilon : \boldsymbol\beta \ \delta \Delta T \ , 
\end{aligned}$$

and if $\Delta T$ is prescribed, it follows $\delta \Delta T = 0$, and

$$0 = \delta \Pi(\boldsymbol\varepsilon, \mathbf{s}) \ . $$

```{prf:theorem} Principle of stationariety of total potential energy

Among all the equilibrated solutions, the congruent solution (and thus the unique solution of the elastic problem) is the one that makes the total potential energy stationary.

```

(solid-mechanics:intro:small-displacements-statics-weak-form:weak:stationariety-potential-complementary)=
### Principle of stationariety of total complementary potential energy

If the displacement of the Robin boundary reads $\mathbf{s} = - \mathbf{S} \cdot \mathbf{t}_{\mathbf{n}} + \overline{\mathbf{r}}$,

$$\begin{aligned}
0 & = \int_{V} \delta \boldsymbol\sigma : \boldsymbol\varepsilon - \int_{S_D} \delta \mathbf{t}_{\mathbf{n}} \cdot \overline{\mathbf{s}} - \int_{S_R} \delta \mathbf{t}_{\mathbf{n}} \cdot \mathbf{s} = \\
  & = \delta \underbrace{ \left\{ \int_V \dfrac{1}{2} \boldsymbol\sigma : \mathbf{D} : \boldsymbol\sigma + \int_{V} \boldsymbol\sigma : \boldsymbol\alpha \Delta T - \int_{S_D} \mathbf{t}_{\mathbf{n}} \cdot \overline{\mathbf{s}} + \int_{S_R} \dfrac{1}{2} \mathbf{t}_n \cdot \mathbf{S} \cdot \mathbf{t}_{\mathbf{n}} - \int_{S_R} \mathbf{t}_{\mathbf{n}} \cdot \overline{\mathbf{r}} \right\} }_{\Pi^*(\boldsymbol\sigma, \mathbf{t}_{\mathbf{n}})} - \int_V \boldsymbol\sigma : \boldsymbol\alpha \, \delta \Delta T \\
\end{aligned}$$

and if $\Delta T$ is prescribed, it follows $\delta \, \Delta T = 0$, and

$$\delta \Pi^*(\boldsymbol\sigma, \mathbf{t}_{\mathbf{n}}) = 0 \ .$$

```{prf:theorem} Principle of stationariety of total complementary potential energy

Among all the congruent solutions, the equilibrated solution (and thus the unique solution of the elastic problem) is the one that makes the total complementary potential energy stationary.

```

## Classical theorems

### Maxwell-Betti

Let $1$ and $2$ label two sets of loads acting on a structure. Now, using displacement $s^2$ as the test function in the weak formulation of equilibrium conditions for $1$, and displacement $s^1$ for equilibrium conditions for $2$

$$\begin{aligned}
 0 & = - \int_V \varepsilon^2_{ij} \sigma^1_{ij} + \int_V s^2_j f^1_j + \oint_{\partial V} s^2_j t^1_j \\
 0 & = - \int_V \varepsilon^1_{ij} \sigma^2_{ij} + \int_V s^1_j f^2_j + \oint_{\partial V} s^1_j t^2_j \\
\end{aligned}$$

Let $\varepsilon^a_{ij} = D_{ijkl} \sigma^a_{kl} + \alpha_{ij} \Delta T^a = \varepsilon^{a,mech}_{ij} + \varepsilon^{a,th}_{ij}$. Subtracting the two latter equations,

$$
-\int_{V} \varepsilon^{2,th}_{ij} \sigma^1_{ij} + \int_{V} s_j^2 f^1_j + \oint_{\partial V} s^2_j t^1_j =
-\int_{V} \varepsilon^{1,th}_{ij} \sigma^2_{ij} + \int_{V} s_j^1 f^2_j + \oint_{\partial V} s^1_j t^2_j \ .
$$

If no thermal strain exists,

$$
 \int_{V} s_j^2 f^1_j + \oint_{\partial V} s^2_j t^1_j =
 \int_{V} s_j^1 f^2_j + \oint_{\partial V} s^1_j t^2_j \ .
$$


**Examples.**

- If displacement is constrained on Dirichlet boundary, $\mathbf{s}|_{S_D} = \mathbf{0}$, and the loads are made of a set of lumped forces,

   $$\mathbf{f}^1(\mathbf{r}) = \sum_{m} \mathbf{F}^1_m \delta(\mathbf{r}-\mathbf{r}_m) \ ,$$

   the expression of Maxwell-Betti theorem reads

   $$\sum_a \mathbf{F}^1_a \cdot \mathbf{s}^2_a = \sum_b \mathbf{F}^2_b \cdot \mathbf{s}^1_b \ , $$

   with $\mathbf{s}^l_m = \mathbf{s}^l(\mathbf{r}_m)$. Moreover, if only one load exists

   $$\mathbf{F}^1_a \cdot \mathbf{s}^2(\mathbf{r}_a) = \mathbf{F}^2_b \cdot \mathbf{s}^1(\mathbf{r}_b) \ .$$

### Menabrea-Castigliano


