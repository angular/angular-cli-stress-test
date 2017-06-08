/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service882Service } from '../../services/service-882.service';

@Component({
  selector: 'app-comp-882',
  templateUrl: './comp-882.component.html',
  styleUrls: ['./comp-882.component.css']
})
export class Comp882Component implements OnInit {

  constructor(private _service: Service882Service) { }

  ngOnInit() {
  }

}
