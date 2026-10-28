(solid-mechanics:small-displacements:plates-shells:kirchhoff)=
# Kirchhoff plate

Following the procedure already used for [Timoshenko beam model](solid-mechanics:small-displacements:beams:timoshenko), and then simplified to the Euler-Bernoulli beam model, this section contains:
* [Kinematic assumptions, and the elastic constitutive law](solid-mechanics:small-displacements:plates-shells:kirchhoff:assumptions)
* [Internal actions](solid-mechanics:small-displacements:plates-shells:kirchhoff:internal-actions)
* [Balance equations](solid-mechanics:small-displacements:plates-shells:kirchhoff:balance-equations)

**todo** 
* Show Timoshenko model, and then simplify to Kirchhoff model (analogous to Euler-Bernoulli beam model).
* Discuss drill d.o.f.

(solid-mechanics:small-displacements:plates-shells:kirchhoff:assumptions)=
## Kinematic assumptions

**Displacement.**

$$\begin{aligned}
  \mathbf{s}(x,y,z,t)
  & = \mathbf{s}_P(x,y,t) + \boldsymbol{\theta}(x,y,t) \times \mathbf{r}_P(x,y) = \\ 
  & = \mathbf{s}_P(x,y,t) + \hat{\mathbf{x}} \left( + z \theta_y(x,y) \right) - \hat{\mathbf{y}} \left( z \theta_x(x,y) \right) \ ,
\end{aligned}$$

assuming negligible warping, and without in-plane roation (drilling d.o.f., $\theta_z$).

**Strain.**

$$\begin{aligned}
   \varepsilon_{zz} & = s_{Pz/z} \\
   \varepsilon_{xx} & = s_{Px/x} + z \theta_{y/x} \\
   \varepsilon_{yy} & = s_{Py/y} - z \theta_{x/y} \\
 2 \varepsilon_{zx} & = s_{Pz/x} + \theta_y \\
 2 \varepsilon_{zy} & = s_{Pz/y} - \theta_x \\
 2 \varepsilon_{xy} & = s_{Px/y} + s_{Py/x} + z \theta_{y/y} - z \theta_{x/x} \ .
\end{aligned}$$

Kirchhoff assumptions imply $\theta_x = s_{Pz/y}$, $\theta_y = -s_{Pz/x}$, and thus no "transverse" shear stress $\varepsilon_{zx} = \varepsilon_{zy} = 0$. Negligible volumetric strain in the direction perpendicular to the surface of the plate, $\varepsilon_{zz} = 0$. Under these assumptions, only 3 components of the strain tensor can be different from zero: $\varepsilon_{xx}$, $\varepsilon_{yy}$, $\varepsilon_{xy}$.

**Elastic constitutive law.** **todo** *Discuss plane stress or plane strain*, *Elastic isotropic constutive law, and other linear elastic laws*,...



(solid-mechanics:small-displacements:plates-shells:kirchhoff:internal-actions)=
## Internal actions

Cutting an elementary surface with unit-normal vector pointing outwards, the force acting on it is

$$\mathbf{F}_{\hat{\mathbf{n}}} := \int_{A} \hat{\mathbf{n}} \cdot \boldsymbol{\sigma} \ , $$

so that

$$\begin{aligned}
  \mathbf{F}_{\hat{\mathbf{x}}} & = \int_{A_x} \hat{\mathbf{x}} \cdot \boldsymbol{\sigma} = \int_{A_x} \left\{ \hat{\mathbf{x}} \sigma_{xx} + \hat{\mathbf{y}} \sigma_{xy} + \hat{\mathbf{z}} \sigma_{xz} \right\} \\
  \mathbf{F}_{\hat{\mathbf{y}}} & = \int_{A_x} \hat{\mathbf{x}} \cdot \boldsymbol{\sigma} = \int_{A_y} \left\{ \hat{\mathbf{x}} \sigma_{yx} + \hat{\mathbf{y}} \sigma_{yy} + \hat{\mathbf{z}} \sigma_{yz} \right\} \\
