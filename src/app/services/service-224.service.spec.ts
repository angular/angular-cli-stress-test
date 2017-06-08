/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service224Service } from './service-224.service';

describe('Service224Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service224Service]
    });
  });

  it('should ...', inject([Service224Service], (service: Service224Service) => {
    expect(service).toBeTruthy();
  }));
});
