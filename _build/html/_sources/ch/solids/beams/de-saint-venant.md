(solid-mechanics:small-displacements:beams:de-saint-venant)=
# de Saint Venant beam

(solid-mechanics:small-displacements:beams:de-saint-venant:assumptions)=
## Assumptions

(solid-mechanics:small-displacements:beams:de-saint-venant:internal-actions)=
## Internal actions

(solid-mechanics:small-displacements:beams:de-saint-venant:internal-actions:axial)=
### Axial

(solid-mechanics:small-displacements:beams:de-saint-venant:internal-actions:shear)=
### Shear

...

The axial equilibrium of an infinitesimal section of the beam between $z$ and $z+dz$ and $y = y^*$, under linear axial stress, $\sigma_z = \sigma_{z/y} \, y = \frac{M_x}{J_x} \, y$, reads for beams with constant section (**todo** is this assumption really required?)

$$\begin{aligned}
  0 
  & = - \int_{x \in b(y*)} \int_{dz} \tau_{zy} \, dz \, dx + \int_{A^*(z+dz)} \sigma_z \, dz \, dy - \int_{A^*(z)} \sigma_z \, dz \, dy = \\
  & \simeq - dz \int_{x \in b(y*)} \tau_{zy} + M_x(z+dz) \int_{A^*(z+dz)} \dfrac{y}{J_x} - M_x(z) \int_{A^*(z)} \dfrac{y}{J_x} = \\
  & \simeq dz \left[ - \int_{x \in b(y*)} \tau_{zy} + M'_x(z) \dfrac{S^*(z)}{J_x} \right] \ ,
\end{aligned}$$

with $S^*(z) = \int_{A^*(z)} y$. Expliting the rotational equilibrium, $0 = M'_x(z) - T(z)$, and the definition of the average shear stress $\overline{\tau}_{zy} = \frac{1}{b(y^*)} \int_{x \in b(y^*)} \tau_{zy}$, it follows that

$$\overline{\tau}_{zy}(z,y) = \dfrac{S^*(y)}{b^*(y) J_x} T_y \ .$$

...

**Shear stiffness.** With $\gamma_{zy} = 2 \varepsilon_{zy} = \partial_y s_z + \partial_z s_y = \frac{\tau_{zy}}{G}$, and an equilibrated shaer load $\widetilde{T}(z) = \widetilde{T}(z+dz) = 1$, so that $\widetilde{M}(z+dz) = \widetilde{M}(z) + \widetilde{T}(z) d z$ with $\widetilde{M}(z) = 0$, and $\widetilde{\tau} = \frac{S^*}{b^* J} \widetilde{T}$, and $\widetilde{\sigma} = \frac{\widetilde{M}}{J} y$, it follows

$$\begin{aligned}
  0 & = \int_V \widetilde{\sigma}_{ij} \varepsilon_{ij} - \int_{S_D} n_i \widetilde{\sigma}_{ij} s_j = \dots \\
    & = \int_V 2 \widetilde{\tau}(z) \frac{\tau(z)}{2 G} + \widetilde{T}_y(z) s_y(z) - \widetilde{T}_y(z+dz) s_y(z+dz) - \widetilde{M}_x(z+dz) \theta_x (z + d z) = \\
    & = \int_{\ell} \int_A \dfrac{S^*}{b^* J} \widetilde{T} \dfrac{1}{G} \dfrac{S^*}{b^* J} T \, dA \, d\ell - \widetilde{T}_y(z) s'_y(z) \, dz - \widetilde{T}(z) dz \, \left( \theta(z) + \theta'(z) d z \right) \simeq \\
    & = dz \left[ \dfrac{1}{GA} \ \underbrace{A \int_{A} \dfrac{S^{* 2}}{b^{* 2} J^2}}_{ \chi } \, T(z) - \left( s'_y(z) + \theta_x(z) \right) \right]
\end{aligned}$$

and thus

$$s'_y(z) + \theta_x(z) = \dfrac{\chi_y}{GA} T_y(z) \ ,$$

having introduced the definition of the **shear factor** $\chi$ into the shear stiffness $\frac{GA}{\chi}$.

```{prf:example} Shear factor of a rectangular section
:class: dropdown

As the static moment $S^*(y)$ of a rectangular section with base $a$ and height $b$ reads

$$S^*(y) = a \left( \frac{b}{2} - y \right) \cdot \frac{1}{2} \left( \frac{b}{2} + y \right) = \frac{1}{2} \left( \frac{b^2}{4} - y^2 \right) a \ .$$

the shear factor $\chi$ of a rectangular section is

$$\begin{aligned}
  \chi 
  & = ab \, \int_{x = -a/2}^{a/2} \int_{y = -b/2}^{b/2} \dfrac{ \frac{1}{4} \left( \frac{b^4}{16} - \frac{b^2 y^2}{2} + y^4 \right)}{ b^2 \left(\frac{1}{12} a b^3\right)^2 a^2 } = \\
  & = \frac{36 \, ab}{b^8} a \left( \dfrac{1}{16} - \dfrac{1}{6}\dfrac{1}{4} + \frac{1}{5} \dfrac{1}{16} \right) b^5 = \\
  & = \frac{ab}{b^8} a \left( \dfrac{9}{4} - \dfrac{3}{2} + \frac{9}{20} \right) b^5 = \\
  & = \dfrac{6}{5} \dfrac{a^2}{b^2} \ .
\end{aligned}$$

```

(solid-mechanics:small-displacements:beams:de-saint-venant:internal-actions:bending)=
### Bending

(solid-mechanics:small-displacements:beams:de-saint-venant:internal-actions:torsion)=
### Torsion

