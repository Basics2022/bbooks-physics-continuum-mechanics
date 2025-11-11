(solid-mechanics:intro:small-displacements-statics-beam-weak-form)=
# Small displacement - Statics - Weak formulation and "Energy" theorems for beam structures

In this section, theorems for elastic structures are specialized for beam structures. 

**todo** Beam model used here...

## Strong formulation of the problem

**Indefinite equilibrium.** External distributed loads are equilibrated by internal actions, resultant of stress field on beam sections.

$$\begin{aligned}
  0 & = T_z'(z) + n(z)    && \text{(axial loads)} \\
  0 & = T_x'(z) + f_x(z)  && \text{(shear loads)} \\
  0 & = T_y'(z) + f_y(z)  &&                      \\
  0 & = M_x'(z) - T_y(z)  && \text{(bending)}     \\
  0 & = M_y'(z) + T_x(z)  &&                      \\
  0 & = M_z'(z) + m_z(z)  && \text{(torsion)}     \\
\end{aligned}$$

**Kinematics.**

**Constitutive equations.** Under the assumptions ... (kinematic assumptions, decoupling,...), 

$$\begin{aligned}
  T_z(z) & = EA u'_z(z)  \\
  T_x(z) & = \chi GA_x u'_x(z)  \\
  T_y(z) & = \chi GA_y u'_y(z)  \\
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

