(solid-mechanics:small-displacements:plates-shells:kirchhoff)=
# Kirchhoff plate

<div style="color:red">Is this the right name?</div>

* ...
* [Pure bending]()
  * [Analytical solution for rectangular plates]()
  * [Detailed discussion of the meaning of the derivatives of the displacement field]()

(solid-mechanics:small-displacements:plates-shells:kirchhoff:pure-bending)=
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
  0 & = M_{xx/x} + M_{yx/y} + F_{yz}           \\ 
  0 & = M_{xy/x} + M_{yy/y} - F_{xz}           \\ 
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

### Analytical solution of a rectangular plate

Using Cartesian coordinates $(x,y)$, the domain of a rectangular plate reads $(x,y) = [0,L_x] \times [0,L_y]$.

#### Hinged boundary

**BOundary conditions.** On the sides with $x = 0$, $x = L_x$, with free rotation around the side (zero component of the moment, as there's no net reaction moment)

$$w(x_b, y  ) = 0 \quad , \quad M_{xy}(x_b,y  ) = 0 \ .$$

On the sides with $y = 0$, $y = L_y$, with free rotation around the side (zero component of the moment, as there's no net reaction moment)

$$w(x  , y_b) = 0 \quad , \quad M_{yx}(x  ,y_b) = 0 \ .$$

**Base functions.** The solution can be found as a linear combination of the base functions satisfying the homogeneous essential boundary conditions, 

$$\phi_{n_x n_y}(x,y) = \sin\left( n_x \frac{\pi x}{L_x} \right) \, \sin\left( n_y \frac{\pi y}{L_y} \right) \ ,$$

i.e. as

$$w(x,y) = \sum_{n_x, n_y \in \mathbb{N}} a_{n_x, n_y} \phi_{x_n, n_y}(x,y) \ .$$

**Remark.** This choice of base functions satisfies the essential boundary conditions about displacement, and identically satisfies also the natural boundary condition about moment, by setting equal to zero both individual contributions $w_{/xx}$, $w_{/yy}$ appearing in $M_{xy} = - D(w_{/xx} + m w_{/yy})$, and $M_{yx} =   D(w_{/yy} + m w_{/xx})$. 

<div style="color:red"> Is this ok? Is this choice forcing extra constraints? </div>


**Double Laplacian.** The double Laplacian of the base function $\phi_{n_x n_y}(x,y)$ reads

$$\begin{aligned}
  \Delta^2 \phi_{n_x n_y}(x,y) 
  & = \phi_{n_x n_y/xxxx} + 2  \phi_{n_x n_y/xxyy} +  \phi_{n_x n_y/yyyy} = \\
  & = \left\{ \left( \frac{\pi n_x}{L_x} \right)^4 + 2 \left( \frac{\pi n_x}{L_x} \right)^2 \left( \frac{\pi n_y}{L_y} \right)^2 + \left( \frac{\pi n_y}{L_y} \right)^4 \right\} \phi_{n_x n_y}(x,y) \ .
\end{aligned}$$


**Series exapnsion of external distributed load, $f$, and solution by coefficient matching.** Let the Fourier expansion of the load $f(x,y)$ be

$$f(x,y) = \sum_{n_x,n_y \in \mathbb{N}} f_{n_x, n_y} \sin\left( \frac{n_x \pi x}{L_x} \right) \, \sin\left( \frac{n_y \pi y}{L_y} \right) = \sum_{n_x,n_y \in \mathbb{N}} f_{n_x, n_y} \phi_{n_x n_y}(x,y) \ ,$$ 

with

$$f_{n_x n_y} = \frac{4}{L_x L_y} \int_{x=0}^{L_x} \int_{y=0}^{L_y} f(x,y) \sin\left( \frac{n_x \pi x}{L_x} \right) \, \sin\left( \frac{n_y \pi y}{L_y} \right) \,dx \, dy $$ (eq:plates:kirchhoff:analytic:rectangular:load-fourier-coeff)

Then the solution of the problem is obtained by coefficient matching as

$$a_{n_x n_y} = \frac{1}{ \pi^4 D \left[ \left(\frac{1}{L_x}\right)^2 +  \left(\frac{1}{L_y}\right)^2 \right]^2} f_{n_x n_y} \ .$$

* "Harmonic" load: let the load be $f(x,y) = f_{11} \sin\left( \tfrac{\pi x}{L_x} \right) \sin \left( \tfrac{\pi y}{L_y} \right)$, then the solution can be represented by one base function only, i.e. $\phi_{11}(x,y)$, while the coefficient of the linear expansion of any other base function is zero by coefficient matching. The coefficent $a_{11}$ reads

   $$f_{11} = D \pi^4 \left\{ \left(\frac{1}{L_x}\right)^2 + \left(\frac{1}{L_y}\right)^2 \right\}^2 \, a_{11} \ ,$$

   i.e.

   $$w(x,y) = \frac{f_{11}}{D \pi^4} \left[ \left(\frac{1}{L_x}\right)^2 + \left(\frac{1}{L_y}\right)^2 \right]^{-1} \sin\left( \frac{n_x \pi x}{L_x} \right) \, \sin\left( \frac{n_y \pi y}{L_y} \right) \ .$$

* Uniform load, $f(x,y) = f$: only contributions with odd indices survive in the integrals {eq}`eq:plates:kirchhoff:analytic:rectangular:load-fourier-coeff`, as

   $$\begin{aligned}
     \frac{f_{n_x n_y}}{f}
     & = \frac{4}{L_x L_y} \int_{x=0}^{L_x} \int_{y=0}^{L_y} \sin\left( \frac{n_x \pi x}{L_x} \right) \, \sin\left( \frac{n_y \pi y}{L_y} \right) \,dx \, dy = \\
     & = \frac{4}{L_x L_y} \frac{L_x}{n_x \pi} \frac{L_y}{n_y \pi} \left.\cos\left( \frac{n_x \pi x}{L_x} \right)\right|_{0}^{L_x} \left.\cos\left( \frac{n_y \pi y}{L_y} \right)\right|_{0}^{L_y} = \\
     & = \left\{ \begin{aligned}
     n_k = 2 m_k + 1: & \quad \frac{16}{\pi^2 (2m_x+1)(2m_y+1)} \\
     n_k = 2 m_k    : & \quad 0 \\
     \end{aligned} \right.
   \end{aligned}$$


#### Clamped boundary

...

<!--
**Boundary conditions.** On the sides with $x = 0$, $x = L_x$, 

$$w(x_b, y  ) = 0 \quad , \quad w_{/x}(x_b,y  ) = 0 \ .$$

On the sides with $y = 0$, $y = L_y$,

$$w(x  , y_b) = 0 \quad , \quad w_{/y}(x  ,y_b) = 0 \ .$$

**Base functions.** The solution can be found as a linear combination of the base functions satisfying the homogeneous essential boundary conditions, 

$$\phi_{n_x n_y}(x,y) = \left[ 1 - \cos\left( n_x \frac{\pi x}{L_x} \right) \right] \left[ 1 - \cos\left( n_y \frac{\pi y}{L_y} \right) \right] \ ,$$

i.e. as

$$w(x,y) = \sum_{n_x, n_y \in \mathbb{N}} a_{n_x, n_y} \phi_{x_n, n_y}(x,y) \ .$$

**Double Laplacian.** The double Laplacian of the base function $\phi_{n_x n_y}(x,y)$ reads

$$\begin{aligned}
  \Delta^2 \phi_{n_x n_y}(x,y) 
  & = \phi_{n_x n_y/xxxx} + 2  \phi_{n_x n_y/xxyy} +  \phi_{n_x n_y/yyyy} = \\
  & = \left\{ - \left( \frac{\pi n_x}{L_x} \right)^4 c_{n_x}(x) [ 1 - c_{n_y}(y) ] + 2 \left( \frac{\pi n_x}{L_x} \right)^2 \left( \frac{\pi n_y}{L_y} \right)^2 c_{n_x}(x) c_{n_y}(y) - \left( \frac{\pi n_y}{L_y} \right)^4 [ 1 - c_{n_x}(x) ] c_{n_y}(y) \right\}
\end{aligned}$$

**Series exapnsion of external distributed load, $f$, and solution by coefficient matching.**

* Uniform 
* ...
-->

### Discussion of the meaning of the space derivatives of the displacement field

```{dropdown} Detailed discussion of the meaning of the space derivatives of the displacement field $\ w(x,y)$.
:open:

Using here 2-dimensional nabla differential operator

$$\begin{aligned}
  f_z 
  & = D \Delta^2 w = \\
  & = D \Delta \, \Delta w = \\
  & = D ( \nabla \cdot \nabla ) ( \nabla \cdot \nabla ) w \ ,
\end{aligned}$$

**Gradient of the out-of-plane displacement field.** It's immediately related to the field of infinitiesimal rotations,

$$\nabla w(x,y) = \hat{\mathbf{x}} w_{/x} + \hat{\mathbf{y}} w_{/y} = - \hat{\mathbf{x}} \theta_{y} + \hat{\mathbf{y}} \theta_{x} = \hat{\mathbf{z}} \times \boldsymbol\theta(x,y) \ .$$

with $\boldsymbol\theta = ( \theta_x, \theta_y, 0)$. Exploiting the vector identity $\mathbf{a} \times ( \mathbf{b} \times \mathbf{c} ) = ( \mathbf{a} \cdot \mathbf{c} ) \mathbf{b} - ( \mathbf{a} \cdot \mathbf{b}) \mathbf{c}$, and the orthogonality between $\hat{\mathbf{z}}$ and $\boldsymbol\theta$, $\hat{\mathbf{z}} \cdot \boldsymbol\theta = 0$, then

$$\boldsymbol\theta = - \hat{\mathbf{z}} \times \nabla w \ .$$



Since $w_{/xy} = w_{/yx}$, then $-\theta_{y/y} = \theta_{x/x}$, i.e. the field of the infinitesimal rotation is solenoidal, 

$$\nabla \cdot \boldsymbol\theta = 0 \ .$$

<!--
Exploiting the properties of Dirac delta, after multiplying the relation $w_{/i} = \varepsilon_{ijk} \delta_{j3} \theta_k$ by $\varepsilon_{abi}$, it follows

$$\begin{aligned}
 \varepsilon_{abi} w_{/i} 
 & = \varepsilon_{abi}  \varepsilon_{ijk} \delta_{j3} \theta_k = \\
 & = \left( \delta_{aj} \delta_{bk} - \delta_{ak} \delta_{bj} \right) \delta_{j3} \theta_k = \\
 & = \delta_{a3} \theta_b - \delta_{b3} \theta_a \ , 
\end{aligned}$$
-->

**Divergence of the gradient of $w(x,y)$.**

$$\Delta w = \nabla \cdot \nabla w = w_{/xx} + w_{/yy} = - \theta_{y/x} + \theta_{x/y} = - \hat{\mathbf{z}} \cdot \nabla \times \boldsymbol \theta \ .$$

**Gradient of the divergence of the gradient of $w(x,y)$.**

$$\begin{aligned}
  \nabla \Delta w
  & = \nabla \nabla \cdot \nabla w  = \\
  & = \hat{\mathbf{x}} \left( w_{/xxx} + w_{/yyx} \right) + \hat{\mathbf{y}} \left( w_{/xxy} + w_{/yyy} \right) = \\
  & = \hat{\mathbf{x}} \left( - \theta_{y/xx} + \theta_{x/yx} \right) + \hat{\mathbf{y}} \left( - \theta_{y/xy} + \theta_{x/yy}  \right) = \\
  & = \hat{\mathbf{x}} \left( - \theta_{y/xx} - \theta_{y/yy} \right) + \hat{\mathbf{y}} \left(   \theta_{x/xx} + \theta_{x/yy}  \right) = \\
  & = \hat{\mathbf{x}} \left( - \Delta \theta_y \right) + \hat{\mathbf{y}} \left( \Delta \theta_x \right) = \\
  & = \hat{\mathbf{z}} \times \Delta \boldsymbol\theta
\end{aligned}$$

and the inverse relation, exploiting orthogonality of $\hat{\mathbf{z}}$ and $\Delta \boldsymbol\theta$,

$$\Delta \boldsymbol\theta = - \hat{\mathbf{z}} \times \nabla \Delta w \ .$$

Comparing with $\Delta \boldsymbol\theta = D^{-1} \hat{\mathbf{z}} \times \mathbf{F}_z$, it immediately follows that

$$\mathbf{F}_z = - D \nabla \Delta w \ ,$$

compatible with the two expressions of the equilibrium equation, $f_z = D \nabla \cdot \nabla \Delta w$, or $f_z = - \nabla \cdot \mathbf{F}$.

---

$$\left\{ \begin{aligned}
  M_{xx} & = D( 1 - m ) w_{/xy} \\
  M_{xy} & = - D( w_{/xx} + m w_{/yy} ) \\
  M_{yx} & =   D( w_{/yy} + m w_{/xx} ) \\
  M_{yy} & = - D( 1 - m ) w_{/xy} \\
\end{aligned} \right.$$

$$\begin{aligned}
  \begin{bmatrix} M_{xx} & M_{yx} \\ M_{xy} & M_{yy} \end{bmatrix}
  & = D \begin{bmatrix} w_{/xy} & w_{/yy} \\ - w_{/xx} & - w_{/xy} \end{bmatrix} + m D \begin{bmatrix} -w_{/xy} & w_{/xx} \\ -w_{/yy} & w_{/xy} \end{bmatrix} = \\
  & = D \begin{bmatrix} \theta_{x/x} & \theta_{x/y} \\ \theta_{y/x}  & \theta_{y/y} \end{bmatrix} + m D \begin{bmatrix} -\theta_{x/x} &  -\theta_{y/x} \\ -\theta_{x/y}& -\theta_{y/y} \end{bmatrix} \ .
\end{aligned}$$

$$\mathbb{M} = D \nabla \boldsymbol\theta - m D \nabla^T \boldsymbol\theta \ .$$

<!--
or

$$\begin{aligned}
  \mathbb{M} 
  & = \frac{1}{2} D \left(  \nabla \boldsymbol\theta + \nabla^T \boldsymbol\theta \right) + \frac{1}{2} D \left(  \nabla \boldsymbol\theta - \nabla^T \boldsymbol\theta \right) - \frac{1}{2} m D \left( \nabla^T \boldsymbol\theta + \nabla \boldsymbol\theta \right) - \frac{1}{2} m D  \left( \nabla^T \boldsymbol\theta - \nabla \boldsymbol\theta \right) \ .
\end{aligned}$$
-->

The Laplacian of the displacement field $\Delta w$ reads

$$\Delta w = w_{/xx} + w_{/yy} = \frac{M_{yx} - M_{xy}}{(1-m) D}$$

<!--
---

$$\begin{bmatrix} 1 & 1 \end{bmatrix} \begin{bmatrix} M_{xx} & M_{yx} \\ M_{xy} & M_{yy} \end{bmatrix} \begin{bmatrix} -1 \\ 1 \end{bmatrix} = \begin{bmatrix} 1 & 1 \end{bmatrix} \begin{bmatrix} - M_{xx} + M_{yx} \\ - M_{xy} + M_{yy} \end{bmatrix} = - M_{xx} + M_{yx} - M_{xy} + M_{yy} \ .$$
-->

---

The divergence of $\mathbb{M}$ reads

$$\nabla \cdot \mathbb{M} = \partial_{i} M_{ij} = \partial_{i} \left( D \theta_{j/i} - m D \theta_{i/j} \right) = D \theta_{j/ii} - m D \theta_{i/ij} =  D \theta_{j/ii} = D \Delta \boldsymbol{\theta} \ . $$

having exploited the relation $\nabla \cdot \boldsymbol\theta = 0$ to set $\theta_{i/ij} = 0$.

---

$$
\begin{bmatrix} \theta_{x/x} & \theta_{x/y} \\ \theta_{y/x} & \theta_{y/y} \end{bmatrix} = \begin{bmatrix} w_{/xy} & w_{/yy} \\ - w_{/xx} & - w_{/xy} \end{bmatrix} =   \begin{bmatrix} \cdot &  1 \\ - 1 & \cdot \end{bmatrix} \begin{bmatrix} w_{/xx} & w_{/xy} \\ w_{/yx} & w_{ /yy} \end{bmatrix}
$$

$$
\begin{bmatrix} \theta_{x/x} & \theta_{x/y} \\ \theta_{y/x} & \theta_{y/y} \end{bmatrix}^T = \begin{bmatrix} w_{/xy} & w_{/yy} \\ - w_{/xx} & - w_{/xy} \end{bmatrix}^T =   \begin{bmatrix} w_{/xx} & w_{/xy} \\ w_{/yx} & w_{ /yy} \end{bmatrix}^T \begin{bmatrix} \cdot & -1 \\ 1 & \cdot \end{bmatrix}
$$

---

Angular momentum equilibrium equation reads

$$\begin{aligned}
 \mathbf{0}
 & = \nabla_{(2)} \cdot \mathbb{M} - \hat{\mathbf{z}}\times \left( \mathbb{F} \cdot \hat{\mathbf{z}} \right) = \\
 & = \nabla_{(2)} \cdot \mathbb{M} - \hat{\mathbf{z}}\times \mathbf{F}_z \ ,
\end{aligned}$$

or

$$\mathbf{0} = \begin{bmatrix} F_{yz} \\ -F_{xz} \end{bmatrix} + \begin{bmatrix} M_{xx/x} + M_{yx/y} \\ M_{xy/x} + M_{yy/y} \end{bmatrix} $$

$$\begin{bmatrix} F_{xz} \\ F_{yz} \end{bmatrix} = \begin{bmatrix}  M_{xy/x} + M_{yy/y} \\ - M_{xx/x} - M_{yx/y} \end{bmatrix} = \begin{bmatrix} \cdot & 1 \\ -1 & \cdot \end{bmatrix} \nabla \cdot \mathbb{M} =  D \begin{bmatrix} \cdot &  1 \\ -1 & \cdot \end{bmatrix} \Delta \boldsymbol{\theta} \ ,$$

and thus,

$$\Delta \boldsymbol{\theta} = D^{-1} \begin{bmatrix} \cdot & -1  \\ 1 & \cdot \end{bmatrix} \mathbf{F}_z = D^{-1} \hat{\mathbf{z}} \times \mathbf{F}_z \ .$$

Recalling the relation $\theta_x = w_{/y}$, $\theta_y = - w_{/x}$, then

$$\mathbf{F}_z = D \begin{bmatrix} \cdot & 1 \\ -1 & \cdot \end{bmatrix} \begin{bmatrix} \Delta w_{/y} \\ - \Delta w_{/x} \end{bmatrix} = - D \begin{bmatrix} \Delta w_{/x} \\ \Delta w_{/y} \end{bmatrix} = - D \nabla \Delta w \ .$$

Comparing with $\nabla \nabla \cdot \nabla w = \hat{\mathbf{z}} \times \Delta \boldsymbol\theta$,

$$\begin{aligned}
  f_z
  & = - \nabla \cdot \mathbf{F}_z = \\
  & = - \nabla \cdot \left( D \, \begin{bmatrix} \cdot & -1 \\ 1 & \cdot \end{bmatrix} \Delta \boldsymbol{\theta} \right) = \\
  & = - D \Delta^2 w \ .
\end{aligned}$$



<!--
---

$$\nabla \cdot \mathbb{M} = \nabla \cdot \left(  \right)$$

---

$$\begin{aligned}
 - f_z 
 & = \nabla \cdot \mathbf{F}_z = \\
 & = \nabla \cdot \left( \begin{bmatrix} -1 & \cdot \\ \cdot & 1 \end{bmatrix} \nabla \cdot \mathbb{M} \right)
\end{aligned}$$

---

$$\left\{\begin{aligned}
  & \nabla_{(2)} \cdot \mathbb{F} + \mathbf{f} = \mathbf{0} \\
  & \nabla_{(2)} \cdot \mathbb{M} + \hat{\mathbf{z}} \times \left( \mathbb{F} \cdot \hat{\mathbf{z}} \right) =  \mathbf{0} \\
\end{aligned} \right.$$

-->

```

