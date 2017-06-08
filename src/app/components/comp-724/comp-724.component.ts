/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service724Service } from '../../services/service-724.service';

@Component({
  selector: 'app-comp-724',
  templateUrl: './comp-724.component.html',
  styleUrls: ['./comp-724.component.css']
})
export class Comp724Component implements OnInit {

  constructor(private _service: Service724Service) { }

  ngOnInit() {
  }

}
