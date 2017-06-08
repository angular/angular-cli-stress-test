/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service991Service } from '../../services/service-991.service';

@Component({
  selector: 'app-comp-991',
  templateUrl: './comp-991.component.html',
  styleUrls: ['./comp-991.component.css']
})
export class Comp991Component implements OnInit {

  constructor(private _service: Service991Service) { }

  ngOnInit() {
  }

}
