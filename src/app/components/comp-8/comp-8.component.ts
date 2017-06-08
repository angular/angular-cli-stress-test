/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service8Service } from '../../services/service-8.service';

@Component({
  selector: 'app-comp-8',
  templateUrl: './comp-8.component.html',
  styleUrls: ['./comp-8.component.css']
})
export class Comp8Component implements OnInit {

  constructor(private _service: Service8Service) { }

  ngOnInit() {
  }

}
