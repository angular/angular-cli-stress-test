/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service448Service } from '../../services/service-448.service';

@Component({
  selector: 'app-comp-448',
  templateUrl: './comp-448.component.html',
  styleUrls: ['./comp-448.component.css']
})
export class Comp448Component implements OnInit {

  constructor(private _service: Service448Service) { }

  ngOnInit() {
  }

}
