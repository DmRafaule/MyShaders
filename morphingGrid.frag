#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

void main(){
   vec2 coord = gl_FragCoord.xy * 1.0 - u_resolution;
   float color = 0.0;
  
   color += abs(cos(coord.x / 20.0) + sin(coord.y / 20.0) - cos(u_time));

   gl_FragColor = vec4(vec3(color),1.0);
}