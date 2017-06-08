/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service360Service } from './service-360.service';

describe('Service360Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service360Service]
    });
  });

  it('should ...', inject([Service360Service], (service: Service360Service) => {
    expect(service).toBeTruthy();
  }));
});
