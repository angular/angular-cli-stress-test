/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service635Service } from './service-635.service';

describe('Service635Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service635Service]
    });
  });

  it('should ...', inject([Service635Service], (service: Service635Service) => {
    expect(service).toBeTruthy();
  }));
});
