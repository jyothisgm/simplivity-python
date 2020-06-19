Search.setIndex({docnames:["index","modules","simplivity","simplivity.resources"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":3,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":2,"sphinx.domains.rst":2,"sphinx.domains.std":1,"sphinx.ext.viewcode":1,sphinx:56},filenames:["index.rst","modules.rst","simplivity.rst","simplivity.resources.rst"],objects:{"":{simplivity:[2,0,0,"-"]},"simplivity.connection":{Connection:[2,1,1,""]},"simplivity.connection.Connection":{"delete":[2,2,1,""],do_http:[2,2,1,""],get:[2,2,1,""],get_connection:[2,2,1,""],login:[2,2,1,""],logout:[2,2,1,""],post:[2,2,1,""],put:[2,2,1,""]},"simplivity.exceptions":{HPESimpliVityAuthenticationError:[2,3,1,""],HPESimpliVityException:[2,3,1,""],HPESimpliVityMethodNotSupportedError:[2,3,1,""],HPESimpliVityResourceNotFound:[2,3,1,""],HPESimpliVityTaskError:[2,3,1,""],HPESimpliVityTimeout:[2,3,1,""]},"simplivity.ovc_client":{OVC:[2,1,1,""]},"simplivity.ovc_client.OVC":{backups:[2,2,1,""],certificates:[2,2,1,""],cluster_groups:[2,2,1,""],connection:[2,2,1,""],datastores:[2,2,1,""],external_stores:[2,2,1,""],from_environment_variables:[2,2,1,""],from_json_file:[2,2,1,""],hosts:[2,2,1,""],omnistack_clusters:[2,2,1,""],policies:[2,2,1,""],virtual_machines:[2,2,1,""]},"simplivity.resources":{backups:[3,0,0,"-"],certificates:[3,0,0,"-"],cluster_groups:[3,0,0,"-"],datastores:[3,0,0,"-"],external_stores:[3,0,0,"-"],hosts:[3,0,0,"-"],omnistack_clusters:[3,0,0,"-"],policies:[3,0,0,"-"],resource:[3,0,0,"-"],tasks:[3,0,0,"-"],virtual_machines:[3,0,0,"-"]},"simplivity.resources.backups":{Backup:[3,1,1,""],Backups:[3,1,1,""]},"simplivity.resources.backups.Backup":{"delete":[3,2,1,""],cancel:[3,2,1,""],copy:[3,2,1,""],lock:[3,2,1,""],rename:[3,2,1,""],restore:[3,2,1,""]},"simplivity.resources.backups.Backups":{delete_multiple_backups:[3,2,1,""],get_all:[3,2,1,""],get_by_data:[3,2,1,""],set_retention:[3,2,1,""]},"simplivity.resources.certificates":{Certificate:[3,1,1,""],Certificates:[3,1,1,""]},"simplivity.resources.certificates.Certificates":{get_all:[3,2,1,""],get_by_data:[3,2,1,""],get_by_id:[3,2,1,""],get_by_name:[3,2,1,""]},"simplivity.resources.cluster_groups":{ClusterGroup:[3,1,1,""],ClusterGroups:[3,1,1,""]},"simplivity.resources.cluster_groups.ClusterGroup":{OBJECT_TYPE:[3,4,1,""],rename:[3,2,1,""]},"simplivity.resources.cluster_groups.ClusterGroups":{get_all:[3,2,1,""],get_by_data:[3,2,1,""]},"simplivity.resources.datastores":{Datastore:[3,1,1,""],Datastores:[3,1,1,""]},"simplivity.resources.datastores.Datastore":{"delete":[3,2,1,""],resize:[3,2,1,""],set_policy:[3,2,1,""],standard_hosts:[3,2,1,""]},"simplivity.resources.datastores.Datastores":{create:[3,2,1,""],get_all:[3,2,1,""],get_by_data:[3,2,1,""]},"simplivity.resources.external_stores":{ExternalStore:[3,1,1,""],ExternalStores:[3,1,1,""]},"simplivity.resources.external_stores.ExternalStores":{get_all:[3,2,1,""],get_by_data:[3,2,1,""]},"simplivity.resources.hosts":{Host:[3,1,1,""],Hosts:[3,1,1,""]},"simplivity.resources.hosts.Host":{OBJECT_TYPE:[3,4,1,""],cancel_virtual_controller_shutdown:[3,2,1,""],get_hardware:[3,2,1,""],get_virtual_controller_shutdown_status:[3,2,1,""],remove:[3,2,1,""],shutdown_virtual_controller:[3,2,1,""]},"simplivity.resources.hosts.Hosts":{get_all:[3,2,1,""],get_by_data:[3,2,1,""]},"simplivity.resources.omnistack_clusters":{OmnistackCluster:[3,1,1,""],OmnistackClusters:[3,1,1,""]},"simplivity.resources.omnistack_clusters.OmnistackCluster":{OBJECT_TYPE:[3,4,1,""],get_connected_clusters:[3,2,1,""],get_throughput:[3,2,1,""],set_time_zone:[3,2,1,""]},"simplivity.resources.omnistack_clusters.OmnistackClusters":{get_all:[3,2,1,""],get_by_data:[3,2,1,""],get_time_zone_list:[3,2,1,""]},"simplivity.resources.policies":{Policies:[3,1,1,""],Policy:[3,1,1,""]},"simplivity.resources.policies.Policies":{create:[3,2,1,""],get_all:[3,2,1,""],get_by_data:[3,2,1,""],resume:[3,2,1,""],suspend:[3,2,1,""]},"simplivity.resources.policies.Policy":{"delete":[3,2,1,""],OBJECT_TYPE:[3,4,1,""],create_rules:[3,2,1,""],delete_rule:[3,2,1,""],edit_rule:[3,2,1,""],get_rule:[3,2,1,""],get_vms:[3,2,1,""],impact_create_rules:[3,2,1,""],impact_edit_rules:[3,2,1,""],rename:[3,2,1,""]},"simplivity.resources.resource":{Pagination:[3,1,1,""],ResourceBase:[3,1,1,""],ResourceClient:[3,1,1,""],build_uri_with_query_string:[3,5,1,""]},"simplivity.resources.resource.Pagination":{next_page:[3,2,1,""],previous_page:[3,2,1,""]},"simplivity.resources.resource.ResourceBase":{get_by_id:[3,2,1,""],get_by_name:[3,2,1,""]},"simplivity.resources.resource.ResourceClient":{do_delete:[3,2,1,""],do_get:[3,2,1,""],do_post:[3,2,1,""],do_put:[3,2,1,""],get_all:[3,2,1,""],task_affected_resources:[3,2,1,""]},"simplivity.resources.tasks":{Task:[3,1,1,""]},"simplivity.resources.tasks.Task":{get_affected_resources:[3,2,1,""],get_current_seconds:[3,2,1,""],is_task_running:[3,2,1,""],update_status:[3,2,1,""],wait_for_task:[3,2,1,""]},"simplivity.resources.virtual_machines":{VirtualMachine:[3,1,1,""],VirtualMachines:[3,1,1,""]},"simplivity.resources.virtual_machines.VirtualMachine":{clone:[3,2,1,""],create_backup:[3,2,1,""],get_backups:[3,2,1,""],move:[3,2,1,""],power_off:[3,2,1,""],power_on:[3,2,1,""],set_backup_parameters:[3,2,1,""],set_policy:[3,2,1,""]},"simplivity.resources.virtual_machines.VirtualMachines":{get_all:[3,2,1,""],get_by_data:[3,2,1,""],policy_impact_report:[3,2,1,""],set_policy_for_multiple_vms:[3,2,1,""]},simplivity:{connection:[2,0,0,"-"],exceptions:[2,0,0,"-"],ovc_client:[2,0,0,"-"],resources:[3,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","exception","Python exception"],"4":["py","attribute","Python attribute"],"5":["py","function","Python function"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:exception","4":"py:attribute","5":"py:function"},terms:{"boolean":2,"byte":3,"case":3,"class":[2,3],"default":[2,3],"new":3,"return":[2,3],"static":3,"true":[2,3],"while":3,HMS:3,Not:2,The:[2,3],abil:3,abov:2,accept:3,access:2,accord:3,action:3,activ:3,add:3,address:3,affect:3,after:3,all:[2,3],allow:3,america:3,ani:3,anoth:3,app_aware_typ:3,app_aware_vm_statu:3,app_consist:3,appen:2,append:2,appli:3,applic:3,application_consist:3,arbit:3,arbiter_address:3,arbiter_connect:3,arg:[2,3],arrai:3,ascend:3,assocait:3,associ:[2,3],asterisk:3,asynchron:3,attribut:2,authent:2,avail:3,awar:3,back:3,backup:[1,2],backup_nam:3,base:[2,3],base_url:3,befor:3,below:3,between:3,bodi:[2,3],build_uri_with_query_str:3,calcul:3,call:[2,3],can:3,can_rollback:3,cancel:3,cancel_virtual_controller_shutdown:3,cannot:3,case_sensit:3,caus:3,certif:[1,2],chang:3,charact:3,check:3,classmethod:2,client:2,clone:3,cluster:[2,3],cluster_group:[1,2],cluster_group_id:3,cluster_throughput:3,clustergroup:[2,3],code:2,comma:3,common:2,commun:2,complet:3,complianc:3,compliant:3,comput:3,compute_cluster_hypervisor_object_id:3,compute_cluster_nam:3,compute_cluster_parent_hypervisor_object_id:3,compute_cluster_parent_nam:3,con:3,config:2,connect:[1,3],consist:3,consistency_typ:3,consistentbackup:3,construct:2,contain:3,content:1,control:3,coordin:3,copi:3,crash:3,creat:3,create_backup:3,create_rul:3,created_aft:3,created_befor:3,creation:3,credenti:2,current:3,current_feature_level_max:3,current_feature_level_min:3,custom:[2,3],custom_head:[2,3],dai:3,data:[2,3],datastor:[1,2],datastore_id:3,datastore_nam:3,datetim:3,defin:2,delet:[2,3],delete_multiple_backup:3,delete_rul:3,descend:3,destin:3,destination_id:3,destination_nam:3,dict:[2,3],dictionari:3,differ:3,direct:3,directli:3,disabl:3,disk:3,do_delet:3,do_get:3,do_http:2,do_post:3,do_put:3,doe:3,doesn:3,down:3,durat:3,each:3,earliest:3,edit:3,edit_rul:3,elaps:3,els:3,enabl:3,end_tim:3,environ:2,error:[2,3],error_cod:2,even:3,everi:3,exampl:3,except:[1,3],execut:3,exist:3,expir:3,expires_aft:3,expires_befor:3,express:3,extern:[2,3],external_stor:[1,2],external_store_nam:3,externalstor:3,fail:3,failur:3,fals:[2,3],featur:3,feder:3,federation_ip:3,fetch:3,field:3,file:2,file_nam:2,filer:3,filter:3,first:3,flag:3,flush:3,forc:3,forcefulli:3,form:3,format:3,found:2,frequenc:3,fri:3,from:3,from_environment_vari:2,from_json_fil:2,full:2,gener:3,get:[2,3],get_affected_resourc:3,get_al:3,get_backup:3,get_by_data:3,get_by_id:3,get_by_nam:3,get_connect:2,get_connected_clust:3,get_current_second:3,get_hardwar:3,get_rul:3,get_throughput:3,get_time_zone_list:3,get_virtual_controller_shutdown_statu:3,get_vm:3,group:[2,3],guest_password:3,guest_usernam:3,ha_resynchronization_progress:3,ha_statu:3,ha_wait:3,handl:3,hardwar:3,header:[2,3],help:2,helper:3,host:[1,2],host_id:3,hpe:[2,3],hpesimplivityauthenticationerror:2,hpesimplivityexcept:[2,3],hpesimplivitymethodnotsupportederror:2,hpesimplivityresourcenotfound:[2,3],hpesimplivitytaskerror:2,hpesimplivitytimeout:2,http:[2,3],httpsconnect:2,hypervisor:3,hypervisor_is_templ:3,hypervisor_management_system:3,hypervisor_management_system_nam:3,hypervisor_object_id:3,hypervisor_object_parent_id:3,hypervisor_object_parent_nam:3,hypervisor_virtual_machine_power_st:3,identifi:[2,3],ids:3,impact:3,impact_create_rul:3,impact_edit_rul:3,implement:[2,3],in_progress:3,includ:3,index:0,indic:3,inform:3,insensit:3,instanc:3,integ:3,is_task_run:3,iso:3,its:3,json:2,keep:3,kwarg:3,last:3,latest:3,level:3,limit:3,list:3,local:3,lock:3,logic:3,login:2,logout:2,loss:3,machin:[2,3],mai:3,maintain:2,make:[2,3],manag:3,management_ip:3,mandatori:3,manner:3,max_backup:3,max_siz:3,maximum:3,member:2,members_field:3,messag:2,method:[2,3],microsoft:3,min_siz:3,minimum:3,minut:3,model:3,modif:3,modul:[0,1],mon:3,month:3,more:3,most:3,mount_directori:3,move:3,msg:2,name:3,need:3,new_nam:3,new_vm_nam:3,new_york:3,newli:3,next:3,next_pag:3,none:[2,3],noop:3,now:3,number:3,object:[2,3],object_typ:3,occur:3,off:3,offset:3,omnistack:[2,3],omnistack_clust:[1,2],omnistack_cluster_id:3,omnistack_cluster_nam:3,omnistackclust:[2,3],one:3,onli:3,oper:3,option:3,order:3,origin:3,out:3,ovc:2,ovc_client:1,ovc_ip:2,override_guest_valid:3,packag:1,page:[0,3],page_s:3,pagin:3,pair:3,param:3,paramet:3,pass:3,password:[2,3],path:2,pattern:3,per:3,point:3,polici:[1,2],policy_en:3,policy_id:3,policy_impact_report:3,policy_nam:3,posit:3,possibl:3,post:[2,3],potenti:3,potential_feature_level_max:3,potential_feature_level_min:3,power:3,power_off:3,power_on:3,prefer:3,present:3,prevent:3,previou:3,previous_pag:3,properti:2,propos:3,provid:3,put:[2,3],queri:3,rais:[2,3],rang:3,reach:3,recent:3,region:3,remot:3,remov:[2,3],renam:3,replac:3,replace_all_rul:3,replic:3,report:3,repres:3,request:[2,3],requir:3,reset:3,resiz:3,resourc:[1,2],resource_cli:3,resource_id:3,resource_obj:3,resource_url:3,resourcebas:3,resourcecli:3,respons:[2,3],rest:[2,3],restor:3,restore_origin:3,result:3,resum:3,retent:3,retriev:3,retun:3,retunrn:3,roll:3,rule:3,rule_id:3,run:3,safe:3,same:3,save:3,search:0,second:3,self:3,sensit:3,sent:3,sent_completion_aft:3,sent_completion_befor:3,sent_duration_max:3,sent_duration_min:3,sent_max:3,sent_min:3,separ:3,servic:3,set:3,set_backup_paramet:3,set_polici:3,set_policy_for_multiple_vm:3,set_retent:3,set_time_zon:3,shadow:3,share:3,should:3,show:3,show_optional_field:3,shut:3,shutdown:3,shutdown_virtual_control:3,simplviti:2,singl:3,size:3,size_max:3,size_min:3,snapshot:3,softwar:3,sort:3,sourc:[2,3],specif:[2,3],specifi:3,ssl:3,ssl_bundl:2,standard:3,standard_host:3,start:3,start_tim:3,state:3,statu:[2,3],stop:3,storag:3,storage_ip:3,store:[2,3],storeonceonprem:3,str:2,string:3,submodul:1,subpackag:1,success:3,successful:2,successfulli:3,suppli:2,support:2,suspend:3,sympliv:3,system:3,take:3,target:3,task:[1,2],task_affected_resourc:3,task_pending_st:3,templat:3,thi:[2,3],throughput:3,time:3,time_offset:3,time_zon:3,timeout:[2,3],token:2,trust:3,tupl:2,two:2,type:3,uid:3,underli:2,uniqu:[2,3],univers:3,unknown:3,updat:[2,3],update_statu:3,upgrad:3,upgrade_st:3,uri:[2,3],url:[2,3],use:3,used:[2,3],user:3,usernam:[2,3],uses:3,using:[2,3],utc:3,valid:[2,3],valu:3,variabl:2,version:3,virtual:[2,3],virtual_controller_nam:3,virtual_machin:[1,2],virtual_machine_id:3,virtual_machine_nam:3,virtual_machine_typ:3,virtualmachin:[2,3],vms:3,vmware:3,volum:3,vss:3,wait:3,wait_for_task:3,want:3,week:3,were:3,when:[2,3],where:3,which:2,wildcard:3,without:3,you:3,zone:3},titles:["Welcome to HPE SimpliVity Python SDK\u2019s documentation!","simplivity","simplivity package","simplivity.resources package"],titleterms:{backup:3,certif:3,cluster_group:3,connect:2,content:[2,3],datastor:3,document:0,except:2,external_stor:3,host:3,hpe:0,indic:0,modul:[2,3],omnistack_clust:3,ovc_client:2,packag:[2,3],polici:3,python:0,resourc:3,sdk:0,simpliv:[0,1,2,3],submodul:[2,3],subpackag:2,tabl:0,task:3,virtual_machin:3,welcom:0}})