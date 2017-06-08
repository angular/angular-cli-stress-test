/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service4Service } from '../../services/service-4.service';

@Component({
  selector: 'app-comp-4',
  templateUrl: './comp-4.component.html',
  styleUrls: ['./comp-4.component.css']
})
export class Comp4Component implements OnInit {

  constructor(private _service: Service4Service) { }

  ngOnInit() {
  }

}
