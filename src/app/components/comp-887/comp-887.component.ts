/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service887Service } from '../../services/service-887.service';

@Component({
  selector: 'app-comp-887',
  templateUrl: './comp-887.component.html',
  styleUrls: ['./comp-887.component.css']
})
export class Comp887Component implements OnInit {

  constructor(private _service: Service887Service) { }

  ngOnInit() {
  }

}
