(solid-mechanics:intro:small-displacements-statics-beam-weak-form)=
# Isotropic elastic beam structures

In this section, theorems for elastic structures are specialized for beam structures. 

**todo** Beam model used here...

(solid-mechanics:intro:small-displacements-statics-beam-weak-form:strong)=
## Strong formulation of the problem

**Indefinite equilibrium.** External distributed loads are equilibrated by internal actions, resultant of stress field on beam sections.

$$\begin{aligned}
  0 & = F_z'(z) + n(z)             && \text{(axial loads)} \\
  0 & = F_x'(z) + f_x(z)           && \text{(shear loads)} \\
  0 & = F_y'(z) + f_y(z)           &&                      \\
  0 & = M_x'(z) - F_y(z) + m_x(z)  && \text{(bending)}     \\
  0 & = M_y'(z) + F_x(z) + m_y(z)  &&                      \\
  0 & = M_z'(z) + m_z(z)           && \text{(torsion)}     \\
\end{aligned}$$

**Kinematics.**

**Constitutive equations.** Under the assumptions ... (kinematic assumptions, decoupling,...), 

$$\begin{aligned}
  F_z(z) & = EA s'_z(z)  \\
  F_x(z) & = \chi^{-1}_x GA ( s'_x(z) -  \theta_y(z) )  \\
  F_y(z) & = \chi^{-1}_y GA ( s'_y(z) +  \theta_x(z) )  \\
  M_x(z) & = EJ_x \theta'_x(z)  \\
  M_y(z) & = EJ_y \theta'_y(z)  \\
  M_z(z) & = GJ_y \theta'_z(z)  \\
\end{aligned}$$

With thermal strains due to temperature distribution $T(z) = T_0(z) + \Delta_x T(z) \frac{x}{h_x} + \Delta_y T(z) \frac{y}{h_y}$, these constitutive equations hold for the mechanical part only, while the most general constitutive equations read

$$\begin{aligned}
  u'_z      & = u^{mech \ '}_z + u^{th \ '}_z = \dfrac{T_z}{EA} + \alpha \Delta T \\
  \theta'_x & = \theta^{mech \ '}_x + \theta^{th \ '}_x = \dfrac{M_x}{EJ_x} + \alpha \dfrac{\Delta_y T}{h_y} \\
  \theta'_y & = \theta^{mech \ '}_y + \theta^{th \ '}_y = \dfrac{M_y}{EJ_y} - \alpha \dfrac{\Delta_x T}{h_x} \\
  ... \\
\end{aligned}$$

**Bernoulli beam.** If Bernoulli kinematic assumption

$$\begin{aligned}
  \theta_x(z) & = - u'_y(z) \\
  \theta_y(z) & =   u'_x(z) \\
\end{aligned}$$

holds, bending equilibrium equations read

$$\begin{aligned}
 0 & = f_x + T_x' = f_x - M''_y = f_x - ( EJ_y \theta'_y )'' = f_x - ( EJ_y u''_x )'' \\
 0 & = f_y + T_y' = f_y + M''_x = f_y + ( EJ_x \theta'_x )'' = f_y - ( EJ_x u''_y )'' \\
\end{aligned}$$


(solid-mechanics:intro:small-displacements-statics-beam-weak-form:weak)=
## Weak formulations of the problem

(solid-mechanics:intro:small-displacements-statics-beam-weak-form:weak:equilibrium)=
### Weak formulation of equilibrium conditions

Under the assumption of negligible contribution of shear stress and deformation, and Bernoulli kinematic assumption, the weak form of equilibrium equation is derived as follows: axial and bending indefinite equilibrium equations for each beam (or structural element in general) are multiplied by arbitrary test functions, these products are integrated over the beam length. Then, natural boundary conditions are applied.

