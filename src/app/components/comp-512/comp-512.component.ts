/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service512Service } from '../../services/service-512.service';

@Component({
  selector: 'app-comp-512',
  templateUrl: './comp-512.component.html',
  styleUrls: ['./comp-512.component.css']
})
export class Comp512Component implements OnInit {

  constructor(private _service: Service512Service) { }

  ngOnInit() {
  }

}
