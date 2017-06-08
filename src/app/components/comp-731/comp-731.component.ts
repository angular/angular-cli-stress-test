/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service731Service } from '../../services/service-731.service';

@Component({
  selector: 'app-comp-731',
  templateUrl: './comp-731.component.html',
  styleUrls: ['./comp-731.component.css']
})
export class Comp731Component implements OnInit {

  constructor(private _service: Service731Service) { }

  ngOnInit() {
  }

}
