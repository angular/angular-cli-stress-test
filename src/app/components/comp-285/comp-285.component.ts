/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service285Service } from '../../services/service-285.service';

@Component({
  selector: 'app-comp-285',
  templateUrl: './comp-285.component.html',
  styleUrls: ['./comp-285.component.css']
})
export class Comp285Component implements OnInit {

  constructor(private _service: Service285Service) { }

  ngOnInit() {
  }

}
