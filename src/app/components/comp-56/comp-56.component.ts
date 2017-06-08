/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service56Service } from '../../services/service-56.service';

@Component({
  selector: 'app-comp-56',
  templateUrl: './comp-56.component.html',
  styleUrls: ['./comp-56.component.css']
})
export class Comp56Component implements OnInit {

  constructor(private _service: Service56Service) { }

  ngOnInit() {
  }

}
