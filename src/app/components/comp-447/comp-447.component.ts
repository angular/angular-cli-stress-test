/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service447Service } from '../../services/service-447.service';

@Component({
  selector: 'app-comp-447',
  templateUrl: './comp-447.component.html',
  styleUrls: ['./comp-447.component.css']
})
export class Comp447Component implements OnInit {

  constructor(private _service: Service447Service) { }

  ngOnInit() {
  }

}
