/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service778Service } from './service-778.service';

describe('Service778Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service778Service]
    });
  });

  it('should ...', inject([Service778Service], (service: Service778Service) => {
    expect(service).toBeTruthy();
  }));
});
