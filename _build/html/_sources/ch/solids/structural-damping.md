(solid-mechanics:intro:small-displacements:damping)=
# Structural damping

As a first approximation, a large number of structures can be treated as undamped structures that, if constrained so that there's no rigid motion allowed, can be represented by the second order system

$$\mathbf{M} \ddot{\mathbf{x}} + \mathbf{K} \mathbf{x} = \mathbf{f} \ ,$$

being mass and stiffness matrices $\mathbf{M}$, $\mathbf{K}$ that are positive definite, and symmetric if derived as an example from a Lagrangian formulation of the problem.

**todo** Add reference to Lagrange mechanics and its properties in the classical mechanics bbooks.

This kind of systems are conveniently described using **modal basis**, as modes (or free/natural modes of vibrations) are orthogonal w.r.t. both mass and stiffness matrix.

**todo** Add reference; add comment: diagonal, or diagonalizable with coincident eigenvectors.

**Free response** using modal basis


## Small damping

Structural small damping can be treated as a first order perturbation of the undamped system,

$$\mathbf{M} \ddot{\mathbf{u}} + \mathbf{C} \dot{\mathbf{u}} + \mathbf{K} \mathbf{u} = \mathbf{f} \ ,$$

or in Laplace domain

$$\left[ s^2 \mathbf{M} + s \mathbf{C} + \mathbf{K} \right] \mathbf{u} = \mathbf{f} \ .$$

Here two assumptions are made and justified later:
- matrix $\mathbf{C}$ is (semi)positive symmetric
- matrix $\mathbf{C}$ becomes diagonal in the modal basis, i.e. modal basis simoultaneously diagonalize mass, damping and stiffness matrices

If these two assumption holds, using the modal base collected in matrix $\mathbf{U}$,

$$\mathbf{u} = \mathbf{U} \mathbf{q} \ ,$$

the diagonalization reads

$$\begin{aligned}
\mathbf{U}^T \mathbf{f}
& = \mathbf{U}^T \left\{ \mathbf{M} \mathbf{U} \ddot{\mathbf{q}} + \mathbf{C} \mathbf{U} \dot{\mathbf{q}} + \mathbf{K} \mathbf{U} \mathbf{q} \right\} = \\
& = \text{diag} \{ m_i \} \ddot{\mathbf{q}} + \text{diag}\{ c_i \} \dot{\mathbf{q}} + \text{diag}\{ k_i \} \mathbf{q} = \\
& = \text{diag} \{ m_i \ddot{q}_i + c_i \dot{q}_i + k_i q_i \} \ .
\end{aligned}$$

being $m_i := \mathbf{u}_i^T \mathbf{M} \mathbf{u}_i$, $c_i := \mathbf{u}_i^T \mathbf{C} \mathbf{u}_i$, $k_i := \mathbf{u}_i^T \mathbf{K} \mathbf{u}_i$, the modal mass, damping and stiffness.

```{dropdown} (Semi)definite positive damping matrix
:open:

Starting from the equations of motion

$$\mathbf{M} \ddot{\mathbf{u}} + \mathbf{C} \dot{\mathbf{u}} + \mathbf{K} \mathbf{u} = \mathbf{f} \ ,$$

the kinetic energy and the mechanical energy balance is derived (**todo** add references) with scalar multiplication by $\dot{\mathbf{u}}$. For constant matrices,

$$\begin{aligned}
 \dot{\mathbf{u}}^T \mathbf{M} \ddot{\mathbf{u}} + \dot{\mathbf{u}}^T \mathbf{C} \dot{\mathbf{u}} + \dot{\mathbf{u}}^T \mathbf{K} \mathbf{u} & = \dot{\mathbf{u}}^T \mathbf{f} \\
 \dfrac{d}{dt} \left[ \dfrac{1}{2} \dot{\mathbf{u}}^T \mathbf{M} \dot{\mathbf{u}} + \dfrac{1}{2} \mathbf{u}^T \mathbf{K} \mathbf{u} \right] & = \dot{\mathbf{u}}^T \mathbf{f} - \dot{\mathbf{u}}^T \mathbf{C} \dot{\mathbf{u}}  \\
 \dfrac{d}{dt} \left( K + V \right) & = \dot{\mathbf{u}}^T \mathbf{f} - \underbrace{\dot{\mathbf{u}}^T \mathbf{C} \dot{\mathbf{u}}}_{ D \ge 0} \ , \\
\end{aligned}$$

having recognized $D = \dot{\mathbf{u}}^T \mathbf{C} \dot{\mathbf{u}} \ge 0$ as the dissipation from damping, that can't make the mechanical energy of the system $K + V$ increase. This condition implies that $\mathbf{C}$ is (semi)definite positive.

```

