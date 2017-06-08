/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service561Service } from '../../services/service-561.service';

@Component({
  selector: 'app-comp-561',
  templateUrl: './comp-561.component.html',
  styleUrls: ['./comp-561.component.css']
})
export class Comp561Component implements OnInit {

  constructor(private _service: Service561Service) { }

  ngOnInit() {
  }

}
