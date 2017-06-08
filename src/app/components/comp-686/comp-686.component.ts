/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service686Service } from '../../services/service-686.service';

@Component({
  selector: 'app-comp-686',
  templateUrl: './comp-686.component.html',
  styleUrls: ['./comp-686.component.css']
})
export class Comp686Component implements OnInit {

  constructor(private _service: Service686Service) { }

  ngOnInit() {
  }

}
