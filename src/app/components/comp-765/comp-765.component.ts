/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service765Service } from '../../services/service-765.service';

@Component({
  selector: 'app-comp-765',
  templateUrl: './comp-765.component.html',
  styleUrls: ['./comp-765.component.css']
})
export class Comp765Component implements OnInit {

  constructor(private _service: Service765Service) { }

  ngOnInit() {
  }

}