\end{aligned}$$

The internal moment, with $\mathbf{r} = z \hat{\mathbf{z}}$ reads

$$\begin{aligned}
  \mathbf{M}_{\hat{\mathbf{n}}} & := \int_{A} \mathbf{r} \times ( \hat{\mathbf{n}} \cdot \boldsymbol\sigma ) \\
\end{aligned}$$

so that

$$\begin{aligned}
  \mathbf{M}_{\hat{\mathbf{x}}} & := \int_{A_x} \mathbf{r} \times ( \hat{\mathbf{x}} \cdot \boldsymbol\sigma ) = \int_{A_x} \hat{\mathbf{x}} \left( -z \sigma_{xy} \right) + \hat{\mathbf{y}} \left( z \sigma_{xx} \right) \\
  \mathbf{M}_{\hat{\mathbf{y}}} & := \int_{A_y} \mathbf{r} \times ( \hat{\mathbf{y}} \cdot \boldsymbol\sigma ) = \int_{A_y} \hat{\mathbf{x}} \left( -z \sigma_{yy} \right) + \hat{\mathbf{y}} \left( z \sigma_{yx} \right) \\
\end{aligned}$$

**Remark** $M_{xx} = - M_{yy}$.

(solid-mechanics:small-displacements:plates-shells:kirchhoff:balance-equations)=
## Balance equations

Balance equations for a beam can be obtained integrating indefinite balance equations for a 3-dimensional solid on the sections $A(z)$ of the beam, with some further assumption on non-rigid contributions to displacement.

**Momentum equation.** Using a "Cartesian" elementary volume with sides $\Delta x$, $\Delta y$, $h$

$$\mathbf{\rho}_0 \ddot{\mathbf{s}} = \nabla \cdot \boldsymbol\sigma + \mathbf{f}$$

gives

$$\begin{aligned}
 0 
 & = - m \ddot{\mathbf{s}}_P - \mathbf{S}_{P} \cdot \ddot{\boldsymbol\theta} + \mathbf{F}_{x/x} + \mathbf{F}_{y/y} + \mathbf{f} = \\
 & = - m \ddot{\mathbf{s}}_P - \mathbf{S}_{P} \cdot \ddot{\boldsymbol\theta} + \nabla_{(2)} \cdot \mathbb{F} + \mathbf{f} \ .
\end{aligned}$$

```{dropdown} Details

$$\begin{aligned}
  \mathbf{0} 
& = - \int_{\Delta V} \rho_0 \ddot{\mathbf{s}} + \int_{\Delta V} \nabla \cdot \boldsymbol\sigma + \int_{\Delta V} \rho_0 \mathbf{g} = \\
& = - \Delta x \Delta y \, \int_{h} \rho_0 \left( \ddot{\mathbf{s}}_P - \mathbf{r}_P \times \ddot{\boldsymbol{\theta}} \right) + \\
  & \quad + \int_{A_x(x)} \hat{\mathbf{n}} \cdot \boldsymbol\sigma + \int_{A_x(x+\Delta x)} \hat{\mathbf{n}} \cdot \boldsymbol\sigma  + \\
  & \quad + \int_{A_y(y)} \hat{\mathbf{n}} \cdot \boldsymbol\sigma + \int_{A_y(y+\Delta y)} \hat{\mathbf{n}} \cdot \boldsymbol\sigma  + \\
  & \quad + \int_{\Delta A_{lat,sup}} \hat{\mathbf{n}} \cdot \boldsymbol\sigma + \int_{\Delta A_{lat,inf}} \hat{\mathbf{n}} \cdot \boldsymbol\sigma +  \\
  & \quad + \Delta A \, \int_{h} \rho_0 \mathbf{g} = \\
& = - \Delta x \Delta y \, \int_{h} \rho_0 \left( \ddot{\mathbf{s}}_P - \mathbf{r}_P \times \ddot{\boldsymbol{\theta}} \right) + \\
  & \quad + \Delta x \, \partial_x \int_{A_x(x)} \hat{\mathbf{x}} \cdot \boldsymbol\sigma  + \\
  & \quad + \Delta y \, \partial_y \int_{A_y(y)} \hat{\mathbf{y}} \cdot \boldsymbol\sigma  + \\
  & \quad + \int_{\Delta A_{lat,sup-inf}} \mathbf{f}^{lat} 
          + \Delta A \, \int_{h} \rho_0 \mathbf{g} = \\
& = \Delta A \left[ - m \ddot{\mathbf{s}}_P - \mathbf{S}_{P} \cdot \ddot{\boldsymbol\theta} + \mathbf{F}_{x/x} + \mathbf{F}_{y/y} + \mathbf{f} \right]
\end{aligned}$$

```

