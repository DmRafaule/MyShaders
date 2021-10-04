#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;


void main(){
   vec2 coord = (gl_FragCoord.xy / u_resolution / 2.0);
   float color = 0.0;

   color += sin(coord.x * 50.0 + cos(u_time * coord.y * 10.0 + sin(coord.x * 50.0 + u_time * 2.0))) * 2.0;
   color += cos(coord.x * 20.0 + sin(u_time * coord.y * 1.0 + cos(coord.x * 50.0 + u_time * 2.0))) * 1.0;
   color += sin(coord.x * 30.0 + cos(u_time * coord.x * 4.0 + sin(coord.x * 20.0 + u_time * 2.0))) * 1.0;
   color += cos(coord.x * 10.0 + sin(u_time * coord.x * 10.0 + cos(coord.x * 50.0))) * 2.0;

   gl_FragColor = vec4(vec3(color + coord.x,color + coord.y,color),1.0);
}