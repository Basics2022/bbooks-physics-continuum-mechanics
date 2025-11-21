(solid-mechanics:small-displacements:beams:slender)=
# Slender beams

**Bernoulli kinematic assumption.**

$$\begin{aligned}
  0 & = s'_{Px} - \theta_y \quad && \rightarrow \qquad \theta_y = s'_{Px}  \\
  0 & = s'_{Py} + \theta_x \quad && \rightarrow \qquad \theta_x =-s'_{Py}  \\
\end{aligned}$$

As an example, the constitutive law for bending in a structurally decoupled elastic beam becomes

$$\begin{aligned}
  M_x & = EJ_x \theta'^{\ mech}_x = - EJ_x s''^{\ mech}_{Py} \\
  M_y & = EJ_y \theta'^{\ mech}_y =   EJ_y s''^{\ mech}_{Px} \\
\end{aligned}$$

```{prf:example} Clamped beam

Internal equilibrium equations read

$$\begin{aligned}
  0 & = F_z' + f_z       && \text{(axial)}   \\
  0 & = F'_y + f_y       && \text{(shear)}   \\
  0 & = M'_x - T_y + m_x && \text{(bending)} \\
\end{aligned}$$

with axial force $F_z = EA s'_{Pz}$, shear force $F_y = \chi^{-1} GA ( s'_{Py} + \theta_x )$, and bending moment $M_x = EJ \theta'_x$. The beam has length $b$, it's clamped in $A: z=0$, s.t. essential boundary conditions in $A$ read

$$s_{Pz}(z=0) = 0 \quad , \quad s_{Py}(z=0) = 0 \quad , \quad \theta_{x}(z=0) = 0 \ ,$$

and loaded lumped force and moment in $B: z=b$, s.t. natural boundary conditions in $B$ read

$$F_z(z=b) = Z \quad , \quad F_y(z=b) = Y \quad , \quad M_x(z=b) = M$$

and no distributed actions $f_y = f_z = 0$, $m_z = 0$, s.t. equilibrium equation becomes

$$\begin{aligned}
  0 & = F_z'             && \text{(axial)}   \\
  0 & = F'_y             && \text{(shear)}   \\
  0 & = M'_x - F_y       && \text{(bending)} \\
\end{aligned}$$

From the equilibrium equations and the boundary conditions in $z=b$, it immediately follows the distribution of the internal actions along the beam

$$F_z(z) = Z \quad , \quad F_y(z) = Y \quad , \quad M_x(z) = M + Y ( z - b ) \ .$$

Using the constitutive laws and the essential boundary conditions in $z=0$, it immediately follows the displacement field along the beam,

$$\begin{aligned}
  s_{Pz}(z)   & = \frac{Z}{EA} z \\
  s_{Py}(z)   & = - \frac{1}{EJ} \left( Y \frac{z^3}{6} + (M-Yb) \frac{z^2}{2} \right) + \frac{Y}{\chi^{-1} GA} z \\
  \theta_x(z) & = \frac{1}{EJ} \left( Y \frac{z^2}{2} + (M-Yb) z \right)
\end{aligned}$$

The displacement of the extreme point $B$ thus reads

$$\begin{aligned}
  s_{Bz}      & = s_{Pz}(z=b)   && = \frac{Z b}{EA} \\
  s_{By}      & = s_{Py}(z=b)   && = -\frac{M b^2}{2 EJ} + \frac{Y b^3}{3EJ} + \frac{Y b}{\chi^{-1} GA} \\
  \theta_{Bx} & = \theta_x(z=b) && = \frac{M b}{EJ} - \frac{Y b^2}{2 EJ}
\end{aligned}$$

Let's discuss the order of magnitude of the two terms in $s_{By}$ due to $Y$. 

**Transverse displacement: bending and shear contributions.** For an elastic medium, the shear modulus $G$ can be written as a function of the elastic modulus $E$ and the Poisson ration $\nu$,

$$G = \frac{E}{2 (1 + \nu)} \ .$$

While the value of the Poisson ratio i limited to $-1 \le \nu \le 0.5$, it's usually in the range $[0,0.5]$. If Poisson ratio belongs to the latter range, the ratio $\frac{G}{E}$ belongs to the range $\left[ \frac{1}{3} , \frac{1}{2} \right]$, and thus $G$ has the same order of magnitude as $E$.

The properties of a square section are

$$A = a^2 \quad , \quad J = \frac{1}{12} a^4 \quad , \quad \chi = \frac{6}{5} \ .$$

Thus the ratio of the two contributions to transverse displacement has order of magnitude

$$\dfrac{\frac{Y b^3}{3 EJ}}{\frac{Yb}{ \chi^{-1} G A}} = \dfrac{G}{E} \chi \dfrac{ b^2 A }{ J } = \dfrac{G}{E} \frac{6}{5} 12 \dfrac{b^2}{a^2} = \dfrac{24}{5} \div \dfrac{36}{5} \dfrac{b^2}{a^2} = 4.8 \div 7.2 \left( \dfrac{b}{a} \right)^2 \ .$$

It immediately follows that the displacement of $B$ due to shear deformation for a beam with square section with side $a$ and length $b = 10 a$ is $480 \div 720$ times larger than the contribution due to bending (and the following transverse displacement of the axis of the beam associated with the rotation of tits sections).

**Transverse and axial displacement.** The comparison of the transverse displacement and the axial displacement gives the ratio

$$\dfrac{\frac{Y b^3}{3 EJ}}{\frac{Z b}{E A}} = \dfrac{Y}{Z} \dfrac{ b^2 A }{ J } = \dfrac{Y}{Z} 12 \left(\dfrac{b}{a}\right)^2 \ ,$$

and if the components of the force have similar magnitude $Y \sim Z$, the order of magnitude of the ratio becomes $12 \left( \frac{b}{a} \right)^2$, so that axial displacement of slender beams $\frac{b}{a} \gg 1$ becomes negligible if compared with transverse displacement.

```
