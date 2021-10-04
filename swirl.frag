#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

void main(){
   vec2 coord = (gl_FragCoord.xy / u_resolution);
   vec3 color = vec3(0.3686, 0.2784, 0.6863);
   
   float angle = atan(-coord.x + 0.3, coord.y - 0.2) * 0.2;
   float len   = length(coord - vec2(0.5,0.5));

   color.r += sin(len * 50.0 + angle * 10.0 + u_time);
   color.g += cos(len * 50.0 + angle * 20.0 - u_time);
   color.b += sin(len * 50.0 + angle * 40.0 + u_time);

   gl_FragColor = vec4(color,1.0);
}