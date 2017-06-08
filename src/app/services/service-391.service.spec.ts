/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service391Service } from './service-391.service';

describe('Service391Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service391Service]
    });
  });

  it('should ...', inject([Service391Service], (service: Service391Service) => {
    expect(service).toBeTruthy();
  }));
});
