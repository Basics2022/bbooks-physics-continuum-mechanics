(solid-mechanics:small-displacements:beams:timoshenko)=
# Timoshenko beam

## Kinematic assumptions

Let $z$ coordinate the axial coordinate of a beam, and $x$, $y$ a pair of cartesian coordinates to represent the points on a beam section.

**Displacement.** Displacement of the points of a beam can written as

$$\begin{aligned}
  \mathbf{s}(x,y,z,t)
  & = \mathbf{s}_P(z,t) + \boldsymbol{\theta}(z,t) \times \mathbf{r}_P(x,y) + \mathbf{s}^{\nu + w}(x,y,z,t) = \\ 
  & = \mathbf{s}_P(z,t) + \hat{\mathbf{x}} \left( - y \theta_z \right) + \hat{\mathbf{y}} \left( x \theta_z \right) + \hat{\mathbf{z}} \left( + y \theta_x - x \theta_y \right) + \mathbf{s}^{\nu + w} \ ,
\end{aligned}$$

where the first two contributions represent a rigid motion of the section identified by the value $z$ of the axial coordinate, and $\mathbf{s}^{\nu + w}$ the contribution of strain (due to non-zero Poisson ration) and warping of the section. Here the vector $\mathbf{r}_P$(x,y) lies in the same section of referencce point $P$, i.e. $\mathbf{r}_P = (x-x_P) \hat{\mathbf{x}} + (y-y_P) \hat{\mathbf{y}}$, so that the motion of points on section $A(z)$ only depends on the displacement of $P(z)$ and the rotation of the section $A(z)$.


**Strain.**

$$\begin{aligned}
   \varepsilon_{zz} & = s'_{Pz} + y \theta'_x - x \theta'_y + s^{\nu+w}_{Pz/z} \\ 
   \varepsilon_{xx} & = s^{\nu+w}_{Px/x} \\
   \varepsilon_{yy} & = s^{\nu+w}_{Py/y} \\
 2 \varepsilon_{zx} & = s'_{Px} - \theta_y - y \theta'_z + s^{\nu+w}_{x/z} + s^{\nu+w}_{z/x} \\
 2 \varepsilon_{zy} & = s'_{Py} + \theta_x + x \theta'_z + s^{\nu+w}_{y/z} + s^{\nu+w}_{z/y} \\
 2 \varepsilon_{xy} & = s^{\nu+w}_{y/z} + s^{\nu+w}_{z/y} \\
\end{aligned}$$

**Stress.** ...todo... usually stiffness matrix is defined providing axial, bending, shear and torsion stiffness, and cross-coupling terms. Here, using a simplified (or modified, so that no contribution of $\varepsilon_{xx}$, $\varepsilon_{yy}$ exists) version of the constitutive law for **elastic isotropic media**,

$$\begin{aligned}
  \sigma_{zz} & = E \varepsilon_{zz} \\
  \tau_{zx}   & = 2 G \varepsilon_{zx} \\
  \tau_{zy}   & = 2 G \varepsilon_{zy} \\
\end{aligned}$$

## Internal actions

$$\begin{aligned}
  \mathbf{F} & = \int_{A} \hat{\mathbf{n}} \cdot \boldsymbol\sigma = \int_{A} \hat{\mathbf{x}} \tau_{zx} + \hat{\mathbf{y}} \tau_{zy} + \hat{\mathbf{z}} \sigma_{zz} \\
  \mathbf{M} & = \int_{A} \mathbf{r} \times ( \hat{\mathbf{n}} \cdot \boldsymbol\sigma ) = \int_{A} \hat{\mathbf{x}} \left( y \sigma_{zz} \right) + \hat{\mathbf{y}} \left( - x \sigma_{zz} \right) + \hat{\mathbf{z}} \left( x \tau_{zy} - y \tau_{zx} \right)  \\
\end{aligned}$$

**Internal actions as function of displacement - elastic isotropic media.** Neglecting warping and strain due to non-zero Poisson ratio,

