#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

void main(){
  vec2 coord = gl_FragCoord.xy/u_resolution.xy;
  vec3 color = vec3(0.0);
  float disField = 0.0;

  // Remap the space to -1. to 1.
  coord = coord * 2.-1.;

  // Make the distance field
  disField = length( abs(coord)-.1 );
  // disField = length( min(abs(coord)-.3,0.) );
  // disField = length( max(abs(coord)-.1,0.) );

  // Visualize the distance field
  gl_FragColor = vec4(vec3(fract( disField * 8.0)),1.);

  // Drawing with the distance field
   //gl_FragColor = vec4(vec3( step(.2,disField) ),.5);
   gl_FragColor = vec4(vec3( step(.3,disField) * step(disField,.4)),1.0);
   gl_FragColor = vec4(vec3( smoothstep(.3,.4,disField) * smoothstep(.6,.5,disField)) ,1.0);
}