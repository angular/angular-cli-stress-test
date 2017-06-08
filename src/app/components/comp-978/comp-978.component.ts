/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service978Service } from '../../services/service-978.service';

@Component({
  selector: 'app-comp-978',
  templateUrl: './comp-978.component.html',
  styleUrls: ['./comp-978.component.css']
})
export class Comp978Component implements OnInit {

  constructor(private _service: Service978Service) { }

  ngOnInit() {
  }

}
