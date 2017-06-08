/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service403Service } from '../../services/service-403.service';

@Component({
  selector: 'app-comp-403',
  templateUrl: './comp-403.component.html',
  styleUrls: ['./comp-403.component.css']
})
export class Comp403Component implements OnInit {

  constructor(private _service: Service403Service) { }

  ngOnInit() {
  }

}
