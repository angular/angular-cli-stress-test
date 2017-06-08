/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service759Service } from '../../services/service-759.service';

@Component({
  selector: 'app-comp-759',
  templateUrl: './comp-759.component.html',
  styleUrls: ['./comp-759.component.css']
})
export class Comp759Component implements OnInit {

  constructor(private _service: Service759Service) { }

  ngOnInit() {
  }

}
