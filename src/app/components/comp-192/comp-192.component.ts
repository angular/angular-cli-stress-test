/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service192Service } from '../../services/service-192.service';

@Component({
  selector: 'app-comp-192',
  templateUrl: './comp-192.component.html',
  styleUrls: ['./comp-192.component.css']
})
export class Comp192Component implements OnInit {

  constructor(private _service: Service192Service) { }

  ngOnInit() {
  }

}
