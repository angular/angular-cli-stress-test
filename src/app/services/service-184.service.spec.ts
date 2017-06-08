/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service184Service } from './service-184.service';

describe('Service184Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service184Service]
    });
  });

  it('should ...', inject([Service184Service], (service: Service184Service) => {
    expect(service).toBeTruthy();
  }));
});