```{dropdown} Diagonal damping in modal basis
:open:

Let's write here the perturbed free damped system in Laplace domain using modal basis,

$$\left[ s^2 \mathbf{M} + s \mathbf{C} + \mathbf{K} \right] \mathbf{u} = \mathbf{0} \ ,$$

and evaluate the derivative of this relation w.r.t. a parameter $p$ associated to the damping, and not influencing mass or stiffness properties, $\mathbf{M}_{/p} = \mathbf{0}$, $\mathbf{K}_{/p} = \mathbf{0}$,

$$\begin{aligned}
  \mathbf{0} 
  & = \left\{ \left[ s^2 \mathbf{M} + s \mathbf{C} + \mathbf{K} \right] \mathbf{u} \right\}_{/p} = \\
  & = \left[ (2 s \mathbf{M} + \mathbf{C} ) s_{/p} + s \mathbf{C}_{/p} \right] \mathbf{u}
    + \left[ s^2 \mathbf{M} + s \mathbf{C} + \mathbf{K} \right] \mathbf{u}_{/p} \ .
\end{aligned}$$

Let's investigate the effect of small damping on the eigensolution $\left(s_i, \mathbf{u}_i \right)$. Exploiting the symmetry of the matrices of the system (following from the assumed simultaneous diagonalization of the damping matrix $\mathbf{C} = \mathbf{U} \text{diag}\{ c_i \} \mathbf{U}^*$), and evaluating the dot product of the latter relation for the $i$-th eigensolution with the eigenvector $\mathbf{u}_i$,

$$\begin{aligned}
  0 & = \mathbf{u}_i^T \left\{ \left[ (2 s_i \mathbf{M} + \mathbf{C} ) s_{i/p} + s_i \mathbf{C}_{/p} \right] \mathbf{u}_i
      + \left[ s_i^2 \mathbf{M} + s_i \mathbf{C} + \mathbf{K} \right] \mathbf{u}_{i/p} \right\} = \\
    & = \mathbf{u}_i^T \left[ (2 s_i \mathbf{M} + \mathbf{C} ) s_{i/p} + s_i \mathbf{C}_{/p} \right] \mathbf{u}_i
      + \mathbf{u}_{i/p}^T \underbrace{\left[ s_i^2 \mathbf{M} + s_i \mathbf{C} + \mathbf{K} \right] \mathbf{u}_i}_{=\mathbf{0}} = \\
\end{aligned}$$

it follows that the derivative of the $i^{th}$ eigenvalue w.r.t. the parameter $p$ reads

$$s_{i/p} = - \dfrac{s_i \mathbf{u}_i^T \mathbf{C}_{/p} \mathbf{u}_i}{\mathbf{u}_i^T (2 s_i \mathbf{M} + \mathbf{C} ) \mathbf{u}_i} \ .$$

This derivative evaluated for the reference undamped condition $\mathbf{C} = \mathbf{0}$ becomes

$$s_{i/p} = - \dfrac{1}{2} \dfrac{\mathbf{u}_i^T \mathbf{C}_{/p} \mathbf{u}_i}{\mathbf{u}_i^T \mathbf{M} \mathbf{u}_i} = - \dfrac{1}{2} \dfrac{\mathbf{u}_i^T \mathbf{C}_{/p} \mathbf{u}_i}{m_i} \ ,$$

having recognized the modal mass $m_i := \mathbf{u}_i^T \mathbf{M} \mathbf{u}_i$ associated to the $i^{th}$ mode. Now, let's evaluate the derivative of the eigenvalue $s_i$ w.r.t. the components of the damping matrix $\mathbf{C}$, i.e. $\mathbf{C}_{/C_{jk}}$ that is a matrix full of zero, except for the component $(j,k)$ equal to one,

$$s_{i/C_{jk}} = - \dfrac{1}{2} \dfrac{\mathbf{u}_i^T \mathbf{C}_{/C_{jk}} \mathbf{u}_i}{m_i} = -\dfrac{1}{2} \dfrac{u^{(i)}_j u^{(i)}_k}{m_i} \ ,$$

and the first order polynomial expansion of $s_i$ in coefficients $C_{jk}$ reads

$$\begin{aligned}
  s_i & = s_{i,0} + s_{i/C_{jk}} C_{jk} = \\
      & = s_{i,0} - \dfrac{1}{2} \dfrac{u^{(i)}_j C_{jk} u^{(i)}_k}{m_i} = \\
      & = s_{i,0} - \dfrac{1}{2} \dfrac{\mathbf{u}_i^T \mathbf{C} \mathbf{u}_i}{m_i}
\ .
\end{aligned}$$

From this expression, it's possible to deduce that the $i^{th}$ eigenvalue of the slightly damped system differs from the $i^{th}$ eigenvalue of the undamped system $s_{i,0} = \mp j \omega_{i}$ of a real non-positive (as $\mathbf{C} \ge 0$ for dissipative damping actions) term $\Delta s_i = - \frac{1}{2} \frac{\mathbf{u}_i^T \mathbf{C} \mathbf{u}_i}{m_i} \in \mathbb{R}$, $\Delta s_i \le 0$, depending only on the damping matrix and the $i^{th}$ mode. This term shifts the eigenvalue $s_i$ to the left in the complex plane, and thus makes it asymptotically stable.

As the variation $\Delta s_i$ only depends on the $i^{th}$ eigenvector, and not on other eigenvectors, the assumption of siultaneously diagonalizable damping matrix is consistent with the results from this assumption.

```

