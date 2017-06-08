/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service167Service } from '../../services/service-167.service';

@Component({
  selector: 'app-comp-167',
  templateUrl: './comp-167.component.html',
  styleUrls: ['./comp-167.component.css']
})
export class Comp167Component implements OnInit {

  constructor(private _service: Service167Service) { }

  ngOnInit() {
  }

}
