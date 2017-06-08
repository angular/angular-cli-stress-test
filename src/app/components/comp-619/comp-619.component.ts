/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service619Service } from '../../services/service-619.service';

@Component({
  selector: 'app-comp-619',
  templateUrl: './comp-619.component.html',
  styleUrls: ['./comp-619.component.css']
})
export class Comp619Component implements OnInit {

  constructor(private _service: Service619Service) { }

  ngOnInit() {
  }

}
