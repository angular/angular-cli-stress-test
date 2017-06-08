/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service29Service } from '../../services/service-29.service';

@Component({
  selector: 'app-comp-29',
  templateUrl: './comp-29.component.html',
  styleUrls: ['./comp-29.component.css']
})
export class Comp29Component implements OnInit {

  constructor(private _service: Service29Service) { }

  ngOnInit() {
  }

}