**Angular momentum equation.**

$$\mathbf{r}_P \times \mathbf{\rho}_0 \ddot{\mathbf{s}} = \mathbf{r}_P \times \left( \nabla \cdot \boldsymbol\sigma + \mathbf{f} \right)$$

gives

$$\begin{aligned}
  0
  & = - \mathbf{S}_P^T \cdot \ddot{\mathbf{s}}_P - \mathbf{I}_{P} \cdot \ddot{\boldsymbol\theta} + \mathbf{M}_{x/x} + \mathbf{M}_{y/y} - \hat{\mathbf{z}} \times \mathbf{F} + \mathbf{m} = \\
  & = - \mathbf{S}_P^T \cdot \ddot{\mathbf{s}}_P - \mathbf{I}_{P} \cdot \ddot{\boldsymbol\theta} + \nabla_{(2)} \cdot \mathbb{M} - \hat{\mathbf{z}} \times \left( \mathbb{F} \cdot \hat{\mathbf{z}} \right) + \mathbf{m}  \ .
\end{aligned}$$

```{dropdown} Details

$$\begin{aligned}
  \mathbf{0} 
& = - \int_{\Delta V} \rho_0 \mathbf{r}_P \times \ddot{\mathbf{s}} + \int_{\Delta V} \mathbf{r}_P \times \nabla \cdot \boldsymbol\sigma + \int_{\Delta V} \rho_0 \mathbf{r}_P \times \mathbf{g} = \\
& = - \Delta A \, \int_{h} \rho_0 \mathbf{r}_P \times \left( \ddot{\mathbf{s}}_P - \mathbf{r}_P \times \ddot{\boldsymbol{\theta}} \right)
    + \dots \\
& = \Delta A \left[ - \mathbf{S}_P^T \cdot \ddot{\mathbf{s}}_P - \mathbf{I}_{P} \cdot \ddot{\boldsymbol\theta} + \mathbf{M}_{x/x} + \mathbf{M}_{y/y} + \mathbf{m}^{lat} + \mathbf{m}_V \right] \ .
\end{aligned}$$

```

