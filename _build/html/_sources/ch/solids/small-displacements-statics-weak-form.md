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

## Weak formulations of the problem

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

### Weak formulation of compatibility conditions

For every 2$^{nd}$ order tensor function $\boldsymbol\Omega$

$$\begin{aligned}
0 & = \int_V \boldsymbol\Omega : \left\{ \boldsymbol\varepsilon - \dfrac{1}{2} \left( \nabla \mathbf{s} + \nabla^T \mathbf{s} \right) \right\} = \\
  & = \int_V \Omega_{ij} \left\{ \varepsilon_{ij} + \frac{1}{2}\left( s_{i/j} + s_{j/i} \right) \right\} = \\
  & = - \int_V \dfrac{1}{2} \left\{ \Omega_{ij/j} s_i + \Omega_{ij/i} s_j \right\} + \int_{V} \Omega_{ij} \varepsilon_{ij} + \oint_{\partial V} \dfrac{1}{2} \left\{ n_j \Omega_{ij} s_i + n_i \Omega_{ij} s_j \right\} \ .
\end{aligned}$$

If $\boldsymbol\Omega$ is chosen to be symmetric,

$$\begin{aligned}
0 & = - \int_V \Omega_{ij/j} s_i  + \int_{V} \Omega_{ij} \varepsilon_{ij} + \oint_{\partial V} n_i \Omega_{ij} s_j = \\
  & = - \int_V \Omega_{ij/j} s_i  + \int_{V} \Omega_{ij} \varepsilon_{ij} + \int_{S_D} n_i \Omega_{ij} \overline{s}_j + \int_{\partial V / S_D} n_i \Omega_{ij} s_j \ .
\end{aligned}$$

### Existence and uniqueness of the solution

### Principle of virtual work

Starting from the weak form of equilibrium conditions, and choosing $\mathbf{w}$ to be the variation of a displacement field $\widetilde{s}$  with internal congruence and compatibility with essential constraints, i.e. that satisfies the conditions

$$\begin{aligned}
  \tilde{\boldsymbol{\varepsilon}} & := \dfrac{1}{2} \left( \nabla \tilde{\mathbf{s}} + \nabla^T \tilde{\mathbf{s}} \right) && \text{in $V$} \\
  \tilde{\mathbf{s}} & = \overline{\mathbf{s}} && \text{on $S_D$} \ ,
\end{aligned}$$

from the definition $\mathbf{w} = \delta \tilde{\mathbf{s}}$, it follows

$$\begin{aligned}
  \delta \tilde{\boldsymbol{\varepsilon}} & = \dfrac{1}{2} \left( \nabla \delta \tilde{\mathbf{s}} + \nabla^T \delta \tilde{\mathbf{s}} \right) && \text{in $V$} \\
  \delta \tilde{\mathbf{s}} & = \mathbf{0} && \text{on $S_D$} \ ,
\end{aligned}$$

and

$$\begin{aligned}
0 & = - \int_{V} \delta \tilde{\varepsilon}_{ij} \sigma_{ij} + \int_{V}  \delta \tilde{s}_j \overline{f}_j + \int_{S_N} \delta{s}_j \overline{t}_n + \int_{S_R} \partial \delta{s}_j t_j \ .
\end{aligned}$$


### Principle of complementary virtual work

### Principle of stationariety of total potential energy

With prescribed temperature field,

$$\delta \varepsilon_{ij} = D_{ijkl} \delta \sigma_{kl} \ ,$$




### Principle of stationariety of total complementary potential energy
