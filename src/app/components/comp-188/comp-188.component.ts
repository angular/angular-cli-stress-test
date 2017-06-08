/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service188Service } from '../../services/service-188.service';

@Component({
  selector: 'app-comp-188',
  templateUrl: './comp-188.component.html',
  styleUrls: ['./comp-188.component.css']
})
export class Comp188Component implements OnInit {

  constructor(private _service: Service188Service) { }

  ngOnInit() {
  }

}