```{dropdown} Contribution of stress to moment

With $\mathbf{r} = z \hat{\mathbf{z}}$, i.e. $\mathbf{r} = z \, \delta_{i3} \, \hat{\mathbf{e}}_i = r_3 \, \delta_{i3} \, \hat{\mathbf{e}}_i $,

$$\begin{aligned}
  \int_{V} \mathbf{r} \times \nabla \cdot \boldsymbol\sigma 
  & = \hat{\mathbf{e}}_i \int_{V} \varepsilon_{ijk} r_j \sigma_{lk/l} = \\
  & = \hat{\mathbf{e}}_i \int_{V} \varepsilon_{ijk} \left[  \left( r_j \sigma_{lk} \right)_{/l} - r_{j/l} \sigma_{lk} \right] = \\
  & = \hat{\mathbf{e}}_i \int_{\partial V} \varepsilon_{ijk} r_j n_l  \sigma_{lk} - \hat{\mathbf{e}}_i \int_{V} \varepsilon_{ijk} r_{j/l} \sigma_{lk} = \\
  & = \hat{\mathbf{e}}_i \int_{\partial V} \varepsilon_{ijk} r_j n_l  \sigma_{lk} - \hat{\mathbf{e}}_i \int_{V} \varepsilon_{ijk} \left( r_3 \delta_{j3} \right)_{/l} \sigma_{lk} = \\
  & = \hat{\mathbf{e}}_i \int_{\partial V} \varepsilon_{ijk} r_j n_l  \sigma_{lk} - \hat{\mathbf{e}}_i \int_{V} \varepsilon_{ijk} \delta_{l3} \delta_{j3} \sigma_{lk} = \\
  & = \hat{\mathbf{e}}_i \int_{\partial V} \varepsilon_{ijk} r_j n_l  \sigma_{lk} - \hat{\mathbf{e}}_i \int_{V} \varepsilon_{i3k} \sigma_{3k} = \\
  & = \int_{\partial V} \mathbf{r}_P \times ( \hat{\mathbf{n}} \cdot \boldsymbol\sigma ) - \hat{\mathbf{x}} \int_{V} \varepsilon_{132} \sigma_{32} - \hat{\mathbf{y}} \int_{V} \varepsilon_{231} \sigma_{31} = \\
  & = \int_{\partial V} \mathbf{r}_P \times ( \hat{\mathbf{n}} \cdot \boldsymbol\sigma ) + \hat{\mathbf{x}} \int_{V} \sigma_{32} - \hat{\mathbf{y}} \int_{V}  \sigma_{31} = \\
  & = \int_{\partial V} \mathbf{r}_P \times ( \hat{\mathbf{n}} \cdot \boldsymbol\sigma ) + \hat{\mathbf{x}} F_{zy} - \hat{\mathbf{y}} F_{zx} = \\
  & = \int_{\partial V} \mathbf{r}_P \times ( \hat{\mathbf{n}} \cdot \boldsymbol\sigma ) - \hat{\mathbf{z}} \times \mathbf{F}_z \ .
\end{aligned}$$

For an elementary plate element $\Delta A$, the first contribution contains internal moments on 4 surfaces cutting the plate and the contribution of the pair of lateral surfaces, that can be summed with the volume contribution to get load from linear density loads,

$$\int_{\partial \Delta V} \mathbf{r}_P \times ( \hat{\mathbf{n}} \cdot \boldsymbol\sigma ) 
 = \Delta y \, \Delta x \, \mathbf{M}_{x/x} + \Delta x \, \Delta y \, \mathbf{M}_{y/y} + \int_{A_{lat,sup}} \mathbf{r}_P \times ( \hat{\mathbf{n}} \cdot \boldsymbol\sigma )  + \int_{A_{lat,inf}} \mathbf{r}_P \times ( \hat{\mathbf{n}} \cdot \boldsymbol\sigma )  $$

The contribution of the lateral surfaces becom

$$\begin{aligned}
 & \int_{A_{lat,sup}} z^{sup} \hat{\mathbf{z}} \times \mathbf{f}^{sup} + \int_{A_{lat,inf}} z^{inf} \hat{\mathbf{z}} \times \mathbf{f}^{inf} = \\
 & \quad = \Delta x \, \Delta y \, \mathbf{m}^{lat} \ ,
\end{aligned}$$

with  the definition $\mathbf{m}^{lat} := z^{sup} \mathbf{f}^{sup} + z^{inf} \mathbf{f}^{inf}$. As an example, if the reference surface is the mid-surface, then $z_{sup} = - z_{inf} = \tfrac{h}{2}$, and $\mathbf{m}^{lat} = \tfrac{h}{2} \hat{\mathbf{z}} \times \left( \mathbf{f}^{sup} - \mathbf{f}^{inf} \right)$.

```

For an inertially decoupled element, using Cartesian coordinates