## Sensitivity of eigenvalues and eigenvectors

Link to [Sensitivity of spectral decomposition, for first order equations](https://basics2022.github.io/bbooks-math-miscellanea/ch/linear-algebra/spectral-sensitivity.html).
The sensitivity of the $i^{th}$ eigenvalue to a general parameter reads

$$s_{i/p} = - \dfrac{s_i \mathbf{u}_i^* \mathbf{C}_{/p} \mathbf{u}_i}{\mathbf{u}_i^* (2 s_i \mathbf{M} + \mathbf{C} ) \mathbf{u}_i} \ .$$

The sensitivity of this eigenvalue to damping $\mathbf{C}$ of the undamped system as reference condition $\mathbf{C} = \mathbf{0}$ reads

$$s_{i/\mathbf{C}} = - \dfrac{1}{2} \dfrac{\mathbf{u}_i \otimes \mathbf{u}_i}{m_i} \ .$$

The sensitivity of the eigenvector $\mathbf{u}_{i/p}$ can be evaluated as the solution of a linear system derived from the derivation of the eigenvalue problem w.r.t. the parameter $p$

$$\begin{aligned}
  \mathbf{0} 
  & = \dfrac{d}{dp}\left\{ \left( s^2 \mathbf{M} + s \mathbf{C} + \mathbf{K} \right) \mathbf{u} \right\} = \\
  & = \left( s^2 \mathbf{M} + s \mathbf{C} + \mathbf{K} \right) \mathbf{u}_{/p} + \left( 2 s s_{/p} \mathbf{M} + s_{/p} \mathbf{C} + s \mathbf{C}_{/p} \right) \mathbf{u} \ ,
\end{aligned}$$

having assumed here $\mathbf{M}_{/p} = \mathbf{0}$ and $\mathbf{K}_{/p} = \mathbf{0}$. The linear system thus becomes

$$\left( s^2 \mathbf{M} + s \mathbf{C} + \mathbf{K} \right) \mathbf{u}_{/p} = \underbrace{- \left( 2 s s_{/p} \mathbf{M} + s_{/p} \mathbf{C} + s \mathbf{C}_{/p} \right) \mathbf{u}}_{= \mathbf{b}}\ .$$

* This linear system is singular, as $s$ is an eigenvalue of the system, and 

  $$\left( s^2 \mathbf{M} + s \mathbf{C} + \mathbf{K} \right) \mathbf{x} = \mathbf{0} \ ,$$

  for every $\mathbf{x}$ that is a linear combination of the eigenvectors with eigenvalue $s$. Thus, if the linear system has a solution, it has infinite solution. The linear system has a solution if the RHS $\mathbf{b}$ is in the range of the matrix $\mathbf{A}(s) := s^2 \mathbf{M} + s \mathbf{C} + \mathbf{K}$.

* If $\mathbf{b} \in \text{R}(\mathbf{A})$ then it's orthogonal to $\text{K}(\mathbf{A}^*)$, and viceversa. Kernel of $\mathbf{A}^* := s^{* 2} \mathbf{M}^* + s^* \mathbf{C}^* + \mathbf{K}^*$ is spanned by the left eigenvectors $\mathbf{v}$ associated with the eigenvalue $s$. Direct evaluation of the product $\mathbf{v}^* \mathbf{b}$ proves that $\mathbf{b} \perp \text{K}(\mathbf{A}^*)$ and thus $\mathbf{b} \in \text{R}(\mathbf{A})$, and thus a solution exists,

  $$\begin{aligned}
    \mathbf{v}^* \mathbf{b} 
    & = \mathbf{v}^* \left( - 2 s s_{/p} \mathbf{M} - s_{/p} \mathbf{C} - s \mathbf{C}_{/p} \right) \mathbf{u} = \\
    & = \mathbf{v}^* ( - 2 s \mathbf{M} - \mathbf{C} ) \mathbf{u} s_{/p} - s \mathbf{v}^* \mathbf{C}_{/p} \mathbf{u} = \\
    & = \mathbf{v}^* ( - 2 s \mathbf{M} - \mathbf{C} ) \mathbf{u} \dfrac{-s \mathbf{v}^* \mathbf{C}_{/p} \mathbf{u}}{\mathbf{v}^* ( 2 s \mathbf{M} + \mathbf{C}) \mathbf{u}} - s \mathbf{v}^* \mathbf{C}_{/p} \mathbf{u} = 0 \ .
  \end{aligned}$$

* Since a solution exists, an infinite number of solution exists. Given a solution $\widetilde{\mathbf{u}}_{/p}$, adding a linear combination of the eigenvectors with eigenvalue $s$ produces a solution as well,

  $$\widetilde{\mathbf{u}}_{/p} + \mathbf{U} \boldsymbol\beta \ .$$

* In order to remove the arbitariness, it's possible to introduce some conditions, like the orthogonality condition $\mathbf{V}^* \mathbf{M} \mathbf{u}_{/p} ) \mathbf{0}$

* Writing the solution as a linear combination of eigenvectors $\mathbf{U}$ of the linear system (are they a basis?) and explicitly discern the eigenvectors with eigenvalue $s_i$ fro the other ones,

  $$\mathbf{u}_{/p} = \mathbf{U}_{\notin i} \boldsymbol\alpha + \mathbf{U}_i \boldsymbol\beta \ ,$$

  the linear system and the orthogonality condition $\mathbf{V}_i^* \mathbf{M} \mathbf{U}_{\notin i} = \mathbf{0}$ give the decoupled linear system

  $$\begin{cases}
    \mathbf{V}^*_{\notin i} \left( s_i^2 \mathbf{M} + s_i \mathbf{C} + \mathbf{K} \right) \mathbf{U}_{\notin i} \boldsymbol\alpha = \mathbf{V}^*_{\notin i} \mathbf{b} \\
    \mathbf{V}_i \mathbf{M} \mathbf{U}_i \boldsymbol\beta = \mathbf{0} \ .
  \end{cases}$$

  Under the assumption that mass, damping and stiffness matrices are simultaneously diagnoalized, it immediately follows that this linear system is diagonal,

  $$\begin{cases}
    \text{diag} \left\{ s_i^2 m_{j \notin i} + s_i c_{j \notin i} + k_{j\notin i} \right\} \boldsymbol\alpha = \mathbf{V}_{\notin i}^*  \mathbf{b}\\
    \text{diag} \left\{ m_i \right\} \boldsymbol\beta = \mathbf{0} \ .
  \end{cases}$$

  If mass normalization is chosen, $\mathbf{V}^* \mathbf{M} \mathbf{U} = \mathbf{I}$, i.e. $m_j = 1$, $k_j = \omega_j^2 = |s_j|^2$, and $c_i = 2 \xi_j \omega_j = - 2 \, \text{re}\{ s_j \}$, being $s_j = \omega_j \left( - \xi_j \mp i \sqrt{ 1 - \xi^2_j } \right)$. It's immediate to prove that

  $$s^2 - 2 s \, \text{re}\{ s_j \} + |s_j|^2 = ( s - s_j^* ) ( s - s_j ) \ ,$$

  as

  $$(s - s_j^* ) (s - s^j ) = s^2 - s (s_j + s_j^*) + s_j^* s_j = s^2 - 2 \, \text{re}\{ s_j \} + |s_j|^2 \ .$$

  The solution of the linear system thus reads

  $$\begin{cases}
    \boldsymbol\alpha = \text{diag}\left\{ \dfrac{1}{s_i^2 + 2 \xi_j \omega_j s_i + \omega_j^2} \right\} \mathbf{V}^*_{\notin i} \mathbf{b} \\
    \boldsymbol\beta = \mathbf{0} \ ,
  \end{cases}$$

  s.t. the unique solution of the augmented problem reads

  $$\begin{aligned}
    \mathbf{u}_{i/p} 
    & = \mathbf{U}_{\notin i} \text{diag}\left\{ \dfrac{1}{s_i^2 + 2 \xi_j \omega_j s_i + \omega_j^2} \right\} \mathbf{V}^*_{\notin i} \mathbf{b}_i = \\
    & = - \mathbf{U}_{\notin i} \text{diag}\left\{ \dfrac{1}{s_i^2 + 2 \xi_j \omega_j s_i + \omega_j^2} \right\} \mathbf{V}^*_{\notin i} \left( 2 s_i s_{i/p} \mathbf{M} + s_{i/p} \mathbf{C} + s_i \mathbf{C}_{/p} \right) \mathbf{u}_i = \\
    & = - s_i \mathbf{U}_{\notin i} \text{diag}\left\{ \dfrac{1}{s_i^2 + 2 \xi_j \omega_j s_i + \omega_j^2} \right\} \mathbf{V}^*_{\notin i} \mathbf{C}_{/p} \mathbf{u}_i = \\
    & = \dots
  \end{aligned}$$

```{dropdown} Algebra with components
:open: 

Let the matrix $\mathbf{U}_{\notin i} = \left[ \dots | \mathbf{u}_j | \dots \right]$, and $U_{ab}^{\notin i} = u^{(b)}_a$, $V_{ab}^{\notin i} = v^{(b)}_a$,

$$\begin{aligned}
  u^{(i)}_{a/p}
  & = - s_i U^{\notin i}_{ab} \dfrac{\delta_{be}}{s_i^2 + 2 \xi_b \omega_b s_i + \omega_b^2} V^{\notin i, \ *}_{ce} C_{cd/p} u^{(i)}_d = \\
  & = - u^{(b)}_a \dfrac{s_i}{s_i^2 + 2 \xi_b \omega_b s_i + \omega_b^2} v^{(b) \, *}_{c} C_{cd/p} u_d^{(i)} = \\
  & = - \sum_{b \ne i} \dfrac{s_i}{s_i^2 + 2 \xi_b \omega_b s_i + \omega_b^2} \mathbf{v}_b^* \mathbf{C}_{/p} \mathbf{u}_i \, \mathbf{u}_b
\end{aligned}$$

```

```{dropdown} Parameter $\ p = C_{rs}$
:open:

If $p = C_{rs}$, then $C_{cd/p} = C_{cd/C_{rs}} = \delta_{cr} \delta_{ds}$, and 

$$\begin{aligned}
  u^{(i)}_{a/C_{rs}}
  & = - s_i U^{\notin i}_{ab} \dfrac{\delta_{be}}{s_i^2 + 2 \xi_b \omega_b s_i + \omega_b^2} V^{\notin i, \ *}_{ce} C_{cd/C_{rs}} u^{(i)}_d = \\
  & = - \sum_{b \ne i} u^{(b)}_a \dfrac{s_i}{s_i^2 + 2 \xi_b \omega_b s_i + \omega_b^2} v^{(b) \, *}_{c} \delta_{cr} \delta_{ds} u_d^{(i)} = \\
  & = - \sum_{b \ne i} u^{(b)}_a \dfrac{s_i}{s_i^2 + 2 \xi_b \omega_b s_i + \omega_b^2} v^{(b) \, *}_{r} u_s^{(i)} = \\
\end{aligned}$$

is a *third-order tensor*, as it's the derivative of a vector quantity w.r.t. a second-order tensor $\mathbf{C}$[^tensor-matrix], and its index representation has 3 non-dummy indices, namely $a$, $r$, $s$.

[^tensor-matrix]: Is this really a tensor? Should we recall the definition of tensor here? What's the right name of the extension of a matrix with 3 indices?

The first-order approximation of the eigenvector reads

$$\begin{aligned}
  u^{(i)}_a 
  & \simeq u^{(i)}_{a,0} + \sum_{r,s} C_{rs} u^{(i)}_{a/C_{rs}} = \\
  &      = u^{(i)}_{a,0} - \sum_{r,s} C_{rs} \sum_{b \ne i} u_a^{(b)} \dfrac{s_i}{s_i^2 + 2 \xi_b \omega_b s_i + \omega_b^2} v_r^{(b) \ *} u_s^{(i)} = \\
  &      = u^{(i)}_{a,0} - \sum_{b \ne i} u_a^{(b)} \dfrac{s_i}{s_i^2 + 2 \xi_b \omega_b s_i + \omega_b^2} \sum_{r,s} v_r^{(b) \ *} C_{rs} u_s^{(i)} \ ,
\end{aligned}$$

or using vector formalism

$$\mathbf{u}_i = \mathbf{u}_{i,0} - \sum_{b \ne i} \dfrac{s_i}{s_i^2 + 2 \xi_b \omega_b s_i + \omega_b^2} \mathbf{v}_{b,0}^* \mathbf{C} \mathbf{u}_{i,0} \, \mathbf{u}_{i,0} \ .$$

```

