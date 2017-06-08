/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service926Service } from '../../services/service-926.service';

@Component({
  selector: 'app-comp-926',
  templateUrl: './comp-926.component.html',
  styleUrls: ['./comp-926.component.css']
})
export class Comp926Component implements OnInit {

  constructor(private _service: Service926Service) { }

  ngOnInit() {
  }

}