$$\begin{aligned}
  0 & = - m   \ddot{s}_{Px}   + F_{xx/x} + F_{yx/y}              + f_x \\ 
  0 & = - m   \ddot{s}_{Py}   + F_{xy/x} + F_{yy/y}              + f_y \\ 
  0 & = - m   \ddot{s}_{Pz}   + F_{xz/x} + F_{yz/y}              + f_z \\ 
  0 & = - I_x \ddot{\theta}_x + M_{xx/x} + M_{yx/y} + F_{zx}     + m_x \\ 
  0 & = - I_y \ddot{\theta}_y + M_{xy/x} + M_{yy/y} - F_{zy}     + m_y \\ 
  0 & = - I_z \ddot{\theta}_z + M_{xz/z} + M_{yz/y}              + m_z \\ 
\end{aligned}$$


## Statics of linear isotropic Kirchhoff plate - pure bending

**todo**

* Add details of the simplifications of the equations
* Add details about the constitutive law: linear isotropic elastic medium, plane stress or strain assumption,...
* ...

```{dropdown} Details of the simplified equations

$$\begin{aligned}
  0 & = F_{xx/x} + F_{yx/y}                    \\ 
  0 & = F_{xy/x} + F_{yy/y}                    \\ 
  0 & = F_{xz/x} + F_{yz/y}              + f_z \\ 
  0 & = M_{xx/x} + M_{yx/y} + F_{zx}           \\ 
  0 & = M_{xy/x} + M_{yy/y} - F_{zy}           \\ 
  0 & = M_{xz/z} + M_{yz/y}                    \\ 
\end{aligned}$$

```

The vertical equilibrium becomes

$$\begin{aligned}
  0
  & = f_z + F_{yz/y} + F_{xz/x} = \\
  & = f_z - \left( M_{xx/x} + M_{yx/y} \right)_{/y} + \left( M_{xy/x} + M_{yy/y} \right)_{/x} \ ,
\end{aligned}$$

Let the constitutive law be

$$\begin{bmatrix} \sigma_{xx} \\ \sigma_{yy} \\ \sigma_{xy} \end{bmatrix} = d \begin{bmatrix} 1 & m  & 0 \\ m  & 1 & 0 \\ 0 & 0 & 1-m \end{bmatrix} \begin{bmatrix} \varepsilon_{xx} \\ \varepsilon_{yy} \\ \varepsilon_{xy} \end{bmatrix} \ .$$

$$\begin{aligned}
   \varepsilon_{xx} & = s_{Px/x} + z \theta_{y/x}                             && = \dots = - z w_{/xx}  \\
   \varepsilon_{yy} & = s_{Py/y} - z \theta_{x/y}                             && = \dots = - z w_{/yy}  \\
 2 \varepsilon_{xy} & = s_{Px/y} + s_{Py/x} + z \theta_{y/y} - z \theta_{x/x} && = \dots = - z ( w_{/xy} + w_{/yx}) = - z \, 2 w_{/xy} \ .
\end{aligned}$$

$$\begin{aligned}
  M_{xx}
  & = - \int_{h} z \sigma_{xy} = D \, ( 1 - m ) w_{/xy}  \\
\end{aligned}$$

$$\begin{aligned}
  M_{xy}
  & =   \int_{h} z \sigma_{xx} = - D \, ( w_{/xx} + m \, w_{/yy} )  \\
\end{aligned}$$

$$\begin{aligned}
  M_{yy}
  & = \int_{h} z \sigma_{xy} = - D \, ( 1 - m ) w_{/xy}  \\
\end{aligned}$$

$$\begin{aligned}
  M_{yx}
  & = - \int_{h} z \sigma_{yy} = D \, ( w_{/yy} + m \, w_{/xx} )  \\
\end{aligned}$$

The equation becomes

$$\begin{aligned}
  f_z 
  & =           M_{xx/xy} + M_{yx/yy} - M_{xy/xx} - M_{yy/yx}          = \\
  & = D \left\{ (1-m) w_{/xxyy} + w_{/yyyy} + m w_{/xxyy} + w_{/xxxx} + m w_{/xxyy} + ( 1 - m ) w_{/xxyy} \right\} = \\
  & = D \left\{  w_{/xxxx} + 2 w_{/xxyy} + w_{/yyyy} \right\} = \\
\end{aligned}$$

i.e.

$$D \Delta^2 w = f_z \ .$$

