(solid-mechanics:intro:small-displacements:numerics)=
# Modal methods for structural problems

$$\mathbf{M} \ddot{\mathbf{u}} + \mathbf{K} \mathbf{u} = \mathbf{f} \ .$$

## No free rigid motion
If a structure has no free rigid motion, the stiffness matrix of mechanical systems is symmetric **definite positive**.

**Spectral decomposition of the problem.**

$$\left[ s_i^2 \mathbf{M} + \mathbf{K} \right] \hat{\mathbf{u}}_i = \mathbf{0} \ ,$$

or in index and matrix form

$$\begin{aligned}
  0 & = s_i^2 M_{jk} U_{ki} + K_{jk} U_{ki} = \\
    & = \mathbf{M} \mathbf{U} \mathbf{S}^2 + \mathbf{K} \mathbf{U} \ ,
\end{aligned}$$

with the diagonal matrix $\mathbf{S}$ collecting the eigenvalues,

$$\mathbf{S} = \text{diag} \left\{ s_i \right\} \ .$$

**Properties.** For eigenvectors with different eigenvalues,

$$\begin{aligned}
  \hat{\mathbf{u}}_j^* \mathbf{M} \hat{\mathbf{u}}_i = 0 \qquad , \qquad
  \hat{\mathbf{u}}_j^* \mathbf{K} \hat{\mathbf{u}}_i = 0 \ .
\end{aligned}$$

**Nodal and modal unknowns.** The nodal vector can be written as a combination of modes, being $\mathbf{q}$ the vector of modal amplitudes,

$$\mathbf{u} = \mathbf{U} \mathbf{q} = \left[ \hat{\mathbf{u}}_1 | \dots | \hat{\mathbf{u}}_N \right] \mathbf{q} \ .$$

**Laplace domain.** In Laplace domain 

$$\begin{aligned}
  \left[ s^2 \mathbf{U}^* \mathbf{M} \mathbf{U} + \mathbf{U}^* \mathbf{K} \mathbf{U}\right] \mathbf{q}(s) & = \mathbf{U}^* \mathbf{f}(s) \\
  \text{diag}\left[ s^2 m_i + k_i \right] \mathbf{q}(s) & = \mathbf{U}^* \mathbf{f}(s) \ .
\end{aligned}$$

**Modal damping** Adding modal damping, with simultaneous diagonalization with mass and stiffness matrices,

$$
  \text{diag}\left[ s^2 m_i + s c_i + k_i \right] \mathbf{q}(s) & = \mathbf{U}^* \mathbf{f}(s) \\
 \mathbf{q}(s) & = \text{diag}\left[ \frac{1}{m_i ( s^2 + 2 \xi_i \omega_i s + \omega^2_i )} \right]\mathbf{U}^* \mathbf{f}(s) \ .
$$

The original equation becomes

$$\left[s^2 \mathbf{M} + s \mathbf{C} + \mathbf{K} \right] \mathbf{u} = \mathbf{f} \ ,$$

with 

$$\begin{aligned}
  \mathbf{M} & = \mathbf{U} \text{diag}\left\{ m_i \right\} \mathbf{U}^* \\
  \mathbf{C} & = \mathbf{U} \text{diag}\left\{ c_i \right\} \mathbf{U}^* \\
  \mathbf{K} & = \mathbf{U} \text{diag}\left\{ k_i \right\} \mathbf{U}^* \\
\end{aligned}$$

and the eigenproblem reads

$$\begin{aligned}
  \mathbf{0} & = \left[ s_i^2 \mathbf{M} + s_i \mathbf{C} + \mathbf{K} \right] \hat{\mathbf{u}}_i \\
  \mathbf{0} & = \mathbf{M} \mathbf{U} \mathbf{S}^2 + \mathbf{C} \mathbf{U} \mathbf{S} + \mathbf{K} \mathbf{U} \\
\end{aligned}$$


**Nodal vector.** Nodal vector thus reads

$$\mathbf{u}(s) = \mathbf{U} \mathbf{q}(s) = \mathbf{U} \text{diag}\left[ \frac{1}{m_i ( s^2 + 2 \xi_i \omega_i s + \omega^2_i )} \right]\mathbf{U}^* \mathbf{f}(s) $$

and the internal forces usually derived from a manipulation of the term $\mathbf{K} \mathbf{u}(s)$,

$$\mathbf{K} \mathbf{u}(s) = \mathbf{K} \mathbf{U} \text{diag}\left[ \frac{1}{m_i ( s^2 + 2 \xi_i \omega_i s + \omega^2_i )} \right]\mathbf{U}^* \mathbf{f}(s) \ .$$

### Dimension reduction

Modal unknowns can usually partitioned in slow (dynamical, resolved) and fast modes (with natural frequencies well above the frequency content of the forcing, and the dynamics of the system; can be treated as static modes),

$$\mathbf{q} = \begin{bmatrix} \mathbf{q}_s \\ \mathbf{q}_f \end{bmatrix} \ ,$$

