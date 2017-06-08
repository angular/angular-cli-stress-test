/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service415Service } from '../../services/service-415.service';

@Component({
  selector: 'app-comp-415',
  templateUrl: './comp-415.component.html',
  styleUrls: ['./comp-415.component.css']
})
export class Comp415Component implements OnInit {

  constructor(private _service: Service415Service) { }

  ngOnInit() {
  }

}