```{dropdown} Timoshenko beam 
:open:

The weak form of the equilibrium equations for a beam structure modelled with [Timoshenko beams](solid-mechanics:small-displacements:beams:timoshenko) reads

$$\begin{aligned}
  0 & = \int_{\text{beams}} \left\{ u_x ( F'_x + f_x ) + u_y ( F'_y + f_y ) + u_z ( F'_z + f_z ) + \right. \\
    & \qquad \qquad + \left. \phi_x (M'_x - F_y + m_y) + \phi_y(M'_y + F_x + m_y) + \phi_z (M'_z + m_z) \right\} = \\
    & = - \int_{\text{beams}} \left\{ F_x ( u'_x - \phi_y ) + F_y ( u'_y + \phi_x ) + F_z u'_z + M_x \phi'x + M_y \phi'_ y + M_z \phi'_z \right\} + \\
    & \qquad + \left. \left[ F_x u_x + F_y u_y + F_z u_z + M_x \phi_x + M_y \phi_y + M_z \phi_z \right]\right|_{\partial \text{str}}
\end{aligned}$$

having used integration by parts. This relation holds **for every** $u_i$, $\phi_i$.

```


```{dropdown} Bernoulli beam for 2-dimensional problems

<!--
Assuming here 2-dimensional problem (and thus only one component of the bending moment, no torsion)

$$\begin{aligned}
  0 & = \int_{\text{beams}} \left[ v \left( N'(s) + n(s) \right) + w \left( - M''(s) + f(s) \right) \right] \, ds = \\
    & = \int_{\text{beams}} \left[ v \left( (EA u'_z(s))' + n(s) \right) + w \left( - (EJ u''_x(s))'' + f_x(s) \right) \right] \, ds = \\
    & = - \int_{\text{beams}} v' EA u'_z + \int_{\text{beams}} v n + \left.\left[ v \, (EA u'_z) \right]\right|_{\partial \, \text{str.}} + \\
    & \quad - \int_{\text{beams}} w'' \, EJ u''_x + \int_{\text{beams}} w f - \left. \left[ w ( EJ u''_x )' \right] \right|_{\partial \, \text{str.}} + \left. \left[ w' ( EJ u''_x ) \right] \right|_{\partial \, \text{str.}} = \\
    & = ...
\end{aligned}$$

having used integration by parts and boundary conditions on Neumann boundaries where force and moments are prescribed.
-->

```

(solid-mechanics:intro:small-displacements-statics-beam-weak-form:weak:congruence)=
### Weak formulation of congruence conditions