and the sum of their contributions give the nodal unknown,

$$\mathbf{u} = \mathbf{U} \mathbf{q} = \begin{bmatrix} \mathbf{U}_s & \mathbf{U}_f \end{bmatrix} \begin{bmatrix} \mathbf{q}_s \\ \mathbf{q}_f \end{bmatrix} = \mathbf{U}_s \mathbf{q}_s + \mathbf{U}_f \mathbf{q}_f \ .$$

#### Truncation and direct recovery of loads

$$\begin{aligned}
  \mathbf{u} 
  & = \mathbf{U}_s \text{diag}\left[ \frac{1}{m_s ( s^2 + 2 \xi_s \omega_s s + \omega^2_s )} \right] \mathbf{U}_s^* \mathbf{f} 
    + \mathbf{U}_f \text{diag}\left[ \frac{1}{m_f ( s^2 + 2 \xi_f \omega_f s + \omega^2_f )} \right] \mathbf{U}_f^* \mathbf{f}
\end{aligned}$$

#### Mode acceleration and static recovery of fast modes

Static approximation of fast modes gives

$$\begin{aligned}
  \mathbf{u} 
  & = \mathbf{U}_s \text{diag}\left[ \frac{1}{m_s ( s^2 + 2 \xi_s \omega_s s + \omega^2_s )} \right] \mathbf{U}_s^* \mathbf{f} 
    + \mathbf{U}_f \text{diag}\left[ \frac{1}{m_f ( s^2 + 2 \xi_f \omega_f s + \omega^2_f )} \right] \mathbf{U}_f^* \mathbf{f} = \\
  & = \mathbf{U}_s \text{diag}\left[ \frac{1}{m_s ( s^2 + 2 \xi_s \omega_s s + \omega^2_s )} \right] \mathbf{U}_s^* \mathbf{f} 
    + \mathbf{U}_f \text{diag}\left[ \frac{1}{m_f \omega^2_f } \right] \mathbf{U}_f^* \mathbf{f}
\end{aligned}$$

and adding and subtracting the static response of the slow modes,

$$\begin{aligned}
  \mathbf{u} 
  & = \mathbf{U}_s \text{diag}\left[ \frac{1}{m_s ( s^2 + 2 \xi_s \omega_s s + \omega^2_s )} \right] \mathbf{U}_s^* \mathbf{f} 
    - \mathbf{U}_s \text{diag}\left[ \frac{1}{m_s \omega^2_s } \right] \mathbf{U}_s^* \mathbf{f} + \\
  & + \mathbf{U}_s \text{diag}\left[ \frac{1}{m_s \omega^2_s } \right] \mathbf{U}_s^* \mathbf{f}
    + \mathbf{U}_f \text{diag}\left[ \frac{1}{m_f \omega^2_f } \right] \mathbf{U}_f^* \mathbf{f} = \\
  & = \mathbf{U}_s \text{diag}\left[ \frac{-s^2 -2 \xi_s \omega_s s}{m_s \omega^2_s ( s^2 + 2 \xi_s \omega_s s + \omega^2_s )} \right] \mathbf{U}_s^* \mathbf{f} 
    - \mathbf{U} \text{diag}\left[ \frac{1}{m_i \omega^2_i } \right] \mathbf{U}^* \mathbf{f} + \\
  & = \mathbf{U}_s \text{diag}\left[ \frac{-s^2 -2 \xi_s \omega_s s}{m_s \omega^2_s ( s^2 + 2 \xi_s \omega_s s + \omega^2_s )} \right] \mathbf{U}_s^* \mathbf{f}
    - \mathbf{K}^{-1} \mathbf{f} \\
  & = ... \\
  & = - \mathbf{U}_s \left( \mathbf{U}_s^ \mathbf{K} \mathbf{U}_s \right)^{-1} \left(  \right) \text{diag} \left[ \frac{1}{m_s (s^2 + 2 \xi_s \omega_s s + \omega^2_s) } \right] \mathbf{U}_s^* \mathbf{f} -  \mathbf{K}^{-1} \mathbf{f} \ .
\end{aligned}$$

```{dropdown}
:open:

$$\begin{aligned}
 & \mathbf{U}_s \text{diag}\left[ \frac{-s^2 -2 \xi_s \omega_s s}{m_s \omega^2_s ( s^2 + 2 \xi_s \omega_s s + \omega^2_s )} \right] \mathbf{U}_s^* \mathbf{f}  = \\
 & = \mathbf{U}_s \text{diag}\left[ \frac{1}{k_s} \right] \text{diag}\left[ m_s ( s^2 + 2  \xi_s \omega_s s ) \right]\text{diag}\left[ \frac{1}{m_s ( s^2 + 2 \xi_s \omega_s s + \omega^2_s) } \right] \mathbf{U}_s^* \mathbf{f} = \\
\end{aligned}$$

...**todo**...

```




## With free rigid motion
Free rigid degrees of freedom are associated with vectors of the kernel of the stiffness matrix. The stiffness matrix is singular...


