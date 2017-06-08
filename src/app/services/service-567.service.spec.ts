/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service567Service } from './service-567.service';

describe('Service567Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service567Service]
    });
  });

  it('should ...', inject([Service567Service], (service: Service567Service) => {
    expect(service).toBeTruthy();
  }));
});