$$\begin{aligned}
  \mathbf{F} 
  & = \int_{A} \hat{\mathbf{x}} \tau_{zx} + \hat{\mathbf{y}} \tau_{zy} + \hat{\mathbf{z}} \sigma_{zz} = \\
  & = \int_{A} \hat{\mathbf{x}} G ( s'_{Px} - \theta_y - y \theta'_z ) + \hat{\mathbf{y}} G ( s'_{Py} + \theta_x + x \theta'_z) + \hat{\mathbf{z}} E ( s'_{Pz} + y \theta'_x - x \theta'_y) = \\
  & = \hat{\mathbf{x}} \left( \chi_x GA ( s'_{Px} - \theta_y ) - G S_x \theta'_z \right)
    + \hat{\mathbf{y}} \left( \chi_y GA ( s'_{Py} + \theta_x ) + G S_y \theta'_z \right)
    + \hat{\mathbf{z}} \left( EA s'_{Pz} + E S_x \theta'_x - E S_y \theta'_y \right) \ , \\
  \mathbf{M}
  & = \int_{A} \hat{\mathbf{x}} \left( y \sigma_{zz} \right) + \hat{\mathbf{y}} \left( - x \sigma_{zz} \right) + \hat{\mathbf{z}} \left( x \tau_{zy} - y \tau_{zx} \right) = \\
  & = \int_{A} \hat{\mathbf{x}} y E \left( s'_{Pz} + y \theta'_x - x \theta'_y \right) - \hat{\mathbf{y}} x E \left( s'_{Pz} + y \theta'_x - x \theta'_y \right) + \hat{\mathbf{z}} G \left( x ( s'_{Py} + \theta_x + x \theta'_z ) - y ( s'_{Px} - \theta_y - y \theta'_z ) \right) = \\
  & = \hat{\mathbf{x}} \left( E S_x s'_{Pz} + E J_{x}  \theta'_x - E J_{xy} \theta'_y \right)
    + \hat{\mathbf{y}} \left(-E S_y s'_{Pz} - E J_{xy} \theta'_x + E J_{y}  \theta'_y \right)
    + \hat{\mathbf{z}} \left( G S_y ( s'_{Py} + \theta_x ) - G S_x ( s'_{Px} - \theta_y ) + GJ_z \theta'_z ) \right)
\end{aligned}$$

or introducing matrix notation,

$$\begin{bmatrix}
  F_x \\ F_y \\ F_z \\ M_x \\ M_y \\ M_z
\end{bmatrix} & = 
\begin{bmatrix}
 \chi_x^{-1} GA &                &          &          &          & -GS_x  \\ 
                & \chi_y^{-1} GA &          &          &          &  GS_y  \\ 
                &                &  EA      &  ES_x    & -ES_y    &        \\ 
                &                &  ES_x    &  EJ_x    & -EJ_{xy} &        \\ 
                &                & -ES_y    & -EJ_{xy} &  EJ_y    &        \\ 
 -GS_x          & GS_y           &          &          &          & GJ_z      
\end{bmatrix}
\begin{bmatrix}
  s'_{Px} - \theta_y \\
  s'_{Py} + \theta_x \\
  s'_{Pz}            \\
  \theta'_{x}        \\
  \theta'_{y}        \\
  \theta'_{z}          
\end{bmatrix}$$

**Structural decoupling.** $S_i = 0$, $J_{xy} = 0$

$$\begin{aligned}
  \mathbf{F} 
  & = \hat{\mathbf{x}} \chi_x GA ( s'_{Px} - \theta_y )
    + \hat{\mathbf{y}} \chi_y GA ( s'_{Py} + \theta_x ) 
    + \hat{\mathbf{z}} EA s'_{Pz} , \\
  \mathbf{M} 
  & = \hat{\mathbf{x}} E J_{x}  \theta'_x
    + \hat{\mathbf{y}} E J_{y}  \theta'_y
    + \hat{\mathbf{z}} G J_z \theta'_z
\end{aligned}$$


## Balance equations

Balance equations for a beam can be obtained integrating indefinite balance equations for a 3-dimensional solid on the sections $A(z)$ of the beam, with some further assumption on non-rigid contributions to displacement.

**Momentum equation +**

$$\mathbf{\rho}_0 \ddot{\mathbf{s}} = \nabla \cdot \boldsymbol\sigma + \mathbf{f}$$

gives

$$\begin{aligned}
  \mathbf{0} 
& = - \int_{\Delta V} \rho_0 \ddot{\mathbf{s}} + \int_{\Delta V} \nabla \cdot \boldsymbol\sigma + \int_{\Delta V} \rho_0 \mathbf{g} = \\
& = - \Delta z \, \int_{A} \rho_0 \left( \ddot{\mathbf{s}}_P - \mathbf{r}_P \times \ddot{\boldsymbol{\theta}} \right)
    + \int_{A(z)} \hat{\mathbf{n}} \cdot \boldsymbol\sigma + \int_{A(z+\Delta z)} \hat{\mathbf{n}} \cdot \boldsymbol\sigma + \int_{\Delta A_{lat}} \hat{\mathbf{n}} \cdot \boldsymbol\sigma + \Delta z \, \int_{A} \rho_0 \mathbf{g} = \\
& = \Delta z \left[ - m \ddot{\mathbf{s}}_P - \mathbf{S}_{P} \cdot \ddot{\boldsymbol\theta} + \mathbf{F}' + \mathbf{f} \right]
\end{aligned}$$

**Angular momentum equation**

$$\mathbf{r}_P \times \mathbf{\rho}_0 \ddot{\mathbf{s}} = \mathbf{r}_P \times \left( \nabla \cdot \boldsymbol\sigma + \mathbf{f} \right)$$

gives

$$\begin{aligned}
  \mathbf{0} 
& = - \int_{\Delta V} \rho_0 \mathbf{r}_P \times \ddot{\mathbf{s}} + \int_{\Delta V} \mathbf{r}_P \times \nabla \cdot \boldsymbol\sigma + \int_{\Delta V} \rho_0 \mathbf{r}_P \times \mathbf{g} = \\
& = - \Delta z \, \int_{A} \rho_0 \mathbf{r}_P \times \left( \ddot{\mathbf{s}}_P - \mathbf{r}_P \times \ddot{\boldsymbol{\theta}} \right)
    + \dots \\
& = \Delta z \left[ - \mathbf{S}_P^T \cdot \ddot{\mathbf{s}}_P - \mathbf{I}_{P} \cdot \ddot{\boldsymbol\theta} + \mathbf{M}' + \hat{\mathbf{z}} \times \mathbf{F} + \mathbf{m} \right] \ .
\end{aligned}$$

```{dropdown} Contribution of stress to moment

$$\begin{aligned}
  \int_{V} \mathbf{r} \times \nabla \cdot \boldsymbol\sigma 
  & = \hat{\mathbf{e}}_i \int_{V} \varepsilon_{ijk} r_j \sigma_{lk/l} = \\
  & = \hat{\mathbf{e}}_i \int_{V} \varepsilon_{ijk} \left[  \left( r_j \sigma_{lk} \right)_{/l} - r_{j/l} \sigma_{lk} \right] = \\
  & = \hat{\mathbf{e}}_i \int_{\partial V} \varepsilon_{ijk} r_j n_l  \sigma_{lk} - \hat{\mathbf{e}}_i \int_{V} \varepsilon_{ijk} r_{j/l} \sigma_{lk} = \\
  & = \int_{\partial V} \mathbf{r}_P \times ( \hat{\mathbf{n}} \cdot \boldsymbol\sigma ) - \hat{\mathbf{e}}_i \int_{V} \varepsilon_{ijk} \delta^{(2)}_{jl} \sigma_{lk} = \\
\end{aligned}$$

For an elementary beam element $\Delta z$, the first contribution contains internal moments on two sections at $z$ and $z+\Delta z$ and the contribution of the lateral surface, that can be summed with the volume contribution to get load from linear density loads,

$$\int_{\partial \Delta V} \mathbf{r}_P \times ( \hat{\mathbf{n}} \cdot \boldsymbol\sigma ) 
 = \Delta z \, \mathbf{M}'(z) + \Delta z \, \int_{\partial A} \mathbf{r}_P \times ( \hat{\mathbf{n}} \cdot \boldsymbol\sigma )  $$

The second contribution becomes (as $\delta^{(2)}_{xx} = \delta^{(2)}_{yy} = 1$, but $\delta^{(2)}_{zz} = 0$),

$$\begin{aligned}
 - \hat{\mathbf{e}}_i \int_{V} \varepsilon_{ijk} \delta^{(2)}_{jl} \sigma_{lk} 
  & = - \int_{\Delta V} \left\{ \hat{\mathbf{z}} ( \sigma_{xy} - \sigma_{yx} ) + \hat{\mathbf{x}} ( \sigma_{yz} ) + \hat{\mathbf{y}} ( - \sigma_{xz} ) \right\} = \\
  & = \Delta z \left[ - \hat{\mathbf{x}} \, T_y + \hat{\mathbf{y}} \, T_x \right] = \\
  & = \Delta z \, \hat{\mathbf{z}} \times \mathbf{F} \ .
\end{aligned}$$

```

In components, for an inertially decoupled set of Cartesian coordinates,

$$\begin{aligned}
  0 & = - m   \ddot{s}_{Px}   + F'_x       + f_x \\ 
  0 & = - m   \ddot{s}_{Py}   + F'_y       + f_y \\ 
  0 & = - m   \ddot{s}_{Pz}   + F'_z       + f_z \\ 
  0 & = - I_x \ddot{\theta}_x + M'_x - T_y + m_x \\ 
  0 & = - I_y \ddot{\theta}_y + M'_y + T_x + m_y \\ 
  0 & = - I_z \ddot{\theta}_z + M'_z       + m_z \\ 
\end{aligned}$$

Using matrix formalism, momentum and angular momentum equations for an isotropic elastic beam read

$$
\mathbf{0} = - \begin{bmatrix}
 m     &       &       &         &         &-S_y    \\
       & m     &       &         &         & S_x    \\
       &       & m     & S_y     & -S_x    &        \\
       &       & S_y   & I_x     & I_{xy}  & I_{xz} \\
       &       &-S_x   & I_{xy}  & I_y     & I_{yz} \\
-S_y   & S_x   &       & I_{xz}  & I_{yz}  & I_z    \\
\end{bmatrix}
\begin{bmatrix}
  \ddot{s}_{Px} \\ \ddot{s}_{Py} \\ \ddot{s}_{Pz} \\ \ddot\theta_x \\ \ddot\theta_y \\ \ddot\theta_z
\end{bmatrix}
+ \left(
\begin{bmatrix}
 \chi_x^{-1} GA &                &          &          &          & -GS_x  \\ 
                & \chi_y^{-1} GA &          &          &          &  GS_y  \\ 
                &                &  EA      &  ES_x    & -ES_y    &        \\ 
                &                &  ES_x    &  EJ_x    & -EJ_{xy} &        \\ 
                &                & -ES_y    & -EJ_{xy} &  EJ_y    &        \\ 
 -GS_x          & GS_y           &          &          &          & GJ_z      
\end{bmatrix}
\begin{bmatrix}
  s'_{Px} - \theta_y \\
  s'_{Py} + \theta_x \\
  s'_{Pz}            \\
  \theta'_{x}        \\
  \theta'_{y}        \\
  \theta'_{z}          
\end{bmatrix}
\right)'
+ \begin{bmatrix}
 \cdot          & \cdot          & \cdot    & \cdot    & \cdot    & \cdot  \\ 
 \cdot          & \cdot          & \cdot    & \cdot    & \cdot    & \cdot  \\ 
 \cdot          & \cdot          & \cdot    & \cdot    & \cdot    & \cdot  \\ 
 \cdot          &-\chi_y^{-1} GA & \cdot    & \cdot    & \cdot    & -GS_y  \\ 
 \chi_x^{-1} GA & \cdot          & \cdot    & \cdot    & \cdot    & -GS_x  \\ 
 \cdot          & \cdot          & \cdot    & \cdot    & \cdot    & \cdot  \\ 
\end{bmatrix}
\begin{bmatrix}
  s'_{Px} - \theta_y \\
  s'_{Py} + \theta_x \\
  s'_{Pz}            \\
  \theta'_{x}        \\
  \theta'_{y}        \\
  \theta'_{z}          
\end{bmatrix}
+ \begin{bmatrix}
  f_x \\ f_y \\ f_z \\ m_x \\ m_y \\ m_z
\end{bmatrix}
$$

**Structural and inertial simoultaneously decoupled isotropic elastic beam.**

$$\begin{aligned}
  0 & = - m   \ddot{s}_{Px}   + \left( \chi_x^{-1} GA ( s'_{Px} - \theta_y ) \right)'                                         + f_x \\ 
  0 & = - m   \ddot{s}_{Py}   + \left( \chi_y^{-1} GA ( s'_{Py} + \theta_x ) \right)'                                         + f_y \\ 
  0 & = - m   \ddot{s}_{Pz}   + \left( EA s'_{Pz}                            \right)'                                         + f_z \\ 
  0 & = - I_x \ddot{\theta}_x + \left( EJ_x \theta'_x                        \right)' - \chi_y^{-1} GA ( s'_{Py} + \theta_x ) + m_x \\ 
  0 & = - I_y \ddot{\theta}_y + \left( EJ_y \theta'_y                        \right)' + \chi_x^{-1} GA ( s'_{Px} - \theta_y ) + m_y \\ 
  0 & = - I_z \ddot{\theta}_z + \left( GJ_z \theta'_z                        \right)'                                         + m_z \\ 
\end{aligned}$$

