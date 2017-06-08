/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service139Service } from './service-139.service';

describe('Service139Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service139Service]
    });
  });

  it('should ...', inject([Service139Service], (service: Service139Service) => {
    expect(service).toBeTruthy();
  }));
});