```{dropdown} Timoshenko beam
:open:

Neglecting transverse strain and warping contributions (their contribution is zero when multiplied by constant and linear functions and integrated), strain field in a Timoshenko beam reads

$$\begin{aligned}
   \varepsilon_{zz} & = s'_{Pz} + y \theta'_x - x \theta'_y \\ 
   \varepsilon_{xx} & = 0 \\
   \varepsilon_{yy} & = 0 \\
 2 \varepsilon_{zx} & = s'_{Px} - \theta_y - y \theta'_z \\
 2 \varepsilon_{zy} & = s'_{Py} + \theta_x + x \theta'_z \\
 2 \varepsilon_{xy} & = 0 \\
\end{aligned}$$

A weak form of congruence conditions is obtained multiplying by test functions...(**todo** discuss the choice of test functions)

$$\begin{aligned}
 0 
 & = - \int_V \left\{ (\Sigma_z + y \Phi_{x} - x \Phi_{y}) (- \varepsilon_{zz} + s'_{Pz} + y \theta'_x - x \theta'_y ) + ( \Sigma_{x} - y \Phi_z ) ( - 2\varepsilon_{zx} + s'_{Px} - \theta_y - y \theta'_z ) + ( \Sigma_{y} - x \Phi_z ) ( - 2\varepsilon_{zy} + s'_{Py} + \theta_x - x \theta'_z ) \right \} = \\
 & = \int_V \left\{ ( \Sigma_z + y \Phi_{x} - x \Phi_{y} ) \varepsilon_{zz} + ( 2 \Sigma_x ) \varepsilon_{zx} + ( 2 \Sigma_y ) \varepsilon_{zy} \right\} + \\
 & \qquad + \int_V \left\{ ( \Sigma_z + y \Phi_{x} - x \Phi_{y} )' ( s_{Pz} + y \theta_x - x \theta_y ) + ( \Sigma_x' - y \Phi'_z ) ( s_{Px} - y \theta_z ) + ( \Sigma_x - y \Phi_z ) \theta_y + ( \Sigma_y' - x \Phi'_z ) ( s_{Py} - x \theta_z ) - ( \Sigma_y - x \Phi_z ) \theta_x \right\} + \\
 & \qquad - \left[ \int_A \left\{ ( \Sigma_z + y \Phi_{x} - x \Phi_{y} ) ( s_{Pz} + y \theta_x - x \theta_y ) + ( \Sigma_x - y \Phi_z ) (s_{Px} - y \theta_z) + ( \Sigma_y - z \Phi_z ) ( s_{Py} - x \theta_z )   \right\}  \right]_{\partial l}
\end{aligned}$$

For simplicity, considering first a structurally decoupled system, so that static moments are zero and the inertia tensor is diagonal,

$$\begin{aligned}
 0 
 & = \int_V \left\{ ( \Sigma_z + y \Phi_{x} - x \Phi_{y} ) \varepsilon_{zz} + 2 ( \Sigma_x - y \Phi_z ) \varepsilon_{zx} + 2 ( \Sigma_y - x \Phi_z ) \varepsilon_{zy} \right\} + \\
 & \qquad + \int_\ell \left\{ \Sigma'_x A s_{Px} + \Sigma'_y A s_{Py} + \Sigma'_z A s_{Pz} + \left( \Phi'_x J_x - \Sigma_y A \right) \theta_x + ( \Phi'_y J_y + \Sigma_x A ) \theta_y + \Phi'_z J_z \theta_z \right\} + \\
 & \qquad - \left[ \Sigma_z A s_{Pz} + \Phi_x J_x \theta_x + \Phi_y J_y \theta_y + \Sigma_{x} s_{Px} + \Sigma_y s_{Py} + \Phi_z \theta_z \right]_{\partial l}
\end{aligned}$$

If the test functions are related to equilibrated internal actions,

$$\begin{aligned}
  0 & = \widetilde{F}_z'(z) + \widetilde{f}_z(z)                       && \text{(axial loads)} \\
  0 & = \widetilde{F}_x'(z) + \widetilde{f}_x(z)                       && \text{(shear loads)} \\
  0 & = \widetilde{F}_y'(z) + \widetilde{f}_y(z)                       &&                      \\
  0 & = \widetilde{M}_x'(z) - \widetilde{F}_y(z) + \widetilde{m}_x(z)  && \text{(bending)}     \\
  0 & = \widetilde{M}_y'(z) + \widetilde{F}_x(z) + \widetilde{m}_y(z)  &&                      \\
  0 & = \widetilde{M}_z'(z) + \widetilde{m}_z(z)                       && \text{(torsion)}     \\
\end{aligned}$$

and defined as $\widetilde{F}_i = \Sigma_i A$, $\widetilde{M}_i = \Phi_i J_i$, the weak form of the problem becomes

$$\begin{aligned}
 0 
 & = \int_V \left\{ \left( \frac{\widetilde{F}_z}{A} + y \frac{\widetilde{M}_x}{J_x} - x \frac{\widetilde{M}_y}{J_y} \right) \varepsilon_{zz} + 2 \left( \dfrac{\widetilde{F}_x}{A} - y \dfrac{\widetilde{M}_z}{J_z} \right) \varepsilon_{zx} + 2 \left( \dfrac{\widetilde{F}_y}{A} - x \dfrac{\widetilde{M}_z}{J_z} \right) \varepsilon_{zy} \right\} + \\
 & \qquad - \int_\ell \left\{ \widetilde{f}_x s_{Px} + \widetilde{f}_y s_{Py} + \widetilde{f}_z s_{Pz} + \widetilde{m}_x \theta_x - \widetilde{m}_y \theta_y - \widetilde{m}_z \theta_z \right\} + \\
 & \qquad - \left[ \widetilde{F}_x s_{Px} + \widetilde{F}_y s_{Py} + \widetilde{F}_z s_{Pz} + \widetilde{M}_x \theta_x + \widetilde{M}_y \theta_y + \widetilde{M}_z \theta_z \right]_{\partial l} \ .
\end{aligned}$$




```

(solid-mechanics:intro:small-displacements-statics-beam-weak-form:weak:pvw)=
### Principle of virtual work

Starting from the [weak form of equilibrium conditions](solid-mechanics:intro:small-displacements-statics-beam-weak-form:weak:equilibrium), and choosing the test functions $u_i = \delta s_i$, $\phi_i = \delta \theta_i$ to be variations of congruent displacement fields, 

