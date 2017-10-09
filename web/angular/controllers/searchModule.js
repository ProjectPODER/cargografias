


function searchModule(option,parameter,callback) {
  if(option === 'name'){
        var url = "https://quienesquienapi.herokuapp.com/v1/persons?name=/" + parameter + "/i"

        var xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function() {
            if (xmlHttp.readyState == 4 && xmlHttp.status == 200){
              var obj = JSON.parse(xmlHttp.response);
              obj.data.map(function(p) {
                var url = 'https://quienesquienapi.herokuapp.com/v1/memberships?person_id=/'+ p.simple + '/i'
                // var url = 'https://quienesquienapi.herokuapp.com/v1/memberships?person_id=/'+ p.name + '/i'
                var xmlHttp = new XMLHttpRequest();
                xmlHttp.onreadystatechange = function() {
                    if (xmlHttp.readyState == 4 && xmlHttp.status == 200){
                       p.memberships  = JSON.parse(xmlHttp.response);
                       p.end = ''
                       p.start = ''
                    }
                }
                xmlHttp.open("GET", url, true); // true for asynchronous
                xmlHttp.send(null);
              })
              callback(obj);
            }
        }
        xmlHttp.open("GET", url, true); // true for asynchronous
        xmlHttp.send(null);

  }

  if(option === 'toActivePerson'){

      var url = "https://quienesquienapi.herokuapp.com/v1/persons?name=/" + parameter + "/i"

      var xmlHttp = new XMLHttpRequest();
      xmlHttp.onreadystatechange = function() {
          if (xmlHttp.readyState == 4 && xmlHttp.status == 200){
            var obj = JSON.parse(xmlHttp.response);
            distinctRoles = []
            distinctYears = []
            distinctOrganizations = []
            distinctTerritories = []
            obj.data.map(function(p) {
              p.distinctRoles = []
              p.distinctYears = []
              p.distinctOrganizations = []
              p.distinctTerritories = []

              var url = 'https://quienesquienapi.herokuapp.com/v1/memberships?person_id=/'+ p.simple + '/i'
              // var url = 'https://quienesquienapi.herokuapp.com/v1/memberships?person_id=/'+ p.name + '/i'
              var xmlHttp = new XMLHttpRequest();
              xmlHttp.onreadystatechange = function() {
                  if (xmlHttp.readyState == 4 && xmlHttp.status == 200){
                    var activeMemberships = JSON.parse(xmlHttp.response);
                    p.memberships  = activeMemberships.data
                    p.memberships.map(function(o){
                    if(o.start_date !== undefined) {
                      o.start = o.start_date.slice(0, 4)
                    }else{
                      o.start = 1970
                    }
                    if(o.end_date !== undefined){
                      o.end = o.end_date.slice(0,4)
                    }else{
                      o.end = 1971
                    }
                    o.area = {'name':o.sob_org,'id':o.sob_org}
                    p.initials=' '
                    o.cargoProfileURL = 'undefined'

                    o.area_name=o.territory
                    o.class = 'electivo'
                    p.distinctRoles.push(o.role)
                    p.distinctYears.push(o.start_date)
                    p.distinctOrganizations.push(o.sob_org)
                    p.distinctTerritories.push(o.territory)

                    distinctRoles.push(o.role)
                    distinctYears.push(o.start_date)
                    distinctOrganizations.push(o.sob_org)
                    distinctTerritories.push(o.territory)

                    p.biography = 'undefined'
                    p.birth_date = 'undefined'
                    p.birth_place = 'undefined'
                    p.cargoProfileURL = 'undefined'
                    p.chequeado = false
                    p.contact_details = 'undefined'
                    p.death_date = null
                    p.full = true
                    p.given_name = 'undefined'
                    p.html_url = 'undefined'

                    p.images = []
                    p.index = 3309
                    p.periods = []
                    p.sumary = []
                    p.url = 'undefined'
                      // activeRoles.push(o.role)
                      // obj.Roles = activeRoles
                      //
                      // activeYears.push(o.start_date)
                      // obj.activeYears = activeYears
                      //
                      // activeOrganizations.push(o.sob_org)
                      // obj.activeOrganizations = activeOrganizations
                      //
                      // activeTerritories.push(o.territory)
                      // obj.activeTerritories = activeTerritories
                      //
                      // obj.created_at = obj.data[0].created_at
                      // obj.family_name = obj.data[0].family_name
                      // obj.first_name = obj.data[0].first_name
                      // obj.names = obj.data[0].names
                      // obj.name = obj.data[0].name
                      // obj.simple = obj.data[0].simple
                      // obj.user_id = obj.data[0].user_id
                      // obj._id = obj.data[0]._id
                      // obj.agregada = true
                      // p.territories = activeTerritories
                     //  if (p.activeOrganizations.indexOf(p.sob_org) === -1) {p.activeOrganizations.push(p.sob_org)}
                     //  if (p.activeRoles.indexOf(p.role) === -1) {p.activeRoles.push(p.role)}
                     //  if (p.activeYears.indexOf(p.start_date) === -1) {p.activeYears.push(p.start_date)}
                     //  if (p.activeTerritories.indexOf(p.territory) === -1) {p.activeTerritories.push(p.territory)}
                    })
                     obj.end = ''
                     obj.start = ''

                  }
              }
              xmlHttp.open("GET", url, true); // true for asynchronous
              xmlHttp.send(null);
            })

            callback(obj);
          }
      }
      xmlHttp.open("GET", url, true); // true for asynchronous
      xmlHttp.send(null);


}



  if(option === 'territory'){
        // var url = "https://quienesquienapi.herokuapp.com/v1/organizations?country=Argentina&offset=0"
        var url = "https://quienesquienapi.herokuapp.com/v1/memberships/distinct/territory"
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function() {
            if (xmlHttp.readyState == 4 && xmlHttp.status == 200){
              var obj = JSON.parse(xmlHttp.response);
              callback(obj);
            }
        }
        xmlHttp.open("GET", url, true); // true for asynchronous
        xmlHttp.send(null);

  }

  if(option === 'role'){
        // var url = "https://quienesquienapi.herokuapp.com/v1/contracts?terrytory=/" + parameter + "/i"
        var url = "https://quienesquienapi.herokuapp.com/v1/memberships?post_type&fields=role"

        var xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function() {
            if (xmlHttp.readyState == 4 && xmlHttp.status == 200){
              var obj = JSON.parse(xmlHttp.response);
              callback(obj);
            }
        }
        xmlHttp.open("GET", url, true); // true for asynchronous
        xmlHttp.send(null);

  }
}
