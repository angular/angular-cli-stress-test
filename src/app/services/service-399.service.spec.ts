/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service399Service } from './service-399.service';

describe('Service399Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service399Service]
    });
  });

  it('should ...', inject([Service399Service], (service: Service399Service) => {
    expect(service).toBeTruthy();
  }));
});