$$\begin{aligned}
 & \delta s_x      = 0 && \text{where $x$-transverse displacement is prescribed} \\
 & \delta s_y      = 0 && \text{where $y$-transverse displacement is prescribed} \\
 & \delta s_z      = 0 && \text{where $z$-axial displacement is prescribed} \\
 & \delta \theta_x = 0 && \text{where $x$-rotation is prescribed} \\
 & \delta \theta_y = 0 && \text{where $y$-rotation is prescribed} \\
 & \delta \theta_z = 0 && \text{where $z$-rotation is prescribed} \\
\end{aligned}$$

(solid-mechanics:intro:small-displacements-statics-beam-weak-form:weak:pcvw)=
### Principle of complementary virtual work

```{dropdown} Timoshenko beam
:open:

If the test functions are related to equilibrated internal actions,

$$\begin{aligned}
  0 & = \delta \widetilde{F}_z'(z)                              && \text{(axial loads)} \\
  0 & = \delta \widetilde{F}_x'(z)                              && \text{(shear loads)} \\
  0 & = \delta \widetilde{F}_y'(z)                              &&                      \\
  0 & = \delta \widetilde{M}_x'(z) - \delta \widetilde{F}_y(z)  && \text{(bending)}     \\
  0 & = \delta \widetilde{M}_y'(z) + \delta \widetilde{F}_x(z)  &&                      \\
  0 & = \delta \widetilde{M}_z'(z)                              && \text{(torsion)}     \\
\end{aligned}$$

and defined as $\widetilde{F}_i = \Sigma_i A$, $\widetilde{M}_i = \Phi_i J_i$, the weak form of the problem becomes

$$\begin{aligned}
 0 
 & = \int_V \left\{ \left( \frac{\delta \widetilde{F}_z}{A} + y \frac{\delta \widetilde{M}_x}{J_x} - x \frac{\delta \widetilde{M}_y}{J_y} \right) \varepsilon_{zz} + 2 \left( \dfrac{\delta \widetilde{F}_x}{A} - y \dfrac{\delta \widetilde{M}_z}{J_z} \right) \varepsilon_{zx} + 2 \left( \dfrac{\delta \widetilde{F}_y}{A} - x \dfrac{\delta \widetilde{M}_z}{J_z} \right) \varepsilon_{zy} \right\} + \\
 & \qquad - \left[ \delta \widetilde{F}_x s_{Px} + \delta \widetilde{F}_y s_{Py} + \delta \widetilde{F}_z s_{Pz} + \delta \widetilde{M}_x \theta_x + \delta \widetilde{M}_y \theta_y + \delta \widetilde{M}_z \theta_z \right]_{\partial l / S_D} \ .
\end{aligned}$$

Introducing the constitutive law for an isotropic elastic beam with structural decoupling, it's possible to write strain as a function of the internal actions

$$\begin{aligned}
    \varepsilon_{zz} & = \dfrac{F_z}{EA} + y \dfrac{M_x}{J_x} - x \dfrac{M_y}{J_y} \\
  2 \varepsilon_{zx} & = \chi_x \dfrac{F_x}{GA} \\
  2 \varepsilon_{zy} & = \chi_y \dfrac{F_y}{GA} \ ,
\end{aligned}$$

s.t. the PCVW (remember structural decoupling) becomes

$$\begin{aligned}
 0 
 & = \int_{\ell} \left\{ \frac{\delta \widetilde{F}_z F_z}{E A} + \frac{\delta \widetilde{F}_x F_x}{\chi^{-1}_x G A} + \frac{\delta \widetilde{F}_y F_y}{\chi^{-1}_y G A} + \frac{\delta \widetilde{M}_x M_x}{EJ_x} + \frac{\delta \widetilde{M}_y M_y}{EJ_y} + \frac{\delta \widetilde{M}_z M_z}{GJ_z}  \right\} + \\
 & \qquad - \left[ \delta \widetilde{F}_x s_{Px} + \delta \widetilde{F}_y s_{Py} + \delta \widetilde{F}_z s_{Pz} + \delta \widetilde{M}_x \theta_x + \delta \widetilde{M}_y \theta_y + \delta \widetilde{M}_z \theta_z \right]_{\partial l / S_D} \ .
\end{aligned}$$

```


(solid-mechanics:intro:small-displacements-statics-beam-weak-form:weak:stationariety-potential)=
### Principle of stationariety of total potential energy

(solid-mechanics:intro:small-displacements-statics-beam-weak-form:weak:stationariety-potential-complementary)=
### Principle of stationariety of total complementary potential energy

